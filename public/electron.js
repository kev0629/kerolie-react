const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const { default: installExtension, REACT_DEVELOPER_TOOLS,VUEJS_DEVTOOLS,REDUX_DEVTOOLS } = require('electron-devtools-installer');

const path = require("path");
const isDev = require("electron-is-dev");

let mainWindow;

require("update-electron-app")({
  repo: "kitze/react-electron-example",
  updateInterval: "1 hour"
});

function createWindow() {
  mainWindow = new BrowserWindow({ width: 900, height: 680, webPreferences: { nodeIntegration: true }});
  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );
  mainWindow.on("closed", () => (mainWindow = null));
  [REACT_DEVELOPER_TOOLS, VUEJS_DEVTOOLS,REDUX_DEVTOOLS].forEach(extension => {
    installExtension(extension)
        .then((name) => console.log(`Added Extension: ${name}`))
        .catch((err) => console.log('An error occurred: ', err));
  });
}



app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
