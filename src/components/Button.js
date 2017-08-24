import React, {Component} from 'react';
import { Text, TouchableOpacity} from 'react-native';


const Button = ({onPress, children}) => {

    return (
            <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
              <Text style={styles.textStyle}> {children}</Text>
            </TouchableOpacity>
        );
};


const styles = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#007aff',
        borderRadius:5,
        marginLeft: 5,
        marginRight: 5,
         },

     textStyle: {
        color: '#007aff',
        fontSize: 16,
        paddingTop: 10,
        paddingBottom: 10,
        fontWeight: '600',
        alignSelf: 'center',
                }
}

export default Button;