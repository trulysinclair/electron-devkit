import { BrowserWindow } from "electron";
import { v4 } from "uuid";
import { WindowConfig } from "./types.js";
import { WebContents } from "./web-contents.js";

/**
 * A thin wrapper around `Electron.BrowserWindow` .
 */
export class Window extends WebContents {
  readonly id: string = v4();
  readonly #config: WindowConfig

  constructor(
    readonly instance: BrowserWindow,
    config: WindowConfig
  ) {
    super(instance.webContents);

    this.#config = config

    if (config.allowPopups)
      this.webContents.setWindowOpenHandler(({ url }) =>
        url === "about:blank" ? { action: "allow" } : { action: "deny" }
      );
  }

  async load(): Promise<void> {
    switch (this.#config.pathType) {
      // TODO what was the difference in the application?
      case "internal": {
        await this.instance.loadURL(this.#config.path);
      }
      case "external": {
        await this.instance.loadURL(this.#config.path);
      }
      case "file": {
        await this.instance.loadFile(this.#config.path);
      }
      default: {
        throw new Error("Unknown type for path");
      }
    }
  }

  close(): void {
    this.instance.close();
  }

  focus(): void {
    if (this.instance.isMinimized()) this.instance.restore();
    this.instance.focus();
  }

  reload(): void {
    this.instance.reload();
  }

  async dispose() {
    // noop
  }
}
