# 2022 ポートフォリオ 自己紹介アプリ

### ユーザー(User)がログインして、ぼく(Me)の情報を閲覧することができることを目指しました。
CRUDの機能をつけていますが、あくまで僕のスキル情報が編集、作成、論理削除されます。(詳細は一番下)

front(Next.js):
[https://github.com/TomohiroHagino/nextjs_rails_p_front](https://github.com/TomohiroHagino/nextjs_rails_p_front)

api(Ruby on Rails):
[https://github.com/TomohiroHagino/nextjs_rails_p_api](https://github.com/TomohiroHagino/nextjs_rails_p_api)

1 メインページ 現在はRuby on Railsでの開発が4年ほど。 Next.jsは６ヶ月ほどの経験があります。
<img width="1221" alt="スクリーンショット 2022-01-05 18 15 42" src="https://user-images.githubusercontent.com/43706329/148192350-8ee6b7b0-85b7-4ab7-87ab-e473a5c98a2d.png">

2 モーダル
<img width="1187" alt="スクリーンショット 2022-01-05 18 33 45" src="https://user-images.githubusercontent.com/43706329/148195083-5a4a26e4-aefd-4686-b999-29765536f2b1.png">

3 各ページ(CSR,SSG)
<img width="1189" alt="スクリーンショット 2022-01-05 18 33 59" src="https://user-images.githubusercontent.com/43706329/148195111-ef41c160-ee55-4bce-b17c-5081ee1b61ca.png">

4 Devise token Authのトークン認証機能(各ページ対応)
<img width="1218" alt="スクリーンショット 2022-01-05 19 11 30" src="https://user-images.githubusercontent.com/43706329/148200340-9dd6aff1-7971-4e24-b69f-8559be42d650.png">

5 サインイン
<img width="1201" alt="スクリーンショット 2022-01-05 19 14 08" src="https://user-images.githubusercontent.com/43706329/148200782-4fb1e183-2400-48fc-8f85-d60f72b38f73.png">

6 削除機能(論理削除)、編集機能
<img width="1215" alt="スクリーンショット 2022-01-05 19 04 31" src="https://user-images.githubusercontent.com/43706329/148199737-4bb4e5e0-205e-4bca-83fa-9a52746420a4.png">

7 トースト
<img width="1215" alt="スクリーンショット 2022-01-05 19 05 17" src="https://user-images.githubusercontent.com/43706329/148199748-ee1c66ac-f46e-4b8b-947f-92afe14dd38c.png">

8 バリデーション追加
<img width="1190" alt="スクリーンショット 2022-04-17 23 40 43" src="https://user-images.githubusercontent.com/43706329/163729818-e907b2f6-0019-45a9-bc84-bca7aa10bd00.png">

9 Seaquel Aceを使用しています
<img width="1377" alt="スクリーンショット 2022-01-05 19 09 42" src="https://user-images.githubusercontent.com/43706329/148200027-2dd8d772-0f50-49e7-af33-c0f034e4f8dc.png">

# Docker環境
```
docker-compose up -d
```
# 起動後にapiコンテナとfrontコンテナでサーバーを立ち上げます。
バックエンド Ruby on rails
```
docker-compose exec api ash
rails db:create
rails s -b 0.0.0.0
```
フロントエンド Next.js
```
docker-compose exec front ash
npm run dev
```

# DBダンプデータ
Seaquel Aceでダンプしました。こちらをインポートしてください。  
[portforio2021_development_2022-01-05.sql.txt](https://github.com/TomohiroHagino/nextjs_rails_p_front/files/7813520/portforio2021_development_2022-01-05.sql.txt)

# ER図
### ユーザー(User)がログインして、ぼく(Me)の情報を閲覧することができることを目指しました。
CRUDの機能をつけていますが、あくまで僕のスキル情報が編集、作成、論理削除されます。
![erd](https://user-images.githubusercontent.com/43706329/148190591-ec91116d-22d6-472d-8319-b108b93ebbfe.jpeg)
