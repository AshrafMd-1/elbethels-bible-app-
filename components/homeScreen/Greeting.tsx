import { Image, StyleSheet, Text, View } from "react-native";
import { getGreeting } from "@/utility/util";

const Greeting = () => {
  return (
    <View style={st.container}>
      <Image
        source={require("../../assets/images/profile_icon.jpg")}
        style={st.image}
      />
      <Text style={st.text}>{getGreeting()}</Text>
    </View>
  );
};

const st = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 20,
    gap: 20,
    display: "flex",
    flexDirection: "row",
    marginLeft: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },
});

export default Greeting;
