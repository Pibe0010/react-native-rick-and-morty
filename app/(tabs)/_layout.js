import { Tabs } from "expo-router";
import { HomeIcon, InfoIcon } from "../../components/Icons.jsx";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#000" },
        tabBarActiveTintColor: "#01c0d9",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color }) => <InfoIcon color={color} />,
        }}
      />
    </Tabs>
  );
}
