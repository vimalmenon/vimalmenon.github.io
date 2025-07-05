'use client';
import '@xyflow/react/dist/style.css';
import { Background, Controls, Node, ReactFlow as ReactFlowComponent } from '@xyflow/react';
import { CompletedNode, ExecuteNode, HumanInputNode, LlmNode, ToolNode } from './NodeType';
import { IReactFlow } from './ReactFlow';

const nodeTypes = {
  Completed: CompletedNode,
  Execute: ExecuteNode,
  HumanInput: HumanInputNode,
  LLM: LlmNode,
  Tool: ToolNode,
};

export const ReactFlow: React.FC<IReactFlow> = ({ edges, nodes }) => (
  <ReactFlowComponent
    nodes={nodes as unknown as Node[]}
    edges={edges}
    nodeTypes={nodeTypes}
    fitView
    nodesConnectable={false}
    nodesDraggable={false}
    colorMode="light"
  >
    <Background />
    <Controls />
  </ReactFlowComponent>
);
