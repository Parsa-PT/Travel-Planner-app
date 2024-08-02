import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useContext } from "react";
import { CreateTripContext } from "../../context/CreateTrip";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import HotelList from "../../components/HotelList";
import PlannedTrip from "../../components/PlannedTrip";
import moment from "moment";

export default function DetailPage() {
  const { tripData, setTripData } = useContext(CreateTripContext);

  const route = useRouter();

  return (
    <View style={{ position: "relative" }}>
      <ScrollView nestedScrollEnabled={true}>
        <TouchableOpacity
          style={{ position: "absolute", top: 60, zIndex: 20, left: 30 }}
          onPress={() => route.back()}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: 40,
              height: 40,
              backgroundColor: "#d4d4d4",
              justifyContent: "center",
              borderRadius: 100,
            }}
          >
            <Ionicons name="arrow-back" size={25} color="black" />
          </View>
        </TouchableOpacity>
        <Image  source={require("../../assets/images/london.jpeg")} />

        <View
          style={{
            height: "100%",
            borderTopRightRadius: 30,
            marginTop: -80,
            backgroundColor: "white",
            borderTopLeftRadius: 30,
            padding: 20,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 30, marginBottom: 5 }}>
            {tripData?.place}
          </Text>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text style={{ marginBottom: 6, fontSize: 18, color: "#c9c9c9" }}>
            {moment(tripData?.startDate).format("DD MMM yyy")} -
            </Text>
            <Text style={{ marginBottom: 6, fontSize: 18, color: "#c9c9c9" }}>
            {moment(tripData?.endDate).format("DD MMM yyy")}
            </Text>
          </View>
          <Text style={{ marginBottom: 5, fontSize: 18, color: "#c9c9c9" }}>
            🚌 {tripData?.Count}
          </Text>

          <View
            style={{
              marginTop: 40,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-start",
              borderWidth: 2,
              padding: 10,
              borderColor: "#c9c9c9",
              borderRadius: 10,
            }}
          >
            <View>
              <Text style={{ fontWeight: "bold", fontSize: 30 }}>
                ✈️ Flighs
              </Text>
              <Text style={{ marginBottom: 6, marginTop: 6, fontSize: 16 }}>
                Airline : Qatar
              </Text>
              <Text style={{ fontSize: 16, marginBottom: 10 }}>
                price : $100 - $300
              </Text>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: "black",
                borderRadius: 10,
                shadowColor: "#bdbdbd",
                shadowOpacity: 10,
                width: 120,
                paddingVertical: 10,
              }}
            >
              <Text style={{ color: "white", textAlign: "center" }}>
                Book here
              </Text>
            </TouchableOpacity>
          </View>

          <HotelList />
          <PlannedTrip />
        </View>
      </ScrollView>
    </View>
  );
}
