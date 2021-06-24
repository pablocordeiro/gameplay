import React from "react";
import { View } from "react-native";

import { styles } from "./styles";


type Props = {
  urlImage?: string;
}

export function ListDivider() {

  return (
    <View
      style={styles.container}
    />
  );
  
}