import React from 'react'
import './App.css'
import Tabs from './Tabs'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

function App() {
  const tabData = [
    {
      label: 'Login',
      content: <LoginForm />,
    },
    {
      label: 'Signup',
      content: <SignupForm />,
    },
    {
      label: 'About',
      content: 'Some random content',
    },
  ]
  return (
    <div className="App">
      <div className="LoggedOut">
        <Tabs data={tabData} tabPosition="up" disabled={[]} />
      </div>
    </div>
  )
}

export default App
