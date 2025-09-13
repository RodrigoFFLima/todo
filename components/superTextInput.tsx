import { TextInput } from "react-native";
import { styles } from "./styles";

interface ISuperTextInput {
  value: string;
  onChangeText: (text: string) => void;
}
/**
 * Um super input estilizado
 * @param value Valor do input
 * @param onChangeText Função a ser executada ao mudar o texto
 * @returns Um lindo input estilizado
 */

const SuperTextInput = ({ value, onChangeText }: ISuperTextInput) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder="Digite algo"
      style={styles.inputText}
    ></TextInput>
  );
};

export default SuperTextInput;
