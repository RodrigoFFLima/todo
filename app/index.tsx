import { styles } from "@/components/styles";
import SuperButton from "@/components/superButton";
import SuperTextInput from "@/components/superTextInput";
import SuperTitle from "@/components/superTitle";
import { ITodoItem, TodoItem } from "@/components/todoItem";
import { useState } from "react";
import { ScrollView } from "react-native";

export default function Index() {
  const [newItem, setNewItem] = useState<string>("");
  const [todos, setTodos] = useState<ITodoItem[]>([]);

  const addItem = () => {
    //criar um novo item
    const item: ITodoItem = {
      id: Date.now().toString(),
      title: newItem,
      completed: false,
    };

    //adicionar na lista
    setTodos([...todos, item]);

    //limpar o input
    setNewItem("");
  };

  const updateTodo = (id: string) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const deleteTodo = (id: string) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <ScrollView style={styles.container}>
      <SuperTitle title="Adicione um item" />
      <SuperTextInput value={newItem} onChangeText={setNewItem} />
      <SuperButton
        title="Adicionar"
        disabled={newItem.length <= 3}
        onPress={addItem}
      />
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ScrollView>
  );
}
