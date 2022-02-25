import { useEffect } from "react";
import { Container } from "./styles";

export function TransactionsTable() {
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);

  useEffect(() => {
    api.get("transactions").then((response) => setTransactions(response.data));
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
