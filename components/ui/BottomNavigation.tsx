import { Pressable, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { usePathname, useRouter } from "expo-router"; // Import usePathname to get the current route

const BottomNavigation = () => {
  const router = useRouter();
  const pathname = usePathname(); // Get the current route

  return (
    <View style={styles.container}>
      {/* Home Button */}
      <Pressable
        onPress={() => router.push("/")}
        style={({ pressed }) => [{ transform: [{ scale: pressed ? 0.9 : 1 }] }]}
      >
        <Ionicons
          name={pathname === "/" ? "home" : "home-outline"}
          size={32}
          color={pathname === "/" ? "#fff" : "#c0bcbf"}
        />
      </Pressable>

      {/* Library Button */}
      <Pressable
        onPress={() => router.push("/library")}
        style={({ pressed }) => [{ transform: [{ scale: pressed ? 0.9 : 1 }] }]}
      >
        <Ionicons
          name={pathname === "/library" ? "library" : "library-outline"}
          size={32}
          color={pathname === "/library" ? "#fff" : "#c0bcbf"}
        />
      </Pressable>

      {/* About Button */}
      <Pressable
        onPress={() => router.push("/about")}
        style={({ pressed }) => [{ transform: [{ scale: pressed ? 0.9 : 1 }] }]}
      >
        <Ionicons
          name={
            pathname === "/about"
              ? "information-circle"
              : "information-circle-outline"
          }
          size={32}
          color={pathname === "/about" ? "#fff" : "#c0bcbf"}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,0,0,0.7)",
    position: "absolute",
    bottom: 0,
    width: "100%",
    flexDirection: "row",
    height: "8%",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default BottomNavigation;
