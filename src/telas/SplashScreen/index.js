import { View } from "react-native";
import LottieView from "lottie-react-native";
import splash from "../../assets/splash-aluramed.json";
import styles from "./styles";

export default function SplashScreen({ navigation }) {
  function animacaoFinalizada() {
    navigation.replace("Onboarding");
  }

  return (
      <View style={styles.container}>
        <LottieView
          source={splash}
          loop={false}
          autoPlay={true}
          onAnimationFinish={animacaoFinalizada}
        />
      </View>
  );
}
