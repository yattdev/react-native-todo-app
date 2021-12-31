import React, {useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Home from './screens/Home';
import PushNotification from 'react-native-push-notification';
import Todo from './screens/Todo';
import Done from './screens/Done';
import Task from './screens/Task';

// Create Bottom tab navigator as todo app navigator
const Tab = createBottomTabNavigator();

const TodoTabNavigator = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={({route}) => ({
          header: () => null,
          tabBarIcon: ({focused, size, color}) => {
            let iconName;
            if (route.name === 'Todo') {
              iconName = 'clipboard-list';
              size = focused ? 25 : 20;
              color = focused ? '#0080ff' : '#555';
            } else if (route.name === 'Done') {
              iconName = 'clipboard-check';
              size = focused ? 25 : 20;
              color = focused ? '#0080ff' : '#555';
            }

            return (
              <>
                <Icon name={iconName} size={size} color={color} />
              </>
            );
          },
        })}>
        <Tab.Screen name="Todo" component={Todo} />
        <Tab.Screen name="Done" component={Done} />
        <Tab.Screen name="Task" component={Task} />
      </Tab.Navigator>
    </>
  );
};

// Create stack navigator as root navigator
const RootStack = createNativeStackNavigator();

const App = () => {
  // Function to create a notification channel
  const createChannels = () => {
    PushNotification.createChannel({
      channelId: 'channelId',
      channelName: 'Todo Application Notification',
    });
  };

  // Create channel when render in first time
  useEffect(() => {
    createChannels();
  }, []);
  return (
    <>
      <NavigationContainer>
        <RootStack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#0080ff',
            },
            headerTinColor: '#fff',
            headerTitleStyle: {
              fontSize: 25,
              fontWeight: 'bold',
            },
          }}>
          <RootStack.Screen name="Home" component={Home} />
          <RootStack.Screen
            name="TodoTabNavigator"
            component={TodoTabNavigator}
            options={{headerShown: false}}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
