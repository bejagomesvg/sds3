import { SalePage } from "types/sale"

type Props = {
  page: SalePage;
  onPageChange: Function;
}

const Pagination = ({ page, onPageChange }: Props) => {

  return (

    <ul className="pagination">
      <li className={`page-item ${page.first ? 'disabled' : ''}`}>
        <button className="page-link" onClick={() => onPageChange(page.number - 1)}>&larr;</button>
      </li>
      <li className="page-item disabled">
        <span className="page-link">{page.number + 1} to {page.totalPages}</span>
      </li>
      <li className={`page-item ${page.last ? 'disabled' : ''}`}>
        <button className="page-link" onClick={() => onPageChange(page.number + 1)}>&rarr;</button>
      </li>
    </ul>

  )

}

export default Pagination