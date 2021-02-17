import React, { useEffect } from "react"
import { View,Text, TouchableOpacity } from "react-native"

export default function Home({navigation}){
    useEffect(()=>{
        console.log("**** useEffect Screen Home *****")
    },[])
    console.log("**** Home ********")
    return(
        <View style={{backgroundColor:"pink", flex:1, justifyContent:"center", alignItems:"center"}}>
            <Text>
                Hello from Home one
            </Text>
            <TouchableOpacity onPress={()=> navigation.push("Details")}>
                <Text>
                    Go to deatils
                </Text>
            </TouchableOpacity>
        </View>
    )   
}