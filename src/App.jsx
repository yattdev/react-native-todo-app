import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Home from './screens/Home';

const Tab = createBottomTabNavigator();

const App = () => {
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
              }
              return (
                <>
                  <Icon name={iconName} size={25} color={color} />
                </>
              );
            },
          })}>
          <Tab.Screen name="Home" component={Home} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
