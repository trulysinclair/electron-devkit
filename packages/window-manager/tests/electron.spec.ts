import { _electron, test } from "@playwright/test";

test("launch app", async () => {
  const electronApp = await _electron.launch({
    args: ["dist/main.cjs"],
  });

  // Electron v29 -----------
  // --- Classes
  // BrowserWindow - only window class
  // BrowserView - only view class

  // --- Window Methods
  // BrowserWindow.fromId(id): BrowserWindow | null - get a window by its ID
  // BrowserWindow.getAllWindows(): BrowserWindow[] - get all windows
  // BrowserWindow.getFocusedWindow(): BrowserWindow | null - get the focused window
  // BrowserWindow.fromBrowserView(browserView): BrowserWindow | null - get a window using a browser view instance
  // BrowserWindow.fromWebContents(webContents): BrowserWindow | null - get a window using a webContents instance

  // --- View-based Methods
  // BrowserWindow.getBrowserView(): BrowserView - get the BrowserView for the window
  // BrowserWindow.getBrowserViews(): BrowserView[] - get all views for a window, sorted by z-index
  // BrowserWindow.addBrowserView(browserView): void - support for multiple views
  // BrowserWindow.setBrowserView(browserView): void - set the only view for the window
  // BrowserWindow.removeBrowserView(browserView): void - remove a view from the window
  // BrowserWindow.setTopBrowserView(browserView): void - move a view to the top of a stack
  // ------------------------

  // Electron v30+ ----------
  // --- Classes
  // BaseWindow - basic window with only views, no url direct loading
  // BrowserWindow - a window with a primary contentView, with support for additional views
  // View - create and layout native views with no webContents
  // WebContentsView - a View that displays a WebContents (entirely c++ based, cannot replicate)

  // --- Window Methods
  // BrowserWindow.fromId(id): BrowserWindow | null - get a window by its ID
  // BrowserWindow.getAllWindows(): BrowserWindow[] - get all windows
  // BrowserWindow.getFocusedWindow(): BrowserWindow | null - get the focused window
  // BrowserWindow.fromWebContents(webContents): BrowserWindow | null - get a window using a webContents instance

  // --- View Methods
  // BrowserWindow.contentView: View
  // View.addChildView(view)
  // View.removeChildView(view)
  // View.children: View[]
  // ------------------------

  // create view, then use Browser
  const version = await electronApp.evaluate(async ({ BrowserWindow, app }) => {
    return process.versions.electron;
  });
  console.log(version);
  await electronApp.close();
});
