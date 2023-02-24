import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  NativeStackNavigationProp,
  NativeStackNavigatorProps,
} from "@react-navigation/native-stack/lib/typescript/src/types";
import React from "react";
import { FeedInfo } from "../@types/FeedInfo";
import { AddFeedScreen } from "../screens/AddFeedScreen";
import { FeedListScreen } from "../screens/FeedListScreen";
import { BottomTabNavigation } from "./BottomTabNavigation";

export type RootStackParamList = {
  BottomTab: undefined;
  FeedList: {
    list: FeedInfo[];
  };
  AddFeed: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootStackNavigation: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        presentation: "containedModal",
      }}
    >
      <Stack.Screen name="BottomTab" component={BottomTabNavigation} />
      <Stack.Screen name="AddFeed" component={AddFeedScreen} />
      <Stack.Screen name="FeedList" component={FeedListScreen} />
    </Stack.Navigator>
  );
};

export const useRootNavigation = <
  RouteName extends keyof RootStackParamList
>() => {
  return useNavigation<
    NativeStackNavigationProp<RootStackParamList, RouteName>
  >();
};

export const useRootRoute = <RouteName extends keyof RootStackParamList>() => {
  return useRoute<RouteProp<RootStackParamList, RouteName>>();
};
