import { Pressable, View } from "react-native";
import { Stack, Link } from "expo-router";
import { CircleInfoIcon, Logo } from "../components/Icons.jsx";

export default function Layout() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#000",
          },
          headerTintColor: "#fff",
          headerTitle: "",
          headerLeft: () => (
            <Logo
              style={{
                width: 150,
                height: 90,
                resizeMode: "contain",
              }}
            />
          ),
          headerRight: () => (
            <Link href="/about" asChild>
              <Pressable>
                {({ pressed }) => (
                  <CircleInfoIcon style={{ opacity: pressed ? 0.5 : 1 }} />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
    </View>
  );
}
