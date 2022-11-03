import React, { useState } from 'react';

function TodoList() {
  const [search, setSearch] = useState('');
  const [list, setList] = useState([]);
  const [log, setLog] = useState([]);

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
    <div>
      <h2>Todo-List</h2>
      <div>
        <input type="text" name="search" value={search} onChange={handleChange} />
      </div>
      <div>
        <button type="button" onClick={addList}>Add</button>
      </div>
      <ol>
        {list && list.map((itens, index) => (
          <div key={index}>
            <li>{itens}</li>
            <button type="button" onClick={() => removeList(index, itens)} >remove</button>
          </div>
        ))}
      </ol>
      <div>
        <select name="log" id="log">
          <option value="">Log das alterações</option>
          {log && log.map((logs, index) => (
            <option key={index} value="log">{logs}</option>
          ))}
        </select>
      </div>
    </div >
  );
}

export default TodoList;
