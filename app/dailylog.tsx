import { useGlobalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function DailyLog(){
    const router = useRouter();
    const { concerns, streak, currentHP, stage } = useGlobalSearchParams();
    const [products, setproducts] = useState([

        {id: 10, text: "Cleanser", selected: false},
        {id: 11, text: "Moisturizer", selected: false},
        {id: 12, text: "Sunscreen", selected: false},
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
    <View style={{backgroundColor:"#d2b48c", flex: 1, alignItems: "center", justifyContent: "space-between" , paddingVertical:50}}>
    <Text style={{fontSize: 24, color: "#b0e0e6", fontWeight:"bold"}}>Select Your Skincare Products!</Text>

    {products.map((item) =>(
    <TouchableOpacity
    key={item.id}
    onPress= {() => toggleDailyLog(item.id)}
    style={[styles.card,  {backgroundColor: item.selected ? "green" : "#e9967a", 
     }]}    
    >
    <Text style={{ fontSize: 20, color: "gold", padding: 5}}>
           {item.selected ? "✅" : ""}{item.text}
            </Text>
    </TouchableOpacity>

    ))}

    <TouchableOpacity
    style={{
      opacity: products.filter((item) => item.selected).length > 0 ? 1 : 0.3,
      marginTop:10,
      padding:15,
      borderRadius:27,
      backgroundColor: "#e9967a",
      }}
      onPress={() =>{
 const completed = products.filter((item) => item.selected).length;
        

        if (completed> 0){
          router.push({
            pathname: "./facemodel",
            params: {
              concerns : String(concerns),
              hp: String(Math.max(0, Number(currentHP) - (completed * 15))),
              streak: String(Number(streak) +1),
              stage: String(stage)
              
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
    

    </View>
)}

const styles = StyleSheet.create({
    card:{
      padding : 15,
      margin : 5,
      borderRadius : 10,
      borderWidth : 0,
      width: "80%",
      alignItems: "center",  
      
      

    }})