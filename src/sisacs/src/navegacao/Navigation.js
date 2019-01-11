import { createStackNavigator, createAppContainer } from "react-navigation";
import F1P1 from './formularios/F1/F1P1'
import F1P2 from './formularios/F1/F1P2'
import F1P3 from './formularios/F1/F1P3'
import F1P4 from './formularios/F1/F1P4'
import F1P5 from './formularios/F1/F1P5'
import F1P6 from './formularios/F1/F1P6'
import TelaInicial from './TelaInicial'
import Login from './Login'

const AppNavigator = createStackNavigator(
  {
    Login,
    Home: TelaInicial,
    F1P1,
    F1P2,
    F1P3,
    F1P4,
    F1P5,
    F1P6
  },
  {
    initialRouteName: "Login"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer
