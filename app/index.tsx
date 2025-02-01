import { View } from "react-native";
import Greeting from "@/components/ui/home/Greeting";
import ContinueTabGroup from "@/components/ui/home/continueTabGroup";

const Index = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#121212",
        paddingLeft: 10,
        paddingRight: 10,
      }}
    >
      <Greeting />
      <ContinueTabGroup />
    </View>
  );
};

export default Index;
