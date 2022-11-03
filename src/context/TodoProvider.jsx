import React, { useState, useMemo } from 'react';
import TodoContext from './TodoContext';

function ListProvider({ children }) {
  const [search, setSearch] = useState('');
  const [list, setList] = useState([]);
  const [log, setLog] = useState([]);

  const contextValue = useMemo(() => ({
    search,
    setSearch,
    list,
    setList,
    log,
    setLog,
  }), [search, list, log]);

  return (
    <TodoContext.Provider value={contextValue}>
      {children}
    </TodoContext.Provider>
  );
}

export default ListProvider;
