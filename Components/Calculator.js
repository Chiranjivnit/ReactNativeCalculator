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
import CalculatorResult from './CalculatorResult';

const buttons = [
    ['CLEAR', 'DEL'],
    ['7', '8', '9', '/'],
    ['4', '5', '6', '*'],
    ['1', '2', '3', '-'],
    ['0', '.', '=', '+'],
];

class Calculator extends Component {

    constructor() {
        super();
        this.state = {
            displayValue: '0',
            operator: null,
            firstValue: '',
            secondValue: '',
            nextValue: false
        }
    }

    showButtons = () => {
        let showButtons = buttons.map((items, index) => {
            let buttonItems = items.map((mapItems, mapIndex) => {
                return <CalculatorResult
                    data={mapItems}
                    handleButtonClick={() => this.handleInput(mapItems)}
                    key={mapIndex}

                />
            });
            return <View style={styles.inputRow} key={index}>
                {buttonItems}
            </View>
        });
        return showButtons
    }

    handleInput = (input) => {
        const { displayValue, operator, firstValue, secondValue, nextValue } = this.state;

        switch (input) {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':

                this.setState({
                    displayValue: displayValue === '0' ? input : displayValue + input
                });

                if (!nextValue) {
                    this.setState({
                        firstValue: firstValue + input
                    })
                    console.log('firstValue',this.state.firstValue)
                } else {
                    this.setState({ secondValue: secondValue + input })
                }

                break;
            case '+':
            case '-':
            case '*':
            case '/':
                this.setState({
                    nextValue: true,
                    operator: input,
                    displayValue: operator !== null ? displayValue.substr(0, displayValue.length - 1) : displayValue + input
                })
                console.log("operaror",operator)
                break;

            case '.':
                let dot = displayValue.parseFloat().slice(-1) // get the last character
                this.setState({
                    displayValue: dot !== '.' ? displayValue + input : displayValue
                })

                if (!nextValue) {
                    this.setState({
                        firstValue: firstValue + input
                    })
                } else {
                    this.setState({ secondValue: secondValue + input })
                }
                break;
            case '=':
                //let formaterOperator = (operator == '*' ? 'x' : operator === '/' : operator
                let result = eval(firstValue + operator + secondValue)
                this.setState({
                    displayValue: result, //result % 1 === 0 ? result.toFixed(2),
                    firstValue: result,   //result % 1 === 0 ? result.toFixed(2)
                    secondValue: '',
                    operator: null,
                    nextValue: false
                })
                break;
            case 'CLEAR':
                console.log()
                this.setState({
                    displayValue: '0',
                    firstValue: '',
                    secondValue:''

                })
                break;
            case 'DEL':
                let value = displayValue.toString();
                let deleteValue = value.substr(0, value.length - 1);
                let length = value.length;
                this.setState({
                    displayValue: length == 1 ? '' : deleteValue,
                    firstValue:length == 1 ? '' : deleteValue
                })
                break;
        }

    }

    render() {
        
        return (
            <View style={styles.container}>
                <View style={styles.resultContainer} >
                    <Text style={styles.resultText} >
                        {this.state.displayValue}
                    </Text>
                </View>

                <View style={styles.inputContainer} >
                    {this.showButtons()}
                </View>
            </View>
        )
    }
}

export default Calculator;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    resultContainer: {
        flex: 2,
        justifyContent: 'center',
        backgroundColor: '#1E1240'
    },
    inputContainer: {
        flex: 8,
        backgroundColor: '#3D0075'
    },
    resultText: {
        color: 'white',
        fontSize: 50,
        fontWeight: 'bold',
        padding: 20,
        textAlign: 'right'
    },
    inputRow: {
        flex: 1,
        flexDirection: 'row'
    }
})