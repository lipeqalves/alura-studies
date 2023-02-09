import { Botao } from "../botao";
import { Relogio } from "./relogio";
import style from "./cronometro.module.scss";
import { tempoParaSegundo } from "../../common/utils/time";

import { ITarefas } from "../../types/tarefas";
import { useEffect, useState } from "react";

interface Props {
  selecionado: ITarefas | undefined;
  finalizaTarefa: () => void;
}
export const Cronometro = ({ selecionado, finalizaTarefa }: Props) => {
  const [tempo, setTempo] = useState<number>();

  useEffect(() => {
    if (selecionado?.tempo) {
      setTempo(tempoParaSegundo(selecionado.tempo));
    }
  }, [selecionado]);
  const regressiva = (contador: number = 0) => {
    setTimeout(() => {
      if (contador > 0) {
        setTempo(contador - 1);
        return regressiva(contador - 1);
      }
      finalizaTarefa();
    }, 1000);
  };
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicio o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Relogio tempo={tempo} />
      </div>
      <Botao
        name={"Começar"}
        onClick={() => {
          regressiva(tempo);
        }}
      />
    </div>
  );
};
