import { app, BrowserWindow } from "electron";

export const loginMenuTemplate = {
  label: "Account",
  submenu: [
    {
      label: "Log In",
      click: () => {
        console.log("Logging in...");
      }
    },
    {
      label: "Log Out",
      click: () => {
        console.log("Logging out...");
      }
    }
  ]
}