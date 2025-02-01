import { ScrollView } from "react-native";
import Greeting from "@/components/ui/home/Greeting";
import ContinueTabGroup from "@/components/ui/home/continueTabGroup";

const Index = () => {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#121212",
        paddingLeft: 10,
        paddingRight: 10,
      }}
    >
      <Greeting />
      <ContinueTabGroup />
      <ContinueTabGroup />
      <ContinueTabGroup />
      <ContinueTabGroup />
      <ContinueTabGroup />
      <ContinueTabGroup />
      <ContinueTabGroup />
      <ContinueTabGroup />
    </ScrollView>
  );
};

export default Index;
