import { View , Text , TouchableOpacity, TextInput} from "react-native";
import { StyleSheet } from "react-native";
import { useRouter  } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';



export default function CreateAcc() {

    const route = useRouter()

    return(
        <View style={{ marginTop:40 , padding:20}}>

            <TouchableOpacity onPress={()=> route.back()}>
             <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>

           <View style={{marginBottom:40 , marginTop:20}}>
           <Text style={{fontSize:30 , fontWeight:'bold' , marginBottom:10}}>
               Create New Account
            </Text>

            
           </View>

            <View style={{marginBottom:20}}>
                <Text style={{marginBottom:10}}>Full Name :</Text>
                <TextInput style={styles.input}  placeholder="Enter Email"/>
            </View>
            <View style={{marginBottom:20}}>
                <Text style={{marginBottom:10}}>Email :</Text>
                <TextInput style={styles.input}  placeholder="Enter Email"/>
            </View>
            <View style={{marginBottom:20}}>
                <Text style={{marginBottom:10}}>Number :</Text>
                <TextInput style={styles.input}  keyboardType="numeric"  placeholder="Enter Email"/>
            </View>
            <View style={{marginBottom:60}}>
                <Text style={{marginBottom:10}}>Password :</Text>
                <TextInput style={styles.input} secureTextEntry={true} placeholder="Enter Password"/>
            </View>

            <View>
                <TouchableOpacity  style={{ width:'100%' ,  borderRadius:20 , borderWidth:13   , marginBottom:15}} >
                    <Text style={{fontSize:20 , fontWeight:'bold' , width:'100%' , color:'white'  , textAlign:'center' , backgroundColor:'black' , paddingVertical:5 }}>Create account</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> route.push('auth/sign-in')}   style={{ width:'100%'  , borderWidth:1 ,  borderRadius:20  , marginBottom:15}}  ><Text style={{fontSize:20 , fontWeight:'bold' , width:'100%' , color:'black'  , textAlign:'center' ,   borderRadius:20 , paddingVertical:15 }}>Sing in</Text></TouchableOpacity>
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
         borderWidth:1
         
    }
 })
 