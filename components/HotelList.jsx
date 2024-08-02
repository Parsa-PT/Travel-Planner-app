import { View, Text , FlatList , Image } from 'react-native'
import React from 'react'
import { HOTEL } from '../constants/Options'

export default function HotelList() {
  return (
    <View style={{marginTop:30}}>
       <Text style={{fontWeight:'bold' , fontSize:20}}>
         🏨 Hotel Recommedation
       </Text>

        <FlatList
            data={HOTEL}
            style={{marginTop:20}}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item})=>(
                <View style={{marginRight:20}}>
                    <Image style={{width:170 , height:120 , borderRadius:10}} source={item.pic} />
                    <View style={{marginTop:4}}>
                        <Text style={{fontSize:16}}>{item.title}</Text>
                    </View>
                    <View style={{marginTop:4}}>
                        <Text style={{fontSize:16}}>⭐️ {item.star}</Text>
                    </View>
                </View>
            )}
        />
       
    </View>
  )
}