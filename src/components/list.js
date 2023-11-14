import React, { useState } from 'react';
import raamatud from "../andmed/andmed"
import '../stiilid/raamatuList.css'


function RaamatuList({ valitudRaamat, handleItemClick }) {
    return (
      <div id="list">
        <ul>
          {raamatud.map((raamat, index) => (
            <li
              key={index}
              onClick={() => handleItemClick(raamat.nimi)}
              className={valitudRaamat === raamat.nimi ? 'selected' : ''}
            >
              {raamat.nimi}
            </li>
          ))}
        </ul>
      </div>
    );
  }

export default RaamatuList;