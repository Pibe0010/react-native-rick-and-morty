import { Link } from "expo-router";
import { Pressable, ScrollView, Text } from "react-native";
import { HomeIcon } from "../components/Icons.jsx";
import { Screen } from "../components/Screen.jsx";

export default function About() {
  return (
    <Screen>
      <ScrollView>
        <Link href="/" asChild>
          <Pressable>
            {({ pressed }) => (
              <HomeIcon style={{ opacity: pressed ? 0.5 : 1 }} />
            )}
          </Pressable>
        </Link>
        <Text style={{ color: "#fff", fontWeith: "bold", fontSize: 30 }}>
          About
        </Text>
        <Text
          style={{
            color: "#fff",
            fontWeith: "bold",
            fontSize: 15,
            marginBottom: 5,
          }}
        >
          Encuentra los personajes de Rick and Morty en la app mobile. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat.
        </Text>
        <Text
          style={{ color: "#fff", fontWeith: "bold", fontSize: 15, margin: 5 }}
        >
          Encuentra los personajes de Rick and Morty en la app mobile. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat.
        </Text>
        <Text
          style={{ color: "#fff", fontWeith: "bold", fontSize: 15, margin: 5 }}
        >
          Encuentra los personajes de Rick and Morty en la app mobile. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat.
        </Text>
        <Text
          style={{ color: "#fff", fontWeith: "bold", fontSize: 15, margin: 5 }}
        >
          Encuentra los personajes de Rick and Morty en la app mobile. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat.
        </Text>
        <Text
          style={{ color: "#fff", fontWeith: "bold", fontSize: 15, margin: 5 }}
        >
          Encuentra los personajes de Rick and Morty en la app mobile. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat.
        </Text>
      </ScrollView>
    </Screen>
  );
}
