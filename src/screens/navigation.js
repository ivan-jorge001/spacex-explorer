import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import LaunchList from './LaunchList';
import LaunchDetail from './LaunchDetail';
import CreateLaunch from './CreateLaunch';

import { SCREENS } from '../utils/constants'

const Stack = createStackNavigator();

const options = () => ({
    headerShown: false,
})

const AppStack = () => (
    <Stack.Navigator initialRouteName={SCREENS.LAUNCH_LIST}>
        <Stack.Screen name={SCREENS.LAUNCH_LIST} component={LaunchList} options={options} />
        <Stack.Screen name={SCREENS.LAUNCH_DETAIL} component={LaunchDetail} options={options} />
        <Stack.Screen name={SCREENS.CREATE_LAUNCH} component={CreateLaunch} options={options} />
    </Stack.Navigator>
)

export default AppStack;