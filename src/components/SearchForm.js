import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';

export default function SearchForm() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departDate, setDepartDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());
  const [showDepartDatePicker, setShowDepartDatePicker] = useState(false);
  const [showReturnDatePicker, setShowReturnDatePicker] = useState(false);

  const onSearchButton = () => {
    console.log("Search from:", from);
    console.log("Search to:", to);
    console.log("Departure Date:", departDate);
    console.log("Return Date:", returnDate);
  };

  const onDepartDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || departDate;
    setShowDepartDatePicker(false);
    setDepartDate(currentDate);
  };

  const onReturnDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || returnDate;
    setShowReturnDatePicker(false);
    setReturnDate(currentDate);
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
      <View style={styles.DatePicker}>
        <Button title="Select Departure Date" onPress={() => setShowDepartDatePicker(true)} />
        {showDepartDatePicker && (
          <DateTimePicker
            value={departDate}
            mode="date"
            onChange={onDepartDateChange}
          />
        )}
      </View>
      <View style={styles.DatePicker}>
        <Button title="Select Return Date" onPress={() => setShowReturnDatePicker(true)} />
        {showReturnDatePicker && (
          <DateTimePicker
            value={returnDate}
            mode="date"
            onChange={onReturnDateChange}
          />
        )}
      </View>
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
  DatePicker:{
    marginBottom: 10,
  }
});
