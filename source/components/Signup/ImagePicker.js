import React, {useState} from 'react';
import style from './Style';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import LoginService from '../function.controller/Login.services';

const App = () => {
  const {path, path1, chooseFile, chooseFile1} = LoginService();

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <SafeAreaView style={style.mainPicker}>
        <Text style={style.titleText}>Image Picker in React Native</Text>
        <View style={style.container}>
          {path ? (
            <Image source={{uri: path}} style={style.imageStyle} />
          ) : null}
          <TouchableOpacity
            activeOpacity={0.5}
            style={style.buttonStyle}
            onPress={() => chooseFile('photo')}>
            <Text style={style.textStyle}>Choose Image</Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.5}
            style={style.buttonStyle}
            onPress={() => chooseFile('video')}>
            <Text style={style.textStyle}>Choose Video</Text>
          </TouchableOpacity>
        </View>
        <View style={style.container}>
          {path1 ? (
            <Image source={{uri: path1}} style={style.imageStyle} />
          ) : null}
          <TouchableOpacity
            activeOpacity={0.5}
            style={style.buttonStyle}
            onPress={() => chooseFile1('photo')}>
            <Text style={style.textStyle}>Launch Camera for Image</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            style={style.buttonStyle}
            onPress={() => chooseFile1('video')}>
            <Text style={style.textStyle}>Launch Camera for Video</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default App;
