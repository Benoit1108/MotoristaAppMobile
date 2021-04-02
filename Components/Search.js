import React from 'react'
import { StyleSheet, View, TextInput, Button, FlatList, Text} from 'react-native'
//import films from '../Helpers/filmsData';
import CarsItem from './CarsItem';
import { getAllCars } from '../Api/carsApi';

class Search extends React.Component {

    constructor(props) {
        super(props)
        this._cars = []
    }

    _loadCars() {
        getAllCars().then(data => {
            this._cars = data;
            this.forceUpdate();
        }
           
        ).catch((error) => console.error(error));
    }

    componentDidMount() {
        this._loadCars();
    }

    _displayDetailForCar = (idCar) => {
        this.props.navigation.navigate("Caractéristiques de la voiture", { idCar: idCar });
    }

    render() {
        return (
            <View style={styles.main_container}>
                <FlatList
                    data={this._cars}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => 
                        <CarsItem 
                            cars={item} displayDetailForCar = {this._displayDetailForCar}
                        />
                    }
                >     
                </FlatList>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: '#1f1f1f'
    },
    textinput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        paddingLeft: 5,
        marginBottom: 10,
        color: '#DCDCDC',
        textAlign: 'center'
    },
    text: {
        color: '#DCDCDC',
    }
})

export default Search