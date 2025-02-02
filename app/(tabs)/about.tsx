import { Linking, ScrollView, StyleSheet, Text, View } from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";

const About = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.heading}>Ashraf Mohammed</Text>
        <Text style={styles.subheading}>
          Curious designer and developer based in{" "}
          <Text style={{ fontWeight: "bold" }}>{"\n"}Hyderabad, India.</Text>
        </Text>

        <Text style={styles.sectionTitle}>Services</Text>
        {renderService(
          "Web Developer",
          "Creating visually appealing websites.",
        )}
        {renderService("React Native", "Designing standout mobile apps.")}
        {renderService("DevOps", "Optimizing online presence & performance.")}
        {renderService("Cloud Computing", "Building scalable cloud solutions.")}

        <Text style={styles.sectionTitle}>Contact</Text>
        <Text style={styles.contactText}>LET'S WORK TOGETHER</Text>

        <View style={styles.contactRow}>
          <Entypo name="mail" size={16} color="#fff" />
          <Text
            style={styles.contactDetail}
            onPress={() => Linking.openURL("mailto:ashrafmd.work@gmail.com")}
          >
            ashrafmd.work@gmail.com
          </Text>
        </View>

        <View style={styles.contactRow}>
          <AntDesign name="linkedin-square" size={16} color="#fff" />
          <Text
            style={styles.contactDetail}
            onPress={() =>
              Linking.openURL(
                "https://www.linkedin.com/in/ashraf-mohammed-75932823a/",
              )
            }
          >
            linkedin.com/in/Ashraf-Mohammed
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const renderService = (title: string, description: string) => (
  <View style={styles.serviceContainer}>
    <Text style={styles.serviceTitle}>{title}</Text>
    <Text style={styles.serviceText}>{description}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 16,
    paddingBottom: 90,
  },
  scrollContainer: {
    paddingBottom: 50,
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
  },
  subheading: {
    fontSize: 16,
    color: "#aaa",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    fontStyle: "italic",
    color: "#fff",
    marginTop: 30,
    textDecorationLine: "underline",
  },
  serviceContainer: {
    marginTop: 15,
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  serviceText: {
    fontSize: 14,
    color: "#aaa",
  },
  contactText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 10,
  },
  contactRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  contactDetail: {
    fontSize: 14,
    color: "#aaa",
    marginLeft: 8,
    textDecorationLine: "underline",
  },
  footer: {
    fontSize: 18,
    color: "#aaa",
    textAlign: "center",
    marginTop: 80,
  },
});

export default About;
