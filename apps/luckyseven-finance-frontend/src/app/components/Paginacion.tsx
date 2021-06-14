import Character from '../utils/Character';
import { useSelector } from 'react-redux';
import { State } from '../../store';
import { useDispatch } from 'react-redux';
import { ActionTypes } from '../../store';
import { getCharacter } from '../utils/endpoints';


function Paginacion() {
  const dispatch = useDispatch();
  const race = useSelector((state: State) => state.raceFilter);
  const pageNumber = useSelector((state: State) => state.pageNumber);
  const characters = useSelector((state: State) => state.characters);
  const handlePageNumber = async (event) => {
    console.log(event.target.value);
    dispatch({
      type: ActionTypes.CHANGE_PAGE_NUMBER,
      payload: `${event.target.value}`,
    });
    const results = await getCharacter(`character?page=${pageNumber}&species=${race}`);
    dispatch({
      type: ActionTypes.STORE_CHARACTERS,
      payload: results,
    })
  };

  const max = characters?.info.pages;
  const prev = pageNumber === 1 ? 'disabled' : '';
  const next = pageNumber === max ? 'disabled' : '';


  return (
    <div className="pag">
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className={`page-item ${prev}`}>
            <button
              className="page-link"
              value={pageNumber - 1}
              onClick={handlePageNumber}
            >
              Previous
            </button>
          </li>
          <li className={`page-item ${pageNumber==1 ? 'active' : null }`}>
            <button className="page-link" value={1} onClick={handlePageNumber}>
              1
            </button>
          </li>
          <li className={`page-item ${pageNumber==2 ? 'active' : null }`}>
            <button className="page-link" value={2} onClick={handlePageNumber}>
              2
            </button>
          </li>
          <li className={`page-item $${pageNumber==3 ? 'active' : null }`}>
            <button className="page-link" value={3} onClick={handlePageNumber}>
              3
            </button>
          </li>
          <li className={`page-item ${next}`}>
            <button
              className="page-link"
              value={Number(pageNumber) + 1}
              onClick={handlePageNumber}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Paginacion;
