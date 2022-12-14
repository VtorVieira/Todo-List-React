import styled from 'styled-components';

export const MainDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Helvetica;
  margin-top: 4em;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
  #search {
    width: 35%;
      @media (max-width: 768px) {
      width: 88%
    }
    .input {
      font-size: 16px;
      width: 97%;
      height: 20px;
      padding: 5px;
    }
  }
  #button {
    width: 10%;
    @media (max-width: 768px) {
      margin-top: 2px;
      width: 100%
    }
    .btn {
      width: 90%;
      font-size: 16px;
      height: 35px;
      color: #FFFFFF;
      background-color: #61688E;
    }
  }
`;
