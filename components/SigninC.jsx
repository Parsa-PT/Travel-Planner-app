import { View , Text , TouchableOpacity, TextInput, ToastAndroid} from "react-native";
import { StyleSheet } from "react-native";
import { useRouter , useNavigation } from "expo-router";
import { useEffect , useState } from "react";
import Ionicons from '@expo/vector-icons/Ionicons';





export default function SignIn() {
    const [email , setEmail] = useState('');
    const [pass , setPass] = useState('');

    const navigation = useNavigation()
    const route = useRouter()
    
    useEffect(()=>{
        navigation.setOptions({
            headerShown:false
        })
    },[])

    function SubmitHandler(){
        if(!email&&!pass){
            ToastAndroid.show('Please enter Email and Password',ToastAndroid.CENTER)
            
        }else{
            console.log(email , pass)
        }
    }


    return(
        <View style={{ marginTop:40 , padding:20}}>
            <TouchableOpacity onPress={()=> route.back()}>
             <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>

           <View style={{marginBottom:40 , marginTop:20}}>
           <Text style={{fontSize:30 , fontWeight:'bold' , marginBottom:10}}>
               Let's sign You in
            </Text>
            <Text style={{fontSize:20 ,  marginBottom:10}}>
               welcome back
            </Text>
            <Text style={{fontSize:20 ,  marginBottom:10}}>
               You've been missed !
            </Text>
           </View>

            <View style={{marginBottom:20}}>
                <Text style={{marginBottom:10}}>Email :</Text>
                <TextInput onChangeText={(e)=> setEmail(e)} style={styles.input}  placeholder="Enter Email"/>
            </View>
            <View style={{marginBottom:60}}>
                <Text style={{marginBottom:10}}>Password :</Text>
                <TextInput  onChangeText={(e)=> setPass(e)} style={styles.input} secureTextEntry={true} placeholder="Enter Password"/>
            </View>

            <View>
            <TouchableOpacity  onPress={SubmitHandler} style={{ width:'100%' ,  borderRadius:20 , borderWidth:13   , marginBottom:10}} >
                        <Text style={{fontSize:20 , fontWeight:'bold' , width:'100%' , color:'white'  , textAlign:'center' , backgroundColor:'black' , paddingVertical:5 }}>Sing in</Text>
                </TouchableOpacity>
            
            <TouchableOpacity onPress={()=> route.push('auth/create-acc')}  style={{ width:'100%'  , borderWidth:1 ,  borderRadius:20  , marginBottom:15}}  ><Text style={{fontSize:20 , fontWeight:'bold' , width:'100%' , color:'black'  , textAlign:'center' ,   borderRadius:20 , paddingVertical:15 }}>Create Account</Text></TouchableOpacity>
            
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
   input:{
        width:'100%',
        height:50,
        backgroundColor:'white',
        borderRadius:15,
        borderColor:'black',
        paddingHorizontal:10,
        borderWidth:1,
        color:'black',
        
   }
})
