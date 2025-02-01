import { View } from "react-native";
import Greeting from "@/components/ui/home/Greeting";
import ContinueTabs from "@/components/ui/home/continueTabs";

const Index = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#121212" }}>
      <Greeting />
      <ContinueTabs />
    </View>
  );
};

export default Index;
