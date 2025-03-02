(function () {
    // ✅ सिक्योरिटी कोड (Anti-Modification Check)
    function checkModification() {
        if (!document.currentScript || !document.currentScript.src.includes("bhaukaaltech")) {
            console.warn("⚠️ स्क्रिप्ट ओरिजिनल रखें, मॉडिफाई न करें!");
        }
    }

    // ✅ Gmail Generator Function
    function generateGmail() {
        let baseGmail = document.getElementById("gmailInput").value.trim();
        if (baseGmail === "") {
            return;
        }

        let randomNum = Math.floor(Math.random() * 1000000);
        let randomChar = String.fromCharCode(97 + Math.floor(Math.random() * 26)); // Random letter (a-z)
        let generatedEmail = baseGmail.split("@")[0] + "+" + randomChar + randomNum + "@gmail.com";

        document.getElementById("generatedEmail").innerText = generatedEmail;
    }

    // ✅ Copy Email Function
    function copyEmail() {
        let emailText = document.getElementById("generatedEmail").innerText;
        if (emailText) {
            navigator.clipboard.writeText(emailText).then(() => {
                alert("✅ कॉपी हो गया: " + emailText);
            });
        }
    }

    // ✅ Custom Alert Box for Telegram (सिर्फ Page Load पर)
    function showTelegramAlert() {
        if (document.getElementById("customAlertBox")) return;

        let alertBox = document.createElement("div");
        alertBox.id = "customAlertBox";
        Object.assign(alertBox.style, {
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "#1a1a1a",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
            textAlign: "center",
            zIndex: "9999",
            width: "320px",
            color: "white",
            fontFamily: "'Inter', sans-serif",
            border: "2px solid #0088cc"
        });

        let icon = document.createElement("i");
        icon.className = "fab fa-telegram";
        Object.assign(icon.style, {
            fontSize: "40px",
            color: "#0088cc",
            marginBottom: "10px"
        });

        let message = document.createElement("p");
        message.innerText = "🔔 हमारे Telegram ग्रुप से जुड़ें!";
        message.style.marginBottom = "20px";

        let buttonContainer = document.createElement("div");

        let cancelButton = document.createElement("button");
        cancelButton.innerText = "❌ Cancel";
        Object.assign(cancelButton.style, {
            padding: "10px 15px",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
            cursor: "pointer",
            margin: "5px",
            background: "#cc0000",
            color: "white"
        });
        cancelButton.onclick = function () {
            document.body.removeChild(alertBox);
        };

        let joinButton = document.createElement("button");
        joinButton.innerText = "✅ Join";
        Object.assign(joinButton.style, {
            padding: "10px 15px",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
            cursor: "pointer",
            margin: "5px",
            background: "#0088cc",
            color: "white"
        });
        joinButton.onclick = function () {
            window.location.href = "https://t.me/bhaukaaltech";
        };

        buttonContainer.appendChild(cancelButton);
        buttonContainer.appendChild(joinButton);

        alertBox.appendChild(icon);
        alertBox.appendChild(message);
        alertBox.appendChild(buttonContainer);

        document.body.appendChild(alertBox);
    }

    // ✅ Page Load Events
    document.addEventListener("DOMContentLoaded", function () {
        setTimeout(checkModification, 2000);
        setTimeout(showTelegramAlert, 5000);
    });

    // ✅ Global Access to Functions
    window.generateGmail = generateGmail;
    window.copyEmail = copyEmail;
})();