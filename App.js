import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SearchForm from "./src/components/SearchForm.js";
import { SafeAreaView } from "react-native";

export default function App() {
  return (
    
      <SafeAreaView>
        <SearchForm />
      </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
