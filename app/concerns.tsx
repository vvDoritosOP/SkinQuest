import React, { useState } from "react";
import { Text, View } from "react-native";

export default function Concerns() {
  
  const [problems, setProblems] = useState([

    { id: 1, text: `Acne`, selected: false},
    { id: 2, text: `Blackheads`, selected: false},
    { id: 3, text: `Wrinkles`, selected: false},
    { id: 4, text: `Redness`, selected: false},
    { id: 5, text: `Eye Bags`, selected: false},
    { id: 6, text: `Oillness`, selected: false},
  ]);

  function toggleConcers(id){
    setProblems(problems.map((item) => {
      if (item.id === id){
        return {...item, selcted: !item.selected};
      } else {
        return item;
      }
    
  }));
  }

  return (

    <View style={{ backgroundColor:"#d2b48c", flex: 1, alignItems: "center", justifyContent: "center" }}>
       <Text style={{ fontSize: 24, color: "#b0e0e6", fontWeight:"bold" }}>Select what you want to defeat!</Text>
       {problems.map((item) => (
        <Text key={item.id} style={{fontSize: 20, color: "black", padding: 10}}>{item.text}</Text>
       ))}
      </View>
  );
}