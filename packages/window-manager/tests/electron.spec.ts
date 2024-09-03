import {_electron, test} from "@playwright/test";

test('launch app', async () => {
  const electronApp = await _electron.launch({args: ['dist/main.cjs']})
  await electronApp.close()
})