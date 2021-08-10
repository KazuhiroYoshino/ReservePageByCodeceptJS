# ReservePageByCodeceptJS
## Selenium練習サイトをCodeceptJSでテストします。
### 宿泊初日の曜日と連泊数によっては、週末料金が適用される点がテストのポイントの1つです。

* reserve_test.jsがテストケースになります。
* ほぼ、CodetestJSに含まれるステップで事足りるのですが、カスタムステップをstep_file.jsとしています。
* テストデータで指定される初日の曜日と今日の日付から、テストする宿泊初日を指定するロジックはconnector.jsに含まれます。
* 連泊数を初日に加算して最終日を算出するロジックもconnector.jsに含まれます。
