import {Text, View} from "react-native";
import {Link} from "expo-router";

export default function Index() {
  return (
    <View
      className="bg-red-400 border border-red-400 "
    >
        <Text className="font-rubik text-danger">Enes Demirci</Text>
        <Link href="/sign-in">Sign In</Link>
        <Link href="/explore">explore</Link>
        <Link href="/profile">profile</Link>
        <Link href="/properties/1">properties</Link>
    </View>
  );
}
