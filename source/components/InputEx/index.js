import {Text, TextInput, View, Button, Alert} from 'react-native';
import React, {useState} from 'react';
import style from './style';

const InputExample = () => {
  const [count, setCount] = useState(0);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  console.log('===>>username', username);
  console.log('===>>password', password);
  return (
    <View style={style.main}>
      <Text style={style.heading}>Hello world</Text>
      <Text style={style.textStyle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In orci dui,
        lobortis blandit nisl et, sodales eleifend purus. Duis lacinia aliquet
        nulla. Curabitur iaculis dui a ex scelerisque, vel lacinia est
        ultricies. Cras interdum odio quis leo bibendum dapibus. Sed in tellus
        dui. Etiam mattis vestibulum arcu, id imperdiet lorem interdum et.
        Aliquam erat volutpat.
      </Text>

      <Text style={style.textStyle}>Username</Text>
      <TextInput
        style={style.textInput}
        keyboardType="text"
        placeholder="Enter Username"
        value={username}
        onChangeText={setUsername}
      />
      <Text style={style.textStyle}>password</Text>
      <TextInput
        style={style.textInput}
        keyboardType="password"
        placeholder="Enter password"
        value={password}
        onChangeText={setPassword}
      />
      <Text style={style.textStyle}>count:{count}</Text>
      <View style={style.button1}>
        <Button
          style={style.button1}
          title="-"
          onPress={() => setCount(count - 1)}
        />
        <Button
          style={style.button1}
          title="+"
          onPress={() => setCount(count + 1)}
        />
      </View>
    </View>
  );
};

export default InputExample;
