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
        height: 200,
        alignItems: "center",
      }}
    >
      <Image
        source={props.image}
        style={{ width: 150, height: 160, borderRadius: 10 }}
      />
      <Text
        style={{
          fontSize: 14,
          color: "#fff",
          marginTop: 6,
          width: "99%",
          textAlign: "center",
        }}
      >
        {props.title}
      </Text>
    </View>
  );
};

export default SingleJump;
