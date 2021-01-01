import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import imgChat from '../../assets/Chat.png';

const MenuBlock = () => {
    return (
        <View style={styles.root}>
          <View style={styles.viewMenu}>
            <TouchableOpacity style={styles.viewCell}>
              <Image source={imgChat} style={styles.blockMenuImg}/>
              <Text style={styles.textMenu}>Новости</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.viewCell}>
              <Image source={imgChat} style={styles.blockMenuImg}/>
              <Text style={styles.textMenu}>Чаты</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.viewCell}>
              <Image source={imgChat} style={styles.blockMenuImg}/>
              <Text style={styles.textMenu}>Об ОСИ/КСК</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.viewMenu}>
            <TouchableOpacity style={styles.viewCell}>
              <Image source={imgChat} style={styles.blockMenuImg}/>
              <Text style={styles.textMenu}>Учёт</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.viewCell}>
              <Image source={imgChat} style={styles.blockMenuImg}/>
              <Text style={styles.textMenu}>Услуги</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.viewCell}>
              <Image source={imgChat} style={styles.blockMenuImg}/>
              <Text style={styles.textMenu}>Голосование</Text>
            </TouchableOpacity>
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        padding: 30
    },

    viewMenu: {
        flexDirection: 'row',
        // justifyContent:'space-between'
        alignItems: 'center',
    },

    blockMenuImg: {
        width:100,
        height:80
    }, 

    viewCell: {
        backgroundColor: '#FFC11C',
        alignItems: 'center',
        margin: 8,
        borderRadius: 15
        // padding: 10
    },

    textMenu: {
        paddingBottom: 5
    }
});

export default MenuBlock;