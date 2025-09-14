import { Text, TouchableOpacity, ViewStyle } from "react-native";
import { styles } from "./styles";

interface ISuperButton {
  title?: string;
  children?: React.ReactNode;
  onPress?: () => void;
  disabled?: boolean;
  style?: ViewStyle;
}

/**
 * Um super botão estilizado roxo lindo demais
 * @param title Titulo do botão
 * @param onPress Função a ser executada ao clicar no botão
 * @param disabled Se o botão ta desabilitado ou não
 * @returns um lindo botão roxo
 */

const SuperButton = ({ title, children, onPress, disabled, style }: ISuperButton) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        disabled ? styles.button_disabled : styles.button,
        style
      ]}
      onPress={onPress}
    >
      <Text style={styles.button_title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default SuperButton;
