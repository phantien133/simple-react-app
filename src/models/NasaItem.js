// @flow
import { get } from 'lodash';

export type NasaItemType = {
  href: String,
  data: {
    description: String,
    title: String,
    secondarySreator: String,
    nasa_id: String,
    mediaType: String,
    dateCreated: String,
  }
}

export const canPreview = item => get('data.mediaType') === 'image';
