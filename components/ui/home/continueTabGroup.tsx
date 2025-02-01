import { StyleSheet, Text, View } from "react-native";
import SingleContinueTab from "@/components/ui/home/singleContinueTab";

const ContinueTabGroup = () => {
  return (
    <View>
      <Text style={st.heading}>Continue Album</Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        <SingleContinueTab
          title={"Echoes of Tomorrow"}
          imageName={require("./../../../assets/images/continue_images_1.jpg")}
        />
        <SingleContinueTab
          title={"Whispers in the Dark"}
          imageName={require("./../../../assets/images/continue_images_2.jpg")}
        />
        <SingleContinueTab
          title={"Midnight Dreams"}
          imageName={require("./../../../assets/images/continue_images_3.jpg")}
        />
        <SingleContinueTab
          title={"Urban Rhythms"}
          imageName={require("./../../../assets/images/continue_images_4.jpg")}
        />
        <SingleContinueTab
          title={"Neon Horizons"}
          imageName={require("./../../../assets/images/continue_images_5.jpg")}
        />
        <SingleContinueTab
          title={"Silent Serenade"}
          imageName={require("./../../../assets/images/continue_images_6.jpg")}
        />
        <SingleContinueTab
          title={"Starlit Pathways"}
          imageName={require("./../../../assets/images/continue_images_7.jpg")}
        />
        <SingleContinueTab
          title={"Fading Echoes"}
          imageName={require("./../../../assets/images/continue_images_0.jpg")}
        />
      </View>
    </View>
  );
};

const st = StyleSheet.create({
  heading: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    marginLeft: 10,
  },
});

export default ContinueTabGroup;
