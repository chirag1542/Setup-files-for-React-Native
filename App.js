import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {Text, View, Button, StyleSheet,TextInput} from 'react-native';
import Yostyles from './style'

const App= ()=>{

  const [name,setName] = useState("");
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("");

  const [display,setDisplay]=useState(false);

  return (
    <View>
        <Text style={{fontSize:30}}>Simple Form in React Native</Text>

        <TextInput
          style={styles.textInput}
          placeholder='Enter User Name'
          onChangeText ={(text)=>setName(text)}
          value={name}
        />

        <TextInput
          style={styles.textInput}
          placeholder='Enter User Password'
          secureTextEntry ={true}
          onChangeText = {(text)=>setPassword(text)}
          value={password}
        />

        <TextInput
          style={styles.textInput}
          placeholder=' Enter User Email'
          onChangeText={(text)=>setEmail(text)}
          value={email}
        />

        <View style={{marginBottom:10}}>
          <Button color={'green'} title='Print Details' />
        </View>
        
        <Button title='Clear Details'/>

        {/* 10:28 */}

    </View>
  );
}

const styles = StyleSheet.create({
  textInput:{
    fontSize:18,
    color:'blue',
    borderWidth:2,
    borderColor:'blue',
    margin:15,
  }
})

export default App;

