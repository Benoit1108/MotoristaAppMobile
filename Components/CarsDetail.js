import React from 'react';
import {Text, View, StyleSheet, ActivityIndicator, ScrollView, Image, Button} from 'react-native';
import { getCarById, getCarImage } from '../Api/carsApi';
import { getModelById } from '../Api/modelsApi';
//import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { connect } from 'react-redux';

 class CarsDetail extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            car: undefined,
            model : undefined,
            isLoading : true
        }
    }
    
    componentDidMount() {
        getCarById(this.props.route.params.idCar).then(response => {
            this.setState({
                car: response[0],
            })
        })
            .finally(() => {
                getModelById(this.state.car.id_model).then(response => {
                    this.setState({
                        model: response[0],
                        isLoading: false
                    })
                })
            })
     }
     
     componentDidUpdate() {
         console.log("comonentDidUpdate : ")
         console.log(this.props.cartCar)
     }

     _toggleCart() {
         const action = { type: "TOGGLE_CART", value: this.state.car }
         this.props.dispatch(action)
    } 
    
    _displayImage(image) {
        return(
            <Image
                style={styles.image}
                source={{ uri: getCarImage(image)}}
            />
        )
    }

    _displayLoading() {
        if(this.state.isLoading) {
            // if Loading egal true, display loading on screen
            return(
                <View style={styles.loading_container}>
                    <ActivityIndicator size='large' color={'white'}/>
                </View>
            ) 
        }
    }

     _displayCar() {  
        if ((this.state.car != undefined) && (this.state.model != undefined)) {
            return(
                <ScrollView style={styles.scrollview_container}>
                    <Text style={styles.text_title}>{this.state.car.mark} {this.state.car.model}</Text>
                    {this._displayImage(this.state.car.picture)}
                    <View style={styles.description_container}>
                        <Text style={styles.description}>Description du véhicule</Text>
                    </View>
                    <View style={styles.information_container}>
                        <Text style={styles.technique} > Fiche technique </Text>
                        <Text style={styles.information}>Price : {this.state.car.price} €</Text>
                        <Text style={styles.information}>Gearbox : {this.state.model.gearbox}</Text>
                        <Text style={styles.information}>Engine : {this.state.model.engine}</Text>
                        <Text style={styles.information}>Power engine : {this.state.model.powerEngine} Ch</Text>
                        <Text style={styles.information}>Color : {this.state.car.color}</Text>
                        <Text style={styles.information}>Energy : {this.state.model.energy}</Text>
                        <Text style={styles.information}>Weight : {this.state.model.weight} Kg</Text>
                        <Text style={styles.information}>Number of passengers : {this.state.model.nbPassengers}</Text>
                    </View>
                    <Button title="Cart" onPress={() => this._toggleCart()}></Button>
                </ScrollView>
            )
        }
    }

     render() {
         return(
             <View style={styles.main_container}>
                {this._displayLoading()}
                {this._displayCar()}
             </View>
         )
     }
 }

 const styles = StyleSheet.create({
     main_container : {
         flex: 1,
         backgroundColor :'#1f1f1f',
     },
     text_title: {
         color :'#DCDCDC',
         textAlign :'center',   
         fontWeight : 'bold',
         fontSize : 24,
         paddingTop : 20
     },
     loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        color : '#DCDCDC'
      },
      scrollview_container: {
        flex: 1
      },
      image : {
          marginTop : 20,
          marginLeft : 5,
          marginRight : 5,
          height: 250,
      },
      description : {
          color: '#DCDCDC',
          fontSize: 16
     },
     description_container: {
         flex: 1,
         marginTop: 15,
         marginLeft: 10,
         marginRight: 10,         
     },
     information_container: {
         flex: 1,
         flexDirection: 'column',
         marginLeft: 30 ,
         marginRight : 30,

     },
     information: {
         color: '#DCDCDC',
         borderBottomColor: '#DCDCDC',
         borderBottomWidth: 1,
         fontSize: 18,
         marginBottom: 5,
         marginTop: 5,
         paddingBottom : 10,
     },
     technique: {
         color: '#DCDCDC',
         fontSize: 20,
         marginBottom: 10,
         marginTop: 10,
         textAlign: 'center',
         fontWeight :'bold'
     },
 })

const mapStateToProps = (state) => {
    return {
        cartCar: state.cartCar
    }
} 

 export default connect(mapStateToProps)(CarsDetail);