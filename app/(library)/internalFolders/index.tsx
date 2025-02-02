import { Text, View } from "react-native";
import useFolderPathStore from "@/store/store";
import { folderPathGenerator } from "@/utility/util";

const InternalFolders = () => {
  const { folderPath } = useFolderPathStore();
  const actualData = folderPathGenerator(folderPath);
  console.log(actualData);
  return (
    <View>
      <Text>Index</Text>
    </View>
  );
};

export default InternalFolders;
