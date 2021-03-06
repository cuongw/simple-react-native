import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { AppContext } from '../contexts/AppContext';

export default class extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <View style={styles.container}>
        <Image source={{ uri: product.image }} style={styles.image} />
        <Text style={styles.title}>{product.name}</Text>
        <View style={styles.priceSession}>
          <Text style={styles.price}>${product.price}</Text>
          <AppContext.Consumer>
            {({addToCart}) => (
              <Button
                onPress={addToCart.bind(this, product)}
                title='Add To Cart'
              />
            )}
          </AppContext.Consumer>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 20,
    backgroundColor: '#deecff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    padding: 10,
    margin: 16,
    marginRight: 8,
    marginLeft: 8
  },
  image: {
    height: 128,
    width: 128,
    marginBottom: 8
  },
  title: {
    fontSize: 20,
    color: 'tomato',
    marginBottom: 8
  },
  priceSession: {
    alignItems: 'stretch',
    flexDirection: 'row'
  },
  price: {
    fontSize: 18,
    color: 'blue',
    flex: 1,
    alignItems: 'center'
  }
});