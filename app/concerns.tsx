import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Concerns() {
  
  const [problems, setProblems] = useState([

    { id: 1, text: `Acne`, selected: false},
    { id: 2, text: `Blackheads`, selected: false},
    { id: 3, text: `Wrinkles`, selected: false},
    { id: 4, text: `Redness`, selected: false},
    { id: 5, text: `Eye Bags`, selected: false},
    { id: 6, text: `Oillness`, selected: false},
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

    <View style={{ backgroundColor:"#d2b48c", flex: 1, alignItems: "center", justifyContent: "center" }}>
       <Text style={{ fontSize: 24, color: "#b0e0e6", fontWeight:"bold" }}>Select what you want to defeat!</Text>
       
       {problems.map((item) => (
        <TouchableOpacity 
        key={item.id} 
        onPress={() => toggleConcerns(item.id)}
        style = {[styles.card,  {backgroundColor: item.selected ? "green" : "#e9967a", 
         }]}
        >
        <Text style={{ fontSize: 20, color: "gold", padding: 10}}>
        {item.text}
        </Text>
        </TouchableOpacity>
       ))}
       <Text style={{color:"#b0e0e6", fontWeight: "bold"}}>{problems.filter((item)=>item.selected).length}/3 Selected </Text>
      </View>
  );
 
  
}

 
  const styles = StyleSheet.create({
    card:{
      padding : 3,
      margin : 5,
      borderRadius : 10,
      borderWidth : 2,
      width: "70%",
      
      

    }

  });