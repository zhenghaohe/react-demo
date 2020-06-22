import React from 'react'

function TabsButton({ children }) {
  return (
    <button className="TabsButton icon_button cta" type="submit">
      {children}
    </button>
  )
}
export default function LoginForm() {
  return (
    <form>
      <input
        type="text"
        id="login:email"
        className="inputField"
        placeholder="you@example.com"
      />
      <input
        id="login:password"
        type="password"
        className="inputField"
        placeholder="Password"
      />

      <div>
        <label>
          <input
            className="passwordCheckbox"
            type="checkbox"
            defaultChecked={false}
          />{' '}
          show password
        </label>
      </div>

      <TabsButton>
        <span>Login</span>
      </TabsButton>
    </form>
  )
}
