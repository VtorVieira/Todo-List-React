import styled from 'styled-components';

export const Main = styled.main`
  border: 5px solid black;
  width: 60%;
  height: 50%;
  text-align: center;
  margin: auto;
  margin-top: 5%;
  border-radius: 6px;
  border-style: double;
  border-color: #004289;
  @media (max-width: 768px) {
    width: 93%
  }
`;


export const HeaderDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  #title {
    display: flex;
    justify-content: center;
    font-family: Arial, Helvetica, sans-serif;
    color: #E95119
  }
`;

