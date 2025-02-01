import { FlatList, View, Text, StyleSheet } from "react-native";
import Greeting from "@/components/ui/home/Greeting";
import ContinueTabGroup from "@/components/ui/home/continueTabGroup";
import JumpBackGroup from "@/components/ui/home/JumpBackGroup";

const Index = () => {
  const data = [
    { type: "greeting" },
    { type: "continue" },
    { type: "jumpBack" },
    { type: "jumpBack" },
    { type: "jumpBack" },
  ];

  // @ts-ignore
  const renderItem = ({ item }) => {
    switch (item.type) {
      case "greeting":
        return <Greeting />;
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
      <View style={{ flex: 1, marginBottom: 70 }}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.container}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#121212",
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 20,
  },
});

export default Index;
