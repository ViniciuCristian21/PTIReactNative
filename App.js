import React from 'react';
import { StyleSheet, View } from 'react-native';
import Card from "./assets/src/components/Card";

const ItemsList = [
  { item: 'Hamburger', price: '$200,00', source: 'https://www.meioemensagem.com.br/wp-content/uploads/2023/07/Pink-Burger-Barbie-Credito_Reproducao-Twitter.jpg'},
  { item: 'Pizza', price: '$300,00', source: 'https://s5.static.brasilescola.uol.com.br/be/2023/03/pizza-italiana-tradicional-com-tomates-e-manjericao-em-alusao-a-historia-da-pizza.jpg'},
]

export default function App() {
  return (
    <View style={styles.container}>
      {
        ItemsList.map(function (item, index) {
          return (
            <Card key={index} item={item.item} price={item.price} source={item.source}/>
          )
        })
      }
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    margin: 0,
    padding: 0,
  },
});