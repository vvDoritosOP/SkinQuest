import { useGlobalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function FaceModel() {
  const params = useGlobalSearchParams();
  const concerns = params.concerns ? String(params.concerns).split(",") : [];

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#d2b48c" }}>
      <Text style={{ fontSize: 24, color: "#b0e0e6", marginBottom: 20 , fontWeight: "bold"}}>Your Enemies</Text>
      
      
      
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

{concerns.includes("Acne") && (
<>
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
</>
)}
{concerns.includes("Blackheads") && (
<>
<View style={{
position: "absolute",
top: 140,
right: 120,
width: 7,
height: 7,
borderRadius: 3,
backgroundColor: "black",
}}></View>

<View style={{
position: "absolute",
top: 125,
right: 110,
width: 7,
height: 7,
borderRadius: 3,
backgroundColor: "black",
}}></View>

<View style={{
position: "absolute",
top: 125,
right: 130,
width: 7,
height: 7,
borderRadius: 3,
backgroundColor: "black",
}}></View>
</>
)}

{concerns.includes("Wrinkles") && (
<>
<View style={{
position: "absolute",
bottom: 125,
left: 60,
alignSelf: "center",
width: 35,
height:7,
borderRadius: 6,
backgroundColor: "#bc8f8f",
transform:[{ rotate:`330deg`}],
}}></View>

<View style={{
position: "absolute",
bottom: 125,
right: 60,
alignSelf: "center",
width: 35,
height:7,
borderRadius: 6,
backgroundColor: "#bc8f8f",
transform:[{ rotate:`20deg`}],
}}></View>
</>
)}

{concerns.includes("Redness")  && (
<>
<View style={{
position: "absolute",
bottom: 100,
left: 40,
width: 50,
height: 50,
borderRadius: 70,
backgroundColor: "#cd5c5c",
}}></View>
<View style={{
position: "absolute",
bottom: 100,
right: 40,
width: 50,
height: 50,
borderRadius: 70,
backgroundColor: "#cd5c5c",
}}></View>
</>
)}

{concerns.includes("Eye Bags") && (
<>
<View style={{
position: "absolute",
left: 65,
top: 130,
width: 45,
height: 10,
borderRadius: 25,
backgroundColor: "grey",
}}></View>
<View style={{
position: "absolute",
right: 65,
top: 130,
width: 45,
height: 10,
borderRadius: 25,
backgroundColor: "grey",
}}></View>
</>
)}

{concerns.includes("Oiliness") &&(
<>
<View style={{
position:"absolute",
left: 35,
bottom: 75,
width:50,
height: 15,
borderRadius: 25,
backgroundColor: "#daa520",
transform:[{ rotate: `200deg`}]
}}></View>
<View style={{
position:"absolute",
right: 35,
bottom: 75,
width:50,
height: 15,
borderRadius: 25,
backgroundColor: "#daa520",
transform:[{ rotate: `160deg`}]
}}></View>

</>
)}

</View>
      
      
      {concerns.map((name, index) => (
        <Text key={index} style={{ fontSize: 20, color: "red", padding: 10, fontWeight: "bold" }}>
          {name}
        </Text>
      ))}
    </View>
  );
   

}