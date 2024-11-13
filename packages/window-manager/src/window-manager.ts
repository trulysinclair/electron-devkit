import {BrowserView, BrowserWindow} from "electron";
import {ViewConfig, WindowConfig} from "./types.js";
import {View} from "./view.js";
import {Window} from "./window.js";

/**
 * Manages the creation of Windows and Views, wrapping Electron-native windows and views to offer a convenient API.
 *
 * TODO: make windows, views, and registry a base class, "Registry".
 */
export class WindowManager {
  mainWindowId: string | null = null;

  #windows = new Map<string, Window>();

  #views = new Map<string, View>();

  #registry = new Map<string, Set<string>>();

  #activeWindowViews = new Map<string, Set<string>>();

  // #region Windows
  createWindow(config: WindowConfig): Window {
  }

  closeWindow(windowId: string): void {
  }

  focusWindow(windowId: string): void {
  }

  closeAllWindows(): void {
  }

  getAllWindows(): Window[] {
  }

  getWindow(windowId: string): Window | null {
  }

  isWithinWindowBounds() {
  }

  registerWindow(window: BrowserWindow): string {
  }

  unregisterWindow(): void {
  }

  // #region Views
  createView(config: ViewConfig): View {
  }

  closeView(viewId: string) {
  }

  movieViewToWindow(viewId: string, targetWindowId: string): void {
  }

  closeAllViewsForWindow(windowId: string): void {
  }

  hideView(viewId: string): void {
  }

  showView(viewId: string): void {
  }

  hideAllViewsForWindow(windowId: string): void {
  }

  showAllViewsForWindow(windowId: string): void {
  }

  focusView(viewId: string): void {
  }

  getAllViewsForWindow(windowId: string): View[] {
  }

  getViewById(viewId: string): View {
  }

  getWindowIdForView(viewId: string): string {
  }

  registerView(windowId: string, view: BrowserView): string {
  }

  unregisterView(viewId: string): void {
  }

  // #region Utilities
  #debug() {
  }

  #cleanup(): void {
  }

  #emitWindowViewsChanged(): void {
  }

  #getIndexOfView(viewId: string): number {
  }

  #getNextActiveView(viewId: string): View {
  }
}
