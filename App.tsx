import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { CaculadoraScreen } from "./src/screens/CaculadoraScreen";
import { styles } from "./src/theme/appTheme";

const App = () => {
  return (
    <SafeAreaView style={styles.background}>
      <StatusBar
      backgroundColor="black"
      barStyle="light-content"/>
      <CaculadoraScreen />
    </SafeAreaView>
  );
};

export default App;
