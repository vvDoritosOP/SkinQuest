import { useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Concerns() {
  const router = useRouter();
  
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

    <View style={{ backgroundColor:"#d2b48c", flex: 1, alignItems: "center", justifyContent: "space-between" , paddingVertical:50}}>
       <Text style={{ fontSize: 24, color: "#b0e0e6", fontWeight:"bold" }}>Select what you want to defeat!</Text>
       
       {problems.map((item) => (
        <TouchableOpacity 
        key={item.id} 
        onPress={() => toggleConcerns(item.id)}
        style = {[styles.card,  {backgroundColor: item.selected ? "green" : "#e9967a", 
         }]}
        >
        <Text style={{ fontSize: 20, color: "gold", padding: 5}}>
        {item.text}
        </Text>
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
          if (problems.filter((item) => item.selected).length > 0) {
            const selected = problems.filter((item)=>item.selected);
            router.push({
              pathname: "./facemodel",
              params : { conners : JSON.stringify(selected)}
          
            })
         
        }}}>
       <Text style = {{fontSize:24, color:"#b0e0e6"}}>Continue</Text>

       </TouchableOpacity>


      </View>
  );
 
  
}

 
  const styles = StyleSheet.create({
    card:{
      padding : 15,
      margin : 5,
      borderRadius : 10,
      borderWidth : 0,
      width: "80%",
      alignItems: "center",  
      
      

    }

  });