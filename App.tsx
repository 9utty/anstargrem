import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import mobileAds, {
  BannerAd,
  BannerAdSize,
} from "react-native-google-mobile-ads";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";

GoogleSignin.configure();

mobileAds()
  .initialize()
  .then((result) => {
    console.log(result);
  });

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <RootApp />
        <BannerAd unitId={TestIds.BANNER} size={BannerAdSize.FULL_BANNER} />
      </Provider>
    </SafeAreaProvider>
  );
}
