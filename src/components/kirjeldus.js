import raamatud from "../andmed/andmed";
import '../index.css';
import '../stiilid/kirjeldus.css'

function Kirjeldus({ valitudRaamat }) {
    const selectedRaamat = raamatud.find(raamat => raamat.nimi === valitudRaamat);
  
    if (!selectedRaamat) {
      return null;
    }
  
    return (
        <div className="kirjeldus-container">
          <div className="kirjeldus-content">
            <h2>{selectedRaamat.nimi}</h2>
            <p>Autor: {selectedRaamat.autor}</p>
            <p>{selectedRaamat.tekst}</p>
          </div>
          <div className="raamatupilt">
            <img src={selectedRaamat.pilt} height={'600em'} width={'400em'} />
          </div>
        </div>
      );
    }

export default Kirjeldus