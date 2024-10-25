import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Tabs initialRouteName="MainScreen">
      <Tabs.Screen name="MainScreen" options={{ title: 'Main' }} />
      <Tabs.Screen name="AddFriendsScreen" options={{ title: 'Add Friend' }} />
    </Tabs>
  );
}
