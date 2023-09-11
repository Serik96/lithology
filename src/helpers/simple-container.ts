import { findKey } from '@/helpers/object-helper';
import { TStringObject } from '@/types';

type TId = Record<string, number>;

export type TSimpleContainerRecord = {
  id: number;
  name: string;
  title: string;
  description: string;
};

export class SimpleContainer {
  static ids: TId = {};
  static titles: TStringObject = {};
  static descriptions: TStringObject = {};

  static nameExists(name: string) {
    return !!this.getIdByName(name);
  }

  static idExists(id: number) {
    return !!this.getName(id);
  }

  static getName(id: number) {
    return findKey(this.ids, i => i === id);
  }

  static getTitle(id: number) {
    return this.titles[id];
  }

  static getDescription(id: number) {
    return this.descriptions[id];
  }

  static getIdByName(name: string) {
    return this.ids[name];
  }

  static getIdByTitle(title: string) {
    if (typeof this.titles[title] !== 'undefined') {
      return title;
    }

    return findKey(this.titles, t => t === title);
  }

  static getRecord(id: number, name: string): TSimpleContainerRecord {
    return {
      id,
      name,
      title: this.titles[id],
      description: this.descriptions[id],
    };
  }

  static asCollection(): ReturnType<(typeof this)['getRecord']>[] {
    const col = [];

    for (const [name, id] of Object.entries(this.ids)) {
      col.push(this.getRecord(id, name));
    }

    return col;
  }
}
