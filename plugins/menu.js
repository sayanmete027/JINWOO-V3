import moment from 'moment-timezone';
import fs from 'fs';
import os from 'os';
import pkg from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto } = pkg;
import config from '../config.cjs';

// Get total memory and free memory in bytes
const totalMemoryBytes = os.totalmem();
const freeMemoryBytes = os.freemem();

// Define unit conversions
const byteToKB = 1 / 1024;
const byteToMB = byteToKB / 1024;
const byteToGB = byteToMB / 1024;

// Function to format bytes to a human-readable format
function formatBytes(bytes) {
  if (bytes >= Math.pow(1024, 3)) {
    return (bytes * byteToGB).toFixed(2) + ' GB';
  } else if (bytes >= Math.pow(1024, 2)) {
    return (bytes * byteToMB).toFixed(2) + ' MB';
  } else if (bytes >= 1024) {
    return (bytes * byteToKB).toFixed(2) + ' KB';
  } else {
    return bytes.toFixed(2) + ' bytes';
  }
}

// Bot Process Time
const uptime = process.uptime();
const day = Math.floor(uptime / (24 * 3600)); // Calculate days
const hours = Math.floor((uptime % (24 * 3600)) / 3600); // Calculate hours
const minutes = Math.floor((uptime % 3600) / 60); // Calculate minutes
const seconds = Math.floor(uptime % 60); // Calculate seconds

// Uptime
const uptimeMessage = `*I am alive now since ${day}d ${hours}h ${minutes}m ${seconds}s*`;
const runMessage = `*☀️ ${day} Day*\n*🕐 ${hours} Hour*\n*⏰ ${minutes} Minutes*\n*⏱️ ${seconds} Seconds*\n`;

const xtime = moment.tz("Africa/Zimbabwe").format("HH:mm:ss");
const xdate = moment.tz("Africa/Zimbabwe").format("DD/MM/YYYY");
const time2 = moment().tz("Africa/Zimbabwe").format("HH:mm:ss");
let pushwish = "";

if (time2 < "05:00:00") {
  pushwish = `Good Morning 🌄`;
} else if (time2 < "11:00:00") {
  pushwish = `Good Morning 🌄`;
} else if (time2 < "15:00:00") {
  pushwish = `Good Afternoon 🌅`;
} else if (time2 < "18:00:00") {
  pushwish = `Good Evening 🌃`;
} else if (time2 < "19:00:00") {
  pushwish = `Good Evening 🌃`;
} else {
  pushwish = `Good Night 🌌`;
}

