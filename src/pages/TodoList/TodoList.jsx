import React from 'react';
import AddList from '../../components/AddList/AddList';
import DeleteList from '../../components/DeleteList/DeleteList';
import LogList from '../../components/LogList/LogList';
import { Main, HeaderDiv } from './Style';

function TodoList() {
  return (
    <Main>
      <HeaderDiv>
        <h1 id="title">Todo-List</h1>
        <LogList />
      </HeaderDiv>
      <AddList />
      <DeleteList />
    </Main >
  );
}

export default TodoList;
