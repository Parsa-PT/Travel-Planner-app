import { View, Text , TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import StartNewTripCard from '../../components/mytrip/StartNewTripCard';

export default function mytrip() {
  const [userTrip , setUserTrip] = useState([])

  return (
    <View style={{
      marginTop:40,
      padding:25
    }}>
      <View style={{ width:'100%' , display:'flex' , flexDirection:'row' ,  justifyContent:'space-between' , alignItems:'center'}}>
        <Text style={{fontSize:35 , fontWeight:'bold'}}>
          My trip
        </Text>
        <Ionicons name="add-circle-sharp" size={44}  color="black" />
      </View>

      {userTrip?.length === 0 ?
        <StartNewTripCard/>
        :null
      }
      
      
    </View>
  )
}