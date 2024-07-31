#!/bin/bash

echo "VERCEL_GIT_COMMIT_REF: $VERCEL_GIT_COMMIT_REF"
echo "VERCEL_GIT_COMMIT_REF: $VERCEL_GIT_COMMIT_SHA"

if [[ "$VERCEL_GIT_COMMIT_REF" == "release" || "$VERCEL_GIT_COMMIT_REF" == "master" || "$VERCEL_GIT_COMMIT_REF" == "develop"||"$VERCEL_GIT_COMMIT_REF" == "main" ]]; then
  # Proceed with the build
  echo "✅ - Build can proceed"
  exit 1

else
  # Don't build
  echo "🛑 - Build cancelled"
  exit 0
fi
