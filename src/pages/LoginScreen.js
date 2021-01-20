import React from "react";
import {View, Text, TextInput, StyleSheet, Button, ActivityIndicator} from 'react-native';
import FormRow from '../components/FormRow.js';
import firebase from "firebase";

export default class LoginPage extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            mail:'',
            password:'',
            isLoading: false,
        }
    }

    componentDidMount(){
        const firebaseConfig = {
            apiKey: "AIzaSyDa8EXaYkZ7VJqf1KjmOvdcXOikA4ncPxY",
            authDomain: "series-17287.firebaseapp.com",
            projectId: "series-17287",
            storageBucket: "series-17287.appspot.com",
            messagingSenderId: "865964494871",
            appId: "1:865964494871:web:d68894f872e2240d108c52",
            measurementId: "G-P0JPRTDW0K"
          };
          if(firebase.apps.length===0){
          firebase.initializeApp(firebaseConfig)
          };

          
    }

    onChangeHandler(field, value){
        // const newState = {};
        // newState[field] = value;
        // this.setState(newState);

        this.setState({
            [field]: value
        });
    }

    tryLogin(){

        this.setState({isloading:true});

        const {mail, password} = this.state;

        firebase
          .auth()
          .signInWithEmailAndPassword(mail,password)
          .then(
              user =>{
                  console.log('Usuario Autenticado: ', user);
              }
          )
          .catch(error =>{
                  console.log('Usuário não encontrado!', erro);
              })
          .then(() => this.setState({ isloading:false }));
          
    }

    renderButton(){
        if(this.state.isLoading)
        {
            return <ActivityIndicator/>;
        }
       
        return(
            <Button
                 title='Login'
                 onPress = {() => this.tryLogin()}/>
        );
        
    }
    
    render(){
        return(
            <View style = {styles.container}>
                <FormRow first>
                <TextInput 
                    style={styles.input}
                    placeholder="user@email.com"
                    value={this.state.mail}
                    onChangeText={value => this.onChangeHandler('mail',value)}
                />
                </FormRow>
                <FormRow last>
                <TextInput 
                    style={styles.input}
                    placeholder="*****"
                    secureTextEntry={true}
                    value={this.state.pasword}
                    onChangeText = {value => this.onChangeHandler('password', value)} />
                </FormRow>
               
                {this.renderButton()}

                 </View>
            
        );
    }
}

const styles = StyleSheet.create({
    container:{
        paddingLeft: 10,
        paddingRight:10,
        backgroundColor:'#eeeeee'
    },
    input:{
        paddingLeft:5,
        paddingRight:5,
        paddingBottom:5
    }
});