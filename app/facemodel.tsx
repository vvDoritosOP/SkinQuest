import { useGlobalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function FaceModel() {
  const params = useGlobalSearchParams();
  const concerns = params.concerns ? String(params.concerns).split(",") : [];

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#d2b48c" }}>
      <Text style={{ fontSize: 24, color: "#b0e0e6", marginBottom: 20 }}>Your Enemies</Text>
      
      
      
      <View style={{
    backgroundColor: "#F1C27D",
    height: 300,
    width: 250,
    borderRadius:125,
     }}>
    
    <View style = {{flexDirection: "row", justifyContent: "center", gap: 40, marginTop: 100}}> 
    <View style={{ 
  backgroundColor: "white",
  width: 30,
  height:30,
  borderRadius: 50,
  alignItems: "center",
  justifyContent: "center",
    }}> 
      <View style={{ backgroundColor: "#3B1F0B", width: 15, height: 15, borderRadius: 8 }}></View>
    </View>

    <View style={{
  backgroundColor:"white",
  width:30,
  height:30,
  borderRadius:50,
  alignItems:"center",
  justifyContent:"center",

}}>
    <View style={{ backgroundColor: "#3B1F0B", width: 15, height: 15, borderRadius: 8 }}></View>
</View>
  
</View>

<View style={{
backgroundColor: "#D4736E",
  width: 40,
  height: 15,
  borderRadius: 10,
  alignSelf: "center",
  marginTop: 50,

}}></View>
  <View style={{
    position: "absolute",
    top: 50,
    left: 100,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "red",


  }}>
</View>
<View style={{
  position: "absolute",
  bottom: 60,
  right: 80,
  width: 12,
  height: 12,
  borderRadius: 6,
  backgroundColor: "red",

}}>
</View>

<View style={{
position: "absolute",
bottom: 80,
left: 70,
width: 12,
height: 12,
borderRadius: 6,
backgroundColor: "red",

}}></View>
  </View>
      
      
      {concerns.map((name, index) => (
        <Text key={index} style={{ fontSize: 20, color: "red", padding: 10 }}>
          {name}
        </Text>
      ))}
    </View>
  );
   

}