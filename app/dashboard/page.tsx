import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialIcons, Feather } from '@expo/vector-icons';

export default function Dashboard() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.helloContainer}>
          <View style={styles.helloRow}>
            <Text style={styles.helloText}>Olá, Arthur</Text>
            <MaterialIcons name="local-fire-department" size={20} color="#fff" style={styles.fireIcon} />
          </View>
          <Text style={styles.welcomeText}>Bem vindo de volta!</Text>
        </View>
        <Ionicons name="notifications-outline" size={24} color="#fff" />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Verificar Setores */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Verificar Setores</Text>
          <Ionicons name="chevron-forward" size={22} color="#333" />
        </View>

        {/* Card: Total de Extintores */}
        <View style={styles.card}>
          <Image
            source={require('@/assets/images/extintor.png')}
            style={{ width: 90, height: 90 }}
            resizeMode="contain"
          />
          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text style={styles.cardValue}>Total de Extintores</Text>
            <View style={styles.extintorRow}>
              <Text style={styles.extintorNumber}>18</Text>
              <View style={styles.statusTag}>
                <Text style={styles.statusText}>25% Manutenção</Text>
              </View>
            </View>
            <Text style={styles.cardDescription}>
              Verifique a quantidade total de extintores.
            </Text>
          </View>
        </View>

        {/* Dot indicator */}
        <View style={styles.dots}>
          <View style={styles.dotActive} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

        {/* Card com imagem */}
        <View style={styles.imageCard}>
          <Image
            source={require('@/assets/images/Extintores.png')}
            style={styles.cardImage}
            resizeMode="cover"
          />
          <View style={styles.cardContent}>
            <Text style={styles.cardText}>Alinhamento reduz custos.</Text>
            <Feather name="heart" size={18} color="#D32B2D" />
          </View>
          <TouchableOpacity style={styles.contactButton}>
            <Text style={styles.contactText}>Contate fornecedores</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Tab */}
      <View style={styles.bottomTab}>
        <TouchableOpacity>
          <Ionicons name="home-outline" size={24} color="#D32B2D" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="scan-outline" size={24} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="person-outline" size={24} color="#333" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    backgroundColor: '#D32B2D',
    padding: 20,
    paddingTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  helloContainer: {},
  helloRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  helloText: { color: '#fff', fontSize: 16 },
  welcomeText: { color: '#fff', fontWeight: 'bold', fontSize: 18 },
  fireIcon: {},

  scrollContent: { padding: 20 },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: { fontSize: 18, fontWeight: 'bold' },

  card: {
    flexDirection: 'row',
    backgroundColor: '#F7F7F7',
    borderRadius: 12,
    padding: 15,
    alignItems: 'flex-start',
    marginBottom: 20,
    elevation: 2,
  },
  cardValue: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 6,
  },
  extintorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  extintorNumber: {
    fontSize: 22,
    fontWeight: 'bold',
    marginRight: 10,
  },
  statusTag: {
    backgroundColor: '#FDDCDC',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
  },
  statusText: { fontSize: 12, color: '#D32B2D', fontWeight: 'bold' },
  cardDescription: { fontSize: 13, color: '#555', marginTop: 5 },

  dots: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginVertical: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  dotActive: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#D32B2D',
    marginHorizontal: 4,
  },

  imageCard: {
    backgroundColor: '#F7F7F7',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 20,
  },
  cardImage: {
    width: '100%',
    height: 140,
  },
  cardContent: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardText: {
    fontSize: 15,
    fontWeight: '500',
  },
  contactButton: {
    backgroundColor: '#D32B2D',
    margin: 10,
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: 'center',
  },
  contactText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  bottomTab: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopColor: '#ddd',
    borderTopWidth: 1,
    backgroundColor: '#fff',
  },
});
