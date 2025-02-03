import { Stack } from "expo-router";
import { StatusBar } from "react-native";

const RootLayout = () => {
  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      >
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="screens/InternalFolder" />
      </Stack>

      <StatusBar barStyle={"default"} />
    </>
  );
};

export default RootLayout;
