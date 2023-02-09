import style from "./botao.module.scss";
import { IBotao } from "../../types/botao";

export const Botao = ({ name, onClick }: IBotao) => {
  return (
    <button className={style.botao} onClick={onClick}>
      {" "}
      {name}{" "}
    </button>
  );
};
