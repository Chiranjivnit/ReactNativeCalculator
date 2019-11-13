import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    
} from 'react-native';

const button =['1','2','3','4','5','6',
               '7','8','9','0','.','+','-','*','/'
               ]

class Keypad extends Component{

    handleButton=(e)=>{
        //e.preventDefault();
        this.props.buttonPresed(e.target.value)
        console.log(e.target.value)
    }

    render() {
        return (
            <View>
              <Text>uuiu</Text>
              {/* {button.map(index,id)=>{}} */}
              <Button value= {1} title="1" onPress={()=>this.handleButton(1)}></Button>
              <Button title="2"></Button>
              <Button title="3"></Button>
              <Button title="4"></Button>
              <Button title="5"></Button>
              <Button title="6"></Button>
              <Button title="7"></Button>
              <Button title="8"></Button>
              <Button title="9"></Button> 
              <Button title="0"></Button> 
              <Button title="+"></Button>
              <Button title="-"></Button>
              <Button title="*"></Button>
              <Button title="/"></Button>
              <Button title="="></Button>
                
                  
            </View>
        )
    }
}

export default Keypad;