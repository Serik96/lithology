import en from './en.json';
import ru from './ru.json';

/**
 * @link https://next-intl-docs.vercel.app/docs/usage/messages
 */

export const dictionaries = { en, ru };

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const getDictionary = async (locale: string) => dictionaries[locale];
