import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import AppInner from './AppInner';
import { store } from './src/store';

const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <AppInner />
            </NavigationContainer>
        </Provider>
    );
};

const styles = StyleSheet.create({});

export default App;
