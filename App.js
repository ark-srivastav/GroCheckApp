import * as React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { useEffect } from "react"

import Routes from "./app/config/Routes"
const Dayum = Routes()

function App() {
  useEffect(() => {
    console.log("********* useEffect App *********")
  }, [])
  console.log("***** App *****")
  return <NavigationContainer>{Dayum}</NavigationContainer>
}

export default App
