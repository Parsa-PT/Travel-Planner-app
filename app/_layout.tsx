import { Stack } from "expo-router";
import {CreateTripContext} from '../context/CreateTrip'
import { useState } from "react";



export default function RootLayout() {
  const[tripData , setTripData] = useState<any>([])

  return (
    <CreateTripContext.Provider value={{tripData,setTripData}}>
      <Stack screenOptions={{
      headerShown : false
    }}>
      {/* <Stack.Screen name="index" /> */}
      <Stack.Screen options={{
        headerShown:false
      }} name="(tabs)"/>
    </Stack>
    </CreateTripContext.Provider>
    
  );
}
