import { Image, Text, View } from "react-native";

const ContinueTab = () => {
  return (
    <View
      style={{
        marginTop: 20,
        backgroundColor: "#2a2a2a",
        width: "45%",
        height: 50,
        borderRadius: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginRight: 10,
      }}
    >
      <Image
        source={require("../../../assets/images/continue_images_0.jpg")}
        style={{ width: 70, height: 50, marginRight: "auto" }}
      />
      <Text
        style={{
          color: "#fff",
          fontSize: 20,
          fontWeight: "bold",
          textAlign: "left",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        Album 1
      </Text>
    </View>
  );
};

export default ContinueTab;
