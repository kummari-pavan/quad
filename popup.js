document.addEventListener("DOMContentLoaded", () => {
    chrome.storage.local.get(["apiLogs"], (data) => {
        const logsDiv = document.getElementById("logs");
        if (data.apiLogs) {
            logsDiv.innerHTML = data.apiLogs.map(log => 
                `<div>
                    <strong>${log.method} ${log.url}</strong> 
                    <button onclick='copyToClipboard(${JSON.stringify(log.response)})'>📋 Copy</button>
                    <pre>${JSON.stringify(log.response, null, 2)}</pre>
                </div>`
            ).join("<hr>");
        }
    });

    document.getElementById("clearLogs").addEventListener("click", () => {
        chrome.storage.local.set({ apiLogs: [] });
        document.getElementById("logs").innerHTML = "";
    });
});

function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
}
