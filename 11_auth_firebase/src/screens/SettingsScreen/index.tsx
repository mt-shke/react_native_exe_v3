import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {signOutFromApp} from '../../firebase';
import {UserContext} from '../../state/UserContext';
import {useNavigation} from '@react-navigation/native';
import {TSettingsScreenNavigationProp} from '../../ts/types/navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../../globals';
import TextStylised from '../../components/UI/TextStylised';

const SettingsScreen = () => {
  const {
    state: {user},
    dispatch,
  } = useContext(UserContext);

  const {username, job} = user!.profile;

  const [deleteAccountModal, setDeleteAccountModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigation = useNavigation<TSettingsScreenNavigationProp>();

  useEffect(() => {
    // if (loggedAuth) {
    //   const updateUserInfo = async () => {
    //     const userData = await getUserData(loggedAuth.uid as string);
    //     if (userData) {
    //       const fetchedUser = userData.data();
    //       setProfileData(fetchedUser as IUserData);
    //     }
    //   };
    //   updateUserInfo();
    // }
  }, []);

  const logoutUser = () => {
    dispatch({type: 'LOGOUT_USER'});
    signOutFromApp();
  };

  return (
    <ImageBackground
      source={require('../../../assets/img/bg-settings.png')}
      resizeMode="cover"
      style={styles.bg}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.containerText}>
            <TextStylised content={'Welcome to your appartment'} />
          </View>
          <View style={styles.containerText}>
            <TextStylised content={'Here you can change stuffs as you want'} />
          </View>
          <View style={styles.containerText}>
            <TextStylised
              content={'Open your book to delete or write new entries'}
            />
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.btnLogout} onPress={() => logoutUser()}>
        <Ionicons name="md-log-out" size={24} />
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    position: 'relative',
  },
  container: {paddingTop: 80},
  containerText: {
    padding: 20,
    backgroundColor: colors.black,
    opacity: 0.85,
    marginLeft: 6,
    marginTop: 40,
    borderRadius: 6,
    width: '90%',
    alignSelf: 'center',
  },

  btnLogout: {
    backgroundColor: colors.darkGrey,
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
    elevation: 5,
    margin: 20,
    bottom: 0,
    right: 0,
    position: 'absolute',
  },
});
