import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { usePathname, useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";

const BottomNavigation = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <BlurView intensity={50} style={styles.container}>
      <LinearGradient
        colors={["rgba(28,28,28,0.8)", "rgba(18,18,18,0.8)"]} // Adjust opacity to 80%
        style={styles.gradient}
      >
        {/* Home Button */}
        <Pressable
          onPress={() => router.push("/")}
          style={({ pressed }) => [
            { transform: [{ scale: pressed ? 0.9 : 1 }] },
          ]}
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
          style={({ pressed }) => [
            { transform: [{ scale: pressed ? 0.9 : 1 }] },
          ]}
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
          style={({ pressed }) => [
            { transform: [{ scale: pressed ? 0.9 : 1 }] },
          ]}
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
    </BlurView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 70,
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 6,
    shadowColor: "#000040",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  gradient: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    height: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default BottomNavigation;
