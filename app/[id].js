import { Stack, useLocalSearchParams } from "expo-router";
import { Text, View, ActivityIndicator, ScrollView, Image } from "react-native";
import { Screen } from "../components/Screen.jsx";
import { useEffect, useState } from "react";
import { addCharacter } from "../lib/rickAndMorty.js";

export default function Datail() {
  const { id } = useLocalSearchParams();
  const [characterInfo, setCharacterInfo] = useState(null);

  useEffect(() => {
    if (id) {
      addCharacter(id).then(setCharacterInfo);
    }
  }, [id]);

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#ffee00" },
          headerTintColor: "#000",
          headerTitle: "Detail",
          headerLeft: () => {},
          headerRight: () => {},
        }}
      />
      <View>
        {characterInfo === null ? (
          <ActivityIndicator color={"#fff"} size={"large"} />
        ) : (
          <ScrollView>
            <View style={{ justifyContent: "center" }}>
              <Image
                source={{ uri: characterInfo.image }}
                style={{
                  width: 300,
                  height: 294,
                  marginTop: 30,
                  marginBottom: 10,
                }}
              />
              <Text
                style={{
                  fontSize: 30,
                  color: "#fff",
                  fontWeight: "bold",
                  marginBottom: 10,
                }}
              >
                {characterInfo.name}
              </Text>
              <View style={{ gap: 4 }}>
                <Text style={{ fontSize: 15, color: "#fff" }}>
                  Status: {characterInfo.status}
                </Text>
                <Text style={{ fontSize: 15, color: "#fff" }}>
                  Specie: {characterInfo.species}
                </Text>
                <Text style={{ fontSize: 15, color: "#fff" }}>
                  Type: {characterInfo.type}
                </Text>
                <Text style={{ fontSize: 15, color: "#fff" }}>
                  Gender: {characterInfo.gender}
                </Text>
                <Text style={{ fontSize: 15, color: "#fff" }}>
                  Origin: {characterInfo.origin.name}
                </Text>
                <Text style={{ fontSize: 15, color: "#fff" }}>
                  Location: {characterInfo.location.name}
                </Text>
                <Text style={{ fontSize: 15, color: "#fff" }}>
                  Created: {characterInfo.created.slice(0, 10)}
                </Text>
              </View>
            </View>
          </ScrollView>
        )}
      </View>
    </Screen>
  );
}
