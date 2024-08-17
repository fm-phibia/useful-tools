import axios from "axios";
import dotenv from 'dotenv';

// .envファイルの内容を読み込む
dotenv.config();

const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;

export const sendToSlackWithWebhook = async (message: string) => {
  try {
    await axios.post(SLACK_WEBHOOK_URL!, {
      text: message,
    });
    console.log('Message sent to Slack successfully!');
  } catch (error) {
    console.error('Error sending message to Slack:', error);
  }
};
