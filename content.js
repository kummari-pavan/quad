// Import the chrome runtime API


chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "getResponseData") {
    fetch(message.url)
      .then((response) => response.json())
      .then((data) => {
        chrome.runtime.sendMessage({
          action: "newApiResponse",
          data: {
            url: message.url,
            method: message.method,
            status: message.status,
            data: data,
          },
        })
      })
      .catch((error) => console.error("Error fetching response data:", error))
  }
})

