 import React from 'react'
 import UserMapping from './component/UserMapping';

function App() {
  let users=[
    {
      id:1,
      name:'smruti',
      email:'smruti@gmail.com',
      age:24,
      phone:9090956092
    },
    {
      id:2,
      name:'nikhil',
      email:'nikhil@gmail.com',
      age:23,
      phone:9900303090
    },
    {
      id:3,
      name:'suresh',
      email:'suresh@gmail.com',
      age:35,
      phone:8260605124
    },
    {
      id:4,
      name:'harish',
      email:'harish@gmail.com',
      age:22,
      phone:9777940995
    },
    {
      id:5,
      name:'basanta',
      email:'basanta@gmail.com',
      age:28,
      phone:8280166140
    },
    {
      id:6,
      name:'ramesh',
      email:'ramesh@gmail.com',
      age:44,
      phone:7848963943
    }

  ]

  return (
    <React.Fragment> 
      <UserMapping users={users}/>
    </React.Fragment>
  )
}

export default App
