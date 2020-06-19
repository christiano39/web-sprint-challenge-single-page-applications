import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(props) {
    return (
        <div className='home'>
            <h2>Welcome to Lambda eats!</h2>
            <p><Link to='/pizza'>Click here</Link> to get started on your order</p>
        </div>
    )
}