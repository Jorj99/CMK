import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Logo, ArrowDown, ArrowUp, Eye} from '@images';
import styles from './styles';
import gStyle from '../../gStyle';
import SelectDropdown from 'react-native-select-dropdown';
import {TextInput} from 'react-native-gesture-handler';
import CustomButton from '../Button.js';

const Register = ({navigation}) => {
  const countries = ['+ 374', '+7'];
  const [isOpenSelect, setIsOpenSelect] = useState(false);
  const [passShow, setPassShow] = useState(true);
  const [confirmPassShow, setConfirmPassShow] = useState(true);
  const [phoneInput, setPhoneInput] = useState('');

  const finishRegister = () => navigation.navigate('Login');

  const addDashesInPhone = text => {
    if (text.length < 8 && phoneInput < text) {
      const withoutDashText = text.replaceAll('-', '');
      setPhoneInput(withoutDashText.replace(/.{2}/g, '$&-'));
    } else {
      setPhoneInput(text);
    }
  };

  return (
    <SafeAreaView style={gStyle.safeAreaView}>
      <ScrollView style={gStyle.scrollView}>
        <View style={gStyle.container}>
          <View style={gStyle.mainView}>
            <Logo style={gStyle.logo} />
            <Text style={gStyle.title}>Sign Up For Workroom</Text>
            <Text style={styles.InputText}>Phone number</Text>
            <View style={styles.phoneInputsWrapper}>
              <SelectDropdown
                data={countries}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);
                }}
                onFocus={() => {
                  setIsOpenSelect(true);
                }}
                onBlur={() => {
                  setIsOpenSelect(false);
                }}
                dropdownIconPosition={'right'}
                renderDropdownIcon={() =>
                  isOpenSelect ? (
                    <Image style={styles.selectIcon} source={ArrowUp} />
                  ) : (
                    <Image style={styles.selectIcon} source={ArrowDown} />
                  )
                }
                defaultValueByIndex={1}
                dropdownBackgroundColor={'white'}
                dropdownOverlayColor={'transparent'}
                buttonStyle={
                  isOpenSelect ? styles.select_active : styles.select
                }
                dropdownStyle={styles.selectDropdown}
                buttonTextStyle={styles.selectTextColor}
              />
              <TextInput
                style={styles.inputPhone}
                autoCapitalize="none"
                autoCorrect={false}
                value={phoneInput}
                enablesReturnKeyAutomatically
                onChangeText={addDashesInPhone}
              />
            </View>
            <Text style={styles.InputText}>Your Name</Text>
            <TextInput
              style={styles.inputName}
              autoCapitalize="none"
              autoCorrect={false}
              enablesReturnKeyAutomatically
              onChangeText={text => console.log(text)}
            />
            <Text style={styles.InputText}>Your Email</Text>
            <TextInput
              style={styles.inputName}
              autoCapitalize="none"
              autoCorrect={false}
              enablesReturnKeyAutomatically
              onChangeText={text => console.log(text)}
            />
            <Text style={styles.InputText}>Password</Text>
            <View>
              <TouchableOpacity
                style={styles.eyeBackground}
                onPress={() => setPassShow(!passShow)}>
                <Eye style={styles.eyePassword} />
              </TouchableOpacity>
              <TextInput
                style={styles.inputPassword}
                name="password"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={passShow}
                enablesReturnKeyAutomatically
                onChangeText={text => console.log(text)}
              />
            </View>
            <Text style={styles.InputText}>Confirm password</Text>
            <View>
              <TouchableOpacity
                style={styles.eyeBackground}
                onPress={() => setConfirmPassShow(!passShow)}>
                <Eye style={styles.eyePassword} />
              </TouchableOpacity>
              <TextInput
                style={styles.inputPassword}
                name="password"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={confirmPassShow}
                enablesReturnKeyAutomatically
                onChangeText={text => console.log(text)}
              />
            </View>
            <CustomButton calpack={() => finishRegister()} text={'Next'} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;
