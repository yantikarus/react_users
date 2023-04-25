import React from 'react'
// import Card from '../UI/Card'
// import classes from './SingleUser.module.css'

const SingleUser = (props) => {
    console.log("the list comp",props)
    return (

        <li>
            {props.name} ({props.age} years old)
        </li>

    )
}

export default SingleUser