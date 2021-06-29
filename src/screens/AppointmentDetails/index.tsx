import React from "react";
import { ImageBackground } from "react-native";
import { Background } from "../../components/Background";
import { Header } from '../../components/Header';
import { BorderlessButton } from "react-native-gesture-handler";
import { Fontisto } from "@expo/vector-icons";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

export function AppointmentDetails() {

  return (
    <Background>
      <Header 
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto 
              name="share" 
              color={theme.colors.primary} 
            />
          </BorderlessButton>

        }
      />
      
      <View style={styles.container}>


      </View>
    </Background>
  );
  
}