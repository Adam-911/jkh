import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import logo from '../../assets/logo_test_1.png';

const Logo = () => {
    return (
        <>
          <Image source={logo} style={styles.imageLogo}/>
          <Text style={styles.titleText}>НАШ ДОМ</Text>
        </>
    )
}

const styles = StyleSheet.create({
    titleText: {
        color: '#FF6600',
        fontSize: 40,
        fontWeight: "bold"
    },
    
    imageLogo: {
        width: 150,
        height: 150
    }
});

export default Logo;