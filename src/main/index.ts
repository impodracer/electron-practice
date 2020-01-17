import { app, BrowserWindow } from 'electron';

const isDevelopment = process.env.ELECTRON_DEV == 'dev';

let mainWindow: Electron.BrowserWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  const url = isDevelopment
    ? 'http://localhost:3000'
    : `file://${__dirname}/index.html`;

  if (isDevelopment) {
    mainWindow.webContents.openDevTools();
  }

  mainWindow.loadURL(url);

  mainWindow.on('closed', () => {
    // mainWindow = null;
  });

  mainWindow.webContents.on('devtools-opened', () => {
    mainWindow.focus();
    setImmediate(() => {
      mainWindow.focus();
    });
  });

  return mainWindow;
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
