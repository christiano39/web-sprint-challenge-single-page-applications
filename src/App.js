import React, { useState } from "react";
import { Route, Switch } from 'react-router-dom'
import Home from './Components/Home'
import PizzaForm from './Components/PizzaForm'
import * as Yup from 'yup'

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

const App = () => {
  const [formData, setFormData] = useState(initialFormData)

  const onInputChange = e => {
    const { name, value } = e.target

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
  
  return (
    <div className='app'>
      <h1>Lambda Eats</h1>
      
      <Switch>
        <Route path='/pizza'>
          <PizzaForm />
        </Route>

        <Route path='/'>
          <Home />
        </Route>
      </Switch>

    </div>
  );
};
export default App;
