'use client'; // Error boundaries must be Client Components

import Box from '@mui/material/Box';
import { IErrorPage } from '@types';

const ErrorPage: React.FC<IErrorPage> = async ({ reset }) => (
  <Box>
    <h2>Something went wrong!</h2>
    <button onClick={() => reset()}>Try again</button>
  </Box>
);

export default ErrorPage;
