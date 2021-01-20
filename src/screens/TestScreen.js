import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

TestScreen = () => {
    return (
       <View>
           <Text>
               Очень тестовые данные
           </Text>
       </View>
    );
}

TestScreen.navigationOptions = {
    headerTitle: 'Тестовая'
}

export default TestScreen;