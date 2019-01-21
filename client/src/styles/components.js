import styled from 'styled-components';

// **** ITEMS ****
export const ItemsBoxContainer = styled.div`
  margin: 0 auto;
  max-width: 800px;
  padding: 20px;
`;

export const ItemsBoxWrapper = styled.div`
  min-height: 150px;
  background-color: gray;
  overflow-x: auto;
  display: flex;
  align-items: center;
  border-radius: 10px;
  border: 3px solid black;
`;

export const ItemBox = styled.div`
  background: ${props => props.bgColor};
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
  background: gray;
  border-radius: 10px;
  border: 3px solid black;
`;

export const DetailBox = styled.div`
  background-color: #fff;
  min-height: 100px;
  margin: 30px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 2px solid black;
`;
