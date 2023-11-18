import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import { useState } from "react";

export default function SearchForm() {
  const [from, setFrom] = useState("defalt");
  const [to, setTo] = useState("");

  const onSearchButton = () => {
    console.log("Search for : ", from);
    console.log("To for : ", to);
  };
  return (
    <View style={styles.card}>
      <Text style={styles.title}>
        Search the best prices for your next trip
      </Text>
      <TextInput
        value={from}
        onChangeText={setFrom}
        placeholder="From"
        style={styles.inputbox}
      />
      <TextInput
        value={to}
        onChangeText={setTo}
        placeholder="To"
        style={styles.inputbox}
      />

      <Button title="Search" onPress={onSearchButton} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    marginTop: 35,
    margin: 10,
    padding: 15,
    borderRadius: 10,

    //shadows
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  title: {
    alignSelf: "center",
    fontWeight: "500",
    fontSize: 17,
  },
  inputbox: {
    borderWidth: 1,
    borderColor: "gainsboro",
    padding: 9,
    marginVertical: 5,
    borderRadius: 5,
  },
});
