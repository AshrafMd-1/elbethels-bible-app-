import { Image, ImageProps, Text, View } from "react-native";

interface Props {
  title: string;
  image: ImageProps;
}

const SingleJump = (props: Props) => {
  return (
    <View
      style={{
        marginTop: 10,
        flex: 1,
        height: 200,
      }}
    >
      <Image
        source={props.image}
        style={{ width: 150, height: 160, borderRadius: 10 }}
      />
      <Text
        style={{
          flex: 1,
          wordWrap: "break-all",
          fontSize: 14,
          color: "#fff",
          marginTop: 6,
          marginLeft: 2,
          paddingRight: 10,
        }}
      >
        {props.title}
      </Text>
    </View>
  );
};

export default SingleJump;
