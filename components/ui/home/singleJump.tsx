import { View, Text, Image, ImageProps } from "react-native";

interface Props {
  title: string;
  image: ImageProps;
}

const SingleJump = (props: Props) => {
  return (
    <View
      style={{
        marginTop: 10,
        marginLeft: 10,
        flex: 1,
      }}
    >
      <Image
        source={props.image}
        style={{ width: 150, height: 150, borderRadius: 10 }}
      />
      <Text
        style={{
          flex: 1,
          wordWrap: "break-all",
          color: "#fff",
          marginTop: 10,
          marginLeft: 2,
        }}
      >
        {props.title}
      </Text>
    </View>
  );
};

export default SingleJump;
