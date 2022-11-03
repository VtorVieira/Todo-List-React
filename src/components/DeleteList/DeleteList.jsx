import React, { useContext } from 'react';
import TodoContext from '../../context/TodoContext';
import { MainDiv } from './Style';

function DeleteList() {
  const { setLog, setList, list, log } = useContext(TodoContext);

  const removeList = (id, itemSelected) => {
    // identifica a posição do item dentro do array,
    // e retorna um novo array.
    const removeItem = list.filter((_, index) => index !== id);
    // add no log o item removido
    setLog([...log, `Deletado item ${itemSelected}`]);
    // recupera lista atual, e atualiza a list
    setList(removeItem);
  };

  return (
    <MainDiv>
      <ol>
        {list && list.map((itens, index) => (
          <div key={index} id='Mainlist'>
            <div id="currentList">
              <li className="list">{itens}</li>
            </div>
            <div id="buttonDelete">
              <button className="btn" type="button" onClick={() => removeList(index, itens)} >Deletar</button>
            </div>
          </div>
        ))}
      </ol>
    </MainDiv >
  );
}

export default DeleteList;
