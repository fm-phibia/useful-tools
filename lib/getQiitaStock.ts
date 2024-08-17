import axios from 'axios';
import dotenv from 'dotenv';

// .envファイルの内容を読み込む
dotenv.config();

// .envからQiitaのアクセストークンとユーザーIDを取得
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
const USER_ID = process.env.USER_ID;

// Qiita APIのエンドポイント
const API_URL = `https://qiita.com/api/v2/users/${USER_ID}/stocks?per_page=100`;

interface Stock {
  title: string;
  url: string;
}

// ストックの項目を取得する関数
const getStocks = async (pageNo: number) => {
  try {
    const response = await axios.get(API_URL + `&page=${pageNo}`, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });
    const stocksData = response.data as Stock[];
    return stocksData;
  } catch (error) {
    console.error('Error fetching likes:', error);
  }
}

export const getAllStocks = async () => {
  let pageNo = 1;
  let loadFlg = true;
  const stocks: Stock[] = [];
  while (loadFlg) {
    console.log(`Fetching page ${pageNo}...`);
    const stocksData = await getStocks(pageNo);
    if (typeof stocksData !== 'undefined') {
      if (stocksData.length < 100) {
        loadFlg = false;
      }
      stocks.push(...stocksData);
    }
    pageNo++;
  }
  return stocks;
}
