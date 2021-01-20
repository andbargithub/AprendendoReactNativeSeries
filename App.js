import{ createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from './src/pages/LoginScreen'


const stackNavigator = createStackNavigator({
  'Login': {
    screen: LoginScreen,
    navigationOptions:{
      title: 'Login'
    }
  }
},{
  defaultNavigationOptions: {
    title: "Séries",
    headerTintColor: 'white',
    headerStyle:{
      backgroundColor: '#6ca2f7',
      borderWidth: 1,
      borderBottomColor: '#c5c5c5'
    },
    headerTitleStyle:{
      color: 'white',
      fontSize: 30,
    }
  }
});

const AppContainer = createAppContainer(stackNavigator);

export default AppContainer;
