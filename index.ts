import { getAllStocks } from "./lib/getQiitaStock";
import { sendToSlack } from "./lib/sendToSlack";
// import { sendToSlackWithWebhook } from "./lib/sendToSlackWithWebhook";

const stocks = getAllStocks();
stocks.then((data) => {
  const max = data.length - 1;
  const index = Math.floor(Math.random() * max);
  const sendMessage = "Qiitaにストックした記事を読みましょう！\n\n【" + data[index].title + "】\n" + data[index].url;
  sendToSlack(sendMessage);
  // sendToSlackWithBlocks(sendMessage);
});
