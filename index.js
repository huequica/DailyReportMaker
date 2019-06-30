const { app, BrowserWindow } = require("electron")
let win;

function createWindow() {
  win = new BrowserWindow({ width: 1300, height: 780, minWidth: 769, minHeight: 740});
  win.loadURL(`file://${__dirname}/dist/index.html`);
  win.on("closed", () => {win = null});
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
    if(process.platform != "darwin") {
        app.quit();
    }
});

app.on("active", () => {
    // mac系だとdockの残り続けるから
    if (win === null) {
        createWindow();
    }
});
