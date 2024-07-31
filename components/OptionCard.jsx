import { View, Text } from 'react-native'
import React from 'react'

export default function OptionCard({item, SelectedTraveler}) {
    

  return (
    <View style={[{padding:20 , display:'flex' , flexDirection:'row', justifyContent:'space-between' , alignItems:'center', backgroundColor:'#e0e0e0' , borderRadius:6}, SelectedTraveler?.id==item?.id&&{borderWidth:3 , borderColor:'blue'}]}>
        <View>
            <Text style={{fontSize:20 , fontWeight:'bold'}}>
                {item.title}
            </Text>
            <Text style={{fontSize:14 , fontWeight:'smibold'}}>
                {item.desc}
            </Text>
        </View>
        <Text style={{fontSize:30}}>
            {item.icon}
        </Text>
    </View>
  )
}