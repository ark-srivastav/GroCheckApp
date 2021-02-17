import React, { useEffect } from "react"
import { View ,Text, TouchableOpacity } from "react-native"

export default function ScreenOne({navigation}){
    useEffect(()=>{
        console.log("**** useEffect Screen One *****")
    },[])
    console.log("**** One ****")
    return(
        <View style={{backgroundColor:"pink", flex:1, justifyContent:"center", alignItems:"center"}}>
            <Text>
                Hello from Screen one
            </Text>
            <TouchableOpacity onPress={()=> navigation.pop()}>
                <Text>
                    go to home 
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.setOptions({title:" Pooop !!"})}>
                <Text>
                    go to Pooop 
                </Text>
            </TouchableOpacity>
        </View>
    )   
}