import React from 'react';
import { View, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../AppInner';

type SignInScreenProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>;
function SignIn({ navigation }: SignInScreenProps) {
    return (
        <View>
            <Text>로그인 화면</Text>
        </View>
    );
}

export default SignIn;
