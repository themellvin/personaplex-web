type ENV = {
  VITE_QUEUE_API_PATH: string;
  VITE_QUEUE_API_URL: string;
  VITE_ENV: 'development' | 'production';
};

const parseEnv = (): ENV => {
  const VITE_QUEUE_API_PATH = import.meta.env.VITE_QUEUE_API_PATH || '/api';
  const VITE_QUEUE_API_URL = import.meta.env.VITE_QUEUE_API_URL || 'https://moshi.chat';
  
  return {
    VITE_QUEUE_API_PATH,
    VITE_QUEUE_API_URL,
    VITE_ENV: import.meta.env.DEV ? 'development' : 'production',
  };
};

export const env = parseEnv();
