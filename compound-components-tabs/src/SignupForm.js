import React, { Fragment } from 'react'

function TabsButton({ children }) {
  return (
    <button className="TabsButton icon_button cta" type="submit">
      {children}
    </button>
  )
}

function TextInput({ id, label, type = 'text' }) {
  return (
    <Fragment>
      <input id={id} placeholder={label} type={type} required />
    </Fragment>
  )
}

export default function SignupForm() {
  return (
    <form className="SignupForm">
      <TextInput id="displayName" label="Display Name" />
      <TextInput id="photoURL" label="Avatar URL" />
      <TextInput id="email" label="Email" />
      <TextInput id="password" label="Password" />

      <TabsButton>
        <span>Sign Up</span>
      </TabsButton>
    </form>
  )
}
