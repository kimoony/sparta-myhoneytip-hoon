import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Loading() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>준비중...</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    //앱의 배경 색
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: '700'
  }

})