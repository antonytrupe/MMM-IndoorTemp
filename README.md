**Other Projects**  
| project name | description | language/framework |
| - | - | - |
| [dobby-jeenode-base](//github.com/antonytrupe/dobby-jeenode-base) | collect local and remote temp/rh/etc data and send to dobby-pi-base over usb/serial | c++/arudiuno |
| [dobby-jeenode-remote](//github.com/antonytrupe/dobby-jeenode-remote) | collect local temp/rh and send to dobby-jeenode-base over radio | c++/arduino |
| [dobby-pi-base](//github.com/antonytrupe/dobby-pi-base) | read from jeenode board over usb/serial | python/nodejs module |
| [MMM-IndoorTemp](//github.com/antonytrupe/MMM-IndoorTemp) (THIS) | mm module for temp/rh | javascript/nodejs module/MM module |
| [dobby-cloud-sync](//github.com/antonytrupe/dobby-cloud-sync) | sync to google sheets | javascript/nodejs module |
| | collect internet speedtest data | python/nodejs module |
| MMM-InternetStatus | display internet speedtest results | javascript/nodejs module/MM module) |

https://stackoverflow.com/questions/32504307/how-to-use-sqlite3-module-with-electron

"scripts": {
   "postinstall": "install-app-deps"
   ...
}

npm install --save-dev electron-builder

npm install --save sqlite3

npm run postinstall
