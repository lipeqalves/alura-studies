import { useState } from "react";
import { Cronometro } from "../components/cronometro";
import { Form } from "../components/formulario";
import { Lista } from "../components/lista";
import { ITarefas } from "../types/tarefas";
import style from "./app.module.scss";

export const App = () => {
  const [tarefas, setTarefas] = useState<ITarefas[]>([]);
  const [selecionado, setSelecionado] = useState<ITarefas>();

  const selecionaTarefa = (tarefaselecionada: ITarefas) => {
    setSelecionado(tarefaselecionada);
    setTarefas((tarefasAnteriores) =>
      tarefasAnteriores.map((tarefas) => ({
        ...tarefas,
        selecionado: tarefas.id === tarefaselecionada.id ? true : false,
      }))
    );
  };

  const finalizaTarefa = () => {
    if (selecionado) {
      setSelecionado(undefined);
      setTarefas((tarefasAnteriores) =>
        tarefasAnteriores.map((tarefas) => {
          if (tarefas.id === selecionado.id) {
            return {
              ...tarefas,
              selecionado: false,
              completado: true,
            };
          }
          return tarefas;
        })
      );
    }
  };
  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas} />
      <Lista tarefas={tarefas} selecionaTarefa={selecionaTarefa} />
      <Cronometro selecionado={selecionado} finalizaTarefa={finalizaTarefa} />
    </div>
  );
};
