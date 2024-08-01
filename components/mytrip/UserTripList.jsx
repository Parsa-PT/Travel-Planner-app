import { View, Text , Image , TouchableOpacity } from 'react-native'
import React from 'react'
import moment from 'moment'
import { useRouter } from 'expo-router'

export default function UserTripList({data}) {

    const route = useRouter()

  return (
    <View style={{marginTop:40}}>
      <Image style={{width:'100%' , height:300 , borderRadius:20}} source={require('../../assets/images/plan.png')}/>
      <View style={{display:'flex' , flexDirection:'column' , justifyContent:'space-between'}}>
       
            <Text style={{fontSize:30 , fontWeight:'bold' , marginTop:10}}>
                {data?.place}
            </Text>
            <View style={{display:'flex' ,  flexDirection:'row' ,  justifyContent:'space-between' , alignItems:'center' , marginTop:5}}>
                <Text style={{fontSize:17  , marginTop:5}}>
                {moment(data?.startDate).format("DD MMM") +' '+
              "To" +' '+
              moment(data?.endDate).format("DD MMM")}
                </Text>
                <Text style={{display:'flex', alignItems:'center', justifyContent:'center' , textAlign:'center'}}>
                🚌 {data?.Count}
                </Text>
            </View>

        <TouchableOpacity
        onPress={()=> route.push('/trip-details')}
        style={{
          backgroundColor: "black",
          padding: 16,
          paddingHorizontal: 20,
          borderRadius: 10,
          shadowColor: "#bdbdbd",
          shadowOpacity: 10,
          marginTop:20
        }}
      >
       
          <Text style={{ color: "white", textAlign: "center" }}>See your plan</Text>
       
      </TouchableOpacity>
       
      </View>
    </View>
  )
}