import { StyleSheet, TextInput, View, Button, Text, FlatList } from 'react-native';
import React from 'react';
import { NavigationContainer } from'@react-navigation/native';
import { createNativeStackNavigator } from'@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function Calculator({ navigation }) {

  const [eka, setEka] = React.useState(0);
  const [toka, setToka] = React.useState(0);
  const [tulos, setTulos] = React.useState(0);
  const [text, setText] = React.useState('');
  const [data, setData] = React.useState([]);
  

  const plus = () => {
    const newTulos = (Number(eka) + (Number(toka)));
    const newText = (eka + " + " + toka + " = " + newTulos);
    const newData = [...data, {key: newText}];
    setTulos(newTulos);
    setText(newText);
    setData(newData);
  };

  const miinus = () => {
    const uusiTulos = (Number(eka) - (Number(toka)));
    const newText = (eka + " - " + toka + " = " + uusiTulos);
    const newData = [...data, {key: newText}];
    setTulos(uusiTulos);
    setText(newText); 
    setData(newData);
  };

  return (
    <View style={styles.container}>
      <View style={{flex:2, justifyContent:'center', alignItems:'center'}}
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
          <Button
          title="History"
          onPress={() => navigation.navigate('History', {data})}>
          </Button>
          </View>
    </View>
  ); 
}
function History ({ route, navigation }){

  const { data } = route.params;

  return(
<View style={styles.container}>

  <Text style={styles.text}>History:</Text>
        <FlatList
            data={data}
            renderItem={({ item }) =>
            <Text>{item.key}</Text>
            }>
        </FlatList>
</View>
);
}

export default function App(){
return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Calculator" component={Calculator} />
        <Stack.Screen name="History" component={History} />
      </Stack.Navigator>
    </NavigationContainer>
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
      flex: 3,
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderBottomColor: 'blue',
    },

    text: {
      fontSize: 20,
    },

  });

