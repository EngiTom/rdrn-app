import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Dimensions, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

export default function Details() {
  const navigation = useNavigation();
  const [isNotifying, setIsNotifying] = useState(false);

  // Hide header
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    });
  }, [navigation]);

  const handleNotify = () => {
    setIsNotifying(true);
    // Here you would implement the actual notification logic
    setTimeout(() => setIsNotifying(false), 2000);
  };

  const dummyFriends = [
    { id: 1, name: 'Sarah K.', status: 'At Red Door' },
    { id: 2, name: 'Mike R.', status: 'Available' },
    { id: 3, name: 'Emma W.', status: 'Busy' },
    { id: 4, name: 'John D.', status: 'Available' },
  ];

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#FF416C', '#FF4B2B']}
        style={styles.headerGradient}
      >
        <View style={styles.header}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backButtonText}>←</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>RDRN Social</Text>
        </View>
      </LinearGradient>

      <ScrollView style={styles.content}>
        {/* Status Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Your Status</Text>
          <TouchableOpacity
            style={[
              styles.notifyButton,
              isNotifying && styles.notifyButtonActive
            ]}
            onPress={handleNotify}
          >
            <Text style={styles.notifyButtonText}>
              {isNotifying ? 'Notifying Friends...' : "I'm Going to Red Door! 🎉"}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Friends List */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Friends</Text>
            <TouchableOpacity>
              <Text style={styles.addFriendButton}>+ Add Friend</Text>
            </TouchableOpacity>
          </View>

          {dummyFriends.map(friend => (
            <View key={friend.id} style={styles.friendItem}>
              <View style={styles.friendInfo}>
                <View style={styles.avatarPlaceholder}>
                  <Text style={styles.avatarText}>{friend.name[0]}</Text>
                </View>
                <View>
                  <Text style={styles.friendName}>{friend.name}</Text>
                  <Text style={[
                    styles.friendStatus,
                    { color: friend.status === 'At Red Door' ? '#FF416C' : 
                            friend.status === 'Available' ? '#4CAF50' : '#999' }
                  ]}>
                    {friend.status}
                  </Text>
                </View>
              </View>
              <TouchableOpacity style={styles.inviteButton}>
                <Text style={styles.inviteButtonText}>Invite</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* Quick Actions */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Quick Actions</Text>
          <View style={styles.actionGrid}>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionButtonText}>Create Group</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionButtonText}>Find Friends</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionButtonText}>Settings</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  headerGradient: {
    paddingTop: 50,
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 20,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 20,
  },
  backButtonText: {
    fontSize: 24,
    color: '#fff',
  },
  content: {
    flex: 1,
    padding: 15,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  notifyButton: {
    backgroundColor: '#FF416C',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  notifyButtonActive: {
    backgroundColor: '#4CAF50',
  },
  notifyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  friendItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  friendInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarPlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FF416C',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  avatarText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  friendName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  friendStatus: {
    fontSize: 14,
    color: '#999',
  },
  inviteButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 15,
  },
  inviteButtonText: {
    color: '#666',
    fontSize: 14,
  },
  addFriendButton: {
    color: '#FF416C',
    fontSize: 16,
    fontWeight: '600',
  },
  actionGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  actionButton: {
    width: '48%',
    backgroundColor: '#f8f8f8',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    alignItems: 'center',
  },
  actionButtonText: {
    color: '#333',
    fontSize: 14,
    fontWeight: '600',
  },
});