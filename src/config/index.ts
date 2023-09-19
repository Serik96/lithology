export * from './config';

export const env = process.env.TARGET_ENV || process.env.NODE_ENV || 'development';
