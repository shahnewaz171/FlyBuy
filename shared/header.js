import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

export default function Header({ navigation }) {
    const openMenu = () => {
        navigation.openDrawer()
    }
    return (
      <View style={styles.header}>
        <MaterialIcons name="menu" size={28} onPress={openMenu} style={styles.icon} />
        <View style={styles.headerText}>Fly Buy</View>
      </View>
    );
  }
const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        letterSpacing: 1,
    },
    icon: {
        position: 'absolute',
        left: 8
    }
});
