import styled from 'styled-components';
import { white } from '../../../style/colors';

export const ButtonComponent = styled.button`
  padding: 9px 24px;
  border-radius: 4px;
  color: ${white};
  font-weight: 500;
  cursor: pointer;
  :disabled {
    background-color: ${props => props.loading ? '#3B2737' : '#AAAAAA'};
    cursor: ${props => props.loading ? 'wait' : 'not-allowed'};
    :hover {
      background-color: #AAAAAA;
    }
  }
  ${(props) => {
    if (props.type === 'primary') {
      return `
        background-color: #3B2737;
        :hover {
          background-color: #96638C;
        }
        :active {
          background-color: #1F141D;
        }
      `;
    }
    if (props.type === 'secondary') {
      return `
        background-color: #4ACAC1;
        :hover {
          background-color: #71D5CE;
        }
        :active {
          background-color: #27867F;
        }
      `;
    }
    if (props.type === 'tertiary') {
      return `
        background-color: #DF4545;
        :hover {
          background-color: #EE9B9B;
        }
        :active {
          background-color: #981A1A;
        }
      `;
    }
  }}
  ${props => props.customStyle}
`;

export const Loading = styled.img`
  animation: rotate 2s linear infinite;

  @keyframes rotate {
    from {
      -ms-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -ms-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;