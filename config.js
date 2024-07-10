const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_29_07_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjIwLFxuICAgICAgICAzMCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMzksXG4gICAgICAgIDM1LFxuICAgICAgICAyNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDcyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDUxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1MixcbiAgICAgICAgNjgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDcxLFxuICAgICAgICA2MCxcbiAgICAgICAgNDksXG4gICAgICAgIDc3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMzksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzksXG4gICAgICAgIDU1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTMxLFxuICAgICAgICA2MixcbiAgICAgICAgODksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTgwLFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDg1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTksXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDUwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyOSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMDksXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTc2LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDM5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDYwLFxuICAgICAgICA1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgOSxcbiAgICAgICAgODksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDExLFxuICAgICAgICAxNjYsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQzLFxuICAgICAgICA5NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTksXG4gICAgICAgIDg2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjA4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDY0LFxuICAgICAgICAxOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDEsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTI4LFxuICAgICAgICA5MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDksXG4gICAgICAgIDU1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjksXG4gICAgICAgIDI5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDMzLFxuICAgICAgICA3MSxcbiAgICAgICAgMTYxLFxuICAgICAgICA4MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTUyLFxuICAgICAgICA1OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDg4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMzVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDY1LFxuICAgICAgICA3NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTkxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxLFxuICAgICAgICAxOTksXG4gICAgICAgIDc0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDQzLFxuICAgICAgICAxNzksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMixcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTM4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjQ0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI2LFxuICAgICAgICAxODUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNjksXG4gICAgICAgIDYsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTMwLFxuICAgICAgICA1MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNyxcbiAgICAgICAgMjIyLFxuICAgICAgICA2MixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzksXG4gICAgICAgIDE3MixcbiAgICAgICAgMjMwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNixcbiAgICAgICAgNDAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTE0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDM4LFxuICBcImFkdlNlY3JldEtleVwiOiBcImY2Sy9abFN2RjNPemxkT3g3cWRhRkxYZHBWbWFSRndUQkZ1Zk1Ec1NSZFE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImQzY290SmI1VGtLSzZpa29BRFd2R3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjkyMzMxMjItM2RiOS00NmNkLWI3MDQtNzQ3MTA5ZDQ1YjVmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1NCxcbiAgICAgIDE2MixcbiAgICAgIDExOSxcbiAgICAgIDEzNyxcbiAgICAgIDIwOCxcbiAgICAgIDM2LFxuICAgICAgMTUwLFxuICAgICAgODYsXG4gICAgICAxNzgsXG4gICAgICAxNTksXG4gICAgICAxMzYsXG4gICAgICAyMDQsXG4gICAgICA0OCxcbiAgICAgIDgzLFxuICAgICAgMjI3LFxuICAgICAgMTk4LFxuICAgICAgMjQ2LFxuICAgICAgMjA0LFxuICAgICAgMTU2LFxuICAgICAgMTI3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI3LFxuICAgICAgMTcwLFxuICAgICAgMjE5LFxuICAgICAgMzksXG4gICAgICAyMzMsXG4gICAgICAzNSxcbiAgICAgIDQxLFxuICAgICAgMTQ2LFxuICAgICAgMjEzLFxuICAgICAgMjA1LFxuICAgICAgNzUsXG4gICAgICAyMjMsXG4gICAgICA3OSxcbiAgICAgIDIwNixcbiAgICAgIDE2MCxcbiAgICAgIDEyMyxcbiAgICAgIDE0NixcbiAgICAgIDEwMyxcbiAgICAgIDEwMixcbiAgICAgIDE4N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJYMU1RWlhZU1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDg0NzAyOTc2OjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMDU1OTIzMjQ2Njk0Njk6MTJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTjdVaDZ3RUVNN1J1clFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI0VEo1cWhseFJXa1pXQ0RkVTJEOEc5MVpLUUNxeVR5ZU9SL2lrRUR3Q3hBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlpHa1JQQ1EzZ0hHV2ZCM3QxYnNFWExQYlZOSW54SVBrTExJMDN3ancxSDJtcU1JbUd3VFJMWDJZYnF2bGpHUWRWc2tRV0E4dytuUFoxZEUyOVphckRBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjY1T3V6VEFvQ1VibWRyU0xXZ00yb1MwaDFQYVlIYWlNR0VnN2gxTEExc1JmSFVhUWE4SllTU0NqdUVvaVFKOEp2ODBMSjg2Y2t2K0lGMThTZ3ZjZUFBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzA4NDcwMjk3NjoxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNjI1MzYxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUHRhXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQdGEuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
