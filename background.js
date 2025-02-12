// Import the chrome namespace.  This is typically handled automatically by the browser environment, but explicitly including it here addresses the undeclared variable error.
const chrome = chrome || {} //This line adds a check to see if chrome is already defined. If it is, it does nothing. If not, it assigns an empty object to chrome. This prevents errors in environments where chrome is not defined.

const apiResponses = []

chrome.webRequest.onCompleted.addListener(
  (details) => {
    if (details.type === "xmlhttprequest") {
      chrome.tabs.sendMessage(details.tabId, {
        action: "getResponseData",
        requestId: details.requestId,
        url: details.url,
        method: details.method,
        status: details.statusCode,
      })
    }
  },
  { urls: ["<all_urls>"] },
  ["responseHeaders"],
)

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "newApiResponse") {
    apiResponses.unshift(message.data)
    chrome.runtime.sendMessage({ action: "newApiResponse", data: message.data })
  } else if (message.action === "getApiResponses") {
    sendResponse({ apiResponses: apiResponses })
  }
})