const test = async (m, Matrix) => {
  const prefix = config.PREFIX;
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
  const mode = config.MODE === 'public' ? 'public' : 'private';
  const pref = config.PREFIX;

  const validCommands = ['list', 'help', 'menu'];

  if (validCommands.includes(cmd)) {
    const str = `
╭──────────────
┊ ʙᴏᴛɴᴀᴍᴇ : *SAYAN xMD*
┊ ᴏᴡɴᴇʀ : *SAYAN-v3*
┊ ᴜsᴇʀ : *${m.pushName}*
┊ ᴍᴏᴅᴇ : *${mode}*
┊ ᴘʟᴀᴛғᴏʀᴍ : *${os.platform()}*
┊ ᴘʀᴇғɪx : [${prefix}]
┊ ᴠᴇʀsɪᴏɴ : *3.0.0*
╰──────────────

> Hey ${m.pushName} ${pushwish}

 ❐ 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙴𝚁 𝙼𝙴𝙽𝚄 ❐
╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄
┊ ${prefix}ᴀᴛᴛᴘ
┊ ${prefix}ᴀᴛᴛᴘ2
┊ ${prefix}ᴀᴛᴛᴘ3
┊ ${prefix}ᴇʙɪɴᴀʀʏ
┊ ${prefix}ᴅʙɪɴᴀʀʏ
┊ ${prefix}ᴇᴍᴏᴊɪᴍɪx
┊ ${prefix}ᴍᴘ3
╰┄┄┄┄┄┄┄┄┄┄┄┄┄❑

   ❐ 𝙰𝙸 𝙼𝙴𝙽𝚄 ❐
╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄
┊ ${prefix}ᴀɪ
┊ .${prefix}ʙᴜɢ
┊ .${prefix}ʀᴇᴘᴏʀᴛ
┊ ${prefix}ɢᴘᴛ
┊ ${prefix}ᴅᴀʟʟᴇ
┊ ${prefix}ʀᴇᴍɪɴɪ
┊ ${prefix}ɢᴇᴍɪɴɪ
╰┄┄┄┄┄┄┄┄┄┄┄┄┄❑

   ❐ 𝚃𝙾𝙾𝙻 𝙼𝙴𝙽𝚄 ❐
╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄
┊ ${prefix}ᴄᴀʟᴄᴜʟᴀᴛᴏʀ
┊ ${prefix}ᴛᴇᴍᴘᴍᴀɪʟ
┊ ${prefix}ᴄʜᴇᴄᴋᴍᴀɪʟ
┊ ${prefix}ᴛʀᴛ
┊ ${prefix}ᴛᴛs
╰┄┄┄┄┄┄┄┄┄┄┄┄┄❑

   ❐ 𝙶𝚁𝙾𝚄𝙿 𝙼𝙴𝙽𝚄 ❐
╭┄┄┄┄┄┄┄┄┄┄┄┄┄┄
┊ ${prefix}.ʟɪɴᴋɢᴄ
┊ .${prefix}sᴇᴛᴘᴘɢᴄ
┊ ${prefix}.sᴇᴛɴᴀᴍᴇ
┊ ${prefix}.sᴇᴛᴅᴇsᴄ
┊ ${prefix}.ɢʀᴏᴜᴘ
┊ ${prefix}ɢᴄsᴇᴛᴛɪɴs
┊ ${prefix}.ᴡᴇʟᴄᴏᴍᴇ
┊ ${prefix}ᴀᴅᴅ
┊ ${prefix}ᴋɪᴄᴋ
┊ ${prefix}.ʜɪᴅᴇᴛᴀɢ
┊ ${prefix}.ᴛᴀɢᴀʟʟ
┊ ${prefix}.ᴀɴᴛɪʟɪɴᴋ
┊ ${prefix}ᴀɴᴛɪᴛᴏxɪᴄ
┊ ${prefix}ᴘʀᴏᴍᴏᴛᴇ
┊ ${prefix}ᴅᴇᴍᴏᴛᴇ
┊ ${prefix}.ɢᴇᴛʙɪᴏ
╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄❑

   ❐ 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳 𝙼𝙴𝙽𝚄 ❐
╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┊ ${prefix}.ᴀᴘᴋ
┊ ${prefix}ғᴀᴄᴇʙᴏᴏᴋ
┊ ${prefix}ᴍɪᴅᴇᴀғɪʀᴇ
┊ ${prefix}ᴘɪɴᴛᴇʀᴇsᴛᴅʟ
┊ ${prefix}ɢɪᴛᴄʟᴏɴᴇ
┊ ${prefix}ɢᴅʀɪᴠᴇ
┊ ${prefix}ɪɴsᴛᴀ
┊ ${prefix}ʏᴛᴍᴘ3
┊ ${prefix}ʏᴛᴍᴘ4
┊ ${prefix}ᴘʟᴀʏ
┊ ${prefix}sᴏɴɢ
┊ ${prefix}ᴠɪᴅᴇᴏ
┊ ${prefix}ʏᴛᴍᴘ3ᴅᴏᴄ
┊ ${prefix}ʏᴛᴍᴘ4ᴅᴏᴄ
┊ ${prefix}ᴛɪᴋᴛᴏᴋ
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈❑

   ❐ 𝚂𝙴𝙰𝚁𝙲𝙷 𝙼𝙴𝙽𝚄 ❐
╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┊ ${prefix}ᴘʟᴀʏ
┊ ${prefix}ʏᴛs
┊ ${prefix}ɪᴍᴅʙ
┊ ${prefix}ɢᴏᴏɢʟᴇ
┊ ${prefix}ɢɪᴍᴀɢᴇ
┊ ${prefix}ᴘɪɴᴛᴇʀᴇsᴛ
┊ ${prefix}ᴡᴀʟʟᴘᴀᴘᴇʀ
┊ ${prefix}ᴡɪᴋɪᴍᴇᴅɪᴀ
┊ ${prefix}ʏᴛsᴇᴀʀᴄʜ
┊ ${prefix}ʀɪɴɢᴛᴏɴᴇ
┊ ${prefix}ʟʏʀɪᴄs
╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄❑

   ❐ 𝙼𝙰𝙸𝙽 𝙼𝙴𝙽𝚄 ❐
╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┊ ${prefix}ᴘɪɴɢ
┊ ${prefix}ᴀʟɪᴠᴇ
┊ ${prefix}ᴏᴡɴᴇʀ
┊ ${prefix}ᴍᴇɴᴜ
┋ ${prefix}ɪɴғᴏʙᴏᴛ
╰┄┄┄┄┄┄┄┄┄┄┄┄┄┄❑

   ❐ 𝙾𝚆𝙽𝙴𝚁 𝙼𝙴𝙽𝚄 ❐
╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┊ ${prefix}ᴊᴏɪɴ
┊ ${prefix}ʟᴇᴀᴠᴇ
┊ ${prefix}ʙʟᴏᴄᴋ
┊ ${prefix}ᴜɴʙʟᴏᴄᴋ
┊ ${prefix}sᴇᴛᴘᴘʙᴏᴛ
┊ ${prefix}ᴀɴᴛɪᴄᴀʟʟ
┊ ${prefix}sᴇᴛsᴛᴀᴛᴜs
┊ ${prefix}sᴇᴛɴᴀᴍᴇʙᴏᴛ
┊ ${prefix}ᴀᴜᴛᴏᴛʏᴘɪɴɢ
┊ ${prefix}ᴀʟᴡᴀʏsᴏɴʟɪɴᴇ
┊ ${prefix}ᴀᴜᴛᴏʀᴇᴀᴅ
┊ ${prefix}ᴀᴜᴛᴏsᴠɪᴇᴡ
╰┈┈┈┈┈┈┈┈┈┈┈┈┈❑

   ❐ 𝚂𝚃𝙰𝙻𝙺 𝙼𝙴𝙽𝚄 ❐
╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┊ ${prefix}ᴛʀᴜᴇᴄᴀʟʟᴇʀ
┊ ${prefix}ɪɴsᴛᴀsᴛᴀʟᴋ
┊ ${prefix}ɢɪᴛʜᴜʙsᴛᴀʟᴋ
╰┉┈┈┈┈┈┈┈┈┈┈┈┈┈┈❐`

    await Matrix.sendMessage(m.from, {
      image: fs.readFileSync('./media/jinwoo.jpg'),
      caption: str,
      contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: '120363306168354073@newsletter',
          newsletterName: "SAYAN-xMD-V3",
          serverMessageId: 143
        }
      }
    }, {
      quoted: m
    });

    // Send audio after sending the menu
    await Matrix.sendMessage(m.from, {
      audio: { url: 'https://github.com/kinmalvn/KING-DATA/raw/refs/heads/main/autovoice/menunew.m4a' },
      mimetype: 'audio/mp4',
      ptt: true
    }, { quoted: m });
  }
};

export default test;
