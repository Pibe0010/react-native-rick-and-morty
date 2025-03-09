import { useEffect, useState } from "react";
import { FlatList, View, ActivityIndicator, Image } from "react-native";
import { getCharacters } from "../lib/metacritic.js";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatedCard } from "./Card.jsx";

export function Main() {
  const [game, setGame] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getCharacters().then((game) => {
      setGame(game);
    });
  }, []);

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <Image
        source={require("../assets/logo.png")}
        style={{
          width: 260,
          height: 100,
          marginBottom: 10,
          marginTop: 20,
          resizeMode: "cover",
          alignSelf: "center",
        }}
      />
      {game.length === 0 ? (
        <ActivityIndicator color={"#fff"} size={"large"} />
      ) : (
        <FlatList
          data={game}
          keyExtractor={(game) => game.id}
          renderItem={({ item, id }) => <AnimatedCard game={item} id={id} />}
        ></FlatList>
      )}
    </View>
  );
}
