import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function TabLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 60,
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
              colors={["rgba(21,21,21,0.9)", "rgba(0,0,0,0.9)"]}
              style={{ flex: 1 }}
            />
          ),
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={32}
                color={focused ? "#fff" : "#c0bcbf"}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="library"
          options={{
            title: "Library",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? "library" : "library-outline"}
                size={32}
                color={focused ? "#fff" : "#c0bcbf"}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="about"
          options={{
            title: "About",
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
      </Tabs>
    </>
  );
}
