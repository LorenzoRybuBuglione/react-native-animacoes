import React from "react";
import { View, Text, Image } from "react-native";
import shimmerGif from "../../assets/shimmer.gif";
import styles from "../InformacoesUsuario/styles";

export function InformacoesUsuarioShimmerEffect() {
  return (
    <View style={styles.container}>
      <Image source={shimmerGif} style={styles.foto} />
      <View style={styles.informacoes}>
        <Image
          source={shimmerGif}
          style={{ width: 150, height: 35, borderRadius: 10 }}
        />
        <Image
          source={shimmerGif}
          style={{ width: 150, height: 20, borderRadius: 10, marginTop: 5 }}
        />
      </View>
    </View>
  );
}
