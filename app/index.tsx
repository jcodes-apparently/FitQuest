import {
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ImageBackground
        style={{ width: 250, height: 55, marginTop: 200, alignSelf: "center" }}
        source={require("@/assets/images/fitquestOnboardingLogo.png")}
      />
      <TouchableOpacity
        style={styles.startButton}
        onPress={() => router.push("/onboarding")}
      >
        start
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#efbeb8",
    flex: 5,
  },
  startButton: {
    backgroundColor: "#fdf9f1",
    height: 25,
    width: 75,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    textAlign: "center",
    alignSelf: "center",
    padding: 4,
    marginTop: 20,
    fontFamily: "Arial",
    fontSize: 15,
  },
});
