export const PATH_NAME = {
  MAIN: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  ALL_SERVICES: '/all-services',
  GET_PROFILE_PATH: (id: string) => `/profile/${id}`,
  GAMES_NEAR: '/games/near',
  GAMES_HOST: '/games/host',
  GAMES_PARTICIPATE: '/games/participate',
  GET_GAMES_PATH: (id: string) => `/games/${id}`,
  GET_GAMES_MANAGE_PATH: (id: string) => `/games/${id}/manage`,
  GET_GAMES_REVIEW_PATH: (id: string) => `/games/${id}/review`,
  CREWS_RECOMMEND: '/crews/recommend',
  CREWS_CHIEF: '/crews/chief',
  CREWS_PARTICIPATE: '/crews/participate',
  GET_CREWS_PATH: (id: string) => `/crews/${id}`,
  GET_CREWS_MANAGE_PATH: (id: string) => `/crews/${id}/manage`,
  CREATE: '/create',
  CREATE_GAME: '/create/game',
  CREATE_CREW: '/create/crew',
  MAP: '/map',
  MESSAGE: '/message',
} as const;
