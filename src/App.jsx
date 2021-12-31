import React, {useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Home from './screens/Home';
import PushNotification from 'react-native-push-notification';
import Todo from './screens/Todo';

const Tab = createBottomTabNavigator();

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
        <Tab.Navigator
          screenOptions={({route}) => ({
            header: () => null,
            tabBarIcon: ({focused, size, color}) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = 'home';
                size = focused ? 25 : 20;
                color = focused ? '#f0f' : '#555';
              } else if (route.name === 'Todo') {
                iconName = 'Todo';
                size = focused ? 25 : 20;
                color = focused ? '#f0f' : '#555';
              }
              return (
                <>
                  <Icon name={iconName} size={25} color={color} />
                </>
              );
            },
          })}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Todo" component={Todo} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
