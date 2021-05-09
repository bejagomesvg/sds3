import axios from "axios";
import { useEffect, useState } from "react";
import { SalePage } from "types/sale";
import { formatLocalDate } from "utils/format";
import { BASE_URL } from "utils/requests";

const DataTable = () => {

  const [page, setPage] = useState<SalePage>({
    first: true,
    last: true,
    number: 0,
    totalElements: 0,
    totalPages: 0
  });

  useEffect( () => {

    axios.get(`${BASE_URL}/sales?page=0&size=20&sort=date,desc`)
      .then(response => {
        setPage(response.data);
    });

  }, []);

  return (
    <div className="table-responsive">
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th>Date</th>
            <th>Seller</th>
            <th>Clients visited</th>
            <th>Close deals</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {page.content?.map(x => (
            <tr key={x.id}>
              <td>{formatLocalDate(x.date, "dd/MM/yyyy")}</td>
              <td>{x.seller.name}</td>
              <td>{x.visited}</td>
              <td>{x.deals}</td>
              <td style={{ textAlign: "right"}}>{x.amount.toFixed(2)}</td>
            </tr> 
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
