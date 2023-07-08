import {
  allComponents,
  Button,
  provideFluentDesignSystem,
  Switch,
  TextField,
} from "@fluentui/web-components";

provideFluentDesignSystem().register(allComponents);

const ALGORITHM = "AES-GCM";

let keyTextField: TextField;
let keyCounter: HTMLLabelElement;

async function onButtonClick() {
  const textField = document.querySelector<TextField>("#text");
  const text = textField.value;
  const encoded = new TextEncoder().encode(text);
  const decrypt = document.querySelector<Switch>("#switch").checked;
  const key = await window.crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(keyTextField.value),
    ALGORITHM,
    true,
    ["encrypt", "decrypt"]
  );
  if (decrypt) {
    const decoded = Uint8Array.from(atob(text), (e) => e.codePointAt(0));
    const iv = decoded.slice(0, 12);
    const encrypted = decoded.slice(12);
    const decrypted = await window.crypto.subtle.decrypt(
      { name: ALGORITHM, iv: iv },
      key,
      encrypted
    );
    textField.value = new TextDecoder().decode(decrypted);
    return;
  }
  const iv = window.crypto.getRandomValues(new Uint8Array(12));
  const encrypted = await window.crypto.subtle.encrypt(
    { name: ALGORITHM, iv: iv },
    key,
    encoded
  );
  const result = new Uint8Array(iv.byteLength + encrypted.byteLength);
  result.set(iv);
  result.set(new Uint8Array(encrypted), iv.length);
  textField.value = btoa(
    Array.from(result, (e) => String.fromCodePoint(e)).join("")
  );
}

function onKeyChanged(this: HTMLInputElement) {
  const len = this.value.length;
  keyCounter.innerText = len.toString();
  if (len == 16 || len == 32) {
    keyCounter.className = "valid";
    return;
  }
  keyCounter.className = "invalid";
}

function onLoad() {
  document
    .querySelector<Button>("#button")
    .addEventListener("click", onButtonClick);
  keyCounter = document.querySelector<HTMLLabelElement>("#key-counter");
  keyTextField = document.querySelector<TextField>("#key");
  keyTextField.addEventListener("input", onKeyChanged);
}

window.onload = onLoad;
