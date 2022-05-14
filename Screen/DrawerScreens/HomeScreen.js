import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
 
const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
              
      <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={() => navigation.navigate('RegisterScreen')}>
              <Text style={styles.buttonTextStyle}>VOLTAR</Text>
            </TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
              marginBottom: 16,
            }}>
          HOME HOME HOME HOME
            {'\n\n'}
            HOME HOME HOME HOME
          </Text>
        </View>
     
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: 'grey',
          }}>
          HOME HOME HOME HOME
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'grey',
          }}>
          HOME HOME HOME HOME
        </Text>
      </View>
    </SafeAreaView>
  );
};
 
export default HomeScreen;
