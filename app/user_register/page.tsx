import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

// Tipagem para o estado de erro
type ErrosCadastro = {
  nome?: string;
  email?: string;
  senha?: string;
  setor?: string;
  cargo?: string;
};

export default function CadastroUsuario() {
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [setor, setSetor] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erros, setErros] = useState<ErrosCadastro>({});

  const validar = () => {
    const novosErros: ErrosCadastro = {};

    if (!nome.trim()) novosErros.nome = 'Nome obrigatório';
    if (!cargo.trim()) novosErros.cargo = 'Cargo obrigatório';
    if (!setor) novosErros.setor = 'Setor obrigatório';
    if (!email.includes('@')) novosErros.email = 'Email incorreto';
    if (senha.length < 6) novosErros.senha = 'Senha incorreta';

    setErros(novosErros);

    if (Object.keys(novosErros).length === 0) {
      console.log('Cadastro realizado com sucesso!');
      // Aqui você pode chamar a API, resetar o formulário, etc.
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.voltar}>
        <Ionicons name="arrow-back" size={24} color="#000" />
        <Text style={styles.titulo}>Cadastrar usuarios</Text>
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.formulario}>
        <View style={styles.campo}>
          <Text style={styles.label}>
            Nome {erros.nome && <Text style={styles.erro}>({erros.nome})</Text>}
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: Arthuro Vidalgo"
            value={nome}
            onChangeText={setNome}
          />
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>
            Cargo {erros.cargo && <Text style={styles.erro}>({erros.cargo})</Text>}
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: Responsavel"
            value={cargo}
            onChangeText={setCargo}
          />
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>
            Setor {erros.setor && <Text style={styles.erro}>({erros.setor})</Text>}
          </Text>
          <TouchableOpacity style={styles.select}>
            <Text style={{ color: setor ? '#000' : '#999' }}>
              {setor || 'Selecione'}
            </Text>
            <Ionicons name="chevron-down" size={20} color="#999" />
          </TouchableOpacity>
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>
            Email {erros.email && <Text style={styles.erro}>({erros.email})</Text>}
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: arthurleal@gmail.com"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>
            Senha {erros.senha && <Text style={styles.erro}>({erros.senha})</Text>}
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: 123123123"
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
          />
        </View>

        <TouchableOpacity style={styles.botao} onPress={validar}>
          <Text style={styles.botaoTexto}>Cadastrar</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  voltar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    gap: 10,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  formulario: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  campo: {
    marginBottom: 16,
  },
  label: {
    fontWeight: '600',
    marginBottom: 4,
  },
  erro: {
    color: '#D32B2D',
    fontWeight: 'bold',
    fontSize: 12,
  },
  input: {
    backgroundColor: '#f3f3f3',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
  },
  select: {
    backgroundColor: '#f3f3f3',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  botao: {
    backgroundColor: '#D32B2D',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
