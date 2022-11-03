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
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 5em;
    }
    #currentList {
      display: flex;
      align-items: center;
      overflow-x: auto;
      background-color: #C0C0C0;
      width: 500px;
      height: 30px;
      padding: 5px;
      @media (max-width: 768px) {
        border: 1px solid black;
        margin-right: 50px;
        width: 100%;
      }
      .list {
        font-size: 16px;
      }
    }
    #buttonDelete {
      @media (max-width: 768px) {
        margin-right: 200px;
        margin-top: 2px;
        width: 40%;
      }
      .btn {
        margin-left: 8px;
        width: 70px;
        height: 38px;
        font-size: 16px;
        color: #FFFFFF;
        background-color: #61688E;
        @media (max-width: 768px) {
          border: 1px solid black;
          width: 200%;
        }
      }
    }
  }
`;
