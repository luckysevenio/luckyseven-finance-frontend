import Character from '../utils/Character';
import { useSelector } from 'react-redux';
import { State } from '../../store';
import { useDispatch } from 'react-redux';
import { ActionTypes } from '../../store';

function Paginacion() {
  const dispatch = useDispatch();
  const handlePageNumber = (event) => {
    console.log(event.target.value);
    dispatch({
      type: ActionTypes.CHANGE_PAGE_NUMBER,
      payload: `${event.target.value}`,
    });
  };
  const race = useSelector((state: State) => state.raceFilter);
  const pageNumber = useSelector((state: State) => state.pageNumber);
  const Personaje = Character(`character?page=${pageNumber}&species=${race}`);
  const max = Personaje?.info.pages;
  const prev = (pageNumber==1)? 'disabled' : '';
  const next = (pageNumber==max)? 'disabled' : '';
  const second = (pageNumber==1 || pageNumber==2 || pageNumber==3||pageNumber==max || pageNumber==max-1)? 3 : pageNumber-1;
  const penultimate = (pageNumber==max || pageNumber==max-1 || pageNumber==1 ||pageNumber==2 ||pageNumber==3)? max-2 : Number(pageNumber)+1;
  const middle = (pageNumber==max || pageNumber==max-1 || pageNumber==1 ||pageNumber==2 ||pageNumber==3)? 4 : pageNumber;
  function active(pageA,pagecom){
    if(pageA==pagecom){
      return "active";
    }
    else{
      return null;
    }
  }
  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className={`page-item ${prev}`}>
            <button className="page-link" value={pageNumber-1} onClick={handlePageNumber}>
              Previous
            </button>
          </li>
          <li className={`page-item ${active(pageNumber,1)}`}>
            <button className="page-link" value={1} onClick={handlePageNumber}>
              1
            </button>
          </li>
          <li className={`page-item ${active(pageNumber,2)}`}>
            <button className="page-link" value={2} onClick={handlePageNumber}>
              2
            </button>
          </li>
          <li className={`page-item ${active(pageNumber,second)}`}>
            <button className="page-link" value={second} onClick={handlePageNumber}>
              {second}
            </button>
          </li>
          <li className={`page-item ${active(pageNumber,middle)}`}>
            <button className="page-link" value={middle} onClick={handlePageNumber}>
              {middle}
            </button>
          </li>
          <li className={`page-item ${active(pageNumber,penultimate)}`}>
            <button className="page-link" value={penultimate} onClick={handlePageNumber}>
              {penultimate}
            </button>
          </li>
          <li className={`page-item ${active(pageNumber,max-1)}`}>
            <button className="page-link" value={max-1} onClick={handlePageNumber}>
              {max-1}
            </button>
          </li>
          <li className={`page-item ${active(pageNumber,max)}`}>
            <button className="page-link" value={max} onClick={handlePageNumber}>
              {max}
            </button>
          </li>
          <li className={`page-item ${next}`}>
            <button className="page-link" value={Number(pageNumber)+1} onClick={handlePageNumber}>
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Paginacion;
