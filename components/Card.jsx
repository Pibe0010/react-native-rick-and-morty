import { Link } from "expo-router";
import { useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  Pressable,
} from "react-native";

export const Card = ({ game }) => {
  return (
    <Link href={`/${game.id}`} asChild>
      <Pressable>
        <View key={game.id} style={styles.card}>
          <Image source={{ uri: game.image }} style={styles.image} />
          <View style={{ marginBottom: 10 }}>
            <Text style={styles.title}>{game.name}</Text>
            <Text style={styles.desc}>
              Location: {game.location.name.slice(0, 16)} ...
            </Text>
            <Text style={styles.desc}>
              Origin: {game.origin.name.slice(0, 16)} ...
            </Text>
            <Text style={styles.desc}>Gender: {game.gender}</Text>
          </View>
        </View>
      </Pressable>
    </Link>
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
    backgroundColor: "#4f4f4f",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    width: 340,
  },
  image: {
    width: 105,
    height: 150,
    borderRadius: 10,
    borderColor: "#fff",
    borderWidth: 1,
    resizeMode: "cover",
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 5,
    paddingHorizontal: 10,
    marginLeft: 5,
  },
  desc: {
    color: "#fff",
    fontSize: 14,
    marginTop: 6,
    marginBottom: 6,
    lineHeight: 20,
    paddingHorizontal: 10,
    marginLeft: 5,
  },
});
