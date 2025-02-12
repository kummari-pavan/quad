// Import the chrome namespace.  This is usually implicitly available in a Chrome extension's popup.js, but making it explicit avoids potential issues.
const chrome = chrome || {} //This line adds a check to see if chrome is already defined. If it is, it does nothing. If not, it assigns an empty object to chrome.

document.addEventListener("DOMContentLoaded", () => {
  const apiResponsesContainer = document.getElementById("apiResponses")
  const statusFilter = document.getElementById("statusFilter")
  const endpointFilter = document.getElementById("endpointFilter")
  const toggleDarkModeButton = document.getElementById("toggleDarkMode")

  let darkMode = false

  function updateResponses(responses) {
    apiResponsesContainer.innerHTML = ""
    responses.forEach((response) => {
      if (
        (statusFilter.value === "all" || response.status.toString() === statusFilter.value) &&
        (endpointFilter.value === "" || response.url.includes(endpointFilter.value))
      ) {
        const responseElement = document.createElement("div")
        responseElement.className = "api-response"
        responseElement.innerHTML = `
          <h3>${response.url}</h3>
          <p>Status: ${response.status}</p>
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

  chrome.storage.local.get(["apiResponses"], (result) => {
    if (result.apiResponses) {
      updateResponses(result.apiResponses)
    }
  })

  chrome.storage.onChanged.addListener((changes, namespace) => {
    if (namespace === "local" && changes.apiResponses) {
      updateResponses(changes.apiResponses.newValue)
    }
  })

  statusFilter.addEventListener("change", () => {
    chrome.storage.local.get(["apiResponses"], (result) => {
      if (result.apiResponses) {
        updateResponses(result.apiResponses)
      }
    })
  })

  endpointFilter.addEventListener("input", () => {
    chrome.storage.local.get(["apiResponses"], (result) => {
      if (result.apiResponses) {
        updateResponses(result.apiResponses)
      }
    })
  })

  toggleDarkModeButton.addEventListener("click", toggleDarkMode)
})

