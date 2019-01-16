import { StackActions, NavigationActions } from 'react-navigation';

let _navigator;

setTopLevelNavigator = (navigatorRef) => {
  _navigator = navigatorRef;
}

navigate = (routeName) => {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName
    })
  );
}

reset = (routeName) => {
  _navigator.dispatch(
    StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName })],
    })
  );
}

export default {
  navigate,
  setTopLevelNavigator,
  reset
};