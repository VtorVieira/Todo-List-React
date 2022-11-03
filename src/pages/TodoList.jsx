import React, { useState } from 'react';

function TodoList() {
  const [search, setSearch] = useState('');
  const [list, setList] = useState([]);
  const [log, setLog] = useState([]);

  const handleChange = ({ target }) => {
    console.log(target.value);
    setSearch([target.value]);
  };

  const addList = () => {
    if (search) {
      setList([...list, search]);
      setLog([...log, `Add ${search}`]);
    }
    setSearch("");
  };

  const removeList = (remove) => {
    const removeItem = list.filter((currentList, index) => currentList !== remove);
    setLog([...log, `Remove ${remove}`]);
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
            <button type="button" onClick={() => removeList(itens)} >remove</button>
          </div>
        ))}
      </ol>
      <div>
        <select name="log" id="log">
          <option value="">Log de alterações</option>
          {log && log.map((logs, index) => (
            <option key={index} value="log">{logs}</option>
          ))}
        </select>
      </div>
    </div >
  );
}

export default TodoList;
