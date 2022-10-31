import React from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
const Header = ({
  title,
  showBackButton = false,
}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#008080' barStyle="light-content" />
      <View style={styles.header_container}>
        {showBackButton == true ? (
          <View style={styles.back_btn_conatiner}>
            <TouchableOpacity>
              <Icon name='arrow-back-outline' color='#fff' size={28} onPress={() => navigation.goBack()} />
            </TouchableOpacity>
          </View>) :
          (
            <>
              <View style={styles.back_btn_conatiner}>
                <TouchableOpacity>
                  {/* <Icon name='arrow-back-outline' color='#fff' size={28} onPress={() => navigation.goBack()} /> */}
                </TouchableOpacity>
              </View>
            </>
          )}
        <View style={styles.title_cont}>
          <Text style={styles.headline}>{title}</Text>
        </View>
      </View>
    </View>
  );
};
export default Header;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#008080',
    paddingVertical: 5,
    paddingHorizontal: 25,
  },
  headline: {
    fontSize: 18
  },
  header_container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50
  },
  back_btn_conatiner: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  title_cont: {
    flex: 2,
    paddingLeft: 20
  }
});
