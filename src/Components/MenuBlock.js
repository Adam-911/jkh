import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import imgChat from '../../assets/Chat.png';
import imgNews from '../../assets/news.png';
import imgBill from '../../assets/bill.png';
import imgServices from '../../assets/services.png';
import imgAbout from '../../assets/about.png';
import imgVote from '../../assets/vote.png';

const MenuBlock = ({goTo}) => {

  console.log(goTo);

    return (
        <View style={styles.root}>
          <View style={styles.viewMenu}>
            <TouchableOpacity style={styles.viewCell} onPress={() => goTo("Test")}>
              <Image source={imgNews} style={styles.blockMenuImg}/>
              <Text style={styles.textMenu}>Новости</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.viewCell} onPress={() => goTo("Test")}>
              <Image source={imgChat} style={styles.blockMenuImg}/>
              <Text style={styles.textMenu}>Чаты</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.viewCell} onPress={() => goTo("Test")}>
              <Image source={imgAbout} style={styles.blockMenuImg}/>
              <Text style={styles.textMenu}>Об ОСИ/КСК</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.viewMenu}>
            <TouchableOpacity style={styles.viewCell} onPress={() => goTo("Test")}>
              <Image source={imgBill} style={styles.blockMenuImg}/>
              <Text style={styles.textMenu}>Учёт</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.viewCell} onPress={() => goTo("Test")}>
              <Image source={imgServices} style={styles.blockMenuImg}/>
              <Text style={styles.textMenu}>Услуги</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.viewCell} onPress={() => goTo("Test")}>
              <Image source={imgVote} style={styles.blockMenuImg}/>
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
        backgroundColor: '#FF9966',
        alignItems: 'center',
        margin: 8,
        borderRadius: 15
        // padding: 10
    },

    textMenu: {
        paddingBottom: 5,
        color: '#ffffff',
        fontSize: 14,
        fontWeight: 'bold'
    }
});

export default MenuBlock;