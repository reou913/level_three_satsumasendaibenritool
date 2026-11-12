# データの出どころ（sources.md）

このサイトのJSONは、このファイルに書かれたページだけを元に作ります。
書かれていない名前・住所・電話番号は推測で作らず、空欄にします。

## 1. 夜間・休日の病院（救急当番医）

**扱い：中身は読み取らず、リンクと説明文だけ載せる**（当番医は日によって変わるため）

メインのリンク（URLが毎月変わらない）
- 薩摩川内市消防局「当番医」：https://www.satsumasendai-fd.jp/hp/toubani_1.php
  - 休日の当番医や病院の連絡先・地図。日付・病院名・診療科・電話・場所が表になっている
- デジタル広報薩摩川内（救急当番医）：https://koho-satsumasendai.jp/
  - 月ごとのページは https://koho-satsumasendai.jp/emergency/202511 のように「/emergency/年月」の形

市の公式ページ（ページ番号9730は同じで、毎月中身が書きかわる）
- 「救急当番医」：https://www.city.satsumasendai.lg.jp/soshiki/1224/1226/2/1/9730.html
  - 2026年11月12日に確認。組織の変更で、前のURL（/soshiki/1028/3/2/1/9730.html）から変わっていた
- 担当：健康保険部 保健政策課 地域医療グループ（0996-23-5111）（2026年11月12日に確認。前の「保健福祉部 市民健康課」から変わっていた）

※ 消防局の夜間当番医のページ（スマホ版）は、2026年11月12日の時点で「メンテナンス中」でした。

説明文として載せる内容（デジタル広報 https://koho-satsumasendai.jp/emergency/202511 で確認）
- 夜間に受診が必要な場合は午後6時から、原則午後11時まで。事前に電話で連絡のうえ受診する
- 昼間の当番医は8時30分〜18時。小児科は各施設の診療時間
- 休日歯科診療の受け付けは9時〜12時
- 医師会立市民病院の平日の夜間救急当番日の小児診療は、事前に電話で問い合わせる
- 急な変更は、消防テレフォンサービス（0996-27-1199）でも確認できる

関連する病院
- 川内市医師会立市民病院：https://sendaihp.jp/

## 2. 緊急・相談の電話番号

**扱い：電話番号の一覧としてJSONにする**

- 119：火事・救急
- 110：警察（事件・事故）
- #9110：警察の相談窓口（緊急でないとき）
- #8000（または 099-254-1186）：鹿児島県 小児救急電話相談
  - 平日・土曜日は19時〜翌8時、日曜日・祝日・年末年始は8時〜翌8時
  - 出典：上の市の救急当番医のページ
- 118：海上保安庁（海の事故）
- 189：児童相談所
- 188：消費者ホットライン
- 0996-27-1199：消防テレフォンサービス（当番医の急な変更の確認）
- #7119：鹿児島県では導入を検討中のため載せない

## 3. 保育園・幼稚園

**扱い：一覧のJSONにする**（園名・種類・住所・電話・定員・保育時間）

- 保育施設等一覧（市に申し込みが必要な施設）：https://www.city.satsumasendai.lg.jp/kosodate_kyoiku/kosodate/4/16678.html
  - 認定こども園・保育所・地域型保育。園名・住所・定員・保育時間・電話が表になっている
  - 同じ内容が https://www.city.satsumasendai.lg.jp/soshiki/1026/1/1/1/16659.html にもあり、こちらは令和9年4月時点の情報。**新しい年度の方を1つだけ使う**
  - 2026年11月12日に確認：どちらも「令和9年4月の予定（令和8年11月1日現在）」で同じ内容（2026年10月19日更新）。カテゴリ形式の 16678.html を元データにした
- 私立幼稚園・認定こども園（1号認定）：https://www.city.satsumasendai.lg.jp/kosodate_kyoiku/kosodate/4/6812.html
- 企業主導型保育・認可外保育施設：https://www.city.satsumasendai.lg.jp/soshiki/1026/1/1/3/2460.html
  - 開所時間も載っている
