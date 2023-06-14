const download = document.querySelector(".download");
const light = document.querySelector(".light");
const dark = document.querySelector(".dark");
const qrContainer = document.querySelector("#qr-code");

const qrText = document.querySelector(".qr-text");
const shareBtn = document.querySelector(".share-btn");
const sizes = document.querySelector(".sizes");

light.addEventListener("input", handleLightColor);
dark.addEventListener("input", handleDarkColor);
qrText.addEventListener("input", handleQRText);
sizes.addEventListener("change", handleSize);
shareBtn.addEventListener("click", handleShare);

const defaultUrl = "https://www.youtube.com/channel/UC8R4raSsu19cmmi8g4OAHmA";
let colorLight = "#fff",
  colorDark = "#000",
  text = defaultUrl,
  size = 300;

function handleDarkColor(e) {
  colorDark = e.target.value;
  generateQRCode();
}

function handleLightColor(e) {
  colorLight = e.target.value;
  generateQRCode();
}

function handleQRText(e) {
  const value = e.target.value;
  text = value;
  if (!value) {
    text = defaultUrl;
  }
  generateQRCode();
}

async function generateQRCode() {
  qrContainer.innerHTML = "";
  new QRCode("qr-code", {
    text,
    height: size,
    width: size,
    colorLight,
    colorDark,
  });
  download.href = await resolveDataUrl();
}

async function handleShare() {
  setTimeout(async () => {
    try {
      const base64url = await resolveDataUrl();
      const blob = await (await fetch(base64url)).blob();
      const file = new File([blob], "QRCode.png", {
        type: blob.type,
      });
      await navigator.share({
        files: [file],
        title: text,
      });
    } catch (error) {
      alert("Your browser does not support sharing.");
    }
  }, 100);
}

function handleSize(e) {
  size = e.target.value;
  generateQRCode();
}

function resolveDataUrl() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const img = document.querySelector("#qr-code img");
      if (img.currentSrc) {
        resolve(img.currentSrc);
        return;
      }
      const canvas = document.querySelector("canvas");
      resolve(canvas.toDataURL());
    }, 50);
  });
}
generateQRCode();
