import { useGlobalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function FaceModel() {
  const params = useGlobalSearchParams();
  const concerns = params.concerns ? String(params.concerns).split(",") : [];

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#d2b48c" }}>
      <Text style={{ fontSize: 24, color: "#b0e0e6", marginBottom: 20 }}>Your Enemies</Text>
      {concerns.map((name, index) => (
        <Text key={index} style={{ fontSize: 20, color: "white", padding: 10 }}>
          {name}
        </Text>
      ))}
    </View>
  );
}