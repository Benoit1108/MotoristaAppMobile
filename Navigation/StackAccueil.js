import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import Search from '../Components/Search';
import CarsDetail from '../Components/CarsDetail';

const StackAccueilComponent = createStackNavigator();

class StackAccueil extends React.Component {
    render() {
        return(
            <StackAccueilComponent.Navigator>
                <StackAccueilComponent.Screen
                    name='Accueil'
                    component={Search}
                    options = {{
                        headerStyle:{
                            backgroundColor: '#1f1f1f',
                            borderColor : '#DCDCDC',
                            borderBottomWidth :0.5,
                        },
                        headerTitleStyle: {
                            color: '#ffffff',
                            opacity : 0,
                        },
                        headerLeft: () => {
                            return (
                                <TouchableOpacity>
                                    <Image
                                        source={require('../Images/Logo.png')}
                                        style={styles.image}
                                    />
                                </TouchableOpacity>
                            );
                          },
                    }}                     
                />
                <StackAccueilComponent.Screen
                    name ='Caractéristiques de la voiture'
                    component={CarsDetail}
                    options = {{
                        headerStyle:{
                            backgroundColor: '#1f1f1f',
                            borderColor : '#DCDCDC',
                            borderBottomWidth :0.5,
                        },
                        headerTitleStyle: {
                            color: 'white',
                            //opacity : 0,
                        },
                        titleStyle: {
                            tintColor: '#DCDCDC'
                        },
                        headerBackTitleStyle : {
                            color: '#DCDCDC',
                        },
                        headerTintColor : '#DCDCDC',
                    }}
                />  
            </StackAccueilComponent.Navigator>
        )
    }
}
const styles = StyleSheet.create({
    image: {
        height: 35,
        resizeMode : 'contain'
    },
})

export default StackAccueil;
