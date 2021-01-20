import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Logo from '../Components/Logo';
import MenuBlock from '../Components/MenuBlock';

export default function MainScreen({navigation}) {

    const goTo = (path) => {
        console.log("FIRST!" + navigation);
        navigation.navigate(path);
    }

    return (
      <View style={styles.container}>
        <Logo />
        <MenuBlock navigation={navigation} goTo={goTo}/>
      </View>  
    );
}

MainScreen.navigationOptions = {
    headerTitle: 'Главная'
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9F5E7',
        alignItems: 'center',
        justifyContent: 'center'
    }
});