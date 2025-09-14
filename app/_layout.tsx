import { Stack } from "expo-router";
import { AuthProvider } from "../contexts/AuthContext";

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: true,
            title: "Lista de Compras",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="login"
          options={{
            headerShown: true,
            title: "Login",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="register"
          options={{
            headerShown: true,
            title: "Cadastro",
            headerTitleAlign: "center",
          }}
        />
      </Stack>
    </AuthProvider>
  );
}
