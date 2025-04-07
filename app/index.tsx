import { Link } from 'expo-router';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native';
import { useState } from 'react';

export default function SomeComponent() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>

    <Image
      style={styles.logo}
      source={require('@/assets/images/logo.png')} />

      <Text style={styles.title}>Login</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu email"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          placeholderTextColor="#aaa"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
        </TouchableOpacity>
      </View>

      {/* Botão de Login */}
      <Link href="/welcome/page" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 100, // Afastando mais do topo
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    position: 'absolute',
    top: 325, 
    left: 20,
    
  },
  inputContainer: {
    width: '100%',
    marginBottom: 15, // Menor espaçamento entre os campos de email e senha
    position: 'relative',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  forgotPassword: {
    position: 'absolute',
    bottom: -20, // Distância para o canto inferior esquerdo
    left: 0,
    color: '#D32B2D',
    fontSize: 14,
  },
  button: {
    backgroundColor: '#D32B2D',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignItems: 'center',
    width: 370,
    marginTop: 30, // Afastando o botão para dar mais espaço entre os elementos
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logo: {
    marginBottom: 50,
  }
});