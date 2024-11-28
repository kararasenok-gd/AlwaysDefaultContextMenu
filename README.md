# AlwaysDefaultContextMenu

A browser extension and userscript that blocks websites from disabling the default context menu and allows text selection everywhere.

## Features

- **Restores the context menu**: Prevents websites from blocking the right-click context menu.
- **Enables text selection**: Allows users to select text on websites that try to disable text selection.

---

## Installation

### 1. **Install as a Browser Extension**

#### For Chrome, Edge, or other Chromium-based browsers:

1. Clone or download this repository or [ext](https://github.com/kararasenok-gd/AlwaysDefaultContextMenu/tree/main/ext) folder.
2. Open your browser and go to the **Extensions** page:
   - In Chrome: `chrome://extensions/`
   - In Edge: `edge://extensions/`
3. Enable **Developer mode** (toggle switch in the top right).
4. Click **Load unpacked** and select the folder where you saved the extension files.
5. The extension should now be installed and running.

#### For Firefox:

1. Clone or download this repository or [ext](https://github.com/kararasenok-gd/AlwaysDefaultContextMenu/tree/main/ext) folder.
2. Open Firefox and go to the **Add-ons Manager** page: `about:addons`
3. In the left sidebar, click **Extensions**, then click the gear icon in the top-right corner and select **Debug Add-ons**.
4. Click **Load Temporary Add-on** and select any file inside the folder (e.g., `manifest.json`).

---

### 2. **Install as a Userscript (with Tampermonkey/Greasemonkey)**

If you prefer using userscripts, you can install this as a userscript using Tampermonkey or Greasemonkey:

#### Using Tampermonkey:

1. Install [Tampermonkey](https://www.tampermonkey.net/) extension for your browser.
2. Once installed, open the [userscript file](https://github.com/kararasenok-gd/AlwaysDefaultContextMenu/raw/refs/heads/main/adcm.user.js), and Tampermonkey will prompt you to install the script.
3. Confirm the installation, and the userscript will automatically run on all websites.

#### Using Greasemonkey:

1. Install [Greasemonkey](https://addons.mozilla.org/firefox/addon/greasemonkey/) extension for Firefox.
2. Once installed, open the [userscript file](https://github.com/kararasenok-gd/AlwaysDefaultContextMenu/raw/refs/heads/main/adcm.user.js), and Greasemonkey will prompt you to install the script.
3. Confirm the installation, and the userscript will automatically run on all websites.

---

## Usage

- **Extension**: Once the extension is installed, it will automatically restore the context menu and enable text selection on all websites.

- **Userscript**: The userscript will run on all websites and automatically restore the context menu and enable text selection by default.

---

## ⚠️ And yes ⚠️
i didn't test this all on FireFox
