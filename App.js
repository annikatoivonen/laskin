import { StyleSheet, TextInput, View, Button, Text, FlatList } from 'react-native';
import React from 'react';

export default function App() {

  const [eka, setEka] = React.useState(0);
  const [toka, setToka] = React.useState(0);
  const [tulos, setTulos] = React.useState(0);
  const [data, setData] = React.useState([]);
  const [text, setText] = React.useState('');

  const plus = () => {
    const newTulos = (Number(eka) + (Number(toka)));
    setTulos(newTulos);
    setText(eka + " + " + toka + " = " + newTulos);
    const newData = [...data, {key: text}];
    setData(newData);
  };

  const miinus = () => {
    const uusiTulos = (Number(eka) - (Number(toka)));
    setTulos(uusiTulos);
    setText(eka + " - " + toka + " = " + uusiTulos);
    const newData = [...data, {key: text}];
    setData(newData);
  };

  return (
    <View style={styles.container}>
      <View style={{flex:4, justifyContent:'center', alignItems:'center'}}
      >
      <Text style={styles.text}>Result: {tulos}</Text>

        <TextInput 
        style={styles.input}
        keyboardType="numeric"
        onChangeText={setEka}
        value={eka}>
        </TextInput>

        <TextInput 
        style={styles.input}
        keyboardType="numeric"
        onChangeText={setToka}
        value={toka}>
        </TextInput>
        </View>
        <View style={styles.button}>
          <Button 
          onPress={plus}
          title="+">
          </Button>

          <Button
          title="-"
          onPress={miinus}>
          </Button>
          </View>
          <View style={{flex:5}}>
         <Text style={styles.text}>History:</Text>
            <FlatList
            data={data}
            renderItem={({ item }) =>
            <Text>{item.key}</Text>
            }>
            </FlatList>
           </View>
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
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      width: 200,
    },
  
    button: {
      flex:1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderBottomColor: 'blue',
    },

    text: {
      fontSize: 20,
    },

  });

