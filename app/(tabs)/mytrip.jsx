import { View, Text , TouchableOpacity } from 'react-native'
import React,{useState , useEffect , useContext} from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import StartNewTripCard from '../../components/mytrip/StartNewTripCard';
import { useRouter } from 'expo-router';
import { CreateTripContext } from '../../context/CreateTrip';
import UserTripList from '../../components/mytrip/UserTripList';

export default function mytrip() {
  const [userTrip , setUserTrip] = useState([])
  const [check , setCheck] = useState(false)
  const route = useRouter()
  const { tripData, setTripData } = useContext(CreateTripContext);



  useEffect(()=>{
     if(tripData?.build === true){
      setCheck(true)
     }
  },[])


  return (
    <View style={{
      marginTop:40,
      padding:25
    }}>
      <View style={{ width:'100%' , display:'flex' , flexDirection:'row' ,  justifyContent:'space-between' , alignItems:'center'}}>
        <Text style={{fontSize:35 , fontWeight:'bold'}}>
          My trip
        </Text>
        <TouchableOpacity onPress={()=> route.push('/create-trip/search-place')}>
        <Ionicons name="add-circle-sharp" size={44}  color="black" />

        </TouchableOpacity>
      </View>

      {check === false ?
        <StartNewTripCard/>
        
        :<UserTripList data={tripData}/>
      }
      
      
    </View>
  )
}