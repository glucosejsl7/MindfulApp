import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
// import Mindful from './screens/Mindful';
import MindfulContent from './screens/MindfulContent';
// import MindfulSearch from './screens/MindfulSearch';
// import MindfulProfileAccount from './screens/MindfulProfileAccount';


import { NavigationContainer } from "@react-navigation/native";
import NavigationBar from './navigations/NavigationBar';
import RootStack from './navigations/RootStack';


export default function App() {
  return (
      // <Mindful />
      // <MindfulContent />
      // <MindfulSearch />
      // <MindfulProfileAccount />
      <NavigationContainer>
        <RootStack />
    </NavigationContainer>
  );
}

