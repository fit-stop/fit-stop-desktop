import { app, BrowserWindow } from "electron";

export const fileMenuTemplate = {
  label: "File",
  submenu: [
    {
      label: "Start Workout",
      accelerator: "Command+S",
      click: () => {
        console.log('Function to start workout called!');
      }
    },
    {
      label: "Quit",
      accelerator: "Command+Shift+Q",
      click: () => {
        app.quit();
      }
    }
  ]
};