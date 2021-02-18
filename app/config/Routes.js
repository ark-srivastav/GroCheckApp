import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import Details from "../Details"
import Home from "../Home"
import ScreenOne from "../ScreenOne"
const Routes=()=> {
  const Root = createStackNavigator()
  return (
    <Root.Navigator initialRouteName="Home" screenOptions={{
        headerShown:false
    }}>
      <Root.Screen name="Home" component={Home} />
      <Root.Screen name="Details" component={Details} />
      <Root.Screen name="ScreenOne" component={ScreenOne} />
    </Root.Navigator>
  )
}
export default Routes