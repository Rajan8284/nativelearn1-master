import {
  Image,
  ImageBackground,
  FlatList,
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import data from '../../data.json';
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'FirstItem',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'SecondItem',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'ThirdItem',
  },
];
const Form = () => {
  const defaultValues = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirmpassword: '',
  };
  const [count, setCount] = useState(0);
  const [values, setValues] = useState(defaultValues);
  const handleChange = (field, value) => {
    setValues({...values, [field]: value});
  };
  console.log('===>>>values', values);

  const handleSubmit = () => {
    setValues(defaultValues);
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={style.main}>
        <Text style={style.textStyle}>Registration Form</Text>
        <TextInput
          style={style.input}
          value={values.first_name}
          keyboardType="text"
          placeholder="Enter your first name"
          placeholderTextColor="grey"
          onChangeText={e => {
            handleChange('first_name', e);
          }}
        />
        <TextInput
          style={style.input}
          value={values.last_name}
          keyboardType="text"
          placeholder="Enter your last name"
          placeholderTextColor="grey"
          onChangeText={e => {
            handleChange('last_name', e);
          }}
        />
        <TextInput
          style={style.input}
          value={values.email}
          keyboardType="text"
          placeholder="Enter your Email"
          placeholderTextColor="grey"
          onChangeText={e => {
            handleChange('email', e);
          }}
        />
        <TextInput
          style={style.input}
          value={values.password}
          keyboardType="password"
          placeholder="Enter your password"
          placeholderTextColor="grey"
          onChangeText={e => {
            handleChange('password', e);
          }}
        />
        <TextInput
          style={style.input}
          keyboardType="password"
          value={values.confirmpassword}
          placeholder="Enter your confirmpassword"
          placeholderTextColor="grey"
          onChangeText={e => {
            handleChange('confirmpassword', e);
          }}
        />
        <View style={style.submitbutton}>
          <Button title="Submit" onPress={handleSubmit} />
        </View>

        <Text style={style.textStyle}>Count:{count}</Text>
        <TouchableOpacity
          style={style.button}
          onPress={() => setCount(count + 1)}>
          <Text style={style.buttontext}>Touchable Opacity</Text>
        </TouchableOpacity>

        <TouchableHighlight
          style={style.button}
          onPress={() => setCount(count - 1)}>
          <Text style={style.buttontext}>Touchable Highlight</Text>
        </TouchableHighlight>

        <TouchableWithoutFeedback onPress={() => setCount(count + 1)}>
          <View style={style.button}>
            <Text style={style.buttontext}>TouchableWithoutFeedback</Text>
          </View>
        </TouchableWithoutFeedback>

        <View style={style.container}>
          <Image
            style={style.image}
            source={{
              uri: 'https://images.unsplash.com/photo-1671465436095-767210425904?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
            }}
          />
          <Text style={style.text}>
            1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            utaliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </Text>
          <Image
            style={style.image}
            source={{
              uri: 'https://images.unsplash.com/photo-1671485684643-c9f157751007?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
            }}
          />
          <Text style={style.text}>
            2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            utaliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </Text>
        </View>

        <View>
          {DATA.map(item => {
            return (
              <View key={item.id}>
                <Text style={style.text}>{item.title} </Text>
                <Text style={style.text}>{item.id} </Text>
              </View>
            );
          })}
        </View>
        <View style={style.container}>
          <ImageBackground
            source={{
              uri: 'https://images.unsplash.com/photo-1661956602926-db6b25f75947?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1396&q=80',
            }}
            resizeMode="cover"
            style={style.backgroundImage}>
            <Text style={style.bgtext}>Background Image</Text>
          </ImageBackground>
        </View>
        <FlatList
          data={DATA}
          renderItem={({item}) => (
            <View>
              <Text style={style.text}>{item.title}</Text>
              <Text style={style.text}>{item.id}</Text>
            </View>
          )}
        />
        {data.map(item => {
          console.log(item, '====>>>');
          return (
            <View>
              <Text style={style.text}>{item.color}</Text>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};
export default Form;
