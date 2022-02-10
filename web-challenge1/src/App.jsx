import { useState } from "react";

import Header from "./components/Header";
import { Inspiration } from "./components/Inspiration";

import "./styles/global.css";
import "./styles/App.css";

function App() {
  const [tarefa, setTarefa] = useState(""); // estado que armazena a tarefa que está sendo digitada pelo usuário
  const [listaDeTarefas, setListaDeTarefas] = useState([]); // estado que armazena todas as tarefas

  // Quando o usuário digitar alguma coisa no input, essa função vai ser chamada
  // O objetivo é pegar o texto que usuário digita, adicionando-o ao estado "tarefa"
  function tarefaDigitada(evento) {
    const texto = evento.target.value; // obtendo o texto que o usuário digita

    setTarefa(texto);
  }

  function adicionarNaListaDeTarefas(evento) {
    // Evita que a página recarregue (que é comportamento default da página)
    evento.preventDefault();

    // Se houver algum conteúdo (título) na tarefa
    if (tarefa && tarefa.length > 2) {
      // Atualiza a lista de tarefas, mantendo as tarefas já adicionadas e adicionando a tarefa digitada ao final
      setListaDeTarefas([
        ...listaDeTarefas,
        {
          titulo: tarefa,
          concluida: false,
        },
      ]);

      setTarefa("");
    }
  }

  function alterarStatusDaTarefa(idTarefa) {
    const novaListaDeTarefas = listaDeTarefas.map((tarefa, index) => {
      // Se o índice da tarefa marcada for igual ao id da tarefa que está sendo percorrida
      if (idTarefa === index) {
        return {
          titulo: tarefa.titulo,
          concluida: !tarefa.concluida, // Invertendo status da tarefa
        };
      }

      return tarefa;
    });

    // Atualizando lista de tarefas com a inversão do status da tarefa cujo id é idTarefa
    setListaDeTarefas(novaListaDeTarefas);
  }

  function removerTarefa(idTarefa) {
    // Filtrando pelas tarefas que não têm o id da tarefa que está sendo removida (idTarefa)
    const novaListaDeTarefas = listaDeTarefas.filter(
      (_, index) => index !== idTarefa
    );

    // Atualizando a lista de tarefas, mantendo apenas aquelas que foram filtradas, ou seja, excluindo a tarefa
    // cujo id é idTarefa
    setListaDeTarefas(novaListaDeTarefas);
  }

  return (
    <>
      <Header />

      <Inspiration />

      <section id="tarefas">
        <h2>Minhas Tarefas</h2>

        <form className="formulario">
          <input type="text" value={tarefa} onChange={tarefaDigitada} />

          <button onClick={adicionarNaListaDeTarefas}>Adicionar</button>
        </form>

        <ul className="lista-de-tarefas">
          {listaDeTarefas.map((tarefa, id) => (
            <li key={id}>
              <input
                type="checkbox"
                checked={tarefa.concluida}
                onClick={() => alterarStatusDaTarefa(id)}
              />
              <span className={tarefa.concluida ? "tarefa-concluida" : ""}>
                {tarefa.titulo}
              </span>
              <button onClick={() => removerTarefa(id)}>Remover</button>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default App;
