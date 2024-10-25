import React from 'react';
import { View, Text, Button } from 'react-native';

const MainScreen = ({ navigation }) => {
  const notifyFriends = () => {
    // Add your notification logic here
    alert('Notify Friends button pressed!');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Main Screen</Text>
      <Button title="Notify Friends" onPress={notifyFriends} />
      <Button title="Add Friends" onPress={() => navigation.navigate('AddFriends')} />
    </View>
  );
};

export default MainScreen;
