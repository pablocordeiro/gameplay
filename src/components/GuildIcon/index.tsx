import React from "react";
import { Image } from "react-native";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";


type Props = {
  urlImage?: string;
}

export function GuildIcon({urlImage}: Props) {
  const uri = 'https://gamerssuffice.com/wp-content/uploads/2019/11/How-to-add-bots-to-discord-500x405.jpg';


  return (
    <Image
      source={{ uri }}
      style={styles.image}
      resizeMode="cover"
    />
  );
  
}