import { FlatList, StyleSheet, Text, View } from "react-native";
import SingleJump from "@/components/homeScreen/jumpTabs/singleJump";

const jumpBackItems = [
  {
    id: "0",
    title: "The Adventure Begins",
    image: require("../../../assets/images/continue_images_0.jpg"),
  },
  {
    id: "1",
    title: "Mystery of the Unknown",
    image: require("../../../assets/images/continue_images_1.jpg"),
  },
  {
    id: "2",
    title: "Echoes of the Past",
    image: require("../../../assets/images/continue_images_2.jpg"),
  },
  {
    id: "3",
    title: "Lost in Time",
    image: require("../../../assets/images/continue_images_3.jpg"),
  },
  {
    id: "4",
    title: "Shadows of the Future",
    image: require("../../../assets/images/continue_images_4.jpg"),
  },
  {
    id: "5",
    title: "A Journey Beyond",
    image: require("../../../assets/images/continue_images_5.jpg"),
  },
  {
    id: "6",
    title: "Legends Never Die",
    image: require("../../../assets/images/continue_images_6.jpg"),
  },
  {
    id: "7",
    title: "Final Stand",
    image: require("../../../assets/images/continue_images_7.jpg"),
  },
];

const JumpBackGroup = () => {
  return (
    <View>
      <Text style={st.heading}>Jump Back In</Text>
      <FlatList
        data={jumpBackItems}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <SingleJump title={item.title} image={item.image} />
        )}
        contentContainerStyle={st.flatListContainer}
      />
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
    marginRight: 10,
  },
  flatListContainer: {
    paddingHorizontal: 10,
    flexDirection: "row",
    gap: 15,
  },
});

export default JumpBackGroup;
