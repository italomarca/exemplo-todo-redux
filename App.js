import React, {useState} from 'react';
import {SafeAreaView, Text} from 'react-native';

import BotaoAdicionar from './src/components/BotaoAdicionar';
import EntradaDeTexto from './src/components/EntradaDeTexto';
import ListaDeTarefas from './src/components/ListaDeTarefas';

const App = () => {
  const [tarefas, setTarefas] = useState([]);
  const [conteudoCaixaDeTexto, setNomeTarefa] = useState('');

  const adicionaTarefa = (tarefa) => {
    setNomeTarefa('');
    setTarefas([...tarefas, tarefa]);
  };

  return (
    <SafeAreaView style={{flex:1, margin: 10}}>
      <Text style={styles.tituloCabecalho}>TAREFAS A FAZER</Text>
      <ListaDeTarefas tarefas={tarefas} />
      <EntradaDeTexto
        nomeTarefa={conteudoCaixaDeTexto}
        setNomeTarefa={setNomeTarefa}
      />
      <BotaoAdicionar
        adicionaTarefa={() => adicionaTarefa(conteudoCaixaDeTexto)}
      />
    </SafeAreaView>
  );
};

const styles = {
  tituloCabecalho: {
    fontWeight: 'bold',
    alignSelf: 'center',
    marginVertical: 10,
    fontSize: 24,
  },
};
export default App;
