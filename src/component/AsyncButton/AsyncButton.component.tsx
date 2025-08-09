'use client';

import { useState } from 'react';

import { ButtonProps } from '@mui/material';
import Button from '@mui/material/Button';

export const AsyncButton: React.FC<ButtonProps> = ({ onClick, ...rest }) => {
  const [loading, setLoading] = useState(false);
  const onButtonClick = async (event: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
    if (onClick) {
      setLoading(true);
      await onClick(event);
      setLoading(false);
    }
  };
  return <Button {...rest} onClick={onButtonClick} loading={loading} />;
};
