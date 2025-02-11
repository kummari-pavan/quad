# quad
quad stands for quick-api-debugger .Chrome Extension that helps developers debug APIs quickly by displaying real-time API responses in a popup while browsing websites.

🔥 Extension Name: "Quick API Debugger"
💡 Key Features:
✅ Auto-detect API calls from websites using fetch and XMLHttpRequest
✅ Show real-time responses in a popup
✅ Filter by status codes (200, 400, 500, etc.)
✅ Copy JSON response easily
✅ Dark mode UI for better visibility

📂 Folder Structure
quick-api-debugger/
│── manifest.json
│── popup.html
│── popup.js
│── background.js
│── content.js
│── styles.css
│── icon.png

🚀 Use Case of "Quick API Debugger" Chrome Extension
This extension is super useful for developers who frequently work with APIs while debugging websites. Here’s how it helps:

✅ Why Developers Need It?
Real-Time API Monitoring

Instantly see all API calls made by a webpage without opening DevTools.
No need to inspect the Network tab manually.
Quickly Copy API Responses

Extract JSON responses directly from the extension.
Saves time when debugging or sending requests to teammates.
Filter API Responses Easily

Can be modified later to filter responses by:
Status codes (200, 400, 500)
Specific endpoints (e.g., only /users API calls)
Works for Both fetch() and XMLHttpRequest APIs

Unlike other extensions, this one tracks both modern and legacy API requests.
No Extra Logging Code Needed

Normally, developers add console.log(response) inside their code.
With this extension, you don’t need to modify any code—it automatically captures API responses.
🏆 Who Can Use It?
Frontend Developers 🧑‍💻 → Debug API responses when integrating backend data
Backend Developers 🏗️ → Check how APIs are being used in real-time
QA Testers 🛠️ → Validate API responses without extra tools
Tech Enthusiasts 🚀 → Learn how API requests work on different websites
🔥 Example Scenario:
💡 Suppose you're working on an e-commerce site. You want to see real-time API responses for:
✔️ Product details API (/api/products/123)
✔️ User login API (/api/auth/login)
✔️ Cart updates (/api/cart/add)

👉 Instead of opening Chrome DevTools → Network Tab → JSON Preview,
👉 Just click on the extension icon, and you’ll see the API response instantly!

🌟 Future Enhancements
🔹 Search & Filter APIs
🔹 Export API Logs as JSON
🔹 Edit & Resend API Requests 
