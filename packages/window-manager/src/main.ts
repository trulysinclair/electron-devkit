import {app} from 'electron'

app.whenReady().then(() => {
  console.log('Ready!')
  app.exit()
})
