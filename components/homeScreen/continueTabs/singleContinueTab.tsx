import { Image, ImageSourcePropType, Text, View } from "react-native";

interface SingleContinueTabProps {
  title: string;
  imageName: ImageSourcePropType;
}

const SingleContinueTab = (props: SingleContinueTabProps) => {
  return (
    <View
      style={{
        marginTop: 10,
        backgroundColor: "#2a2a2a",
        width: "47%",
        height: 55,
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 5,
      }}
    >
      <Image
        source={props.imageName}
        style={{
          width: 55,
          height: 55,
          resizeMode: "cover",
          borderRadius: 5,
        }}
      />
      <Text
        style={{
          color: "#fff",
          fontSize: 12,
          fontWeight: "500",
          marginLeft: 10,
          paddingRight: 10,
          flex: 1,
        }}
      >
        {props.title}
      </Text>
    </View>
  );
};

export default SingleContinueTab;
