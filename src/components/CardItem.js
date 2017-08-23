import React, {Component} from 'react';
import {View} from 'react-native';


const CardItem = (props) => {

    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
        );
};


const styles = {
    containerStyle: {
        borderColor: '#ddd',
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        padding: 5,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        position: 'relative'
      }

};

export default CardItem;
