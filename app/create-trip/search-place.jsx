import { View, Text , TextInput , TouchableOpacity } from 'react-native'
import React,{useEffect , useContext , useState} from 'react'
import { useNavigation , useRouter } from 'expo-router'
import { CreateTripContext } from '../../context/CreateTrip'
import CreateTitle from '../../components/CreateTitle'


export default function searchPlace() {



    const navigate = useNavigation()
    const route = useRouter()
    const[place , setPlace] = useState('')

    const {tripData , setTripData} = useContext(CreateTripContext)

    function AddPlace(){
        setTripData({...tripData , place})
        route.push('/create-trip/select-traveler')
    }

  
    // useEffect(()=>{
    //     navigate.setOptions({
    //         headerShown: true,
    //         headerTransparent: true,
    //         headerTitle: 'Search'
    //     })
    // },[])

  return (
    <View style={{height:'100%' , marginTop:25 , padding:25  }}>
         {/*title maker  */}
    <CreateTitle title='Search Your Place'/>   


     <TextInput onChangeText={(v)=> setPlace(v)} placeholder='Search place' style={{width:'100%' , borderRadius:7 , borderWidth:1 , borderColor:'black', marginBottom:20 , height:40 , paddingHorizontal:5}}/>
     <TouchableOpacity onPress={AddPlace} style={{backgroundColor:'black' , padding:12 , width:100, paddingHorizontal:20 , borderRadius:10 , shadowColor:'#bdbdbd' , shadowOpacity:20}}>
          <Text  style={{ color:'white' , textAlign:'center'}}>Next</Text>
        </TouchableOpacity>
    </View>
  )
}