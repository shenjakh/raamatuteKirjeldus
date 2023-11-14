import React, { useState } from 'react';
import RaamatuList from './components/list';
import Kirjeldus from './components/kirjeldus';
import './index.css';

function App() {
  const [valitudRaamat, setValitudRaamat] = useState(null);

  const handleItemClick = (nimi) => {
    setValitudRaamat(nimi);
  };

  return (
    <div className="kast">
      <div className="raamatu-list">
        <RaamatuList valitudRaamat={valitudRaamat} handleItemClick={handleItemClick} />
      </div>
      <div className="kirjeldus">
        {valitudRaamat && <Kirjeldus valitudRaamat={valitudRaamat} />}
      </div>
    </div>
  );
}

export default App;