import { styles, theme } from "@/components/styles";
import SuperButton from "@/components/superButton";
import SuperTextInput from "@/components/superTextInput";
import SuperTitle from "@/components/superTitle";
import { TodoItem } from "@/components/todoItem";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { useAuth } from "../contexts/AuthContext";
import { useTodos } from "../hooks/useTodos";

export default function Index() {
  const [newItem, setNewItem] = useState<string>("");
  const { user, loading: authLoading, logout } = useAuth();
  const { todos, loading: todosLoading, addTodo, updateTodo, deleteTodo } = useTodos();

  useEffect(() => {
    if (!authLoading && !user) {
      router.replace('/login');
    }
  }, [user, authLoading]);

  if (authLoading) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color={theme.tint} />
        <Text>Carregando...</Text>
      </View>
    );
  }

  if (!user) {
    return null; // Será redirecionado para login
  }

  const handleAddItem = async () => {
    if (newItem.trim().length <= 3) return;
    
    try {
      await addTodo(newItem.trim());
      setNewItem("");
    } catch (error) {
      console.error('Erro ao adicionar item:', error);
    }
  };

  const handleUpdateTodo = async (id: string) => {
    const todo = todos.find(t => t.id === id);
    if (todo) {
      try {
        await updateTodo(id, !todo.completed);
      } catch (error) {
        console.error('Erro ao atualizar item:', error);
      }
    }
  };

  const handleDeleteTodo = async (id: string) => {
    try {
      await deleteTodo(id);
    } catch (error) {
      console.error('Erro ao deletar item:', error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <SuperTitle title="Lista de Compras" />
        <SuperButton
          onPress={logout}
          style={{ backgroundColor: 'red', width: 80, height: 40 }}
          title="Sair"
        />
      </View>
      
      <SuperTitle title="Adicione um item" />
      <SuperTextInput 
        value={newItem} 
        onChangeText={setNewItem}
        placeholder="Digite um item para a lista"
      />
      <SuperButton
        title="Adicionar"
        disabled={newItem.trim().length <= 3}
        onPress={handleAddItem}
      />
      
      {todosLoading ? (
        <View style={{ alignItems: 'center', marginTop: 20 }}>
          <ActivityIndicator size="small" color={theme.tint} />
          <Text>Carregando itens...</Text>
        </View>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            updateTodo={handleUpdateTodo}
            deleteTodo={handleDeleteTodo}
          />
        ))
      )}
    </ScrollView>
  );
}
