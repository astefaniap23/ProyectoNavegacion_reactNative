import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, Image, ScrollView } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

var rutaFondo= require ("./imagenes/fondo.jpg");
var rutaLogo= require ("./imagenes/logo.png");
var altoCaja = 100;




//—class———

class VentanaInicio extends React.Component{
  render(){
  return(
    <ImageBackground source={rutaFondo} style={miEstilo.imagenFondo}>
        <View style={miestilo.caja01}>
          <Image style={miestilo.logo} source={rutaLogo}>
          </Image>
        </View>
      <Button title= "Ir a datos" onPress={()=> this.props.navigation.push('Datos')} />
    </ImageBackground>
    );
    }
  }
  
  
  class VentanaDatos extends React.Component{
    render(){
    return(
   
      <ImageBackground source={rutaFondo} style={miestilo.imagenFondo}>
        <ScrollView>
          <View>

            <View  style= {miestilo2.fila}>
              <View style={miestilo2.caja1}> </View>
              <View style={miestilo2.caja2}> </View>
              <View style={miestilo2.caja3}> </View>
            </View>
            <View  style= {miestilo2.fila}>
              <View style={miestilo2.caja1}> </View>
              <View style={miestilo2.caja2}> </View>
              <View style={miestilo2.caja3}> </View>
            </View>
            <View  style= {miestilo2.fila}>
              <View style={miestilo2.caja1}> </View>
              <View style={miestilo2.caja2}> </View>
              <View style={miestilo2.caja3}> </View>
            </View>
            <View  style= {miestilo2.fila}>
              <View style={miestilo2.caja1}> </View>
              <View style={miestilo2.caja2}> </View>
              <View style={miestilo2.caja3}> </View>
            </View>

            <View  style= {miestilo2.fila}>
              <View style={miestilo2.caja1}> </View>
              <View style={miestilo2.caja2}> </View>
              <View style={miestilo2.caja3}> </View>
            </View>
            <View  style= {miestilo2.fila}>
              <View style={miestilo2.caja1}> </View>
              <View style={miestilo2.caja2}> </View>
              <View style={miestilo2.caja3}> </View>
            </View>
            <View  style= {miestilo2.fila}>
              <View style={miestilo2.caja1}> </View>
              <View style={miestilo2.caja2}> </View>
              <View style={miestilo2.caja3}> </View>
            </View>
            <View  style= {miestilo2.fila}>
              <View style={miestilo2.caja1}> </View>
              <View style={miestilo2.caja2}> </View>
              <View style={miestilo2.caja3}> </View>
            </View>

      
            <View>
              <Button title= "Ir a datos" onPress={()=> this.props.navigation.push('Inicio')} />
            </View>
        </View>

        </ScrollView>

      </ImageBackground>
      
      );
    }
  }
  
  //——————————
  
  const navegar =  createStackNavigator(
  {
    Inicio: VentanaInicio,
    Datos: VentanaDatos
  },{
    initialRouteName: 'Inicio',
  }
  );
  
  //—llama a la clase
  const AppContainer = createAppContainer(
    navegar
  );
  //——clase principal
  export default class App extends React.Component{
  render () {
    return <AppContainer/>;
   }
  }
  
  
  const miestilo = StyleSheet.create({
  
  contenedor: {
    flex:1,
    flexDirection:'row'
},
  
  imagenFondo:{
    flex:1,
    resizeMode:"cover",
    justifyContent:"center"
},
  
  caja01: {
    marginTop: 10,
    height : altoCaja,
    alignItems: "center",
    backgroundColor:"#9c9c9c",
    opacity: 0.7 
  },
  
  logo:{
    flex:1,
    resizeMode: "contain",
    transform:[{scale:0.9}]
  }
  
  });


  const miestilo2 = StyleSheet.create({
  
    fila: {
      flex:1,
      flexDirection:'row',
      marginTop:10,
      marginRight:20,
      marginLeft:20
    },
    caja1:{
      flex:1,
      height:100,
      backgroundColor:"orange",
      marginRight:20,
      marginLeft:20
    },
    caja2:{
      flex:1,
      height:100,
      backgroundColor:"green",
      marginRight:20,
      marginLeft:20
    },
    caja3:{
      flex:1,
      height:100,
      backgroundColor:"yellow",
      marginRight:20,
      marginLeft:20
    }
    
});


/*export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
