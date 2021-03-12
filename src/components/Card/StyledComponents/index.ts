import styled from 'styled-components';

export const CardContainer = styled.div`
  max-width: 300px;
  width: 100%;
  height: 100%;
  border: 1px solid #7777;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
`;

export const Image = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 150px;
`;

export const Info = styled.span`
  font-size: 15px;
  color: #777777;
  padding: 5px;
`;
