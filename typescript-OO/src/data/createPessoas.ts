import { Pessoa } from "../presentation/Pessoa";
import { CreatePessoa } from "../protocols";

export default function createMultiplesPessoas(
  pessoas: CreatePessoa[]
): Pessoa[] {
  const ps: Pessoa[] = [];
  pessoas.forEach((p) => {
    ps.push(new Pessoa(p));
  });
  return ps;
}
