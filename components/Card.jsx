import { useEffect, useRef } from "react";
import { StyleSheet, Text, View, Image, Animated } from "react-native";

export const Card = ({ game }) => {
  return (
    <View key={game.id} style={styles.card}>
      <Image source={{ uri: game.image }} style={styles.image} />
      <Text style={styles.title}>{game.name}</Text>
      <Text style={styles.desc}>Location: {game.location.name}</Text>
      <Text style={styles.desc}>Origin: {game.origin.name}</Text>
      <Text style={styles.desc}>Gender: {game.gender}</Text>
      <Text style={styles.desc}>Type: {game.type}</Text>
      <Text style={styles.desc}>Specie: {game.species}</Text>
      <Text style={styles.desc}>Status: {game.status}</Text>
      <Text style={styles.desc}>Created: {game.created}</Text>
      <Text style={styles.desc}>Episode: {game.episode.length}</Text>
    </View>
  );
};

export function AnimatedCard({ game, id }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      delay: id * 250,
      useNativeDriver: true,
    }).start();
  }, [opacity, id]);

  return (
    <Animated.View style={{ opacity: opacity }}>
      <Card game={game} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 42,
  },
  image: {
    width: 310,
    height: 247,
    borderRadius: 10,
  },
  title: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 10,
  },
  desc: {
    color: "#fff",
    fontSize: 17,
    marginTop: 10,
    lineHeight: 20,
    fontWeight: "bold",
  },
});
