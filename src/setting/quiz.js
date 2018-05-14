export default [
  {
    id: 'industry',
    type: 'quiz',
    background: [
      '這個神秘的島嶼上有19個縣市，處處有獨特的風光和生活步調',
      '你希望住在怎麼樣的地方？',
    ],
    question: [
      '「我喜歡住在……」',
    ],
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
      {
        display: '隨便啦都可以',
        value: 'none',
      },
    ],
  },
  {
    id: 'plant',
    type: 'quiz',
    background: [
      '台灣人的日常總離不開電力，為維持全台的舒適生活，島上蓋了各式各樣的發電廠，',
      '你必須選擇跟某個發電廠住在一起。',
    ],
    question: [
      '「唔……要住在哪種電廠旁邊呢？」',
    ],
    description: '',
    option: [
      {
        display: '太陽能板',
        value: 'solar',
      },
      {
        display: '風機',
        value: 'wind',
      },
      {
        display: '水庫',
        value: 'hydro',
      },
      {
        display: '燃煤電廠',
        value: 'thermal',
      },
      {
        display: '核電廠',
        value: 'nuclear',
      },
      {
        display: '我不要住電廠旁邊！',
        value: 'no_plant',
      },
    ],
  },
  {
    id: 'number_one',
    type: 'tutorial',
    background: [
      '終於在島上安頓下來！你聽到「叮咚」的門鈴聲，一打開門，',
      '一群熱情的鄰居大喊：「恭喜來到亞洲第一島！」你臉上露出了黑人問號。',
    ],
    question: [
      '「看他們一臉萌樣……',
      '所謂亞洲第一，大概是指台灣這種第一吧？」',
    ],
    description: '',
    option: [
      {
        display: '電費，亞洲第一貴',
        value: 'charge',
      },
      {
        display: '每人的年平均用電量，亞洲第一高',
        value: 'usage',
      },
      {
        display: '二氧化碳排放量，亞洲第一名',
        value: 'co2',
      },
    ],
  },
  {
    id: 'main_consumer',
    type: 'tutorial',
    background: [
      '名列亞洲第一的台灣，每年的用電量仍然不斷上升，有進無退！',
      '到底電力都花到哪去了呢？',
    ],
    question: [
      '「我想，一直以來都是…」',
    ],
    description: '',
    option: [
      {
        display: '工業用電最兇！',
        value: 'industrial',
      },
      {
        display: '住宅用電最兇！',
        value: 'residential',
      },
      {
        display: '商業用電最兇！',
        value: 'commercial',
      },
    ],
  },
  {
    id: 'saving',
    type: 'quiz',
    background: [
      '聽說，為了應付連年攀升的用電量，節電是這個島嶼上的一大挑戰。',
      '經歷過四十年能源戰爭，你深知節電有千百種方法…',
    ],
    question: [
      '「台灣要節電嘛，我建議……」',
    ],
    description: '',
    option: [
      {
        display: '請用電特別兇的人省電！我省一個月也比不上他們省一天',
        value: 'big_customer',
      },
      {
        display: '讓大家知道家裡用電的詳細狀況，我會自己找到省電的辦法',
        value: 'self_info',
      },
      {
        display: '愛賭才會贏！一定要有抽獎大家才會想配合啦！',
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
    background: [
      '聽說，在某個尖峰時段，全島用電量會飆升到最高！島上的電力系統因此吃緊……',
      '身經百戰的你心想：那正是節電的黃金時段啊！',
    ],
    question: [
      '但，何時是台灣的尖峰用電時段，你搞清楚了嗎？',
    ],
    description: '',
    option: [
      {
        display: '是冬天半夜 11 點到 1 點',
        value: 'night',
      },
      {
        display: '是夏天下午 1 點到 3 點',
        value: 'noon',
      },
      {
        display: '是夏天晚上 9 點到 11 點',
        value: 'evening',
      },
    ],
  },
  {
    id: 'green',
    type: 'quiz',
    background: [
      '你花了一段時間探勘，發現台灣島上有很多可循環再利用的「再生能源」，',
      '比傳統發電方式更乾淨，對環境更友善。',
      '過去能源戰爭的經驗告訴你，再生能源發展一直是重要戰役。',
      '你很欣慰地看見，台灣正走向再生能源之路。',
    ],
    question: [
      '「對於再生能源，我希望……」',
    ],
    description: '',
    option: [
      {
        display: '那我來挑個再生能源、儲能、節能全部都有的智慧社區來住好囉',
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
    background: [
      '日子一天一天過去，你漸漸熟悉島嶼上的生活。',
      '也因為你之前身經百戰，政府騁你為能源政策顧問，',
      '你會如何推動能源政策？',
    ],
    question: [
      '「我會優先推動的政策是……」',
    ],
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
