import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import {TextInput} from 'react-native-gesture-handler';
import {Logo, ArrowDown, ArrowUp, Eye} from '@images';
import {countries} from '@configs';
import {addDashesInPhone} from '@utils';
import {COLORS} from '@constants';
import styles from './styles';
import CustomButton from '../Button.js';
import gStyle from '../../gStyle';

const Register = ({navigation}) => {
  const [isOpenSelect, setIsOpenSelect] = useState(false);
  const [passShow, setPassShow] = useState(true);
  const [confirmPassShow, setConfirmPassShow] = useState(true);
  const [phoneCode, setPhoneCode] = useState(0);
  const [phoneInput, setPhoneInput] = useState('');
  const [isActivePhoneInput, setIsActivePhoneInput] = useState(false);

  const finishRegister = () => navigation.navigate('Login');

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
                  setPhoneCode(index);
                  setPhoneInput('');
                }}
                onFocus={() => {
                  setIsOpenSelect(true);
                }}
                onBlur={() => {
                  setIsOpenSelect(false);
                }}
                dropdownIconPosition={'right'}
                renderDropdownIcon={() => (
                  <Image
                    style={styles.selectIcon}
                    source={isOpenSelect ? ArrowUp : ArrowDown}
                  />
                )}
                defaultValueByIndex={0}
                dropdownBackgroundColor={COLORS.WHITE}
                dropdownOverlayColor={'transparent'}
                buttonStyle={
                  isOpenSelect ? styles.select_active : styles.select
                }
                dropdownStyle={styles.selectDropdown}
                buttonTextStyle={styles.selectTextColor}
              />
              <TextInput
                style={
                  isActivePhoneInput
                    ? styles.inputPhone_active
                    : styles.inputPhone
                }
                autoCapitalize="none"
                autoCorrect={false}
                value={phoneInput}
                enablesReturnKeyAutomatically
                onChangeText={text =>
                  addDashesInPhone(text, phoneCode, setPhoneInput)
                }
                onFocus={() => {
                  setIsActivePhoneInput(true);
                }}
                onBlur={() => {
                  setIsActivePhoneInput(false);
                }}
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
                onPress={() => setConfirmPassShow(!confirmPassShow)}>
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
