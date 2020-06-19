import React from 'react'

export default function PizzaForm(props){
    const { 
        formData, 
        onInputChange, 
        onCheckboxChange, 
        onSubmit, 
        formErrors, 
        disabled 
    } = props
    
    return (
        <div className='order-form'>
            <h2>Create your pizza</h2>
            <div className='name-err'>{formErrors.name}</div>
            <form onSubmit={onSubmit}>
                <label>Name:&nbsp;
                    <input 
                        type='text'
                        name='name'
                        value={formData.name}
                        onChange={onInputChange}
                    />
                </label>
                <br />
                <label>Pizza Size:&nbsp;
                    <select
                        onChange={onInputChange}
                        value={formData.size}
                        name='size'
                    >
                        {/* <option value=''>-- Select a size --</option> */}
                        <option value='Small'>Small</option>
                        <option value='Medium'>Medium</option>
                        <option value='Large'>Large</option>
                    </select>
                </label>

                <div className='toppings-checkboxes'>
                    <h4>Toppings</h4>
                    <label>Peperoni&nbsp;
                        <input 
                            name='peperoni'
                            type='checkbox'
                            onChange={onCheckboxChange}
                            checked={formData.toppings.peperoni}
                        />
                    </label>
                    <br />
                    <label>Olives&nbsp;
                        <input 
                            name='olives'
                            type='checkbox'
                            onChange={onCheckboxChange}
                            checked={formData.toppings.olives}
                        />
                    </label>
                    <br />
                    <label>Mushrooms&nbsp;
                        <input 
                            name='mushrooms'
                            type='checkbox'
                            onChange={onCheckboxChange}
                            checked={formData.toppings.mushrooms}
                        />
                    </label>
                    <br />
                    <label>Bacon&nbsp;
                        <input 
                            name='bacon'
                            type='checkbox'
                            onChange={onCheckboxChange}
                            checked={formData.toppings.bacon}
                        />
                    </label>
                </div>
                <br />
                <label>Special Instructions:&nbsp;
                    <input
                        type='text'
                        name='instructions'
                        onChange={onInputChange}
                        value={formData.instructions}
                    />
                </label>
                <br />
                <button disabled={disabled}>Add to Order</button>
            </form>
        </div>
    )
}