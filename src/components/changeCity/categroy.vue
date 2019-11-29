<template>
  <div class="categroy">
    <dl class="m-categroy">
      <dt>按拼音首字母选择：</dt>

      <dd v-for="(item, index) in list" :key="index">
        <a @click="slide" :href="'#city-' + item" :data-id="'#city-' + item">{{item}}</a>
      </dd>
    </dl>
    <dl class="m-categroy-section" v-for="(item, key) in cityGroup" :key="key" :id="'city-'+key">
      <dt>{{key}}</dt>
      <dd>
        <span v-for="city in item" :key="city.id">{{city.name}}</span>
      </dd>
    </dl>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
      cityList: [],
      cityGroup: null
    };
  },
  created() {
    var data = [
      {
        id: 50,
        name: "杭州",
        pinyin: "hangzhou",
        acronym: "hz",
        rank: "A",
        firstChar: "H"
      },
      {
        id: 51,
        name: "宁波",
        pinyin: "ningbo",
        acronym: "nb",
        rank: "B",
        firstChar: "N"
      },
      {
        id: 112,
        name: "温州",
        pinyin: "wenzhou",
        acronym: "wz",
        rank: "B",
        firstChar: "W"
      },
      {
        id: 185,
        name: "嘉兴",
        pinyin: "jiaxing",
        acronym: "jx",
        rank: "C",
        firstChar: "J"
      },
      {
        id: 186,
        name: "湖州",
        pinyin: "huzhou",
        acronym: "huzhou",
        rank: "C",
        firstChar: "H"
      },
      {
        id: 187,
        name: "绍兴",
        pinyin: "shaoxing",
        acronym: "sx",
        rank: "C",
        firstChar: "S"
      },
      {
        id: 188,
        name: "金华",
        pinyin: "jinhua",
        acronym: "jh",
        rank: "C",
        firstChar: "J"
      },
      {
        id: 189,
        name: "衢州",
        pinyin: "quzhou",
        acronym: "quzhou",
        rank: "D",
        firstChar: "Q"
      },
      {
        id: 190,
        name: "舟山",
        pinyin: "zhoushan",
        acronym: "zhoushan",
        rank: "D",
        firstChar: "Z"
      },
      {
        id: 191,
        name: "台州",
        pinyin: "taizhoutz",
        acronym: "tz",
        rank: "C",
        firstChar: "T"
      },
      {
        id: 192,
        name: "丽水",
        pinyin: "lishui",
        acronym: "lishui",
        rank: "D",
        firstChar: "L"
      },
      {
        id: 405,
        name: "义乌",
        pinyin: "yiwu",
        acronym: "yiwu",
        rank: "D",
        firstChar: "Y"
      },
      {
        id: 416,
        name: "富阳",
        pinyin: "fuyangfy",
        acronym: "fuyangfy",
        rank: "E",
        firstChar: "F"
      },
      {
        id: 424,
        name: "海宁",
        pinyin: "haining",
        acronym: "haining",
        rank: "E",
        firstChar: "H"
      },
      {
        id: 425,
        name: "桐乡",
        pinyin: "tongxiang",
        acronym: "tx",
        rank: "D",
        firstChar: "T"
      },
      {
        id: 451,
        name: "慈溪",
        pinyin: "cixi",
        acronym: "cixi",
        rank: "D",
        firstChar: "C"
      },
      {
        id: 452,
        name: "长兴",
        pinyin: "changxing",
        acronym: "chx",
        rank: "E",
        firstChar: "C"
      },
      {
        id: 455,
        name: "东阳",
        pinyin: "dongyang",
        acronym: "dongyang",
        rank: "E",
        firstChar: "D"
      },
      {
        id: 456,
        name: "上虞",
        pinyin: "shangyu",
        acronym: "shangyu",
        rank: "E",
        firstChar: "S"
      },
      {
        id: 457,
        name: "温岭",
        pinyin: "wenling",
        acronym: "wenling",
        rank: "D",
        firstChar: "W"
      },
      {
        id: 458,
        name: "永康",
        pinyin: "yongkang",
        acronym: "yongkang",
        rank: "E",
        firstChar: "Y"
      },
      {
        id: 459,
        name: "余姚",
        pinyin: "yuyao",
        acronym: "yuyao",
        rank: "D",
        firstChar: "Y"
      },
      {
        id: 461,
        name: "临海",
        pinyin: "linhai",
        acronym: "linhai",
        rank: "E",
        firstChar: "L"
      },
      {
        id: 467,
        name: "德清",
        pinyin: "deqing",
        acronym: "deqing",
        rank: "F",
        firstChar: "D"
      },
      {
        id: 468,
        name: "诸暨",
        pinyin: "zhuji",
        acronym: "zhuji",
        rank: "D",
        firstChar: "Z"
      },
      {
        id: 469,
        name: "瑞安",
        pinyin: "ruian",
        acronym: "ruian",
        rank: "E",
        firstChar: "R"
      },
      {
        id: 470,
        name: "乐清",
        pinyin: "yueqing",
        acronym: "yueqing",
        rank: "D",
        firstChar: "Y"
      },
      {
        id: 476,
        name: "兰溪",
        pinyin: "lanxi",
        acronym: "lx",
        rank: "E",
        firstChar: "L"
      },
      {
        id: 489,
        name: "嘉善",
        pinyin: "jiashan",
        acronym: "js",
        rank: "E",
        firstChar: "J"
      },
      {
        id: 490,
        name: "安吉",
        pinyin: "anji",
        acronym: "aj",
        rank: "F",
        firstChar: "A"
      },
      {
        id: 510,
        name: "江山",
        pinyin: "jiangshan",
        acronym: "jiangshan",
        rank: "F",
        firstChar: "J"
      },
      {
        id: 512,
        name: "宁海",
        pinyin: "ninghai",
        acronym: "nh",
        rank: "E",
        firstChar: "N"
      },
      {
        id: 524,
        name: "平湖",
        pinyin: "pinghu",
        acronym: "ph",
        rank: "E",
        firstChar: "P"
      },
      {
        id: 530,
        name: "嵊州",
        pinyin: "shengzhou",
        acronym: "shengzhou",
        rank: "E",
        firstChar: "S"
      },
      {
        id: 540,
        name: "奉化",
        pinyin: "fenghua",
        acronym: "fenghua",
        rank: "E",
        firstChar: "F"
      },
      {
        id: 542,
        name: "临安",
        pinyin: "linan",
        acronym: "linan",
        rank: "E",
        firstChar: "L"
      },
      {
        id: 551,
        name: "乌镇",
        pinyin: "wuzhen",
        acronym: "wuzhen",
        rank: "Z",
        firstChar: "W"
      },
      {
        id: 554,
        name: "桐庐",
        pinyin: "tonglu",
        acronym: "tonglu",
        rank: "F",
        firstChar: "T"
      },
      {
        id: 560,
        name: "西塘",
        pinyin: "xitang",
        acronym: "xitang",
        rank: "Z",
        firstChar: "X"
      },
      {
        id: 594,
        name: "建德",
        pinyin: "jiande",
        acronym: "jd",
        rank: "F",
        firstChar: "J"
      },
      {
        id: 624,
        name: "苍南",
        pinyin: "cangnan",
        acronym: "cangnan",
        rank: "E",
        firstChar: "C"
      },
      {
        id: 660,
        name: "淳安",
        pinyin: "chunan",
        acronym: "ca",
        rank: "F",
        firstChar: "C"
      },
      {
        id: 692,
        name: "象山",
        pinyin: "xiangshan",
        acronym: "xiangshan",
        rank: "F",
        firstChar: "X"
      },
      {
        id: 693,
        name: "玉环市",
        pinyin: "yuhuanshi",
        acronym: "yh",
        rank: "F",
        firstChar: "Y"
      },
      {
        id: 726,
        name: "海盐",
        pinyin: "haiyan",
        acronym: "haiyan",
        rank: "F",
        firstChar: "H"
      },
      {
        id: 730,
        name: "浦江",
        pinyin: "pujiang",
        acronym: "pujiang",
        rank: "F",
        firstChar: "P"
      },
      {
        id: 764,
        name: "仙居",
        pinyin: "xianju",
        acronym: "xianju",
        rank: "F",
        firstChar: "X"
      },
      {
        id: 782,
        name: "天台",
        pinyin: "tiantai",
        acronym: "tiantai",
        rank: "F",
        firstChar: "T"
      },
      {
        id: 845,
        name: "三门",
        pinyin: "sanmen",
        acronym: "sanmen",
        rank: "F",
        firstChar: "S"
      },
      {
        id: 851,
        name: "横店",
        pinyin: "hengdian",
        acronym: "hengdian",
        rank: "E",
        firstChar: "H"
      },
      {
        id: 895,
        name: "遂昌",
        pinyin: "suichang",
        acronym: "suichang",
        rank: "F",
        firstChar: "S"
      },
      {
        id: 903,
        name: "新昌",
        pinyin: "xinchang",
        acronym: "xinchang",
        rank: "F",
        firstChar: "X"
      },
      {
        id: 912,
        name: "龙泉",
        pinyin: "longquan",
        acronym: "longquan",
        rank: "F",
        firstChar: "L"
      },
      {
        id: 913,
        name: "缙云",
        pinyin: "jinyun",
        acronym: "jinyun",
        rank: "F",
        firstChar: "J"
      },
      {
        id: 922,
        name: "青田",
        pinyin: "qingtian",
        acronym: "qingtian",
        rank: "F",
        firstChar: "Q"
      },
      {
        id: 938,
        name: "龙游",
        pinyin: "longyou",
        acronym: "longyou",
        rank: "F",
        firstChar: "L"
      },
      {
        id: 972,
        name: "平阳",
        pinyin: "pingyang",
        acronym: "pingyang",
        rank: "E",
        firstChar: "P"
      },
      {
        id: 973,
        name: "武义",
        pinyin: "wuyi",
        acronym: "wuyi",
        rank: "F",
        firstChar: "W"
      },
      {
        id: 990,
        name: "开化",
        pinyin: "kaihua",
        acronym: "kaihua",
        rank: "E",
        firstChar: "K"
      },
      {
        id: 993,
        name: "常山",
        pinyin: "changshan",
        acronym: "changshan",
        rank: "F",
        firstChar: "C"
      },
      {
        id: 1198,
        name: "永嘉县",
        pinyin: "yongjiaxian",
        acronym: "yongjiaxian",
        rank: "F",
        firstChar: "Y"
      },
      {
        id: 361,
        name: "兰州",
        pinyin: "lanzhou",
        acronym: "lz",
        rank: "C",
        firstChar: "L"
      },
      {
        id: 362,
        name: "金昌",
        pinyin: "jinchang",
        acronym: "jinchang",
        rank: "F",
        firstChar: "J"
      },
      {
        id: 363,
        name: "白银",
        pinyin: "baiyin",
        acronym: "by",
        rank: "E",
        firstChar: "B"
      },
      {
        id: 364,
        name: "天水",
        pinyin: "tianshui",
        acronym: "tianshui",
        rank: "E",
        firstChar: "T"
      },
      {
        id: 365,
        name: "武威",
        pinyin: "wuwei",
        acronym: "wuwei",
        rank: "E",
        firstChar: "W"
      },
      {
        id: 366,
        name: "张掖",
        pinyin: "zhangye",
        acronym: "zhangye",
        rank: "E",
        firstChar: "Z"
      },
      {
        id: 367,
        name: "平凉",
        pinyin: "pingliang",
        acronym: "pl",
        rank: "E",
        firstChar: "P"
      },
      {
        id: 368,
        name: "酒泉",
        pinyin: "jiuquan",
        acronym: "jq",
        rank: "E",
        firstChar: "J"
      },
      {
        id: 369,
        name: "庆阳",
        pinyin: "qingyang",
        acronym: "qingyang",
        rank: "E",
        firstChar: "Q"
      },
      {
        id: 370,
        name: "定西",
        pinyin: "dingxi",
        acronym: "dx",
        rank: "E",
        firstChar: "D"
      },
      {
        id: 371,
        name: "陇南",
        pinyin: "longnan",
        acronym: "ln",
        rank: "Z",
        firstChar: "L"
      },
      {
        id: 372,
        name: "临夏",
        pinyin: "linxia",
        acronym: "linxia",
        rank: "F",
        firstChar: "L"
      },
      {
        id: 373,
        name: "甘南",
        pinyin: "gannan",
        acronym: "gn",
        rank: "Z",
        firstChar: "G"
      },
      {
        id: 409,
        name: "嘉峪关",
        pinyin: "jiayuguan",
        acronym: "jyg",
        rank: "F",
        firstChar: "J"
      },
      {
        id: 434,
        name: "敦煌",
        pinyin: "dunhuang",
        acronym: "dunhuang",
        rank: "Z",
        firstChar: "D"
      },
      {
        id: 856,
        name: "华亭市",
        pinyin: "huatingshi",
        acronym: "huating",
        rank: "F",
        firstChar: "H"
      },
      {
        id: 1169,
        name: "永登县",
        pinyin: "yongdengxian",
        acronym: "yongdengxian",
        rank: "F",
        firstChar: "Y"
      },
      {
        id: 1185,
        name: "环县",
        pinyin: "huanxian",
        acronym: "huanxian",
        rank: "F",
        firstChar: "H"
      },
      {
        id: 1227,
        name: "康县",
        pinyin: "kangxian",
        acronym: "kangxian",
        rank: "F",
        firstChar: "K"
      },
      {
        id: 1228,
        name: "山丹县",
        pinyin: "shandanxian",
        acronym: "shandanxian",
        rank: "F",
        firstChar: "S"
      },

      {
        id: 52,
        name: "无锡",
        pinyin: "wuxi",
        acronym: "wx",
        rank: "B",
        firstChar: "W"
      },
      {
        id: 55,
        name: "南京",
        pinyin: "nanjing",
        acronym: "nj",
        rank: "A",
        firstChar: "N"
      },
      {
        id: 80,
        name: "苏州",
        pinyin: "suzhou",
        acronym: "su",
        rank: "B",
        firstChar: "S"
      },
      {
        id: 82,
        name: "南通",
        pinyin: "nantong",
        acronym: "nt",
        rank: "C",
        firstChar: "N"
      },
      {
        id: 89,
        name: "常州",
        pinyin: "changzhou",
        acronym: "cz",
        rank: "B",
        firstChar: "C"
      },
      {
        id: 119,
        name: "徐州",
        pinyin: "xuzhou",
        acronym: "xz",
        rank: "C",
        firstChar: "X"
      },
      {
        id: 120,
        name: "扬州",
        pinyin: "yangzhou",
        acronym: "yz",
        rank: "C",
        firstChar: "Y"
      },
      {
        id: 179,
        name: "连云港",
        pinyin: "lianyungang",
        acronym: "lyg",
        rank: "C",
        firstChar: "L"
      },
      {
        id: 180,
        name: "淮安",
        pinyin: "huaian",
        acronym: "ha",
        rank: "C",
        firstChar: "H"
      },
      {
        id: 181,
        name: "盐城",
        pinyin: "yancheng",
        acronym: "yancheng",
        rank: "C",
        firstChar: "Y"
      },
      {
        id: 182,
        name: "镇江",
        pinyin: "zhenjiang",
        acronym: "zj",
        rank: "C",
        firstChar: "Z"
      },
      {
        id: 183,
        name: "泰州",
        pinyin: "taizhou",
        acronym: "taizhou",
        rank: "C",
        firstChar: "T"
      },
      {
        id: 184,
        name: "宿迁",
        pinyin: "suqian",
        acronym: "suqian",
        rank: "D",
        firstChar: "S"
      },
      {
        id: 403,
        name: "昆山",
        pinyin: "kunshan",
        acronym: "kunshan",
        rank: "C",
        firstChar: "K"
      },
      {
        id: 404,
        name: "江阴",
        pinyin: "jiangyin",
        acronym: "jiangyin",
        rank: "C",
        firstChar: "J"
      },
      {
        id: 419,
        name: "张家港",
        pinyin: "zhangjiagang",
        acronym: "zjg",
        rank: "D",
        firstChar: "Z"
      },
      {
        id: 422,
        name: "常熟",
        pinyin: "changshu",
        acronym: "changshu",
        rank: "D",
        firstChar: "C"
      },
      {
        id: 431,
        name: "丹阳",
        pinyin: "danyang",
        acronym: "danyang",
        rank: "E",
        firstChar: "D"
      },
      {
        id: 432,
        name: "太仓",
        pinyin: "taicang",
        acronym: "taicang",
        rank: "D",
        firstChar: "T"
      },
      {
        id: 433,
        name: "吴江",
        pinyin: "wujiang",
        acronym: "wj",
        rank: "D",
        firstChar: "W"
      },
      {
        id: 439,
        name: "靖江",
        pinyin: "jingjiang",
        acronym: "jingjiang",
        rank: "E",
        firstChar: "J"
      },
      {
        id: 450,
        name: "溧阳",
        pinyin: "liyang",
        acronym: "liyang",
        rank: "E",
        firstChar: "L"
      },
      {
        id: 454,
        name: "宜兴",
        pinyin: "yixing",
        acronym: "yixing",
        rank: "D",
        firstChar: "Y"
      },
      {
        id: 460,
        name: "金坛",
        pinyin: "jintan",
        acronym: "jintan",
        rank: "E",
        firstChar: "J"
      },
      {
        id: 477,
        name: "大丰",
        pinyin: "dafeng",
        acronym: "df",
        rank: "E",
        firstChar: "D"
      },
      {
        id: 478,
        name: "东台",
        pinyin: "dongtai",
        acronym: "dongtai",
        rank: "E",
        firstChar: "D"
      },
      {
        id: 493,
        name: "邳州",
        pinyin: "pizhou",
        acronym: "pz",
        rank: "E",
        firstChar: "P"
      },
      {
        id: 500,
        name: "启东",
        pinyin: "qidong",
        acronym: "qidong",
        rank: "E",
        firstChar: "Q"
      },
      {
        id: 501,
        name: "如皋",
        pinyin: "rugao",
        acronym: "rg",
        rank: "E",
        firstChar: "R"
      },
      {
        id: 515,
        name: "句容",
        pinyin: "jurong",
        acronym: "jr",
        rank: "E",
        firstChar: "J"
      },
      {
        id: 517,
        name: "兴化",
        pinyin: "xinghua",
        acronym: "xh",
        rank: "E",
        firstChar: "X"
      },
      {
        id: 518,
        name: "泰兴",
        pinyin: "taixing",
        acronym: "taixing",
        rank: "E",
        firstChar: "T"
      },
      {
        id: 519,
        name: "海门",
        pinyin: "haimen",
        acronym: "hm",
        rank: "E",
        firstChar: "H"
      },
      {
        id: 521,
        name: "高邮",
        pinyin: "gaoyou",
        acronym: "gaoyou",
        rank: "E",
        firstChar: "G"
      },
      {
        id: 522,
        name: "仪征",
        pinyin: "yizheng",
        acronym: "yizheng",
        rank: "E",
        firstChar: "Y"
      },
      {
        id: 531,
        name: "沭阳",
        pinyin: "shuyang",
        acronym: "shuyang",
        rank: "E",
        firstChar: "S"
      },
      {
        id: 532,
        name: "射阳",
        pinyin: "sheyang",
        acronym: "sheyang",
        rank: "E",
        firstChar: "S"
      },
      {
        id: 533,
        name: "滨海",
        pinyin: "binhai",
        acronym: "binhai",
        rank: "Z",
        firstChar: "B"
      },
      {
        id: 534,
        name: "响水",
        pinyin: "xiangshui",
        acronym: "xiangshui",
        rank: "F",
        firstChar: "X"
      },
      {
        id: 535,
        name: "阜宁",
        pinyin: "funing",
        acronym: "fn",
        rank: "F",
        firstChar: "F"
      },
      {
        id: 536,
        name: "建湖",
        pinyin: "jianhu",
        acronym: "jianhu",
        rank: "F",
        firstChar: "J"
      },
      {
        id: 548,
        name: "新沂",
        pinyin: "xinyi",
        acronym: "xinyi",
        rank: "E",
        firstChar: "X"
      },
      {
        id: 559,
        name: "扬中",
        pinyin: "yangzhong",
        acronym: "yangzhong",
        rank: "F",
        firstChar: "Y"
      },
      {
        id: 602,
        name: "宝应",
        pinyin: "baoying",
        acronym: "baoying",
        rank: "F",
        firstChar: "B"
      },
      {
        id: 615,
        name: "周庄",
        pinyin: "zhouzhuang",
        acronym: "zhouzhuang",
        rank: "Z",
        firstChar: "Z"
      },
      {
        id: 623,
        name: "海安",
        pinyin: "haian",
        acronym: "haian",
        rank: "E",
        firstChar: "H"
      },
      {
        id: 751,
        name: "灌云",
        pinyin: "guanyun",
        acronym: "guanyun",
        rank: "F",
        firstChar: "G"
      },
      {
        id: 752,
        name: "灌南",
        pinyin: "guannan",
        acronym: "guannan",
        rank: "F",
        firstChar: "G"
      },
      {
        id: 753,
        name: "赣榆",
        pinyin: "ganyu",
        acronym: "ganyu",
        rank: "F",
        firstChar: "G"
      },
      {
        id: 754,
        name: "东海",
        pinyin: "donghai",
        acronym: "donghai",
        rank: "F",
        firstChar: "D"
      },
      {
        id: 760,
        name: "泗阳",
        pinyin: "siyang",
        acronym: "siyang",
        rank: "F",
        firstChar: "S"
      },
      {
        id: 824,
        name: "泗洪",
        pinyin: "sihong",
        acronym: "sihong",
        rank: "F",
        firstChar: "S"
      },
      {
        id: 833,
        name: "沛县",
        pinyin: "peixian",
        acronym: "peixian",
        rank: "E",
        firstChar: "P"
      },
      {
        id: 843,
        name: "盱眙",
        pinyin: "xuyi",
        acronym: "xuyi",
        rank: "F",
        firstChar: "X"
      },
      {
        id: 862,
        name: "丰县",
        pinyin: "fengxian",
        acronym: "fengxian",
        rank: "F",
        firstChar: "F"
      },
      {
        id: 875,
        name: "睢宁",
        pinyin: "suiningxian",
        acronym: "suiningxian",
        rank: "F",
        firstChar: "S"
      },
      {
        id: 948,
        name: "江都",
        pinyin: "jiangdu",
        acronym: "jiangdu",
        rank: "E",
        firstChar: "J"
      },
      {
        id: 956,
        name: "金湖",
        pinyin: "jinhu",
        acronym: "jinhu",
        rank: "F",
        firstChar: "J"
      },
      {
        id: 976,
        name: "涟水",
        pinyin: "lianshui",
        acronym: "lianshui",
        rank: "F",
        firstChar: "L"
      },
      {
        id: 988,
        name: "如东",
        pinyin: "rudong",
        acronym: "rudong",
        rank: "E",
        firstChar: "R"
      },
      {
        id: 1143,
        name: "溧水区",
        pinyin: "lishuiqu",
        acronym: "lishuiqu",
        rank: "F",
        firstChar: "L"
      },
      {
        id: 1290,
        name: "高淳区",
        pinyin: "gaochunqu",
        acronym: "gaochunqu",
        rank: "F",
        firstChar: "G"
      },

      {
        id: 42,
        name: "西安",
        pinyin: "xian",
        acronym: "xa",
        rank: "A",
        firstChar: "X"
      },
      {
        id: 352,
        name: "铜川",
        pinyin: "tongchuan",
        acronym: "tc",
        rank: "E",
        firstChar: "T"
      },
      {
        id: 353,
        name: "宝鸡",
        pinyin: "baoji",
        acronym: "baoji",
        rank: "D",
        firstChar: "B"
      },
      {
        id: 354,
        name: "咸阳",
        pinyin: "xianyang",
        acronym: "xianyang",
        rank: "D",
        firstChar: "X"
      },
      {
        id: 355,
        name: "渭南",
        pinyin: "weinan",
        acronym: "wn",
        rank: "D",
        firstChar: "W"
      },
      {
        id: 356,
        name: "延安",
        pinyin: "yanan",
        acronym: "yanan",
        rank: "E",
        firstChar: "Y"
      },
      {
        id: 357,
        name: "汉中",
        pinyin: "hanzhong",
        acronym: "hanzhong",
        rank: "E",
        firstChar: "H"
      },
      {
        id: 358,
        name: "榆林",
        pinyin: "yulinyl",
        acronym: "yl",
        rank: "D",
        firstChar: "Y"
      },
      {
        id: 359,
        name: "安康",
        pinyin: "ankang",
        acronym: "ankang",
        rank: "E",
        firstChar: "A"
      },
      {
        id: 360,
        name: "商洛",
        pinyin: "shangluo",
        acronym: "sl",
        rank: "E",
        firstChar: "S"
      },
      {
        id: 564,
        name: "华阴",
        pinyin: "huayin",
        acronym: "huayin",
        rank: "F",
        firstChar: "H"
      },
      {
        id: 661,
        name: "兴平",
        pinyin: "xingping",
        acronym: "xp",
        rank: "F",
        firstChar: "X"
      },
      {
        id: 772,
        name: "汉阴",
        pinyin: "hanyin",
        acronym: "hanyin",
        rank: "F",
        firstChar: "H"
      },
      {
        id: 796,
        name: "神木市",
        pinyin: "shenmushi",
        acronym: "shenmu",
        rank: "F",
        firstChar: "S"
      },
      {
        id: 799,
        name: "户县",
        pinyin: "huxian",
        acronym: "huxian",
        rank: "F",
        firstChar: "H"
      },
      {
        id: 808,
        name: "临潼",
        pinyin: "lintong",
        acronym: "lintong",
        rank: "F",
        firstChar: "L"
      },
      {
        id: 809,
        name: "蓝田",
        pinyin: "lantian",
        acronym: "lantian",
        rank: "F",
        firstChar: "L"
      },
      {
        id: 819,
        name: "石泉",
        pinyin: "shiquan",
        acronym: "shiquan",
        rank: "F",
        firstChar: "S"
      },
      {
        id: 822,
        name: "阎良",
        pinyin: "yanliang",
        acronym: "yanliang",
        rank: "F",
        firstChar: "Y"
      },
      {
        id: 832,
        name: "韩城",
        pinyin: "hancheng",
        acronym: "hancheng",
        rank: "F",
        firstChar: "H"
      },
      {
        id: 836,
        name: "大荔",
        pinyin: "dalixian",
        acronym: "dalixian",
        rank: "F",
        firstChar: "D"
      },
      {
        id: 837,
        name: "蒲城",
        pinyin: "pucheng",
        acronym: "pucheng",
        rank: "F",
        firstChar: "P"
      },
      {
        id: 848,
        name: "眉县",
        pinyin: "meixian",
        acronym: "meixian",
        rank: "F",
        firstChar: "M"
      },
      {
        id: 861,
        name: "扶风",
        pinyin: "fufeng",
        acronym: "fufeng",
        rank: "F",
        firstChar: "F"
      },
      {
        id: 866,
        name: "高陵",
        pinyin: "gaoling",
        acronym: "gaoling",
        rank: "F",
        firstChar: "G"
      },
      {
        id: 870,
        name: "西乡",
        pinyin: "xixiang",
        acronym: "xixiang",
        rank: "F",
        firstChar: "X"
      },
      {
        id: 908,
        name: "杨陵",
        pinyin: "yangling",
        acronym: "yangling",
        rank: "F",
        firstChar: "Y"
      },
      {
        id: 909,
        name: "城固",
        pinyin: "chenggu",
        acronym: "chenggu",
        rank: "F",
        firstChar: "C"
      },
      {
        id: 915,
        name: "彬州市",
        pinyin: "binzhoushi",
        acronym: "binxian",
        rank: "F",
        firstChar: "B"
      },
      {
        id: 985,
        name: "周至",
        pinyin: "zhouzhi",
        acronym: "zhouzhi",
        rank: "F",
        firstChar: "Z"
      },
      {
        id: 1125,
        name: "南郑区",
        pinyin: "nanzhengxian",
        acronym: "nanzhengxian",
        rank: "F",
        firstChar: "N"
      },
      {
        id: 1139,
        name: "岐山县",
        pinyin: "qishanxian",
        acronym: "qishanxian",
        rank: "F",
        firstChar: "Q"
      },
      {
        id: 1146,
        name: "靖边",
        pinyin: "jingbian",
        acronym: "jingbian",
        rank: "F",
        firstChar: "J"
      },
      {
        id: 1147,
        name: "洛川县",
        pinyin: "luochuanxian",
        acronym: "luochuanxian",
        rank: "F",
        firstChar: "L"
      },
      {
        id: 1152,
        name: "凤翔县",
        pinyin: "fengxiangxian",
        acronym: "fengxiangxian",
        rank: "F",
        firstChar: "F"
      },
      {
        id: 1155,
        name: "绥德县",
        pinyin: "suidexian",
        acronym: "suidexian",
        rank: "F",
        firstChar: "S"
      },
      {
        id: 1206,
        name: "黄陵县",
        pinyin: "huanglingxian",
        acronym: "huanglingxian",
        rank: "F",
        firstChar: "H"
      },
      {
        id: 1208,
        name: "定边县",
        pinyin: "dingbianxian",
        acronym: "dingbianxian",
        rank: "F",
        firstChar: "D"
      },
      {
        id: 1209,
        name: "府谷县",
        pinyin: "fuguxian",
        acronym: "fuguxian",
        rank: "F",
        firstChar: "F"
      },
      {
        id: 1213,
        name: "旬阳县",
        pinyin: "xunyangxian",
        acronym: "xunyangxian",
        rank: "F",
        firstChar: "X"
      },
      {
        id: 1234,
        name: "横山区",
        pinyin: "hengshanqu",
        acronym: "hengshanqu",
        rank: "F",
        firstChar: "H"
      },
      {
        id: 1288,
        name: "泾阳县",
        pinyin: "jingyangxian",
        acronym: "jingyangxian",
        rank: "F",
        firstChar: "J"
      },
      {
        id: 1289,
        name: "三原县",
        pinyin: "sanyuanxian",
        acronym: "sanyuanxian",
        rank: "F",
        firstChar: "S"
      }
    ];
    var obj = {};
    var obj2 = {};
    data.forEach((item, index) => {
      if (!obj[item.firstChar]) {
        obj[item.firstChar] = [];
      }
      obj[item.firstChar].push(item);
    });
    // 对象排序Object.keys(obj).sort()得到一个keys数组
    Object.keys(obj)
      .sort()
      .forEach((item, index) => {
        obj2[item] = obj[item];
      });
    this.cityGroup = obj2;
  },
  methods: {
    slide(e) {
      e.preventDefault();
      var mId = e.target.href.split("#")[1];
      if (!document.getElementById(mId)) return;
      let top = document.getElementById(mId).offsetTop;
      // document.documentElement.scrollTop = top;
      // console.log(e.clientY)
      // 目标位置值

      let run = e.pageY,
        num = run - e.clientY + top + 20,
        speed = num / 18,
        timer = setInterval(() => {
          document.documentElement.scrollTop = run;
          run += speed;
          speed += 5;
          if (run > num / 3) {
            speed -= 4;
            // console.log(run, speed);
          }
          if (run > num) {
            document.documentElement.scrollTop = num;
            clearInterval(timer);
          }
        }, 100 / 6);
      // document.documentElement.scrollTop = num;
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/css/changecity/categroy.scss";
</style>