import { View, Text } from 'react-native'
import React,{useEffect} from 'react'
import { Tabs } from 'expo-router'
import { useNavigation } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '../../constants/Colors';


export default function _layout() {



  return (
    <Tabs screenOptions={{
      headerShown:false,
      tabBarActiveTintColor: Colors.TabbarActive
    }}>
        <Tabs.Screen options={{
          tabBarIcon:({color})=><Ionicons name="location" size={24} color={color} />,
          tabBarLabel: 'My trip'
        }} name='mytrip'/>
        <Tabs.Screen options={{
          tabBarIcon:({color})=><Ionicons name="globe-sharp" size={24} color={color} />,
          tabBarLabel: 'Discover'
        }}  name='discover'/>
        <Tabs.Screen options={{
          tabBarIcon:({color})=><Ionicons name="person-circle" size={24} color={color} />,
          tabBarLabel: 'Profile'
        }} name='profile'/>
    </Tabs>
  )
}