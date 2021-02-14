import React, {Component} from 'react';
import {
  Alert,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './Styles';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

class RegisterScreen extends Component {
  constructor(props) {
    super(props);

  }


  openCamera=()=>{
    console.log('open camera');
    this.props.navigation.navigate('camera')
  }

  render() {
    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView
          style={{flex: 1, width: '100%'}}
          keyboardShouldPersistTaps="always">
          <Text style={styles.label}>Nama</Text>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            placeholderTextColor="#aaaaaa"
            onChangeText={(name) => this.setState({name: name})}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />
          <Text style={styles.label}>Kejadian</Text>
          <TextInput
            style={styles.input}
            placeholder="Kejadian"
            placeholderTextColor="#aaaaaa"
            onChangeText={(kejadian) => this.setState({kejadian: kejadian})}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />
          <Text style={styles.label}>Alamat</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor="#aaaaaa"
            placeholder="alamat"
            onChangeText={(alamat) => this.setState({alamat: alamat})}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />
          <Text style={styles.label}>Keterangan</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor="#aaaaaa"
            placeholder="keterangan"
            onChangeText={(keterangan) =>
              this.setState({keterangan: keterangan})
            }
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />

          <View style={styles.container}>
            <TouchableOpacity style={styles.buttonStyle}>
              <Image
                style={styles.iconImage}
                source={require('../../assets/image.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle}>
              <Image
                onPress={this.openCamera}
                style={styles.iconImage}
                source={require('../../assets/camera.png')}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.button}>
            <View>
              <Text style={styles.buttonTitle}>Laporkan</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

export default RegisterScreen;
