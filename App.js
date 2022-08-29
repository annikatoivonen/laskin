import { StyleSheet, TextInput, View, Button, Text } from 'react-native';
import React from 'react';

export default function App() {

  const [eka, setEka] = React.useState(0);
  const [toka, setToka] = React.useState(0);
  const [tulos, setTulos] = React.useState(0);

  const plus = () => {
    setTulos(Number(eka) + Number(toka))
  };

  const miinus = () => {
    setTulos(eka - toka)
  };
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
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 60,
      borderBottomColor: 'blue',
    },

    text: {
      fontSize: 20,
    },
  });

  return (
    <View style={styles.container}>
      
      <Text style={styles.text}>Result: {tulos}
      </Text>
      <View>
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
      </View>
    </View>
  );
}
