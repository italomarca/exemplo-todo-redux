import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const Tarefa = ({tarefa}) => {
  const [selecionada, seleciona] = useState(false);
  return (
    <TouchableOpacity
      style={styles.tarefa}
      onPress={() => seleciona(!selecionada)}>
      {selecionada && <Text style={{marginRight: 10}}>X</Text>}
      <Text>{tarefa}</Text>
    </TouchableOpacity>
  );
};

const ListaDeTarefas = ({tarefas}) => {
  return (
    <View style={styles.listaTarefas}>
      {tarefas.map((tarefa) => (
        <Tarefa tarefa={tarefa} />
      ))}
    </View>
  );
};

const EntradaDeTexto = ({nomeTarefa, setNomeTarefa}) => {
  return (
    <TextInput
      style={styles.entradaDeTexto}
      value={nomeTarefa}
      onChangeText={(novoTexto) => setNomeTarefa(novoTexto)}
    />
  );
};

const BotaoAdicionar = ({adicionaTarefa}) => {
  return (
    <TouchableOpacity
      style={styles.botao}
      onPress={adicionaTarefa}>
      <Text style={styles.textoBotao}>ADICIONAR TAREFA</Text>
    </TouchableOpacity>
  );
};

const App = () => {
  const [tarefas, setTarefas] = useState([]);
  const [conteudoCaixaDeTexto, setNomeTarefa] = useState('');

  const adicionaTarefa = (tarefa) => {
    setNomeTarefa('');
    setTarefas([...tarefas, tarefa]);
  };

  return (
    <SafeAreaView style={{flex:1, margin: 10}}>
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
  listaTarefas: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#000',
  },
  tarefa: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingVertical: 10,
  },
  entradaDeTexto: {
    height: 100,
    borderWidth: 2,
    borderColor: '#000',
    marginVertical: 10,
  },
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
export default App;
