import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import {useState} from "react";

export default function App() {

  const [name, setName] = useState("Default Name");

  let newName = "";
  const changeTextHandler = (enteredName) => {
    console.log(enteredName);
    newName = enteredName;
  }

  const pressNameHandler = () => {
    // console.log(newName);
    setName(newName);
  }

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <TextInput placeholder='enter name' style={styles.input} onChangeText={changeTextHandler} ></TextInput>
        <Button title='ADD' onPress={pressNameHandler} ></Button>
      </View>
        <Text> {name} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',     
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    width: "80%",
    marginRight: 5
  },
  subContainer: {
    flexDirection: "row"
  }
});
