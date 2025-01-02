const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_15_01_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjMyLFxuICAgICAgICAzOSxcbiAgICAgICAgODYsXG4gICAgICAgIDI1LFxuICAgICAgICA1MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTUxLFxuICAgICAgICA3MixcbiAgICAgICAgMTA2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2LFxuICAgICAgICA3NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE1MixcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAsXG4gICAgICAgIDg5LFxuICAgICAgICAxNzksXG4gICAgICAgIDgwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDExLFxuICAgICAgICAxODMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDI2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDUwLFxuICAgICAgICA1MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDY5LFxuICAgICAgICAzMyxcbiAgICAgICAgMjksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDg2LFxuICAgICAgICAzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0NixcbiAgICAgICAgNTcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDksXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQxLFxuICAgICAgICA5MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjksXG4gICAgICAgIDg4LFxuICAgICAgICAzNCxcbiAgICAgICAgMjA4LFxuICAgICAgICAzMyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNixcbiAgICAgICAgMTg1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDgwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDI3LFxuICAgICAgICA5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTMsXG4gICAgICAgIDMyLFxuICAgICAgICAxN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTgzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDcxLFxuICAgICAgICA0NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDg2LFxuICAgICAgICAxNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAzNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA1MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDI3LFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDI0NixcbiAgICAgICAgNzIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE3MixcbiAgICAgICAgNzUsXG4gICAgICAgIDU3LFxuICAgICAgICA2LFxuICAgICAgICA1OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAzLFxuICAgICAgICAxOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODEsXG4gICAgICAgIDk3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTExXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwMixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDQ5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzksXG4gICAgICAgIDg2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTk5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODUsXG4gICAgICAgIDc0LFxuICAgICAgICA5NixcbiAgICAgICAgMjksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTkwLFxuICAgICAgICA2MyxcbiAgICAgICAgMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4LFxuICAgICAgICA4NyxcbiAgICAgICAgMjAzLFxuICAgICAgICA1MixcbiAgICAgICAgMTg4LFxuICAgICAgICAxODYsXG4gICAgICAgIDk0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDgwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDgwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTA5LFxuICAgICAgICA3MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjksXG4gICAgICAgIDI1MixcbiAgICAgICAgMjUzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTAxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ1Q1Zjakczb2w0bmFMVHlCRnUyWHpQeTVvaXhMdTVXMnAraWREcTBFbW80PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJYLUJacHNzZlJrS3BjaGM4MmF2OWZBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjE1NTM5NTMyLWQyYzYtNDlhMS05N2FlLTQxYWM0OTM4YjE5NVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5NixcbiAgICAgIDIzOCxcbiAgICAgIDUwLFxuICAgICAgOTIsXG4gICAgICAxMDksXG4gICAgICAxODAsXG4gICAgICAxNDMsXG4gICAgICAyMDQsXG4gICAgICAyMDYsXG4gICAgICA3MixcbiAgICAgIDE5OCxcbiAgICAgIDAsXG4gICAgICAxNDgsXG4gICAgICAxNixcbiAgICAgIDI1NCxcbiAgICAgIDY3LFxuICAgICAgODksXG4gICAgICAyMTIsXG4gICAgICA5NCxcbiAgICAgIDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzQsXG4gICAgICAyNTUsXG4gICAgICAyNCxcbiAgICAgIDYwLFxuICAgICAgOSxcbiAgICAgIDIzNyxcbiAgICAgIDIxOCxcbiAgICAgIDk2LFxuICAgICAgMjA5LFxuICAgICAgMTE0LFxuICAgICAgOTgsXG4gICAgICA5NyxcbiAgICAgIDgwLFxuICAgICAgMjI4LFxuICAgICAgMTMwLFxuICAgICAgMTE1LFxuICAgICAgMTgyLFxuICAgICAgNTMsXG4gICAgICA0NSxcbiAgICAgIDQ1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjVERk1YVFZFXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDQ2NjI5MDIwOjI0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiw4PDh1TDj1bDi35GeFwiLFxuICAgIFwibGlkXCI6IFwiNTczMzM4NTQwNDAxMDg6MjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUHluNUo0SEVMbm4yN3NHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJwanh3ZUxaTEpDQTJCZ0ZjUkRpdFo3RnZlcXFQQit3WUlVZXNQQTFqUUFBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjVOcXQ1dGJMTm9YbmREQjJIYXRBbG01bnJsT0Z1cGp1MGYvQVRwb0Q0aFlHaDVjbHM0RmdVWURQVGhBSUErb0NwcEQ3TnVFUTcxYTBGcnhoQTRYWWpRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkU0VnFNMVByZ2VDTlpVc3JFeEpoVjZTSDg3N0UwdjhxU0c1NmNMWFFhYnMvSlVvUWpheDRRNTVhTUExOUN6QXhpbElZeXRRTEdkQnNzMU56SFYzRkNRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwNDY2MjkwMjA6MjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iaVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM1ODQ4ODkzXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "+",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
