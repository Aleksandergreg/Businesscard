import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Modal,
  Pressable,
  Dimensions,
} from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

import myImage from './assets/coffee-icon.png';

export default function App() {

  const [number, setNumber] = useState(0);

  function pressMe(){
    setNumber(number +1)
    console.log("Tallet er " + number)

  }
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Pressable Logo */}
        <Pressable onPress={openModal}>
          <Image
            style={styles.logo}
            source={myImage}
            resizeMode="contain"
          />
        </Pressable>

        <Text style={styles.companyName}>A.P. Moller – Maersk</Text>
        <Text style={styles.personName}>Aleksander Gregersen</Text>
        <Text style={styles.personTitle}>Software Developer</Text>
        <Text style={styles.companyDescription}>
          Connecting and simplifying customers' supply chains worldwide.
        </Text>
        <Text style={styles.contactInfo}>Phone: +45 1234 5678</Text>
        <Text style={styles.contactInfo}>Email: nocontact@noreply.com</Text>
        <Text>{number}</Text>
        <Pressable onPress={pressMe}>
          <Text> Press me</Text>
        </Pressable>
      </View>

      {/* Modal for Enlarged Image */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={closeModal}
      >
        <Pressable 
          style={styles.modalContainer} 
          onPress={closeModal}
        >
          <Image
            style={styles.modalImage}
            source={myImage}
            resizeMode="contain"
          />
          <Text style={styles.closeText}>Tap anywhere to close</Text>
        </Pressable>
      </Modal>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '80%',
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 100,
    marginBottom: 16,
  },
  companyName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    textAlign: 'center',
  },
  personName: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
    textAlign: 'center',
  },
  personTitle: {
    fontSize: 14,
    color: '#555',
    marginBottom: 12,
    textAlign: 'center',
  },
  companyDescription: {
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 16,
    paddingHorizontal: 10,
    color: '#333',
  },
  contactInfo: {
    fontSize: 14,
    marginBottom: 4,
    color: '#666',
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalImage: {
    width: screenWidth * 0.8,
    height: screenHeight * 0.5,
    backgroundColor: 'transparent',
  },
  closeText: {
    color: '#FFF',
    fontSize: 16,
    marginTop: 20,
  },
});

/*
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/Aleksandergreg/React-Native-Initial
git push origin main
*/ x$