// @flow
import { get } from 'lodash';

type Item = {
  description: String,
  title: String,
  secondarySreator: String,
  nasa_id: String,
  mediaType: String,
  dateCreated: String,
};

export type NasaItemType = {
  href: String,
  data: Array<Item>,
  isPersist: Boolean,
}
