import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import CreateTitle from "../../components/CreateTitle";
import { CreateTripContext } from "../../context/CreateTrip";
import Ionicons from "@expo/vector-icons/Ionicons";
import moment from "moment";
import { useRouter } from "expo-router";

export default function reviewtrip() {
  const route = useRouter()  
  const { tripData, setTripData } = useContext(CreateTripContext);


  function BuildMytrip(){
        route.replace('/create-trip/generate-trip')
        setTripData({...tripData , build:true});
  }

  return (
    <View style={{ marginTop: 20, padding: 25 }}>
      <CreateTitle title="" />
      <Text style={{ fontWeight: "bold", fontSize: 35, marginBottom: 10 }}>
        Review your trip
      </Text>
      <Text style={{ fontWeight: "bold", marginBottom: 30 }}>
        Befor generate your trip , please review your selection
      </Text>

      {/* destination */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
          marginBottom: 25,
        }}
      >
        {/* <Ionicons name="location" size={34} color='black' /> */}
        <Text style={{ fontSize: 30 }}>🗺️</Text>
        <View>
          <Text
            style={{ fontSize: 20, fontWeight: "medium", color: "#bfbfbf" }}
          >
            Destination
          </Text>
          <Text style={{ fontSize: 20, fontWeight: "medium" }}>
            {tripData?.place}
          </Text>
        </View>
      </View>

      {/* travel info */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
          marginBottom: 25,
        }}
      >
        {/* <Ionicons name="location" size={34} color='black' /> */}
        <Text style={{ fontSize: 30 }}>🚌</Text>
        <View>
          <Text
            style={{ fontSize: 20, fontWeight: "medium", color: "#bfbfbf" }}
          >
            Who is traveling
          </Text>
          <Text style={{ fontSize: 20, fontWeight: "medium" }}>
            {tripData?.Count}
          </Text>
        </View>
      </View>

      {/* Date */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
          marginBottom: 25,
        }}
      >
        {/* <Ionicons name="location" size={34} color='black' /> */}
        <Text style={{ fontSize: 30 }}>🗓️</Text>
        <View>
          <Text
            style={{ fontSize: 20, fontWeight: "medium", color: "#bfbfbf" }}
          >
            Travel date
          </Text>
          <Text style={{ fontSize: 20, fontWeight: "medium" }}>
            {moment(tripData?.startDate).format("DD MMM") +
              "To" +
              moment(tripData?.endDate).format("DD MMM")}
          </Text>
        </View>
      </View>

      {/* budget */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
          marginBottom: 25,
        }}
      >
        {/* <Ionicons name="location" size={34} color='black' /> */}
        <Text style={{ fontSize: 30 }}>💰</Text>
        <View>
          <Text
            style={{ fontSize: 20, fontWeight: "medium", color: "#bfbfbf" }}
          >
            Budget
          </Text>
          <Text style={{ fontSize: 20, fontWeight: "medium" }}>
            {tripData?.budget}
          </Text>
        </View>
      </View>

      <TouchableOpacity
       onPress={BuildMytrip}
        style={{
          backgroundColor: "black",
          padding: 16,
          paddingHorizontal: 20,
          borderRadius: 10,
          shadowColor: "#bdbdbd",
          shadowOpacity: 10,
          marginTop: 30,
        }}
      >
        <Text style={{ color: "white", textAlign: "center" }}>
          Build my trip
        </Text>
      </TouchableOpacity>
    </View>
  );
}
