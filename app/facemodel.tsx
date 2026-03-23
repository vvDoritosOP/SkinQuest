import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function FaceModel(){
    const { concerns } = useLocalSearchParams();
    const selectedConcerns = concerns ? JSON.parse(concerns as string) : [];
    return (
        
        <View style={{ flex : 1, alignItems: "center", justifyContent: "center", backgroundColor: "#d2b48c"}}>  
          <Text style={{ fontSize:24, color: "#b0e0e6"}}> Enemies </Text>
          {selectedConcerns.map((item) => (
        <Text key={item.id} style={{fontSize:20, color:"white", padding:10}}>
        {item.text}
        </Text>
          ))}
         </View>
      


);
}