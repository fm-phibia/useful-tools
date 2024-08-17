import { getAllStocks } from "./lib/getQiitaStock";
import { sendToSlack } from "./lib/sendToSlack";

const stocks = getAllStocks();
stocks.then((data) => {
  const max = data.length - 1;
  const index = Math.floor(Math.random() * max);
  sendToSlack("Qiitaにストックした記事を読みましょう！\n\n【" + data[index].title + "】\n" + data[index].url);
});
