import styled from 'styled-components';

import { breakpoint } from '../../../styles/mixins';

const ListItem = styled.div`
  padding: 30px 8px;
  display: grid;
  grid-template-columns: auto auto auto;
  list-style-type: none;
  margin: 0 100px;
  ${breakpoint.xs`
    margin: 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  `}
`;

export default ListItem;
