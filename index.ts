import { getAllStocks } from "./lib/getQiitaStock";

const stocks = getAllStocks();
stocks.then((data) => {
  const max = data.length - 1;
  const index = Math.floor(Math.random() * max);
  console.log(data[index].title);
  console.log(data[index].url);
});
