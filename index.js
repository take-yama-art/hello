// 年間の売上と利益のデータ
const report = [
    {
      month: '1',
      revenue: 7700000,
      profit: 1166900,
    },
    {
      month: '2',
      revenue: 8500000,
      profit: 320300,
    },
    {
      month: '3',
      revenue: 8600040,
      profit: 900030,
    },
    {
      month: '4',
      revenue: 9000003,
      profit: 1520000,
    },
    {
      month: '5',
      revenue: 8100000,
      profit: 1220890,
    },
    {
      month: '6',
      revenue: 8772652,
      profit: 610300,
    },
    {
      month: '7',
      revenue: 8087550,
      profit: 910300,
    },
    {
      month: '8',
      revenue: 9985166,
      profit: 543200,
    },
    {
      month: '9',
      revenue: 8448764,
      profit: 741200,
    },
    {
      month: '10',
      revenue: 8406786,
      profit: 342210,
    },
    {
      month: '11',
      revenue: 8094797,
      profit: 710190,
    },
    {
      month: '12',
      revenue: 8838988,
      profit: 815610,
    },
]
// グラフのラベルの空配列
let report_label = []

for (let i = 0; i < report.length; i++) {
  // 連想配列から key を指定して、month の値を取得
  let month = report[i].month
  // month の後に月という文字を結合
  month = month + '月'
  // 連想配列から key を指定して、month の値を取得
  report_label.push(month)
}

console.log(report_label)


// グラフの描画
// chart を表示する canvas タグの id を指定
const ctx = document.getElementById('myChart').getContext('2d')
// Chart クラスをインスタンス化
const myChart = new Chart(ctx, {
  //グラフのタイプ
  type: 'bar',
  data: {
    //ラベル
    labels: report_label,
    // グラフで可視化するデータ
    datasets: [
      {
        label: '売上', // ラベル
        data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 12ヶ月分、全データを1とする
        borderWidth: 1, // 棒グラフの枠線の太さ
      },
    ],
  },
})