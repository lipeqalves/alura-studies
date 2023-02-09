import { useState } from "react";
import { ITarefas } from "../../types/tarefas";
import { Botao } from "../botao";
import { v4 as uuidv4 } from "uuid";
import style from "./forn.module.scss";

export const Form = ({
  setTarefas,
}: {
  setTarefas: React.Dispatch<React.SetStateAction<ITarefas[]>>;
}) => {
  const [novaTarefa, setNovaTarefa] = useState({
    tarefa: "",
    tempo: "00:00",
    selecionado: false,
    completado: false,
    id: uuidv4(),
  });

  const adicionarTarefa = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTarefas((tarefasAntigas) => [
      ...tarefasAntigas,
      { ...novaTarefa, selecionado: false, completado: false, id: uuidv4() },
    ]);
    setNovaTarefa({
      tarefa: "",
      tempo: "00:00",
      selecionado: false,
      completado: false,
      id: uuidv4(),
    });
  };

  return (
    <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa"> Adicione um novo estudo </label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
          value={novaTarefa.tarefa}
          onChange={(e) => {
            setNovaTarefa({ ...novaTarefa, tarefa: e.target.value });
          }}
          placeholder="O que você quer estudar?"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="tempo" />
        <input
          type="time"
          step="1"
          name="tempo"
          value={novaTarefa.tempo}
          onChange={(e) => {
            setNovaTarefa({ ...novaTarefa, tempo: e.target.value });
          }}
          id="tempo"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Botao name="Adicionar" onClick={() => {}} />
    </form>
  );
};
