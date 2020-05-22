import React from 'react';
import {TextInput} from 'react-native';

const EntradaDeTexto = ({nomeTarefa, setNomeTarefa}) => {
  return (
    <TextInput
      style={styles.entradaDeTexto}
      value={nomeTarefa}
      onChangeText={(novoTexto) => setNomeTarefa(novoTexto)}
    />
  );
};

const styles = {
  entradaDeTexto: {
    height: 100,
    borderWidth: 2,
    borderColor: '#000',
    marginVertical: 10,
  },
};

export default EntradaDeTexto;
