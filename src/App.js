import React, { useState, useEffect } from "react";
import { Route, Switch, useHistory } from 'react-router-dom'
import Home from './Components/Home'
import PizzaForm from './Components/PizzaForm'
import Order from './Components/Order'
import Nav from './Components/Nav'
import * as Yup from 'yup'
import formSchema from './validation/formSchema'
import axios from "axios";
import './App.css'

const initialFormData = {
  name: '',
  size: 'Medium',
  toppings: {
    peperoni: false,
    olives: false,
    mushrooms: false,
    bacon: false,
  },
  instructions: '',
}

const initialFormErrors = {
  name: '',
}

const initialDisabled = true
const initialOrders = []
const POST_URL = 'https://reqres.in/api/orders'

const App = () => {
  const [formData, setFormData] = useState(initialFormData)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)
  const [orders, setOrders] = useState(initialOrders)
  const history = useHistory()

  const postNewOrder = newOrder => {
    axios.post(POST_URL, newOrder)
      .then(res => {
        console.log(res)
        setOrders([...orders, res.data])
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        setFormData(initialFormData)
      })
  }
  
  const onInputChange = e => {
    const { name, value } = e.target

    Yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: ""
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        })
      })

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const onCheckboxChange = e => {
    const { name, checked } = e.target

    setFormData({
      ...formData,
      toppings: {
        ...formData.toppings,
        [name]: checked,
      }
    })
  }

  const onSubmit = e => {
    e.preventDefault()

    const newOrder = {
      name: formData.name.trim(),
      size: formData.size,
      toppings: Object.keys(formData.toppings)
        .filter(toppingName => formData.toppings[toppingName]),
      instructions: formData.instructions,
    }

    postNewOrder(newOrder)

    history.push('/order')
  }

  useEffect(() => {
    formSchema.isValid(formData).then(valid => {
      setDisabled(!valid);
    })
  }, [formData])
  
  return (
    <div className='app'>
      <h1>Lambda Eats</h1>

      <Nav />
      
      <Switch>
        <Route path='/pizza'>
          <PizzaForm 
            formData={formData} 
            onInputChange={onInputChange} 
            onCheckboxChange={onCheckboxChange}
            onSubmit={onSubmit}
            formErrors={formErrors}
            disabled={disabled}
          />
        </Route>

        <Route path='/order'>
          {orders.length > 0 ? <h2>Congrats! Your order is on its way!</h2> : ''}
          {
            orders.length > 0
            ? orders.map(order => <Order order={order} key={order.id} />)
            : <h2>Nothing ordered yet :(</h2>
          }
        </Route>

        <Route path='/'>
          <Home />
        </Route>
      </Switch>

    </div>
  );
};
export default App;
