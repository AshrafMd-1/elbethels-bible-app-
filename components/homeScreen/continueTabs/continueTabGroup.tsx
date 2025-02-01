import { FlatList, StyleSheet, Text, View } from "react-native";
import SingleContinueTab from "@/components/homeScreen/continueTabs/singleContinueTab";

const continueAlbums = [
  {
    title: "Echoes of Tomorrow",
    image: require("../../../assets/images/continue_images_1.jpg"),
  },
  {
    title: "Whispers in the Dark",
    image: require("../../../assets/images/continue_images_2.jpg"),
  },
  {
    title: "Midnight Dreams",
    image: require("../../../assets/images/continue_images_3.jpg"),
  },
  {
    title: "Urban Rhythms",
    image: require("../../../assets/images/continue_images_4.jpg"),
  },
  {
    title: "Neon Horizons",
    image: require("../../../assets/images/continue_images_5.jpg"),
  },
  {
    title: "Silent Serenade",
    image: require("../../../assets/images/continue_images_6.jpg"),
  },
  {
    title: "Starlit Pathways",
    image: require("../../../assets/images/continue_images_7.jpg"),
  },
  {
    title: "Fading Echoes",
    image: require("../../../assets/images/continue_images_0.jpg"),
  },
];

const ContinueTabGroup = () => {
  return (
    <View>
      <Text style={styles.heading}>Continue Album</Text>
      <FlatList
        data={continueAlbums}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (
          <SingleContinueTab title={item.title} imageName={item.image} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    marginLeft: 10,
  },
  row: {
    justifyContent: "space-evenly",
  },
});

export default ContinueTabGroup;
