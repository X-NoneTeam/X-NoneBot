exports.newMenu = (ucapanWaktu, sender, quote, ownerName, botName, multi, publik, hit, calender, time, latensi, runtime, pushname, isOwner, isPremium, getBalance, balance, prefix) => {
    return`Hii kak @${sender.split('@')[0]} ${ucapanWaktu}✨

Hitung Mundur Bulan Ramadhan
${quote.data.quotes}

👑 Creator : ${ownerName}
🤖 Bot Name : ${botName}
📍 Prefix : ${multi ? 'Multi Prefix' : 'No Prefix'}
📢 Mode : ${publik ? 'Public' : 'Self'}
🌐 Total Hit : ${hit.data.value}
📆 Date : ${calender}
⏰ Time : ${time} WIB
📶 Speed : ${latensi.toFixed(4)} second
⏳ Runtime :
${runtime(process.uptime())}

*「 INFO USER 」*
> Name : ${pushname}
> Status : ${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Gratisan'}
> Nomor : ${sender.split('@')[0]}
> Balance : $${(getBalance(sender, balance))}

( 💢 ) *Information*
• ${prefix}owner
• ${prefix}delete
• ${prefix}stats
• ${prefix}ping
• ${prefix}runtime
• ${prefix}donate
• ${prefix}sewabot
• ${prefix}sc
• ${prefix}listpremium

( 👥 ) *Group Menu*
• ${prefix}nsfw
• ${prefix}event
• ${prefix}antilink
• ${prefix}antivirtex
• ${prefix}antiwame
• ${prefix}antitele
• ${prefix}antibitly
• ${prefix}antilinkyt
• ${prefix}opengrup
• ${prefix}closegrup
• ${prefix}promote
• ${prefix}demote
• ${prefix}setgcname
• ${prefix}setdesc
• ${prefix}hidetag
• ${prefix}kick
• ${prefix}promoteall
• ${prefix}demoteall
• ${prefix}revoke
• ${prefix}sider

( ✍🏻 ) *Tools Menu*
• ${prefix}attp
• ${prefix}sticker
• ${prefix}takestick
• ${prefix}toimg
• ${prefix}ssweb
• ${prefix}nulisbuku
• ${prefix}nulisfolio
• ${prefix}tts
• ${prefix}tourl
• ${prefix}tovn

( 📁 ) *Downloads Menu*
• ${prefix}play
• ${prefix}ytmp3
• ${prefix}ytmp4
• ${prefix}instagram
• ${prefix}tiktok
• ${prefix}facebook
• ${prefix}mediafire

( 🔍 ) *Search Menu*
• ${prefix}ytsearch
• ${prefix}pinterest
• ${prefix}groupsearch
• ${prefix}lyrics
• ${prefix}wiki
• ${prefix}herolist
• ${prefix}herodetail

( 🐆 ) *Rpg Menu*
• ${prefix}joinrpg
• ${prefix}inventory
• ${prefix}adventure
• ${prefix}mining
• ${prefix}mancing
• ${prefix}sellikan
• ${prefix}sellbesi
• ${prefix}sellemas
• ${prefix}selldiamond
• ${prefix}topleaderboard

( 🕹️ ) *Game Menu*
• ${prefix}tictactoe
• ${prefix}suit
• ${prefix}slot
• ${prefix}tebakgambar
• ${prefix}caklontong
• ${prefix}tebakkalimat
• ${prefix}tebakkata
• ${prefix}tebaklirik
• ${prefix}family100

( 🐚 ) *Kerang Menu*
• ${prefix}cekganteng
• ${prefix}cekcantik
• ${prefix}apakah
• ${prefix}bisakah
• ${prefix}kapankah
• ${prefix}jadian
• ${prefix}cantik
• ${prefix}ganteng
• ${prefix}babi
• ${prefix}beban
• ${prefix}rate

( 📝️ ) *Absen Menu*
• ${prefix}mulaiabsen
• ${prefix}cekabsen

( 🔀 ) *Random Menu*
• ${prefix}couple
• ${prefix}darkjokes
• ${prefix}meme
• ${prefix}quoteslucu
• ${prefix}quotes
• ${prefix}cerpen
• ${prefix}faktaunik
• ${prefix}katabijak
• ${prefix}truth
• ${prefix}dare

( ♀️ ) *Asupan Menu*
• ${prefix}asupan
• ${prefix}santuy
• ${prefix}bocil
• ${prefix}ukhty
• ${prefix}rikagusriani
• ${prefix}ghea

( 🦋 ) *Cecan Menu*
• ${prefix}china
• ${prefix}hijab
• ${prefix}indon
• ${prefix}japan
• ${prefix}korea
• ${prefix}malay

( 🌈 ) *Nsfw Menu*
• ${prefix}awoo
• ${prefix}blowjob
• ${prefix}hentai
• ${prefix}megumin
• ${prefix}neko
• ${prefix}trapnime

( ➿ ) *Waifu Menu*
• ${prefix}loli
• ${prefix}husbu
• ${prefix}shota
• ${prefix}cosplay
• ${prefix}wallml

( 🤖 ) *JadiBot Menu*
• ${prefix}jadibot
• ${prefix}stopjadibot
• ${prefix}listjadibot

( 🎨 ) *Text Pro Menu*
• ${prefix}pornhub
• ${prefix}glitch
• ${prefix}gameover
• ${prefix}grafity
• ${prefix}grafity2
• ${prefix}logowolf

( 👑 ) *Owner Menu*
• ${prefix}mode
• ${prefix}public
• ${prefix}self
• ${prefix}exif
• ${prefix}addpremium
• ${prefix}delpremium
• ${prefix}setcmd
• ${prefix}delcmd
• ${prefix}listcmd
• ${prefix}setprefix
• ${prefix}setprofile
• ${prefix}setname
• ${prefix}setbio
• ${prefix}bc
• ${prefix}tobc
• ${prefix}join
• ${prefix}leave
• ${prefix}peson
• ${prefix}pesoff
• ${prefix}mute
• ${prefix}unmute
• ${prefix}return
• ${prefix}culik`
}
