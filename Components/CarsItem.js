import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import {getCarImage} from '../Api/carsApi';

class CarsItem extends React.Component {

    _displayImage(image) {
        return(
            <Image
                style={styles.image}
                source={{ uri: getCarImage(image)}}
            />
        )
    }

    render() {
        const {cars, displayDetailForCar} = this.props
        return (
            <TouchableOpacity 
                style={styles.main_container}
                onPress={() => displayDetailForCar(cars.id)}
            >
                <Text style={styles.text}>{cars.mark.concat(' ', cars.model).toUpperCase()}</Text>
                {this._displayImage(cars.picture)}
                <Text style={styles.text}>Caractéristique du véhicule</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        height: 250,
        marginTop : 10,
        borderColor : '#DCDCDC',
        borderBottomWidth :0.5,
        paddingBottom : 15
    },
    image: {
        margin: 10,
        backgroundColor: 'gray',
        flex: 10,
    },
    text: {
        color :'#DCDCDC',
        flex : 1,
        textAlign:'center',
        fontWeight:'bold',
    }
})

export default CarsItem
