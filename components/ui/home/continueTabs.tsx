import { StyleSheet, Text, View } from "react-native";
import ContinueTab from "@/components/ui/home/continueTab";

const ContinueTabs = () => {
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
        <ContinueTab />
        <ContinueTab />
        <ContinueTab />
        <ContinueTab />
        <ContinueTab />
        <ContinueTab />
        <ContinueTab />
        <ContinueTab />
      </View>
    </View>
  );
};

const st = StyleSheet.create({
  heading: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginLeft: 10,
    marginTop: 20,
  },
});

export default ContinueTabs;
