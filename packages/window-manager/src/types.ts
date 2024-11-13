import {
  BrowserViewConstructorOptions,
  BrowserWindowConstructorOptions,
} from "electron";

/**
 * These coordinates should be defined only from a `MouseEvent` such as from the
 * `dragend` event.
 */
export type PointerCoords = {
  /** The X position on the screen. */
  screenX: number;
  /** The Y position on the screen. */
  screenY: number;
};

export type SanitizedView = {};

export type WindowManagerConfig = {
  cleanup?: {
    /** Auto-closes windows with no views. */
    autoClose: boolean;
    /** Forces windows to close and ignores the `beforeunload` event. */
    force: boolean;
  };
};

export type WindowConfig = {
  options: BrowserWindowConstructorOptions;
  allowPopups?: boolean;
  path: string;
  pathType: "internal" | "external" | "file";
  isMainWindow?: boolean;
};

export type ViewConfig = {
  options: BrowserViewConstructorOptions;
};


// Potential order of lifecycle events
// 'did-start-loading'
// 'did-navigate' - also fires when view first navigates
// 'dom-ready'
// 'did-fail-provisional-load'
// 'did-fail-load'
// 'did-frame-finish-load'
// 'did-finish-load'
// 'did-stop-loading'

export type WebContentsState =
  | "done-loading"
  | "loading"
  | "crashed"
  | "destroyed";

export enum WindowMode {
  Normal,
  Maximized,
  Fullscreen,
}

export enum LoadingState {
  Loading,
  Failed,
  Ready,
  Unresponsive,
  Crashed,
  Destroyed,
}
