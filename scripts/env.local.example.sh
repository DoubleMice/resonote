#!/usr/bin/env bash

# Copy this file to scripts/env.local.sh and fill in local-only values.
# Usage:
#   source scripts/env.local.sh
#   pnpm run plan:run -- --auto-transcribe --transcribe-limit=3 --limit=0 --dry-run
#   pnpm run e2e:transcription

export TRANSCRIPTION_PROVIDER="mimo"
export TRANSCRIPTION_API_KEY=""
export TRANSCRIPTION_BASE_URL="https://api.xiaomimimo.com/v1"
export TRANSCRIPTION_MODEL_NAME="mimo-v2.5"
export TRANSCRIPTION_MAX_COMPLETION_TOKENS="32768"
export TRANSCRIPT_PROVIDER="${TRANSCRIPTION_PROVIDER}"
export MIMO_API_KEY="${TRANSCRIPTION_API_KEY}"
export MIMO_BASE_URL="${TRANSCRIPTION_BASE_URL}"
export MIMO_MODEL="${TRANSCRIPTION_MODEL_NAME}"
export MIMO_MAX_COMPLETION_TOKENS="${TRANSCRIPTION_MAX_COMPLETION_TOKENS}"
export DASHSCOPE_API_KEY=""
export CONTENT_API_KEY=""
export CONTENT_PROVIDER="auto"
export ANTHROPIC_AUTH_TOKEN="${CONTENT_API_KEY}"
export CONTENT_EFFORT=""

# Optional overrides for local testing.
export CONTENT_BASE_URL="https://api.xiaomimimo.com/anthropic"
export CONTENT_MODEL_NAME="mimo-v2.5"
export ANTHROPIC_BASE_URL="${CONTENT_BASE_URL}"
export ANTHROPIC_DEFAULT_HAIKU_MODEL="${CONTENT_MODEL_NAME}"
export ANTHROPIC_DEFAULT_OPUS_MODEL="${CONTENT_MODEL_NAME}"
export ANTHROPIC_DEFAULT_SONNET_MODEL="${CONTENT_MODEL_NAME}"
export ANTHROPIC_MODEL="${CONTENT_MODEL_NAME}"
export ENABLE_TOOL_SEARCH="true"