- こども誰でも通園制度の実施施設：https://www.city.satsumasendai.lg.jp/20250808/19291.html

使わないページ
- 公共施設案内（保育所など）：https://www.city.satsumasendai.lg.jp/kurashi_tetsuzuki/lifeservice_sodan/2/5543.html
  - 2023年の更新のままで古い可能性があるため

## 4. 子育て

### 放課後児童クラブ

**扱い：リンクだけ載せる**

- 一覧ページ：https://www.city.satsumasendai.lg.jp/soshiki/1026/1/1/3/1595.html
- 一覧PDF：https://www.city.satsumasendai.lg.jp/material/files/group/20/houkagojidoukurabu.pdf
- 申し込みは、希望する児童クラブに直接

### 地域子育て支援センター（8か所）

**扱い：一覧のJSONにする**（名前・所在地・電話）。個別サイトのURLは古い「http://」が多いので、開けるか確かめるまで載せない

- 一覧ページ：https://www.city.satsumasendai.lg.jp/soshiki/1026/1/1/2/1589.html

| センター名 | 所在地 | 電話 | 個別サイト（未確認） |
| --- | --- | --- | --- |
| すくすくランド（育英保育園内） | 中郷四丁目187 | 22-5800 | http://www5.synapse.ne.jp/ikuei/ |
| ほっとランド（清水丘保育園内） | 宮里町3048-9 | 22-8313 | http://kiyomizugaokahoikuen.net/ |
| ぱぴぃら（純心幼稚園内） | 隈之城町1001 | 25-1815 | http://www.k-junshin.ac.jp/kodomo/ |
| すわっこ（すわこども園内） | 樋脇町市比野550 | 38-1193 | http://www.suwa-kodomoen.com/ |
| スマイリィ（青山幼稚園内） | 青山町4194 | 20-0775 | http://ishihara.ed.jp/index.html |
| おいでおいで | 西向田町18-26 | 20-6682 | なし |
| ぽけっと（せんだい幼稚園） | 平佐町3669-1 | 080-2779-6723 | http://www.s-kinder.com/ |
| てとて（川内すわこども園内） | 御陵下町19-5 | 20-2630 | http://www.sendaisuwa.com/ |

- 開所時間は市のページに書かれていないので空欄にする
- 市外局番が書かれていない番号は 0996 を付けて発信できるようにする

### その他の子育てページ

**扱い：リンクだけ載せる**

- さつませんだい こそだてサポートネット（支援センターだより）：https://www.kosodate-support-satsumasendai.jp/support/619/
- 子育ての利用者支援（相談案内）：https://www.kosodate-support-satsumasendai.jp/support/1118/
- 児童福祉・ひとり親福祉の一覧（ファミサポ・病児保育など）：https://www.city.satsumasendai.lg.jp/kosodate_kyoiku/kosodate/5/index.html
- ファミリー・サポート・センター薩摩川内：https://www.city.satsumasendai.lg.jp/soshiki/1026/1/1/3/149.html

## 5. ごみ

**扱い：要点の文章と、リンクの表にする。地区別カレンダーPDFは中身を読み取らない**

本土（川内・樋脇・入来・東郷・祁答院）
- 分け方・出し方・ごみ出しカレンダー：https://www.city.satsumasendai.lg.jp/kurashi_tetsuzuki/gomi_recycle/1/1/5652.html
- 燃やせるごみは指定袋（透明）で、収集日当日の朝8時までに、決められた収集所へ出す
- 地区別カレンダーPDF（令和8年度、14地区）：https://www.city.satsumasendai.lg.jp/material/files/group/14/ の後ろにファイル名を付けた形
  - 例：sendai2026.pdf、kumanojyou2026.pdf、tougou2026.pdf など
  - 地区名とファイル名の対応は、上の分け方・出し方のページのリンクから取る（推測でファイル名を作らない）
- 分別ハンドブックもあり、英語・中国語・ベトナム語などの版がある

