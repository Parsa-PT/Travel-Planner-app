import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useState , useContext , useEffect } from "react";
import { Link, router, useNavigation, useRouter } from "expo-router";
import CreateTitle from "../../components/CreateTitle";
import { SELECT_BUDGET } from "../../constants/Options";
import OptionCard from "../../components/OptionCard";
import { CreateTripContext } from "../../context/CreateTrip";

export default function selectbudget() {
  const [SelectedTraveler, setSelectedTraveler] = useState();
  const { tripData, setTripData } = useContext(CreateTripContext);
  const route = useRouter()


    useEffect(()=>{
        setSelectedTraveler&&setTripData({...tripData , 
            budget : SelectedTraveler?.title
        });

    },[SelectedTraveler])


    function OnDateSelectButton (){
        
        route.push('/create-trip/review-trip')
    }


  return (
    <View style={{ marginTop: 25, padding: 25 }}>
      <CreateTitle title="" />
      <Text style={{ fontWeight: "bold", fontSize: 35, marginBottom: 15 }}>
        Budget
      </Text>
      <Text style={{ fontWeight: "bold", marginBottom: 30 }}>
        Choose spending habit for trip
      </Text>

      <FlatList
        data={SELECT_BUDGET}
        renderItem={({ item, index }) => (
          <TouchableOpacity style={{marginBottom:20}} onPress={()=> setSelectedTraveler(item)} key={index}>
            <OptionCard item={item} SelectedTraveler={SelectedTraveler} />
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity
       onPress={OnDateSelectButton}
        style={{
          backgroundColor: "black",
          padding: 16,
          paddingHorizontal: 20,
          borderRadius: 10,
          shadowColor: "#bdbdbd",
          shadowOpacity: 10,
          marginTop:30
        }}
      >
       
          <Text style={{ color: "white", textAlign: "center" }}>Continue</Text>
       
      </TouchableOpacity>   
    </View>
  );
}
