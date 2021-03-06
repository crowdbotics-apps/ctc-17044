import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile45734Navigator from '../features/UserProfile45734/navigator';
import Tutorial45733Navigator from '../features/Tutorial45733/navigator';
import NotificationList45705Navigator from '../features/NotificationList45705/navigator';
import Settings45704Navigator from '../features/Settings45704/navigator';
import Settings45696Navigator from '../features/Settings45696/navigator';
import UserProfile45694Navigator from '../features/UserProfile45694/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile45734: { screen: UserProfile45734Navigator },
Tutorial45733: { screen: Tutorial45733Navigator },
NotificationList45705: { screen: NotificationList45705Navigator },
Settings45704: { screen: Settings45704Navigator },
Settings45696: { screen: Settings45696Navigator },
UserProfile45694: { screen: UserProfile45694Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
