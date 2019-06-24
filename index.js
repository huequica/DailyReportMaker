const { app, BrowserWindow } = require("electron")
let win;

function createWindow() {
  win = new BrowserWindow({ width: 600, height: 300});
  win.loadURL(`file://${__dirname}/ovto/index.html`);
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
