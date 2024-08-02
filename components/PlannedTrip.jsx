import { View, Text , FlatList , Image , ScrollView } from 'react-native'
import React from 'react'
import { PLAN } from '../constants/Options'

export default function PlannedTrip() {
  return (
    <View  style={{marginTop:30}}>
        <Text style={{fontWeight:'bold' , fontSize:20}}>
        ⛵️ Plan Details
        </Text>

        <View style={{marginTop:10}}>
            <Text style={{fontSize:20}}>
                Day 1
            </Text>

   

        {PLAN.map((item , index)=>(
            <View key={index} style={{marginTop:15}}>
                 <View style={{marginBottom:30 , backgroundColor:'#ccd7fc', padding:20 , borderRadius:10}}>
                         <Image style={{width:'100%' , height:150 , borderRadius:10}} source={require("../assets/images/london.jpeg")} />
                         <View style={{width:'100%'}}>
                            <Text style={{fontSize:25 , marginTop:5 , fontWeight:'bold'}}>
                                {item.title}
                            </Text>
                            <Text style={{color:'gray' , marginTop:5}}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quis exercitationem tempora, doloremque iusto consectetur
                            </Text>
                            <Text style={{marginTop:5 , marginBottom:5}}>
                            🎫 Ticket price : Free
                            </Text>
                            <Text>
                            ⏱️ Time to travel : 3-4 hours
                            </Text>
                         </View>
                    </View>
            </View>
        ))}
            
        </View>
    </View>
  )
}