'use client';
import '@xyflow/react/dist/style.css';
import { Background, Controls, ReactFlow as ReactFlowComponent } from '@xyflow/react';

export const ReactFlow: React.FC = () => (
  <ReactFlowComponent>
    <Background />
    <Controls />
  </ReactFlowComponent>
);
