import styled from 'styled-components';

// **** ITEMS ****
export const ItemsBoxContainer = styled.div`
  margin: 0 auto;
  max-width: 800px;
  padding: 50px 20px 20px 20px;
`;

export const ItemsBoxWrapper = styled.div`
  min-height: 150px;
  background-color: #33547b;
  overflow-x: auto;
  display: flex;
  align-items: center;
  border-radius: 10px;
  border: 3px solid black;
`;

export const ItemBox = styled.div`
  background: ${props => props.defaultBgColor};
  min-width: 75px;
  margin: 5px;
  height: 75px;
  margin: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 10px;
  border: 2px solid black;
`;

// **** DETAILS ****
export const DetailsBoxContainer = styled.div`
  margin: 0 auto;
  max-width: 800px;
  padding: 20px;
`;

export const DetailsBoxWrapper = styled.div`
  height: 500px;
  overflow-y: auto;
  background: #33547b;
  border-radius: 10px;
  border: 3px solid black;
  scroll-behavior: smooth;
`;

export const DetailBox = styled.div`
  background-color: #e2efff;
  min-height: 100px;
  margin: 30px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 10px;
  border: 2px solid black;
  cursor: pointer;
`;
