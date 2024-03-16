import React from 'react';
import { StyleSheet, View } from 'react-native';
import SIPSWebView from './SIPSWebView'; // Correct the import to use uppercase "SIPWebView"

const App = () => {
  return (
    <View style={styles.container}>
      <SIPSWebView /> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
