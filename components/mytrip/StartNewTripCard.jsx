import { View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';

export default function StartNewTripCard() {
    const route = useRouter()

  return (
    <View>
      <View style={{marginTop:60 , display:'flex' , flexDirection:'column' , alignItems:'center' , gap:20}}>
        
        <Ionicons name="location" size={44} color='black' />
        <Text style={{fontWeight:'bold' , fontSize:25 , marginBottom:10}}>No trips planned yet</Text>
        <Text style={{textAlign:'center'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, dignissimos ipsum dolor blanditiis temporibus iure nobis amet quae beatae accusamus incidunt</Text>
        <TouchableOpacity onPress={()=> route.push('/create-trip/search-place')} style={{backgroundColor:'black' , padding:12 , paddingHorizontal:20 , borderRadius:10 , shadowColor:'#bdbdbd' , shadowOpacity:10}}>
          <Text  style={{ color:'white'}}>Start a new trip</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}