import axios from 'axios';
import React, {Component} from 'react';
import {View,Image, Text} from 'react-native';
import Card from './Card';
import CardItem from './CardItem';


const AlbumDetail = (props) => {

    return (
        <Card>
        <CardItem>
        <View>
          <Image style={styles.thumbnailsStyle} source={{ uri: props.album.thumbnail_image}}/>
        </View>
         <View style={styles.headerContentStyle}> 
            <Text>{props.album.title} </Text>
            <Text>{props.album.artist} </Text>
            </View>
        </CardItem>
        </Card>
        );
};


const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
        },

   thumbnailsStyle: {
     height: 50,
     width: 50,
      }                    
};

export default AlbumDetail;
