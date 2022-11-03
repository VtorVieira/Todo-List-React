import React, { useContext } from 'react';
import TodoContext from '../../context/TodoContext';
import { MainDiv } from './Style';

function AddList() {
  const { setLog, setList, setSearch, list, search, log } = useContext(TodoContext);

  const handleChange = ({ target }) => {
    // add conteudo digitado para o state de pesquisa
    setSearch(target.value);
  };

  const addList = () => {
    // só add na lista, caso o campo do input for maior que zero
    if (search) {
      // recupera lista atual, e add o novo item
      setList([...list, search]);
      // add no log o item adicionado
      setLog([...log, `Adicionado item ${search}`]);
    }
    // limpa o input
    setSearch("");
  };

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
