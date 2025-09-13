import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface ISuperButton {
  title: string;
  onPress?: () => void;
  disabled?: boolean;
}

/**
 * Um super botão estilizado roxo lindo demais
 * @param title Titulo do botão
 * @param onPress Função a ser executada ao clicar no botão
 * @param disabled Se o botão ta desabilitado ou não
 * @returns um lindo botão roxo
 */

const SuperButton = ({ title, onPress, disabled }: ISuperButton) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={disabled ? styles.button_disabled : styles.button}
      onPress={onPress}
    >
      <Text style={styles.button_title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default SuperButton;
