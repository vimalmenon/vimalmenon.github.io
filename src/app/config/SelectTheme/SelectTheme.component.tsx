'use client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { colors, shades } from '@data';
import { ColorItem } from './ColorItem';
import { AnyType } from '@types';
import { useState } from 'react';

export const SelectTheme: React.FC = () => {
  const [color, setColor] = useState<AnyType>(null);
  return (
    <Box sx={{ display: 'flex', gap: 1, flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', gap: 1 }}>
        <Box
          sx={{
            display: 'flex',
            height: '50px',
            width: '50px',
            border: '1px solid red',
            background: color[500],
          }}
        >
          main
        </Box>
        <Box sx={{ display: 'flex', height: '50px', width: '50px', border: '1px solid red' }}>
          dark
        </Box>
        <Box sx={{ display: 'flex', height: '50px', width: '50px', border: '1px solid red' }}>
          light
        </Box>
      </Box>
      <Box sx={{ display: 'flex', gap: 1, flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {Object.keys(colors).map((color) => {
            return (
              <Box key={color}>
                <ColorItem
                  color={(colors as AnyType)[color][500]}
                  name={color}
                  onClick={() => setColor((colors as AnyType)[color])}
                />
              </Box>
            );
          })}
        </Box>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {shades.map((shade) => {
            // return (
            //   <Box key={color[50]}>
            //     {shades.map((shade: string | number, index) => {
            //       return <ColorItem color={color[shade]} key={`${color[shade]}-${index}`} />;
            //     })}
            //   </Box>
            // );
            return <div key={shade}>{shade}</div>;
          })}
        </Box>
      </Box>
      <Button variant="contained">Save</Button>
      <Button variant="contained">Cancel</Button>
    </Box>
  );
};
