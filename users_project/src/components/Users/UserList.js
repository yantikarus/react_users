import React from 'react'
import Card from '../UI/Card'
import SingleUser from './SingleUser'
import classes from "./UserList.module.css"

const UserList = (props) => {
    console.log("the UserList comp", props)
    const users = props.users
    console.log(users)
    return (
        <Card className={classes.users}>
        <ul>
            {users.map(user => <SingleUser name ={user.name} age={user.age} key={user.age}/>)}
        </ul>
        </Card>

    )
}

export default UserList