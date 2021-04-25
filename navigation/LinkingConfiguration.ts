import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Login: {
            screens: {
              LoginScreen: 'Login',
              EmailLoginScreen:'EmailLogin'
            },
          },
          Bussines:{
            screens: {
              FlashCardsScreen: 'FlashCards',
              FlashFilterScreen: 'FlashFilter',
              FlashCandidateProfileScreen: 'FlashCandidateProfile',
              ListCandidateScreen: 'ListCandidate',
              ListFavoritesScreen: 'ListFavorites',
              ListOffersScreen: 'ListOffers',
              ProfileBusinessScreen: 'ProfileBusiness',
              MyShopListScreen: 'MyShopList',
            },
          },
          Checkout:{
            screens: {
              ShoppingCardScreen: 'ShoppingCard',
              WayToPayScreen: 'WayToPay',
              SuccessScreen: 'Success',
            },
          },
          Candidate:{
            screens: {
              // LoginScreen: 'Login',
            },
          },
        },
      },
      SignUp: {
        screens: {
          Register: {
            screens: {
              RegisterScreen: 'Register',
              LocationScreen: 'Location',
              TermsScreen: 'Terms'
            },
          },
          RegisterBusiness: {
            screens: {
              BusinessDataScreen: 'BusinessData',
              OfertCreateScreen: 'OfertCreate',
            },
          },
          RegisterCandidate: {
            screens: {
              BusinessDataScreen: 'PersonalData',
              OfertCreateScreen: 'RecordVideo',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
