export const env = {
  API: process.env.APP_API,
  ENV: process.env.ENV,
  IS_LOCAL: process.env.NEXT_PUBLIC_ENV === 'local',
  TEST: process.env.TEST,
};
