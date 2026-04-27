import { useGlobalSearchParams, useRouter } from "expo-router";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
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
  const [coin, setCoin] = useState(params.coin ? Number(params.coin) :0);
  const totalHearts=5;
  const fullHearts= Math.round((enemyHP / maxHp) * totalHearts);
  const multiplier = Math.floor(coin / 3) * 0.25;
  const purchased = params.purchased ? String(params.purchased).split(",") : [];
 

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
        setCoin(data.coin || 0)
      }
    } catch (error) {
      console.log("error:", error);
    }
  }
  loadProgress();
}, []);



return (
    <ImageBackground 
            source={require("@/assets/background.png")}
            style={styles.container}
            resizeMode="cover"
            > 
      <View style={{ width: 350, height: 420}}>
        <Image
        source={require("@/assets/face.png")}
        style={{ width: 350, height: 420, position: "absolute", bottom : -50}}
      />
      

{concerns.includes("Acne") && (
<>
  <Image 
    source={require("@/assets/acne.png")}
    style={{
    position: "absolute",
    top: 145,
    left: 218,
    width: 50 * (enemyHP/100),
    height: 50 * (enemyHP/100),
    opacity: enemyHP/100,



  }}/>

<Image 
source={require("@/assets/acne.png")}
style={{
  position: "absolute",
  top: 190,
  right: 250,
  width: 40 * (enemyHP/100),
  height: 40 * (enemyHP/100),
  opacity: enemyHP/100,

}}/>


<Image 
source={require("@/assets/acne.png")}
style={{
position: "absolute",
top: 290,
left: 170,
width: 40 * (enemyHP/100),
height: 40 * (enemyHP/100),
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
top: 200,
right: 157,
width: 40,
height: 40,
opacity: enemyHP/100,
}}/>

<Image 
source={require("@/assets/blackheads.png")}
style={{
position: "absolute",
top: 220,
right: 177,
width: 45,
height: 45,
opacity: enemyHP/100,
}}/>

<Image
source={require("@/assets/blackheads.png")} 
style={{
position: "absolute",
top: 215,
right: 135,
width: 45,
height: 45,
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
bottom: 145,
left: 215,
alignSelf: "center",
width: 55,
height:55,
opacity: enemyHP/100,

}}/>

<Image 
source={require("@/assets/wrinkles2.png")} 
style={{
position: "absolute",
bottom: 145,
right: 215,
alignSelf: "center",
width: 55,
height:55,
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
bottom: 85,
left: 65,
width: 90,
height: 90,
opacity: enemyHP/100,
}}/>
<Image
source={require("@/assets/redness.png")} 
style={{
position: "absolute",
bottom: 85,
right: 85,
width: 90,
height: 90,
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
left: 90,
top: 205,
width: 65,
height: 65,
opacity: enemyHP/100,
}}/>
<Image
source={require("@/assets/eyebags.png")}
style={{
position: "absolute",
right: 100,
top: 200,
width: 65,
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
left: 95,
top: 95,
width:80,
height: 80,
opacity: enemyHP/100,

}}/>
<Image 
source={require("@/assets/oil.png")} 
style={{
position:"absolute",
right: 95,
top: 95,
width:80,
height: 80,
opacity: enemyHP/100,

}}/>
</>
)}
</View>

<View style={{ flexDirection: "row",  }}>
  {Array.from({ length: totalHearts }).map((_, index) => (
    <Image
      key={index}
      source={index < fullHearts ? require("@/assets/heart.png") : require("@/assets/emptyheart.png")}
      style={{ width: 75, height: 95 }}
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
        <Text key={index} style={{ fontSize: 20, color: "#a00606", padding: 10, fontWeight: "bold" }}>
          {name}
        </Text>
      ))}

      <TouchableOpacity
  style={{ backgroundColor: "#107429", padding: 15, borderRadius: 27, marginTop: 20 }}
  onPress={async () => {
    
    router.push({
      pathname: "./dailylog",
      params: { 
        concerns: String(params.concerns) ,
        streak : String(streak),
        currentHP : String(enemyHP),
        stage: String(stage),
        coin: String(coin)
      }
  })}}
>
  <Text style={{ fontSize: 24, color: "#8fff26", fontWeight:
    "bold"
   }}>Log Today's Routine</Text>
</TouchableOpacity>
    
    
 <Text style={{
position: "absolute",
bottom: 55, 
 fontSize: 20,
  color: "gold",
  fontWeight: "bold"
 }}>Streak: {streak}</Text> 

   
{enemyHP <=0 && (   
<TouchableOpacity style={{
backgroundColor: "#fdc200", 
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
        stage: String(Number(stage) +1),
        coin :String(coin)
      }

}
)}

><Text style={{
fontSize: 24,
color: "#795e06",
fontWeight: "bold"

}}
>Continue to Stage {stage + 1}!</Text>
</TouchableOpacity>
)}
       <TouchableOpacity onPress={() => router.back()}
         style={{
         position: "absolute",
         right: 340,
         bottom: 770,
         backgroundColor: "#ff0000",
         borderRadius:55,
         height:65,
         width:65, 
         alignItems: "center",
         justifyContent: "center"
         }}>
      
       <Text style={{
        
         color: "#6e1a1a",
         fontWeight: "bold"
       }}>Back</Text>
       </TouchableOpacity>


      <Text style={{color: "#05790b", fontSize: 24, fontWeight: "bold", right: -145, top: -700 }}>
       coins: {coin}
      </Text>
       <Text style={{color: "#6d075f", fontSize: 20, fontWeight: "bold", right: -145, top: -695 }}>
        {multiplier}x
      </Text>
    
    <TouchableOpacity onPress={async () => router.push({
      pathname: "./shop",
      params: { 
  coin: String(coin),
  concerns: concerns.join(","),
  hp: String(enemyHP),
  streak: String(streak),
  stage: String(stage),
}
    })}
    style={{
      backgroundColor:"#096418",
      position:"absolute",
      right: 67,
      top: 400,
      width: 60,
      height: 60,
      borderRadius: 30,
      alignItems: "center",
      justifyContent: "center"
    }}
    >
    <Text style={{color: "#00ff55", fontWeight: "bold"}}>Shop</Text>
    </TouchableOpacity>
    
    
   {purchased.includes("baseball hat") && (
  <Image 
    source={require("@/assets/bbhat.png")}
    style={{ position: "absolute", top: 180, left: 5, width: 400, height: 400 }}
  />
)}

    </ImageBackground>
);
 }

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     alignItems: "center",
     justifyContent: "center",
   },
  })