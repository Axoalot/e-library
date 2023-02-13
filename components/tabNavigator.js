import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Search from "../Screens/search";
import Transaction from "../Screens/transaction";

const Tab = createBottomTabNavigator()

export default class TabNavigator extends Component{
    render(){
        return(
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="transation" component={Transaction}/>
                    <Tab.Screen name="search" component={Search}/>
                </Tab.Navigator>
            </NavigationContainer>
        )
    }
}