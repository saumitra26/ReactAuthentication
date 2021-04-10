import React from 'react'
import {useState,useEffect} from 'react'
const Home = (props) => {
    
    return (
        <div>
           {props.name?'Hi'+props.name: 'You are not logged in'}
        </div>
    )
}

export default Home
