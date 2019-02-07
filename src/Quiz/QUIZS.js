export default {
  city_or_country: {
    id: 'city_or_country',
    type: 'quiz',
    title: '鄉村或都市',
    paragraphs: [
      '這個神秘的島嶼上有19個縣市，處處有獨特的風光和生活步調。你希望住在怎麼樣的地方？'
    ],
    dialog: '我喜歡住在...',
    options: [
      {title: '熱鬧的城市', value: 'city'},
      {title: '樸實的鄉村', value: 'country'},
      {title: '隨便啦都可以', value: 'any'}
    ]
  },
  power_plant: {
    id: 'power_plant',
    type: 'quiz',
    title: '與電廠為鄰',
    paragraphs: [
      '台灣人的日常總離不開電力，為維持全台的舒適生活，島上蓋了各式各樣的發電廠，你必須選擇跟某個發電廠住在一起。'
    ],
    dialog: '唔... 要住在哪種電廠旁邊呢？',
    options: [
      {title: '太陽能板', value: 'solar'},
      {title: '風機', value: 'wind'},
      {title: '水庫', value: 'hydro'},
      {title: '燃煤電廠', value: 'thermal'},
      {title: '核電廠', value: 'nuclear'},
      {title: '我不要住電廠旁邊！', value: 'no_plant'}
    ]
  },
  taiwan_number_one: {
    id: 'taiwan_number_one',
    type: 'tut',
    title: '台灣難波萬',
    paragraphs: [
      '終於在島上安頓下來！你聽到「叮咚」的門鈴聲，一打開門，一群熱情的鄰居大喊：「恭喜來到亞洲第一島！」你臉上露出了外星人問號。'
    ],
    dialog: '看他們一臉萌樣... 所謂亞洲第一，大概是指台灣這種第一吧？',
    options: [
      {title: '電費，亞洲第一貴', value: 'charge'},
      {title: '每人的年平均用電量，亞洲第一高', value: 'usage'},
      {title: '二氧化碳排放量，亞洲第一名', value: 'co2'}
    ]
  },
  main_power_consumer: {
    id: 'main_power_consumer',
    type: 'tut',
    title: '用電大戶',
    paragraphs: [
      '名列亞洲第一的台灣，每年的用電量仍然不斷上升，有進無退！到底電力都花到哪去了呢？'
    ],
    dialog: '我想，一直以來都是...',
    options: [
      {title: '工業用電最兇！', value: 'industrial'},
      {title: '住宅用電最兇！', value: 'residential'},
      {title: '商業用電最兇！', value: 'commercial'}
    ]
  },
  power_saving_policy: {
    id: 'power_saving_policy',
    type: 'quiz',
    title: '省電之道',
    paragraphs: [
      '聽說，為了應付連年攀升的用電量，節電是這個島嶼上的一大挑戰。經歷過四十年能源戰爭，你深知節電有千百種方法。'
    ],
    dialog: '台灣要節電嘛，我建議...',
    options: [
      {title: '先看看這個縣市主要用電的產業是什麼，對症下藥最重要！', value: 'industry_analysis'},
      {title: '希望可以有人到大家的社區和家中幫忙診斷如何節電！', value: 'home_diagnosis'},
      {title: '只需要補助錢讓大家汰換耗能家電就好囉，這個最實際！', value: 'retiring_subsidy'},
      {title: '好麻煩喔，先不理它好惹', value: 'any'}
    ]
  },
  peak_time: {
    id: 'peak_time',
    type: 'tut',
    title: '離尖計',
    paragraphs: [
      '聽說，在某個尖峰時段，全島用電量會飆升到最高！島上的電力系統因此吃緊... 身經百戰的你心想：那正是節電的黃金時段啊！'
    ],
    dialog: '但，何時是台灣的尖峰用電時段，你搞清楚了嗎？',
    options: [
      {title: '是冬天半夜 11 點到 1 點', value: 'night'},
      {title: '是夏天下午 1 點到 3 點', value: 'noon'},
      {title: '是夏天晚上 9 點到 11 點', value: 'evening'}
    ]
  },
  renewable_energy_policy: {
    id: 'renewable_energy_policy',
    type: 'quiz',
    title: '再生能源',
    paragraphs: [
      '你花了一段時間探勘，發現台灣島上有很多可循環再利用的「再生能源」，比傳統發電方式更乾淨，對環境更友善。',
      '過去能源戰爭的經驗告訴你，再生能源發展一直是重要戰役。你很欣慰地看見，台灣正走向再生能源之路。'
    ],
    dialog: '對於再生能源，我希望...',
    options: [
      {title: '那我來挑個再生能源、儲能、節能全部都有的智慧社區來住好囉', value: 'smart_complex'},
      {title: '看我用腳投票給開發地熱、或在公共空間、農舍等屋頂裝太陽能板的縣市～', value: 'public_service'},
      {title: '好複雜喔，先不理它好惹', value: 'any'}
    ]
  },
  participatory_policy: {
    id: 'participatory_policy',
    type: 'quiz',
    title: '全民參與',
    paragraphs: [
      '日子一天一天過去，你漸漸熟悉島嶼上的生活。也因為你之前身經百戰，政府騁你為能源政策顧問，你會如何推動能源政策？'
    ],
    dialog: '我會優先推動的政策是...',
    options: [
      {title: '縣市政府拿綠能多賺到的錢回饋給公益使用', value: 'money_back'},
      {title: '縣市政府跟鄉民一起制定能源政策', value: 'policy_making'},
      {title: '好困難喔，先不理它好惹', value: 'any'}
    ]
  }
}
