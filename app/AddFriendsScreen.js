import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

const AddFriendsScreen = () => {
  const [friendEmail, setFriendEmail] = useState('');

  const addFriend = () => {
    if (friendEmail) {
      // Here you would normally handle adding the friend to your database
      Alert.alert('Success', `Friend ${friendEmail} added!`);
      setFriendEmail(''); // Clear the input
    } else {
      Alert.alert('Error', 'Please enter a valid email.');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Add a Friend</Text>
      <TextInput
        placeholder="Friend's Email"
        value={friendEmail}
        onChangeText={setFriendEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        style={{ borderBottomWidth: 1, marginBottom: 20, width: '80%' }}
      />
      <Button title="Add Friend" onPress={addFriend} />
    </View>
  );
};

export default AddFriendsScreen;
