import { useEffect, useState } from "react";
import { FlatList, ActivityIndicator } from "react-native";
import { getCharacters } from "../lib/rickAndMorty.js";
import { AnimatedCard } from "./Card.jsx";
import { Screen } from "./Screen.jsx";

export function Main() {
  const [game, setGame] = useState([]);

  useEffect(() => {
    getCharacters().then((game) => {
      setGame(game);
    });
  }, []);

  return (
    <Screen>
      {game.length === 0 ? (
        <ActivityIndicator color={"#fff"} size={"large"} />
      ) : (
        <FlatList
          data={game}
          keyExtractor={(game) => game.id}
          renderItem={({ item, id }) => <AnimatedCard game={item} id={id} />}
        ></FlatList>
      )}
    </Screen>
  );
}
