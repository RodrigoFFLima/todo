import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export interface ITodoItem {
  id: string;
  title: string;
  completed: boolean;
}

interface Item {
  todo: ITodoItem;
  updateTodo: (id: string) => void;
}

export const TodoItem = ({ todo, updateTodo }: Item) => {
  const handleUpdate = () => {
    updateTodo(todo.id);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleUpdate}>
      <Ionicons
        name={todo.completed ? "bookmark" : "bookmark-outline"}
        size={24}
        color="black"
      />
      <Text style={styles.title}>{todo.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginTop: 20,
    borderColor: "#c4c4c4",
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
    backgroundColor: "#e4e4e4",
    height: 50,
    width: "100%",
  },
  title: {
    fontSize: 16,
    marginLeft: 10,
  },
});
