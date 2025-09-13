import { Text } from "react-native";
import { styles } from "./styles";

interface ISuperTitle {
  title: string;
  uppercase?: boolean;
}

const SuperTitle = (props: ISuperTitle) => {
  let texto = props.title;

  if (props.uppercase) {
    texto = texto.toUpperCase();
  }

  return <Text style={styles.title}>{texto}</Text>;
};

export default SuperTitle;
