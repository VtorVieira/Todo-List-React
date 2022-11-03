import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TodoList from './pages/TodoList/TodoList';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<TodoList />} />
    </Routes>
  );
}

export default App;
