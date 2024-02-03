import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {

  const frasesDoBiscoito = [
    'A vida trará coisas boas se tiveres paciência.',
    'Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.',
    'Não compense na ira o que lhe falta na razão.',
    'Defeitos e virtudes são apenas dois lados da mesma moeda.',
    'A maior de todas as torres começa no solo.'
  ];

  const [fraseAtual, setFraseAtual] = useState('');
  const [imagem, setImagem] = useState(require('./assets/pictures/biscoito.png'))

  function quebrarBiscoito(){
    let numeroAleatorio = Math.floor(Math.random() * frasesDoBiscoito.length)
    setFraseAtual(' " ' + frasesDoBiscoito[numeroAleatorio] + ' " ')
    setImagem(require('./assets/pictures/biscoitoAberto.png'))
  }

  function limpar(){
    setFraseAtual('')
    setImagem(require('./assets/pictures/biscoito.png'))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Qual a sorte de hoje?</Text>
      <Image source={imagem} style={{width: 250, height: 250}}/>

      <Text style={styles.textBiscoito}>{fraseAtual}</Text>

      <TouchableOpacity style={styles.button1} onPress={quebrarBiscoito}>
        <Text style={[styles.textButton, {color: '#DAA520'}]}>Quebrar biscoito</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button2} onPress={limpar}>
        <Text style={[styles.textButton, {color: '#1E90FF'}]}>Limpar</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#DAA520',
    fontWeight: 'bold',
    fontSize: 24
  },
  button1: {
    borderColor: '#DAA520',
    borderWidth: 2,
    borderRadius: 40,
    padding: 10,
    marginBottom: 8
  },
  button2: {
    borderColor: '#1E90FF',
    borderWidth: 2,
    borderRadius: 40,
    padding: 8,
    paddingLeft: 48,
    paddingRight: 48,
    marginBottom: 8
  },
  textButton: {
    fontWeight: 'bold',
    fontSize: 18
  },
  textBiscoito: {
    color: '#DAA520',
    fontSize: 18,
    maxWidth: 300,
    marginBottom: 15,
    textAlign: 'center',
    fontStyle: 'italic'
  }
});
