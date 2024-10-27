import {BrowserView, BrowserWindow} from "electron";

/**
 * Allows for the registration and management of Electron-native BrowserWindows and their BrowserViews.
 *
 * TODO: make windows, views, and registry a base class, "Registry".
 */
export class SimpleWindowManager {

  #windows = new Map<number, BrowserWindow>();
  #views = new Map<number, BrowserView>();
  #registry = new Map<number, Set<number>>()

  /**
   * Registers an Electron-native BrowserWindow for easy reference.
   *
   * @param {Electron.CrossProcessExports.BrowserWindow} window
   * @returns {number}
   */
  registerWindow(window: BrowserWindow): number {
    const windowId = window.id
    this.#windows.set(windowId, window);
    this.#registry.set(windowId, new Set());

    return windowId;
  }

  /**
   * Removes a registered window from the Window Manager. Currently, does not serve a purpose other than removing the
   * reference. Not unregistering a BrowserWindow may keep that window open if you do not close it.
   *
   * @param {number} windowId
   */
  unregisterWindow(windowId: number): void {
    this.#windows.delete(windowId);
    this.#registry.delete(windowId);
  }

  /**
   * Registers a BrowserView to a window and adds the view to the window.
   *
   * @param {number} windowId
   * @param {Electron.CrossProcessExports.BrowserView} view
   * @returns {number}
   */
  registerWindowView(windowId: number, view: BrowserView): number {
    const viewId = view.webContents.id
    const windowViews = this.#registry.get(windowId)
    const window = this.#windows.get(windowId)

    // TODO try returning the error instead of throwing? Make it optional to throw?
    if (!windowViews || !window)
      throw new Error(
        `Cannot register view ${viewId} for window ${windowId} because the window with that ID is not registered.`
      )

    // Register the view internally
    this.#views.set(viewId, view);
    windowViews.add(viewId)

    // Add the view to the window
    window.addBrowserView(view)

    return viewId
  }

  /**
   * Removes a registered BrowserView from a window.
   *
   * @param {number} windowId
   * @param {number} viewId
   */
  unregisterWindowView(windowId: number, viewId: number): void {
    const windowIds = this.#registry.get(windowId)

    if (!windowIds) {
      throw new Error(`Window with ID ${windowId} is not registered.`)
    }

    windowIds.delete(viewId)
  }

  /**
   * Moves a registered BrowserView to a window. A BrowserView must be registered already, and therefore attached to
   * an existing window.
   *
   * @param {number} windowId
   * @param {number} viewId
   */
  moveViewToWindow(windowId: number, viewId: number): void {
  }
}