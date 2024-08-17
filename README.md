# useful-tools

## 準備

### ライブラリ追加

初回は`ts-node`をインストールすること

```bash
npm install -g ts-node
```

### .env

`.env.template`をコピーして`.env`として利用します。

```bash
cp .env.template .env
```

`.env`には、各パラメータを追加します。

Incoming Webhook を使用する場合、「SLACK_WEBHOOK_URL」は必須、「SLACK_BOT_TOKEN」「SLACK_CHANNEL_ID」は不要。
chat.postMessage を利用する場合は、「SLACK_BOT_TOKEN」「SLACK_CHANNEL_ID」は必須、「SLACK_WEBHOOK_URL」は不要。
将来、Incoming Webhook は削除される可能性があるため、後者を利用することをお勧めします。

参考: https://w1723855707-ntx771807.slack.com/apps/A0F7XDUAZ--incoming-webhook-?tab=more_info

# 定期実行用

以下のコマンドで、TypeScript をトランスパイルして JavaScript にします。

```bash
npx tsc index.ts
```

次に`shell/run.template.sh`を複製し、`shell/run.sh`と名前を変更します。

```bash
cp shell/run.template.sh shell/run.sh
```

次に`shell/run.sh`の`DIR_PATH`と`NODE_PATH`を設定します。
`DIR_PATH`はこのプロジェクトのルートパスを、`NODE_PATH`には、以下のコマンドを実行した際に表示されるディレクトリパスを設定します。

```bash
which node
```

さらに`run.sh`の権限を以下のコマンドで変更します。

```bash
chmod +x shell/run.sh
```
