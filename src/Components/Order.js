import React from 'react'

export default function Order({ order }) {
    return (
        <div className='order'>
            <h3>Order {order.id}</h3>
            <p>Name: {order.name}</p>
            <p>Size: {order.size}</p>
            {order.toppings.length > 0 ? <p>Toppings:</p> : ''}
            <ul>
                {
                    order.toppings
                    ? order.toppings.map(topping => {
                        return <li className='topping' key={topping}>{topping}</li>
                    })
                    : ''
                }
            </ul>
            { order.instructions ? <p>Special Instructions: {order.instructions}</p> : '' }
        </div>
    )
}