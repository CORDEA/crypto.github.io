import {allComponents, Button, provideFluentDesignSystem, Switch, TextField} from "@fluentui/web-components";

provideFluentDesignSystem().register(allComponents)

const ALGORITHM = 'AES-GCM';

async function onButtonClick() {
    const rawKey = document.querySelector<TextField>('#key').value
    const text = document.querySelector<TextField>('#text').value
    const encoded = new TextEncoder().encode(text);
    const decrypt = document.querySelector<Switch>('#switch').checked
    const key = await window.crypto.subtle.importKey(
        'raw',
        new TextEncoder().encode(rawKey),
        ALGORITHM,
        true,
        ['encrypt', 'decrypt']
    );
    if (decrypt) {
        return
    }
    const iv = window.crypto.getRandomValues(new Uint8Array(12))
    const encrypted = await window.crypto.subtle.encrypt(
        {name: ALGORITHM, iv: iv},
        key,
        encoded
    )
}

function onLoad() {
    document.querySelector<Button>('#button')
        .addEventListener('click', onButtonClick)
}

window.onload = onLoad
