// @flow
import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import AccessTime from 'rmdi/lib/AccessTime';

import { type NasaItemType, canPreview } from '../../../models/NasaItem';
import { breakpoint } from '../../../styles/mixins';
import { convertTimeStampToDate } from '../../../utils/dateTimeUtils';
import ItemSettings from './ItemSettings';

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
  font-size: ${rem('30px')};
  word-wrap: break-word;
`;

const ItemsDescription = styled.li`
  font-family: 'HelveticaNeue-Medium';
  padding: 20px 20px 10px;
  overflow: hidden;
  position: relative;
  max-height: 5em;
  text-align: justify;
`;

const IcoAccessTime = styled(AccessTime)`
  width: 20px;
  height: 20px;
  margin-right: 6px;
`;

const ItemsTime = styled.li`
  padding: 10px 20px 16px;
  color: ${props => props.theme.color.grayIcon};
  font-size: ${rem('11px')};
  display: flex;
  align-items: center;
`;

type Props = {
  item: NasaItemType,
  children?: React.Node,
}

const Items = (props: Props) => {
  const { children, item = {} } = props;
  const {
    href,
    data: {
      title,
      secondarySreator,
      dateCreated,
    } = {},
  } = item;
  return (
    <Container>
      <ItemSettings background={canPreview(item) && href}>
        {children}
      </ItemSettings>
      <ItemsTitle>{title}</ItemsTitle>
      <ItemsDescription>
        {secondarySreator}
      </ItemsDescription>
      <ItemsTime>
        <IcoAccessTime />
        {' '}
        {convertTimeStampToDate(dateCreated)}
      </ItemsTime>
    </Container>
  );
};

export default Items;
