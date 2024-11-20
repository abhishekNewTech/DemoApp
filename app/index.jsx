import {
  Image,
  StyleSheet,
  Platform,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { SafeAreaView } from "react-native-safe-area-context";
import { Redirect, router } from "expo-router";
import { Colors } from "@/constants/Colors";

export default function HomeScreen() {
  return (
    // <SafeAreaView>
    <View
      style={{
        flex: 1,
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TouchableOpacity
        style={{
          padding: 16,
          backgroundColor: Colors.PinkColor.main,
          width: "50%",
          borderRadius: 10,
        }}
        onPress={() => router.push("Task")}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontFamily: "PoppinsMedium",
            fontSize: 16,
          }}
        >
          Move to Task
        </Text>
      </TouchableOpacity>
    </View>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
