import { FlatList, StyleSheet, View } from "react-native";
import Header from "@/components/Header";
import ContinueTabGroup from "@/components/homeScreen/continueTabs/continueTabGroup";
import JumpBackGroup from "@/components/homeScreen/jumpTabs/JumpBackGroup";

const Home = () => {
  const data = [
    { type: "greeting" },
    { type: "continue" },
    { type: "jumpBack" },
    { type: "continue" },
    { type: "jumpBack" },
    { type: "continue" },
    { type: "jumpBack" },
    { type: "continue" },
    { type: "jumpBack" },
  ];

  // @ts-ignore
  const renderItem = ({ item }) => {
    switch (item.type) {
      case "greeting":
        return <Header />;
      case "continue":
        return <ContinueTabGroup />;
      case "jumpBack":
        return <JumpBackGroup />;
      default:
        return null;
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#121212" }}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#121212",
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 80,
  },
});

export default Home;
