import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { InformacoesUsuario } from "../../componentes/InformacoesUsuario";
import { InformacoesUsuarioShimmerEffect } from "../../componentes/InformacoesUsuarioShimmerEffect";
import { CardConsulta } from "../../componentes/CardConsulta";
import { TelaDeFundo } from "../../componentes/TelaDeFundo";
import soniaFoto from "../../assets/sonia.png";
import pacientes from "./pacientes";
import styles from "./styles";
import { CardConsultaShimmerEffect } from "../../componentes/CardConsultaShimmerEffect";

export default function Principal({ navigation }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <TelaDeFundo>
      <View style={styles.container}>
        {!loading ? (
          <InformacoesUsuario
            nome="Olá Sônia"
            detalhes="Mais 4 consultas hoje"
            foto={soniaFoto}
          />
        ) : (
          <InformacoesUsuarioShimmerEffect />
        )}

        <Text style={styles.texto}>Hoje</Text>

        {!loading ? (
          <FlatList
            data={pacientes}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate("Detalhes", item)}
              >
                <CardConsulta {...item} />
              </TouchableOpacity>
            )}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <>
            <CardConsultaShimmerEffect />
            <CardConsultaShimmerEffect />
            <CardConsultaShimmerEffect />
          </>
        )}
      </View>
    </TelaDeFundo>
  );
}
