import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Image } from "react-native";

export const CircleInfoIcon = (props) => (
  <FontAwesome5 name="info-circle" size={30} color="white" {...props} />
);

export const HomeIcon = (props) => (
  <FontAwesome name="home" size={30} color="white" {...props} />
);

export const Logo = (props) => (
  <Image source={require("../assets/logo.png")} {...props} />
);

export const InfoIcon = (props) => (
  <FontAwesome5 name="info" size={30} color="white" {...props} />
);
