import {_electron, test} from "@playwright/test";

test('launch app', async () => {
  const electronApp = await _electron.launch({args: ['main.js']})
  await electronApp.close()
})