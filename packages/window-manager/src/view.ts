import { BrowserView } from "electron";
import { v4 } from "uuid";
import { ViewConfig } from "./types.js";
import { WebContents } from "./web-contents.js";

export class View extends WebContents {
  readonly id: string = v4();
  readonly #config: ViewConfig;

  constructor(
    readonly instance: BrowserView,
    config: ViewConfig
  ) {
    super(instance.webContents);

    this.#config = config;
  }
}
