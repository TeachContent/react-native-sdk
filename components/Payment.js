import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';
export const Payment = ({collectId, onSuccess, onFailure, mode}) => {
  

  if (mode !== 'production' && mode !== 'sandbox') {
    return (
      <View style={styles.errorcontainer}>
        <Text style={styles.errorText}>Invalid Payment Mode</Text>
      </View>
    );
  }

  if (typeof onSuccess !== 'function') {
    return (
      <View style={styles.errorcontainer}>
        <Text style={styles.errorText}>onSuccess is not a function</Text>
      </View>
    );
  }

  if (typeof onFailure !== 'function') {
    return (
      <View style={styles.errorcontainer}>
        <Text style={styles.errorText}>onFailure is not a function</Text>
      </View>
    );
  }

  const handleNavigationStateChange = newNavState => {
    const {url} = newNavState;
    
    if (url.includes('payment-success') && url.includes(collectId)) {
     onSuccess();
    } else if (url.includes('payment-failure') && url.includes(collectId)) {
      onFailure();
    }
  };
  const url =
    mode === 'production'
      ? `https://pg.edviron.com/`
      :`https://dev.pg.edviron.com/`

  return (
    <View style={styles.container}>
      <WebView
        source={{uri: `${url}/collect-sdk-payments?collect_id=${collectId}`}}
        style={styles.webview}
        onNavigationStateChange={handleNavigationStateChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  errorcontainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor:'white'
  },
  errorText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color:'red'
  },
  retryButton: {
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  retryButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
