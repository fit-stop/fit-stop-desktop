// This is main process of Electron, started as first thing when your
// app starts. It runs through entire life of your application.
// It doesn't have any windows which you can see on screen, but we can open
// window from here.

import path from "path";
import url from "url";
import { app, Menu, webContents } from "electron";
import { devMenuTemplate } from "./menu/dev_menu_template";
import { editMenuTemplate } from "./menu/edit_menu_template";
import createWindow from "./helpers/window";

// Special module holding environment variables which you declared
// in config/env_xxx.json file.
import env from "env";
import { fileMenuTemplate } from "./menu/file_menu_template";
import { loginMenuTemplate } from "./menu/login_menu_template";

const setApplicationMenu = () => {
  const menus = [editMenuTemplate];
  if (env.name !== "production") {
    menus.push(fileMenuTemplate);
    menus.push(devMenuTemplate);
    menus.push(loginMenuTemplate);
  }
  Menu.setApplicationMenu(Menu.buildFromTemplate(menus));
};

// Save userData in separate folders for each environment.
// Thanks to this you can use production and development versions of the app
// on same machine like those are two separate apps.
if (env.name !== "production") {
  const userDataPath = app.getPath("userData");
  app.setPath("userData", `${userDataPath} (${env.name})`);
}

let mainWindow;
let startWorkout;

app.on("ready", () => {
  setApplicationMenu();

  mainWindow = createWindow("main", {
    width: 1000,
    height: 600
  });

  mainWindow.loadURL(
    // url.format({
    //   pathname: path.join(__dirname, "app.html"),
    //   protocol: "file:",
    //   slashes: true
    // })
    // 'https://fierce-bayou-35151.herokuapp.com/'
    `http://localhost:3000/`
  );
  

  if (env.name === "development") {
    mainWindow.openDevTools();
  }

  startWorkout = () => {
    mainWindow.webContents.send('workout:start');
  }
});

app.on("window-all-closed", () => {
  app.quit();
});

app.on('browser-window-blur', () => {
  mainWindow.webContents.send('workout:start');
});

export { startWorkout };