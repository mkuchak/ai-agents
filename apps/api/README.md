# AI Agents API Documentation

A powerful AI agent orchestration system that intelligently routes user requests to specialized agents for optimal task completion. The system features real-time streaming responses, cost tracking, and automatic agent handoff capabilities.

## Table of Contents

- [Overview](#overview)
- [Quick Start](#quick-start)
- [Environment Setup](#environment-setup)
- [API Reference](#api-reference)
- [Agent System](#agent-system)
- [Usage Examples](#usage-examples)
- [Development](#development)
- [Cost Tracking](#cost-tracking)
- [Security](#security)
- [Troubleshooting](#troubleshooting)

## Overview

The AI Agents API provides an intelligent orchestration layer that automatically routes user requests to the most appropriate specialized agent:

- **Assistant Agent**: General-purpose assistant with weather capabilities
- **Calculator Agent**: Specialized mathematical computation engine
- **Orchestrator**: Smart routing system that determines which agent should handle each request

### Key Features

- 🤖 **Multi-Agent System**: Specialized agents for different task types
- 🔄 **Intelligent Routing**: Automatic agent selection based on request content
- 📡 **Real-time Streaming**: Live response streaming for better user experience
- 💰 **Cost Tracking**: Built-in usage and cost monitoring (USD → BRL conversion)
- 🔧 **Extensible**: Easy to add new agents and tools
- 🛡️ **Security**: Sandboxed tool execution with safety checks

## Quick Start

### Prerequisites

- Node.js 18+ with pnpm
- Google Gemini API key
- Environment variables configured

### Installation

```bash
# Clone the repository and navigate to the API
cd apps/api

# Install dependencies
pnpm install

# Set up environment variables (see Environment Setup)
cp .env.example .env

# Start the development server
pnpm dev
```

The API will be available at `http://localhost:3000`

## Environment Setup

Create a `.env` file in the `apps/api` directory with the following variables:

```env
# Required: Google Gemini API Configuration
GEMINI_API_KEY=your_gemini_api_key_here

# Optional: Server Configuration  
PORT=3000

# Optional: Testing Configuration
API_URL=http://localhost:3000
```

### Getting a Gemini API Key

1. Visit [Google AI Studio](https://aistudio.google.com/)
2. Sign in with your Google account
3. Click "Get API Key" and create a new project
4. Copy your API key to the `.env` file

## API Reference

### Base URL

```
http://localhost:3000
```

### Endpoints

#### POST /chat

Sends a message to the AI agent system and receives a streaming response.

**Request:**

```json
{
  "message": "Your question or request here"
}
```

**Response:**

- **Content-Type**: `text/plain; charset=utf-8`
- **Transfer-Encoding**: `chunked` (streaming)
- **Status**: `200 OK`

**Response Body**: Streaming text response from the appropriate AI agent.

**Example Request:**

```bash
curl -X POST http://localhost:3000/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "What is 15 * 23 + 100?"}'
```

**Example Response Stream:**

```text
I'll help you calculate 15 * 23 + 100.

Let me compute this step by step:

15 * 23 = 345
345 + 100 = 445

The answer is 445.
```

## Agent System

### Orchestrator Agent

The main coordination layer that:

- Analyzes incoming requests
- Determines the most appropriate agent
- Routes requests with automatic handoff
- Manages the conversation flow

**Routing Logic:**
- Keywords containing "weather" → Assistant Agent
- Keywords containing "calculator", math operations, numbers → Calculator Agent
- General questions → Assistant Agent (default)

### Assistant Agent

A general-purpose conversational AI agent with specialized tools.

**Capabilities:**
- General question answering
- Weather information retrieval
- Natural conversation
- Task assistance

**Available Tools:**
- `get_weather`: Retrieves weather information for specified locations

**Example Interactions:**
```
User: "What's the weather in Paris?"
Response: Weather information for Paris with current conditions
```

### Calculator Agent

A specialized mathematical computation engine with advanced calculation capabilities.

**Capabilities:**
- Basic arithmetic operations (`+`, `-`, `*`, `/`)
- Advanced mathematics (exponentiation `**`, square roots, trigonometry)
- JavaScript Math library functions
- Expression evaluation with parentheses
- Error handling and validation

**Available Tools:**
- `calculator`: Evaluates mathematical expressions using JavaScript syntax

**Supported Operations:**
```javascript
// Basic arithmetic
2 + 3 * 4        // 14
(10 + 5) / 3     // 5

// Advanced functions
Math.sqrt(16)    // 4
Math.pow(2, 8)   // 256
Math.sin(Math.PI / 2)  // 1
Math.cos(0)      // 1
```

**Security Features:**
- Input sanitization
- Dangerous pattern detection
- Result validation
- Error handling

## Usage Examples

### Mathematical Calculations

```bash
# Simple arithmetic
curl -X POST http://localhost:3000/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "What is 25 * 4?"}'

# Complex expressions
curl -X POST http://localhost:3000/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "Calculate Math.sqrt(144) + Math.pow(2, 3)"}'

# Word problems
curl -X POST http://localhost:3000/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "If I have 12 apples and give away 3, then buy 8 more, how many do I have?"}'
```

### Weather Information

```bash
# Current weather
curl -X POST http://localhost:3000/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "What is the weather in New York?"}'

# Weather with additional context
curl -X POST http://localhost:3000/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "I am planning a trip to London tomorrow. What is the weather like there?"}'
```

### General Questions

```bash
# General assistance
curl -X POST http://localhost:3000/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "Can you help me understand quantum computing?"}'

# Mixed requests
curl -X POST http://localhost:3000/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "What is the capital of France and what is 50 * 20?"}'
```

### JavaScript/Node.js Integration

```javascript
const axios = require('axios');

async function chatWithAPI(message) {
  try {
    const response = await axios.post('http://localhost:3000/chat', 
      { message }, 
      { responseType: 'stream' }
    );
    
    response.data.on('data', (chunk) => {
      process.stdout.write(chunk.toString());
    });
    
    response.data.on('end', () => {
      console.log('\n--- Response complete ---');
    });
    
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Usage examples
chatWithAPI("What is 2^10?");
chatWithAPI("What's the weather in Tokyo?");
```

### Python Integration

```python
import requests
import json

def chat_with_api(message):
    url = "http://localhost:3000/chat"
    data = {"message": message}
    
    response = requests.post(url, json=data, stream=True)
    
    for chunk in response.iter_content(chunk_size=1024, decode_unicode=True):
        if chunk:
            print(chunk, end='', flush=True)
    print("\n--- Response complete ---")

# Usage examples
chat_with_api("Calculate the area of a circle with radius 7")
chat_with_api("What's the weather forecast for tomorrow?")
```

## Development

### Available Scripts

```bash
# Development
pnpm dev          # Start development server with hot reload
pnpm build        # Build for production
pnpm start        # Start production server

# Quality Assurance
pnpm lint         # Run linting
pnpm check-types  # TypeScript type checking
pnpm test         # Run test suite
```

### Project Structure

```
apps/api/
├── src/
│   ├── index.ts              # Main server and API routes
│   ├── agents/               # AI agent implementations
│   │   ├── orchestrator-agent.ts    # Main orchestration logic
│   │   ├── assistant-agent.ts       # General assistant
│   │   └── calculator-agent.ts      # Math specialist
│   └── adapters/             # External service integrations
│       └── gemini-call-llm.ts       # Google Gemini integration
├── package.json              # Dependencies and scripts
└── tsconfig.json            # TypeScript configuration
```

### Adding New Agents

1. **Create the Agent File**:
```typescript
// src/agents/my-new-agent.ts
import { Agent } from "@repo/ai-agents";
import { z } from "zod";
import { geminiCallLlm } from "../adapters/gemini-call-llm";

export const myNewAgent = new Agent(
  "You are a specialized agent for [specific task]",
  geminiCallLlm
);

myNewAgent.registerTool({
  name: "my_tool",
  description: "Description of what this tool does",
  schema: z.object({
    input: z.string().describe("Input parameter description")
  }),
  execute: async (input) => {
    // Tool implementation
    return { result: "Tool output" };
  }
});
```

2. **Register with Orchestrator**:
```typescript
// src/agents/orchestrator-agent.ts
import { myNewAgent } from "./my-new-agent";

orchestratorAgent.registerAgent("my-new-agent", myNewAgent, ["keyword1", "keyword2"]);
```

### Adding New Tools

Tools can be added to existing agents:

```typescript
existingAgent.registerTool({
  name: "new_tool_name",
  description: "Clear description of tool functionality",
  schema: z.object({
    parameter1: z.string().describe("Parameter description"),
    parameter2: z.number().optional().describe("Optional parameter")
  }),
  execute: async (input) => {
    // Implement tool logic
    const result = await someAsyncOperation(input);
    return {
      success: true,
      data: result
    };
  }
});
```

## Cost Tracking

The API includes built-in cost tracking for LLM usage:

### Cost Calculation

- **Currency**: Costs are calculated in USD and converted to BRL (Brazilian Real)
- **Exchange Rate**: Fixed at 5.58 USD to BRL (configurable)
- **Granularity**: Per-request cost tracking with token-level precision

### Cost Components

- **Input Tokens**: Cost for processing user input
- **Output Tokens**: Cost for generating responses
- **Model**: Currently uses Gemini models with varying price points

### Monitoring Costs

Costs are logged to the console during development:

```
Total cost in BRL cents: 12.34
```

### Cost-Effective Usage

- **Model Selection**: The system automatically selects cost-effective models
- **Token Optimization**: Efficient prompt engineering reduces costs
- **Caching**: Response patterns are optimized to minimize redundant processing

## Security

### Calculator Agent Security

The calculator agent implements several security measures:

**Input Sanitization:**
- Blocks dangerous JavaScript patterns
- Prevents access to system functions
- Validates mathematical expressions only

**Blocked Patterns:**
```javascript
require()           // Module imports
import              // ES6 imports  
process.            // Node.js process access
global.             // Global object access
console.            // Console access
eval()              // Nested eval calls
Function()          // Function constructor
setTimeout/setInterval  // Timer functions
```

**Validation:**
- Results must be finite numbers
- Expression evaluation is contained
- Error handling prevents crashes

### API Security Considerations

**Production Recommendations:**
- Use environment variables for sensitive data
- Implement rate limiting for public endpoints
- Add authentication for production deployments
- Use HTTPS in production environments
- Consider implementing request validation middleware

**Development Security:**
- Gemini API keys should be kept secure
- Avoid committing `.env` files to version control
- Use different API keys for development and production

## Troubleshooting

### Common Issues

#### 1. API Key Errors

**Problem**: `GEMINI_API_KEY not found` or authentication errors

**Solution**:
```bash
# Check if .env file exists and contains the key
cat .env | grep GEMINI_API_KEY

# Verify API key format (should start with 'AI...')
echo $GEMINI_API_KEY
```

#### 2. Port Already in Use

**Problem**: `EADDRINUSE: address already in use :::3000`

**Solution**:
```bash
# Find and kill process using port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
PORT=3001 pnpm dev
```

#### 3. Streaming Response Issues

**Problem**: Responses not streaming properly

**Solution**:
- Ensure client supports chunked transfer encoding
- Check network/proxy settings that might buffer responses
- Verify Content-Type headers are properly set

#### 4. Calculator Security Errors

**Problem**: "Expression contains potentially unsafe operations"

**Solution**:
```javascript
// ❌ Unsafe expressions
"require('fs')"
"process.exit()"
"console.log('test')"

// ✅ Safe expressions  
"Math.sqrt(16) + 5"
"(10 + 20) * 3"
"Math.PI * 2"
```

#### 5. High API Costs

**Problem**: Unexpected high costs in BRL

**Solution**:
- Monitor token usage in console logs
- Use shorter, more direct prompts
- Check model selection in `gemini-call-llm.ts`
- Consider implementing request caching

### Debug Mode

Enable detailed logging by setting environment variables:

```bash
DEBUG=true pnpm dev
```

### Test Suite

Run the comprehensive test suite:

```bash
# Unit and integration tests
pnpm test

# E2E tests (requires running server)
pnpm dev &  # Start server in background
pnpm test   # Run tests
```

### Performance Monitoring

Monitor performance metrics:

```bash
# Memory usage
node --inspect src/index.ts

# Response times
curl -w "Time: %{time_total}s\n" -X POST http://localhost:3000/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "test"}'
```

---

## Support

For issues, feature requests, or contributions:

1. Check the troubleshooting section above
2. Review the test suite for usage examples
3. Examine the source code for implementation details
4. Consider the agent architecture when adding new functionality

The API is designed to be extensible and maintainable, with clear separation of concerns between agents, tools, and the orchestration layer.
