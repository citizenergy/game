export default [
  {
    id: 'industry',
    type: 'quiz',
    title: '身為重視生活步調的外星人...',
    subtitle: '我喜歡住在：',
    description: '',
    option: [
      {
        display: '熱鬧的城市',
        value: 'city',
      },
      {
        display: '樸實的鄉村',
        value: 'village',
      },
    ],
  },
  {
    id: 'plant',
    type: 'quiz',
    title: '我想過人類的文明生活（握拳）',
    subtitle: '... 結果發現不能沒有電 XD',
    description: '住在哪種電廠旁邊好勒？',
    option: [
      {
        display: '太陽光',
        value: 'solar',
      },
      {
        display: '風力',
        value: 'wind',
      },
      {
        display: '水力',
        value: 'hydro',
      },
      {
        display: '火力',
        value: 'thermal',
      },
      {
        display: '核能',
        value: 'nuclear',
      },
    ],
  },
  {
    id: 'number_one',
    type: 'tutorial',
    title: '剛才出來勘查電廠，遇到一群熱情的鄉民 :o',
    subtitle: '圍著我拍手，說恭喜來到亞洲第一島 o_O',
    description: '聽不懂在供蝦密啊！看他們一臉萌樣，所謂的亞洲第一大概是這種第一吧？',
    option: [
      {
        display: '電費亞洲第一貴',
        value: 'charge',
      },
      {
        display: '每個人的用電量亞洲第一高',
        value: 'usage',
      },
      {
        display: '二氧化碳排放量亞洲第一名',
        value: 'co2',
      },
    ],
  },
  {
    id: 'main_consumer',
    type: 'tutorial',
    title: '額，原來台灣人這麼會用電，還真看不粗乃 :Q',
    subtitle: '我猜一定是這樣用的吧',
    description: '',
    option: [
      {
        display: '工業用電最兇',
        value: 'industrial',
      },
      {
        display: '住宅用電最兇',
        value: 'residential',
      },
      {
        display: '商業用電最兇',
        value: 'commercial',
      },
    ],
  },
  {
    id: 'saving',
    type: 'quiz',
    title: '然後鄉民跟我說，台灣的電已經快不夠用了 @@',
    subtitle: '我得配合他們省電，才能住下來 orz',
    description: '該用什麼方法省電呢...',
    option: [
      {
        display: '應該先請那些用電特別兇的人省電呀！我省一個月也比不上人家省一天',
        value: 'big_customer',
      },
      {
        display: '讓我知道家裡用電的詳細狀況就好，我會自己找到省電的辦法',
        value: 'self_info',
      },
      {
        display: '愛賭才會贏！一定要有抽獎我才會想配合啦！',
        value: 'lotte',
      },
      {
        display: '節能四',
        value: '節能四',
      },
      {
        display: '節能五',
        value: '節能五',
      },
      {
        display: '好麻煩喔，先不理它好惹',
        value: 'none',
      },
    ],
  },
  {
    id: 'rush_hour',
    type: 'tutorial',
    title: '是說，省電沒省在刀口上的話也是白搭吧？',
    subtitle: '聰明的我一定要專門挑尖峰時段來省電的啦！',
    description: '依我看，台灣的用電尖峰時段一定是...',
    option: [
      {
        display: '冬天半夜 11 點到 1 點',
        value: 'night',
      },
      {
        display: '夏天下午 1 點到 3 點',
        value: 'noon',
      },
      {
        display: '夏天晚上 9 點到 11 點',
        value: 'evening',
      },
    ],
  },
  {
    id: 'green',
    type: 'quiz',
    title: '鄉民說如果很不會省電的話...',
    subtitle: '幫他們發展循環利用的能源也行。',
    description: '我可以做的是：',
    option: [
      {
        display: '那我來挑個綠能、儲能、節能全部都有的智慧社區來住好囉',
        value: 'smart_complex',
      },
      {
        display: '看我用腳投票給開發地熱、或者在公共空間屋頂裝太陽能板的縣市～',
        value: 'public_service',
      },
      {
        display: '綠能三',
        value: '綠能三',
      },
      {
        display: '綠能四',
        value: '綠能四',
      },
      {
        display: '綠能五',
        value: '綠能五',
      },
      {
        display: '好複雜喔，先不理它好惹',
        value: 'none',
      },
    ],
  },
  {
    id: 'participative',
    type: 'quiz',
    title: '甚至還有一些更前衛（？）的選項 :Q ...',
    subtitle: '來看看這裡面有沒有我喜歡的！',
    description: '',
    option: [
      {
        display: '縣市政府拿綠能多賺到的錢回饋給公益使用',
        value: 'money_back',
      },
      {
        display: '縣市政府跟鄉民一起制定能源政策',
        value: 'policy_making',
      },
      {
        display: '參與三',
        value: '參與三',
      },
      {
        display: '參與四',
        value: '參與四',
      },
      {
        display: '參與五',
        value: '參與五',
      },
      {
        display: '好困難喔，先不理它好惹',
        value: 'none',
      },
    ],
  },
]
