# AMETHYST_LP

株式会社AMETHYSTのエンジニア採用ランディングページ

## 技術スタック

- React 18.2.0
- TypeScript 5.2.2
- Vite 5.0.8
- Chakra UI v3.37.0
- Framer Motion 13.4.0

## セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

開発サーバーは http://localhost:5173 で起動します。

## ビルド

```bash
# プロダクションビルド
npm run build
```

ビルドされたファイルは `dist/` フォルダに生成されます。

## GitHub Pagesへのデプロイ

### 初回デプロイ時の設定

1. 以下のコマンドでデプロイ
   ```bash
   npm run deploy
   ```

2. GitHubリポジトリの設定を変更
   - リポジトリページ → **Settings** → **Pages**
   - **Source** セクションで：
     - Branch: **gh-pages** を選択
     - Folder: **/ (root)** を選択
     - **Save** をクリック

3. 数分待つとサイトが公開されます
   - URL: https://masaki-kan.github.io/AMETHYST_LP/

### 2回目以降のデプロイ

```bash
npm run deploy
```

このコマンドで自動的にビルド → GitHub Pagesにデプロイされます。

### トラブルシューティング

デプロイ時にpushエラーが発生した場合：

```bash
git push origin gh-pages --force
```

## プロジェクト構成

```
├── public/              # 静的ファイル（画像など）
├── src/
│   ├── components/      # Reactコンポーネント
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Business.tsx
│   │   ├── Recruit.tsx
│   │   ├── Benefits.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   └── ScrollFadeIn.tsx
│   ├── App.tsx         # メインアプリケーション
│   └── main.tsx        # エントリーポイント
├── package.json
├── vite.config.ts      # Vite設定
└── tsconfig.json       # TypeScript設定
```

## お問い合わせ

Email: hi-kenchu@amethyst0226.co.jp
