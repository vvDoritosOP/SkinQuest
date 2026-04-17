import { useGlobalSearchParams, useRouter } from "expo-router";
import { doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity } from "react-native";
import { db } from "./firebaseConfig";

export default function DailyLog(){
    const router = useRouter();
    const { concerns, streak, currentHP, stage } = useGlobalSearchParams();
    const [products, setproducts] = useState([

        {id: 10, text: "Cleanser", selected: false, image : require("@/assets/cleanser.png"), glow : require("@/assets/BackCleanser.png")},
        {id: 11, text: "Moisturizer", selected: false, image : require("@/assets/moist.png"), glow : require("@/assets/backmoist.png")},
        {id: 12, text: "Sunscreen", selected: false, image : require("@/assets/sun.png"), glow : require("@/assets/backsun.png")},
    ]);
function toggleDailyLog(id){
    setproducts((prev)=>{
    return prev.map((item)=>{
      if (item.id === id){
        return {...item, selected: !item.selected};
      } else {
        return item;
      }
    
  })});
  }
  return (
    <ImageBackground 
                source={require("@/assets/background.png")}
                style={styles.container}
                resizeMode="cover"
                > 
    <Text style={{fontSize: 24, color: "#b0e0e6", fontWeight:"bold"}}>Select Your Skincare Products!</Text>

    {products.map((item) =>(
    <TouchableOpacity
    key={item.id}
    onPress= {() => toggleDailyLog(item.id)}
    style={[styles.card]}    
    >

     {item.selected && (
      <Image
      source={item.glow}
      style={{width: 280, height: 230, position: "absolute", top : -24, left : 40}}
      />
      )}
    
    <Image
    source = {item.image}
    style={{width:252, height:150}}
    />
   
   
   
    <Text style={{ fontSize: 20, color: "gold", padding: 5, fontWeight: "bold"}}>
           {item.text}
            </Text>
    </TouchableOpacity>

    ))}

    <TouchableOpacity
    style={{
      opacity: products.filter((item) => item.selected).length > 0 ? 1 : 0.3,
      marginTop:10,
      padding:15,
      borderRadius:27,
      backgroundColor: "#e62922",
      }}
     onPress={async () => {
        const completed = products.filter((item) => item.selected).length;
         if (completed > 0) {
         const newHP = Math.max(0, Number(currentHP) - (completed * 15));
         const newStreak = Number(streak) + 1;
         await setDoc(doc(db, "users", "player1"), {
            concerns: String(concerns),
            hp: newHP,
            streak: newStreak,
          stage: Number(stage),
    });
      router.push({
       pathname: "./facemodel",
        params: {
          concerns: String(concerns),
         hp: String(newHP),
         streak: String(newStreak),
         stage: String(stage),
      }
    });
  }
}}
      
      >



    <Text style={{
      fontSize: 24, 
      color: "#b0e0e6", 
      fontWeight:"bold",
    }}>Log Products</Text>

    </TouchableOpacity>
    
    <TouchableOpacity onPress={() => router.back()}
      style={{
      position: "absolute",
      right: 370,
      bottom: 750,
      backgroundColor: "#cd5c5c",
      borderRadius:55,
      height:55,
      width:55, 
      alignItems: "center",
      justifyContent: "center"
      }}>
   
    <Text style={{
     
      color: "gold",
      fontWeight: "bold"
    }}>Back</Text>
    </TouchableOpacity>
   
  
    </ImageBackground>
)}

const styles = StyleSheet.create({
    card:{
      padding : 15,
      margin : 5,
      borderRadius : 10,
      borderWidth : 0,
      width: "80%",
      alignItems: "center",  
      },
     
   container: {
     flex: 1,
     alignItems: "center",
     justifyContent: "center",
   },
  
    
    
    
    })