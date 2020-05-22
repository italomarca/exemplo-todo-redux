import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const BotaoAdicionar = ({adicionaTarefa}) => {
  return (
    <TouchableOpacity style={styles.botao} onPress={adicionaTarefa}>
      <Text style={styles.textoBotao}>ADICIONAR TAREFA</Text>
    </TouchableOpacity>
  );
};

const styles = {
  botao: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    color: '#FFF',
    borderRadius: 5,
    height: 50,
    marginVertical: 5,
  },
  textoBotao: {
    fontWeight: 'bold',
    color: '#FFF',
  },
};

export default BotaoAdicionar;
