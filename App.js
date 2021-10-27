import React from 'react';
import main from './assets/main.png';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Button } from 'react-native';

export default function App() {
  console.disableYellowBox = true;
  //return 구문 밖에서는 슬래시 두개 방식으로 주석
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>나만의 꿀팁</Text>
      </View>
      <View style={styles.containerOne}>
        <Image
          source={main}
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'contain',
            borderRadius: 20,
          }}
        />
      </View>
      <ScrollView
        style={styles.containerTwo}
        horizontal="left"
      >
        <Button
          style={styles.btn1}
          title="생활"
          color="orange"
        />
        <Button
          style={styles.btn1}
          title="생활"
          color="orange"
        />
        <Button
          style={styles.btn1}
          title="생활"
          color="orange"
        />
        <Button
          style={styles.btn1}
          title="생활"
          color="orange"
        />
      </ScrollView>
      <View style={styles.containerThree}>

      </View>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 32,
  },
  containerTitle: {
    marginLeft: 10,
  },
  title: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  containerOne: {
    flex: 1,
    // backgroundColor: 'blue',
    margin: 10,
  },
  containerTwo: {
    flex: .2,
    margin: 10,
    flexDirection: 'row'
  },
  btn1: {
    width: 30,
    height: 20,
    marginRight: 20,
    // border: "soild"
  },
  containerThree: {
    flex: 1,
    backgroundColor: 'yellow'
  }
})