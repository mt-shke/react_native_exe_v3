import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import {TDeleteAccountScreenNavigationProp} from '../ts/types/navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

const DeleteAccountScreen = () => {
  const navigation = useNavigation<TDeleteAccountScreenNavigationProp>();

  return (
    <ImageBackground
      source={require('../../assets/img/bg-settings.png')}
      resizeMode="cover"
      style={styles.bg}>
      <ScrollView>
        <View style={styles.container}>
          <Text>change password screen</Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default DeleteAccountScreen;

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  btnSettings: {
    backgroundColor: 'orange',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
    margin: 20,
    alignSelf: 'flex-end',
  },
});
