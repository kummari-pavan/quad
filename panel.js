let darkMode = false
let apiResponses = []

function updateResponses() {
  const apiResponsesContainer = document.getElementById("apiResponses")
  const statusFilter = document.getElementById("statusFilter")
  const endpointFilter = document.getElementById("endpointFilter")

  apiResponsesContainer.innerHTML = ""
  apiResponses.forEach((response) => {
    if (
      (statusFilter.value === "all" || response.status.toString() === statusFilter.value) &&
      (endpointFilter.value === "" || response.url.includes(endpointFilter.value))
    ) {
      const responseElement = document.createElement("div")
      responseElement.className = "api-response"
      responseElement.innerHTML = `
        <h3>${response.url}</h3>
        <p>Status: ${response.status}</p>
        <p>Method: ${response.method}</p>
        <pre>${JSON.stringify(response.data, null, 2)}</pre>
        <button class="copy-json">Copy JSON</button>
      `
      apiResponsesContainer.appendChild(responseElement)

      responseElement.querySelector(".copy-json").addEventListener("click", () => {
        navigator.clipboard.writeText(JSON.stringify(response.data))
      })
    }
  })
}

function toggleDarkMode() {
  darkMode = !darkMode
  document.body.classList.toggle("dark-mode", darkMode)
}

document.getElementById("statusFilter").addEventListener("change", updateResponses)
document.getElementById("endpointFilter").addEventListener("input", updateResponses)
document.getElementById("toggleDarkMode").addEventListener("click", toggleDarkMode)
document.getElementById("clearResponses").addEventListener("click", () => {
  apiResponses = []
  updateResponses()
})

//The chrome variable is already declared implicitly through the use of chrome.runtime
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "newApiResponse") {
    apiResponses.unshift(message.data)
    updateResponses()
  }
})

// Request initial data from background script
chrome.runtime.sendMessage({ action: "getApiResponses" }, (response) => {
  if (response && response.apiResponses) {
    apiResponses = response.apiResponses
    updateResponses()
  }
})

