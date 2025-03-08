(function() {
    // 1️⃣ वेबसाइट का टाइटल और फेविकॉन ऑटोमेटिक लेना
    let siteTitle = document.title || "Processing Web App";
    let favicon = document.querySelector("link[rel~='icon']")?.href || "https://via.placeholder.com/80";

    // 2️⃣ Custom Message को HTML से लेना
    let customMessage = document.getElementById("popup-message")?.innerText || "आपका ऐप प्रोसेस हो रहा है...";

    // 3️⃣ Popup Create करना
    let popupDiv = document.createElement("div");
    popupDiv.id = "popup-container";
    popupDiv.innerHTML = `
        <div id="popup-box">
            <img id="popup-icon" src="${favicon}" alt="App Icon">
            <h2 id="popup-title">${siteTitle}</h2>
            <p id="popup-text">${customMessage}</p>
            <button id="install-btn">इंस्टॉल करें</button>
            <p class="powered-by">🔋 Powered by <b>Bhaukaal Tech</b></p>
        </div>
    `;
    document.body.appendChild(popupDiv);

    // 4️⃣ CSS जोड़ना (Popup + Auto Theme Detection)
    let style = document.createElement("style");
    style.innerHTML = `
        /* 🔹 Popup Design */
        #popup-container {
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0, 0, 0, 0.7);
            display: flex; align-items: center; justify-content: center;
            z-index: 9999;
        }
        #popup-box {
            background: var(--popup-bg); padding: 20px; text-align: center;
            width: 300px; border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            transition: all 0.5s ease-in-out;
        }
        #popup-icon { width: 80px; height: 80px; margin-bottom: 10px; }
        #install-btn {
            background: #007bff; color: white; padding: 10px 20px;
            border: none; border-radius: 5px; cursor: pointer;
            font-size: 16px;
        }
        #install-btn:hover { background: #0056b3; }
        .powered-by {
            margin-top: 10px; font-size: 12px; color: gray;
            font-weight: bold; text-transform: uppercase;
        }

        /* 🔹 Auto Theme Detection */
        :root { --popup-bg: white; }
        @media (prefers-color-scheme: dark) {
            :root { --popup-bg: #222; }
            #popup-box, .powered-by { color: white; }
        }
    `;
    document.head.appendChild(style);

    // 5️⃣ Popup को 2 सेकंड बाद दिखाना
    setTimeout(() => { popupDiv.style.display = "flex"; }, 2000);

    // 6️⃣ Sound Effect जोड़ना
    let clickSound = new Audio("click.mp3");

    // 7️⃣ "इंस्टॉल करें" बटन पर क्लिक करने पर Popup हटे और Processing दिखे
    document.getElementById("install-btn").addEventListener("click", function() {
        clickSound.play();
        popupDiv.remove();
        startProcessingEffect();
    });

    // 8️⃣ Processing Effect फ़ंक्शन
    function startProcessingEffect() {
        let processingDiv = document.createElement("div");
        processingDiv.id = "processing-overlay";
        processingDiv.innerHTML = `<div class="processing-box">
            <div class="spinner"></div>
            <p>Processing...</p>
        </div>`;
        document.body.appendChild(processingDiv);

        // 5 सेकंड बाद Processing Effect हट जाएगा
        setTimeout(() => { processingDiv.remove(); }, 5000);
    }

    // 9️⃣ Auto Close Popup (10 सेकंड बाद अपने आप बंद होगा)
    setTimeout(() => { popupDiv.remove(); }, 10000);

})();
