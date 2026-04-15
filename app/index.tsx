import { useRouter } from "expo-router";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity } from "react-native";
import { db } from "./firebaseConfig";





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


    return(
    <ImageBackground 
    source={require("@/assets/background.png")}
    style={styles.container}
    resizeMode="cover"
    > 
     
   <Image 
     source={require("@/assets/title2.png")} 
     style={{position: "absolute", height: 250, width: 450, top: 150, right: -17
    }}/>
      <Text style={styles.textDesc}>Your Skincare journey reimagined</Text>
      <TouchableOpacity style={styles.button} 
      onPress={() => router.push("./concerns")}>
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
          <Text style={{ fontSize: 20, color: "#ce97df", fontWeight: "bold", }}>Continue Progress</Text>
        
        </ImageBackground>
        </TouchableOpacity>
      )}


    </ImageBackground>
    );
    
  }

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    
  },
  buttonText:{
    fontSize : 28,
    color: "#b0e0e6",
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
    color: "#b8860b",
    marginBottom:40,
    fontWeight:"bold",
    position: "absolute", top: 450
  }
});