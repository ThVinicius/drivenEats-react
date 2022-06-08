import { createContext, useState } from 'react'

export const UserContext = createContext()

export function AuthProvider(props) {
  const [user, setUser] = useState({
    mainCourse: null,
    drink: null,
    dessert: null,
    button: false
  })
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  )
}
