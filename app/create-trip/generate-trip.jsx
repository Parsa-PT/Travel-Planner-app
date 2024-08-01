import { View, Text , Image } from 'react-native'
import React,{useEffect} from 'react'
import { useRouter } from 'expo-router'

export default function generatetrip() {

    const route = useRouter()

    useEffect(()=>{
        setTimeout(()=>{
            route.replace('(tabs)/mytrip')
        },3000)
    },[])

  return (
    <View style={{ height:'100%' , backgroundColor:'white' ,  marginTop: 60, padding: 25 }}>
      <Text style={{ fontWeight: "bold", fontSize: 35, marginBottom: 20 , textAlign:'center' }}>Please wait ....</Text>
      <Text style={{ fontWeight: "bold", fontSize: 20, marginBottom: 20 , textAlign:'center' }}>We are working to generate your dream trip</Text>

      <View>
        <Image style={{width:'100%' , height:250 , objectFit:'contain'}} source={require('../../assets/images/smartphone.gif')}/>
      </View>
    </View>
  )
}