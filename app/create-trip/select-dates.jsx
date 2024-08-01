import { View, Text , TouchableOpacity } from 'react-native'
import React,{useState , useContext} from 'react'
import CreateTitle from '../../components/CreateTitle'
import CalendarPicker from 'react-native-calendar-picker'
import moment from 'moment'
import { CreateTripContext } from '../../context/CreateTrip'
import { Link, router, useNavigation, useRouter } from "expo-router";

export default function selectdates() {

    const [startDate , setStartDate] = useState()
    const [endDate , setEndDate] = useState()
    const { tripData, setTripData } = useContext(CreateTripContext);
    const route = useRouter()
 

    function onDateChange(date,type){
      if (type === 'START_DATE'){
        setStartDate(moment(date))
      }else{
        setEndDate(moment(date))
      }
    }

    function OnDateSelectButton (){
        const total = endDate.diff(startDate,'days')
        setTripData({...tripData , 
            startDate:startDate,
            endDate:endDate,
            totalDate:total+1
        })
        route.push('/create-trip/select-budget')
    }


  return (
    <View style={{ marginTop: 25, padding: 25 }}>
      <CreateTitle title="" />
      <Text style={{fontWeight:'bold'  , fontSize : 35 , marginBottom:30}}>Travel Dates</Text>

      <CalendarPicker allowRangeSelection={true} minDate={new Date()} maxRangeDuration={5} onDateChange={onDateChange} />

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
  )
}