# Announcing AI SDK 6 Beta

> **⚠️ AI SDK 6 is in beta** — while it is more stable than the alpha release, the APIs may still change. Pin to specific versions to avoid breaking changes in future patch releases.

## Why AI SDK 6?

AI SDK 6 is a major version because it introduces the **v3 Language Model Specification**, which powers new capabilities such as agents and tool approval. Unlike AI SDK 5, this release is not expected to have major breaking changes for most users; the bump reflects improvements to the spec rather than a redesign of the SDK. Migrating from v5 to v6 should be straightforward with minimal code changes.

## Beta Version Guidance

The AI SDK 6 Beta is intended for:

- Trying out new features and providing feedback on the developer experience
- Experimenting with agents and tool‑approval workflows

Your feedback during this beta phase directly shapes the final stable release. Share your experiences through [GitHub issues](https://github.com/vercel/ai/issues/new/choose).

> **⚠️ APIs may still change during beta**. Pin to specific versions as breaking changes may occur in patch releases.

## Installation

```bash
npm install ai@beta @ai-sdk/openai@beta @ai-sdk/react@beta
```

> **⚠️ APIs may still change during beta**. Pin to specific versions to avoid breaking changes.

## What’s New in AI SDK 6?

AI SDK 6 introduces several features (with more to come soon!):

### Agent Abstraction
A unified interface for building agents with full control over execution flow, tool loops, and state management.

### Tool Execution Approval
Request user confirmation before executing tools, enabling native human‑in‑the‑loop patterns.

### Structured Output (Stable)
Generate structured data alongside tool calling with `generateText` and `streamText` – now stable and production‑ready.

### Reranking Support
Improve search relevance by reordering documents based on their relationship to a query using specialised reranking models.

### Image Editing Support
Native support for image editing (coming soon).

## Agent Abstraction

AI SDK 6 introduces a powerful new `Agent` interface that provides a standardized way to build agents.

### Default Implementation: `ToolLoopAgent`

The `ToolLoopAgent` class provides a default implementation out of the box:

```ts
import { openai } from '@ai-sdk/openai';
import { ToolLoopAgent } from 'ai';
import { weatherTool } from '@/tool/weather';

export const weatherAgent = new ToolLoopAgent({
  model: openai('gpt-4o'),
  instructions: 'You are a helpful weather assistant.',
  tools: {
    weather: weatherTool,
  },
});

// Use the agent
const result = await weatherAgent.generate({
  prompt: 'What is the weather in San Francisco?',
});
```

The agent automatically handles the tool execution loop:

1. Calls the LLM with your prompt  
2. Executes any requested tool calls  
3. Adds results back to the conversation  
4. Repeats until complete (default `stopWhen: stepCountIs(20)`)

### Configuring Call Options

Call options let you pass type‑safe runtime inputs to dynamically configure your agents. Use them to inject retrieved documents for RAG, select models based on request complexity, customise tool behaviour per request, or adjust any agent setting based on context.

Without call options you’d need to create multiple agents or handle configuration logic outside the agent. With call options, you define a schema once and modify agent behaviour at runtime:

```ts
// Example call options
const agent = new ToolLoopAgent({
  // …
  callOptions: {
    // Define dynamic inputs here
  },
});
```

*(Full example omitted due to brevity.)*