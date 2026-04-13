import { useGlobalSearchParams, useRouter } from "expo-router";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { db } from "./firebaseConfig";







export default function FaceModel() {
  const params = useGlobalSearchParams();
  const damage = params.damage ? Number(params.damage) :0;
 const [stage, setStage] = useState(params.stage ? Number(params.stage) :1);
  const hp = params.hp ? Number(params.hp) : 100 + (stage -1) * 50;
  const maxHp = 100 + (stage -1) * 50;
  const [enemyHP, setEnemyHP] = useState(hp);
  const router = useRouter();
  const [concerns, setConcerns] = useState(
  params.concerns ? String(params.concerns).split(",") : [] );
  const [streak, setStreak] = useState(params.streak ? Number(params.streak) :0);
  const totalHearts=5;
  const fullHearts= Math.round((enemyHP / maxHp) * totalHearts);
 

useEffect(() => {
  if (params.hp || params.concerns) return;
  async function loadProgress() {
    try {
      const docSnap = await getDoc(doc(db, "users", "player1"));
      if (docSnap.exists()) {
        const data = docSnap.data();
        setEnemyHP(data.hp || 100);
        setStage(data.stage || 1);
        setStreak(data.streak || 0);
        setConcerns(data.concerns ? data.concerns.split(",") : []);
      }
    } catch (error) {
      console.log("error:", error);
    }
  }
  loadProgress();
}, []);



return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#d2b48c" }}>
      <Text style={{ fontSize: 24, color: "#b0e0e6", position: "absolute",top:130 , fontWeight: "bold"}}>Breakouts</Text>
      
      
      
      <View style={{ width: 600, height: 670}}>
        <Image
        source={require("@/assets/face.png")}
        style={{ width: 600, height: 670, position: "absolute"}}
      />
      

{concerns.includes("Acne") && (
<>
  <Image 
    source={require("@/assets/acne.png")}
    style={{
    position: "absolute",
    top: 90,
    left: 180,
    width: 85 * (enemyHP/100),
    height: 85 * (enemyHP/100),
    opacity: enemyHP/100,



  }}/>

<Image 
source={require("@/assets/acne.png")}
style={{
  position: "absolute",
  top: 280,
  right: 170,
  width: 70 * (enemyHP/100),
  height: 70 * (enemyHP/100),
  opacity: enemyHP/100,

}}/>


<Image 
source={require("@/assets/acne.png")}
style={{
position: "absolute",
top: 290,
left: 140,
width: 65 * (enemyHP/100),
height: 65 * (enemyHP/100),
opacity: enemyHP/100,

}}/> 
</>
)}
{concerns.includes("Blackheads") && (
<>
<Image 
source={require("@/assets/blackheads.png")}
style={{
position: "absolute",
top: 240,
right: 267,
width: 75,
height: 75,
opacity: enemyHP/100,
}}/>

<Image 
source={require("@/assets/blackheads.png")}
style={{
position: "absolute",
top: 260,
right: 305,
width: 65,
height: 65,
opacity: enemyHP/100,
}}/>

<Image
source={require("@/assets/blackheads.png")} 
style={{
position: "absolute",
top: 255,
right: 240,
width: 65,
height: 65,
opacity: enemyHP/100,
}}/>
</>
)}

{concerns.includes("Wrinkles") && (
<>
<Image 
source={require("@/assets/wrinkles.png")} 
style={{
position: "absolute",
bottom: 235,
left: 155,
alignSelf: "center",
width: 95,
height:100,
opacity: enemyHP/100,

}}/>

<Image 
source={require("@/assets/wrinkles2.png")} 
style={{
position: "absolute",
bottom: 250,
right: 160,
alignSelf: "center",
width: 95,
height:100,
opacity: enemyHP/100,
}}/>
</>
)}

{concerns.includes("Redness")  && (
<>
<Image 
source={require("@/assets/redness.png")} 
style={{
position: "absolute",
bottom: 185,
left: 40,
width: 250,
height: 250,
opacity: enemyHP/100,
}}/>
<Image
source={require("@/assets/redness.png")} 
style={{
position: "absolute",
bottom: 195,
right: 45,
width: 250,
height: 250,
opacity: enemyHP/100,
}}/>
</>
)}

{concerns.includes("Eye Bags") && (
<>
<Image 
source={require("@/assets/eyebags.png")}
style={{
position: "absolute",
left: 120,
top: 275,
width: 195,
height: 65,
opacity: enemyHP/100,
}}/>
<Image
source={require("@/assets/eyebags.png")}
style={{
position: "absolute",
right: 145,
top: 265,
width: 195,
height: 65,
opacity: enemyHP/100,
}}/>
</>
)}

{concerns.includes("Oiliness") &&(
<>
<Image
source={require("@/assets/oil.png")} 
style={{
position:"absolute",
left: 125,
bottom: 95,
width:180,
height: 180,
opacity: enemyHP/100,

}}/>
<Image 
source={require("@/assets/oil.png")} 
style={{
position:"absolute",
right: 145,
bottom: 105,
width:180,
height: 180,
opacity: enemyHP/100,

}}/>
</>
)}
</View>

<View style={{
  position: "absolute",
  top: 165,
  width: 250,
  height: 40,
  borderRadius: 30,
  backgroundColor: "grey",
}}>
<View style={{
position: "absolute",
  top:0,
  width: (enemyHP/maxHp) *250,
  height: 40,
  borderRadius: 30,
  backgroundColor: enemyHP > maxHp * 0.6 ? "green" : enemyHP > maxHp * 0.3 ? "yellow" : "red",

}}></View>

</View>


      
      <View style={{ flexDirection: "row",  }}>
  {Array.from({ length: totalHearts }).map((_, index) => (
    <Image
      key={index}
      source={index < fullHearts ? require("@/assets/heart.png") : require("@/assets/emptyheart.png")}
      style={{ width: 110, height: 110 }}
    />
  ))}
</View>
      
      {enemyHP <= 0 && (

        <Text style ={{
          position: "absolute",
          top : 65,
          fontWeight: "bold",
          fontSize: 45,
          color: "gold",

        }}>Defeated Stage {stage +1}!</Text>
      )}
      {concerns.map((name, index) => (
        <Text key={index} style={{ fontSize: 20, color: "#f08080", padding: 10, fontWeight: "bold" }}>
          {name}
        </Text>
      ))}

      <TouchableOpacity
  style={{ backgroundColor: "#e9967a", padding: 15, borderRadius: 27, marginTop: 20 }}
  onPress={async () => {
    
    router.push({
      pathname: "./dailylog",
      params: { 
        concerns: String(params.concerns) ,
        streak : String(streak),
        currentHP : String(enemyHP),
        stage: String(stage),
      }
  })}}
>
  <Text style={{ fontSize: 24, color: "#b0e0e6" }}>Log Today's Routine</Text>
</TouchableOpacity>
    
    
 <Text style={{
position: "absolute",
bottom: 145, 
 fontSize: 20,
  color: "white",
 }}>Streak: {streak}</Text> 

   
{enemyHP <=0 && (   
<TouchableOpacity style={{
backgroundColor: "#e9967a", 
padding: 15,
borderRadius: 27, 
position : "absolute", 
bottom : 100
   
}}
onPress={() => router.push({
  
  pathname: "./facemodel",
      params: { 
        concerns: String(params.concerns) ,
        streak : String(streak),
        stage: String(Number(stage) +1)
      }

}
)}

><Text style={{
fontSize: 24,
color: "gold"

}}
>Continue to Stage {stage + 1}!</Text>
</TouchableOpacity>
)}
       <TouchableOpacity onPress={() => router.back()}
         style={{
         position: "absolute",
         right: 650,
         bottom: 1250,
         backgroundColor: "#cd5c5c",
         borderRadius:55,
         height:75,
         width:75, 
         alignItems: "center",
         justifyContent: "center"
         }}>
      
       <Text style={{
        
         color: "gold",
         fontWeight: "bold"
       }}>Back</Text>
       </TouchableOpacity>
    </View>
  

        
);
 

}