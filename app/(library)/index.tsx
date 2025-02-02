import { FlatList, Pressable, Text, View } from "react-native";
import { useEffect, useState, useMemo } from "react";
import Header from "@/components/Header";
import FolderGenerator from "@/components/libraryScreen/FolderGenerator";
import useFolderPathStore from "@/store/store";
import { Folder, folderPathGenerator } from "@/utility/util";
import { Feather } from "@expo/vector-icons";
import SkeletonLoader from "@/components/libraryScreen/SkeletonLoader";

const Library = () => {
  const { folderPath, pushToFolderPath, popFromFolderPath } =
    useFolderPathStore();
  const [isLoading, setIsLoading] = useState(true);

  // Memoize folder data to prevent unnecessary re-renders
  const currentPath = useMemo(() => {
    setIsLoading(true);
    const updatedPath = folderPathGenerator(folderPath) || [];
    setIsLoading(false);
    return updatedPath;
  }, [folderPath]);

  if (isLoading) {
    return (
      <View style={{ flex: 1, backgroundColor: "#121212", paddingTop: 20 }}>
        <Header />
        <SkeletonLoader />
      </View>
    );
  }

  // @ts-ignore
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
        {folderPath.length > 0 ? (
          <Pressable
            style={{
              marginBottom: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
            onPress={popFromFolderPath}
          >
            <Feather name={"chevron-left"} size={30} color={"white"} />
            <Text
              style={{
                color: "white",
                fontSize: 20,
                marginLeft: 10,
              }}
            >
              Back
            </Text>
          </Pressable>
        ) : (
          <Text
            style={{
              color: "white",
              fontSize: 20,
              marginBottom: 10,
            }}
          >
            Library
          </Text>
        )}

        <FlatList
          data={currentPath}
          renderItem={({ item }) => (
            <FolderGenerator
              albumName={item.name}
              songCount={item.children?.length || 0}
              pushToFolderPath={pushToFolderPath}
              popFromFolderPath={popFromFolderPath}
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
