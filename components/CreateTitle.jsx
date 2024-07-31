import { View, Text , TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation , useRouter } from 'expo-router'

export default function CreateTitle({title}) {
    const route = useRouter()
  return (
    
      <TouchableOpacity style={{display:'filex' , flexDirection:'row' , alignItems:'center'  , marginBottom:30}} onPress={()=> route.back()}>
            <Ionicons name="arrow-back" size={25} color="black" />
            <Text style={{fontSize:23 , marginLeft:10}}>{title}</Text>
        </TouchableOpacity>

  )
}