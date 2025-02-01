import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "react-native";
import Home from "@/app/(home)";
import Library from "@/app/(library)";
import About from "@/app/(about)";

const Tab = createBottomTabNavigator();

const RootLayout = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 70,
            borderTopWidth: 0,
            elevation: 6,
            shadowColor: "#000040",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 8,
            backgroundColor: "transparent",
          },
          tabBarBackground: () => (
            <LinearGradient
              colors={["rgba(28,28,28,0.9)", "rgba(18,18,18,0.9)"]}
              style={{ flex: 1 }}
            />
          ),
          tabBarIconStyle: {
            marginTop: 5,
          },
        }}
      >
        {/* Home Tab */}
        <Tab.Screen
          component={Home}
          name="index"
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={32}
                color={focused ? "#fff" : "#c0bcbf"}
              />
            ),
          }}
        />

        {/* Library Tab */}
        <Tab.Screen
          name="Library"
          component={Library}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? "library" : "library-outline"}
                size={32}
                color={focused ? "#fff" : "#c0bcbf"}
              />
            ),
          }}
        />

        {/* About Tab */}
        <Tab.Screen
          name="About"
          component={About}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={
                  focused ? "information-circle" : "information-circle-outline"
                }
                size={32}
                color={focused ? "#fff" : "#c0bcbf"}
              />
            ),
          }}
        />
      </Tab.Navigator>
      <StatusBar barStyle="light-content" />
    </>
  );
};

export default RootLayout;
