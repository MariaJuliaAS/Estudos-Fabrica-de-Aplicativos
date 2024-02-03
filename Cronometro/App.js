import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

let timer = null
let ss = 0
let mm = 0
let hh = 0

export default function App() {
  const [numero, setNumero] = useState(0)
  const [botaoParar, setBotaoParar] = useState('INICIAR')
  const [ultimoTempo, setUltimoTempo] = useState(null)

  function iniciar(){
    if(timer !== null){
      clearInterval(timer)
      timer = null;
      setBotaoParar('INICIAR')
    }else{
      timer = setInterval(() => {
        ss++

        if(ss == 60){
          ss = 0
          mm++
        }

        if(mm == 60){
          mm = 0
          hh++
        }

        let format = (hh < 10 ? '0' + hh : hh) + ':' +
        (mm < 10 ? '0' + mm : mm) + ':' +
        (ss < 10 ? '0' + ss : ss)

        setNumero(format)
        setBotaoParar('PAUSAR')
      }, 1000)
    }
  }

  function resetar(){
    if(timer !== null){
      clearImmediate(timer)
      timer = null
    }

    setUltimoTempo(numero)
    let limpo = ('00:00:00')
    setNumero(limpo)
    setBotaoParar('INICIAR')
    
    ss = 0
    mm = 0 
    hh = 0
  }

  return (
    <View style={styles.container}>
      <Image source={require('./src/crono.png')}/>

      <Text style={styles.timer}>{numero}</Text>

      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.btn} onPress={iniciar}>
          <Text style={styles.btnText}>{botaoParar}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={resetar}>
          <Text style={styles.btnText}>RESETAR</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.areaUltimoTempo}>
        <Text style={styles.textUltimoTempo}>
          {ultimoTempo ? 'Último tempo: ' + ultimoTempo : ''}
        </Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00aeef',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timer: {
    marginTop: -160,
    fontSize: 45,
    fontWeight: 'bold',
    color: '#fff'
  },
   btnArea: {
    flexDirection: 'row',
    marginTop: 130,
    height: 40
   },
   btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 40,
    margin: 17,
    borderRadius: 9
   },
   btnText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef'
   },
   areaUltimoTempo: {
    marginTop: 40
   },
   textUltimoTempo: {
    fontSize: 25,
    color: '#fff',
    fontStyle: 'italic'
   }
});
