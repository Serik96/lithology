import 'dotenv/config';

export const config = {
  api: {
    server: process.env.NEXT_PUBLIC_API_SERVER,
  },
  footer: {
    email: 'example@gmail.com',
    phone: '+7 (321) 542-12-52',
  },
};
