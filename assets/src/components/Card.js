import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Card(props) {
    return (
        
        <View style={styles.card}>
            <Image
                source={{uri: props.source}}
                style={styles.image}
                resizeMode="center"
            />
            <Text style={styles.item}>{props.item}</Text>
            <Text style={styles.price}>{props.price}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
      width: 175,
      height: 250,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      padding: 10,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 4 },
      shadowRadius: 8,
      elevation: 5,
    },
    image: {
      width: '100%',
      height: 150,
      marginBottom: 10,
      borderRadius: 5,
    },
    item: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    price: {
      fontSize: 16,
    },
  });