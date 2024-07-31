import { Button, Text, TouchableOpacity, View } from "react-native";
import { Image } from "react-native";
import { StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { Redirect } from "expo-router";


export default function Login() {

    const route = useRouter()

    return (
      <View >
        <View>
          <Image
            style={{ width: "100%", height: 500 }}
            source={require("../assets/images/travel.jpeg")}
          />
        </View>
        <View style={styles.container}>
          <Text style={{ fontSize: 27, fontWeight: "bold" , marginBottom:20 }}>
            Make big travel with us
          </Text>
          <Text style={{textAlign:'center' , lineHeight:20 , fontSize:16 , marginBottom:20}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio illo sjksai  Lorem ipsum dolor sit amet consectetur ipsum dolor sit amet consectetur</Text>
          <TouchableOpacity onPress={()=> route.push('/mytrip') }>
          <Text style={{ fontSize: 15 , marginBottom:20  }}>
            Skip
          </Text>
          </TouchableOpacity>
          
      
          <TouchableOpacity onPress={()=> route.push('auth/create-acc')}  style={{ width:'100%' ,  borderRadius:20 , borderWidth:13   , marginBottom:10}} >
                    <Text style={{fontSize:20 , fontWeight:'bold' , width:'100%' , color:'white'  , textAlign:'center' , backgroundColor:'black' , paddingVertical:5 }}>Create account</Text>
                </TouchableOpacity>
          <TouchableOpacity onPress={()=> route.push('auth/sign-in')} style={{ width:'100%'  , borderWidth:1 ,  borderRadius:20  , marginBottom:15}}  ><Text style={{fontSize:20 , fontWeight:'bold' , width:'100%' , color:'black'  , textAlign:'center' ,   borderRadius:20 , paddingVertical:15 }}>Sing in</Text></TouchableOpacity>
      
       
        </View>

           
      </View>
    );
  }




 const styles = StyleSheet.create({
    container:{
       width: "100%",
       alignItems: "center",
       paddingTop: 30,
       height:'100%',
       borderTopRightRadius:20,
       borderTopLeftRadius:20,
       backgroundColor:'#ffffff',
       marginTop:-20,
       paddingHorizontal:20
    },

    
 })