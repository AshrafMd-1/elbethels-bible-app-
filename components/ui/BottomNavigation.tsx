import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { usePathname, useRouter } from "expo-router"; // Import usePathname to get the current route
import { LinearGradient } from "expo-linear-gradient"; // Importing for gradient effect

const BottomNavigation = () => {
  const router = useRouter();
  const pathname = usePathname(); // Get the current route

  return (
    <LinearGradient
      colors={["rgba(28,28,28,0.9)", "rgba(18,18,18,0.9)"]} // Dark gradient colors similar to Spotify's dark theme
      style={styles.container}
    >
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
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    flexDirection: "row",
    height: 70,
    justifyContent: "space-around",
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
});

export default BottomNavigation;
