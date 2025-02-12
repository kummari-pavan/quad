// Import the chrome namespace.  This is necessary because the code is running in a Chrome extension context.
import * as chrome from "chrome"

chrome.devtools.panels.create("QUAD", "icon16.png", "panel.html", (panel) => {
  console.log("QUAD panel created")
})

