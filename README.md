# README

# タイトル:VoteApp
<img width="1440" alt="スクリーンショット 2020-04-15 15 21 16" src="https://user-images.githubusercontent.com/61044016/79304711-e83fb800-7f2c-11ea-8436-4f4e008e9b8a.png"><br><br><br>

# アプリの説明
このアプリはプログラミング学習関連の投票アプリです。<br>
オススメオンライン教材、MacBookのスペック、オススメTwitterユーザーの3項目を投票し、閲覧する事ができます。<br><br><br>

# UPDATE予定
・画像の投稿機能と、アマゾンや楽天へのリンクを付与したオススメ書籍の投票項目を追加<br>
・学習ロードマップの投票項目を追加<br><br><br>

# 本番環境URL
https://vote--app.herokuapp.com/<br><br><br>

# 各ページ説明

## トップページ

各項目の投票結果を選択して閲覧する事ができます。<br>
投票するにはTwitterアカウントでのログインが必要です。

<img width="1440" alt="スクリーンショット 2020-04-15 15 21 16" src="https://user-images.githubusercontent.com/61044016/79304711-e83fb800-7f2c-11ea-8436-4f4e008e9b8a.png"><br><br>

## 投票ページ

Twitterアカウントでのログインが完了するとこのページに移動します。<br>
投票したい項目を選択すると各投票ページに移動します。

<img width="1440" alt="スクリーンショット 2020-04-15 15 27 23" src="https://user-images.githubusercontent.com/61044016/79309550-6f912980-7f35-11ea-8ca0-057b31b0974a.png">
<br><br>

## オススメオンライン教材投票ページ

すでに投稿されている教材をいいね機能で投票する事ができます。<br>
自動で投票数が多い順にソートされます。

<img width="1440" alt="スクリーンショット 2020-04-15 15 27 46" src="https://user-images.githubusercontent.com/61044016/79309553-70c25680-7f35-11ea-9297-58543aa3319d.png"><br><br>

教材を新規登録ボタンを押すとこの画面に移動します。<br>
投票した教材が無い場合、ここから新規投稿する事ができます。

<img width="1440" alt="スクリーンショット 2020-04-15 15 27 56" src="https://user-images.githubusercontent.com/61044016/79309558-7324b080-7f35-11ea-8f62-188879f9f225.png"><br><br>

## オススメTwitterユーザー投票機能

いいねする→いいね機能で投票する事ができます。<br>
ランキング→投票数でソートされたページに移動します。<br>
新規登録→投票したいユーザーが存在しない場合新規登録する事ができます。<br><br>
検索フォームにキーワードを入力すると候補が表示され、クリックすると一番上にスライドします。<br>
また、ユーザー名をクリックすると選択したユーザーのTwitterページに移動します。

![twitter](https://user-images.githubusercontent.com/61044016/79305770-f7c00080-7f2e-11ea-9d31-8363346d44e6.gif)<br><br>

## MacBookのスペック投票ページ

指示に従って使用中のMacBookのスペックを投票する事ができます。

![mac](https://user-images.githubusercontent.com/61044016/79311236-170f5b80-7f38-11ea-8c40-b236b4b12f1d.gif)<br><br>

投票を完了すると投票結果のページに移動します。
![mac2](https://user-images.githubusercontent.com/61044016/79311366-49b95400-7f38-11ea-92bc-8c7d03a82b0a.gif)<br><br>

# DB設計

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|provider|string||
|uid|string||
|nickname|string||
|name|string||
|image_url|string||
|description|string||

### Association
- has_many :twitters, dependent: :destroy
- has_many :twitters, through: :likes

## twittersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string||
|user_id|integer|foreign_key: true|

### Association
- belongs_to :user
- has_many :users, through: :likes

### Validation
- validates :name, uniqueness: true, presence: true, length: { maximum: 16 }

## macsテーブル

|Column|Type|Options|
|------|----|-------|
|spec|integer||
|cpu|integer||
|memory|integer||
|storage|integer||

## onlinesテーブル

|Column|Type|Options|
|------|----|-------|
|name|string||
|user_id|integer|foreign_key :true|

### Association
- belongs_to :user
- has_many :users: :like2s

### Validation
- validates :name, uniqueness: true, presence: true, length: { maximum: 20 }

## likesテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|foreign_key: true|
|twitter_id|integer|foreign_key :true|

### Association
- belongs_to :user
- belongs_to :twitter
## likes2テーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|foreign_key: true|
|online_id|integer|foreign_key :true|

### Association
- belongs_to :user
- belongs_to :online



