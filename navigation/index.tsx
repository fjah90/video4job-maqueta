import * as React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { ColorSchemeName } from 'react-native';

import { RootStackParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
//import NotFoundScreen from '@creens/NotFoundScreen';
import LoginScreen from '../src/screens/SignIn/LoginScreen';
import RegisterScreen from '../src/screens/SignUp/StepOneScreen';
import LocationScreen from '../src/screens/SignUp/StepTwoScreen';
import TermsScreen from '../src/screens/SignUp/StepThreeScreen';
import BusinessDataScreen from '../src/screens/SignUp/business/FormBusinessDataScreen';
import OfertCreateScreen from '../src/screens/SignUp/business/FormOfertCreateScreen';
import FlashCardsScreen from '../src/screens/FlashCards/FlashCardsScreen';
import EmailLoginScreen from '../src/screens/SignIn/SignInEmailScreen';
import FlashFilterScreen from '../src/screens/FlashCards/FlashFilterScreen';
import FlashCandidateProfileScreen from '../src/screens/FlashCards/FlashCandidateProfileScreen';
import ListCandidateScreen from '../src/screens/Lists/ListCandidateScreen';
import ListFavoritesScreen from '../src/screens/Lists/ListFavoritesScreen';
import ListOffersScreen from '../src/screens/Lists/ListOffersScreen';
import ProfileBusinessScreen from '../src/screens/Profile/ProfileBusinessScreen';
import MyShopListScreen from '../src/screens/Profile/MyShopListScreen';
import ShoppingCardScreen from '../src/screens/Checkout/ShoppingCardScreen';
import WayToPayScreen from '../src/screens/Checkout/WayToPayScreen';
import SuccessScreen from '../src/screens/Checkout/SuccessScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

const BottomTabs = createBottomTabNavigator();

const BottomNavigator = ()=>{
  return(
    <BottomTabs.Navigator>
      <BottomTabs.Screen name="Candidate" component={ListCandidateScreen} />
      <BottomTabs.Screen name="Favorites" component={ListFavoritesScreen} />
      <BottomTabs.Screen name="Offers" component={ListOffersScreen} />
    </BottomTabs.Navigator>
  )
}

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={LoginScreen} options={{ title: 'SignIn' }} />
      <Stack.Screen name="EmailLogin" component={EmailLoginScreen} options={{ title: 'SignIn With Email' }} />
      <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'SignUp Step One' }} />
      <Stack.Screen name="Location" component={LocationScreen} options={{ title: 'SignUp Step Two' }} />
      <Stack.Screen name="Terms" component={TermsScreen} options={{ title: 'SignUp Step Three' }} />
      {/* Business Stack */}
      <Stack.Screen name="BusinessData" component={BusinessDataScreen} options={{ title: 'SignUp Business' }} />
      <Stack.Screen name="OfertCreate" component={OfertCreateScreen} options={{ title: 'SignUp Business > Ofert Create' }} />
      <Stack.Screen name="FlashCards" component={FlashCardsScreen} options={{ title: 'SignIn Business > Flash Candidates' }} />
      <Stack.Screen name="FlashFilter" component={FlashFilterScreen} options={{ title: 'SignIn Business > Flash Filter' }} />
      <Stack.Screen name="FlashCandidateProfile" component={FlashCandidateProfileScreen} options={{ title: 'SignIn Business > Flash Filter' }} />
      {/*TODO REMOVE*/}
      <Stack.Screen name="ListCandidate" component={ListCandidateScreen} options={{ title: 'List Candidates' }} />
      <Stack.Screen name="ListFavorites" component={ListFavoritesScreen} options={{ title: 'List Favorites' }} />
      <Stack.Screen name="ListOffers" component={ListOffersScreen} options={{ title: 'List Offers' }} />
      {/*TODO REMOVE*/}
      <Stack.Screen name="ProfileBusiness" component={ProfileBusinessScreen} options={{ title: 'My Profile' }} />
      <Stack.Screen name="MyShopList" component={MyShopListScreen} options={{ title: 'My History Shop' }} />
      <Stack.Screen name="ShoppingCard" component={ShoppingCardScreen} options={{ title: 'My Shopping Card' }} />
      <Stack.Screen name="WayToPay" component={WayToPayScreen} options={{ title: 'Way To Pay' }} />
      <Stack.Screen name="Success" component={SuccessScreen} options={{ title: 'Success' }} />
      <Stack.Screen name="List" component={BottomNavigator} />      
    </Stack.Navigator>
  );
}