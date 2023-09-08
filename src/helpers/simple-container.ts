import { findKey } from '@/helpers/object-helper';

export type TSimpleContainerRecord = {
  id: number;
  name: string;
  title: string;
  description: string;
};

export class SimpleContainer {
  static ids = {};
  static titles = {};
  static descriptions = {};

  static nameExists(name) {
    return !!this.getIdByName(name);
  }

  static idExists(id) {
    return !!this.getName(id);
  }

  static getName(id) {
    return findKey(this.ids, i => i === id);
  }

  static getTitle(id) {
    return this.titles[id];
  }

  static getDescription(id) {
    return this.descriptions[id];
  }

  static getIdByName(name) {
    return this.ids[name];
  }

  static getIdByTitle(title) {
    if (typeof this.titles[title] !== 'undefined') {
      return title;
    }

    return findKey(this.titles, t => t === title);
  }

  static getRecord(id, name): TSimpleContainerRecord {
    return {
      id,
      name,
      title: this.titles[id],
      description: this.descriptions[id],
    };
  }

  static asCollection(): ReturnType<typeof this['getRecord']>[] {
    const col = [];

    for (const [name, id] of Object.entries(this.ids)) {
      col.push(this.getRecord(id, name));
    }

    return col;
  }
}
