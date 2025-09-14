import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDYyOoChMQQuJHffe3vi2ssBE7PXUMfW78",
  authDomain: "todo-c55d1.firebaseapp.com",
  projectId: "todo-c55d1",
  storageBucket: "todo-c55d1.firebasestorage.app",
  messagingSenderId: "600953566945",
  appId: "1:600953566945:web:7618524ee18b32602469a0",
  measurementId: "G-QV4W0X3EKE"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Auth
export const auth = getAuth(app);

// Inicializar Firestore
export const db = getFirestore(app);

export default app;