import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import styles from './AddUser.module.css';

const AddUser = (props) => {
    const [username, setUsername] = useState(" ")
    const [userAge, setUserAge] = useState(0)


    const handleUsername = event =>{
        setUsername(event.target.value)   
    }

    const handleUserAge = event =>{
        setUserAge(event.target.value)
    }
    const handleSubmit =(event)=>{
        event.preventDefault()
        if(username.trim().length === 0){
            props.handleError("No name found", "Name cannot be empty")
            return;
        }
        if(+userAge < 1){
            return;
        }
        props.handleAddUser(username, userAge)
        setUsername(" ")
        setUserAge(0)
    }

    return (
        <Card className={styles.input}>
            <form onSubmit={handleSubmit}>
                <div>
                <label htmlFor="username">Name</label>
                <input id="username" type="text" onChange={handleUsername} value={username}/>
                </div>
                <div>
                <label htmlFor="age"> Age</label>
                <input id="age" type="number" onChange={handleUserAge} value={userAge} min="0" max="100"/>
                </div>
                <Button type="submit">
                Add user
                </Button>
                
                
            </form>
        </Card>
    )
}

export default AddUser