'use client'; // Error boundaries must be Client Components

import { IError } from './id';

const Error: React.FC<IError> = async ({ reset }) => {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
};

export default Error;
