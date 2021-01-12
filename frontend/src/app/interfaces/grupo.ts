import { Permissao } from "./permissao";

export class Grupo {
    id?
    descricao: string;
    permissao_grupo: Permissao[];
}