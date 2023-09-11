import { TextInput, Text, View, LogBox } from "react-native";

import { s } from "./InputTemperature.style.jsx";

export function InputTemperature({ defaultValue, onChangeText, unit }) {
  return (
    <View style={s.container}>


      <TextInput
        style={s.input}
        placeholder="Tappe une température"
        keyboardType="numeric"
        maxLength={4}
        defaultValue={defaultValue}
        onChangeText={onChangeText}
      />

      <Text style={s.unit}>{unit}</Text>

</View>
  );
}
