import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../screens/home/home';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import routesStyles from './routes.styles';
import {MyFiles} from '../screens/my-files/my-files';
import {Upload} from '../screens/upload/upload';
import {Notifications} from '../screens/notifications/notifications';
import {Profile} from '../screens/profile/profile';
import {Login} from '../screens/login/login';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export function StackRoutes() {
  <Stack.Navigator>
    <Tab.Screen name="Login" component={Login} />
  </Stack.Navigator>;
}

export default function Routes() {
  return (
    <>
      <Tab.Navigator
        initialRouteName="Login"
        screenOptions={{
          tabBarStyle: routesStyles.tabBarStyle,
          tabBarActiveTintColor: '#121212',
          tabBarLabelStyle: {
            paddingBottom: 5,
          },
          tabBarLabelPosition: 'below-icon',
          headerShown: false,
        }}>
        <Tab.Screen
          name="Login"
          component={Login}
          options={{
            tabBarStyle: {
              display: 'none',
            },
            tabBarButton: () => null,
            tabBarVisible: false,
          }}
        />
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({focused}) => (
              <FontAwesome
                name="home"
                style={focused ? routesStyles.activeIcon : routesStyles.icon}
              />
            ),
          }}
        />
        <Tab.Screen
          name="My Files"
          component={MyFiles}
          options={{
            tabBarIcon: ({focused}) => (
              <FontAwesome
                name="folder"
                style={focused ? routesStyles.activeIcon : routesStyles.icon}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Upload"
          component={Upload}
          options={{
            tabBarIcon: ({focused}) => (
              <AntDesign
                name="pluscircle"
                style={focused ? routesStyles.activeIcon : routesStyles.icon}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={Notifications}
          options={{
            tabBarIcon: ({focused}) => (
              <Ionicons
                name="notifications"
                style={focused ? routesStyles.activeIcon : routesStyles.icon}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({focused}) => (
              <Ionicons
                name="person"
                style={focused ? routesStyles.activeIcon : routesStyles.icon}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}
