import React from 'react';

export interface IIcon {
  onClick?: () => void;
  toolTip: string;
  icon: React.ReactNode;
}
