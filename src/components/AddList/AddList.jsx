import React, { useContext } from 'react';
import TodoContext from '../../context/TodoContext';
import { MainDiv } from './Style';

function AddList() {
  const { setLog, setSearch, setList, search, list, log } = useContext(TodoContext);
  const current = new Date();

  const handleChange = ({ target }) => {
    // add conteudo digitado para o state de pesquisa
    setSearch(target.value);
  };

  const date = `
    ${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()} 
    Hora: ${current.getHours()}:${current.getMinutes()}
    `;

  const addList = () => {
    // só add na lista, caso o campo do input for maior que zero
    if (search) {
      // recupera lista atual, e add o novo item
      setList([...list, search]);
      // add no log o item adicionado
      setLog([...log, `Data: ${date} - Adicionado item ${search}`]);
    }
    // limpa o input
    setSearch("");
  };

  // id do ultimo item da lista
  // somar + 1, para criar um id do novo item
  // push, novo id e o nome do input

  return (
    <MainDiv>
      <div id="search">
        <input className="input" type="text" name="search" value={search} onChange={handleChange} />
      </div>
      <div id="button">
        <button className='btn' type="button" onClick={addList}>Adicionar</button>
      </div>
    </MainDiv >
  );
}

export default AddList;
