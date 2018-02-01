import { app, BrowserWindow, webContents, shell } from "electron";
import { startWorkout } from '../background.js';
import { endWorkout } from '../background.js';

export const fileMenuTemplate = {
  label: "File",
  submenu: [
    {
      label: "Start Workout",
      accelerator: "Command+S",
      click: () => {
        startWorkout();
        // This doesn't work:
        // document.querySelector('.startButton img').click();
        // "document" is not available in the 'main' process.
      }
    },
    {
      label: "Pause Workout",
      accelerator: "Command+P",
      click: () => {
        // TODO: find way to pause timer
      }
    },
    {
      label: "End Workout",
      accelerator: "Command+E",
      click: () => {
        endWorkout();
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