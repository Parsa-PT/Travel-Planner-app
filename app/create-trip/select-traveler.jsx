import { View, Text, FlatList , TouchableOpacity } from 'react-native'
import React,{useState , useContext , useEffect} from 'react'
import { useNavigation , useRouter } from 'expo-router'
import CreateTitle from '../../components/CreateTitle'
import { SELECT_TRAVELER } from '../../constants/Options';
import OptionCard from '../../components/OptionCard';
import { CreateTripContext } from '../../context/CreateTrip';



export default function selecttraveler() {
    const [SelectedTraveler , setSelectedTraveler] = useState()
    const {tripData , setTripData} = useContext(CreateTripContext)

    useEffect(()=>{
        setTripData({...tripData , Count:SelectedTraveler});
    },[SelectedTraveler])
    
    

  return (
    <View style={{ marginTop:25 , padding:25 }}>
      <CreateTitle title=''/>

      <Text  style={{fontWeight:'bold' , fontSize:35}}>
        Who's Traveling
      </Text>
      <Text style={{marginBottom:10}}>
        Choose your traveles
      </Text>

      <FlatList
               style={{marginBottom:20}}
                data={SELECT_TRAVELER}
                renderItem={({item , index})=>(
               
                        <TouchableOpacity onPress={()=> setSelectedTraveler(item)} style={{ marginVertical:10}}>
                            <OptionCard item={item} SelectedTraveler={SelectedTraveler}/>
                        </TouchableOpacity>
                    
                        
                    )}  
            />

        <TouchableOpacity  style={{backgroundColor:'black' , padding:16 , paddingHorizontal:20 , borderRadius:10 , shadowColor:'#bdbdbd' , shadowOpacity:10}}>
          <Text  style={{ color:'white' , textAlign:'center'}}>Continue</Text>
        </TouchableOpacity>  
    </View>
  )
}