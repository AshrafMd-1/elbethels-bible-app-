import { FlatList, Text, View } from "react-native";
import Header from "@/components/Header";
import FolderGenerator from "@/components/libraryScreen/FolderGenerator";
import folderPaths from "@/data/path.json";

const Library = () => {
  let currentPath = folderPaths;

  return (
    <View style={{ flex: 1, backgroundColor: "#121212", paddingBottom: 100 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          borderBottomColor: "#000",
          borderBottomWidth: 1,
          paddingBottom: 20,
        }}
      >
        <Header />
      </View>
      <View style={{ flex: 1, paddingTop: 20, paddingHorizontal: 10 }}>
        <Text
          style={{
            color: "white",
            fontSize: 30,
            marginBottom: 20,
            paddingLeft: 10,
          }}
        >
          Library
        </Text>

        <FlatList
          // @ts-ignore

          data={currentPath}
          renderItem={({ item }) => (
            <FolderGenerator
              albumName={item.name}
              songCount={item.children?.length || 0}
              mainFolder={true}
            />
          )}
          keyExtractor={(item) => item.id}
          getItemLayout={(data, index) => ({
            length: 50,
            offset: 50 * index,
            index,
          })}
          initialNumToRender={10}
          windowSize={5}
        />
      </View>
    </View>
  );
};

export default Library;
