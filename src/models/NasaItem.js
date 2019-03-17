// @flow
type Item = {
  title: String,
  description: String,
  dateCreated: String,
  nasaId: String,
  mediaType: String,
  dateCreated: String,
};

export type NasaItemType = {
  href: String,
  data: Item,
  isPersist: boolean,
  favorite: boolean,
}
