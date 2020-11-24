export const API_BASE_URL =
  'https://jsonplaceholder.typicode.com';

export const API_ENDPOINTS = {
  albums: {
    index: '/albums',
    id: (id: number) => `/photos?albumId=${id}`,
  },
  photos: {
    index: '/photos',
    id: (id: number) => `/photos?id=${id}`,
  },
};

// For using with min-width media query
export const BREAKPOINTS = {
  mobile: '320px',
  tablet: '768px',
  laptop: '1366px',
  desktop: '1680px',
};
