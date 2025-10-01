#!/bin/bash

# Securaa Documentation Server
# Simple script to launch the documentation locally

echo "🚀 Starting Securaa Documentation Server..."
echo "📖 Documentation will be available at: http://localhost:8080"
echo "🔧 Press Ctrl+C to stop the server"
echo ""

# Check if Python 3 is available
if command -v python3 &> /dev/null; then
    echo "✅ Using Python 3 HTTP server"
    cd docs
    python3 -m http.server 8080
elif command -v python &> /dev/null; then
    echo "✅ Using Python HTTP server"
    cd docs
    python -m http.server 8080
elif command -v node &> /dev/null && command -v npx &> /dev/null; then
    echo "✅ Using Node.js HTTP server"
    cd docs
    npx http-server -p 8080
else
    echo "❌ Error: No suitable HTTP server found."
    echo "Please install Python 3 or Node.js to run the documentation server."
    exit 1
fi