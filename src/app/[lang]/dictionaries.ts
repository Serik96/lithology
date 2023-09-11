import 'server-only';

const dictionaries = {
  en: () =>
    import('../../dictionaries/en/translation.json').then((module) => module.default),
  ru: () =>
    import('../../dictionaries/ru/translation.json').then((module) => module.default),
}

export const getDictionary = async (locale) => dictionaries[locale]()