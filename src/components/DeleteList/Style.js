import styled from 'styled-components';

export const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  #Mainlist {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    padding: 5px;
    .currentList {
      display: flex;
      align-items: center;
      overflow-x: auto;
      background-color: #C0C0C0;
      width: 500px;
      height: 30px;
      padding: 5px;
    }
    .button {
      margin-left: 8px;
      width: 70px;
      height: 38px;
      font-size: 16px;
      color: #FFFFFF;
      background-color: #61688E;
    }
  }
`;
