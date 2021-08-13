import {truncate} from 'prelude-ls';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {changeAuth} from '../../Redux/slice';
const LoginScreen = () => {
  const dispatch = useDispatch();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Code giao diện Đăng nhập</Text>
      <TouchableOpacity onPress={() => dispatch(changeAuth(true))}>
        <Text>Bấm vào đây để Đăng nhập</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
