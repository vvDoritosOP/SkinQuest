import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
  


export default function App(){
    return(
    <View style={styles.container}> 
     <Text style={styles.text}>SkinQuest</Text>
      <TouchableOpacity>
        <Text style={styles.text}>Lets begin your journey!</Text>
        </TouchableOpacity>
    </View>
    );
    
  }

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d2b48c"
  },
  text:{
    fontSize : 32,
    color: "#b0e0e6"
  },
});