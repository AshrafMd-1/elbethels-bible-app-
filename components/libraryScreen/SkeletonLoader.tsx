import React from "react";
import { View } from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

const SkeletonLoader = () => {
  return (
    <SkeletonPlaceholder borderRadius={4}>
      <>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <View style={{ width: 50, height: 50, borderRadius: 25 }} />
          <View style={{ marginLeft: 10 }}>
            <View style={{ width: 150, height: 20, marginBottom: 5 }} />
            <View style={{ width: 100, height: 20 }} />
          </View>
        </View>
        {Array.from({ length: 6 }).map((_, index) => (
          <View
            key={index}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 15,
            }}
          >
            <View style={{ width: 50, height: 50, borderRadius: 25 }} />
            <View style={{ marginLeft: 10 }}>
              <View style={{ width: 200, height: 20, marginBottom: 5 }} />
              <View style={{ width: 150, height: 20 }} />
            </View>
          </View>
        ))}
      </>
    </SkeletonPlaceholder>
  );
};

export default SkeletonLoader;
