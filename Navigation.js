import {createStackNavigator, createAppContainer} from 'react-navigation';
import Register from './Register';

const RegisterStackNavigator=createStackNavigator({
    Register:{
        screen: Register,
        navigationOptions:{
            title: "Inscription"
        }
    }
})

export default createAppContainer(RegisterStackNavigator);