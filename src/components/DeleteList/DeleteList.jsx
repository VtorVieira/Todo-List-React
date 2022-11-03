import React, { useContext, useState } from 'react';
import TodoContext from '../../context/TodoContext';
import { MainDiv } from './Style';

function DeleteList() {
  const { setLog, setList, list, log } = useContext(TodoContext);
  const [checked, setChecked] = useState([]);
  // console.log('checked', checked);
  const current = new Date();

  const date = `
    ${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()} 
    Hora: ${current.getHours()}:${current.getMinutes()}
  `;

  const removeList = (id, itemSelected) => {
    if (checked.includes(id)) {
      return setChecked(checked.filter((i) => i !== id));
    }

    // identifica a posição do item dentro do array,
    // e retorna um novo array.
    const removeItem = list.filter((_, index) => index !== id);
    // add no log o item removido
    setLog([...log, `Data: ${date} - Deletado item ${itemSelected}`]);
    // recupera lista atual, e atualiza a list
    setList(removeItem);
  };

  const handleChange = (index) => {
    if (checked.includes(index)) {
      return setChecked(checked.filter((i) => i !== index));
    } setChecked([...checked, index]);
  };

  return (
    <MainDiv>
      <ol>
        {list && list.map((itens, index) => (
          <div key={index} id='Mainlist'>
            <div
              id="currentList"
              style={{
                textDecoration: checked.includes(index) ? 'line-through' : 'none'
              }}
            >
              <input
                type="checkbox"
                name={`checkbox${index}`}
                value={`checkbox${index}`}
                onChange={() => handleChange(index)}
              />
              {itens}
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
