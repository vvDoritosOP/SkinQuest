import { useGlobalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import { ImageBackground, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Shop () {
    const router = useRouter();
    const { coin: coinParam, concerns, streak, stage, hp } = useGlobalSearchParams();
    const [coin, setCoin] = useState(Number(coinParam) || 0);

    const [shop, setShop] = useState ([

        {id:20, text : "Shield", selected : false, price: 5 },
        {id:21, text: "baseball hat", selected: false, price: 3},
        {id:22, text: "spikey hair", selected: false, price: 2},
        {id:23, text:"ear piercings", selected: false, price: 1}
    ])
 
  function buyItem(id) {
  const tappedItem = shop.find((item) => item.id === id);
  
  if (!tappedItem) return;
  if (tappedItem.selected) return;
  if (tappedItem.price > Number(coin)) return;

  setCoin(Number(coin) - tappedItem.price);
  
  setShop((prev) => {
    return prev.map((item) => {
      if (item.id === id) {
        return { ...item, selected: true };
      } else {
        return item;
      }
    });
  });
}
    
    
    return (
     <ImageBackground 
    source={require("@/assets/background.png")}
    style={styles.container}
    resizeMode="cover"
  >
    <Text style={{ fontSize: 24, color: "gold", fontWeight: "bold", marginBottom: 20 }}>
      Coins: {coin}
    </Text>
      {shop.map((item) => (
  <TouchableOpacity 
    key={item.id} 
    onPress={() => buyItem(item.id)}
    style={{
      backgroundColor: item.selected ? "green" : "#e9967a",
      padding: 15,
      margin: 5,
      borderRadius: 10,
      width: "80%",
      alignItems: "center",
    }}
  >
    <Text style={{ fontSize: 20, color: "gold", fontWeight: "bold" }}>
      {item.text} - {item.price} coins
    </Text>
  </TouchableOpacity>
))}
    
    
        <TouchableOpacity onPress={() => {
  const purchased = shop
    .filter((item) => item.selected)
    .map((item) => item.text)
    .join(",");
  router.push({
    pathname: "./facemodel",
    params: { 
      coin: String(coin), 
      concerns: String(concerns),
      hp: String(hp),
      streak: String(streak),
      stage: String(stage),
      purchased: purchased,
    }
  });
}}
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
    
    </ImageBackground>
    )}

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    })