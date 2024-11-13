import { WebContents as ElectronWebContents } from "electron";

/**
 * A wrapper around `Electron.WebContents` returned by the `webContents` of an
 * Electron `BrowserWindow`, `BrowserView`, and `WebContentsView`.
 *
 * It handles many page-related tasks like tracking the title, favicon, and more.
 */
export class WebContents {
  favicons: string[] = [];
  title: string;
  url: string;
  isMediaPlaying: boolean = false;
  themeColor: string | null = null;

  constructor(readonly webContents: ElectronWebContents) {
    // We don't know what the dev may be doing, so remove its restriction.
    this.webContents.setMaxListeners(Infinity);

    this.title = webContents.getTitle();
    this.url = webContents.getURL();

    this.#registerEventListeners();
  }

  onDidUpdate(cb: () => void) {
    cb();
  }

  // TODO pass listener callbacks to reduce listener count
  #registerEventListeners() {
    this.webContents.on("page-favicon-updated", (_, favicons) => {
      this.favicons = favicons;
    });

    this.webContents.on("page-title-updated", (_, title) => {
      this.title = title;
    });

    this.webContents.on(
      "media-started-playing",
      () => (this.isMediaPlaying = true)
    );

    this.webContents.on("media-paused", () => (this.isMediaPlaying = false));

    this.webContents.on(
      "audio-state-changed",
      (event) => (this.isMediaPlaying = event.audible)
    );

    this.webContents.on(
      "did-change-theme-color",
      (_, color) => (this.themeColor = color)
    );
  }

  #registerIpcListeners() {}
}