甑島（里・上甑・下甑・鹿島）
- https://www.city.satsumasendai.lg.jp/lifescene/gomi_kankyo/1/5332.html
- 2026年11月12日に確認：燃やせるごみ（透明の指定袋）・燃やせないごみ（赤の指定袋）とも、収集日当日の朝8時00分までに出す。資源ごみは自治会で決められた日時・場所
- ※ 前の調べでは「名前を書いて朝8時30分まで」となっていたが、今のページにはそう書かれていない
- 地区別カレンダーPDF（令和8年度）：sato2026.pdf、kamikosiki2026.pdf、nagahama2026.pdf、teuti2026.pdf

粗大ごみ・直接搬入
- https://www.city.satsumasendai.lg.jp/soshiki/1005/1/2/2/2837.html（ページの題名は「ごみ処理」、2026年6月19日更新）
- 2026年11月12日に確認：粗大ごみの詳しい出し方は「ごみの分別ハンドブック」「ごみ出しカレンダー」を見るよう案内している
- 手数料（家庭系ごみをクリーンセンターへ持ち込むとき）：100kg以下は300円。100kgを超えるごとに300円を加算（100kg未満の端数は100kgとみなす）
- ※ 前の調べにあった「直接搬入するか、許可業者に収集を頼む」という文は、このページでは見つからなかった
- クリーンセンターの住所・受付時間・休業日は書かれていないので空欄にする
- 問い合わせ：市民安全部 環境課 廃棄物政策グループ（0996-23-5111）

発火性危険物（電池類など）
- https://www.city.satsumasendai.lg.jp/kurashi_tetsuzuki/gomi_recycle/1/1/16151.html

## 6. 要望（市への正式な窓口）

**扱い：リンクだけ載せる。このサイトの投稿は市への正式な要望ではないと明記する**

- 市民の声（入口）：https://www.city.satsumasendai.lg.jp/gyoseijoho/kocho/7/index.html
- ご意見・お問い合わせ：https://www.city.satsumasendai.lg.jp/soshiki/1042/2/11-2/1/1979.html
- メールフォーム：https://www.city.satsumasendai.lg.jp/cgi-bin/inquiry.php/1?page_no=1979
- 「市長への手紙」は専用のWebページがない。メールフォームか、各庁舎のご意見箱に専用用紙を入れる
- 寄せられた意見と回答の公表（例：令和7年7〜9月）：https://www.city.satsumasendai.lg.jp/gyoseijoho/kocho/7/18146.html
- eまちアンケート：https://www.city.satsumasendai.lg.jp/soshiki/1042/2/11-2/7/2987.html

## 7. 高齢者・介護（あとから増やす項目）

**扱い：地域包括支援センターの一覧と、リンクだけ載せる**

- 高齢・介護福祉（入口）：https://www.city.satsumasendai.lg.jp/iryo_kenko_fukushi/koreishafukushi_kaigo/index.html
- 地域包括支援センター・在宅介護支援センター（住所・電話の一覧）：https://www.city.satsumasendai.lg.jp/soshiki/1042/2/15/1/330.html
  - 例：薩摩川内市地域包括支援センター｜〒895-0005 永利町4107番地1（市総合福祉会館内）｜0996-24-3331
- 介護サービス情報公表システム（鹿児島県版）：https://www.kaigokensaku.mhlw.go.jp/46/

使わないページ
- 介護保険サービス提供事業所一覧（令和3年9月1日現在）のPDF：古いため
- 公共施設案内（福祉施設）：更新が古いため

## 制作のメモ

- 市の公式サイトは、同じページに複数のURL（/soshiki/... と /kosodate_kyoiku/... など）が付いていることがある。リンク切れに備えて、カテゴリ形式のURL（/kosodate_kyoiku/... など）をメインにする
- 一部のページは2023年の更新のまま。営業時間などは、公開前に各施設に確認したほうが安全
- 川内市医師会の公式サイトは、今も有効か確認できていないので載せない
- このリストも別のAIが調べたもの。JSONができたら、電話番号と住所を元のページと見比べてから公開する
