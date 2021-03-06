import React from 'react';
// import { Platform } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import OrdersStackNavigator from './OrdersStackNavigator';
import ProductsStackNavigator from './ProductsStackNavigator';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';
import Colors from '../constants/Colors';
import AdminStackNavigator from './AdminStackNavigator';

const ShopDrawerNavigator = (props) => {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Shop"
        drawerContentOptions={{
          activeTintColor: Colors.defaultPrimary,
        }}
      >
        <Drawer.Screen
          name="Products"
          component={ProductsStackNavigator}
          options={{
            drawerIcon: ({ focused, color }) => (
              <Ionicons
                name={
                  Platform.OS === 'android' ? 'md-cart' : 'ios-cart'
                }
                size={23}
                color={focused ? Colors.defaultPrimary : color}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Orders"
          component={OrdersStackNavigator}
          options={{
            drawerIcon: ({ focused, color }) => (
              <Ionicons
                name={
                  Platform.OS === 'android' ? 'md-list' : 'ios-list'
                }
                size={23}
                color={focused ? Colors.defaultPrimary : color}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="UserProducts"
          component={AdminStackNavigator}
          options={{
            drawerIcon: ({ focused, color }) => (
              <Ionicons
                name={
                  Platform.OS === 'android'
                    ? 'md-create'
                    : 'ios-create'
                }
                size={23}
                color={focused ? Colors.defaultPrimary : color}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default ShopDrawerNavigator;
