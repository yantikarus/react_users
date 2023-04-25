import React, { useState } from 'react'
import ErrorModal from './components/UI/ErrorModal'
import AddUser from './components/Users/AddUser'
import UserList from './components/Users/UserList'

const App = () => {
  const [users, setUsers] = useState([])
  const [errMsg, setErrMsg] = useState([])

  const handleAddUser=(userName, userAge)=>{
    console.log("the app js func :", userName, userAge)
    // using concat method
    // const newArr=[...users]
    // newArr.push({
    //   name: userName,
    //   age: userAge
    // })
    // using previous state
    setUsers((prevUserList)=>{
      return [...prevUserList, {name:userName ,age: userAge}]
    })
    
    // setUsers(newArr)
    // console.log(typeof(users))
    // console.log("the new array is ", newArr)
  }
  const handleError = (errTitle, errContent) =>{
    const newErrMsg = [...errMsg]
    newErrMsg.concat({
      title: errTitle,
      content:errContent
    })
    console.log(newErrMsg)
    setErrMsg(newErrMsg)
  }
  console.log(errMsg)
  return (
    <div>
      <AddUser handleAddUser={handleAddUser} handleError= {handleError}/>
      <UserList users={users}/>
      { errMsg.length > 1 && <ErrorModal title={errMsg.title} content={errMsg.content}/>}

    </div>
  )
}

export default App