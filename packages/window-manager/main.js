import {app} from 'electron'

app.on('ready', () => {
    console.log('Ready!')
    app.exit()
})