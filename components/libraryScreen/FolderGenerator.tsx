import { Pressable, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface Props {
  albumName: string;
  songCount: number;
  pushToFolderPath: (path: string) => void;
  popFromFolderPath: () => void;
}

const FolderGenerator = (props: Props) => {
  return (
    <Pressable
      style={{
        flexDirection: "row",
        alignItems: "flex-start",
        gap: 20,
        marginBottom: 10,
      }}
      onPress={() => props.pushToFolderPath(props.albumName)}
    >
      <MaterialIcons name="folder-open" size={70} color="white" />
      <View>
        <Text style={{ color: "white", fontSize: 20, marginTop: 10 }}>
          {props.albumName}
        </Text>
        <Text style={{ color: "white", fontSize: 16, marginTop: 5 }}>
          {props.songCount} songs
        </Text>
      </View>
    </Pressable>
  );
};
export default FolderGenerator;
