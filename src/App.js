import React, { useState } from "react";
import { Route, Switch } from 'react-router-dom'
import Home from './Components/Home'
import PizzaForm from './Components/PizzaForm'
import * as Yup from 'yup'
import formSchema from './validation/formSchema'

const initialFormData = {
  name: '',
  size: '',
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

const App = () => {
  const [formData, setFormData] = useState(initialFormData)
  const [formErrors, setFormErrors] = useState(initialFormErrors)

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
  }
  
  return (
    <div className='app'>
      <h1>Lambda Eats</h1>
      
      <Switch>
        <Route path='/pizza'>
          <PizzaForm 
            formData={formData} 
            onInputChange={onInputChange} 
            onCheckboxChange={onCheckboxChange}
            onSubmit={onSubmit}
            formErrors={formErrors}
          />
        </Route>

        <Route path='/'>
          <Home />
        </Route>
      </Switch>

    </div>
  );
};
export default App;
