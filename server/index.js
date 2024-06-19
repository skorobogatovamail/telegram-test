const TelegramBot = require("node-telegram-bot-api");
require("dotenv").config();

const token = process.env.TOKEN;
const webAppUrl = "/";
const bot = new TelegramBot(token, { polling: true });

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text === "/start") {
    await bot.sendMessage(chatId, "Заполни форму", {
      reply_markup: {
        keyboard: [[{ text: "Заполнить форму" }]],
      },
    });

    // await bot.sendMessage(chatId, "Сделай заказ", {
    //   reply_markup: {
    //     inline_keyboard: [
    //       [{ text: "Сделать заказ", web_app: { url: webAppUrl } }],
    //     ],
    //   },
    // });
  }

  bot.sendMessage(chatId, "Received your message");
});
