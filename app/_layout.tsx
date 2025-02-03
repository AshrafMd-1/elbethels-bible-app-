import { Stack } from "expo-router";
import { StatusBar } from "react-native";

const RootLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>

      <StatusBar barStyle={"default"} />
    </>
  );
};

export default RootLayout;
