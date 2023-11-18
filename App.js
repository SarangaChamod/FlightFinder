import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import SearchForm from "./src/components/SearchForm.js";
import { SafeAreaView } from "react-native";
import data from "./data.json";
import FlightOptionItem from "./src/components/FlightPriceOption.js";
import { LinearGradient } from "expo-linear-gradient";

const option1 = data[4];

export default function App() {
  return (
    <LinearGradient colors={["white", "#E0EFFF"]} style={styles.container}>
      <SafeAreaView>
        <SearchForm />
        {/* <FlightOptionItem flight={option1}/> */}

        <FlatList
          data={data}
          renderItem={({ item }) => <FlightOptionItem flight={item} />}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
