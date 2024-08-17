import axios from "axios";
import dotenv from 'dotenv';

// .envファイルの内容を読み込む
dotenv.config();

const SLACK_BOT_TOKEN = process.env.SLACK_BOT_TOKEN;
const SLACK_CHANNEL_ID = process.env.SLACK_CHANNEL_ID;

export const sendToSlack = async (message: string) => {
  console.log(SLACK_BOT_TOKEN);
  console.log(SLACK_CHANNEL_ID);
  try {
    const response = await axios.post('https://slack.com/api/chat.postMessage', {
      channel: SLACK_CHANNEL_ID,
      text: message,
    }, {
      headers: {
        'Authorization': `Bearer ${SLACK_BOT_TOKEN}`,
        'Content-Type': 'application/json',
      }
    });

    if (response.data.ok) {
      console.log('Message sent to Slack successfully!');
    } else {
      console.error('Error sending message to Slack:', response.data);
    }
  } catch (error) {
    console.error('Error sending message to Slack:', error);
  }
};
