// @flow
import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import AccessTime from 'rmdi/lib/AccessTime';
import { truncate } from 'lodash';

import { type NasaItemType } from '../../../../models/NasaItem';
import { breakpoint } from '../../../../styles/mixins';
import { convertTimeStampToDate } from '../../../../utils/dateTimeUtils';
import ItemSettings from '../ItemSettings';

const Container = styled.ul`
  margin: 8px;
  background: ${props => props.theme.color.white};
  box-shadow: 0 1px 2px 0 rgba(40, 60, 80, 0.24), 0 -1px 2px 0 rgba(40, 60, 80, 0.12);
  min-width: 250px;
  ${breakpoint.xs`
    flex: 1;
    width: 30%;
  `}
`;

const ItemsTitle = styled.li`
  font-family: 'HelveticaNeue-UltraLight';
  padding: 20px 20px 10px;
  color: ${props => props.theme.color.darkGreyBlue};
  font-size: ${rem('20px')};
  word-wrap: break-word;
`;

const ItemsDescription = styled.li`
  font-family: 'HelveticaNeue-Medium';
  padding: 20px 20px 10px;
  text-overflow: ellipsis;
  position: relative;
  max-height: 5em;
  text-align: justify;
  margin-bottom: 10px;
`;

const IcoAccessTime = styled(AccessTime)`
  width: 20px;
  height: 20px;
  margin-right: 6px;
  float: right;
`;

const ItemsTime = styled.li`
  padding: 10px 20px 16px;
  color: ${props => props.theme.color.grayIcon};
  font-size: ${rem('11px')};
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

type Props = {
  item: NasaItemType,
  addItem: Function,
}

const Items = (props: Props) => {
  const { item = {}, addItem } = props;
  const {
    data: {
      title,
      description,
      secondarySreator,
      dateCreated,
    },
  } = item;
  return (
    <Container>
      <ItemSettings item={item} addItem={addItem} />
      <ItemsTitle>{title}</ItemsTitle>
      <ItemsTime>
        <IcoAccessTime />
        {' '}
        {convertTimeStampToDate(dateCreated)}
      </ItemsTime>
      <ItemsDescription>
        {truncate(description || secondarySreator, { length: 170 })}
      </ItemsDescription>
    </Container>
  );
};

export default Items;
