import React, { Component } from "react";
import { View,Text, StyleSheet, TouchableOpacity } from "react-native";
import *as Permissions from "expo-permissions"
import { BarCodeScanner } from "expo-barcode-scanner";

export default class transaction extends Component{
    constructor(props){
        super(props)
        this.state = {
            domState: "normal",
            hasCameraPermissions:null,
            scaned: false,
            scanedData:"null"
        }
    }
    getCameraPermition = async(domState) => {
        const{status} = await Permissions.askAsync(Permissions.CAMERA)
        this.setState({
            hasCameraPermissions:status==="granted",
            domState: domState,
            scaned: false,

        })
    }
    handleBarCodeScanner = async({type,data}) => {
     this.setState({
        domState:"normal",
        scanedData:data,
        scaned:true
    })     
    }
    render(){
        const{
            domState,
            hasCameraPermissions,
            scaned,
            scanedData
        }= this.state
        if (domState === "scanner") {
            return(
                <BarCodeScanner
                onBarCodeScanned={scaned?undefined:this.handleBarCodeScanner}
                style = {StyleSheet.absoluteFillObject}
                />
            )
        }
        return(
            <View style = {styles.container}>
                <Text style = {styles.text}>
                    {hasCameraPermissions? scanedData: "solicitar permição da camera"}
                </Text>

                <TouchableOpacity style = {styles.button}
                onPress = {() => this.getCameraPermition("scanner")}
                >
                    <Text style = {styles.buttonText}>
                        Scanear com QR code
                    </Text>
                </TouchableOpacity>
                
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#5653D4"
    },
    text: {
      color: "#ffff",
      fontSize: 15
    },
    button: {
      width: "43%",
      height: 55,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F48D20",
      borderRadius: 15
    },
    buttonText: {
      fontSize: 15,
      color: "#FFFFFF"
    }
  });