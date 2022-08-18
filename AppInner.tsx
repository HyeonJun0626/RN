import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from './src/pages/SignIn';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// function HomeScreen() {
//     const value = useAppSelector((state) => state.user.value);
//     const dispatch = useAppDispatch();
//
//     const onClickHome = useCallback(() => {
//         dispatch(userSlice.actions.setValue(1));
//     }, []);
//
//     return (
//         <View style={styles.homeContainer}>
//             <Pressable onPress={onClickHome}>
//                 <Text>{value}</Text>
//                 <Text>HomeScreen</Text>
//             </Pressable>
//         </View>
//     );
// }
export type RootStackParamList = {
    SignIn: undefined;
    SignUp: undefined;
};
function AppInner() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="로그인" component={SignIn} />
        </Stack.Navigator>
    );
}

// const styles = StyleSheet.create({
//     homeContainer: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });

export default AppInner;
