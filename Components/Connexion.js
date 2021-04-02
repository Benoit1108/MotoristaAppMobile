import react from "react";
import React from 'react'
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

class Connexion extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          value0: false,
        }
    }
    render(){
        return (
            <View style={styles.main_container}>
                <View style={styles.box_image}>
                    <Image
                        source={require('../Images/Logo.png')}
                        style={styles.image}
                    >    
                    </Image>
                </View>
                <View style={styles.container}>
                    <View style={styles.signin_up}>
                        <TouchableOpacity>
                            <Text style={styles.signin}>SIGN IN</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.signup}>SIGN UP</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TextInput
                            style={styles.inputConnexion}
                            placeholder='Username'
                            placeholderTextColor={'#1f1f1f'}
                        >
                        </TextInput>  
                    </View>
                    <View>
                        <TextInput
                            style={styles.inputConnexion}
                            placeholder='Password'
                            placeholderTextColor={'#1f1f1f'}
                        >
                        </TextInput>
                    </View>
                    <View style={styles.container_checkBox}>
                        <CheckBox
                            style={styles.checkBox}
                            value={this.state.value0}

                            onValueChange={(value) =>
                            this.setState({
                                value0: value,
                            })
                        }
                        >
                        </CheckBox>
                        <Text 
                            style={styles.text_stay_signed}
                        >
                            Stay signed in
                        </Text>
                    </View>
                    <TouchableOpacity
                        style={styles.button_connexion}  
                    >
                        <Text
                            style={styles.text_connexion}
                        >
                        SIGN IN 
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity

                    >
                        <Text style={styles.forgot_password}>Forgot Password ?</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container:{
        flex: 1,
        backgroundColor: '#1f1f1f',
    },
    text:{
        color: '#DCDCDC',
        fontSize : 28,
    },
    box_image : {     
        flex: 5,
        marginTop : 20,
    },
    image:{
        height: 40,
        resizeMode : 'contain',
        marginTop: 75,
        marginBottom: 25,
    },
    container:{
        flex: 12
    },
    button_connexion:{
        borderRadius: 50,
        borderWidth: 1,
        borderColor : "#1f1f1f",
        marginTop : 20,
        marginRight: 50,
        marginLeft: 50,
        width: 310,
        height: 50,
        alignSelf:'center',
        backgroundColor : '#008577',
    },
    inputConnexion : {
        backgroundColor:'#DCDCDC',
        borderRadius : 50,
        marginTop: 25,
        paddingLeft: 25,
        fontSize : 18,
        marginRight: 50,
        marginLeft: 50,
    },
    text_connexion : {
        textAlign: 'center',
        fontSize: 20,
        paddingTop: 10,
        fontWeight: 'bold',
        color: '#1f1f1f'
    },
    container_checkBox :{
        flexDirection : 'row',
        marginTop: 15,
        marginLeft : 65,
    },
    text_stay_signed : {
        color : '#DCDCDC',
        paddingTop: 6,
        fontWeight : 'bold',
    },
    forgot_password : {
        color : '#808183',
        textAlign: 'center',
        marginTop : 20
    },
    signin_up : {
        flexDirection : 'row',
        justifyContent : 'center',
        paddingBottom : 5,
    },
    signin : {
        color : '#DCDCDC',
        textAlign : 'center',
        fontSize : 18,
        fontWeight : 'bold',
        marginRight : 20,
        borderBottomWidth : 2.2,
        borderColor : '#008577',
    },
    signup : {
        color : '#DCDCDC',
        textAlign: 'center',
        fontSize : 18,
        fontWeight : 'bold',
        marginLeft : 20,
    },

    
})

export default Connexion