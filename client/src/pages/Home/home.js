import React from 'react'

const Home = (props) => {
  console.log("Props", props)
  return (
    <div>
      Welcome, {props.user.login.email}
    </div>
  )
}

export default Home

