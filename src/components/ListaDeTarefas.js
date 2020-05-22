import React from 'react';
import {View} from 'react-native';

import Tarefa from './Tarefa';

const ListaDeTarefas = ({tarefas}) => {
  return (
    <View style={styles.listaTarefas}>
      {tarefas.map((tarefa) => (
        <Tarefa tarefa={tarefa} />
      ))}
    </View>
  );
};

const styles = {
  listaTarefas: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#000',
  },
};

export default ListaDeTarefas;
