import React, { useContext } from 'react';
import TodoContext from '../../context/TodoContext';
import { MainDiv } from './Style';

function LogList() {
  const { log } = useContext(TodoContext);

  return (
    <MainDiv>
      <select name="log" id="log">
        <option value="">Log das alterações</option>
        {log && log.map((logs, index) => (
          <option key={index} value="log">{logs}</option>
        ))}
      </select>
    </MainDiv >
  );
}

export default LogList;
