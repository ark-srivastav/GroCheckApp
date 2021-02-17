import React, { useEffect } from "react"
import { View,Text, TouchableOpacity } from "react-native"

export default function ScreenOne({navigation}){
    useEffect(()=>{
        console.log("**** useEffect Screen Details *****")
    },[])
    console.log(" *** Details *** ")
    return(
        <View style={{backgroundColor:"pink", flex:1, justifyContent:"center", alignItems:"center"}}>
            <Text>
                Hello from Details one
            </Text>
            <TouchableOpacity onPress={()=> navigation.push("ScreenOne")}>
                <Text>
                    Go to ONE
                </Text>
            </TouchableOpacity>
        </View>
    )   
}