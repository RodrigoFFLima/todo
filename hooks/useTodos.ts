import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    onSnapshot,
    query,
    updateDoc,
    where
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { ITodoItem } from '../components/todoItem';
import { db } from '../config/firebase';
import { useAuth } from '../contexts/AuthContext';

export const useTodos = () => {
  const [todos, setTodos] = useState<ITodoItem[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      setTodos([]);
      setLoading(false);
      return;
    }

    // Query para buscar todos do usuário atual
    const q = query(
      collection(db, 'todos'),
      where('userId', '==', user.uid)
    );

    // Escutar mudanças em tempo real
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const todosData: ITodoItem[] = [];
      querySnapshot.forEach((doc) => {
        todosData.push({
          id: doc.id,
          ...doc.data()
        } as ITodoItem);
      });
      setTodos(todosData);
      setLoading(false);
    }, (error) => {
      console.error('Erro no listener do Firestore:', error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [user]);

  const addTodo = async (title: string) => {
    if (!user) return;

    try {
      await addDoc(collection(db, 'todos'), {
        title,
        completed: false,
        userId: user.uid,
        createdAt: new Date()
      });
    } catch (error) {
      console.error('Erro ao adicionar todo:', error);
      throw error;
    }
  };

  const updateTodo = async (id: string, completed: boolean) => {
    try {
      const todoRef = doc(db, 'todos', id);
      await updateDoc(todoRef, {
        completed
      });
    } catch (error) {
      console.error('Erro ao atualizar todo:', error);
      throw error;
    }
  };

  const deleteTodo = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'todos', id));
    } catch (error) {
      console.error('Erro ao deletar todo:', error);
      throw error;
    }
  };

  return {
    todos,
    loading,
    addTodo,
    updateTodo,
    deleteTodo
  };
};
