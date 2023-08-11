const { app, BrowserWindow } = require('electron');

let mainWindow;

app.on('ready', createWindows)

function createWindows() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 800,
  });

  mainWindow.loadFile('index.html')
}