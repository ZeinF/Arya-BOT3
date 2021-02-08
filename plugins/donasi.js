let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Smartfren [~]
│ • Telkomsel [082154994100]
│ • Gopay [~]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6282154994100
╰────

Ini *#caranya untuk Donasi*
*Cara Donasi*:
1.) Beli ke pulsa/ konter terdekat semisal Indomaret
2.) Bilang ke konter terdekat..
"Beli pulsa telkomsel"
3.)Dan terus masukkan nomor kami 082154994100
4.) Seikhlasnya saja ya kak😊
*Kalau tidak juga gapapa*
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
