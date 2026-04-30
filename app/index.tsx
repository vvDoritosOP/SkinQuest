import { useRouter } from "expo-router";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { ImageBackground, StyleSheet, Text, TouchableOpacity } from "react-native";
import { db } from "./firebaseConfig";

const JitterImage = ({ frames, speed = 300, style, children, resizeMode = "cover" }) => {
  const [currentFrame, setCurrentFrame] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFrame((prev) => (prev + 1) % frames.length);
    }, speed);
    return () => clearInterval(timer);
  }, [frames, speed]);

 return (
    <ImageBackground
      source={frames[currentFrame]}
      style={style}
      resizeMode={resizeMode}
    >
      {children}
    </ImageBackground>
  );
};

export default function App(){
  const router = useRouter();
  const [hasSave, setHasSave] = useState(false);

  useEffect(() => {
    async function checkSave() {
      try {
        const docSnap = await getDoc(doc(db, "users", "player1"));
        if (docSnap.exists()) {
          setHasSave(true);
        }
      } catch (error) {
        console.log("error:", error);
      }
    }
    checkSave();
  }, []);


    const titleFrames = [
    require("@/assets/title2.png"),
    require("@/assets/SQ2.png"),
    require("@/assets/SQ3.png"),
    ]

    const backFrames = [
    require("@/assets/background.png"),
    require("@/assets/background2.png"),
    require("@/assets/background3.png"),
    ]

   

  return (
  <JitterImage
    frames={backFrames}
    speed={375}
    style={styles.container}
    resizeMode="cover"
  >
    <Text style={styles.textDesc}>Your Skincare journey reimagined</Text>

    <JitterImage
      frames={titleFrames}
      speed={375}
      style={{ position: "absolute", height: 250, width: 450, top: 150, right: -17 }}
    />

    <TouchableOpacity 
      style={styles.button}
      onPress={() => router.push("./concerns")}
    >
    </TouchableOpacity>

    {hasSave && (
      <TouchableOpacity onPress={() => router.push("./facemodel")}>
      
      </TouchableOpacity>
    )}
    
    <Text style={styles.textDesc}>Your Skincare journey reimagined</Text>
      <TouchableOpacity style={styles.button} 
      onPress={() => router.push("./concerns")}>
         <ImageBackground 
    source={require("@/assets/begin2.png")}
    style={{position: "absolute", bottom: -235,right: -95, height: 600, width: 400, justifyContent: "center", alignItems: "center"}}
    resizeMode="contain"
    ></ImageBackground>
        <Text style={styles.buttonText}>Lets begin your journey!</Text>
        </TouchableOpacity>

      {hasSave && (
        <TouchableOpacity
          onPress={() => router.push("./facemodel")}
        >
        <ImageBackground 
    source={require("@/assets/green.png")}
    style={{position: "absolute", bottom: -400,right: -205, height: 200, width: 400, justifyContent: "center", alignItems: "center"}}
    resizeMode="contain"
    >
          <Text style={{ fontSize: 20, color: "#04961c", fontWeight: "bold", textAlign: "center" }}>Load Progress</Text>
        
        </ImageBackground>
        </TouchableOpacity>
      )}


    </JitterImage>
    );
    
  }

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    
  },
  buttonText:{
    fontSize : 26,
    color: "#bb891e",
    fontWeight: "bold",
    textAlign: "center",
    
    
  },
  button:{
    
    width: 220, 
    height: 150,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  top: 550
    

  },
  text:{
    fontSize:59,
    fontWeight: "bold",
    color: "#b0e0e6",
    marginBottom: 55,
    
  },
  textDesc:{
    fontSize:25,
    color: "#ffbe5d",
    marginBottom:40,
    fontWeight:"bold",
    position: "absolute", top: 450
  }
});