import { StatusBar } from 'expo-status-bar';
import { useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [enteredPictureList, setPictureList] = useState('');
  const [pictsJesus, setPictsJesus] = useState([]); 

  function showPictures(listName){
    console.log(listName);
    setPictsJesus((currentPictures) => [
      ...currentPictures,
      pictsJesus
    ]);
  }

  return (
    <View style={styles.container}>
      <View>
        <Text>Shh! This is a quiet app.</Text>
      </View>
      
      <Button title='Pictures of Jesus' onPress={showPictures("Jesus")} />
      <StatusBar style="auto" />
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
});
