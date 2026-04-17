import { useRouter } from "expo-router";
import React, { useState } from "react";
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Concerns() {
  const router = useRouter();
  
  const [problems, setProblems] = useState([

    { id: 1, text: `Acne`, selected: false, image: require("@/assets/acneback.png"), textColor: "#ee6631"},
    { id: 2, text: `Blackheads`, selected: false, image: require("@/assets/blackback.png") , textColor: "#4e4d4d"},
    { id: 3, text: `Wrinkles`, selected: false, image: require("@/assets/wrinkback.png"), textColor: "#9866af"},
    { id: 4, text: `Redness`, selected: false,  image: require("@/assets/redback.png"), textColor: "#cf5858"},
    { id: 5, text: `Eye Bags`, selected: false,  image: require("@/assets/eyeback.png"), textColor: "#4c2496"},
    { id: 6, text: `Oiliness`, selected: false,  image: require("@/assets/oilback.png"), textColor: "#bd931f"},
  ]);

  function toggleConcerns(id){
    setProblems((prev)=>{
    const selectedCount = prev.filter((item)=>item.selected).length;
    const tappedItem = prev.find((item)=>item.id === id);

    if (!tappedItem) return prev;

    if (selectedCount >= 3 && !tappedItem.selected){
      return prev;
    }

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
       <Text style={{ fontSize: 24, color: "#b0e0e6", fontWeight:"bold" }}>Select what you want to defeat!</Text>
       
       {problems.map((item) => (
        <TouchableOpacity 
        key={item.id} 
        onPress={() => toggleConcerns(item.id)}
        style = {[styles.card,  {backgroundColor: item.selected ? "#000000" : "transparent"
         }]}
        >
        <ImageBackground
      source={item.image}
      style={styles.cardImage}
      imageStyle={{ borderRadius: 10, top: 10, height: '120%', width:'120%', left: '-10%' }}
      resizeMode="cover"
    >
        <View style={[styles.overlay, { backgroundColor: item.selected ? 'rgba(0,128,0,0.5)' : 'rgba(0, 0, 0, 0)' }]}>
        <Text style={{ 
        fontSize: 20, 
        fontWeight: "bold", 
        color: item.selected ? "white" : item.textColor }}>{item.text}</Text>
      </View>
        </ImageBackground>
        </TouchableOpacity>
       ))}
       <Text style={{color:"#b0e0e6", fontWeight: "bold"}}>{problems.filter((item)=>item.selected).length}/3 Selected </Text>
     
       
       <TouchableOpacity 
      
       style={{
        opacity : problems.filter((item)=>item.selected).length > 0 ? 1  : 0.4,
        marginTop: 10,
        padding:15,
        borderRadius: 27,
        backgroundColor: "#e9967a",
        }}
      onPress={() => {
       const selected = problems
       .filter((item) => item.selected)
      .map((item) => item.text)
     .join(",");

     if (selected.length > 0) {
    router.push({
      pathname: "./facemodel",
      params: { concerns: selected }
    });
  }
}}>
      <Text style = {{fontSize:24, color:"#b0e0e6"}}>Continue</Text>

       </TouchableOpacity>


      </ImageBackground>
  );
 
  
}

 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    margin: 5,
    borderRadius: 10,
    width: "80%",
    height: 110, 
    overflow: "hidden", 
  },
  cardImage: {
    width: '100%',
  height: '100%',
  justifyContent: "center",
  alignItems: "center",
  },
  overlay: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

  