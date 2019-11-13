import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    TouchableOpacity
} from 'react-native';


class CalculatorResult extends Component{

    render() {
        const {data,handleButtonClick} = this.props;
        console.log("data",data)
        return (
            
              <TouchableOpacity
                style={styles.container} 
                onPress={()=>handleButtonClick(data)}
                >
                <Text style={styles.text}>{data}</Text>
              </TouchableOpacity>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin:1,
        backgroundColor:'#3D0075',
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        color:'white',
        fontSize:26
    }
})

export default CalculatorResult;