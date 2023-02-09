import { ITarefas } from "../../types/tarefas";
import { ListaItem } from "./lista-item/lista-item";
import style from "./lista.module.scss";

interface Props {
  tarefas: ITarefas[];
  selecionaTarefa: (tarefaSelecionada: ITarefas) => void;
}

export const Lista = ({ tarefas, selecionaTarefa }: Props) => {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do Dia</h2>
      <ul>
        {tarefas.map((item) => (
          <ListaItem
            selecionaTarefa={selecionaTarefa}
            key={item.id}
            tarefa={item.tarefa}
            tempo={item.tempo}
            selecionado={item.selecionado}
            completado={item.completado}
            id={item.id}
          />
        ))}
      </ul>
    </aside>
  );
};
