import { Slot } from "expo-router";
import BottomNavigation from "@/components/ui/BottomNavigation";
import { StatusBar } from "react-native";

const RootLayout = () => {
  return (
    <>
      <Slot />
      <BottomNavigation />
      <StatusBar barStyle="light-content" />
    </>
  );
};

export default RootLayout;
