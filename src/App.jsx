import React, { useEffect } from "react"
import { getData } from "./modules/dataAction"
import { useDispatch } from "react-redux"

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    getData(dispatch)
  }, [])
  
  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}

export default App
