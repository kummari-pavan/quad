@@ -0,0 +1,82 @@
# Quick API Debugger (QUAD)

QUAD (Quick API Debugger) is a Chrome Extension that helps developers debug APIs quickly by displaying real-time API responses in a popup while browsing websites.

## Overview

Quick API Debugger is designed to streamline API debugging by providing real-time response monitoring without the need to open Chrome DevTools.

### Key Features

* Real-time API response monitoring through a convenient popup interface
* Automatic detection of API calls using both fetch and XMLHttpRequest
* Response filtering by HTTP status codes (200, 400, 500, etc.)
* One-click JSON response copying functionality
* Dark mode UI for enhanced visibility during extended debugging sessions

## Project Structure

```
quick-api-debugger/
│── manifest.json
│── popup.html
│── popup.js
│── background.js
│── content.js
│── styles.css
│── icon.png
```

## Use Cases

### Developer Benefits

* **Real-Time API Monitoring**
  * View all webpage API calls instantly without opening DevTools
  * Eliminate the need for manual Network tab inspection

* **Efficient Response Management**
  * Extract JSON responses directly from the extension interface
  * Streamline debugging and team communication processes

* **Advanced Filtering Capabilities**
  * Filter responses by status codes (200, 400, 500)
  * Target specific endpoints (e.g., /users API calls)

* **Comprehensive API Coverage**
  * Support for both modern fetch() and legacy XMLHttpRequest APIs
  * Automatic capture of API responses without code modification

## Target Users

* **Frontend Developers**: Debug API integrations with backend services
* **Backend Developers**: Monitor real-time API usage patterns
* **QA Testers**: Validate API responses without additional tooling
* **Tech Enthusiasts**: Learn API behavior across different websites

## Practical Example

Consider an e-commerce platform scenario where you need to monitor multiple API endpoints:

* Product details (`/api/products/123`)
* User authentication (`/api/auth/login`)
* Shopping cart operations (`/api/cart/add`)

Instead of navigating through Chrome DevTools' Network tab and JSON Preview, simply click the extension icon for immediate API response visibility.

## Roadmap

Future enhancements planned for the extension include:

* Advanced search and filtering capabilities for API calls
* JSON export functionality for API logs
* API request modification and resend features

## Usage Instructions

1. Install the extension from the Chrome Web Store
2. Navigate to your target website
3. Click the QUAD icon in your browser toolbar
4. View real-time API responses in the popup window
5. Use the built-in filters to focus on specific response types
6. Copy JSON responses as needed for debugging or documentation
