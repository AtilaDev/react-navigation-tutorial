import React from 'react';
import { StyleSheet, Text, Button } from 'react-native';
import { withNavigation, SafeAreaView } from 'react-navigation';

const OtherScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textScreen}>New Screen</Text>
      <Button
        title="Go to Home Screen"
        onPress={() => navigation.navigate('Home')}
      />
    </SafeAreaView>
  );
};

OtherScreen.navigationOptions = {
  drawerLabel: 'Open New Screen!'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textScreen: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  }
});

export default withNavigation(OtherScreen);
