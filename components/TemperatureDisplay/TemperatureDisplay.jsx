import { Text } from "react-native";
import { s } from "./TemperatureDisplay.style.jsx";

export function TemperatureDisplay({value, unit}) {
  return (
   <Text style={s.text}>
    {value} {unit}
   </Text>
  )
}
