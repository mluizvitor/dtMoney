import { useEffect } from "react";
import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    fetch("http://localhost:3000/api/transactions")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Rendimentos</td>
            <td className="deposit">R$ 1.000</td>
            <td>Saúde</td>
            <td>23/02/2022</td>
          </tr>
          <tr>
            <td>Operação da Lenna</td>
            <td className="withdraw">- R$ 500,00</td>
            <td>Saúde</td>
            <td>23/02/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
