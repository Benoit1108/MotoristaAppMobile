import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Search from '../Components/Search';
import Connexion from '../Components/Connexion';
import {StyleSheet, Image} from 'react-native';
import StackAccueil from './StackAccueil';

const Tab = createBottomTabNavigator();

class BottomNavigation extends React.Component {
    render() {
        return (
            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: '#1f1f1f',
                    style:styles.bottom
                }}
            >
                <Tab.Screen 
                    name="Home" 
                    component={StackAccueil}
                    options={{
                        tabBarIcon: () => {
                            return(
                                <Image
                                    source={require('../Images/home.png')}
                                    style={styles.icon}
                                />
                            )
                        }
                    }}
                />
                <Tab.Screen 
                    name="Settings" 
                    component={Connexion} 
                    options={{
                        tabBarIcon: () => {
                            return(
                                <Image
                                    source={require('../Images/connex.png')}
                                    style={styles.icon}
                                />
                            )
                        }
                    }}
                />
            </Tab.Navigator>
          );
    }
}

const styles = StyleSheet.create({
    bottom: {
        backgroundColor:'#DCDCDC',
    },
    icon : {
        width: 30,
        height: 30,
    }
})

export default BottomNavigation
