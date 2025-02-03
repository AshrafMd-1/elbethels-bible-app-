import { Pressable, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

interface Props {
  albumName: string;
  songCount: number;
  mainFolder: boolean;
}

const FolderGenerator = (props: Props) => {
  const router = useRouter();
  return (
    <Pressable
      style={{
        flexDirection: "row",
        alignItems: "flex-start",
        gap: 20,
        marginBottom: 10,
      }}
      onPress={() => {
        console.log("pressed");
        router.push("/screens/InternalFolder");
      }}
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
