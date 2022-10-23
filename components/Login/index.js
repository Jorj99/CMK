import React from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Logo, Eye} from '@images';
import styles from './styles';

const Login = ({navigation}) => {
  const [passShow, setPassShow] = React.useState(true);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <View style={styles.mainView}>
            <Logo style={styles.logo} />
            <Text style={styles.title}>Log In To Workroom</Text>
            <View style={styles.emailInputView}>
              <Text style={styles.InputText}>Yuor Email</Text>
              <TextInput
                style={styles.inputFieldEmail}
                name="password"
                autoCapitalize="none"
                autoCorrect={false}
                enablesReturnKeyAutomatically
                onChangeText={text => console.log(text)}
              />
            </View>
            <View>
              <Text style={styles.InputText}>Password</Text>
              <View>
                <TouchableOpacity
                  style={styles.eyeBackground}
                  onPress={() => setPassShow(!passShow)}>
                  <Eye style={styles.eyePassword} />
                </TouchableOpacity>
                <TextInput
                  style={styles.inputFieldPassword}
                  name="password"
                  autoCapitalize="none"
                  autoCorrect={false}
                  secureTextEntry={passShow}
                  enablesReturnKeyAutomatically
                  onChangeText={text => console.log(text)}
                />
              </View>
              <TouchableOpacity
                style={styles.forgotPassword}
                onPress={() => console.log('forgot')}>
                <Text style={styles.forgotPasswordText}>Forgot password?</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.LoginBtn}
              onPress={() => console.log('Login')}>
              <Text style={styles.LoginBtnText}>Log In</Text>
            </TouchableOpacity>
            <View style={styles.register}>
              <Text style={styles.newUser}>New User? </Text>
              <TouchableOpacity onPress={() => console.log('Create Account')}>
                <Text style={styles.createAccount}>Create Account</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
