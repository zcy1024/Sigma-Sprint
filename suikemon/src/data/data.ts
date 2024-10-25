// index   chinese   japanese   detail   sprite-icon
const data = ["7 杰尼龟 ゼニガメ https://wiki.52poke.com/wiki/%E6%9D%B0%E5%B0%BC%E9%BE%9F sprite-icon-0007",
"8 卡咪龟 カメール https://wiki.52poke.com/wiki/%E5%8D%A1%E5%92%AA%E9%BE%9F sprite-icon-0008",
"9 水箭龟 カメックス https://wiki.52poke.com/wiki/%E6%B0%B4%E7%AE%AD%E9%BE%9F sprite-icon-0009",
"54 可达鸭 コダック https://wiki.52poke.com/wiki/%E5%8F%AF%E8%BE%BE%E9%B8%AD sprite-icon-0054",
"55 哥达鸭 ゴルダック https://wiki.52poke.com/wiki/%E5%93%A5%E8%BE%BE%E9%B8%AD sprite-icon-0055",
"60 蚊香蝌蚪 ニョロモ https://wiki.52poke.com/wiki/%E8%9A%8A%E9%A6%99%E8%9D%8C%E8%9A%AA sprite-icon-0060",
"61 蚊香君 ニョロゾ https://wiki.52poke.com/wiki/%E8%9A%8A%E9%A6%99%E5%90%9B sprite-icon-0061",
"62 蚊香泳士 ニョロボン https://wiki.52poke.com/wiki/%E8%9A%8A%E9%A6%99%E6%B3%B3%E5%A3%AB sprite-icon-0062",
"72 玛瑙水母 メノクラゲ https://wiki.52poke.com/wiki/%E7%8E%9B%E7%91%99%E6%B0%B4%E6%AF%8D sprite-icon-0072",
"73 毒刺水母 ドククラゲ https://wiki.52poke.com/wiki/%E6%AF%92%E5%88%BA%E6%B0%B4%E6%AF%8D sprite-icon-0073",
"79 呆呆兽 ヤドン https://wiki.52poke.com/wiki/%E5%91%86%E5%91%86%E5%85%BD sprite-icon-0079",
"80 呆壳兽 ヤドラン https://wiki.52poke.com/wiki/%E5%91%86%E5%A3%B3%E5%85%BD sprite-icon-0080",
"86 小海狮 パウワウ https://wiki.52poke.com/wiki/%E5%B0%8F%E6%B5%B7%E7%8B%AE sprite-icon-0086",
"87 白海狮 ジュゴン https://wiki.52poke.com/wiki/%E7%99%BD%E6%B5%B7%E7%8B%AE sprite-icon-0087",
"90 大舌贝 シェルダー https://wiki.52poke.com/wiki/%E5%A4%A7%E8%88%8C%E8%B4%9D sprite-icon-0090",
"91 刺甲贝 パルシェン https://wiki.52poke.com/wiki/%E5%88%BA%E7%94%B2%E8%B4%9D sprite-icon-0091",
"98 大钳蟹 クラブ https://wiki.52poke.com/wiki/%E5%A4%A7%E9%92%B3%E8%9F%B9 sprite-icon-0098",
"99 巨钳蟹 キングラー https://wiki.52poke.com/wiki/%E5%B7%A8%E9%92%B3%E8%9F%B9 sprite-icon-0099",
"116 墨海马 タッツー https://wiki.52poke.com/wiki/%E5%A2%A8%E6%B5%B7%E9%A9%AC sprite-icon-0116",
"117 海刺龙 シードラ https://wiki.52poke.com/wiki/%E6%B5%B7%E5%88%BA%E9%BE%99 sprite-icon-0117",
"118 角金鱼 トサキント https://wiki.52poke.com/wiki/%E8%A7%92%E9%87%91%E9%B1%BC sprite-icon-0118",
"119 金鱼王 アズマオウ https://wiki.52poke.com/wiki/%E9%87%91%E9%B1%BC%E7%8E%8B sprite-icon-0119",
"120 海星星 ヒトデマン https://wiki.52poke.com/wiki/%E6%B5%B7%E6%98%9F%E6%98%9F sprite-icon-0120",
"121 宝石海星 スターミー https://wiki.52poke.com/wiki/%E5%AE%9D%E7%9F%B3%E6%B5%B7%E6%98%9F sprite-icon-0121",
"128 肯泰罗 ケンタロス https://wiki.52poke.com/wiki/%E8%82%AF%E6%B3%B0%E7%BD%97 sprite-icon-0128PA",
"129 鲤鱼王 コイキング https://wiki.52poke.com/wiki/%E9%B2%A4%E9%B1%BC%E7%8E%8B sprite-icon-0129",
"130 暴鲤龙 ギャラドス https://wiki.52poke.com/wiki/%E6%9A%B4%E9%B2%A4%E9%BE%99 sprite-icon-0130",
"131 拉普拉斯 ラプラス https://wiki.52poke.com/wiki/%E6%8B%89%E6%99%AE%E6%8B%89%E6%96%AF sprite-icon-0131",
"134 水伊布 シャワーズ https://wiki.52poke.com/wiki/%E6%B0%B4%E4%BC%8A%E5%B8%83 sprite-icon-0134",
"138 菊石兽 オムナイト https://wiki.52poke.com/wiki/%E8%8F%8A%E7%9F%B3%E5%85%BD sprite-icon-0138",
"139 多刺菊石兽 オムスター https://wiki.52poke.com/wiki/%E5%A4%9A%E5%88%BA%E8%8F%8A%E7%9F%B3%E5%85%BD sprite-icon-0139",
"140 化石盔 カブト https://wiki.52poke.com/wiki/%E5%8C%96%E7%9F%B3%E7%9B%94 sprite-icon-0140",
"141 镰刀盔 カブトプス https://wiki.52poke.com/wiki/%E9%95%B0%E5%88%80%E7%9B%94 sprite-icon-0141",
"158 小锯鳄 ワニノコ https://wiki.52poke.com/wiki/%E5%B0%8F%E9%94%AF%E9%B3%84 sprite-icon-0158",
"159 蓝鳄 アリゲイツ https://wiki.52poke.com/wiki/%E8%93%9D%E9%B3%84 sprite-icon-0159",
"160 大力鳄 オーダイル https://wiki.52poke.com/wiki/%E5%A4%A7%E5%8A%9B%E9%B3%84 sprite-icon-0160",
"170 灯笼鱼 チョンチー https://wiki.52poke.com/wiki/%E7%81%AF%E7%AC%BC%E9%B1%BC sprite-icon-0170",
"171 电灯怪 ランターン https://wiki.52poke.com/wiki/%E7%94%B5%E7%81%AF%E6%80%AA sprite-icon-0171",
"183 玛力露 マリル https://wiki.52poke.com/wiki/%E7%8E%9B%E5%8A%9B%E9%9C%B2 sprite-icon-0183",
"184 玛力露丽 マリルリ https://wiki.52poke.com/wiki/%E7%8E%9B%E5%8A%9B%E9%9C%B2%E4%B8%BD sprite-icon-0184",
"186 蚊香蛙皇 ニョロトノ https://wiki.52poke.com/wiki/%E8%9A%8A%E9%A6%99%E8%9B%99%E7%9A%87 sprite-icon-0186",
"194 乌波 ウパー https://wiki.52poke.com/wiki/%E4%B9%8C%E6%B3%A2 sprite-icon-0194",
"195 沼王 ヌオー https://wiki.52poke.com/wiki/%E6%B2%BC%E7%8E%8B sprite-icon-0195",
"199 呆呆王 ヤドキング https://wiki.52poke.com/wiki/%E5%91%86%E5%91%86%E7%8E%8B sprite-icon-0199",
"211 千针鱼 ハリーセン https://wiki.52poke.com/wiki/%E5%8D%83%E9%92%88%E9%B1%BC sprite-icon-0211",
"222 太阳珊瑚 サニーゴ https://wiki.52poke.com/wiki/%E5%A4%AA%E9%98%B3%E7%8F%8A%E7%91%9A sprite-icon-0222",
"223 铁炮鱼 テッポウオ https://wiki.52poke.com/wiki/%E9%93%81%E7%82%AE%E9%B1%BC sprite-icon-0223",
"224 章鱼桶 オクタン https://wiki.52poke.com/wiki/%E7%AB%A0%E9%B1%BC%E6%A1%B6 sprite-icon-0224",
"226 巨翅飞鱼 マンタイン https://wiki.52poke.com/wiki/%E5%B7%A8%E7%BF%85%E9%A3%9E%E9%B1%BC sprite-icon-0226",
"230 刺龙王 キングドラ https://wiki.52poke.com/wiki/%E5%88%BA%E9%BE%99%E7%8E%8B sprite-icon-0230",
"245 水君 スイクン https://wiki.52poke.com/wiki/%E6%B0%B4%E5%90%9B sprite-icon-0245",
"258 水跃鱼 ミズゴロウ https://wiki.52poke.com/wiki/%E6%B0%B4%E8%B7%83%E9%B1%BC sprite-icon-0258",
"259 沼跃鱼 ヌマクロー https://wiki.52poke.com/wiki/%E6%B2%BC%E8%B7%83%E9%B1%BC sprite-icon-0259",
"260 巨沼怪 ラグラージ https://wiki.52poke.com/wiki/%E5%B7%A8%E6%B2%BC%E6%80%AA sprite-icon-0260",
"270 莲叶童子 ハスボー https://wiki.52poke.com/wiki/%E8%8E%B2%E5%8F%B6%E7%AB%A5%E5%AD%90 sprite-icon-0270",
"271 莲帽小童 ハスブレロ https://wiki.52poke.com/wiki/%E8%8E%B2%E5%B8%BD%E5%B0%8F%E7%AB%A5 sprite-icon-0271",
"272 乐天河童 ルンパッパ https://wiki.52poke.com/wiki/%E4%B9%90%E5%A4%A9%E6%B2%B3%E7%AB%A5 sprite-icon-0272",
"278 长翅鸥 キャモメ https://wiki.52poke.com/wiki/%E9%95%BF%E7%BF%85%E9%B8%A5 sprite-icon-0278",
"279 大嘴鸥 ペリッパー https://wiki.52poke.com/wiki/%E5%A4%A7%E5%98%B4%E9%B8%A5 sprite-icon-0279",
"283 溜溜糖球 アメタマ https://wiki.52poke.com/wiki/%E6%BA%9C%E6%BA%9C%E7%B3%96%E7%90%83 sprite-icon-0283",
"318 利牙鱼 キバニア https://wiki.52poke.com/wiki/%E5%88%A9%E7%89%99%E9%B1%BC sprite-icon-0318",
"319 巨牙鲨 サメハダー https://wiki.52poke.com/wiki/%E5%B7%A8%E7%89%99%E9%B2%A8 sprite-icon-0319",
"320 吼吼鲸 ホエルコ https://wiki.52poke.com/wiki/%E5%90%BC%E5%90%BC%E9%B2%B8 sprite-icon-0320",
"321 吼鲸王 ホエルオー https://wiki.52poke.com/wiki/%E5%90%BC%E9%B2%B8%E7%8E%8B sprite-icon-0321",
"339 泥泥鳅 ドジョッチ https://wiki.52poke.com/wiki/%E6%B3%A5%E6%B3%A5%E9%B3%85 sprite-icon-0339",
"340 鲶鱼王 ナマズン https://wiki.52poke.com/wiki/%E9%B2%B6%E9%B1%BC%E7%8E%8B sprite-icon-0340",
"341 龙虾小兵 ヘイガニ https://wiki.52poke.com/wiki/%E9%BE%99%E8%99%BE%E5%B0%8F%E5%85%B5 sprite-icon-0341",
"342 铁螯龙虾 シザリガー https://wiki.52poke.com/wiki/%E9%93%81%E8%9E%AF%E9%BE%99%E8%99%BE sprite-icon-0342",
"349 丑丑鱼 ヒンバス https://wiki.52poke.com/wiki/%E4%B8%91%E4%B8%91%E9%B1%BC sprite-icon-0349",
"350 美纳斯 ミロカロス https://wiki.52poke.com/wiki/%E7%BE%8E%E7%BA%B3%E6%96%AF sprite-icon-0350",
"363 海豹球 タマザラシ https://wiki.52poke.com/wiki/%E6%B5%B7%E8%B1%B9%E7%90%83 sprite-icon-0363",
"364 海魔狮 トドグラー https://wiki.52poke.com/wiki/%E6%B5%B7%E9%AD%94%E7%8B%AE sprite-icon-0364",
"365 帝牙海狮 トドゼルガ https://wiki.52poke.com/wiki/%E5%B8%9D%E7%89%99%E6%B5%B7%E7%8B%AE sprite-icon-0365",
"366 珍珠贝 パールル https://wiki.52poke.com/wiki/%E7%8F%8D%E7%8F%A0%E8%B4%9D sprite-icon-0366",
"367 猎斑鱼 ハンテール https://wiki.52poke.com/wiki/%E7%8C%8E%E6%96%91%E9%B1%BC sprite-icon-0367",
"368 樱花鱼 サクラビス https://wiki.52poke.com/wiki/%E6%A8%B1%E8%8A%B1%E9%B1%BC sprite-icon-0368",
"369 古空棘鱼 ジーランス https://wiki.52poke.com/wiki/%E5%8F%A4%E7%A9%BA%E6%A3%98%E9%B1%BC sprite-icon-0369",
"370 爱心鱼 ラブカス https://wiki.52poke.com/wiki/%E7%88%B1%E5%BF%83%E9%B1%BC sprite-icon-0370",
"382 盖欧卡 カイオーガ https://wiki.52poke.com/wiki/%E7%9B%96%E6%AC%A7%E5%8D%A1 sprite-icon-0382",
"393 波加曼 ポッチャマ https://wiki.52poke.com/wiki/%E6%B3%A2%E5%8A%A0%E6%9B%BC sprite-icon-0393",
"394 波皇子 ポッタイシ https://wiki.52poke.com/wiki/%E6%B3%A2%E7%9A%87%E5%AD%90 sprite-icon-0394",
"395 帝王拿波 エンペルト https://wiki.52poke.com/wiki/%E5%B8%9D%E7%8E%8B%E6%8B%BF%E6%B3%A2 sprite-icon-0395",
"400 大尾狸 ビーダル https://wiki.52poke.com/wiki/%E5%A4%A7%E5%B0%BE%E7%8B%B8 sprite-icon-0400",
"418 泳圈鼬 ブイゼル https://wiki.52poke.com/wiki/%E6%B3%B3%E5%9C%88%E9%BC%AC sprite-icon-0418",
"419 浮潜鼬 フローゼル https://wiki.52poke.com/wiki/%E6%B5%AE%E6%BD%9C%E9%BC%AC sprite-icon-0419",
"422 无壳海兔 カラナクシ https://wiki.52poke.com/wiki/%E6%97%A0%E5%A3%B3%E6%B5%B7%E5%85%94 sprite-icon-0422",
"423 海兔兽 トリトドン https://wiki.52poke.com/wiki/%E6%B5%B7%E5%85%94%E5%85%BD sprite-icon-0423",
"456 荧光鱼 ケイコウオ https://wiki.52poke.com/wiki/%E8%8D%A7%E5%85%89%E9%B1%BC sprite-icon-0456",
"457 霓虹鱼 ネオラント https://wiki.52poke.com/wiki/%E9%9C%93%E8%99%B9%E9%B1%BC sprite-icon-0457",
"458 小球飞鱼 タマンタ https://wiki.52poke.com/wiki/%E5%B0%8F%E7%90%83%E9%A3%9E%E9%B1%BC sprite-icon-0458",
"484 帕路奇亚 パルキア https://wiki.52poke.com/wiki/%E5%B8%95%E8%B7%AF%E5%A5%87%E4%BA%9A sprite-icon-0484",
"489 霏欧纳 フィオネ https://wiki.52poke.com/wiki/%E9%9C%8F%E6%AC%A7%E7%BA%B3 sprite-icon-0489",
"490 玛纳霏 マナフィ https://wiki.52poke.com/wiki/%E7%8E%9B%E7%BA%B3%E9%9C%8F sprite-icon-0490",
"501 水水獭 ミジュマル https://wiki.52poke.com/wiki/%E6%B0%B4%E6%B0%B4%E7%8D%AD sprite-icon-0501",
"502 双刃丸 フタチマル https://wiki.52poke.com/wiki/%E5%8F%8C%E5%88%83%E4%B8%B8 sprite-icon-0502",
// "503 大剑鬼 ダイケンキ https://wiki.52poke.com/wiki/%E5%A4%A7%E5%89%91%E9%AC%BC sprite-icon-0503",
"503 大剑鬼 ダイケンキ https://wiki.52poke.com/wiki/%E5%A4%A7%E5%89%91%E9%AC%BC sprite-icon-0503H",
"515 冷水猴 ヒヤップ https://wiki.52poke.com/wiki/%E5%86%B7%E6%B0%B4%E7%8C%B4 sprite-icon-0515",
"516 冷水猿 ヒヤッキー https://wiki.52poke.com/wiki/%E5%86%B7%E6%B0%B4%E7%8C%BF sprite-icon-0516",
"535 圆蝌蚪 オタマロ https://wiki.52poke.com/wiki/%E5%9C%86%E8%9D%8C%E8%9A%AA sprite-icon-0535",
"536 蓝蟾蜍 ガマガル https://wiki.52poke.com/wiki/%E8%93%9D%E8%9F%BE%E8%9C%8D sprite-icon-0536",
"537 蟾蜍王 ガマゲロゲ https://wiki.52poke.com/wiki/%E8%9F%BE%E8%9C%8D%E7%8E%8B sprite-icon-0537",
"550 野蛮鲈鱼 バスラオ https://wiki.52poke.com/wiki/%E9%87%8E%E8%9B%AE%E9%B2%88%E9%B1%BC sprite-icon-0550",
"564 原盖海龟 プロトーガ https://wiki.52poke.com/wiki/%E5%8E%9F%E7%9B%96%E6%B5%B7%E9%BE%9F sprite-icon-0564",
"565 肋骨海龟 アバゴーラ https://wiki.52poke.com/wiki/%E8%82%8B%E9%AA%A8%E6%B5%B7%E9%BE%9F sprite-icon-0565",
"580 鸭宝宝 コアルヒー https://wiki.52poke.com/wiki/%E9%B8%AD%E5%AE%9D%E5%AE%9D sprite-icon-0580",
"581 舞天鹅 スワンナ https://wiki.52poke.com/wiki/%E8%88%9E%E5%A4%A9%E9%B9%85 sprite-icon-0581",
"592 轻飘飘 プルリル https://wiki.52poke.com/wiki/%E8%BD%BB%E9%A3%98%E9%A3%98 sprite-icon-0592",
"593 胖嘟嘟 ブルンゲル https://wiki.52poke.com/wiki/%E8%83%96%E5%98%9F%E5%98%9F sprite-icon-0593",
"594 保母曼波 ママンボウ https://wiki.52poke.com/wiki/%E4%BF%9D%E6%AF%8D%E6%9B%BC%E6%B3%A2 sprite-icon-0594",
"647 凯路迪欧 ケルディオ https://wiki.52poke.com/wiki/%E5%87%AF%E8%B7%AF%E8%BF%AA%E6%AC%A7 sprite-icon-0647",
"656 呱呱泡蛙 ケロマツ https://wiki.52poke.com/wiki/%E5%91%B1%E5%91%B1%E6%B3%A1%E8%9B%99 sprite-icon-0656",
"657 呱头蛙 ゲコガシラ https://wiki.52poke.com/wiki/%E5%91%B1%E5%A4%B4%E8%9B%99 sprite-icon-0657",
"658 甲贺忍蛙 ゲッコウガ https://wiki.52poke.com/wiki/%E7%94%B2%E8%B4%BA%E5%BF%8D%E8%9B%99 sprite-icon-0658",
"688 龟脚脚 カメテテ https://wiki.52poke.com/wiki/%E9%BE%9F%E8%84%9A%E8%84%9A sprite-icon-0688",
"689 龟足巨铠 ガメノデス https://wiki.52poke.com/wiki/%E9%BE%9F%E8%B6%B3%E5%B7%A8%E9%93%A0 sprite-icon-0689",
"690 垃垃藻 クズモー https://wiki.52poke.com/wiki/%E5%9E%83%E5%9E%83%E8%97%BB sprite-icon-0690",
"692 铁臂枪虾 ウデッポウ https://wiki.52poke.com/wiki/%E9%93%81%E8%87%82%E6%9E%AA%E8%99%BE sprite-icon-0692",
"693 钢炮臂虾 ブロスター https://wiki.52poke.com/wiki/%E9%92%A2%E7%82%AE%E8%87%82%E8%99%BE sprite-icon-0693",
"721 波尔凯尼恩 ボルケニオン https://wiki.52poke.com/wiki/%E6%B3%A2%E5%B0%94%E5%87%AF%E5%B0%BC%E6%81%A9 sprite-icon-0721",
"728 球球海狮 アシマリ https://wiki.52poke.com/wiki/%E7%90%83%E7%90%83%E6%B5%B7%E7%8B%AE sprite-icon-0728",
"729 花漾海狮 オシャマリ https://wiki.52poke.com/wiki/%E8%8A%B1%E6%BC%BE%E6%B5%B7%E7%8B%AE sprite-icon-0729",
"730 西狮海壬 アシレーヌ https://wiki.52poke.com/wiki/%E8%A5%BF%E7%8B%AE%E6%B5%B7%E5%A3%AC sprite-icon-0730",
"746 弱丁鱼 ヨワシ https://wiki.52poke.com/wiki/%E5%BC%B1%E4%B8%81%E9%B1%BC sprite-icon-0746",
"747 好坏星 ヒドイデ https://wiki.52poke.com/wiki/%E5%A5%BD%E5%9D%8F%E6%98%9F sprite-icon-0747",
"748 超坏星 ドヒドイデ https://wiki.52poke.com/wiki/%E8%B6%85%E5%9D%8F%E6%98%9F sprite-icon-0748",
"751 滴蛛 シズクモ https://wiki.52poke.com/wiki/%E6%BB%B4%E8%9B%9B sprite-icon-0751",
"752 滴蛛霸 オニシズクモ https://wiki.52poke.com/wiki/%E6%BB%B4%E8%9B%9B%E9%9C%B8 sprite-icon-0752",
"767 胆小虫 コソクムシ https://wiki.52poke.com/wiki/%E8%83%86%E5%B0%8F%E8%99%AB sprite-icon-0767",
"768 具甲武者 グソクムシャ https://wiki.52poke.com/wiki/%E5%85%B7%E7%94%B2%E6%AD%A6%E8%80%85 sprite-icon-0768",
"771 拳海参 ナマコブシ https://wiki.52poke.com/wiki/%E6%8B%B3%E6%B5%B7%E5%8F%82 sprite-icon-0771",
"779 磨牙彩皮鱼 ハギギシリ https://wiki.52poke.com/wiki/%E7%A3%A8%E7%89%99%E5%BD%A9%E7%9A%AE%E9%B1%BC sprite-icon-0779",
"788 卡璞・鳍鳍 カプ・レヒレ https://wiki.52poke.com/wiki/%E5%8D%A1%E7%92%9E%E3%83%BB%E9%B3%8D%E9%B3%8D sprite-icon-0788",
"816 泪眼蜥 メッソン https://wiki.52poke.com/wiki/%E6%B3%AA%E7%9C%BC%E8%9C%A5 sprite-icon-0816",
"817 变涩蜥 ジメレオン https://wiki.52poke.com/wiki/%E5%8F%98%E6%B6%A9%E8%9C%A5 sprite-icon-0817",
"818 千面避役 インテレオン https://wiki.52poke.com/wiki/%E5%8D%83%E9%9D%A2%E9%81%BF%E5%BD%B9 sprite-icon-0818",
"833 咬咬龟 カムカメ https://wiki.52poke.com/wiki/%E5%92%AC%E5%92%AC%E9%BE%9F sprite-icon-0833",
"834 暴噬龟 カジリガメ https://wiki.52poke.com/wiki/%E6%9A%B4%E5%99%AC%E9%BE%9F sprite-icon-0834",
"845 古月鸟 ウッウ https://wiki.52poke.com/wiki/%E5%8F%A4%E6%9C%88%E9%B8%9F sprite-icon-0845",
"846 刺梭鱼 サシカマス https://wiki.52poke.com/wiki/%E5%88%BA%E6%A2%AD%E9%B1%BC sprite-icon-0846",
"847 戽斗尖梭 カマスジョー https://wiki.52poke.com/wiki/%E6%88%BD%E6%96%97%E5%B0%96%E6%A2%AD sprite-icon-0847",
"882 鳃鱼龙 ウオノラゴン https://wiki.52poke.com/wiki/%E9%B3%83%E9%B1%BC%E9%BE%99 sprite-icon-0882",
"883 鳃鱼海兽 ウオチルドン https://wiki.52poke.com/wiki/%E9%B3%83%E9%B1%BC%E6%B5%B7%E5%85%BD sprite-icon-0883",
"902 幽尾玄鱼 イダイトウ https://wiki.52poke.com/wiki/%E5%B9%BD%E5%B0%BE%E7%8E%84%E9%B1%BC sprite-icon-0902",
"912 润水鸭 クワッス https://wiki.52poke.com/wiki/%E6%B6%A6%E6%B0%B4%E9%B8%AD sprite-icon-0912",
"913 涌跃鸭 ウェルカモ https://wiki.52poke.com/wiki/%E6%B6%8C%E8%B7%83%E9%B8%AD sprite-icon-0913",
"914 狂欢浪舞鸭 ウェーニバル https://wiki.52poke.com/wiki/%E7%8B%82%E6%AC%A2%E6%B5%AA%E8%88%9E%E9%B8%AD sprite-icon-0914",
"960 海地鼠 ウミディグダ https://wiki.52poke.com/wiki/%E6%B5%B7%E5%9C%B0%E9%BC%A0 sprite-icon-0960",
"961 三海地鼠 ウミトリオ https://wiki.52poke.com/wiki/%E4%B8%89%E6%B5%B7%E5%9C%B0%E9%BC%A0 sprite-icon-0961",
"963 波普海豚 ナミイルカ https://wiki.52poke.com/wiki/%E6%B3%A2%E6%99%AE%E6%B5%B7%E8%B1%9A sprite-icon-0963",
"964 海豚侠 イルカマン https://wiki.52poke.com/wiki/%E6%B5%B7%E8%B1%9A%E4%BE%A0 sprite-icon-0964",
"976 轻身鳕 ミガルーサ https://wiki.52poke.com/wiki/%E8%BD%BB%E8%BA%AB%E9%B3%95 sprite-icon-0976",
"977 吃吼霸 ヘイラッシャ https://wiki.52poke.com/wiki/%E5%90%83%E5%90%BC%E9%9C%B8 sprite-icon-0977",
"978 米立龙 シャリタツ https://wiki.52poke.com/wiki/%E7%B1%B3%E7%AB%8B%E9%BE%99 sprite-icon-0978",
"991 铁包袱 テツノツツミ https://wiki.52poke.com/wiki/%E9%93%81%E5%8C%85%E8%A2%B1 sprite-icon-0991",
"1009 波荡水 ウネルミナモ https://wiki.52poke.com/wiki/%E6%B3%A2%E8%8D%A1%E6%B0%B4 sprite-icon-1009",]

export default new Map<string, string[]>(data.map(str => {
    const arr = str.split(' ')
    return [arr[0], arr]
}))