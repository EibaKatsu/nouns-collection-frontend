/**
 * google spreadsheet からコピー
 * https://docs.google.com/spreadsheets/d/1kJFPOuPFT9frwc0D0a0GteeI1YOpjkz3BM6kxskSK_k/edit#gid=588448728
 * M列、N列をテキストエディタに貼り付け後、"(ダブルコーテーション)を削除して貼り付けする
 */
export const partsData = [
    { type: `Accessories`, prefecture: `Hokkaido`, key: `hokkaido-crab`, language: `ja`, name: `カニ`, description: `魚介類の宝庫・北海道ではさまざまな種類のカニが水揚げされます。北海道のカニは種類も豊富で、獲れる時期や旬、味わいもさまざまです。`, author: 'eiba' }, { type: `Accessories`, prefecture: `Hokkaido`, key: `hokkaido-crab`, language: `en`, name: `crab`, description: `Hokkaido, a treasure trove of seafood, lands a wide variety of crabs. There are a wide variety of crabs in Hokkaido, with different times of year, seasons, and flavors when they are caught.`, author: 'eiba' },
    {
        type: `Accessories`, prefecture: `Hokkaido`, key: `hokkaido-melon`, language: `ja`, name: `メロン`, description: `メロンは、キュウリやスイカの仲間でウリ科。
「果物の王様」と呼ばれていて、贈答品によく利用されています。
 
北アフリカ原産で、紀元前2000年頃に栽培が始まりました。
日本には、明治時代にヨーロッパから伝わり、その後、温室による栽培が開始されています。`, author: 'sugishige'
    }, {
        type: `Accessories`, prefecture: `Hokkaido`, key: `hokkaido-melon`, language: `en`, name: `melon`, description: `The melon is a member of the cucumber and watermelon family.
Known as the 'king of fruits,' they are often used as gifts.
 
Native to North Africa, its cultivation began around 2000 BC.
It was introduced to Japan from Europe during the Meiji period (1868-1912), and cultivation in greenhouses began later.`, author: 'sugishige'
    },
    { type: `Accessories`, prefecture: `Hokkaido`, key: `hokkaido-sheep`, language: `ja`, name: `羊`, description: `ヒツジは、ウシ科ヤギ亜科の鯨偶蹄目である。角を持ち、主に羊毛のために家畜化されている。`, author: 'hamachan' }, { type: `Accessories`, prefecture: `Hokkaido`, key: `hokkaido-sheep`, language: `en`, name: `Sheep`, description: `Sheep are a cetacean even-toed ungulates in the subfamily Cetacea of the bovine goat family. They have horns and are domesticated primarily for their wool.`, author: 'hamachan' },
    { type: `Accessories`, prefecture: `Aomori`, key: `aomori-jade`, language: `ja`, name: `翡翠`, description: `ヒスイは、深緑の半透明な宝石の一つ。東洋や中南米では古くから人気が高い宝石であり、金以上に珍重された。`, author: 'hamachan' }, { type: `Accessories`, prefecture: `Aomori`, key: `aomori-jade`, language: `en`, name: `Jade`, description: `Jade is one of the deep green translucent gemstones. It has long been a popular gemstone in the Orient and Latin America, and was prized even more than gold.`, author: 'hamachan' },
    { type: `Accessories`, prefecture: `Aomori`, key: `aomori-squid`, language: `ja`, name: `イカ`, description: `全国の港で、常にベスト10に入る水揚げを上げている青森県八戸港。特にイカについては、長きに渡って「イカの水揚げ日本一」を誇っています。コリコリした食感は最高。`, author: 'hamachan' }, { type: `Accessories`, prefecture: `Aomori`, key: `aomori-squid`, language: `en`, name: `Squid`, description: `Hachinohe Port in Aomori Prefecture is consistently ranked among the top 10 ports in Japan in terms of landings. Especially for squid, the port has long boasted of having the largest squid landings in Japan. The texture of the squid is the best.`, author: 'hamachan' },
    { type: `Accessories`, prefecture: `Aomori`, key: `aomori-tsugaru-shamisen`, language: `ja`, name: `津軽三味線`, description: `津軽地方（現在の青森県西部）で成立した三味線音楽。本来は津軽地方の民謡伴奏に用いられるが、現代においては特に独奏を指して「津軽三味線」と呼ぶ場合が多い。撥を叩きつけるように弾く打楽器的奏法と、テンポが速く音数が多い楽曲に特徴がある。`, author: 'sugishge' }, { type: `Accessories`, prefecture: `Aomori`, key: `aomori-tsugaru-shamisen`, language: `en`, name: `Tsugaru shamisen`, description: `Shamisen music originated in the Tsugaru region (present-day western Aomori Prefecture). Originally used to accompany folk songs of the Tsugaru region, today it is often referred to as 'Tsugaru shamisen,' especially when it is played solo. It is characterized by a percussion technique in which the player strikes the plectrum with a plectrum, and by a fast tempo and a large number of notes.`, author: 'sugishge' },
    {
        type: `Accessories`, prefecture: `Iwate`, key: `iwate-egg`, language: `ja`, name: `たまごモチーフの銘菓`, description: `かもめの玉子は、さいとう製菓株式会社が製造している岩手県の郷土菓子。
黄味餡を薄いカステラ生地で包んで焼き上げ、全体をホワイトチョコでコーティングした卵型の菓子である。`, author: 'hamachan'
    }, {
        type: `Accessories`, prefecture: `Iwate`, key: `iwate-egg`, language: `en`, name: `seagull eggs`, description: `Kamome no Tamago is a local confectionery of Iwate Prefecture, produced by Saito Confectionery Co.
The egg-shaped confection is made by wrapping yellowish red bean paste in thin sponge cake dough, baking it, and coating the whole thing with white chocolate.`, author: 'hamachan'
    },
    { type: `Accessories`, prefecture: `Iwate`, key: `iwate-fujiwara`, language: `ja`, name: `奥州藤原氏`, description: `奥州藤原氏は、前九年合戦・後三年合戦の後の1087年から源頼朝に滅ぼされる1189年までの間に陸奥（後の陸中国）平泉を中心として出羽を含む奥羽地方(現在の東北地方)一帯に勢力を張った藤原北家の支流の豪族。`, author: 'hamachan' }, {
        type: `Accessories`, prefecture: `Iwate`, key: `iwate-fujiwara`, language: `en`, name: `Northern Fujiwara
`, description: `The Oshu Fujiwara clan was a powerful branch of the Fujiwara no Hokke clan that held sway over the Ou region (present-day Tohoku region), including Dewa, centering on Mutsu (later Rikuchu) Hiraizumi, from 1087 after the Mae-nen and Go-nen battles to 1189, when the clan was destroyed by Minamoto no Yoritomo. `, author: 'hamachan'
    },
    { type: `Accessories`, prefecture: `Miyagi`, key: `miyagi-beeftongue`, language: `ja`, name: `牛タン`, description: `宮城県の牛タン消費量は日本一！年間なんと５千トンもの牛タンが食べられています。まさに仙台のソウルフードともいえる仙台牛タン。`, author: 'hamachan' }, { type: `Accessories`, prefecture: `Miyagi`, key: `miyagi-beeftongue`, language: `en`, name: `Ox tongue`, description: `Miyagi Prefecture consumes the largest amount of beef tongue in Japan! A whopping 5,000 tons of beef tongue is consumed annually. Sendai beef tongue is the soul food of Sendai.`, author: 'hamachan' },
    { type: `Accessories`, prefecture: `Miyagi`, key: `miyagi-matsushima`, language: `ja`, name: `松島`, description: `松島とは、松島湾に浮かぶ260余りの島々と、沿岸部も含めた辺り一帯のことをさしています。または、湾周囲を囲む松島丘陵も含めた修景地区のことである。日本三景の一つに数えられている。2019年の観光入込客数は約598万人。かつては「東の松島 西の象潟」と謳われ、同じく東北地方に存在していた修景地の象潟と並び称されていた。`, author: 'sugishige' }, {
        type: `Accessories`, prefecture: `Miyagi`, key: `miyagi-matsushima`, language: `en`, name: `Matsushima`, description: `Matsushima refers to the 260-odd islands in Matsushima Bay and the surrounding area, including the coastal areas.Or, it is a scenic area that also includes the Matsushima Hills surrounding the bay. It is one of the three most scenic spots in Japan, with approximately 5.98 million visitors in 2019. It used to be called 'Matsushima in the east and Zogata in the west,' along with Zogata, another shukei area that also existed in the Tohoku region.
`, author: 'sugishige'
    },
    { type: `Accessories`, prefecture: `Miyagi`, key: `miyagi-zunda`, language: `ja`, name: `ずんだ餅`, description: `ずんだ餅は、すりつぶした枝豆を餡に用いる餅菓子で、宮城県を中心にした地域の郷土菓子。`, author: 'hamachan' }, { type: `Accessories`, prefecture: `Miyagi`, key: `miyagi-zunda`, language: `en`, name: `Zunda mochi`, description: `Zunda Mochi is a local sweet mainly in Miyagi Prefecture, using mashed edamame (soybeans) as the filling.`, author: 'hamachan' },
    { type: `Accessories`, prefecture: `Akita`, key: `akita-fireworks`, language: `ja`, name: `花火`, description: `秋田では年に一度、全国の花火師（はなびし）たちが一同に介し、その腕を競い合います。爆発物を使って空中で美しい花や色彩を咲かせるための娯楽や祝祭の一環として使用される、花や光のディスプレイです。花火は通常、特別なイベントや祝祭、お祭り、祝日などで打ち上げられ、観客に楽しみや感動を提供します。花火は多彩な形状や色彩を持ち、美しい芸術的な演出が可能です。また、安全に扱うことが重要であり、専門家によって操作されることが一般的です。`, author: '' }, {
        type: `Accessories`, prefecture: `Akita`, key: `akita-fireworks`, language: `en`, name: `firework`, description: `Once a year in Akita, fireworks masters (hanabishi) from all over Japan come together to compete in a display of their skills. They are floral and light displays used as part of entertainment and festivities that use explosives to create beautiful flowers and colors in the air. Fireworks are usually launched during special events, festivals, festivals, and holidays to provide fun and excitement to spectators. Fireworks come in a wide variety of shapes and colors and can create beautiful artistic effects. They are also important to handle safely and are typically operated by professionals.
Translated with www.DeepL.com/Translator (free version)`, author: ''
    },
    { type: `Accessories`, prefecture: `Akita`, key: `akita-hatahata`, language: `ja`, name: `ハタハタ`, description: `秋田のハタハタは、日本の秋田県で特に有名な魚の一種です。ハタハタはサケ科に属し、日本海に生息しています。秋田県では、ハタハタは冬季に特に豊富に獲れることで知られており、冬の味覚として親しまれています。`, author: '' }, { type: `Accessories`, prefecture: `Akita`, key: `akita-hatahata`, language: `en`, name: `Sailfin sandfish`, description: `The 'Hatahata' in Akita, Japan, is a particularly famous type of fish. Hatahata belongs to the salmon family and inhabits the Sea of Japan. In Akita Prefecture, Hatahata is known for being especially abundant during the winter season and is cherished as a winter delicacy.`, author: '' },
    { type: `Accessories`, prefecture: `Akita`, key: `akita-raspberry`, language: `ja`, name: `ラズベリー（木苺）`, description: `秋田でラズベリーが有名な理由は、その地域の気候と土壌条件がラズベリーの栽培に適しているためです。秋田は寒冷な冬と比較的涼しい夏が特徴で、これらの気象条件がラズベリーの生育に適しています。また、土壌も酸性であり、ラズベリーの栽培に適しているため、ラズベリー栽培が盛んに行われています。秋田のラズベリーは美味しく、地元でジャムやデザートなどに加工され、観光客に楽しまれています。このため、秋田はラズベリーの生産地として知られています。`, author: '' }, { type: `Accessories`, prefecture: `Akita`, key: `akita-raspberry`, language: `en`, name: `Raspberry`, description: `The reason raspberries are famous in Akita is due to the region's climate and soil conditions being ideal for raspberry cultivation. Akita experiences cold winters and relatively cool summers, which are conducive to the growth of raspberries. Additionally, the soil in Akita is acidic, making it suitable for raspberry cultivation, which has led to a thriving raspberry industry. Akita's raspberries are known for their deliciousness and are processed into jams and desserts enjoyed by tourists. As a result, Akita is recognized as a prominent raspberry-producing region.`, author: '' },
    { type: `Accessories`, prefecture: `Yamagata`, key: `yamagata-cherry`, language: `ja`, name: `さくらんぼ`, description: `山形県のさくらんぼは生産量が全国第1位で、全国の生産量の約75％を占める山形県を代表する果物です。山形県は、夏は暑く梅雨のときも雨が少なく、風も強くないなど、さくらんぼが育つのに適した気候であることから、山形県内で多く栽培されるようになったといわれています。`, author: 'sugishige' }, { type: `Accessories`, prefecture: `Yamagata`, key: `yamagata-cherry`, language: `en`, name: `cherry`, description: `Yamagata Prefecture ranks first in the nation in the production of cherries, and is the representative fruit of Yamagata Prefecture, accounting for about 75% of the nation's total production. It is said that cherries are grown in large numbers in Yamagata Prefecture because of the prefecture's climate, which is suitable for growing cherries, with hot summers, little rain during the rainy season, and no strong winds.`, author: 'sugishige' },
    { type: `Accessories`, prefecture: `Yamagata`, key: `yamagata-lafrance`, language: `ja`, name: `やまがたの女王「ラ・フランス」`, description: `山形県は、西洋なしの生産量が全国1位で全国の生産量の6割以上を占めています（令和2年）。特に、西洋なしの品種「ラ・フランス」は緻密な果肉、果汁の多さ、特有の芳香、そしておいしさから「果物の女王」と称されています。`, author: '' }, { type: `Accessories`, prefecture: `Yamagata`, key: `yamagata-lafrance`, language: `en`, name: `La France, Queen of Yamagata`, description: `Yamagata Prefecture is the largest producer of pear in Japan, accounting for more than 60% of the nation's pear production (as of 2020). In particular, the 'La France' variety of pear is known as the 'Queen of Fruits' for its dense pulp, high juice content, distinctive aroma, and delicious taste.`, author: '' },
    {
        type: `Accessories`, prefecture: `Yamagata`, key: `yamagata-shogi`, language: `ja`, name: `将棋`, description: `日本一の将棋のまち、山形県の天童市 (てんどう)。
市内にはいたるところに将棋のオブジェが設置され、駅前の大通りや電柱には詰め将棋が描かれています。
将棋駒の産地でもあり、なんと日本で作られる将棋駒の約9割が天童市で生産されているんです。
その歴史は江戸時代後期にまで遡ります。`, author: ''
    }, {
        type: `Accessories`, prefecture: `Yamagata`, key: `yamagata-shogi`, language: `en`, name: `Japanese chess`, description: `Tendo City in Yamagata Prefecture is Japan's number one chess town.
Shogi objects are set up everywhere in the city, and Tendo's main street in front of the station and telephone poles are painted with the game.
Tendo is also a production center of Shogi pieces, with approximately 90% of all Shogi pieces made in Japan being produced in Tendo.
Its history dates back to the late Edo period.`, author: ''
    },
    { type: `Accessories`, prefecture: `Fukushima`, key: `fukushima-akabeko`, language: `ja`, name: `赤べこ`, description: `赤べこは、赤い牛に似せた張子である。会津地方の郷土玩具であり、子どもの魔避けとして用いられてきた。`, author: 'hamachan' }, { type: `Accessories`, prefecture: `Fukushima`, key: `fukushima-akabeko`, language: `en`, name: `Akabeko`, description: `Akabeko is a papier-mache doll resembling a red cow. It is a local toy of the Aizu region, and has been used to ward off evil spirits in children.`, author: 'hamachan' },
    {
        type: `Accessories`, prefecture: `Fukushima`, key: `fukushima-inawashiro`, language: `ja`, name: `猪苗代湖`, description: `日本では4番目に大きな湖で、面積は約103平方km、深さは約93mあります。
猪苗代湖の特長は透明度12～の澄んだきれいな水で、湖に注ぐ長瀬川が火山性の酸性水であるため、水質は弱酸性の貧栄養湖となっていて、水中の植物や藻があまり繁茂していないことに要因があります。そのため漁業といえばウグイやフナなどに限られています。国指定天然記念物のミズスギゴケ群落や白鳥の飛来地として貴重な生態系を保有する区域に指定されています。
猪苗代湖は「会津若松市、郡山市、猪苗代町」の二市一町にまたがる湖です。`, author: ''
    }, {
        type: `Accessories`, prefecture: `Fukushima`, key: `fukushima-inawashiro`, language: `en`, name: `Lake Inawashiro`, description: `It is the fourth largest lake in Japan, with an area of about 103 square kilometers and a depth of about 93 meters.
Lake Inawashiro is characterized by clear, clean water with a transparency of 12~. The Nagase River, which flows into the lake, is a volcanic acidic water, which makes the water quality of the lake slightly acidic and oligotrophic, and the plants and algae in the water are not very prolific. As a result, fisheries are limited to carp and crucian carp. The lake is designated as an area that possesses a valuable ecosystem as a national natural treasure, a Mizusugi Moss community and a swan flying site.
Lake Inawashiro spans two cities and one town, 'Aizu Wakamatsu City, Koriyama City, and Inawashiro Town.`, author: ''
    },
    { type: `Accessories`, prefecture: `Fukushima`, key: `fukushima-train`, language: `ja`, name: `とある電車`, description: `飯坂線は、福島県福島市の福島駅から飯坂温泉駅に至る福島交通の鉄道路線である。 「飯坂電車」「いい電」の愛称がある。`, author: 'hamachan' }, { type: `Accessories`, prefecture: `Fukushima`, key: `fukushima-train`, language: `en`, name: `Iizaka train`, description: `The Iizaka Line is a railroad line operated by Fukushima Kotsu, running from Fukushima Station to Iizaka Onsen Station in Fukushima City, Fukushima Prefecture. It is nicknamed 'Iizaka Train' or 'Iiden'.`, author: 'hamachan' },
    { type: `Accessories`, prefecture: `Ibaraki`, key: `ibaraki-bellpepper`, language: `ja`, name: `ピーマン`, description: `茨城県のピーマンは出荷量が日本一。全国のうち、ほぼ4分の1を誇ります。なかでも、神栖市は太平洋と利根川に挟まれ、温暖な気候と砂丘地帯で水はけの良い土壌に恵まれたピーマンの大産地です。`, author: 'hamachan' }, { type: `Accessories`, prefecture: `Ibaraki`, key: `ibaraki-bellpepper`, language: `en`, name: `bellpepper`, description: `Ibaraki Prefecture has the largest shipment of green peppers in Japan. Kamisu City, located between the Pacific Ocean and the Tone River, is a major bell pepper producer. Kamisu City, located between the Pacific Ocean and the Tone River, is a major bell pepper production area, blessed with a mild climate and well-drained soil in a sand dune area.`, author: 'hamachan' },
    {
        type: `Accessories`, prefecture: `Ibaraki`, key: `ibaraki-natto`, language: `ja`, name: `納豆`, description: `全国で販売されている納豆の半分以上が茨城県産である。
今日の主流である小粒大豆を使用したのが特徴である。`, author: 'hamachan'
    }, {
        type: `Accessories`, prefecture: `Ibaraki`, key: `ibaraki-natto`, language: `en`, name: `natto`, description: `More than half of the natto sold in Japan is produced in Ibaraki Prefecture.
It is characterized by the use of small-grain soybeans, which are the mainstream today.`, author: 'hamachan'
    },
    { type: `Accessories`, prefecture: `Ibaraki`, key: `ibaraki-rokkakudo`, language: `ja`, name: `六角堂`, description: `六角堂は、茨城県北茨城市にある六角形の建築物。「関東の松島」の異名を持つ景勝地・五浦海岸の中でも優れた景観を示すところに建つ。`, author: 'hamachan' }, { type: `Accessories`, prefecture: `Ibaraki`, key: `ibaraki-rokkakudo`, language: `en`, name: `hexagonal building`, description: `Rokkakudo is a hexagonal building located in Kitaibaraki City, Ibaraki Prefecture. It stands on the scenic Itsuura Coast, also known as 'Kanto's Matsushima,' and offers one of the most outstanding views of the area.`, author: 'hamachan' },
    { type: `Accessories`, prefecture: `Tochigi`, key: `tochigi-gyoza`, language: `ja`, name: `餃子`, description: `餃子の街として有名な宇都宮市。宇都宮市民の餃子好きの理由は、冬寒く夏暑い内陸性の気候に対応するためスタミナのある餃子を食べるのだとも、昔宇都宮に駐屯していた第14師団が中国東北部に進出した際に食べていたのを帰国後広めたともいわれます。`, author: 'hamachan' }, { type: `Accessories`, prefecture: `Tochigi`, key: `tochigi-gyoza`, language: `en`, name: `chinese dumpling`, description: `Utsunomiya City is famous for its gyoza (dumplings). It is said that the reason for Utsunomiya citizens' love of gyoza is that they eat them for their stamina to cope with the inland climate with cold winters and hot summers.`, author: 'hamachan' },
    {
        type: `Accessories`, prefecture: `Tochigi`, key: `tochigi-lemon`, language: `ja`, name: `レモン牛乳`, description: `レモン牛乳は、栃木県内の製乳メーカー2社が生産している乳飲料の通称である。無脂肪牛乳、生乳に甘味料、香料を加え着色料で黄色く着色した飲料である。
レモン果汁は入っておらず、無果汁と表示されている。`, author: 'hamachan'
    }, {
        type: `Accessories`, prefecture: `Tochigi`, key: `tochigi-lemon`, language: `en`, name: `lemon milk`, description: `Lemon milk is the common name for a dairy beverage produced by two dairy manufacturers in Tochigi Prefecture. The beverage is made from fat-free milk, raw milk, sweetener, and flavoring, and colored yellow with a coloring agent.
It does not contain lemon juice and is labeled as no juice.`, author: 'hamachan'
    },
    { type: `Accessories`, prefecture: `Tochigi`, key: `tochigi-shimotsukare`, language: `ja`, name: `しもつかれ`, description: `栃木県を代表する郷土料理のひとつ。正月に食べた塩引き鮭の頭や、節分に煎った福豆の残りの大豆などの残り物を使った、先人たちの知恵が詰まった一品である。`, author: 'hamachan' }, { type: `Accessories`, prefecture: `Tochigi`, key: `tochigi-shimotsukare`, language: `en`, name: `Shimotsukare`, description: `It is one of the representative local dishes of Tochigi Prefecture. It is a dish filled with the wisdom of our ancestors, using leftover items such as the heads of salted salmon eaten at New Year's and soybeans left over from roasted beans on Setsubun.`, author: 'hamachan' },
    { type: `Accessories`, prefecture: `Gunma`, key: `gunma-akagiyama`, language: `ja`, name: `赤城山`, description: `赤城山は、関東地方の北部、群馬県のほぼ中央に位置する山。`, author: 'hamachan' }, { type: `Accessories`, prefecture: `Gunma`, key: `gunma-akagiyama`, language: `en`, name: `Mt. Akagi`, description: `Akagi is a mountain located in the northern part of the Kanto region, roughly in the center of Gunma Prefecture.`, author: 'hamachan' },
    { type: `Accessories`, prefecture: `Gunma`, key: `gunma-tomiokasilkmill`, language: `ja`, name: `富岡製糸場`, description: `富岡製糸場は、群馬県富岡市に設立された日本初の本格的な機械製糸の工場である。敷地を含む全体が国の史跡に、初期の建造物群が国宝および重要文化財に指定されている。`, author: 'hamachan' }, { type: `Accessories`, prefecture: `Gunma`, key: `gunma-tomiokasilkmill`, language: `en`, name: `Tomioka Silk Mill`, description: `Tomioka Silk Mill was Japan's first full-scale mechanical silk mill, established in Tomioka City, Gunma Prefecture. The entire site is designated as a national historic site, and the early buildings are designated as national treasures and important cultural properties.`, author: 'hamachan' },
    {
        type: `Accessories`, prefecture: `Gunma`, key: `gunma-yakimanjyu`, language: `ja`, name: `焼きまんじゅう`, description: `焼きまんじゅうは、群馬県地方の郷土食の一種。
小麦粉に麹を混ぜて発酵させてから蒸したまんじゅうを竹串に刺し、黒砂糖や水飴で甘くした濃厚な味噌ダレを裏表に塗って火に掛け、焦げ目を付けたもので、軽食として好まれる。`, author: 'hamachan'
    }, {
        type: `Accessories`, prefecture: `Gunma`, key: `gunma-yakimanjyu`, language: `en`, name: `Fried manju`, description: `Yaki manju is a kind of local food in Gunma Prefecture.
Manju is made by mixing malted rice with flour, fermenting it, and then steaming it before placing it on a bamboo skewer.`, author: 'hamachan'
    },
    {
        type: `Accessories`, prefecture: `Saitama`, key: `saitama-icicle`, language: `ja`, name: `秩父三大氷柱`, description: `秩父三大氷柱は、埼玉県秩父地方の氷柱の総称。秩父地方の厳しい冬の寒さを利用し、毎年観光客に岩肌や樹木の氷柱を公開する。
三十槌の氷柱、尾ノ内百景氷柱、あしがくぼの氷柱。`, author: 'hamachan'
    }, {
        type: `Accessories`, prefecture: `Saitama`, key: `saitama-icicle`, language: `en`, name: `the three main icicles of Chichibu`, description: `The three major icicles of Chichibu are the general name for the icicles in the Chichibu region of Saitama Prefecture. Taking advantage of the severe winter cold in the Chichibu region, the icicles on the rock faces and trees are open to tourists every year.
Sanjutsuchi no Hyobashira, Onouchi Hyoken Hyobashira, and Ashigakubo no Hyobashira.`, author: 'hamachan'
    },
    {
        type: `Accessories`, prefecture: `Saitama`, key: `saitama-soka-senbei`, language: `ja`, name: `草加煎餅`, description: `草加煎餅とは、日本の煎餅のひとつであり、埼玉県草加市の名産品である
うるち米が原料のせんべい。硬めでぱりっとした食感が人気である。`, author: 'hamachan'
    }, {
        type: `Accessories`, prefecture: `Saitama`, key: `saitama-soka-senbei`, language: `en`, name: `Soka Senbei`, description: `Soka Sembei is one of the Japanese crackers and a specialty of Soka City, Saitama Prefecture.
It is a rice cracker made from Uruchi rice. It is popular for its hard and crispy texture.`, author: 'hamachan'
    },
    { type: `Accessories`, prefecture: `Chiba`, key: `chiba-inubosaki`, language: `ja`, name: `犬吠埼`, description: `犬吠埼（いぬぼうさき）は、日本の千葉県にある地名です。犬吠埼は、千葉半島の先端に位置し、太平洋に突き出ている地域で知られています。この地域は美しい海岸線や灯台があり、観光スポットとしても人気です。特に、犬吠埼灯台は有名で、その景色は訪れる人々に楽しまれています。また、周辺には海水浴や海の幸を楽しむための施設もあり、自然愛好家や観光客にとって魅力的な場所となっています。`, author: '' }, { type: `Accessories`, prefecture: `Chiba`, key: `chiba-inubosaki`, language: `en`, name: `Inubosaki`, description: `Inubozaki (犬吠埼) is a place name located in Chiba Prefecture, Japan. Inubozaki is situated at the tip of the Chiba Peninsula, jutting out into the Pacific Ocean. This area is known for its beautiful coastline and lighthouse, making it a popular tourist destination. In particular, the Inubozaki Lighthouse is famous, and its views are enjoyed by visitors. Additionally, there are facilities in the vicinity for activities such as swimming and enjoying seafood, making it an attractive destination for nature enthusiasts and tourists.`, author: '' },
    { type: `Accessories`, prefecture: `Chiba`, key: `chiba-orca`, language: `ja`, name: `シャチ`, description: `千葉県がシャチで有名なのは、千葉市にある「鴨川シーワールド」がシャチの飼育とショーを行っているためです。鴨川シーワールドは日本国内で最も有名な水族館の一つであり、シャチショーが人気を集めています。そのため、千葉県はシャチの観察やショーを楽しむ観光地として知られています。`, author: '' }, { type: `Accessories`, prefecture: `Chiba`, key: `chiba-orca`, language: `en`, name: `Orca`, description: `Chiba Prefecture is famous for its orcas (killer whales) primarily because of 'Kamogawa Sea World' located in Chiba City. Kamogawa Sea World is one of the most renowned aquariums in Japan, known for its orca shows, making Chiba Prefecture a popular destination for observing and enjoying orca shows.`, author: '' },
    { type: `Accessories`, prefecture: `Chiba`, key: `chiba-peanuts`, language: `ja`, name: `落花生`, description: `落花生（らっかせい）は、アーモンドやピスタチオのような種実類の一種で、主に地下で成長する植物です。英語では 'peanut' とも呼ばれます。落花生は地中に花を咲かせ、その後地下に果実を形成します。この果実は通常、豆のような形をしており、中には食べられる実が含まれています。`, author: '' }, { type: `Accessories`, prefecture: `Chiba`, key: `chiba-peanuts`, language: `en`, name: `peanut`, description: `The intriguing connection between Chiba Prefecture and peanuts feels almost magical, as if the local farmlands have a special touch for cultivating them. Blessed with a warm climate and fertile soil, this prefecture has transformed into a peanut paradise in Japan. Here, locally grown peanuts undergo a delicious metamorphosis into regional dishes and souvenirs that delight the palates of visitors. Chiba Prefecture's farmlands are truly a treasure trove for peanuts!`, author: '' },
    {
        type: `Accessories`, prefecture: `Tokyo`, key: `tokyo-tower`, language: `ja`, name: `東京タワー`, description: `東京都港区芝公園にある総合電波塔である。日本電波塔とも呼ばれる。
2020年現在は、東京スカイツリーに次ぐ日本で2番目に高い建造物である。'`, author: 'hamachan'
    }, {
        type: `Accessories`, prefecture: `Tokyo`, key: `tokyo-tower`, language: `en`, name: `Tokyo Tower`, description: `It is a general radio tower located in Shiba Park, Minato-ku, Tokyo. It is also called the Japan Radio Tower.
As of 2020, it is the second tallest structure in Japan after the Tokyo Sky Tree.'`, author: 'hamachan'
    },
    { type: `Accessories`, prefecture: `Tokyo`, key: `tokyo-yamanote`, language: `ja`, name: `山手線`, description: `山手線は、日本の首都である東京の都心部で環状運転を行い、多くの駅において、都心から各方面へと伸びるJR東日本や私鉄各社の放射路線および都心部を走る地下鉄各線に接続している。`, author: 'hamachan' }, { type: `Accessories`, prefecture: `Tokyo`, key: `tokyo-yamanote`, language: `en`, name: `Yamanote Line`, description: `The Yamanote Line operates in a loop in the center of Tokyo, the capital of Japan, and connects at many stations to radial lines of JR East and private railway companies extending from the city center to various directions, as well as to subway lines running through the city center.`, author: 'hamachan' },
    {
        type: `Accessories`, prefecture: `Kanagawa`, key: `ibaraki-natto`, language: `ja`, name: `納豆`, description: `全国で販売されている納豆の半分以上が茨城県産である。
今日の主流である小粒大豆を使用したのが特徴である。`, author: 'hamachan'
    }, {
        type: `Accessories`, prefecture: `Kanagawa`, key: `ibaraki-natto`, language: `en`, name: `natto`, description: `More than half of the natto sold in Japan is produced in Ibaraki Prefecture.
It is characterized by the use of small-grain soybeans, which are the mainstream today.`, author: 'hamachan'
    },
    { type: `Accessories`, prefecture: `Kanagawa`, key: `kanagawa-baybridge`, language: `ja`, name: `横浜ベイブリッジ`, description: `横浜ベイブリッジは、1989年に開通した神奈川県横浜市にある長さ860 mの斜張橋である。東京港方面と横浜港を結ぶ港湾物流の一端を担うことにより、都市部の渋滞を緩和する重要な輸送路である。`, author: 'hamachan' }, {
        type: `Accessories`, prefecture: `Kanagawa`, key: `kanagawa-baybridge`, language: `en`, name: `Yokohama Bay Bridge
`, description: `The Yokohama Bay Bridge, opened in 1989, is an 860 m long cable-stayed bridge in Yokohama, Kanagawa Prefecture. It is an important transportation route that eases traffic congestion in the urban area by providing a part of the port logistics connecting the Port of Tokyo and the Port of Yokohama.`, author: 'hamachan'
    },
    {
        type: `Accessories`, prefecture: `Kanagawa`, key: `kanagawa-yacht`, language: `ja`, name: `ヨット`, description: `神奈川県葉山町は、近代日本ヨット発祥の地。
1912年、慶應義塾の水泳部が伴走用の備品として作ったヨットを森戸沖で帆走させました。これが日本の近代ヨットの草分けとなったと言われています。`, author: 'hamachan'
    }, {
        type: `Accessories`, prefecture: `Kanagawa`, key: `kanagawa-yacht`, language: `en`, name: `yacht`, description: `Hayama Town in Kanagawa Prefecture is the birthplace of modern Japanese yachting.
In 1912, the Keio Swimming Club built a yacht as a companion piece of equipment and sailed it off the coast of Morito. This is said to have been the pioneer of modern Japanese yachting.`, author: 'hamachan'
    },
    {
        type: `Accessories`, prefecture: `Niigata`, key: `nigata-edamame`, language: `ja`, name: `枝豆`, description: `枝豆も新潟が誇る自慢の特産品です。
新潟県の枝豆栽培面積は日本一。
新潟市のさやまめ購入量も日本一。
新潟は枝豆王国なんです。`, author: 'hamachan'
    }, {
        type: `Accessories`, prefecture: `Niigata`, key: `nigata-edamame`, language: `en`, name: `Edamame`, description: `Edamame is another specialty Niigata is proud of.
Niigata Prefecture has the largest area of edamame cultivation in Japan.
Niigata City also purchases the largest amount of pods in Japan.
Niigata is the edamame kingdom.`, author: 'hamachan'
    },
    { type: `Accessories`, prefecture: `Niigata`, key: `niigata-riceear`, language: `ja`, name: `稲穂`, description: `米の生産量日本一の米どころ新潟県。なかでも魚沼地域で生産される魚沼コシヒカリは、全国的に名高いブランド米だ。`, author: 'hamachan' }, { type: `Accessories`, prefecture: `Niigata`, key: `niigata-riceear`, language: `en`, name: `Ear of rice`, description: `Niigata Prefecture is Japan's largest producer of rice. Among them, Uonuma Koshihikari produced in the Uonuma region is a nationally renowned brand of rice.`, author: 'hamachan' },
    { type: `Accessories`, prefecture: `Toyama`, key: `toyama-kutabe`, language: `ja`, name: `クタべ`, description: `顔が人で体が獣の疫病流行の予言を告げる予言獣です。 言い伝えによると、立山に薬種(薬となる原料)を掘りに来た者に「4、5年の内に原因不明の難病が流行するが、我が姿を見た者はその難を逃れられる。」と告げたといいます。 `, author: 'hamachan' }, { type: `Accessories`, prefecture: `Toyama`, key: `toyama-kutabe`, language: `en`, name: `kutabe`, description: `It is a prophetic beast with a human face and a beast body that predicts epidemics. According to legend, the beast told those who came to Tateyama to dig for medicinal seeds (the raw material for medicine), 'In four or five years there will be an epidemic of a disease of unknown cause, but whoever sees me will escape the danger. The person who sees me will be spared the trouble.`, author: 'hamachan' },
    {
        type: `Accessories`, prefecture: `Toyama`, key: `toyama-shiroebi`, language: `ja`, name: `シラエビ`, description: `シラエビは、エビの一種。サクラエビと同様深海に生息する小型種で、富山湾沿岸では食用に漁獲される。
「富山県のさかな」として、ブリ、ホタルイカと並んで指定されている。`, author: 'hamachan'
    }, {
        type: `Accessories`, prefecture: `Toyama`, key: `toyama-shiroebi`, language: `en`, name: `white shrimp
`, description: `The shiraebi is a species of shrimp. Like the sakuraebi, it is a small species that lives in the deep sea and is caught for food along the coast of Toyama Bay.
It is designated as one of Toyama Prefecture's 'Sana (Fish) of Toyama Prefecture' along with yellowtail and firefly squid.`, author: 'hamachan'
    },
    { type: `Accessories`, prefecture: `Toyama`, key: `toyama-tateyama`, language: `ja`, name: `立山`, description: `立山は、日本の富山県、飛騨山脈（北アルプス）北部の中部山岳国立公園内にある日本を代表する山。立山信仰の山号として知られている。`, author: 'hamachan' }, { type: `Accessories`, prefecture: `Toyama`, key: `toyama-tateyama`, language: `en`, name: `Tateyama`, description: `Tateyama is a representative mountain of Japan located in the Chubu-Sangaku National Park in the northern part of the Hida Mountains (Northern Alps) in Toyama Prefecture, Japan. It is known as the mountain name of the Tateyama faith.`, author: 'hamachan' },
    {
        type: `Accessories`, prefecture: `Ishikawa`, key: `ishikawa-kotoji`, language: `ja`, name: `琴柱灯籠`, description: `ことじ灯籠は、霞ヶ池にある２本足の灯籠です。
お琴の糸を支える柱「徽軫（ことじ）、琴柱（ことじ）」に似ているので、ことじ灯籠と呼ばれます。`, author: 'hamachan'
    }, {
        type: `Accessories`, prefecture: `Ishikawa`, key: `ishikawa-kotoji`, language: `en`, name: `Kotoji Stone Lantern`, description: `The Koji Lantern is a two-legged lantern located in Kasumigaike Pond.
They are called kotoji lanterns because they resemble the 'huishin' or kotojibashira, a pillar that supports the strings of a koto (Japanese harp).`, author: 'hamachan'
    },
    {
        type: `Accessories`, prefecture: `Ishikawa`, key: `ishikawa-kutani-kaga-gosai`, language: `ja`, name: `九谷五彩・加賀五彩`, description: `九谷五彩とは、紺青・赤・紫・緑・黄の五色で、主に九谷焼で用いられる色です。
加賀五彩とは、臙脂・藍・黄土・草・古代紫の五色で構成された、主に加賀友禅で用いられる色です。`, author: 'hamachan'
    }, {
        type: `Accessories`, prefecture: `Ishikawa`, key: `ishikawa-kutani-kaga-gosai`, language: `en`, name: `Kutani Gosai・Kaga Gosai`, description: `Kutani Gosai is composed of five colors: dark blue, red, purple, green, and yellow, and is mainly used in Kutaniyaki.
Kaga Gosai is composed of five colors: rouge, indigo, ochre, grass, and ancient purple, and is mainly used in Kaga Yuzen.`, author: 'hamachan'
    },
    { type: `Accessories`, prefecture: `Ishikawa`, key: `ishikawa-oyster`, language: `ja`, name: `能登牡蠣`, description: `石川県では能登が牡蠣の産地で有名です。能登は日本海に突き出した半島で、荒々しい波しぶきの日本海側は外浦、冬でも比較的穏やかな穴水湾・七尾湾側を内浦と呼びます。そんな穏やかな穴水湾や七尾湾には、牡蠣の餌になるプランクトンが多く牡蠣の養殖がさかんに行われているのです。`, author: 'hamachan' }, { type: `Accessories`, prefecture: `Ishikawa`, key: `ishikawa-oyster`, language: `en`, name: `Noto oysters`, description: `In Ishikawa Prefecture, Noto is famous for oysters. Noto is a peninsula jutting out into the Sea of Japan. The rough, splashing waters of the Sea of Japan side are called Outer Ura, while the relatively calm Anamizu Bay and Nanao Bay side are called Uchiura, even in winter. The calm waters of Anamizu Bay and Nanao Bay are rich in plankton, which feeds oysters, and oyster cultivation is very active there.`, author: 'hamachan' },
    { type: `Accessories`, prefecture: `Fukui`, key: `fukui-echizen-crab`, language: `ja`, name: `越前がに`, description: `「越前がに」とはズワイガニのオスのことで、福井県沖で水揚げされるもののみを指します。越前がに漁の解禁期間は旬を迎える11月6日から3月20日の約5ヶ月間。`, author: 'sugishige' }, { type: `Accessories`, prefecture: `Fukui`, key: `fukui-echizen-crab`, language: `en`, name: `Echizen crab`, description: `Echizen crab' refers to male snow crabs, and only those caught off the coast of Fukui Prefecture. The Echizen crab fishing season is open from November 6 to March 20, which is about 5 months.`, author: 'sugishige' },
    { type: `Accessories`, prefecture: `Fukui`, key: `fukui-heshiko`, language: `ja`, name: `ヘシコ`, description: `へしことは、青魚に塩を振って塩漬けにし、さらに糠漬けにした郷土料理。若狭地方（福井県南部）および京都府丹後半島の伝統料理で、越冬の保存食として重宝されている。`, author: 'hamachan' }, { type: `Accessories`, prefecture: `Fukui`, key: `fukui-heshiko`, language: `en`, name: `Heshiko`, description: `Heshikoshi is a local dish of salted and pickled bluefish. It is a traditional dish of the Wakasa region (southern Fukui Prefecture) and the Tango Peninsula of Kyoto Prefecture, and is valued as a preserved food for the winter.`, author: 'hamachan' },
    { type: `Accessories`, prefecture: `Fukui`, key: `fukui-yokan`, language: `ja`, name: `水ようかん`, description: `福井県の冬の食の代表格といえば水ようかん。全国的には夏に食べる涼菓子として知られていますが、福井県では雪が降る寒い時期に、こたつに入って食べるのが一般的。福井県民特有の食文化。`, author: 'hamachan' }, { type: `Accessories`, prefecture: `Fukui`, key: `fukui-yokan`, language: `en`, name: `Mizu-yokan`, description: `Mizuyokan is one of the most popular winter foods in Fukui Prefecture. Nationally, it is known as a cool snack eaten in summer, but in Fukui Prefecture, it is commonly eaten in a kotatsu (a Japanese low table over a kotatsu) during the cold, snowy season. This food culture is unique to the people of Fukui Prefecture.`, author: 'hamachan' },
    { type: `Accessories`, prefecture: `Yamanashi`, key: `yamanashi-fuji`, language: `ja`, name: `富士山`, description: `日本一の高さを誇る富士山は高さ3776m、地元では3776の車のナンバーが抽選になるほど人気です。`, author: '' }, { type: `Accessories`, prefecture: `Yamanashi`, key: `yamanashi-fuji`, language: `en`, name: `Mt.Fuji`, description: `Fuji, the tallest mountain in Japan, is 3,776 meters high, and is so popular among the locals that car license plates with the number 3,776 are drawn by lot.`, author: '' },
    {
        type: `Accessories`, prefecture: `Yamanashi`, key: `yamanashi-grape`, language: `ja`, name: `ぶどう`, description: `長い栽培の歴史を持ち、現在生産量日本一の山梨のぶどう。
水はけの良い扇状地や長い日照時間、昼夜の寒暖差などの環境条件が整う山梨県は、まさにぶどうにとって最適の生育地。`, author: 'hamachan'
    }, {
        type: `Accessories`, prefecture: `Yamanashi`, key: `yamanashi-grape`, language: `en`, name: `grape`, description: `Yamanashi Prefecture has a long history of grape cultivation and is currently Japan's largest producer of grapes.
Yamanashi Prefecture, with its well-drained fan-shaped terrain, long hours of sunlight, and temperature differences between day and night, is the perfect growing region for grapes.`, author: 'hamachan'
    },
    { type: `Accessories`, prefecture: `Nagano`, key: `nagano-kappa`, language: `ja`, name: `河童`, description: `河童は、日本の水の妖怪。水神、またはその依り代、またはその仮の姿ともいう。鬼、天狗と並んで日本の妖怪の中で最も有名なものの一つとされる。`, author: 'hamachan' }, { type: `Accessories`, prefecture: `Nagano`, key: `nagano-kappa`, language: `en`, name: `Kappa`, description: `Kappa are Japanese water monsters. They are also called water deities, or their dependents, or their temporary forms. Along with ogres and tengu, kappa are considered one of the most famous of all Japanese yokai.`, author: 'hamachan' },
    { type: `Accessories`, prefecture: `Nagano`, key: `nagano-oyaki`, language: `ja`, name: `おやき`, description: `長野県の郷土料理。土地ごとに特色があり、野沢菜などの具材を水に溶いた小麦粉、そば粉などの皮で包みます。おやきの調理法は焼き、蒸しや、蒸した後に焼く場合もあります。`, author: 'たくや' }, { type: `Accessories`, prefecture: `Nagano`, key: `nagano-oyaki`, language: `en`, name: `Oyaki`, description: `Local cuisine of Nagano Prefecture. Each region has its own characteristics, and ingredients such as Nozawana are wrapped in a wrapper made of flour or buckwheat flour dissolved in water. Oyaki can be prepared by grilling, steaming, or steaming and then grilling.`, author: 'たくや' },
    { type: `Accessories`, prefecture: `Gifu`, key: `gifu-gero`, language: `ja`, name: `下呂温泉`, description: `歴史は古く、江戸時代より湯治場として栄えてきた下呂温泉は草津、有馬と並ぶ日本三名泉のひとつ。泉質はアルカリ性単純泉。肌になめらかな独特の感じがある下呂の湯を楽しみに、年間多くの人が訪れている。白川郷より移築した合掌造りが点在する「下呂温泉合掌村」。春～秋には、「いでゆ朝市」も開催されている。`, author: 'sugishige' }, { type: `Accessories`, prefecture: `Gifu`, key: `gifu-gero`, language: `en`, name: `Gero Onsen`, description: `Gero Onsen has a long history and has flourished as a therapeutic hot spring since the Edo period, and is one of the three best springs in Japan along with Kusatsu and Arima. The spring water is alkaline simple spring water. Many people visit Gero every year to enjoy its hot water, which has a unique feeling of smoothness on the skin. Gero Onsen Gassho-mura (Gero Onsen Gassho Village) is dotted with gassho-zukuri (traditional Japanese-style architecture) that were relocated from Shirakawa-go. An 'Ideyu morning market' is also held from spring to fall.`, author: 'sugishige' },
    { type: `Accessories`, prefecture: `Gifu`, key: `gifu-gohei-mochi`, language: `ja`, name: `五平餅`, description: `五平餅は、岐阜県に伝わる郷土料理。粒が残る程度に半搗きにした粳米（うるちまい）飯にタレをつけ、串焼きにしたものである。`, author: 'hamachan' }, { type: `Accessories`, prefecture: `Gifu`, key: `gifu-gohei-mochi`, language: `en`, name: `Gohei mochi`, description: `Gohei-mochi is a local dish of Gifu Prefecture. It is made of half-polished Uruchimai rice with a sauce and grilled on a skewer.`, author: 'hamachan' },
    {
        type: `Accessories`, prefecture: `Gifu`, key: `gifu-sarubobo`, language: `ja`, name: `さるぼぼ`, description: `さるぼぼは、岐阜県飛騨地方で昔から作られる人形。
飛騨弁では、赤ちゃんのことを「ぼぼ」と言い、「さるぼぼ」は「猿の赤ん坊」の意味。近年では、土産として飛騨地方の観光地で多く見られる。`, author: 'hamachan'
    }, {
        type: `Accessories`, prefecture: `Gifu`, key: `gifu-sarubobo`, language: `en`, name: `Sarubobo`, description: `Sarubobo is a doll traditionally made in the Hida region of Gifu Prefecture.
In the Hida dialect, the word for baby is 'bobo' and 'sarubobo' means 'monkey baby. In recent years, Sarubobo can be found at many tourist attractions in the Hida region as souvenirs.`, author: 'hamachan'
    },
    { type: `Accessories`, prefecture: `Gifu`, key: `gifu-ukaibody`, language: `ja`, name: `鵜飼い`, description: `鵜飼いは、飼いならした鵜を使ってアユなどを獲る伝統的な漁法。日本では平安時代から貴族や武士などが鵜飼見物を行ってきた歴史があり、現代でも各地で観光としての鵜飼が行われている。特に岐阜県岐阜市の長良川鵜飼が有名である。`, author: 'hamachan' }, { type: `Accessories`, prefecture: `Gifu`, key: `gifu-ukaibody`, language: `en`, name: `Cormorant fishing`, description: `Cormorant fishing is a traditional fishing method that uses tame cormorants to catch ayu and other fish. In Japan, aristocrats and warriors have been enjoying cormorant fishing since the Heian period (794-1185), and cormorant fishing is still practiced as a form of tourism in many places in Japan today. The Nagara River cormorant fishing in Gifu City, Gifu Prefecture, is particularly famous.`, author: 'hamachan' },
    { type: `Accessories`, prefecture: `Shizuoka`, key: `shizuoka-fuji`, language: `ja`, name: `富士山`, description: `日本一の高さを誇る富士山は高さ3776m、地元では3776の車のナンバーが抽選になるほど人気です。`, author: '' }, { type: `Accessories`, prefecture: `Shizuoka`, key: `shizuoka-fuji`, language: `en`, name: `Mt.Fuji`, description: `Fuji, the tallest mountain in Japan, is 3,776 meters high, and is so popular among the locals that car license plates with the number 3,776 are drawn by lot.`, author: '' },
    { type: `Accessories`, prefecture: `Aichi`, key: `aichi-misodengaku`, language: `ja`, name: `味噌田楽`, description: `味噌田楽は、豆腐、あるいは里芋、茄子、こんにゃくなどを串に刺して焼き、砂糖や味醂を配合し柚子や木の芽などで香りをつけた味噌を塗りつけた料理である。`, author: 'hamachan' }, { type: `Accessories`, prefecture: `Aichi`, key: `aichi-misodengaku`, language: `en`, name: `Miso dengaku`, description: `Miso dengaku is a dish in which tofu, taro, eggplant, konnyaku, etc. are skewered, grilled, and coated with miso paste mixed with sugar and mirin and flavored with yuzu or kinome.`, author: 'hamachan' },
    { type: `Accessories`, prefecture: `Aichi`, key: `aichi-oguratoast`, language: `ja`, name: `小倉トースト`, description: `小倉トーストとは、愛知県の喫茶店で供されている軽食の一種。厚めにスライスした食パンをトーストした後に、マーガリンまたはバターを塗って小倉餡を乗せたもの。`, author: 'hamachan' }, { type: `Accessories`, prefecture: `Aichi`, key: `aichi-oguratoast`, language: `en`, name: `Ogura Toast`, description: `Ogura toast is a type of light meal served at coffee shops in Aichi Prefecture. Thickly sliced bread is toasted, then spread with margarine or butter and topped with Ogura-an (sweet bean paste).`, author: 'hamachan' },
    {
        type: `Accessories`, prefecture: `Aichi`, key: `aichi-tebasaki`, language: `ja`, name: `手羽先`, description: `手羽先唐揚げは、鶏の手羽先をから揚げにした料理。日本各地で食べられているが、特に愛知県名古屋市で多く食べられる。
鶏の手羽先をから揚げにしてタレを塗り、塩・胡椒・白ごまなどを振りかけて仕上げる。`, author: 'hamachan'
    }, {
        type: `Accessories`, prefecture: `Aichi`, key: `aichi-tebasaki`, language: `en`, name: `chicken wings`, description: `Tebasaki Karaage is a dish of deep-fried chicken wings. It is eaten throughout Japan, but is especially common in Nagoya City, Aichi Prefecture.
Chicken wings are deep-fried, coated with sauce, and sprinkled with salt, pepper, and white sesame seeds.`, author: 'hamachan'
    },
    {
        type: `Accessories`, prefecture: `Mie`, key: `mie-iseebi`, language: `ja`, name: `伊勢海老`, description: `四季を越え、4年の時を経て、一皿の極上へ'
伊勢海老は、海の時間旅行者とも言える存在。4年の歳月をかけて、海底の隠れ家でじっくりとその風格を磨き上げます。夜行性のこのエビは、日本近海の大型エビの王者として、そのプリップリの食感と深い甘みで君臨しています。
名前の由来は、伊勢からの海の贈り物として、古都・京都に届けられた歴史が背景に。そして、その成長の旅路は、アミノ酸を豊富に蓄え、食べる者を魅了する甘さを生み出します。
旬は秋から冬。しかし、真の美味しさを守るため、産卵期には三重県をはじめとした一部の産地では禁漁となります。特に三重県の志摩市浜島は、伊勢海老の故郷として名高い。
そして、その調理法は、一皿のアート。刺身でのピュアな甘み、姿焼きの力強さ、蒸し伊勢海老の繊細さ、そして味噌汁の深み。伊勢海老は、四季を越え、四年の時を経て、我々の前に極上の一皿として姿を現します。`, author: '@zuka20210101'
    }, {
        type: `Accessories`, prefecture: `Mie`, key: `mie-iseebi`, language: `en`, name: `Japanese spiny lobster`, description: `Beyond the four seasons, through four years of time, to a plate of excellence.'
The Ise shrimp is like a time traveler of the sea. Over the course of 4 years, it meticulously refines its grandeur in its hidden abode at the seabed. This nocturnal king of the large shrimps in the Japanese coastal waters reigns supreme with its succulent texture and profound sweetness.
Its name originates from its history as a marine gift from Ise, delivered to the ancient capital, Kyoto. And its growth journey accumulates a wealth of amino acids, captivating those who taste its enchanting sweetness.
Its prime season is from autumn to winter. However, to preserve its true delicacy, fishing is prohibited during the spawning season in certain regions, including Mie Prefecture. Notably, Shima City in Mie Prefecture is renowned as the homeland of the Ise shrimp.
And its culinary methods are an art in every dish. The pure sweetness in sashimi, the robustness in grilled form, the delicacy of steamed Ise shrimp, and the depth in miso soup. The Ise shrimp appears before us as a plate of excellence, transcending the four seasons and maturing through four years of time.`, author: '@zuka20210101'
    },
    { type: `Accessories`, prefecture: `Mie`, key: `mie-mochi`, language: `ja`, name: `餅`, description: `三重の旅路、餅の風味！' 伊勢神宮への古道を歩むと、時を超えた餅の物語が始まります。三重の土地は、餅米を育むのにぴったり。だからこそ、伊勢から桑名の「餅街道」には、旅人の胃袋と心をつかむ餅屋が立ち並ぶ。そして、その星の中でも輝くのが「赤福」。古びた建物の中で、五十鈴川の清流を模した伝統の赤福餅を守り続けています。名前の「赤福」は「赤心慶福」から。心を込めた餅づくりの情熱が、今も変わらず続いているのです。参宮客の増加や地域の祭りの需要、そして三重の恵まれた自然環境が、この餅文化の発展を後押し。一口食べれば、三重の餅の深い歴史と情熱を感じられること間違いなし！`, author: '@zuka20210101' }, { type: `Accessories`, prefecture: `Mie`, key: `mie-mochi`, language: `en`, name: `Rice cake`, description: `Journey through Mie, Savor the Mochi!' As you tread the ancient paths to Ise Shrine, a timeless tale of mochi unfolds. Mie's land is perfect for nurturing mochi rice, which is why the 'Mochi Highway' from Ise to Kuwana is lined with mochi shops that capture the hearts and appetites of travelers. Mochi has deeply rooted itself in Mie's culture, serving both as a companion for travelers and an offering to the gods. Among these shining stars is 'Akafuku.' Nestled in an old-fashioned building, it continues to cherish its traditional mochi, symbolizing the clear streams of the Isuzu River. The name 'Akafuku' originates from 'Akashin Keifuku,' representing heartfelt joy. The passion for mochi-making remains unchanged to this day. The influx of shrine visitors, local festival demands, and Mie's blessed natural environment have all propelled this mochi culture forward. With just one bite, you're sure to feel the deep history and passion of Mie's mochi!`, author: '@zuka20210101' },
    {
        type: `Accessories`, prefecture: `Shiga`, key: `shiga-funazushi`, language: `ja`, name: `鮒ずし`, description: `琵琶湖のメロディ、鮒寿しのハーモニー！'
滋賀県の誇り、鮒寿しは、琵琶湖のニゴロブナと乳酸菌発酵の絶妙なコラボレーション。塩でキュッと締めた魚と炊きたてのご飯が、自然のリズムで発酵して、伝統的な「本漬け」や香りを優しくした「甘露漬け」へと変身。このデリシャスなビートを味わうなら、3〜5ミリのスライスで、さらに吟醸酒とのデュエットがおすすめ。タイから中国までの歴史的背景を持ち、平安時代からのロングヒット。その秘密は、琵琶湖の恵まれた環境と、特別な日のハレの食文化。鮒寿し、それは滋賀の心、そして日本の伝統のシンフォニー。`, author: '@zuka20210101'
    }, {
        type: `Accessories`, prefecture: `Shiga`, key: `shiga-funazushi`, language: `en`, name: `Crucian Carp Sushi`, description: `The Melody of Lake Biwa, the Harmony of Funazushi!'
Pride of Shiga Prefecture, Funazushi is a sublime collaboration between Lake Biwa's Nigorobuna fish and lactic acid fermentation. Fish seasoned with salt and freshly cooked rice naturally ferment, transforming into the traditional 'Hondzuke' or the gentler-scented 'Kanrodzuke'. To savor this delicious beat, it's recommended to slice it 3-5mm thick and pair it with a duet of Ginjo sake. With historical roots stretching from Thailand to China and a long-standing hit since the Heian period, its secret lies in the blessed environment of Lake Biwa and the festive food culture of special days. Funazushi is the heart of Shiga and the symphony of Japanese tradition.`, author: '@zuka20210101'
    },
    {
        type: `Accessories`, prefecture: `Shiga`, key: `shiga-hieizan`, language: `ja`, name: `比叡山`, description: `不滅の法灯、比叡山の永遠の炎。'
比叡山延暦寺は、京都と滋賀の境界に聳える自然に恵まれた聖地で、標高848メートルからの絶景が広がります。この山は、天台宗の総本山として、最澄によって開かれた「一乗止観院」を起源とし、多くの僧侶たちの修行の場として知られています。しかし、1571年の織田信長の焼き討ちから、再建を遂げるまでの歴史も持つこの寺は、祇園祭とも深い結びつきがあります。そして、その中心には、1200年もの間、消えることのない「不滅の法灯」が静かに灯り続けています。この寺は、その深い歴史と文化、そして自然の美しさを併せ持つ、日本の宝とも言える場所です。`, author: '@zuka20210101'
    }, {
        type: `Accessories`, prefecture: `Shiga`, key: `shiga-hieizan`, language: `en`, name: `Mount Hiei`, description: `The Eternal Flame of Hieizan, the Undying Light of the Dharma.'
Hieizan Enryaku-ji Temple stands as a blessed sanctuary on the border of Kyoto and Shiga, offering breathtaking views from its altitude of 848 meters. Recognized as the head temple of the Tendai sect, it traces its origins to the 'Ichijo Shikan-in' founded by Saicho. Throughout its history, the temple has seen many transformations, from being razed by Oda Nobunaga in 1571 to its subsequent reconstruction. Intricately tied to the Gion Festival, at the heart of this temple burns the 'Undying Light of the Dharma,' a flame that has never been extinguished for 1,200 years. This temple embodies a harmonious blend of profound history, culture, and natural beauty, making it a true treasure of Japan.`, author: '@zuka20210101'
    },
    {
        type: `Accessories`, prefecture: `Kyoto`, key: `kyoto-daimonji`, language: `ja`, name: `大文字`, description: `大文字、小文字？いや、京都の夏は五文字！
京都の夏は、文字通り「熱い」！特に、五山送り火がそのピークを迎える時期。五山送り火、または「ござんのおくりび」とは、京都の夏の風物詩で、お盆の代表行事として知られています。この行事では、京都の街を囲む5つの山の火床に、特定の文字や形を模した送り火が焚かれます。具体的には、「大文字」「妙法」「船形」「左大文字」「鳥居形」という5つのデザインが山々に輝きます。そして、これらの送り火の中には、人々の願いや祈りを込めた護摩木も焚き上げられるんです。特に、市内中心部からも見える「大文字」は、まるでロックスターのような存在感を放っている。そして、「船形」の起源は、暴風雨からの無事帰国を祝って始まったと言われている。そんな中、「左大文字」は金閣寺の近くで輝き、金色のお寺とのコラボレーションが豪華すぎる！また、「鳥居形」は、弘法大師が石仏を刻んだ際の祝賀会のようなものだったとの伝承も。ちなみに、大文字山の点火には、約1000人もの人々が山を登るんだって。このイベントは、京都の夏の風物詩として、毎年多くのファンが待ち望んでいるんですよ！`, author: '@zuka20210101'
    }, {
        type: `Accessories`, prefecture: `Kyoto`, key: `kyoto-daimonji`, language: `en`, name: `Daimonji`, description: `Capital letters, lowercase? No, Kyoto's summer is all about the 'Five Characters'!
Kyoto's summer is, quite literally, 'hot'! Especially when the Gozan Okuribi, or the 'Five Mountain Send-off Fires', hits its peak. Known as a signature event of the Obon festival, the Gozan Okuribi is a summer tradition in Kyoto. During this event, fires are lit on the firebeds of five mountains surrounding Kyoto, forming specific characters or shapes. Specifically, the designs 'Daimonji', 'Myoho', 'Funagata', 'Hidari Daimonji', and 'Torii-gata' illuminate the mountains. Among these fires, wooden sticks called 'goma-ki', bearing people's wishes and prayers, are also burned. Particularly, the 'Daimonji', visible even from the city center, shines with the charisma of a rock star. The 'Funagata', on the other hand, is believed to have originated as a celebration of a safe return from a stormy voyage. Meanwhile, the 'Hidari Daimonji' glows near the Golden Pavilion, creating a too-lavish collaboration with the golden temple. The 'Torii-gata' is also said to have been a kind of celebration when Kobo Daishi carved a thousand stone Buddhas. By the way, about 1,000 people climb the Daimonji mountain for the lighting. Every year, countless fans eagerly await this iconic summer event in Kyoto!`, author: '@zuka20210101'
    },
    {
        type: `Accessories`, prefecture: `Kyoto`, key: `kyoto-yatsuhashi`, language: `ja`, name: `八ツ橋`, description: `伝説のバンドは解散しない。八つ橋、永遠のヒット！
🍪 基本情報: 八つ橋って、実は米粉と砂糖とニッキのロックバンド！焼いても良し、生で食べても良し。形？あの有名な琴をイメージしてるんだって。
🎸 新しいバージョンも: 1960年代からは、生バージョンがデビュー。最近のトレンドは、健康オタク向けの無添加や、カラフルでキュートな形のバージョン。まるで、新しいアルバムをリリースするロックバンドみたい！
🎤 歴史のミステリー: 八つ橋の起源、実は謎多きストーリー。箏曲のスーパースター、八橋検校が関係してるってウワサも。でも、ブレイクしたのは、大正天皇の即位の際。あの時、みんなが京都駅でお土産として買ってたんだって。
🍵 風味の宝庫: 八つ橋の味、まるでジャンルを超えるミュージシャンのよう。ニッキの香り、黒ゴマ、抹茶、苺… そして、新しい風味もどんどんデビュー中！`, author: '@zuka20210101'
    }, {
        type: `Accessories`, prefecture: `Kyoto`, key: `kyoto-yatsuhashi`, language: `en`, name: `Baked Yatsuhashi`, description: `Legendary bands never break up. Yatsuhashi, an eternal hit!
🍪 Basic Info: Yatsuhashi is like a rock band made of rice flour, sugar, and cinnamon! Great when baked, and also raw. The shape? It's inspired by that famous koto instrument.
🎸 New Versions: Since the 1960s, the raw version made its debut. The recent trend? Health-freak-friendly additive-free versions and colorful, cute shapes. Just like a rock band releasing a new album!
🎤 Historical Mystery: The origins of Yatsuhashi are shrouded in mystery. There's a rumor that the superstar of koto music, Yatsuhashi Kengyo, is involved. But its big break? During the enthronement of Emperor Taisho. Back then, everyone was buying it as a souvenir at Kyoto Station.
🍵 Flavor Treasure Trove: The taste of Yatsuhashi is like a musician transcending genres. The aroma of cinnamon, black sesame, matcha, strawberries... And new flavors are constantly making their debut!
`, author: '@zuka20210101'
    },
    {
        type: `Accessories`, prefecture: `Osaka`, key: `osaka-cheesecake`, language: `ja`, name: `チーズケーキ`, description: `大阪の味、忘れられない！おじさんの焼印、ふわとろチーズケーキ、一度でファン確定！
あんた、大阪来たらおじさんの焼印がある焼きたてチーズケーキ、絶対食べんとあかんで！めっちゃふわふわしてて、口の中でとろけるねん。一度食べたら、もう忘れられへん味やで。大阪に来たら、これは外せへん美味しさやから、ぜひ行ってみてな！`, author: '@zuka20210101'
    }, {
        type: `Accessories`, prefecture: `Osaka`, key: `osaka-cheesecake`, language: `en`, name: `cheesecake`, description: `Osaka's unforgettable flavor! With the old man's signature stamp, this fluffy, melt-in-your-mouth cheesecake will make you a fan from the first bite!'
Hey, if you come to Osaka, you absolutely gotta try that cheesecake with the old man's branding on it! It's super fluffy and just melts in your mouth. Once you taste it, you'll never forget that flavor. Seriously, if you're in Osaka, you can't miss out on this deliciousness. You gotta give it a shot!`, author: '@zuka20210101'
    },
    {
        type: `Accessories`, prefecture: `Osaka`, key: `osaka-jinbezame`, language: `ja`, name: `ジンベイザメ`, description: `大阪のおばちゃんとジンベイザメ、意外な共通点発見！
あんた、ジンベイザメって知ってる？大阪の海遊館に来たら、絶対に会わんと損やで！あのおっきな体して、実はめっちゃドジっとるんやで。水槽の中でゆっくりと泳いでるけど、時々自分の大きさを忘れて壁にぶつかったり、他の魚とぶつかることもあるねん。まるで大阪のおばちゃんが浴衣着て夏祭りで踊ってるとき、人とぶつかるみたいや（笑）。でも、海遊館のジンベイザメは特別やで。あの巨大な「太平洋」ゾーンで、他のたくさんの魚たちと一緒に泳いでる姿は、まるで自然の中の王者みたい。しかも、海遊館では、ジンベイザメのエサやりのデモンストレーションも見れることがあるねん。ほんま、そのドジっとる姿と、海遊館ならではの特別な展示がめっちゃ愛おしいんや。一度は見とかんと！大笑いすること間違いなしやで！`, author: '@zuka20210101'
    }, {
        type: `Accessories`, prefecture: `Osaka`, key: `osaka-jinbezame`, language: `en`, name: `whale shark`, description: `Osaka's aunties and the whale shark: an unexpected similarity discovered!
You know about the whale shark? If you come to the Osaka Aquarium (Kaiyukan), you absolutely can't miss seeing it! Despite its massive size, it's surprisingly clumsy. It swims slowly in the tank, but sometimes it seems to forget its size and bumps into the walls or other fish. It's kinda like when an Osaka lady in a yukata dances at a summer festival and bumps into people, you know? (haha). But the whale shark at Kaiyukan is special. In that huge 'Pacific Ocean' zone, watching it swim with so many other fish, it's like seeing the king of nature. Plus, at Kaiyukan, you sometimes get to see feeding demonstrations for the whale shark. Seriously, its endearing clumsiness combined with the unique displays of Kaiyukan is just so lovable. You have to see it at least once! You're sure to have a good laugh!`, author: '@zuka20210101'
    },
    {
        type: `Accessories`, prefecture: `Osaka`, key: `osaka-owarai`, language: `ja`, name: `大阪のお笑い`, description: `ボケて、ツッコんで、大阪スタイルで笑おう！
あんた、大阪のお笑いって知ってる？こっちのお笑いは、日本全国でもめっちゃ特別やで！まず、ボケとツッコミのやり取りが基本やねん。一人が変なこと言ったり、変なことしたりするのが「ボケ」で、それに対して「何言ってんねん！」とか「アホか！」と突っ込むのが「ツッコミ」や。このリズム感が大阪お笑いの魅力やねん。
それに、大阪のお笑い芸人は、日常の出来事や人々の様子を観察して、それを面白おかしくネタにするのが得意やで。ストリートライブや寄席での実践を積んで、独自のスタイルを築いていくんや。
ほんで、大阪のお笑いは、親しみやすさや地元愛が強いのも特徴やねん。観客との距離が近く、一緒に笑い合う感じが心地いいんや。
大阪に来たら、ぜひ生のお笑いを体験してみてな！めっちゃ楽しいで！`, author: '@zuka20210101'
    }, {
        type: `Accessories`, prefecture: `Osaka`, key: `osaka-owarai`, language: `en`, name: `Osaka comedy`, description: `Throw a joke, make a retort, and laugh in Osaka style!
Hey, ya ever heard of Osaka-style comedy? Our brand of humor here is somethin' special, even for all of Japan! First off, we got this thing where one person plays the fool, that's the 'boke', and the other calls 'em out on it, that's the 'tsukkomi'. It's this back-and-forth that's the real charm of Osaka comedy.
And, our comedians here? They're real good at takin' everyday stuff, things they see people do, and turnin' it into a laugh. They hone their craft on the streets and in traditional comedy theaters, developin' their own unique style.
Plus, there's this warmth and deep love for our hometown that shines through in Osaka comedy. There's a closeness with the audience, like we're all laughin' together.
If ya ever find yourself in Osaka, you gotta experience this live comedy for yourself! It's a blast, I promise ya!`, author: '@zuka20210101'
    },
    {
        type: `Accessories`, prefecture: `Hyogo`, key: `hyogo-akashiyaki`, language: `ja`, name: `明石焼き`, description: `これがもう、兵庫県の誇りやけんね！たこ焼きと似とるけど、明石焼きは小麦粉と卵の割合が多くて、めっちゃふわふわやで。それに、じん粉（浮き粉）を混ぜることで、とろ～りとした食感が出るんや。これをだし汁につけて食べるんやけど、そのだし汁は、かつおや昆布の出汁に、醤油や砂糖で味付けしてるねん。
明石焼きの発祥は、明石市の漁港やで。明石は、明石ダコが有名で、そのダコを使ったたこ焼きが考案されたんや。その後、小麦粉と卵を増やして、今のふわふわの明石焼きが誕生したんやけん。
兵庫には、明石焼きの名店がいっぱいあるで。兵庫に来たら、この明石焼きを食べずして帰るなんて、もったいないで！`, author: '@zuka20210101'
    }, {
        type: `Accessories`, prefecture: `Hyogo`, key: `hyogo-akashiyaki`, language: `en`, name: `Akashiyaki`, description: `Man, this right here is the pride of Hyogo, ya know? It might look a bit like takoyaki, but this Akashi-yaki's got more flour and eggs, making it super fluffy. And by mixin' in some 'jinko' (a type of starch), it gets this gooey texture. You dip it in dashi broth to eat, and that broth? It's seasoned with stuff like bonito and kelp, soy sauce, and sugar.
The birthplace of Akashi-yaki? That'd be the fishing port in Akashi city. Akashi's famous for its octopus, and that's what inspired the original takoyaki. Then they added more flour and eggs, and voilà! The fluffy Akashi-yaki we know today was born.
There's a ton of great Akashi-yaki places in Hyogo. If you come to Hyogo and don't try it, you're missin' out big time!`, author: '@zuka20210101'
    },
    {
        type: `Accessories`, prefecture: `Hyogo`, key: `hyogo-jst-meridian`, language: `ja`, name: `明石の標準子午線`, description: `これがもう、日本の時計のハートビートやで！東経135度のライン上にあるんやけど、要するに、日本中の時計がこのラインを見て「今、何時や？」って確認してるみたいなもんや。
明石市には、このすごいラインを示す「明石市時の碑公園」があるんや。行くと、まるでタイムトラベラーになった気分！ラインをまたぐと、時間を操る気分になれるかも（笑）。
そして、明石市科学館には、日本最古の天文時計「明石の時計台」があるで。これがまた、時の魔法使いみたいに、ずっと正確に時間を刻んでるんや。まるで、時間の守護神が住んでるかのよう！
だから、明石に来たら、この時の魔法の場所をぜひ体験してみてな！`, author: '@zuka20210101'
    }, {
        type: `Accessories`, prefecture: `Hyogo`, key: `hyogo-jst-meridian`, language: `en`, name: `Akashi Standard Meridian`, description: `This right here is like the heartbeat of Japan's clocks! It's on the line of 135 degrees east longitude, and basically, it feels like all the clocks in Japan are checking this line, asking, 'What time is it now?'
In Akashi City, there's this park called 'Akashi City Time Monument Park' that marks this incredible line. When you visit, you'll feel like a time traveler! Crossing that line might just give you the sensation of controlling time itself (haha).
And at the Akashi City Science Museum, there's Japan's oldest astronomical clock, the 'Akashi Clock Tower.' This thing, it ticks away time with the precision of a time wizard. It's as if the guardian deity of time resides there!
So, if you ever come to Akashi, you've gotta experience this magical spot of time!`, author: '@zuka20210101'
    },
    {
        type: `Accessories`, prefecture: `Hyogo`, key: `hyogo-tower-museum`, language: `ja`, name: `神戸ポートタワー`, description: `神戸市にそびえ立つ、ちょっと太鼓を伸ばしすぎたような形のタワーやで！1963年11月20日に完成して、神戸港の近くで「こっち見て～！」とアピールしてるんや。
このタワー、世界初のパイプ構造を持ってるんやけど、見た目はまるで和楽器の鼓をロングバージョンにしたみたい。そして、その美しい姿から「鉄塔の美女」とも呼ばれてるんやで。モデルさんもびっくりやろ？
神戸のランドマークとして、多くの人々に愛されてるんやけど、ちょっと今、2021年9月27日から美容整形（耐震化などの補強工事）のためお休み中。でも、2024年春には、もっとキレイになって帰ってくる予定やで！`, author: '@zuka20210101'
    }, {
        type: `Accessories`, prefecture: `Hyogo`, key: `hyogo-tower-museum`, language: `en`, name: `Kobe Port Tower`, description: `There's this tower in Kobe that kinda looks like someone stretched out a traditional Japanese drum a bit too much! Completed on November 20, 1963, it stands near Kobe Port, shouting, 'Look over here!' to everyone passing by.
This tower, right? It's got the world's first pipe structure, but its appearance? It's like someone took a traditional Japanese drum and made a long version of it. And thanks to its stunning looks, it's even been dubbed the 'Beauty of Steel Towers.' Even supermodels would be jealous, don't you think?
While it's a beloved landmark of Kobe, it's currently taking a little beauty break since September 27, 2021, for some cosmetic surgery (you know, seismic retrofitting and reinforcement). But come Spring 2024, it's planning to return, looking even more fabulous!`, author: '@zuka20210101'
    },
    { type: `Accessories`, prefecture: `Nara`, key: `nara-kakinohasushi`, language: `ja`, name: `柿の葉寿司`, description: `柿の葉寿司、これが奈良のごちそうやねん！サバと酢飯、柿の葉でくるんであるんやけど、どこから来たのかはちょっと謎やわ。昔の夏祭りや、戦の時の食べ物としても使われてたってんな。あの鮮やかな柿の葉、防腐効果もあって、サバのうまさが引き立つんや。五條や吉野では、夏祭りや大事な日には外せんねん。食べ方は、冷えすぎたらレンジであっためて、冬は焼いてもええねん。今でも奈良のおみやげとしてめっちゃ人気！奈良に来たら、この伝統のうまさ、味わわんともったいないで！`, author: '@zuka20210101' }, { type: `Accessories`, prefecture: `Nara`, key: `nara-kakinohasushi`, language: `en`, name: `Persimmon Leaf Sushi`, description: `Persimmon leaf sushi, that's Nara's special treat, ya know! It's mackerel and vinegared rice wrapped in persimmon leaves, but its origins are a bit of a mystery. Some say it was a dish for summer festivals back in the day, or even a meal during wartime. Those vibrant persimmon leaves, with their preservative qualities, really highlight the mackerel's flavor. In places like Gojo and Yoshino, it's a must-have for summer festivals and special occasions. If it's too cold, just warm it up in the microwave, and in winter, grilling it is also a good choice. It's still super popular as a souvenir from Nara! If you come to Nara and don't taste this traditional delight, you're missing out big time!`, author: '@zuka20210101' },
    { type: `Accessories`, prefecture: `Nara`, key: `nara-narazuke`, language: `ja`, name: `奈良漬`, description: `奈良漬け、これが奈良の伝統的な味の秘密やで！酒粕に複数回漬けることで、美しい「べっこう色」に変わるんや。主に白うりやきゅうり、生姜、なすなどを使うけど、製造業者によっては、たくさんの野菜や果物が使われることもあるんやで。奈良時代からの歴史があって、甘さや塩気、独特の風味が楽しめるんや。ちなみに、3.5％以上のアルコール分も含んでるから、ちょっと大人の味やね。奈良に来たら、この伝統の味をぜひ体験してみてな！`, author: '@zuka20210101' }, { type: `Accessories`, prefecture: `Nara`, key: `nara-narazuke`, language: `en`, name: `Narazuke`, description: `Nara-zuke, that's the secret flavor of Nara for ya! By pickling in sake lees multiple times, it transforms into a beautiful 'tortoiseshell color'. While it mainly uses ingredients like shiro-uri (white gourd), cucumber, ginger, and eggplant, depending on the producer, a variety of vegetables and fruits might be used. With a history dating back to the Nara period, you can enjoy its unique sweetness, saltiness, and distinct flavor. By the way, it contains over 3.5% alcohol, giving it a bit of an adult kick. If you're in Nara, you've gotta try this traditional taste!`, author: '@zuka20210101' },
    {
        type: `Accessories`, prefecture: `Wakayama`, key: `wakayama-meharizushi`, language: `ja`, name: `めはり寿司`, description: `和歌山の「めはりずし」、その名前だけで目を張るほど驚き！なぜって？
和歌山の南部、漁業や林業が盛んな地域で生まれたこのお弁当は、忙しい合間にサッと食べられる便利さから人気を集めたんだって。でも、その名前の由来は謎に包まれている。一説には「目を張るほど美味しいから」、また別の説では「おにぎりを目張りするように包むから」と言われてるよ。どっちが正解かは、食べてからのお楽しみ！
高菜を使ったこのおにぎり、昔は麦をたっぷり入れて握っていた時代も。でも、今は小さくて食べやすいサイズが主流。具材も多種多様で、時代とともに進化してるんだって。
和歌山の伝統を感じながら、目を張るほど驚く美味しさを味わってみて！'`, author: '@zuka20210101'
    }, {
        type: `Accessories`, prefecture: `Wakayama`, key: `wakayama-meharizushi`, language: `en`, name: `Mehari Zushi`, description: `Wakayama's 'Meharizushi', just hearing the name makes you widen your eyes in surprise! Why, you ask?
Originating from the southern part of Wakayama, where fishing and forestry thrived, this quick snack gained popularity as a go-to bite during busy work breaks. But the origin of its name remains a mystery. Some say it's because it's 'so delicious you'll open your eyes wide', while others believe it's because the rice is 'wrapped up tightly like an eye'. The real answer? Well, that's a delightful mystery to ponder as you eat!
This rice ball, made with pickled mustard greens, used to be packed with lots of barley back in the day. But now, it's evolved into a smaller, more bite-sized treat. The fillings have diversified over time, showcasing its evolution through the ages.
Experience Wakayama's tradition while savoring a taste that'll surely make your eyes pop!`, author: '@zuka20210101'
    },
    {
        type: `Accessories`, prefecture: `Wakayama`, key: `wakayama-mikan-kaki`, language: `ja`, name: `みかん、柿`, description: `和歌山の果物たち、笑顔の収穫タイム！
みかん、江戸時代からのベテラン！傾斜地での特訓を受け、糖度アップ！その結果、皇室までファンになっちゃうほどの逸品に。和歌山のみかん、甘さの裏には長い歴史が隠れてるんだよ！
柿、和歌山のスーパースター！日本一の生産量を誇るけど、実は多才。たねなし、紀の川、富有…と、名前だけでドラマが始まりそう！特に「あんぽ柿」、和菓子のような味わいで、柿の中のアイドルみたい！
和歌山、果物の宝庫！いちごや桃、梅も大活躍。観光農園で、果物狩りの冒険も待ってるよ！和歌山の果物たち、甘さと笑顔でお待ちしてます！'`, author: '@zuka20210101'
    }, {
        type: `Accessories`, prefecture: `Wakayama`, key: `wakayama-mikan-kaki`, language: `en`, name: `Wakayama mandarin oranges
Wakayama persimmon`, description: `Wakayama's Fruits: Harvest Time with a Smile!
Mikan (Japanese tangerines), the veterans since the Edo period! Trained on sloping terrains, they've leveled up their sweetness! As a result, they've charmed even the Imperial family. Behind Wakayama's mikan sweetness lies a long history!
Persimmons, Wakayama's superstars! Boasting the highest production in Japan, they're quite versatile. Seedless, Kino-kawa, Fuyu... just naming them feels like the start of a drama! Especially the 'Anpo Persimmon', with its traditional Japanese sweet flavor, it's like the idol of the persimmon world!
Wakayama, a treasure trove of fruits! Strawberries, peaches, and plums also shine brightly. Adventure awaits at the tourist farms with fruit-picking experiences! Wakayama's fruits are eagerly waiting with sweetness and smiles!`, author: '@zuka20210101'
    },
    {
        type: `Accessories`, prefecture: `Wakayama`, key: `wakayama-nankoume`, language: `ja`, name: `南高梅`, description: `和歌山の南高梅、大きさと歴史で圧倒！でも、その名前の由来、知ってる？
和歌山県みなべ町、ここから始まった南高梅の伝説。果実は、まるでジムに通ってるかのように大きく、平均22g～35g！緑から鮮やかな紅色への変身は、まるでファッションショーのモデルのよう。
「高田梅」から「南高梅」への名前の変遷は、まるでアイドルの改名みたい。小山貞一さんがスターを育て上げ、昭和25年の「梅のアカデミー賞」で優秀賞を獲得！
和歌山は、梅の生産で日本一。6割の梅が和歌山ブランド！南高梅は、その中でもトップアイドル。でも、彼女の主な仕事は、梅干しや梅酒のモデルさん。`, author: '@zuka20210101'
    }, {
        type: `Accessories`, prefecture: `Wakayama`, key: `wakayama-nankoume`, language: `en`, name: `Wakayama ume`, description: `Wakayama's Nanko Ume: Impressive in size and history! But do you know the origin of its name?
From Minabe town in Wakayama, the legend of Nanko Ume began. Its fruit is so large, as if it's been hitting the gym, averaging between 22g to 35g! Its transformation from green to a vibrant red is just like a model on a fashion runway.
The transition from the name 'Takada Ume' to 'Nanko Ume' feels like a pop idol's name change. Mr. Seiichi Koyama nurtured this star, and in 1950 (Showa 25), it won the 'Ume Academy Award'!
Wakayama is number one in Japan for plum production. 60% of the plums are Wakayama's brand! Among them, Nanko Ume is the top idol. However, her main gig? Being the model for pickled plums and plum wine.`, author: '@zuka20210101'
    },
    {
        type: `Accessories`, prefecture: `Okayama`, key: `oakayama-mamakari`, language: `ja`, name: `ままかり`, description: `隣のご飯も借りたくなる、岡山の美味、ままかり！
岡山の誇り、ままかりは、実は「サッパ」という名のニシン科の魚。その名前の由来は、隣の家からご飯を借りたくなるほどの美味しさから。岡山の家庭料理として定番の「ままかり寿司」は、郷土料理百選にも選ばれるほどの逸品。また、酢で柔らかくした「ままかり酢漬」は、ご飯のお供に最適。小さなままかりは、家庭でのアレンジも豊富。唐揚げや塩焼きとしても楽しめます。この岡山の宝石を、さまざまな方法で味わってみてはいかがでしょうか。`, author: '@zuka20210101'
    }, {
        type: `Accessories`, prefecture: `Okayama`, key: `oakayama-mamakari`, language: `en`, name: `Japanese Scaled Sardine`, description: `Can't Resist Borrowing a Bite, Okayama's Delight: Mamakari!'
Mamakari, the pride of Okayama, is actually a fish named 'Sappa' from the herring family. Its unique name, 'Mamakari,' originates from its irresistible taste, suggesting it's so delicious you'd want to borrow rice from your neighbor just to pair with it. The classic 'Mamakari Sushi' is a cherished dish in Okayama, even earning a spot in the esteemed 'Top 100 Local Dishes.' Additionally, the 'Mamakari Vinegar Pickle' is perfect as a side dish for rice. Being a small fish, Mamakari offers a plethora of home-cooking possibilities, from deep-frying to grilling. Why not dive into the diverse flavors of this Okayama gem?`, author: '@zuka20210101'
    },
    {
        type: `Accessories`, prefecture: `Okayama`, key: `okauama-muscat`, language: `ja`, name: `マスカット`, description: `岡山の太陽を閉じ込めた、マスカットの贅沢'
岡山、日本の「果物王国」。ここでは、130年以上の歴史を持つマスカット・オブ・アレキサンドリアをはじめ、ニューピオーネのワインレッドの美しさ、シャインマスカットの皮ごとの食感、オーロラブラックの甘さ、そして冬の紫苑の色鮮やかさといった多彩なブドウが栽培されています。岡山の北部の気候は、昼夜の寒暖差が大きく、ブドウの甘さや色づきを引き出します。これらのブドウは、岡山県の推奨品種として、その品質と多様性で知られています。岡山のブドウは、太陽の恵みを受けて、一粒一粒が贅沢な味わいを持っています。`, author: '@zuka20210101'
    }, {
        type: `Accessories`, prefecture: `Okayama`, key: `okauama-muscat`, language: `en`, name: `Muscat`, description: `Capturing the Sun of Okayama, the Luxury of Muscat'
Okayama, the 'Fruit Kingdom' of Japan. Here, a diverse range of grapes are cultivated, from the Muscat of Alexandria with its history spanning over 130 years, to the wine-red beauty of New Pione, the eat-whole allure of Shine Muscat, the sweetness of Aurora Black, and the vibrant hue of winter's Shien. The climate in the northern part of Okayama, with its significant temperature difference between day and night, enhances the sweetness and coloration of the grapes. These grapes are recognized as recommended varieties of Okayama Prefecture, known for their quality and diversity. Each grape from Okayama, blessed by the sun, offers a luxurious taste in every bite.`, author: '@zuka20210101'
    },
    { type: `Accessories`, prefecture: `Okayama`, key: `okayama-denim-jacket01`, language: `ja`, name: `デニムジャケット`, description: `①世界的な評価と綿花の栽培の歴史: 岡山デニムは日本のジーニストだけでなく、世界からも注目を集めています。特に児島地区は、綿花の栽培が盛んであり、これが繊維産業の発展の基盤となっています。`, author: '@zuka20210101' }, { type: `Accessories`, prefecture: `Okayama`, key: `okayama-denim-jacket01`, language: `en`, name: `denim jacket`, description: `①Global Recognition and History of Cotton Cultivation: Okayama denim is not only popular among Japanese jeans enthusiasts but also garners attention from around the world. Particularly, the Kojima district in Okayama is known for its thriving cotton cultivation, which has laid the foundation for the development of the textile industry.`, author: '@zuka20210101' },
    { type: `Accessories`, prefecture: `Okayama`, key: `okayama-denim-jacket02`, language: `ja`, name: `デニムジャケット`, description: `②藍染めの技術と伝統: 岡山は、伝統的な藍染め技術が受け継がれてきた地域で、この染色技術はデニムに深い色合いと独特の風合いをもたらします。特に「芯白」という染色技術は、海外でも高く評価されています。`, author: '@zuka20210101' }, { type: `Accessories`, prefecture: `Okayama`, key: `okayama-denim-jacket02`, language: `en`, name: `denim jacket`, description: `②Indigo Dyeing Technique and Tradition: Okayama has a legacy of traditional indigo dyeing techniques. This dyeing method imparts a deep hue and unique texture to the denim. The 'Shin-Haku' dyeing technique, in particular, is highly regarded even overseas.`, author: '@zuka20210101' },
    { type: `Accessories`, prefecture: `Okayama`, key: `okayama-denim-jacket03`, language: `ja`, name: `デニムジャケット`, description: `③シャトル織機と技術の革新: セルヴィッチデニムはシャトル織機でしか織れない特別なデニムで、存在感や雰囲気に圧倒的な違いがあります。岡山デニムは伝統的な製法を守りつつ、新しい技術やアイディアを取り入れています。`, author: '@zuka20210101' }, { type: `Accessories`, prefecture: `Okayama`, key: `okayama-denim-jacket03`, language: `en`, name: `denim jacket`, description: `③Shuttle Looms and Technological Innovation: Selvedge denim, which can only be woven on shuttle looms, has a distinct presence and ambiance. Okayama denim respects traditional methods while actively incorporating new techniques and ideas.`, author: '@zuka20210101' },
    {
        type: `Accessories`, prefecture: `Okayama`, key: `okayama-kibidango`, language: `ja`, name: `きびだんご`, description: `「桃太郎も驚き、鬼も笑顔。きびだんごの力」
岡山の宝、きびだんご。古くからの「黍団子」の伝統を受け継ぎながら、「吉備団子」として岡山市の吉備津神社で新たな命を吹き込まれました。この和菓子は、糯米粉、上白糖、水飴を主成分とし、糯黍粉の風味が特徴。湯炊きの技法で半透明の美しい団子に仕上げられます。岡山の和菓子職人・武田半蔵の手によって、現代のきびだんごが誕生しました。そして、桃太郎の伝説と結びつけることで、岡山の代表的な土産として名を馳せるように。このきびだんごは、その歴史と伝統、そして岡山の心を持ち、日本中、そして世界中の人々に愛され続けています。`, author: '@zuka20210101'
    }, {
        type: `Accessories`, prefecture: `Okayama`, key: `okayama-kibidango`, language: `en`, name: `Kibidango`, description: `Momotaro's Surprise, Even the Oni Smiles: The Power of Kibi Dango'
The treasure of Okayama, Kibi Dango. Inheriting the tradition of the ancient 'Kibi Dango,' it was reborn in Okayama City's Kibitsu Shrine as the 'Kibi Dango.' This confectionery is characterized by its main ingredients: glutinous rice flour, refined sugar, and syrup, with the unique flavor of millet flour. Through a boiling technique, it's transformed into a beautifully translucent dumpling. Thanks to the craftsmanship of Okayama's confectioner, Takeda Hanzo, the modern Kibi Dango was born. By associating it with the legend of Momotaro, it has become a renowned souvenir of Okayama. This Kibi Dango, with its history, tradition, and the spirit of Okayama, continues to be loved by people all over Japan and the world.`, author: '@zuka20210101'
    },
    {
        type: `Accessories`, prefecture: `Okayama`, key: `okayama-momotaro`, language: `ja`, name: `桃太郎`, description: `古代の伝説、今も生きる桃の勇者'
桃太郎、日本の語り継がれる英雄。桃から誕生し、仲間たちと共に鬼を退治するこの物語は、岡山の吉備地方に実際に存在したとされる伝承と深く結びついています。吉備の古代神話と桃太郎のエピソードは驚くほど一致し、岡山駅前の桃太郎像はその繋がりを物語っています。しかし、桃太郎の伝説は日本全国に広がり、各地で異なるバージョンが語られてきました。古代の他国の物語との共通点も指摘され、桃太郎は国際的な英雄とも言えるでしょう。岡山と桃太郎の繋がりは、キビ団子や桃の特産品とも深く関係しており、古代の歴史と物語が融合した岡山の桃太郎は、今も私たちの心に生き続けています。`, author: '@zuka20210101'
    }, {
        type: `Accessories`, prefecture: `Okayama`, key: `okayama-momotaro`, language: `en`, name: `Momotaro`, description: `Legends of Old, the Ever-Living Peach Hero'
Momotaro, a hero deeply rooted in Japanese folklore, emerges from a peach to vanquish demons with the help of his companions. This tale is intricately tied to the ancient traditions of the Okayama region, specifically the Kibi area, believed to have been the actual setting for the legend. The ancient myths of Kibi remarkably align with Momotaro's adventures, and the statue of Momotaro in front of Okayama Station stands as a testament to this connection. Yet, the legend of Momotaro resonates throughout Japan, with variations of the story told in different regions. Parallels have been drawn between Momotaro's tale and ancient stories from other countries, positioning him as an international hero. The bond between Okayama and Momotaro is further strengthened by the region's famed kibi dango and its iconic peaches. Merging ancient history with folklore, Okayama's Momotaro continues to captivate our hearts today.`, author: '@zuka20210101'
    },
    { type: `Accessories`, prefecture: `Okayama`, key: `okayama-peach02`, language: `ja`, name: `白桃`, description: `瀬戸内の温暖な気候に恵まれて収穫される岡山の白桃は、甘みたっぷりでなめらかな味、気品ある香り、上品な姿が特徴で、全国にその名を馳せています。`, author: 'hamachan' }, { type: `Accessories`, prefecture: `Okayama`, key: `okayama-peach02`, language: `en`, name: `white peach`, description: `Okayama's white peaches, harvested in the mild climate of the Seto Inland Sea, are famous throughout Japan for their sweet, smooth taste, noble aroma, and elegant appearance.`, author: 'hamachan' },
    { type: `Accessories`, prefecture: `Okayama`, key: `okayama-retainer`, language: `ja`, name: `家来`, description: `お腰につけたきび団子、一つ私にくださいな。`, author: 'miorobo' }, { type: `Accessories`, prefecture: `Okayama`, key: `okayama-retainer`, language: `en`, name: `attendant`, description: `Please give me one of the ”kibidango' you have on your waist.`, author: 'miorobo' },
    { type: `Accessories`, prefecture: `Hiroshima`, key: `hiroshima-battleship`, language: `ja`, name: `大和(戦艦)`, description: `大和は、大日本帝国海軍が建造した大和型戦艦の1番艦。2番艦の武蔵とともに、史上最大にして唯一46センチ砲を搭載した超弩級戦艦である。建造当初は、世界最大の戦艦だった。`, author: 'hamachan' }, { type: `Accessories`, prefecture: `Hiroshima`, key: `hiroshima-battleship`, language: `en`, name: `Yamato battleship`, description: `The Yamato was the first of the Yamato class battleships built by the Imperial Japanese Navy, and together with the Musashi, the second, it was the largest and only IJN battleship ever built with a 46 cm gun. When it was first built, it was the largest battleship in the world.`, author: 'hamachan' },
    { type: `Accessories`, prefecture: `Hiroshima`, key: `hiroshima-lemon`, language: `ja`, name: `広島レモン`, description: `広島レモンは、広島県で生産されているレモン。減農薬あるいは無農薬で栽培され防腐剤やワックスは使用していないため、安全に皮ごと食べられる。`, author: 'hamachan' }, { type: `Accessories`, prefecture: `Hiroshima`, key: `hiroshima-lemon`, language: `en`, name: `Hiroshima lemon`, description: `Hiroshima lemons are produced in Hiroshima Prefecture. They are grown with reduced or no pesticides, and no preservatives or wax are used, so they can be safely eaten with their peels.`, author: 'hamachan' },
    {
        type: `Accessories`, prefecture: `Hiroshima`, key: `hiroshima-oyster`, language: `ja`, name: `広島牡蠣`, description: `牡蠣の生産量全国1位を誇る広島では、全国の約６割シェアを占めています。
広島牡蠣の特徴は身がプリっとしていて濃厚な味わいが楽しめます。`, author: 'hamachan'
    }, {
        type: `Accessories`, prefecture: `Hiroshima`, key: `hiroshima-oyster`, language: `en`, name: `Hiroshima oysters`, description: `Hiroshima boasts the nation's largest production of oysters, accounting for approximately 60% of the national share.
Hiroshima oysters are characterized by their plump meat and rich flavor.`, author: 'hamachan'
    },
    { type: `Accessories`, prefecture: `Hiroshima`, key: `hiroshima-rice-scoop`, language: `ja`, name: `しゃもじ`, description: `日露戦争の時代、広島湾に位置する宮島は、軍人たちの出征地の一つとなっていたため、軍人たちは出征前、宮島の厳島神社を訪れ、無事に帰ってくることを祈念し、お守り代わりとして、しゃもじを奉納していたという。`, author: 'hamachan' }, { type: `Accessories`, prefecture: `Hiroshima`, key: `hiroshima-rice-scoop`, language: `en`, name: `rice-scoop`, description: `During the Russo-Japanese War, Miyajima Island, located in Hiroshima Bay, was one of the places where soldiers went to war. Before going to war, soldiers would visit Itsukushima Shrine on Miyajima to pray for their safe return and dedicate a rice-scoop as a good luck charm.`, author: 'hamachan' },
    { type: `Accessories`, prefecture: `Hiroshima`, key: `hiroshima-shrine`, language: `ja`, name: `厳島神社`, description: `広島県廿日市市の厳島（宮島）にある神社。全国に約500社ある厳島神社の総本社である。1996年にユネスコの世界文化遺産に「厳島神社」として登録されている。`, author: 'hamachan' }, { type: `Accessories`, prefecture: `Hiroshima`, key: `hiroshima-shrine`, language: `en`, name: `Itsukushima shrine`, description: `Itsukushima Shrine is located on Itsukushima (Miyajima) Island in Hatsukaichi City, Hiroshima Prefecture. It is the head shrine of approximately 500 Itsukushima shrines throughout Japan. It was registered as a UNESCO World Heritage Site in 1996 as Itsukushima Shrine.`, author: 'hamachan' },
    { type: `Accessories`, prefecture: `Hiroshima`, key: `hiroshima-wani`, language: `ja`, name: `ワニ料理`, description: `ワニ料理とは、広島県のうち三次市や庄原市などの備北地域で食べられる郷土料理である。`, author: 'hamachan' }, { type: `Accessories`, prefecture: `Hiroshima`, key: `hiroshima-wani`, language: `en`, name: `Crocodile dishes`, description: `Crocodile cuisine is a local dish eaten in the Bihoku region of Hiroshima Prefecture, including Miyoshi City and Shobara City.`, author: 'hamachan' },
    {
        type: `Accessories`, prefecture: `Yamaguchi`, key: `yamaguchi-kintaikyo`, language: `ja`, name: `錦帯橋`, description: `錦帯橋は、山口県岩国市の錦川に架橋された、5連の木造アーチ橋である。
日本三名橋や日本三大奇橋に数えられており、名勝に指定されている。`, author: 'hamachan'
    }, {
        type: `Accessories`, prefecture: `Yamaguchi`, key: `yamaguchi-kintaikyo`, language: `en`, name: `Kintai Bridge
`, description: `Kintai Bridge is a series of five wooden arch bridges over the Nishiki River in Iwakuni City, Yamaguchi Prefecture.
It is one of the three most famous bridges in Japan and one of the three most unusual bridges in Japan, and is designated as a place of scenic beauty.`, author: 'hamachan'
    },
    { type: `Accessories`, prefecture: `Yamaguchi`, key: `yamaguchi-motonosumiinari`, language: `ja`, name: `元乃隅稲成神社`, description: `元乃隅稲成神社は、山口県長門市油谷津黄にある神社。`, author: 'hamachan' }, {
        type: `Accessories`, prefecture: `Yamaguchi`, key: `yamaguchi-motonosumiinari`, language: `en`, name: `Motonosumi Inari Shrine
`, description: `Motonosumi Inari Shrine is located in Aburayatsukou, Nagato City, Yamaguchi Prefecture.`, author: 'hamachan'
    },
    { type: `Accessories`, prefecture: `Yamaguchi`, key: `yamaguchi-white -snake`, language: `ja`, name: `岩国の白蛇`, description: `岩国のシロヘビは、山口県岩国市に生息する白蛇である。この白蛇は遺伝によって白化が子孫の代にも受け継がれている。日本国指定の天然記念物。`, author: 'hamachan' }, { type: `Accessories`, prefecture: `Yamaguchi`, key: `yamaguchi-white -snake`, language: `en`, name: `Iwakuni's White Snake`, description: `The Iwakuni's White Snake is a white snake that lives in Iwakuni City, Yamaguchi Prefecture. This white snake's whitening is passed on to offspring generations through heredity. It is a natural monument designated by the Japanese government.`, author: 'hamachan' },
    { type: `Accessories`, prefecture: `Yamaguchi`, key: `yamaguhchi-tsunoshima-big-bridge`, language: `ja`, name: `角島大橋`, description: `角島大橋は、山口県下関市豊北町神田と同市豊北町角島間の海士ヶ瀬戸に架かる橋。全長1780メートル。`, author: 'hamachan' }, {
        type: `Accessories`, prefecture: `Yamaguchi`, key: `yamaguhchi-tsunoshima-big-bridge`, language: `en`, name: `Tsunoshima Ohashi Bridge
`, description: `The Kakunoshima Bridge spans the Amaigaseido (Amaigaseido) between Kanda and Kakunoshima in Toyokita-cho, Shimonoseki City, Yamaguchi Prefecture. It is 1,780 meters long.`, author: 'hamachan'
    },
    { type: `Accessories`, prefecture: `Tokushima`, key: `tokushima-awaodori`, language: `ja`, name: `阿波踊り`, description: `阿波国（現・徳島県）を発祥とする盆踊り。高知のよさこい祭りと愛媛の新居浜太鼓祭りと並ぶ四国三大祭りであり、日本三大盆踊りの一つとしても知られる。`, author: 'hamachan' }, { type: `Accessories`, prefecture: `Tokushima`, key: `tokushima-awaodori`, language: `en`, name: `Awa dance`, description: `A Bon dance that originated in Awa Province (now Tokushima Prefecture). It is one of the three major festivals in Shikoku, along with the Yosakoi Festival in Kochi and the Niihama Taiko Festival in Ehime, and is also known as one of the three major Bon dances in Japan.`, author: 'hamachan' },
    { type: `Accessories`, prefecture: `Tokushima`, key: `tokushima-citrus-sudachi`, language: `ja`, name: `すだち`, description: `すだちは、徳島県を代表する香酸柑橘類で、すがすがしい香りと、さわやかな酸味が特徴です。国内生産の９割以上が徳島県であり、生産量は全国１位を誇ります。`, author: 'hamachan' }, {
        type: `Accessories`, prefecture: `Tokushima`, key: `tokushima-citrus-sudachi`, language: `en`, name: `Sudachi`, description: `Sudachi is an aromatic citrus fruit representative of Tokushima Prefecture, characterized by its refreshing aroma and crisp acidity. More than 90% of the domestic production of sudachi comes from Tokushima Prefecture, which boasts the nation's largest production volume.
`, author: 'hamachan'
    },
    { type: `Accessories`, prefecture: `Tokushima`, key: `tokushima-narutomaki`, language: `ja`, name: `鳴門巻き`, description: `鳴門巻きは、魚肉のすり身を主原料とする断面が渦巻模様の蒲鉾の一種。白色と、食用色素で赤く着色した二色のすり身を用いて作られた細長い円筒形の魚肉練り製品である。`, author: 'hamachan' }, { type: `Accessories`, prefecture: `Tokushima`, key: `tokushima-narutomaki`, language: `en`, name: `Naruto roll`, description: `Narutomaki is a type of kamaboko made mainly from fish surimi with a spiral pattern on the cross section. It is a long, thin, cylindrical fish paste product made of two colors of surimi, one white and the other colored red with food coloring.`, author: 'hamachan' },
    {
        type: `Accessories`, prefecture: `Kagawa`, key: `kagawa-oliveoil`, language: `ja`, name: `オリーブオイル`, description: `オリーブの果実から得られる植物油である。
日常の食卓において様々な料理に使われている。
食用のほか、化粧品、薬品、また石けんなどの原料としても用いられる。`, author: 'sugishige'
    }, {
        type: `Accessories`, prefecture: `Kagawa`, key: `kagawa-oliveoil`, language: `en`, name: `olive oil`, description: `It is a vegetable oil obtained from the fruit of the olive tree.
It is used in a variety of daily dishes.
It is also used as a raw material for cosmetics, medicines, and soap.`, author: 'sugishige'
    },
    {
        type: `Accessories`, prefecture: `Ehime`, key: `ehime-dango`, language: `ja`, name: `坊っちゃん団子`, description: `坊っちゃん団子とは、愛媛県松山市の銘菓の一つ。
今日では、色の違う団子（上から抹茶・卵・小豆）を3個串刺しにしたものが「坊っちゃん団子」としては最もポピュラーな商品となっている。`, author: 'hamachan'
    }, {
        type: `Accessories`, prefecture: `Ehime`, key: `ehime-dango`, language: `en`, name: `Botchan dango
`, description: `Botchan dango is one of the famous confections of Matsuyama City, Ehime Prefecture.
Today, the most popular 'Botchan dango' is made by skewering three dumplings of different colors (matcha green tea, egg, and azuki bean from the top).`, author: 'hamachan'
    },
    { type: `Accessories`, prefecture: `Ehime`, key: `ehime-juice`, language: `ja`, name: `みかんジュース`, description: `日本有数のみかんの産地として知られる愛媛県。そんなみかん王国の愛媛県には「蛇口をひねるとみかんジュースが出てくる」という有名な都市伝説がありますが、実は本当にみかんジュースが出てくる蛇口が数カ所存在するのです。`, author: 'hamachan' }, { type: `Accessories`, prefecture: `Ehime`, key: `ehime-juice`, language: `en`, name: `tangerine juice`, description: `Ehime Prefecture is known as one of Japan's leading mandarin orange producing areas. There is a famous urban legend in Ehime Prefecture, the land of mandarin oranges, that when you turn on the tap, mandarin orange juice comes out, and in fact, there are several taps where mandarin orange juice really comes out.`, author: 'hamachan' },
    { type: `Accessories`, prefecture: `Ehime`, key: `ehime-mandarin-orange`, language: `ja`, name: `カメマンダリン`, description: `カラマンダリンは、いろいろな柑橘の中でも木になっている期間が最も長い品種です。そのため果汁がとにかく濃厚でみかんの果汁が濃縮されているような味わいです。`, author: 'hamachan' }, {
        type: `Accessories`, prefecture: `Ehime`, key: `ehime-mandarin-orange`, language: `en`, name: `cala mandarin
`, description: `Calamandarins have been on the tree the longest of all citrus varieties. The juice is therefore very rich and tastes like concentrated mandarin orange juice.`, author: 'hamachan'
    },
    {
        type: `Accessories`, prefecture: `Ehime`, key: `ehime-turt`, language: `ja`, name: `カメノテ`, description: `カメノテは、ミョウガガイ科に分類される甲殻類の一種である。
「爪」とも呼ばれる殻板を持って、「皮」とも呼ばれる柄部を外して抜き出した中身が食用となる。濃厚な旨味を持つ。愛媛県宇和島市ではよく食され、塩茹でや味噌汁の具などにする。`, author: 'hamachan'
    }, {
        type: `Accessories`, prefecture: `Ehime`, key: `ehime-turt`, language: `en`, name: `goose barnacle `, description: `The camenote is a type of crustacean classified in the Myogasteridae family.
It is edible when the shell plate, also called the 'claw,' is held in place and the handle, also called the 'skin,' is removed and the contents extracted. It has a rich flavor. It is often eaten in Uwajima City, Ehime Prefecture, boiled in salted water or served in miso soup.`, author: 'hamachan'
    },
    { type: `Accessories`, prefecture: `Kochi`, key: `kochi-seared-bonito`, language: `ja`, name: `カツオのたたき`, description: `鰹のタタキは刺身の一種で、高知県発のカツオを用いた料理。鰹を節に切り、表面のみをあぶったのち冷やして切り、薬味とタレをかけて食べるもので、別名「土佐造り」とも言う。`, author: 'hamachan' }, { type: `Accessories`, prefecture: `Kochi`, key: `kochi-seared-bonito`, language: `en`, name: `Seared bonito`, description: `Bonito tataki is a type of sashimi, a dish using bonito that originated in Kochi Prefecture. It is also known as 'Tosa-zukuri.' It is made by cutting bonito into knots, frying only the surface, cooling and cutting it, and serving it with condiments and sauce.`, author: 'hamachan' },
    { type: `Accessories`, prefecture: `Fukuoka`, key: `fukuoka-mentaiko`, language: `ja`, name: `明太子`, description: `明太子（めんたいこ）は、スケトウダラの卵巣（たらこ）を塩漬け熟成し、塩抜き後に唐辛子・昆布・砂糖・醤油などの調味液に漬け込んで発酵させた惣菜である。釜山の「唐辛子をまぶした塩漬けタラコ」である「明卵漬」が由来であり、ふくや（福岡の会社）の川原俊夫が日本人向けに製造法を変更し、砂糖を加えるなど味付けの塩辛さを減らして生み出された。ふくやが製造法を独占せずに他企業へ教えたことから日本全国へ普及した`, author: 'day-nao.⌐◨-◨' }, { type: `Accessories`, prefecture: `Fukuoka`, key: `fukuoka-mentaiko`, language: `en`, name: `Mentaiko`, description: `Mentaiko is a delicacy made by fermenting pollock roe (cod roe) in a salted, aged, and fermented solution of chili pepper, kelp, sugar, soy sauce, and other seasonings after the salt has been removed. The name derives from 'myeonggozuke' (salted cod roe covered with chili peppers) in Busan. Toshio Kawahara of Fukuya (a Fukuoka-based company) changed the production method for the Japanese market, adding sugar and other seasonings to reduce the saltiness of the product. Fukuya did not monopolize the production method, but taught it to other companies, and it spread throughout Japan.`, author: 'day-nao.⌐◨-◨' },
    { type: `Accessories`, prefecture: `Fukuoka`, key: `fukuoka-umegaeda`, language: `ja`, name: `梅ヶ枝餅`, description: `小豆餡を薄い餅の生地でくるみ、梅の刻印が入った鉄板で焼く焼餅である。出来上がると中心に軽く梅の刻印が入るようになっている。その名称は太宰府天満宮の祭神である菅原道真の逸話に由来しており、梅の味や香りがする訳ではない。`, author: 'day-nao.⌐◨-◨' }, {
        type: `Accessories`, prefecture: `Fukuoka`, key: `fukuoka-umegaeda`, language: `en`, name: `Umegae mochi
（mochi rice cake）`, description: `It is a baked rice cake made by wrapping azuki bean paste in thin rice cake dough and baking it on an iron plate with a plum imprint. When it is finished, the center of the mochi is lightly imprinted with a plum tree. The name comes from an anecdote about Sugawara Michizane, the god of Dazaifu Tenmangu Shrine, and it does not taste or smell like plums.`, author: 'day-nao.⌐◨-◨'
    },
    { type: `Accessories`, prefecture: `Saga`, key: `saga-saga`, language: `ja`, name: `SAGA（佐賀）`, description: `『SAGA』は佐賀県出身のお笑い芸人”はなわ”が作詞作曲したご当地ソングのサビフレーズ。`, author: 'day-nao.⌐◨-◨' }, { type: `Accessories`, prefecture: `Saga`, key: `saga-saga`, language: `en`, name: `SAGA`, description: `SAGA' is the chorus of a local song written by 'Hanawa,' a comedian from Saga Prefecture.`, author: 'day-nao.⌐◨-◨' },
    { type: `Accessories`, prefecture: `Saga`, key: `saga-yobuko-squid`, language: `ja`, name: `呼子のイカ`, description: `呼子（よぶこ）は、日本の佐賀県に位置する漁村で、特にその新鮮で美味しいイカで知られています。呼子のイカは地元漁師たちが獲る海の宝物で、その味わいは絶品です。呼子のイカは新鮮で柔らかく、甘みと旨みが豊かで、刺身や寿司、焼きイカ、イカめしなど、さまざまな料理に利用されます。漁港では毎日、新鮮なイカが水揚げされ、地元の市場やレストランで提供されています。`, author: 'day-nao.⌐◨-◨' }, { type: `Accessories`, prefecture: `Saga`, key: `saga-yobuko-squid`, language: `en`, name: `Yobuko squid`, description: `Yobuko is a fishing village located in Saga Prefecture, Japan, and is especially known for its fresh and delicious squid. The squid of Yobuko is a treasure of the sea caught by local fishermen, and its flavor is exquisite. Yobuko squid is fresh, tender, and rich in sweetness and flavor, and is used in a variety of dishes such as sashimi, sushi, grilled squid, and squid rice. Fresh squid is landed daily at the fishing port and served at local markets and restaurants.`, author: 'day-nao.⌐◨-◨' },
    { type: `Accessories`, prefecture: `Nagasaki`, key: `nagasaki-castella`, language: `ja`, name: `カステラ`, description: `カステラは、鶏卵を泡立てて小麦粉・水飴を混ぜ合わせた生地をオーブンで焼いた菓子の一つ。ポルトガルから伝わった南蛮菓子を元に日本で独自に発展した和菓子である。ポルトガルには「カステラ」という名の菓子はなく、原型とされる菓子もカステラとは見た目も製法も異なる。日本におけるカステラは長崎県が本場とされている。`, author: 'day-nao.⌐◨-◨' }, { type: `Accessories`, prefecture: `Nagasaki`, key: `nagasaki-castella`, language: `en`, name: `Castella`, description: `Castella is a type of confectionery made by whisking chicken eggs and mixing them with flour and starch syrup, then baking the dough in an oven. It is a Japanese confectionery that developed uniquely in Japan based on the Nanban confectionery introduced from Portugal. In Portugal, there was no confectionery named 'Castella,' and the original confectionery differs from Castella in both appearance and production method. In Japan, Castella is said to have originated in Nagasaki Prefecture.`, author: 'day-nao.⌐◨-◨' },
    {
        type: `Accessories`, prefecture: `Nagasaki`, key: `nagasaki-gunkanto`, language: `ja`, name: `軍艦島`, description: `軍艦島は海底炭坑の島で、岩礁の周りを埋め立てて造られた人工の島です。岸壁が島全体を囲い、高層鉄筋コンクリートが立ち並ぶその外観が軍艦に似ていることから「軍艦島」と呼ばれるようになりました。最盛期の1960年には約5300人もの人が住み、当時、日本一の人口密度を誇っていました。島内には小中学校や病院などを完備、映画館やパチンコホールなどの娯楽施設もあり生活の全てを島内で賄うことができたそうです。
島の炭坑の石炭はとても良質で、日本の近代化に大きく貢献しました。しかし、主要エネルギーが石炭から石油へと移行したことにより衰退の一途をたどり、1974年に閉山。島民はさまざまな思いを胸に島を去り無人島となりました。`, author: 'day-nao.⌐◨-◨'
    }, {
        type: `Accessories`, prefecture: `Nagasaki`, key: `nagasaki-gunkanto`, language: `en`, name: `Gunkanjima`, description: `Gunkanjima is an undersea coal mining island, an artificial island created by reclaiming a reef. At its peak in 1960, the island was home to approximately 5,300 people, making it the most densely populated island in Japan at the time. In addition to elementary and junior high schools, hospitals, and other facilities, the island was equipped with entertainment facilities such as movie theaters and pachinko halls to provide for all of the island's daily needs.
The coal produced from the island's coal mines was of extremely high quality and contributed greatly to Japan's modernization. However, with the shift from coal to oil as the main energy source, the coal mines began to decline and closed in 1974. The islanders left the island with various feelings, and the island became uninhabited.`, author: 'day-nao.⌐◨-◨'
    },
    {
        type: `Accessories`, prefecture: `Nagasaki`, key: `nagasaki-milkshake`, language: `ja`, name: `ミルクセーキ`, description: `「長崎ミルクセーキ」は、大正末期～昭和初期に長崎市で生まれたアイスデザート。
九州で初めてオープンした喫茶店『ツル茶ん』が、長崎の夏の猛暑をしのぎやすくする一品をと、砕いた氷を入れたミルクセーキを作ったのがはじまりといわれる。それが人気を博し、その後、市内の数々のお店で提供されるようになった。
現在は長崎の「食べるミルクセーキ」として全国的に知られる存在となっている。`, author: 'day-nao.⌐◨-◨'
    }, {
        type: `Accessories`, prefecture: `Nagasaki`, key: `nagasaki-milkshake`, language: `en`, name: `Milkshake`, description: `”Nagasaki Milkshake' is an iced dessert that originated in Nagasaki City in the late Taisho and early Showa periods.
It is said that the first coffee shop 'Tsuruchan,' which opened in Kyushu, made milkshakes with crushed ice to make it easier to beat the intense summer heat in Nagasaki. The drink became so popular that it was later served at numerous stores in the city.
Today, it is known throughout the country as Nagasaki's 'Eating Milkshake.`, author: 'day-nao.⌐◨-◨'
    },
    { type: `Accessories`, prefecture: `Kumamoto`, key: `kumamoto-hitomojiguruguru`, language: `ja`, name: `一文字のぐるぐる`, description: `江戸時代に、安くて美味しい酒のつまみとして考えだされたのがはじまりといわれている。一文字はわけぎ（ネギ）の別称。ぐるぐるとは、さっとゆでた一文字の白根の部分を軸に青い葉の部分をぐるぐると巻き付けたことで名付けられた。巻き付けた葉の先を指で切ると、とろりとした汁が出るので、これで巻き終わりをくっつける。こうしてひと口大にきっちり巻き付けることでザクっという食べごたえのある食感を生み、独特の香りと甘みを楽しめる。一文字だけでつくられるシンプルな料理だが、酢味噌や辛味噌を掛けるとごちそうになる。栄養豊富な一文字をたくさん食べられる。`, author: 'day-nao.⌐◨-◨' }, { type: `Accessories`, prefecture: `Kumamoto`, key: `kumamoto-hitomojiguruguru`, language: `en`, name: `Green Onion Guruguru`, description: `It is said to have originated in the Edo period (1603-1867) as a cheap and tasty snack for sake. Ichimonji is another name for wakamegi（green onion）. The name 'gururugi' comes from the fact that the white root of the quickly boiled Ichimonji is wrapped around a green leaf on its axis. When the tip of the wrapped leaf is cut off with a finger, a thick juice is released, which is used to attach the end of the roll. By tightly rolling the leaves into bite-sized pieces in this way, the texture of the leaves is very satisfying, and the unique aroma and sweetness can be enjoyed. It is a simple dish made only with ipponji, but it becomes a delicacy when served with vinegared miso or spicy miso. You can eat a lot of nutritious Ichimonji.`, author: 'day-nao.⌐◨-◨' },
    { type: `Accessories`, prefecture: `Kumamoto`, key: `kumamoto-ikinaridango`, language: `ja`, name: `いきなり団子`, description: `「いきなり団子」は、輪切りにしたさつまいもを小麦粉の生地で包んで蒸した素朴な郷土おやつ。県内一のさつまいも（からいも）生産地・大津をはじめ、阿蘇山麓周辺地域では、火山灰の影響でさつまいもの栽培が盛んなため、菊池平野や熊本平野の農家では、さつまいもを収穫する秋の農作業の間に食べるおやつとしてよくつくられていた。「いきなり団子」の「いきなり」というのは、熊本弁で「簡単・手早く・すぐに」などという意味で、短時間で簡単につくることができるほか、急な来客の際でもすぐに出せるというのが名前の由来といわれる。`, author: 'day-nao.⌐◨-◨' }, { type: `Accessories`, prefecture: `Kumamoto`, key: `kumamoto-ikinaridango`, language: `en`, name: `Ikinari dumpling`, description: `Ikinari Dango' is a simple local snack consisting of sliced sweet potatoes wrapped in flour dough and steamed. Because of the volcanic ash in Otsu, the largest producer of sweet potatoes in the prefecture, and other areas around the foot of Mt. Aso, farmers in the Kikuchi Plain and Kumamoto Plain often made these dumplings as a snack to eat during the fall farming season when the sweet potatoes are harvested. The word 'ikinari' in 'ikinari dango' means 'easy, quick, or immediately' in the Kumamoto dialect, and the origin of the name is said to be that the dumplings can be made quickly and easily, and can also be served immediately when there are sudden visitors.`, author: 'day-nao.⌐◨-◨' },
    { type: `Accessories`, prefecture: `Oita`, key: `oita-toriten`, language: `ja`, name: `とり天`, description: `大分県の郷土料理である「とり天」は、鶏もも肉もしくは胸肉を、醤油やにんにくで下味をつけ、サクッと揚げた天ぷらです。練りからしをそえた酢醤油で食べるのが一般的。地元の食文化を楽しむ一環として、ぜひとり天を試してみてください。その美味しさには、大分県への深い愛情が詰まっています。`, author: 'day-nao.⌐◨-◨' }, { type: `Accessories`, prefecture: `Oita`, key: `oita-toriten`, language: `en`, name: `chicken tempura`, description: `Toriten, a local delicacy of Oita Prefecture, is crispy deep-fried tempura of chicken thigh or breast, seasoned with soy sauce and garlic. It is usually served with vinegar and soy sauce with mustard paste. Try toriten as part of your enjoyment of local food culture. Its deliciousness is filled with deep affection for Oita Prefecture.`, author: 'day-nao.⌐◨-◨' },
    {
        type: `Accessories`, prefecture: `Oita`, key: `oita-yaseuma`, language: `ja`, name: `やせうま`, description: `「やせうま」は練った小麦粉を平たくのばしてゆでたものに、きなこや砂糖をまぶして食す、大分県の郷土料理で昔ながらのおやつ。生地ののばし方にはコツがあり、熟練者ほど薄く長くのばすことができるという。
大分県では、古くから畑を基盤とした穀物栽培が営まれており、小麦粉を使った粉食文化が発展した。「やせうま」のほかにも、小麦粉を使った料理は県内各地に浸透している。`, author: 'day-nao.⌐◨-◨'
    }, {
        type: `Accessories`, prefecture: `Oita`, key: `oita-yaseuma`, language: `en`, name: `Yaseuma`, description: `“Yaseuma' is a traditional snack of Oita Prefecture, made by kneading flour, rolling it out flat and boiling it, then sprinkling soybean flour and sugar over the top. There is a trick to rolling out the dough, and it is said that the more experienced one is, the thinner and longer the dough can be rolled out.
In Oita Prefecture, grain cultivation has been practiced in the fields since ancient times, and a flour-based food culture has developed. In addition to yaseuma, flour-based dishes have spread throughout the prefecture.`, author: 'day-nao.⌐◨-◨'
    },
    { type: `Accessories`, prefecture: `Miyazaki`, key: `miyazaki-mango`, language: `ja`, name: `マンゴー`, description: `宮崎県のマンゴーは、日本国内外で高い評価を受けており、日本国内でのブランド価値が非常に高い果物として知られています。宮崎県は、マンゴーの生産技術と品質管理において高い水準を維持し、新しい品種の開発や農業技術の向上にも取り組んでいます。宮崎マンゴーは、夏季に食べる美味しい贅沢なフルーツとして、多くの人々に愛されています。`, author: 'day-nao.⌐◨-◨' }, { type: `Accessories`, prefecture: `Miyazaki`, key: `miyazaki-mango`, language: `en`, name: `mango`, description: `Miyazaki Prefecture's mangoes are highly regarded both in Japan and abroad, and are known as a fruit with very high brand value in Japan. Miyazaki Prefecture maintains high standards in mango production technology and quality control, and is also working to develop new varieties and improve agricultural techniques. Miyazaki mangoes are a delicious luxury fruit enjoyed by many people during the summer season.`, author: 'day-nao.⌐◨-◨' },
    { type: `Accessories`, prefecture: `Miyazaki`, key: `miyazaki-takachihokyo`, language: `ja`, name: `高千穂峡`, description: `高千穂峡は、宮崎県に広がる美しい渓谷で、自然愛好家や文化探求家に魅力的な場所です。急峻な峡谷の壁と清流が特徴で、四季折々の景色が楽しめ、特に秋の紅葉や春の新緑が魅力的です。菊池大滝という滝は神話に登場し、神秘的な雰囲気を持っています。`, author: 'day-nao.⌐◨-◨' }, { type: `Accessories`, prefecture: `Miyazaki`, key: `miyazaki-takachihokyo`, language: `en`, name: `Takachiho Gorge`, description: `Takachiho Gorge is a beautiful gorge stretching across Miyazaki Prefecture that appeals to nature lovers and cultural explorers. It is characterized by steep canyon walls and clear streams, and its scenery is attractive in all four seasons, especially the autumn leaves in fall and the fresh greenery in spring. A waterfall called Kikuchi Great Falls appears in mythology and has a mysterious atmosphere.`, author: 'day-nao.⌐◨-◨' },
    { type: `Accessories`, prefecture: `Kagoshima`, key: `kagoshima-senganen`, language: `ja`, name: `仙巌園`, description: `仙巌園は、鹿児島県鹿児島市にある薩摩藩主島津氏の別邸・大名庭園。別名は磯庭園。島津氏第19代当主・島津光久によって磯に別邸として建設された。錦江湾を隔てて桜島を借景とする庭園となっており、国の名勝に指定されている。`, author: 'day-nao.⌐◨-◨' }, { type: `Accessories`, prefecture: `Kagoshima`, key: `kagoshima-senganen`, language: `en`, name: `sengan-en`, description: `Sengan-en Garden is the villa and feudal lord's garden of Shimazu, the feudal lord of Satsuma, located in Kagoshima City, Kagoshima Prefecture. It is also known as Iso-teien. It was built as a villa on Iso by Mitsuhisa Shimazu, the 19th head of the Shimazu clan. The garden is designated as a national place of scenic beauty with Sakurajima across Kinko Bay in the background.`, author: 'day-nao.⌐◨-◨' },
    { type: `Accessories`, prefecture: `Kagoshima`, key: `kagoshima-shochu`, language: `ja`, name: `焼酎`, description: `焼酎は鹿児島県で生産される伝統的なお酒です。鹿児島の温暖な気候と豊かな自然環境が、この焼酎の独特の風味に影響を与えています。麦、芋、さつまいもなど、さまざまな原料を使用して醸造され、独自の製法で蒸留されます。鹿児島焼酎は、そのまろやかで芳醇な味わいと、多彩な飲み方のバリエーションで知られています。ロック、お湯割り、お茶割り、果物割りなど、さまざまなスタイルで楽しむことができ、日本国内外で高く評価されています。`, author: 'day-nao.⌐◨-◨' }, { type: `Accessories`, prefecture: `Kagoshima`, key: `kagoshima-shochu`, language: `en`, name: `syochu liqueur`, description: `Activities are also available, and hiking and trekking can be enjoyed. Playing in the waterfall basin and strolling in the valley are also attractive. Takachiho Shrine is also located nearby and is known as a historical sanctuary associated with ancient myths and legends.`, author: 'day-nao.⌐◨-◨' },
    { type: `Accessories`, prefecture: `Okinawa`, key: `okinawa-fish`, language: `ja`, name: `南国の魚`, description: `沖縄の美しい海には、カラフルな魚たちが広がる壮観なサンゴ礁があります。この地域はスクーバダイビングやシュノーケリングの楽園として知られ、その魚たちの美しさはまさに絶景です。`, author: 'day-nao.⌐◨-◨' }, { type: `Accessories`, prefecture: `Okinawa`, key: `okinawa-fish`, language: `en`, name: `tropical fish`, description: `The beautiful waters of Okinawa are home to spectacular coral reefs with colorful fish. The area is known as a paradise for scuba diving and snorkeling, and the beauty of the fish is truly spectacular.`, author: 'day-nao.⌐◨-◨' },
    { type: `Accessories`, prefecture: `Okinawa`, key: `okinawa-satokibi`, language: `ja`, name: `サトウキビ`, description: `サトウキビは砂糖の材料の一つです。サトウキビは、強風や水不足に対して大変強い作物です。このため、台風や干ばつなどの厳しい自然環境にある沖縄県においては欠かすことのできない基幹作物であり、農家の約7割の方々がサトウキビを栽培しています。`, author: 'day-nao.⌐◨-◨' }, { type: `Accessories`, prefecture: `Okinawa`, key: `okinawa-satokibi`, language: `en`, name: `Sugarcane`, description: `Sugarcane is one of the ingredients of sugar. Sugarcane is a crop that is very resistant to strong winds and water shortages. For this reason, sugarcane is an indispensable core crop in Okinawa Prefecture, which has a harsh natural environment with typhoons and droughts, and about 70% of farmers grow sugarcane.`, author: 'day-nao.⌐◨-◨' },
    {
        type: `Accessories`, prefecture: `Okinawa`, key: `okinawa-sukugarasu`, language: `ja`, name: `スクガラス`, description: `スクガラスとはアイゴの稚魚を塩漬けにしたものです。沖縄の方言でアイゴの稚魚を「スク」、塩漬けを「カラス」といいます。お酒との相性もばっちりです！
沖縄では豆腐の上にのせて食べるのが一般的。ミネラルたっぷりの天然塩にじっくりと漬け込んだ独特の塩辛が美味しいおつまみですよ！`, author: 'day-nao.⌐◨-◨'
    }, {
        type: `Accessories`, prefecture: `Okinawa`, key: `okinawa-sukugarasu`, language: `en`, name: `Suku-karasu`, description: `Suku-karasu is a salted young sea bream. In the Okinawan dialect, 'suk' refers to the young of the sea bream, and 'karasu' refers to the salted fish. It goes perfectly with sake!
In Okinawa, it is usually eaten on top of tofu. It is a delicious snack with a unique salty taste that is slowly marinated in mineral-rich natural salt!`, author: 'day-nao.⌐◨-◨'
    },
    { type: `Heads`, prefecture: `Hokkaido`, key: `head-01-hokkaido`, language: `ja`, name: `北海道`, description: `北海道は、日本の北海道地方に位置する道。道庁所在地は札幌市で、47都道府県中唯一の「道」である。`, author: 'hamachan' }, { type: `Heads`, prefecture: `Hokkaido`, key: `head-01-hokkaido`, language: `en`, name: `Hokkaido`, description: `Hokkaido is a province located in the Hokkaido region of Japan. The capital of Hokkaido is Sapporo, and it is the only 'province' among the 47 prefectures in Japan.`, author: 'hamachan' },
    { type: `Heads`, prefecture: `Hokkaido`, key: `hokkaido-goryokaku`, language: `ja`, name: `五稜郭`, description: `五稜郭は、江戸時代末期に江戸幕府が蝦夷地の箱館（現在の北海道函館市）郊外に築造した稜堡式の城郭である。`, author: 'hamachan' }, { type: `Heads`, prefecture: `Hokkaido`, key: `hokkaido-goryokaku`, language: `en`, name: `Goryokaku`, description: `Goryokaku was a ridge-top fortification built by the Edo shogunate at the end of the Edo period on the outskirts of Hakodate in the Ezo region (present-day Hakodate City, Hokkaido).`, author: 'hamachan' },
    {
        type: `Heads`, prefecture: `Hokkaido`, key: `hokkaido-ishikari`, language: `ja`, name: `石狩鍋`, description: `石狩鍋は、鮭を主材料とし味噌で調味した日本の鍋料理であり、北海道の郷土料理である。
石狩鍋は、鮭の身や骨などのアラと豆腐、タマネギ・キャベツ・ダイコン・シイタケ・ニンジン・長ネギなどの野菜を、昆布で出汁を取った味噌仕立ての汁で煮込むものとされている。`, author: 'hamachan'
    }, {
        type: `Heads`, prefecture: `Hokkaido`, key: `hokkaido-ishikari`, language: `en`, name: `Ishikari pot`, description: `Ishikari nabe is a Japanese nabe dish made mainly of salmon and seasoned with miso, and is a local dish of Hokkaido.
Ishikari nabe consists of salmon meat and bones, tofu, onions, cabbage, radish, shiitake mushrooms, carrots, leeks, and other vegetables, simmered in a miso broth made from kombu seaweed.`, author: 'hamachan'
    },
    {
        type: `Heads`, prefecture: `Hokkaido`, key: `hokkaido-tokeidai`, language: `ja`, name: `札幌市時計台`, description: `札幌市時計台は、北海道札幌市にある歴史的建造物である。重要文化財。
三角屋根の上に大時計を載せた特徴的な外観の建築物であり、時計台としては日本最古である。`, author: 'hamachan'
    }, {
        type: `Heads`, prefecture: `Hokkaido`, key: `hokkaido-tokeidai`, language: `en`, name: `Sapporo City Clock Tower`, description: `Sapporo Clock Tower is a historical building in Sapporo, Hokkaido. It is an Important Cultural Property.
It is the oldest clock tower in Japan, with a triangular roof and a large clock on top.'`, author: 'hamachan'
    },
    { type: `Heads`, prefecture: `Aomori`, key: `aomori-apple`, language: `ja`, name: `りんご`, description: `青森県では、津軽地方に世界でも有数の生産団地が形成されており、現在、全国のりんご生産量の約60％を占める日本一のりんご王国となっています。青森県におけるりんご産業は、経済上のみならず、文化・観光面においても重要な役割を果たしています。`, author: 'hamachan' }, { type: `Heads`, prefecture: `Aomori`, key: `aomori-apple`, language: `en`, name: `apple`, description: `In Aomori Prefecture, one of the world's leading production complexes has been formed in the Tsugaru region, which currently accounts for approximately 60% of the nation's apple production, making it the largest apple kingdom in Japan. The apple industry in Aomori Prefecture plays an important role not only in the economy, but also in culture and tourism.`, author: 'hamachan' },
    { type: `Heads`, prefecture: `Aomori`, key: `aomori-dogu`, language: `ja`, name: `土偶`, description: `土偶は、縄文時代頃の日本列島で作られていた土人形を指す。`, author: 'hamachan' }, { type: `Heads`, prefecture: `Aomori`, key: `aomori-dogu`, language: `en`, name: `clay figure`, description: `Dogu refers to clay figures made in the Japanese archipelago around the Jomon period.`, author: 'hamachan' },
    { type: `Heads`, prefecture: `Aomori`, key: `aomori-goldfish-nebuta`, language: `ja`, name: `金魚ねぶた`, description: `青森の金魚ねぶたは、造花店（葬儀屋）が内職で作り始めたとされ、全体として丸みをおび、鱗が荒く、目の間隔が開いているので剽軽（ひょうきん）な顔であり、背びれは無い等々の特徴がある。`, author: 'hamachan' }, {
        type: `Heads`, prefecture: `Aomori`, key: `aomori-goldfish-nebuta`, language: `en`, name: `Goldfish Nebuta
`, description: `The Aomori goldfish Nebuta is said to have been made by a flower store (funeral parlor) as a side job, and is characterized by its rounded shape, rough scales, open eye spacing, and lack of a dorsal fin.`, author: 'hamachan'
    },
    {
        type: `Heads`, prefecture: `Aomori`, key: `head-02-aomori`, language: `ja`, name: `青森県`, description: `日本の東北地方に位置する県。県庁所在地は青森市。
青森県は東北地方及び本州の最北部でもあり、岩手県、秋田県を含む北東北の県である。`, author: 'hamachan'
    }, {
        type: `Heads`, prefecture: `Aomori`, key: `head-02-aomori`, language: `en`, name: `Aomori Prefecture`, description: `Aomori Prefecture is located in the Tohoku region of Japan. The prefectural capital is Aomori City.
Aomori is also the northernmost prefecture in the Tōhoku region and Honshū, the northern Tohoku region of Japan, which includes Iwate and Akita prefectures.`, author: 'hamachan'
    },
    {
        type: `Heads`, prefecture: `Iwate`, key: `head-03-iwate`, language: `ja`, name: `岩手県`, description: `日本の東北地方に位置する県。県庁所在地は盛岡市。
面積は日本の都道府県としては、北海道に次いで2番目に広い。県の人口およそ120万人のうち、100万人以上（8割強）は内陸部の北上盆地に集中し、沿岸部は平地が少なく小都市が点在する。`, author: 'hamachan'
    }, {
        type: `Heads`, prefecture: `Iwate`, key: `head-03-iwate`, language: `en`, name: `Iwate Prefecture`, description: `A prefecture located in the Tohoku region of Japan. The prefectural capital is Morioka City.
It is the second largest prefecture in Japan in terms of area after Hokkaido. Of the prefecture's population of approximately 1.2 million, more than 1 million (more than 80%) are concentrated in the inland Kitakami Basin, while the coastal area has few flat areas and is dotted with small cities.`, author: 'hamachan'
    },
    { type: `Heads`, prefecture: `Iwate`, key: `iwate-moriokamen`, language: `ja`, name: `盛岡三大麺`, description: `盛岡三大麺とは、盛岡冷麺、盛岡じゃじゃ麺、わんこそばの総称である。 `, author: 'hamachan' }, { type: `Heads`, prefecture: `Iwate`, key: `iwate-moriokamen`, language: `en`, name: `Morioka three major noodles`, description: `Morioka's three major noodles are Morioka cold noodles, Morioka jaja-men, and wanko-soba. `, author: 'hamachan' },
    { type: `Heads`, prefecture: `Iwate`, key: `iwate-nanbutekki`, language: `ja`, name: `南部鉄器`, description: `南部鉄器は、岩手県南部鉄器協同組合連合会の加盟業者によって作られている鉄器。74の事業所に730名（推計）の従事者がおり、年間生産額は約92億円。`, author: 'hamachan' }, { type: `Heads`, prefecture: `Iwate`, key: `iwate-nanbutekki`, language: `en`, name: `Nambu ironware`, description: `Nambu ironware is made by members of the Iwate Prefecture Nambu Ironware Cooperative Union, with an estimated 730 workers at 74 establishments and an annual production value of approximately 9.2 billion yen.`, author: 'hamachan' },
    {
        type: `Heads`, prefecture: `Miyagi`, key: `head-04-miyagi`, language: `ja`, name: `宮城県`, description: `日本の東北地方に位置する県。県庁所在地は仙台市。
東は太平洋に面し、県中部にある松島は多島海の景勝地で日本三景の一つに数えられる。
県内の平野部では稲作が盛んであり、ササニシキやひとめぼれの産地である。`, author: 'hamachan'
    }, {
        type: `Heads`, prefecture: `Miyagi`, key: `head-04-miyagi`, language: `en`, name: `Miyagi Prefecture`, description: `The prefecture is located in the Tohoku region of Japan. The prefectural capital is Sendai City.
Facing the Pacific Ocean to the east, Matsushima in the central part of the prefecture is one of the three most scenic spots in Japan.
Rice cultivation is flourishing in the plains of the prefecture, and Sasanishiki and Hitomebore are the main products of the prefecture.`, author: 'hamachan'
    },
    { type: `Heads`, prefecture: `Miyagi`, key: `miyagi-datemasamune`, language: `ja`, name: `伊達政宗`, description: `伊達 政宗は、山形県と宮城県の武将・戦国大名。伊達氏の第17代当主。近世大名としては、仙台藩の初代藩主である。`, author: 'hamachan' }, { type: `Heads`, prefecture: `Miyagi`, key: `miyagi-datemasamune`, language: `en`, name: `Date Masamune`, description: `Date Masamune was a general and warlord of Yamagata and Miyagi prefectures. He was the 17th head of the Date clan. As a feudal lord in modern times, he was the first lord of the Sendai clan.`, author: 'hamachan' },
    { type: `Heads`, prefecture: `Miyagi`, key: `miyagi-hoya`, language: `ja`, name: `ほや`, description: `宮城県におけるほやの生産量は全国第1位で、全国の約8割を占めています。ほやの大部分は養殖されたもので、ほやの養殖は宮城県で明治時代に始まったとされています。`, author: 'hamachan' }, { type: `Heads`, prefecture: `Miyagi`, key: `miyagi-hoya`, language: `en`, name: `Hoya`, description: `Miyagi Prefecture ranks first in Japan in the production of ascidians, accounting for about 80% of the national total. The majority of hoya are farm-raised, and hoya farming is said to have begun in Miyagi Prefecture during the Meiji period (1868-1912).`, author: 'hamachan' },
    { type: `Heads`, prefecture: `Miyagi`, key: `miyagi-tanabata`, language: `ja`, name: `仙台七夕`, description: `仙台七夕は、旧仙台藩内各地で五節句の1つ「七夕」に因んで毎年行われている年中行事および祭である。地元では「たなばたさん」とも呼ばれている。宮城県仙台市で開催されている仙台七夕まつりが特に著名で東北三大祭りの一つとされている。`, author: 'hamachan' }, { type: `Heads`, prefecture: `Miyagi`, key: `miyagi-tanabata`, language: `en`, name: `Sendai Tanabata`, description: `Sendai Tanabata is an annual event and festival held in various parts of the former Sendai clan in connection with Tanabata, one of the five festivals of the year. It is also known locally as 'Tanabata-san. The Sendai Tanabata Festival held in Sendai City, Miyagi Prefecture, is particularly famous and is considered one of the three major festivals in the Tohoku region.`, author: 'hamachan' },
    { type: `Heads`, prefecture: `Akita`, key: `akita-akitainu`, language: `ja`, name: `秋田犬`, description: `秋田犬は、日本の秋田県がその起源地であることからその名前が付けられました。この犬種は秋田県で発展し、育種されたため、「秋田犬」という名前が付けられました。秋田犬は日本国内外で非常に有名で、その忠実で賢い性格と美しい外観から多くの人々に愛されています。`, author: '' }, { type: `Heads`, prefecture: `Akita`, key: `akita-akitainu`, language: `en`, name: `Akita Inu`, description: `The Akita dog is named after the Akita Prefecture in Japan, where it originated. This breed developed and was bred in the Akita Prefecture, hence the name 'Akita Inu' or simply 'Akita' in English. Akita dogs are highly renowned both in Japan and internationally for their loyal and intelligent nature, as well as their beautiful appearance, making them beloved by many.`, author: '' },
    { type: `Heads`, prefecture: `Akita`, key: `akita-magewappa`, language: `ja`, name: `曲げわっぱ`, description: `秋田県が曲げわっぱで有名な理由は、長い歴史と木材の豊富さが結びついています。秋田の職人たちは代々伝統技術を受け継ぎ、高品質な曲げわっぱを作り出してきました。地元の誇りとして、これらの木製品は観光客にも販売され、秋田県のアイデンティティと文化の一部となっています。`, author: '' }, { type: `Heads`, prefecture: `Akita`, key: `akita-magewappa`, language: `en`, name: `bentwood`, description: `The reason Akita Prefecture is famous for 'bentwoodware' is the combination of its long history and abundant timber resources. Artisans in Akita have passed down traditional techniques through generations, producing high-quality bentwoodware. These wooden products, a source of local pride, are also sold to tourists and have become a part of Akita Prefecture's identity and culture.`, author: '' },
    { type: `Heads`, prefecture: `Akita`, key: `akita-namahage`, language: `ja`, name: `ナマハゲ`, description: `ナマハゲは、日本の秋田県などで行われる伝統的な祭りや行事で、人々が鬼のような仮面をつけて子供たちに厳しい教訓を説く役割を果たすキャラクターです。`, author: '' }, { type: `Heads`, prefecture: `Akita`, key: `akita-namahage`, language: `en`, name: `Namahage`, description: `In Japan, particularly in Akita Prefecture, 'Namahage' is a traditional festival or event where individuals wear demon-like masks and play the role of characters delivering stern lessons to children.`, author: '' },
    { type: `Heads`, prefecture: `Akita`, key: `head-05-akita`, language: `ja`, name: `秋田`, description: `秋田には伝統的な祭りや行事が豊富にあり、その中でも「竿燈祭り」や「ナマハゲ」など独自の文化が存続しています。これらの祭りは地元のアイデンティティを反映し、訪れる人々に独特の体験を提供します。`, author: '' }, { type: `Heads`, prefecture: `Akita`, key: `head-05-akita`, language: `en`, name: `Akita`, description: `Akita boasts a rich tapestry of traditional festivals and events, with unique cultural treasures like the 'Kanto Festival' and 'Namahage.' These celebrations not only reflect the local identity but also offer visitors distinctive experiences.`, author: '' },
    {
        type: `Heads`, prefecture: `Yamagata`, key: `head-06-yamagata`, language: `ja`, name: `山形県`, description: `日本の東北地方に位置する県。県庁所在地は山形市。県域の西側は日本海に面する。
県の中央には最上川が流れる。県民の多くがこの川の流域に住んでいるため、「母なる川」とも呼ばれている。`, author: 'hamachan'
    }, {
        type: `Heads`, prefecture: `Yamagata`, key: `head-06-yamagata`, language: `en`, name: `Yamagata Prefecture`, description: `Yamagata Prefecture is located in the Tohoku region of Japan. The prefectural capital is Yamagata City. The western side of the prefecture faces the Sea of Japan.
The Mogami River flows through the center of the prefecture. It is also called 'Mother River' because most of the residents of the prefecture live in the watershed of this river.`, author: 'hamachan'
    },
    { type: `Heads`, prefecture: `Yamagata`, key: `yamagata-hanagasa`, language: `ja`, name: `花笠まつり`, description: `花笠まつりは、スゲ笠に赤い花飾りをつけた花笠を手にし、「花笠音頭」にあわせて街を踊り練りあるく日本の祭である。`, author: 'hamachan' }, { type: `Heads`, prefecture: `Yamagata`, key: `yamagata-hanagasa`, language: `en`, name: `Hanagasa Festival`, description: `Hanagasa Matsuri is a Japanese festival in which people parade through the streets with sedge hats decorated with red flowers, dancing to the tune of “Hanagasa Ondo”.`, author: 'hamachan' },
    { type: `Heads`, prefecture: `Yamagata`, key: `yamagata-imoni`, language: `ja`, name: `芋煮`, description: `「芋煮」は里芋の収穫期の秋から冬によく食べられている郷土料理の一つ。「芋煮会」といって河原に鍋や材料を持込み、家族や友人などと一緒につくったり、運動会や地域行事の後などに野外でつくったりするほか、各家庭でもつくり食べられている。`, author: 'hamachan' }, { type: `Heads`, prefecture: `Yamagata`, key: `yamagata-imoni`, language: `en`, name: `Imoni`, description: `Imoni is one of the local dishes often eaten from autumn to winter, when taro is harvested. It is also cooked outdoors at sports meets or after community events, and is also prepared and eaten at home.`, author: 'hamachan' },
    { type: `Heads`, prefecture: `Yamagata`, key: `yamagata-zaookama`, language: `ja`, name: `蔵王御釜`, description: `宮城県にある火口湖で、五色沼とも呼ばれる。蔵王連峰の中央部の最も標高の高いエリアにあり、しばしば蔵王連峰の象徴として見られている。宮城県と山形県の県境から至近であり、宮城県のみならず山形県の名所としても紹介される。`, author: 'hamachan' }, { type: `Heads`, prefecture: `Yamagata`, key: `yamagata-zaookama`, language: `en`, name: `Zao pot`, description: `A crater lake in Miyagi Prefecture, also called Goshikinuma. It is located at the highest elevation in the central part of the Zao mountain range and is often seen as a symbol of the Zao mountain range. It is located very close to the border between Miyagi and Yamagata prefectures, and is often referred to as a famous place not only in Miyagi Prefecture but also in Yamagata Prefecture.`, author: 'hamachan' },
    { type: `Heads`, prefecture: `Fukushima`, key: `fukushima-peach`, language: `ja`, name: `桃`, description: `全国生産の20%を占める桃は“くだもの王国ふくしま”を代表する果物です。旬の時期も長く、6月下旬から9月中旬まで楽しめます。多くの産地が県内の盆地に集中しており、夏の暑さが甘みを凝縮されることで、美味しい桃に育ちます。`, author: 'hamachan' }, { type: `Heads`, prefecture: `Fukushima`, key: `fukushima-peach`, language: `en`, name: `peach`, description: `Peaches, which account for 20% of the nation's production, are a representative fruit of the 'Fruits Kingdom of Fukushima. Peaches are in season from late June to mid-September. Most of the production areas are concentrated in the basins of the prefecture, and the heat of summer condenses the sweetness of the peaches, resulting in delicious peaches.`, author: 'hamachan' },
    { type: `Heads`, prefecture: `Fukushima`, key: `fukushima-takizakura`, language: `ja`, name: `三春滝桜`, description: `三春滝桜は、福島県に所在する推定樹齢1000年超の国の天然記念物の枝垂れ性のサクラの巨木。三春の滝桜、また単に滝桜とも呼ばれる。日本五大桜または三大巨桜の1つとして知られる。`, author: 'hamachan' }, { type: `Heads`, prefecture: `Fukushima`, key: `fukushima-takizakura`, language: `en`, name: `Miharu Takizakura`, description: `The Miharu Takizakura is a giant weeping cherry tree, estimated to be over 1,000 years old and a national natural treasure, located in Fukushima Prefecture. It is also called Miharu-no-Takizakura or simply Takizakura. It is known as one of the five largest cherry trees in Japan or one of the three largest cherry trees in Japan.`, author: 'hamachan' },
    { type: `Heads`, prefecture: `Fukushima`, key: `fukushima-tsurugacastle`, language: `ja`, name: `鶴ヶ城`, description: `若松城は、福島県会津若松市にある城跡である。別名は鶴ヶ城で、地元ではこの名で呼ばれることが多い。また、同名の城が他にあるため、会津若松城とも呼ばれる。若松城跡として国の史跡に指定されている。`, author: 'hamachan' }, { type: `Heads`, prefecture: `Fukushima`, key: `fukushima-tsurugacastle`, language: `en`, name: `Tsuruga Castle`, description: `Wakamatsu Castle is a castle ruin located in Aizu-Wakamatsu City, Fukushima Prefecture. It is also known as Tsurugajo, and is often referred to by this name locally. It is also called Aizu Wakamatsu Castle because there is another castle of the same name. It is designated as a national historic site as the ruins of Wakamatsu Castle.`, author: 'hamachan' },
    {
        type: `Heads`, prefecture: `Fukushima`, key: `head-07-fukushima`, language: `ja`, name: `福島県`, description: `日本の東北地方に位置する県。県庁所在地は福島市。
面積は北海道、岩手県に次ぐ全国3位、都道府県別の人口は全国21位。`, author: 'hamachan'
    }, {
        type: `Heads`, prefecture: `Fukushima`, key: `head-07-fukushima`, language: `en`, name: `Fukushima Prefecture`, description: `Fukushima Prefecture is located in the Tohoku region of Japan. The prefectural capital is Fukushima City.
It is the third largest prefecture in Japan in terms of area (after Hokkaido and Iwate Prefectures) and the 21st most populous prefecture in Japan in terms of population.`, author: 'hamachan'
    },
    {
        type: `Heads`, prefecture: `Ibaraki`, key: `head-08-ibaraki`, language: `ja`, name: `茨木県`, description: `日本の関東地方に位置する県。県庁所在地は水戸市。
首都圏を構成し、都道府県人口は全国11位、面積は全国24位である。
県東部の鹿嶋市・神栖市では鹿島臨海工業地帯を形成し、工業化が進んでいる。`, author: 'hamachan'
    }, {
        type: `Heads`, prefecture: `Ibaraki`, key: `head-08-ibaraki`, language: `en`, name: `Ibaraki Prefecture`, description: `The prefecture is located in the Kanto region of Japan. The prefectural capital is Mito City.
It is the 11th largest prefecture in Japan in terms of population and the 24th largest in terms of area.
Kashima City and Kamisu City in the eastern part of the prefecture form the Kashima Coastal Industrial Zone, and industrialization is progressing.`, author: 'hamachan'
    },
    { type: `Heads`, prefecture: `Ibaraki`, key: `ibaraki-anglerfish`, language: `ja`, name: `茨木あんこう`, description: `茨城の冬の味覚を代表する魚となっている、あんこう。「常磐もの」として市場からも高評価です。とくに「茨城あんこう」は県内の底びき網漁師が漁獲した2kg以上の大きさで、漁獲後すぐに鮮度維持の作業を施されて水揚げされたもの。`, author: 'hamachan' }, { type: `Heads`, prefecture: `Ibaraki`, key: `ibaraki-anglerfish`, language: `en`, name: `Ibaraki anglerfish`, description: `Anglerfish is one of the most popular winter delicacies in Ibaraki. It is highly valued by the market as ''Tokiwa Mono'' (evergreen sea anglerfish). In particular, Ibaraki anglerfish are caught by bottom trawl fishermen in Ibaraki Prefecture, weighing 2 kg or more, and are landed immediately after being caught to maintain their freshness.`, author: 'hamachan' },
    { type: `Heads`, prefecture: `Ibaraki`, key: `ibaraki-hananuki-ravine`, language: `ja`, name: `花貫渓谷`, description: `花貫渓谷は茨城県高萩市にある花貫ダムの上流に位置する。周囲には、花貫ふるさと自然公園、花貫さくら公園などが整備され、名馬里ヶ淵に代表される渓谷美を楽しめる。カエデやミズナラが多く、新緑、紅葉が美しい。`, author: 'hamachan' }, { type: `Heads`, prefecture: `Ibaraki`, key: `ibaraki-hananuki-ravine`, language: `en`, name: `Hananuki Valley`, description: `Hananuki Valley is located upstream from Hananuki Dam in Takahagi City, Ibaraki Prefecture. Surrounded by Hananuki Furusato Nature Park and Hananuki Sakura Park, visitors can enjoy the beauty of the valley as represented by Meimarigafuchi. The area is home to many Japanese maples and quercus crispula, and the fresh green and red leaves are beautiful.`, author: 'hamachan' },
    { type: `Heads`, prefecture: `Ibaraki`, key: `ibaraki-rocket`, language: `ja`, name: `筑波宇宙センター`, description: `筑波宇宙センターは、茨城県つくば市の筑波研究学園都市内にある、宇宙航空研究開発機構（JAXA）が所有する宇宙開発計画関連の独立行政法人施設である。`, author: 'hamachan' }, { type: `Heads`, prefecture: `Ibaraki`, key: `ibaraki-rocket`, language: `en`, name: `Tukuba Space Center`, description: `The Tsukuba Space Center (TKSC) is an independent administrative facility related to the space program owned by the Japan Aerospace Exploration Agency (JAXA), located within the Tsukuba Science City in Tsukuba, Ibaraki Prefecture.`, author: 'hamachan' },
    {
        type: `Heads`, prefecture: `Tochigi`, key: `head-09-tochigi`, language: `ja`, name: `栃木県`, description: `日本の関東地方に位置する県。県庁所在地は宇都宮市。
県北部に日光国立公園があり、観光地・保養地の日光や那須が知られる。`, author: 'hamachan'
    }, {
        type: `Heads`, prefecture: `Tochigi`, key: `head-09-tochigi`, language: `en`, name: `Tochigi Prefecture`, description: `The prefecture is located in the Kanto region of Japan. The prefectural capital is Utsunomiya City.
Nikko National Park is located in the northern part of the prefecture, and the tourist and recreational areas of Nikko and Nasu are well known.`, author: 'hamachan'
    },
    { type: `Heads`, prefecture: `Tochigi`, key: `tochigi-sanzaru`, language: `ja`, name: `三猿`, description: `三猿とは3匹の猿が両手でそれぞれ目・耳・口を隠している意匠である。「見ざる、聞かざる、言わざる」という叡智の3つの秘密を示している像である。栃木県日光市の神厩舎に施されている。`, author: 'hamachan' }, { type: `Heads`, prefecture: `Tochigi`, key: `tochigi-sanzaru`, language: `en`, name: `three monkeys`, description: `The three monkeys are three monkeys with their hands covering their eyes, ears, and mouths, respectively. The image represents the three secrets of wisdom: 'See no evil, hear no evil, speak no evil. It is displayed in the Shinto stables in Nikko City, Tochigi Prefecture.`, author: 'hamachan' },
    { type: `Heads`, prefecture: `Tochigi`, key: `tochigi-strawberry`, language: `ja`, name: `苺`, description: `栃木県では、大消費地である首都圏に近い立地と冬場の豊富な日照量を活かし、いちごの生産が盛んに行われています。出荷量は昭和43年から連続日本一で、まさに“いちご王国”です。`, author: 'hamachan' }, { type: `Heads`, prefecture: `Tochigi`, key: `tochigi-strawberry`, language: `en`, name: `Strawberry`, description: `In Tochigi Prefecture, strawberry production is flourishing, taking advantage of its location near the Tokyo metropolitan area, a major consumption center, and abundant sunlight in winter. The amount of strawberries shipped has been the highest in Japan since 1968, and Tochigi is truly the 'Strawberry Kingdom.`, author: 'hamachan' },
    { type: `Heads`, prefecture: `Tochigi`, key: `tochigi-toshogu`, language: `ja`, name: `日光東照宮`, description: `日光東照宮は、日本の関東地方北部、栃木県日光市に所在する神社。日本全国の東照宮の総本社的存在である。また久能山東照宮・上野東照宮と共に三大東照宮の一つに数えられる。`, author: 'hamachan' }, { type: `Heads`, prefecture: `Tochigi`, key: `tochigi-toshogu`, language: `en`, name: `Nikko Toshogu`, description: `Nikko Toshogu Shrine is located in Nikko City, Tochigi Prefecture, in the northern part of the Kanto region of Japan. It is the headquarters of all Toshogu shrines in Japan. Together with Kunouzan Toshogu and Ueno Toshogu, it is one of the three major Toshogu shrines in Japan.`, author: 'hamachan' },
    {
        type: `Heads`, prefecture: `Gunma`, key: `gunma-kusatsu`, language: `ja`, name: `草津温泉`, description: `草津温泉は、日本の群馬県吾妻郡草津町に所在する温泉である。
毎分3万2300ℓ以上の自然湧出量は日本一。室町時代には万里集九が有馬温泉や下呂温泉とともに「三名泉」とし、江戸時代には林羅山もこれらの三温泉を「天下の三名泉」と記した。 `, author: 'hamachan'
    }, {
        type: `Heads`, prefecture: `Gunma`, key: `gunma-kusatsu`, language: `en`, name: `Kusatsu Onsen`, description: `Kusatsu Onsen is a hot spring located in Kusatsu-cho, Agatsuma-gun, Gunma Prefecture, Japan.
The natural gush of more than 32,300 liters per minute is the highest in Japan. In the Muromachi period (1336-1573), Manri Shukyu named it one of the 'Three Famous Hot Springs' along with Arima Onsen and Gero Onsen, and in the Edo period (1603-1868), Hayashi Razan also named these three hot springs the 'Three Famous Springs under Heaven. `, author: 'hamachan'
    },
    { type: `Heads`, prefecture: `Gunma`, key: `gunma-negi`, language: `ja`, name: `下仁田ネギ`, description: `下仁田ネギは、ネギの一種。群馬県甘楽郡下仁田町の冬季の特産品である。江戸時代からすでに栽培が行われており、徳川幕府や大名への献上品とされていた。一本ネギとしては太くて短いずんぐりした姿が特徴で、生だと非常に辛味が強いが、加熱すると甘味が引き出されてやわらかい食感になる。`, author: 'hamachan' }, { type: `Heads`, prefecture: `Gunma`, key: `gunma-negi`, language: `en`, name: `Shimonita green onion`, description: `Shimonita negi is a kind of green onion. It is a winter specialty of Shimonita-cho, Amaraku-gun, Gunma Prefecture. It has already been cultivated since the Edo period (1603-1867) and was considered an offering to the Tokugawa Shogunate and feudal lords. It is characterized by its short, thick, and stubby shape as a single green onion. It is very pungent when raw, but when cooked, its sweetness is brought out and it becomes soft and tender.`, author: 'hamachan' },
    {
        type: `Heads`, prefecture: `Gunma`, key: `gunma-takasakidaruma`, language: `ja`, name: `高崎だるま`, description: `高崎市は全国一のだるまの生産地です。
まゆは鶴、ひげは亀、縁起の良い二つの動物をお顔に表現した高崎だるま。「商売繁盛、家内安全、心願成就、目標達成」などの願いを両肩に書く金文字も特徴です。`, author: 'hamachan'
    }, {
        type: `Heads`, prefecture: `Gunma`, key: `gunma-takasakidaruma`, language: `en`, name: `Takasaki Daruma`, description: `Takasaki City is the largest producer of Daruma dolls in Japan.
Takasaki Daruma dolls feature two lucky animals on the face: a crane with eyebrows and a tortoise with whiskers. The Daruma doll also features gold characters written on both shoulders with wishes such as 'prosperous business, safety in the home, fulfillment of one's wishes, and achievement of goals.`, author: 'hamachan'
    },
    {
        type: `Heads`, prefecture: `Gunma`, key: `head-10-gunma`, language: `ja`, name: `群馬県`, description: `日本の関東地方に位置する県。県庁所在地は前橋市。
米麦栽培・養蚕・繊維工業などの伝統産業に加え、畜産・野菜栽培・機械工業が盛んで、県北西部は温泉・保養地である。`, author: 'hamachan'
    }, {
        type: `Heads`, prefecture: `Gunma`, key: `head-10-gunma`, language: `en`, name: `Gunma Prefecture`, description: `The prefecture is located in the Kanto region of Japan. The prefectural capital is Maebashi City.
In addition to traditional industries such as rice and wheat cultivation, sericulture, and textile industry, livestock breeding, vegetable cultivation, and machinery industry are thriving, and the northwestern part of the prefecture is a hot spring and recreation area.`, author: 'hamachan'
    },
    {
        type: `Heads`, prefecture: `Saitama`, key: `head-11-saitama`, language: `ja`, name: `埼玉県`, description: `日本の関東地方に位置する県。県庁所在地はさいたま市。
首都圏を構成し、都道府県別の人口は東京都、神奈川県、大阪府、愛知県に次ぐ全国第5位。日本で8つある内陸県の一つ。`, author: 'hamachan'
    }, {
        type: `Heads`, prefecture: `Saitama`, key: `head-11-saitama`, language: `en`, name: `Saitama Prefecture`, description: `Saitama Prefecture is located in the Kanto region of Japan. The prefectural capital is Saitama City.
It is the fifth most populous prefecture in Japan after Tokyo, Kanagawa, Osaka, and Aichi prefectures. It is one of the eight inland prefectures in Japan.`, author: 'hamachan'
    },
    { type: `Heads`, prefecture: `Saitama`, key: `saitama-tokinokane`, language: `ja`, name: `時の鐘`, description: `埼玉県川越市の中心部、幸町北部の蔵造りの街並みに建てられている鐘楼（時計台）。建物は、川越市指定有形文化財に指定されている。`, author: 'hamachan' }, { type: `Heads`, prefecture: `Saitama`, key: `saitama-tokinokane`, language: `en`, name: `bell of time`, description: `The bell tower (clock tower) is built in a warehouse-style district in the northern part of Saiwaicho, in the center of Kawagoe City, Saitama Prefecture. The building is designated as a tangible cultural property of Kawagoe City.`, author: 'hamachan' },
    {
        type: `Heads`, prefecture: `Saitama`, key: `saitama-whitetiger`, language: `ja`, name: `ホワイトタイガー`, description: `白虎は、中国の伝説上の神獣である四神の1つで、西方を守護する。白い虎の形をとる。
白変種による白い虎はホワイトタイガーとして実在する。`, author: 'hamachan'
    }, {
        type: `Heads`, prefecture: `Saitama`, key: `saitama-whitetiger`, language: `en`, name: `White Tiger`, description: `The white tiger is one of the four gods, legendary Chinese divine beasts that protect the west. It takes the form of a white tiger.
The white tiger by the white variant is real as the White Tiger.`, author: 'hamachan'
    },
    { type: `Heads`, prefecture: `Chiba`, key: `chiba-loquat`, language: `ja`, name: `びわ`, description: `最適な環境を提供しています。この特別な組み合わせが、千葉県を日本のびわの楽園に変えています。千葉県のびわは、その糖度の高さと芳醇な風味で知られ、口にするとまるで自然の甘さが溢れ出るかのようです。その魅力は、一度味わったら忘れられないほどです。`, author: '' }, {
        type: `Heads`, prefecture: `Chiba`, key: `chiba-loquat`, language: `en`, name: `Loquat`, description: `The reason loquats shine in Chiba Prefecture seems as if nature itself has bestowed its blessings upon this land. Thanks to its warm climate and fertile soil, Chiba Prefecture provides an ideal environment for cultivating loquats. This unique combination has transformed Chiba Prefecture into Japan's loquat paradise.
Loquats from Chiba Prefecture are renowned for their high sugar content and rich flavor, almost as if they overflow with the natural sweetness of the land. Their allure is unforgettable once tasted.
Furthermore, Chiba Prefecture's loquats are widely cherished in local cuisine and sweets, enriching the region's culinary culture. These fruits are a source of pride for Chiba Prefecture, cultivated with passion, and enjoyed to the fullest. Chiba Prefecture's loquats are a place where nature and human passion intersect, and their deliciousness fills the heart.`, author: ''
    },
    {
        type: `Heads`, prefecture: `Chiba`, key: `chiba-nanohana`, language: `ja`, name: `菜の花`, description: `千葉県で菜の花が有名な理由は、美しい黄色の花畑が特徴的で、春の風物詩として多くの人々に愛されているからです。春になると、千葉県の大地は広大な菜の花畑で覆われ、その景色は壮観です。これらの花畑は観光スポットとして人気があり、多くの観光客や地元の人々が訪れ、美しい風景を楽しんでいます。
また、菜の花は料理にも広く使用され、千葉県の郷土料理や地元のグルメには欠かせない食材として重要な役割を果たしています。その美味しさと多様性も、菜の花が有名な理由です。
千葉県の菜の花は、美しさと実用性を兼ね備え、地域の自然と文化を象徴する存在として、多くの人々に愛されています。`, author: ''
    }, {
        type: `Heads`, prefecture: `Chiba`, key: `chiba-nanohana`, language: `en`, name: `rapeseed blossoms`, description: `The reason why rapeseed blossoms are famous in Chiba Prefecture is as if the magic of spring has been bestowed upon this region with its distinctive fields of beautiful yellow flowers. As spring arrives, the Chiba Prefecture landscape transforms into vast expanses of rapeseed blossoms, creating a spectacular sight that captures the hearts of many. These fields have become popular tourist attractions, drawing both visitors and locals to revel in the breathtaking scenery.
Moreover, rapeseed blossoms are not just visually stunning; they also play a significant role in local cuisine. They are an essential ingredient in Chiba Prefecture's regional dishes and culinary delights. Their deliciousness and versatility contribute to why rapeseed blossoms are renowned.
Chiba Prefecture's rapeseed blossoms are a symbol of both natural beauty and practicality, deeply rooted in the region's culture and cherished by many with passion.`, author: ''
    },
    {
        type: `Heads`, prefecture: `Chiba`, key: `chiba-soysauce`, language: `ja`, name: `ソイソース`, description: `千葉県でソイソースが有名な理由は、まさにここがソイソースの魔法の故郷と言えるからです。千葉県は大豆生産の豊かな土地で、その大豆を使って高品質なソイソースが生み出されています。地元の農家たちは、自慢の大豆を使ってソイソースを仕込み、それが地元の誇りとなっています。
さらに、千葉県は首都圏に近く、ソイソースの供給がスムーズです。これが、多くのレストランや家庭で千葉県産のソイソースが愛用されている理由の一つです。千葉県のソイソースはまさに情熱の結晶であり、その美味しさは一度試す価値があります。ここはソイソース愛好家の聖地と言っても過言ではありません！`, author: ''
    }, {
        type: `Heads`, prefecture: `Chiba`, key: `chiba-soysauce`, language: `en`, name: `soy sauce`, description: `The reason why soy sauce is famous in Chiba Prefecture is akin to calling this place the magical homeland of soy sauce. Chiba Prefecture boasts abundant soybean cultivation, and these locally grown soybeans are used to create high-quality soy sauce. Local farmers take great pride in using their homegrown soybeans to craft this exquisite condiment.
Furthermore, Chiba Prefecture's proximity to the Tokyo metropolitan area ensures convenient distribution, making it a preferred choice for countless restaurants and households. That's why Chiba Prefecture is renowned as the birthplace of soy sauce, and its locally-produced soy sauce enjoys widespread popularity. It's not an exaggeration to call this place a sanctuary for soy sauce enthusiasts!`, author: ''
    },
    { type: `Heads`, prefecture: `Chiba`, key: `head-12-chiba`, language: `ja`, name: `千葉`, description: `千葉（Chiba）は、日本の首都圏に位置する県です。成田国際空港があり、国際的なアクセスが良い地域として知られています。また、東京ディズニーリゾートといった観光名所もあり、国内外から多くの観光客が訪れます。工業地域も発展し、国際的な貿易に貢献しています。千葉県は国際的なつながりが強い地域の一つです。`, author: '' }, { type: `Heads`, prefecture: `Chiba`, key: `head-12-chiba`, language: `en`, name: `Chiba`, description: `Chiba is a prefecture located in the Greater Tokyo Area of Japan. It is known for its accessibility with Narita International Airport serving as a major international gateway. Additionally, it boasts popular tourist destinations such as Tokyo Disney Resort, attracting visitors from both within Japan and around the world. The region has also seen industrial growth, contributing to international trade. Chiba Prefecture is recognized for its strong international connections.`, author: '' },
    {
        type: `Heads`, prefecture: `Tokyo`, key: `head-13-tokyo`, language: `ja`, name: `東京都`, description: `日本の首都。都庁所在地は新宿区。
人口は14,095,231人（2023年9月1日現在）。これは日本の都道府県の中では人口が最も多く、日本の人口のおよそ11%を占めている。人口密度も都道府県の中で最も高い。東京都を中心とする東京都市圏は人口3700万人を超える世界最大の都市圏である。日本の人口の約3割が集中し、ポーランドやモロッコ、カナダなどの国の総人口に匹敵する。`, author: 'hamachan'
    }, {
        type: `Heads`, prefecture: `Tokyo`, key: `head-13-tokyo`, language: `en`, name: `Tokyo`, description: `Capital of Japan. The capital city is Shinjuku-ku.
The population is 14,095,231 (as of September 1, 2023). This is the most populous prefecture in Japan, accounting for approximately 11% of the country's population. It also has the highest population density of all prefectures. The Tokyo metropolitan area, centered on Tokyo, is the largest metropolitan area in the world, with a population of over 37 million. It is home to about 30% of Japan's population and is comparable to the total population of countries such as Poland, Morocco, and Canada.`, author: 'hamachan'
    },
    {
        type: `Heads`, prefecture: `Tokyo`, key: `tokyo-station`, language: `ja`, name: `東京駅`, description: `東京都千代田区丸の内一丁目にある、JR東日本・JR東海・東京地下鉄（東京メトロ）の駅。JR東日本の在来線と新幹線各路線、JR東海の東海道新幹線、東京メトロの丸ノ内線が発着するターミナル駅である。
日本最大のビジネス街である丸の内・大手町・有楽町・八重洲・日本橋・京橋の中心に位置しており、地下街を経由し周辺のオフィスビルと直結している。`, author: 'hamachan'
    }, {
        type: `Heads`, prefecture: `Tokyo`, key: `tokyo-station`, language: `en`, name: `Tokyo Station`, description: `Located in Marunouchi 1-chome, Chiyoda-ku, Tokyo, JR East, JR Tokai, and Tokyo Subway (Tokyo Metro) station is a terminal station for JR East's conventional and Shinkansen lines, JR Tokai's Tokaido Shinkansen line, and Tokyo Metro's Marunouchi line.
The station is located in the center of Marunouchi, Otemachi, Yurakucho, Yaesu, Nihonbashi, and Kyobashi, the largest business districts in Japan, and is directly connected to the surrounding office buildings via an underground mall.`, author: 'hamachan'
    },
    {
        type: `Heads`, prefecture: `Tokyo`, key: `tokyo-tower`, language: `ja`, name: `東京タワー`, description: `東京都港区芝公園にある総合電波塔である。日本電波塔とも呼ばれる。
2020年現在は、東京スカイツリーに次ぐ日本で2番目に高い建造物である。`, author: 'hamachan'
    }, {
        type: `Heads`, prefecture: `Tokyo`, key: `tokyo-tower`, language: `en`, name: `Tokyo Tower`, description: `It is a general radio tower located in Shiba Park, Minato-ku, Tokyo. It is also called the Japan Radio Tower.
As of 2020, it is the second tallest structure in Japan after the Tokyo Sky Tree.`, author: 'hamachan'
    },
    { type: `Heads`, prefecture: `Kanagawa`, key: `head-14-kanagawa`, language: `ja`, name: `神奈川県`, description: `日本の関東地方に位置する県。県庁所在地は横浜市。都道府県別の人口では東京都に次ぐ第2位、昼間人口及び人口密度は東京都、大阪府に次ぐ第3位である。`, author: 'hamachan' }, { type: `Heads`, prefecture: `Kanagawa`, key: `head-14-kanagawa`, language: `en`, name: `Kanagawa Prefecture`, description: `The prefecture is located in the Kanto region of Japan. Its capital is Yokohama City. It is the second most populous prefecture in Japan after Tokyo, and the third most densely populated prefecture in terms of daytime population and population density after Tokyo and Osaka.`, author: 'hamachan' },
    { type: `Heads`, prefecture: `Kanagawa`, key: `ibaraki-anglerfish`, language: `ja`, name: `茨木あんこう`, description: `茨城の冬の味覚を代表する魚となっている、あんこう。「常磐もの」として市場からも高評価です。とくに「茨城あんこう」は県内の底びき網漁師が漁獲した2kg以上の大きさで、漁獲後すぐに鮮度維持の作業を施されて水揚げされたもの。`, author: 'hamachan' }, { type: `Heads`, prefecture: `Kanagawa`, key: `ibaraki-anglerfish`, language: `en`, name: `Ibaraki anglerfish`, description: `Anglerfish is one of the most popular winter delicacies in Ibaraki. It is highly valued by the market as 'Tokiwa Mono' (evergreen sea anglerfish). In particular, Ibaraki anglerfish are caught by bottom trawl fishermen in Ibaraki Prefecture, weighing 2 kg or more, and are landed immediately after being caught to maintain their freshness.`, author: 'hamachan' },
    { type: `Heads`, prefecture: `Kanagawa`, key: `kanagawa-curry`, language: `ja`, name: `金沢カレー`, description: `主に金沢市を中心とする石川県のカレーライス店で供される独自の特徴を持ったカレーライスを言う。`, author: 'hamachan' }, { type: `Heads`, prefecture: `Kanagawa`, key: `kanagawa-curry`, language: `en`, name: `Kanazawa curry`, description: `Curry rice with unique characteristics served at curry rice restaurants in Ishikawa Prefecture, mainly in Kanazawa City.`, author: 'hamachan' },
    {
        type: `Heads`, prefecture: `Kanagawa`, key: `kanagawa-king`, language: `ja`, name: `キングの塔`, description: `神奈川県庁舎は、神奈川県横浜市中区日本大通に位置する、神奈川県の行政機関（神奈川県庁）が入居する建物である。
塔屋は「キングの塔」として親しまれており、横浜税関本関庁舎（クイーンの塔）、横浜市開港記念会館（ジャックの塔）とともに「横浜三塔」の一つに数えられる。`, author: 'hamachan'
    }, {
        type: `Heads`, prefecture: `Kanagawa`, key: `kanagawa-king`, language: `en`, name: `Tower of the King`, description: `The Kanagawa Prefectural Government Building is located in Nihon-odori, Naka-ku, Yokohama City, Kanagawa Prefecture, and houses the administrative offices of Kanagawa Prefecture (Kanagawa Prefectural Government).
The tower is known as the 'King's Tower' and is one of the 'Three Towers of Yokohama' along with the Yokohama Customs Office (Queen's Tower) and the Yokohama Port Opening Memorial Hall (Jack's Tower).`, author: 'hamachan'
    },
    {
        type: `Heads`, prefecture: `Niigata`, key: `head-15-niigata`, language: `ja`, name: `新潟県`, description: `日本の中部地方に位置する県。県庁所在地は新潟市。
本州の中北部に位置し、北東から南西へ細長い領域を持つ。離島の佐渡島・粟島も擁する。日本有数の米所として知られる。`, author: 'hamachan'
    }, {
        type: `Heads`, prefecture: `Niigata`, key: `head-15-niigata`, language: `en`, name: `Niigata Prefecture`, description: `Niigata Prefecture is located in the Chubu region of Japan. The prefectural capital is Niigata City.
Located in the north-central part of Honshu, the prefecture has an elongated territory stretching from northeast to southwest. It has the remote islands of Sado and Awashima. It is known as one of the best rice-producing areas in Japan.`, author: 'hamachan'
    },
    {
        type: `Heads`, prefecture: `Niigata`, key: `niigata-sasadango`, language: `ja`, name: `笹団子`, description: `新潟県や山形県などの代表的な和菓子。
餡の入ったヨモギ団子を数枚のササの葉でくるみ、スゲまたはイグサの紐で両端を縛り、中央で結んで蒸したり茹でたりして作られる。`, author: 'hamachan'
    }, {
        type: `Heads`, prefecture: `Niigata`, key: `niigata-sasadango`, language: `en`, name: `Bamboo dumplings`, description: `Typical Japanese sweets from Niigata and Yamagata prefectures.
Yomogi dumplings filled with sweet bean paste are wrapped in several sheets of sasa leaves, tied at both ends with a string of sedge or Japanese cypress, tied in the center, and steamed or boiled.`, author: 'hamachan'
    },
    {
        type: `Heads`, prefecture: `Niigata`, key: `niigata-tulip`, language: `ja`, name: `チューリップ`, description: `チューリップは新潟市が全国第1位の出荷量を誇る花で、市花にも制定されています。
新潟市におけるチューリップの歴史は、小田喜平太がオランダから数万級の球根を輸入し、1919年にこの地で初めて栽培したのが始まりと言われています。歴史的にみても、新潟市は日本におけるチューリップ球根商業生産の“発祥の地”とされています。`, author: 'hamachan'
    }, {
        type: `Heads`, prefecture: `Niigata`, key: `niigata-tulip`, language: `en`, name: `tulip`, description: `The tulip is Niigata City's number one flower in terms of shipments in Japan, and has been designated as the city flower.
The history of tulips in Niigata City is said to date back to 1919, when Kiheita Oda imported tens of thousands of bulbs from the Netherlands and cultivated them here for the first time. Historically, Niigata City is considered the 'birthplace' of commercial tulip bulb production in Japan.`, author: 'hamachan'
    },
    {
        type: `Heads`, prefecture: `Toyama`, key: `head-16-toyama`, language: `ja`, name: `富山県`, description: `日本の中部地方に位置する県。県庁所在地は富山市。
石川県からの独立を果たした明治から産業の発展が続き、北陸工業地帯を形成。YKKや三協立山など大手金属製品メーカーの発祥の地として知られる。北陸3県を中心に展開する北陸銀行や北陸電力などの本拠地でもある。`, author: 'hamachan'
    }, {
        type: `Heads`, prefecture: `Toyama`, key: `head-16-toyama`, language: `en`, name: `Toyama Prefecture`, description: `Toyama Prefecture is located in the Chubu region of Japan. The prefectural capital is Toyama City.
Toyama is known as the birthplace of major metal product manufacturers such as YKK and Sankyo Tateyama. It is also home to Hokuriku Bank and Hokuriku Electric Power Company, which operate in the three Hokuriku prefectures.`, author: 'hamachan'
    },
    {
        type: `Heads`, prefecture: `Toyama`, key: `toyama-blackramen`, language: `ja`, name: `富山ブラック`, description: `富山県富山市中心部発祥のご当地ラーメンである。
1955年頃、富山市中心部で富山大空襲の復興事業に従事していた食べ盛りな若者のランチとして、また汗をかく肉体労働者のための塩分補給として、醤油を濃くしたスープのラーメンを作ったのがルーツである。`, author: 'hamachan'
    }, {
        type: `Heads`, prefecture: `Toyama`, key: `toyama-blackramen`, language: `en`, name: `toyama black`, description: `This local ramen originated in the center of Toyama City, Toyama Prefecture.
The origin of this dish dates back to around 1955, when ramen with a soup thickened with soy sauce was made as a lunch for young people in the center of Toyama City who were in the midst of eating out and engaged in reconstruction work after the Toyama Air Raid, and also as a salt supplement for manual laborers who worked up a sweat.`, author: 'hamachan'
    },
    { type: `Heads`, prefecture: `Toyama`, key: `toyama-kutabe`, language: `ja`, name: `クタべ`, description: `顔が人で体が獣の疫病流行の予言を告げる予言獣です。 言い伝えによると、立山に薬種(薬となる原料)を掘りに来た者に「4、5年の内に原因不明の難病が流行するが、我が姿を見た者はその難を逃れられる。」と告げたといいます。 `, author: 'hamachan' }, { type: `Heads`, prefecture: `Toyama`, key: `toyama-kutabe`, language: `en`, name: `kutabe`, description: `It is a prophetic beast with a human face and a beast body that predicts epidemics. According to legend, the beast told those who came to Tateyama to dig for medicinal seeds (the raw material for medicine), 'In four or five years there will be an epidemic of a disease of unknown cause, but whoever sees me will escape the danger. The person who sees me will be spared the trouble. `, author: 'hamachan' },
    { type: `Heads`, prefecture: `Toyama`, key: `toyama-raicho`, language: `ja`, name: `ライチョウ`, description: `日本アルプスの高山帯にすむ代表的な鳥です。「立山神の使い」といわれ、古くから県民に愛されてきました。特別天然記念物に指定されています。`, author: 'hamachan' }, { type: `Heads`, prefecture: `Toyama`, key: `toyama-raicho`, language: `en`, name: `grouse`, description: `It is a typical bird living in the alpine zone of the Japanese Alps. It is said to be the 'messenger of the Tateyama gods' and has been loved by the people of the prefecture since ancient times. It is designated as a special natural monument.`, author: 'hamachan' },
    {
        type: `Heads`, prefecture: `Ishikawa`, key: `head-17-ishikawa`, language: `ja`, name: `石川県`, description: `日本の中部地方に位置する県。県庁所在地は金沢市。
都道府県別の年間降水量は5番目に多い。特に冬は北西からの季節風が続くため降水量が多く、山間部は豪雪地帯となっている。降雪時に雷鳴を伴うことが多く、この現象は鰤（ブリ）が獲れる時期と重なることからブリ起こしと呼ばれている。`, author: 'hamachan'
    }, {
        type: `Heads`, prefecture: `Ishikawa`, key: `head-17-ishikawa`, language: `en`, name: `Ishikawa Prefecture`, description: `A prefecture located in the Chubu region of Japan. The prefectural capital is Kanazawa City.
The prefecture has the fifth highest annual precipitation among prefectures. In winter, precipitation is especially heavy due to the continuous monsoon from the northwest, and mountainous areas are heavy snowfall areas. Snowfall is often accompanied by thunderstorms, and this phenomenon is known as 'yellowtail awakening' because it coincides with the time of year when yellow-tail is caught.`, author: 'hamachan'
    },
    { type: `Heads`, prefecture: `Ishikawa`, key: `ishikawa-curry`, language: `ja`, name: `金沢カレー`, description: `主に金沢市を中心とする石川県のカレーライス店で供される独自の特徴を持ったカレーライスを言う。`, author: 'hamachan' }, { type: `Heads`, prefecture: `Ishikawa`, key: `ishikawa-curry`, language: `en`, name: `Kanazawa curry`, description: `Curry rice with unique characteristics served at curry rice restaurants in Ishikawa Prefecture, mainly in Kanazawa City.`, author: 'hamachan' },
    {
        type: `Heads`, prefecture: `Ishikawa`, key: `ishikawa-jibuni`, language: `ja`, name: `じぶ煮`, description: `鴨肉などを煮た料理で、石川県金沢市の代表的な郷土料理である。
鴨肉（もしくは鶏肉）をそぎ切りにして小麦粉をまぶし、だし汁に醤油、砂糖、みりん、酒をあわせたもので鴨肉、麩、しいたけ、青菜を煮てできる。`, author: 'hamachan'
    }, {
        type: `Heads`, prefecture: `Ishikawa`, key: `ishikawa-jibuni`, language: `en`, name: `jibuni`, description: `It is a typical local dish of Kanazawa City, Ishikawa Prefecture.
Duck (or chicken) is shredded, dusted with flour, and simmered with duck meat, fu, shiitake mushrooms, and greens in a mixture of soy sauce, sugar, mirin, and sake in a broth.`, author: 'hamachan'
    },
    {
        type: `Heads`, prefecture: `Ishikawa`, key: `ishikawa-kinpaku`, language: `ja`, name: `金箔`, description: `金沢箔は石川県金沢市周辺で作られている金箔です。熟練の技術により生み出される煌びやかで優美な金の輝きが金沢箔の最大の特徴です。
10円玉ほどの小さな金合金をたたみ一畳ほどの大きさまで均一に、しかも輝きを失うことなく延ばす職人の技術が金沢箔を作り出しています。`, author: 'hamachan'
    }, {
        type: `Heads`, prefecture: `Ishikawa`, key: `ishikawa-kinpaku`, language: `en`, name: `gold leaf`, description: `Kanazawa foil is a gold leaf produced in and around Kanazawa City, Ishikawa Prefecture. The most distinctive feature of Kanazawa foil is the glittering and elegant gold luster produced by skilled craftsmen.
Kanazawa foil is produced by craftsmen who use gold alloys as small as a 10-yen coin and extend them uniformly to the size of a tatami mat without losing their luster.`, author: 'hamachan'
    },
    {
        type: `Heads`, prefecture: `Fukui`, key: `fukui-dinosaur`, language: `ja`, name: `恐竜`, description: `**「福井の地で息づく、恐竜の伝説」**
福井県、日本の恐竜の宝庫。ここは「恐竜王国」として名高く、日本最大の恐竜の秘密が眠る場所。驚くべきことに、日本で発見された恐竜化石の約8割がこの福井の地から出土しています。勝山市の地下深くから、恐竜の歴史が次々と明らかになり、その名も「フクイ」。そして、世界三大恐竜博物館の一つ、福井県立恐竜博物館では、恐竜たちがかつてこの地で生きていた様子を目の当たりにできる。さらに、恐竜ホテルでの夢のような滞在、恐竜グッズでのお土産の楽しみ、そして恐竜のオブジェでの写真撮影。福井は、恐竜の魅力を満喫できる場所として、多くの人々を魅了しています。`, author: '@zuka20210101'
    }, {
        type: `Heads`, prefecture: `Fukui`, key: `fukui-dinosaur`, language: `en`, name: `Fukui dinosaurs`, description: `**'Breathing the Legend of Dinosaurs in Fukui'**
Fukui Prefecture, the treasure trove of dinosaurs in Japan. Renowned as the 'Kingdom of Dinosaurs,' it's the place where Japan's largest dinosaur secrets lie hidden. Astonishingly, about 80% of the dinosaur fossils discovered in Japan have been unearthed from this very land of Fukui. Deep beneath Katsuyama City, the history of dinosaurs continues to be revealed, bearing the name 'Fukui.' Moreover, at one of the world's top three dinosaur museums, the Fukui Prefectural Dinosaur Museum, visitors can witness firsthand the life of dinosaurs that once roamed this region. Additionally, dreamy stays at the Dinosaur Hotel, delightful dinosaur-themed souvenirs, and photo opportunities with dinosaur sculptures await. Fukui captivates many with its immersive dinosaur experiences.`, author: '@zuka20210101'
    },
    {
        type: `Heads`, prefecture: `Fukui`, key: `fukui-sabae-glasses`, language: `ja`, name: `鯖江めがね`, description: `世界三大眼鏡生産地のひとつ、福井県鯖江市。 日本のメガネフレーム生産90％以上のシェアを誇っています。
その歴史は、雪深く産業がない農業だけの地元の暮らしを向上させるため「国産のめがねの祖」とも呼ばれる増永五左衛門が、大阪からめがね職人を招き、農家の副業として広めたことから始まりました。`, author: 'hamachan'
    }, {
        type: `Heads`, prefecture: `Fukui`, key: `fukui-sabae-glasses`, language: `en`, name: `sabae glasses`, description: `Sabae City, Fukui Prefecture, is one of the world's three largest producers of eyeglass frames. The city boasts a share of over 90% of Japan's eyeglass frame production.
Its history began when Gozaemon Masunaga, also known as the 'founder of domestic glasses,' invited glasses craftsmen from Osaka to improve the lives of local farmers, who had no industry due to deep snow, and spread the business as a side job for farmers.`, author: 'hamachan'
    },
    {
        type: `Heads`, prefecture: `Fukui`, key: `fukui-tojinbo`, language: `ja`, name: `東尋坊`, description: `福井県坂井市に位置する崖。越前加賀海岸国定公園の特別保護地区に指定されている。
日本海に面した海食崖で、険しい岩壁が続き、最も高い場所で約25mの垂直の崖がある。`, author: 'hamachan'
    }, {
        type: `Heads`, prefecture: `Fukui`, key: `fukui-tojinbo`, language: `en`, name: `Tojinbo`, description: `A cliff located in Sakai City, Fukui Prefecture. It is designated as a special protection area in Echizen-Kaga Kaigan National Park.
It is a sea cliff facing the Sea of Japan, with a series of steep rock walls, the highest of which has a vertical cliff of about 25 meters.`, author: 'hamachan'
    },
    {
        type: `Heads`, prefecture: `Fukui`, key: `head-18-fukui`, language: `ja`, name: `福井県`, description: `日本の中部地方に位置する県。県庁所在地は福井市。北陸地方で最も人口が少ない県である。
越前の緑豊かな山々と、若狭の清らかな水の流れに代表されるように自然が美しい場所である。`, author: 'hamachan'
    }, {
        type: `Heads`, prefecture: `Fukui`, key: `head-18-fukui`, language: `en`, name: `Fukui Prefecture`, description: `Fukui Prefecture is located in the Chubu region of Japan. The prefectural capital is Fukui City. It is the least populated prefecture in the Hokuriku region.
It is a place of natural beauty, as represented by the lush green mountains of Echizen and the clear waters of Wakasa.`, author: 'hamachan'
    },
    {
        type: `Heads`, prefecture: `Yamanashi`, key: `head-19-yamanashi`, language: `ja`, name: `山梨県`, description: `日本の中部地方に位置する県。県庁所在地は甲府市。
南に富士山、西に赤石山脈（南アルプス）、北に八ヶ岳、東に奥秩父山地など、標高2,000 m〜3,000mを超す山々に囲まれる。島国の日本において、海に全く面しない数少ない内陸県である。`, author: 'hamachan'
    }, {
        type: `Heads`, prefecture: `Yamanashi`, key: `head-19-yamanashi`, language: `en`, name: `Yamanashi Prefecture`, description: `Located in the Chubu region of Japan. The prefectural capital is Kofu City.
Fuji to the south, the Akaishi Mountains (Southern Alps) to the west, the Yatsugatake Mountains to the north, and the Okuchichibu Mountains to the east. It is one of the few inland prefectures in the island nation of Japan that does not face the sea.`, author: 'hamachan'
    },
    { type: `Heads`, prefecture: `Yamanashi`, key: `yamanashi-shingen`, language: `ja`, name: `武田信玄`, description: `甲斐（現在の山梨県）の戦国大名です。「甲斐の虎」と呼ばれた彼の率いる武田軍は当時最強と言われ、その武勇はのちの天下人「織田信長」の耳にも届き、恐れさせるほどでした。`, author: 'hamachan' }, {
        type: `Heads`, prefecture: `Yamanashi`, key: `yamanashi-shingen`, language: `en`, name: `Takeda Shingen`, description: `He was a feudal lord of Kai (present-day Yamanashi Prefecture). The Takeda forces led by the 'Tiger of Kai' were said to be the strongest at the time, and his valor was so great that it even reached the ears of Nobunaga Oda, who later became a great leader in Japan, and made him fearful.
`, author: 'hamachan'
    },
    {
        type: `Heads`, prefecture: `Yamanashi`, key: `yamanashi-wine`, language: `ja`, name: `ワイン`, description: `山梨県は日本のワイン生産発祥の地であり、約100社のワイナリーが集積し国内の約3割のワインを生産しています。
近年、本県特産の甲州種をはじめ数多くのワインが、海外の権威ある著名なコンクールで受賞を果たすなど国外においても高い評価を受け、輸出促進の取組も進められています。`, author: 'hamachan'
    }, {
        type: `Heads`, prefecture: `Yamanashi`, key: `yamanashi-wine`, language: `en`, name: `wine`, description: `Yamanashi Prefecture is the birthplace of wine production in Japan, with a concentration of about 100 wineries producing about 30% of the country's wine.
In recent years, many of the prefecture's wines, including the Koshu variety, have won awards at prestigious international wine competitions, and efforts are underway to promote exports.`, author: 'hamachan'
    },
    {
        type: `Heads`, prefecture: `Nagano`, key: `head-20-nagano`, language: `ja`, name: `長野県`, description: `日本の中部地方に位置する県。県庁所在地は長野市。
海に面していない内陸県であり、日本アルプスを始め大規模な山岳地があるため可住地面積率は低い。キャッチフレーズはしあわせ信州。`, author: 'hamachan'
    }, {
        type: `Heads`, prefecture: `Nagano`, key: `head-20-nagano`, language: `en`, name: `Nagano Prefecture`, description: `Located in the Chubu region of Japan. The prefectural capital is Nagano City.
It is a landlocked prefecture with a low percentage of inhabitable land due to the presence of large mountainous areas, including the Japanese Alps. Its catchphrase is 'Happiness Shinshu.`, author: 'hamachan'
    },
    {
        type: `Heads`, prefecture: `Nagano`, key: `nagano-matumotocastle`, language: `ja`, name: `松本城`, description: `長野県松本市にある日本の城である。松本城と呼ばれる以前は深志城（ふかしじょう）といった。
天守は安土桃山時代末期-江戸時代初期に建造された現存天守の一つとして国宝に指定され、城跡は国の史跡に指定されている。天守が国宝指定された5城のうちの一つである。`, author: 'hamachan'
    }, {
        type: `Heads`, prefecture: `Nagano`, key: `nagano-matumotocastle`, language: `en`, name: `Matsumoto Castle`, description: `It is a Japanese castle located in Matsumoto City, Nagano Prefecture. Before it was called Matsumoto Castle, it was called Fukashi Castle.
The castle tower is designated as a National Treasure as it is one of the only existing castle towers built between the late Azuchi-Momoyama Period and the early Edo Period, and the ruins of the castle are designated as a National Historic Site. It is one of only five castles whose keep has been designated a National Treasure.`, author: 'hamachan'
    },
    { type: `Heads`, prefecture: `Nagano`, key: `nagano-wasabi`, language: `ja`, name: `安曇野わさび`, description: `北アルプスの山々に囲まれた長野県安曇野市。名水として知られる雪どけ水が育む特産品が「わさび」です。安曇野で一日に湧き出る水の量は７０万トン。その豊富な湧き水が、野生のわさびにもともとある「成長を妨げる成分」を洗い流し、大きく風味豊かなわさびが育ちます。`, author: 'hamachan' }, { type: `Heads`, prefecture: `Nagano`, key: `nagano-wasabi`, language: `en`, name: `Azumino wasabi`, description: `Azumino City in Nagano Prefecture is surrounded by the mountains of the Northern Alps. Wasabi (Japanese horseradish) is a specialty product nurtured by snow melt water known as 'famous water. Azumino produces 700,000 tons of spring water per day. This abundant spring water washes away the 'growth-inhibiting elements' that are inherent in wild wasabi, resulting in the growth of large, flavorful wasabi.`, author: 'hamachan' },
    {
        type: `Heads`, prefecture: `Gifu`, key: `gifu-gassho-summer`, language: `ja`, name: `合掌造り`, description: `雪国の知恵、合掌造り: 白川の伝統とブルーノ・タウトの再発見'
合掌造りは、手の平を合わせたような山形の茅葺き屋根が特徴の住居で、特に白川の「切妻合掌造り」は積雪に適応した独特の形状を持ちます。南北に面して建てられるこの家は、風の抵抗を減らし、季節に応じて適切な温度を保つ設計となっています。また、屋根裏は養蚕の場として利用され、その形態は蚕の飼育に最適な環境を提供します。この美しい建築は、ドイツの建築家ブルーノ・タウトによって世界に紹介され、彼はその合理性と論理性を絶賛しました。`, author: '@zuka20210101'
    }, {
        type: `Heads`, prefecture: `Gifu`, key: `gifu-gassho-summer`, language: `en`, name: `Gassho-style`, description: `Wisdom of the Snow Country: Gassho-style Architecture - Shirakawa's Tradition and Bruno Taut's Rediscovery'
Gassho-style architecture is characterized by its thatched roofs resembling hands joined in prayer. Particularly in Shirakawa, the 'Kirizuma Gassho-style' is uniquely shaped to adapt to heavy snowfall. These houses, oriented north-south, are designed to minimize wind resistance and maintain an appropriate temperature throughout the seasons. Moreover, the attic space is utilized for silkworm cultivation, with its structure providing an optimal environment for the task. This beautiful architecture was introduced to the world by the German architect Bruno Taut, who praised its rationality and logic.`, author: '@zuka20210101'
    },
    {
        type: `Heads`, prefecture: `Gifu`, key: `gifu-gassho-winter`, language: `ja`, name: `合掌造り`, description: `白川郷の合掌造り: 四季の美と「結」の心'
白川郷の合掌造りは、村人同士の協力による茅葺き屋根の吹き替えを通じて「結（ゆい）」の精神を受け継ぐ日本の伝統的な建築様式です。春の桜、夏の新緑、秋の紅葉と、冬は特に魅力的。積雪により合掌造りが真っ白に覆われ、その美しさは圧巻。夜にはライトアップされた合掌造りが幻想的な雰囲気を放ち、訪れる者たちを魅了します。四季折々の白川郷の美しさを際立たせています。`, author: '@zuka20210101'
    }, {
        type: `Heads`, prefecture: `Gifu`, key: `gifu-gassho-winter`, language: `en`, name: `Gassho-style`, description: `Shirakawa-go's Gassho-style Architecture: Beauty of the Four Seasons and the Spirit of 'Yui''
Shirakawa-go's Gassho-style architecture perpetuates the spirit of 'Yui', a tradition of mutual assistance, through the communal re-thatching of their steep straw roofs. With cherry blossoms in spring, verdant greenery in summer, vibrant autumn leaves, and winter being especially enchanting. The Gassho-style houses are blanketed in pristine white snow, presenting a breathtaking sight. At night, these snow-covered houses are illuminated, casting a magical ambiance that captivates all who visit. The beauty of Shirakawa-go shines through in every season.`, author: '@zuka20210101'
    },
    {
        type: `Heads`, prefecture: `Gifu`, key: `gifu-keichan`, language: `ja`, name: `鶏ちゃん`, description: `岐阜県奥美濃地方の郡上市、飛騨地方南部の下呂市、下呂市に隣接する中津川市の北部で食べられてきた郷土料理である。
鶏ちゃんの定義は、「一口大にカットされ、タレで味付けされた鶏肉料理」とされ、鶏肉に醤油や味噌をベースにニンニクや生姜などで下味を付けて焼くことで作られる。`, author: 'hamachan'
    }, {
        type: `Heads`, prefecture: `Gifu`, key: `gifu-keichan`, language: `en`, name: `keichan`, description: `It is a local dish that has been eaten in Gujo City in the Okumino-region of Gifu Prefecture, Gero City in the southern Hida region, and the northern part of Nakatsugawa City adjacent to Gero City.
Chicken chan is defined as 'a chicken dish cut into bite-sized pieces and seasoned with sauce,' and is made by seasoning chicken with soy sauce or miso-based sauce, garlic, ginger, etc., and grilling it.`, author: 'hamachan'
    },
    {
        type: `Heads`, prefecture: `Gifu`, key: `gifu-ukai`, language: `ja`, name: `鵜飼`, description: `「長良川の清流と共に、1300年の伝統を継ぐ」
岐阜の鵜飼いは、時代を超えて長良川の清流とともに息づいています。古墳時代からのこの技、鵜を使ってアユを捕る様は、702年の古文書にもその名が刻まれ、1300年の歴史を誇ります。織田信長や徳川家康もその魅力に引き込まれ、明治天皇やチャップリンまで、多くの著名人がその舞台となった岐阜を訪れました。今も10万人を超える観光客がその伝統を目の当たりにし、岐阜の鵜飼いはユネスコ無形文化遺産への登録を目指して、新たな歴史を刻んでいます。`, author: '@zuka20210101'
    }, {
        type: `Heads`, prefecture: `Gifu`, key: `gifu-ukai`, language: `en`, name: `cormorant fishing`, description: `Along with the clear streams of the Nagara River, inheriting 1300 years of tradition.'
The cormorant fishing of Gifu has thrived alongside the pristine waters of the Nagara River through the ages. Originating from the Kofun period, this technique of using cormorants to catch ayu fish is proudly documented in ancient records from 702 AD, boasting a history of 1300 years. Historical figures like Oda Nobunaga and Tokugawa Ieyasu were captivated by its charm, and even the likes of Emperor Meiji and Charlie Chaplin visited Gifu to witness it. Today, over 100,000 tourists come to experience this tradition firsthand, as Gifu's cormorant fishing aims for UNESCO Intangible Cultural Heritage registration, continuing to carve out a new chapter in its history.`, author: '@zuka20210101'
    },
    {
        type: `Heads`, prefecture: `Gifu`, key: `head-21-gifu`, language: `ja`, name: `岐阜県`, description: `日本の中部地方に位置する県。県庁所在地は岐阜市。
日本の人口重心中央に位置し、その地形は変化に富んでいる。内陸県であり、五畿七道の東海道に含まれないものの、一般的には東海地方に属するとされ、愛知県や三重県とともに東海3県の一つである。`, author: 'hamachan'
    }, {
        type: `Heads`, prefecture: `Gifu`, key: `head-21-gifu`, language: `en`, name: `Gifu Prefecture`, description: `Gifu Prefecture is located in the Chubu region of Japan. The prefectural capital is Gifu City.
It is located in the center of Japan's population center of gravity, and its topography is varied. Although it is an inland prefecture and is not included in the Tokaido Highway of the Ginki region, it is generally considered to belong to the Tokai region and is one of the three Tokai prefectures along with Aichi and Mie prefectures.`, author: 'hamachan'
    },
    {
        type: `Heads`, prefecture: `Shizuoka`, key: `head-22-shizuoka`, language: `ja`, name: `静岡県`, description: `日本の中部地方に位置する県。県庁所在地は静岡市。
全国有数の工業地域でもあり、ホンダの発祥地でスズキ、ヤマハ発動機の本社がある他、オートバイ、ピアノ、プラモデルの輸出量では日本一を誇る。また、全国一の水揚げ額を有する焼津漁港や、静岡茶が有名である。`, author: 'hamachan'
    }, {
        type: `Heads`, prefecture: `Shizuoka`, key: `head-22-shizuoka`, language: `en`, name: `Shizuoka Prefecture`, description: `Shizuoka Prefecture is located in the Chubu region of Japan. The prefectural capital is Shizuoka City.
It is the birthplace of Honda, the headquarters of Suzuki and Yamaha Motor, and the largest exporter of motorcycles, pianos, and plastic models in Japan. It is also famous for the Yaizu fishing port, which has the largest fish catch in Japan, and Shizuoka tea.`, author: 'hamachan'
    },
    { type: `Heads`, prefecture: `Shizuoka`, key: `shizuoka-oden`, language: `ja`, name: `静岡おでん`, description: `牛すじ、黒はんぺん、練り物、大根、卵など具材を全て串に刺し、色の黒いだし汁で煮込み、青のりや魚のだし粉をかけて食べる静岡市の郷土料理。`, author: 'hamachan' }, { type: `Heads`, prefecture: `Shizuoka`, key: `shizuoka-oden`, language: `en`, name: `Shizuoka oden`, description: `A local dish of Shizuoka City, it consists of beef tendon, black hanpen, fish paste, daikon radish, egg, and other ingredients all skewered, stewed in a black broth, and served with aonori (green laver) or fish broth powder.`, author: 'hamachan' },
    {
        type: `Heads`, prefecture: `Aichi`, key: `aichi-hitsumabushi`, language: `ja`, name: `ひつまぶし`, description: `ウナギの蒲焼を用いた日本の郷土料理である。
蒲焼にしたウナギの身を切り分けた上で、お櫃などに入れたご飯に乗せたものを、食べる側が茶碗などに取り分けて食べるのが基本的なスタイル。一般的にワサビや刻み海苔・刻みネギなどの薬味、出汁やお茶などが添えられて提供され、それらを食べる側の好みに合わせて取り分けた鰻飯にかけたり、お茶漬けにすることにより、味の変化を楽しみながら食べることができる。`, author: 'hamachan'
    }, {
        type: `Heads`, prefecture: `Aichi`, key: `aichi-hitsumabushi`, language: `en`, name: `Hitsumabushi`, description: `This is a local Japanese dish made from broiled eel.
The basic style is to cut the broiled eel meat into pieces and place them on rice in a rice box, which is then served in a bowl or other container. Generally, wasabi (Japanese horseradish), chopped nori (dried laver), chopped green onion, and other condiments, soup stock, and tea are served with the eel rice.`, author: 'hamachan'
    },
    { type: `Heads`, prefecture: `Aichi`, key: `aichi-nagoyacastle`, language: `ja`, name: `名古屋城`, description: `日本の城のひとつ。愛知県名古屋市にある。「名城（めいじょう）」、「金鯱城（きんこじょう、きんしゃちじょう）」、「金城（きんじょう）」の異名を持つ。日本100名城に選定されており、国の特別史跡に指定されている。`, author: 'hamachan' }, { type: `Heads`, prefecture: `Aichi`, key: `aichi-nagoyacastle`, language: `en`, name: `Nagoya Castle`, description: `One of the castles in Japan. It is located in Nagoya City, Aichi Prefecture. It is also known as 'Meijo,' 'Kinshachi-jo,' or 'Kin-jo'. It has been selected as one of the 100 best castles in Japan and is designated as a national special historic site.`, author: 'hamachan' },
    { type: `Heads`, prefecture: `Aichi`, key: `aichi-tenmusu`, language: `ja`, name: `天むす`, description: `海老の天ぷらを具にしたおにぎり。名古屋めしの一つとして知られる。`, author: 'hamachan' }, { type: `Heads`, prefecture: `Aichi`, key: `aichi-tenmusu`, language: `en`, name: `Tenmusu`, description: `Onigiri with shrimp tempura as a filling. Known as one of Nagoya-meshi.`, author: 'hamachan' },
    {
        type: `Heads`, prefecture: `Aichi`, key: `head-23-aichi`, language: `ja`, name: `愛知県`, description: `日本の中部地方に位置する県。県庁所在地は名古屋市。
日本列島の中央部にあたり、人口は東京都、神奈川県、大阪府に次いで4番目に多い。
トヨタ自動車（トヨタグループ）の本拠地である豊田市や刈谷市、名古屋市などの工業都市を中心に中京工業地帯を構成する工業県でもあり、自動車産業や航空宇宙産業か盛んである。`, author: 'hamachan'
    }, {
        type: `Heads`, prefecture: `Aichi`, key: `head-23-aichi`, language: `en`, name: `Aichi Prefecture`, description: `Located in the Chubu region of Japan. The prefectural capital is Nagoya City.
Nagoya is located in the central part of the Japanese archipelago and has the fourth largest population after Tokyo, Kanagawa, and Osaka prefectures.
It is also an industrial prefecture that makes up the Chukyo Industrial Zone, centering on the industrial cities of Toyota, Kariya, and Nagoya, home to Toyota Motor Corporation (Toyota Group), and has a thriving automotive and aerospace industry.`, author: 'hamachan'
    },
    {
        type: `Heads`, prefecture: `Mie`, key: `head-24-mie`, language: `ja`, name: `三重県`, description: `三重の魅力、一重には収まらない！'
三重県、日本の中心に位置し、東西の交差点としての役割を果たしてきました。伊勢神宮や熊野古道伊勢路といった観光名所、伊勢海老や松坂牛、伊勢うどん、赤福といった絶品グルメ、そして3万年の歴史を持つ遺跡や伊勢、伊賀、志摩の3国の歴史。また、コシヒカリの生産で西日本一を誇り、漁業や工業も盛ん。松尾芭蕉の故郷としての俳句の文化や、真珠の養殖で知られるミキモト真珠島、そして伝統的な祭りや行事が織りなす文化の宝庫。三重県は、その多様な魅力で訪れる者を魅了しています。`, author: '@zuka20210101'
    }, {
        type: `Heads`, prefecture: `Mie`, key: `head-24-mie`, language: `en`, name: `Mie Prefecture`, description: `Triple the Charm, Impossible to Contain in a Single Layer!'
Mie Prefecture, located at the heart of Japan, has historically served as the crossroads between eastern and western Japan. With renowned tourist spots like the Ise Grand Shrine and the Kumano Kodo Iseji route, delectable delicacies such as Ise lobster, Matsusaka beef, Ise udon, and Akafuku mochi, and a history that spans back 30,000 years with sites from the Old Stone Age and the histories of Ise, Iga, and Shima regions. Moreover, it boasts being the top producer of Koshihikari rice in western Japan, and thrives in fisheries and industries. As the birthplace of Matsuo Basho, it has deep ties to haiku poetry, and Mikimoto Pearl Island is renowned for its pearl cultivation and research. With its myriad of traditional festivals and events, Mie Prefecture captivates all who visit with its diverse allure.`, author: '@zuka20210101'
    },
    {
        type: `Heads`, prefecture: `Mie`, key: `mie-jingu`, language: `ja`, name: `伊勢神宮`, description: `1500の祭り、一つの信仰'
伊勢神宮、通称「お伊勢さん」は、三重県伊勢市の「美うまし国」に鎮座し、太陽神である天照大御神を祀る内宮と、食事を司る豊受の大御神を祀る外宮の二つの主要な宮殿から成り立っています。古代の「唯一神明造」の建築様式を持ち、神聖な「神宮の森」に囲まれています。年間約1500回の祭りが行われ、20年ごとの「式年遷宮」は特に注目される伝統的な儀式です。参拝は外宮から内宮へと進み、その周辺には歴史的な町並みや観光スポットが広がっています。伊勢神宮は、その深い歴史と自然の美しさで、多くの人々に愛されています。`, author: '@zuka20210101'
    }, {
        type: `Heads`, prefecture: `Mie`, key: `mie-jingu`, language: `en`, name: `Ise Jingu`, description: `1500 Festivals, One Faith'
Ise Grand Shrine, commonly known as 'O-Ise-san,' is located in the 'Miumashi Kuni' of Ise City, Mie Prefecture. It comprises two main sanctuaries: the Inner Shrine, which enshrines the Sun Goddess, Amaterasu Omikami, and the Outer Shrine, dedicated to Toyouke Omikami, the deity of food and harvest. Built in the ancient 'Shinmei-zukuri' architectural style, it's surrounded by the sacred 'Jingu Forest.' Throughout the year, about 1500 festivals are celebrated, with the 'Shikinen Sengu' ceremony, held every 20 years, being particularly significant. Pilgrims traditionally start their visit at the Outer Shrine, moving to the Inner Shrine, with historic townscapes and tourist spots spread around the area. The Ise Grand Shrine, with its profound history and natural beauty, is cherished by many.`, author: '@zuka20210101'
    },
    {
        type: `Heads`, prefecture: `Mie`, key: `mie-ninja`, language: `ja`, name: `忍者`, description: `不可能を可能に。忍者、日本のオリジナルアクションヒーロー！'
日本の歴史の中で、影の中で活躍した特別な存在、それが忍者です。彼らは、敵の情報を収集し、夜陰に紛れて行動することから「忍び」と呼ばれ、その技術と知識は日本独特のものとして発展しました。特に戦国時代には、彼らの情報収集能力は戦国大名にとって欠かせないものとなりました。
忍者の起源は古く、聖徳太子の時代までさかのぼると言われています。そして、伊賀や甲賀といった地域は、忍者の名で知られるようになりました。彼らは火術や呪術、毒薬を駆使して、その任務を遂行しました。
現代では、実際の戦闘任務を持つ忍者は存在しないものの、その伝統や文化は多くの人々によって受け継がれています。彼らは、日本のオリジナルアクションヒーローとして、不可能を可能にする技術と知識を持っていたのです。`, author: '@zuka20210101'
    }, {
        type: `Heads`, prefecture: `Mie`, key: `mie-ninja`, language: `en`, name: `ninja`, description: `Turning the impossible into possible. Ninja, Japan's original action hero!'
Throughout Japanese history, there existed a special group that thrived in the shadows: the ninjas. Known as 'Shinobi' because of their ability to move stealthily under the cover of night, their unique skills and knowledge evolved distinctly within Japan. Especially during the Warring States period, their intelligence-gathering capabilities became indispensable to the feudal lords.
The origins of the ninja are said to trace back to the era of Prince Shotoku. Regions like Iga and Koga became synonymous with these shadow warriors. They employed techniques involving pyrotechnics, mystic arts, and poisons to accomplish their missions.
While there are no ninjas with actual combat missions in modern times, their traditions and culture are still passed down by many. They were Japan's original action heroes, possessing the skills and knowledge to turn the impossible into possible.`, author: '@zuka20210101'
    },
    {
        type: `Heads`, prefecture: `Shiga`, key: `head-25-shiga`, language: `ja`, name: `滋賀県`, description: `滋賀県、一番の王国！👑
 1. 経済界のスーパースター！
- 滋賀県、工業のヒーロー！全国で第2次産業がキラリと輝くNo.1スポット。
- 製造業のアイドルとして、その実績はチャート上位常連！
 2. 出荷のキング！
- 繊維、化学、プラスチック…滋賀県、出荷のトップアーティスト！売上チャートはもちろんNo.1！
 3. 暮らしの天国！
- 人々の笑顔が増える滋賀！男性寿命は日本一、女性も負けずの2位！
- そして、図書館愛が止まらない！読書率もトップクラス！
 4. 琵琶湖、湖界のロックスター！
- 日本一のビッグレイク、琵琶湖！古くも美しい、そしてみんなの水のヒーロー。
- ラムサールのVIPエリアにも名を連ねる、湖界のセレブ！
 5. 歴史のハリウッド！
- 京都・奈良の隣人として、歴史のレッドカーペットを歩む滋賀県！
- 重要文化財や名勝の数で、歴史界のアカデミー賞も狙えるか!?
滋賀県、各分野で「一番」を誇る、まさに日本のスーパースター県！🌟`, author: '@zuka20210101'
    }, {
        type: `Heads`, prefecture: `Shiga`, key: `head-25-shiga`, language: `en`, name: `Shiga Prefecture`, description: `Shiga Prefecture, the Kingdom of No.1s! 👑
1. Economic Superstar!
- Shiga, the hero of the industrial world! The nation's shining No.1 spot for secondary industries.
- As a manufacturing idol, its achievements are always topping the charts!
 2. King of Shipments!
- Textiles, chemicals, plastics... Shiga, the top artist of shipments! Sales charts? Of course, No.1!
 3. Living Paradise!
- Where smiles increase in Shiga! Men's lifespan ranks first in Japan, and women are a close second!
- Plus, an unstoppable love for libraries! Reading rates are top-notch!
 4. Lake Biwa, the Rockstar of Lakes!
- Japan's biggest lake, Lake Biwa! Ancient and beautiful, and everyone's water hero.
- Also listed in the VIP area of the Ramsar Convention, the lake's very own celeb!
 5. Hollywood of History!
- As a neighbor to Kyoto & Nara, Shiga walks the red carpet of history!
- With its number of important cultural properties and scenic spots, could it aim for the historical Academy Awards!?
Shiga Prefecture, boasting 'No.1' in various fields, is truly Japan's superstar prefecture! 🌟`, author: '@zuka20210101'
    },
    {
        type: `Heads`, prefecture: `Shiga`, key: `shiga-blackbass`, language: `ja`, name: `ブラックバス`, description: `滋賀県の琵琶湖、ブラックバスの楽園？でも、ちょっと待って！
🐟 **オオクチバス**：北米出身の大物セレブ！名前の通り、口がデカい。1974年に彦根市でデビューして、あっという間に琵琶湖全域で大ブレイク！
食事の好み？肉食系で、甲殻類や魚類をガツガツ食べる！
🐟 **コクチバス**：オオクチバスの親戚だけど、ちょっと控えめな性格。口は小さめで、ちょっと冷えた場所でも大丈夫！1995年にマキノ町でデビュー。琵琶湖での大ブレイクはまだこれから？
でも、この2匹、琵琶湖の生態系にちょっと問題を起こしてるみたい。滋賀県は「ブラックバス駆除プロジェクト」を進行中！ブラックバスたち、次のステージはどこ？`, author: '@zuka20210101'
    }, {
        type: `Heads`, prefecture: `Shiga`, key: `shiga-blackbass`, language: `en`, name: `black bass`, description: `Biwa Lake in Shiga: A paradise for black bass? But wait a sec!
🐟 Largemouth Bass: A big-shot celeb from North America! True to its name, it's got a BIG mouth. Made its debut in Hikone City in 1974 and quickly became a sensation throughout Lake Biwa!
Dietary preference? Carnivorous, gobbling up crustaceans and fish!
🐟 Smallmouth Bass: Related to the Largemouth but a bit more reserved. Smaller mouth and cool with chillier spots! Debuted in Makino Town in 1995. Big break in Lake Biwa still on the horizon?
However, these two are causing a bit of a ruckus in Lake Biwa's ecosystem. Shiga Prefecture is on a 'Black Bass Eviction Mission'! So, black bass, where's your next stage?`, author: '@zuka20210101'
    },
    {
        type: `Heads`, prefecture: `Shiga`, key: `shiga-hikonecastle`, language: `ja`, name: `彦根城`, description: `彦根城、日本の古城界のスーパースター！でも、その裏話、知ってる？
🏯 国宝ステータス：彦根城は、姫路、松本、犬山、松江と並ぶエリート5城の一つ！
🎖 文化的な宝物：彦根城、ただの城じゃない！歴史的な建物がたくさん。特に彦根城太鼓門や天秤櫓は見逃せない！
🔔 豪華な鐘：大量の小判を使って作られた時報鐘。まさに、お金が音になったらこんな音！
🙏 観音さまの特技：目のトラブルには彦根寺の観音さまにお任せ！
⏳ 築城の歴史：彦根城、20年の歳月をかけての大作。そして、大津城や長浜城からの移築パーツを使用！
😱 解体の危機：明治時代、彦根城は解体のピンチ！でも、明治天皇の「STOP！」の一言で救われた。
🌟 彦根城の今：12の近世城の中で、彦根城は国宝のステータスを誇る！`, author: '@zuka20210101'
    }, {
        type: `Heads`, prefecture: `Shiga`, key: `shiga-hikonecastle`, language: `en`, name: `Hikone Castle`, description: `Hikone Castle, the superstar of Japan's ancient castles! But, do you know the behind-the-scenes stories?
🏯 **National Treasure Status**: Hikone Castle stands among the elite five, alongside Himeji, Matsumoto, Inuyama, and Matsue Castles!
🎖 **Cultural Treasures**: Hikone Castle isn't just any castle! It's home to numerous historical structures. Especially, the Hikone Castle Drum Gate and Balance Turret are must-sees!
🔔 **Luxurious Bell**: A timekeeping bell made using a vast amount of koban coins. If money had a sound, this would be it!
🙏 **Specialty of Kannon**: Got eye troubles? Entrust them to the Kannon deity of Hikone Temple!
⏳ **Castle Construction History**: Hikone Castle, a grand project spanning 20 years. And it even incorporates relocated parts from Otsu and Nagahama Castles!
😱 **Demolition Crisis**: During the Meiji era, Hikone Castle faced the threat of demolition! But, a single 'STOP!' from Emperor Meiji saved the day.
🌟 **Hikone Castle Today**: Among the 12 castles from the early modern period, Hikone Castle boasts its status as a National Treasure!`, author: '@zuka20210101'
    },
    {
        type: `Heads`, prefecture: `Kyoto`, key: `head-26-kyoto`, language: `ja`, name: `京都府`, description: `京都、日本の文化のハブで、でもちょっとユニークな都市！その理由、知りたい？
🏯 **寺社仏閣の宝庫**：金閣寺、銀閣寺、清水寺...名前だけでピンとくるでしょ？
🌳 **自然溢れる都会**：都会だけど、四方を山に囲まれてて、川も流れてる。都会のオアシスって感じ！
🌸 **四季折々の楽しみ**：桜や紅葉のスポットで、季節ごとのお祭りも盛大に！
🍜 **学生の楽園**：学園都市だから、安くて美味しい飲食店がたくさん！
☕ **落ち着く喫茶店**：伝統的なお茶の文化が根付いてるから、リラックスできる喫茶店が満載！
📚 **個性的な本屋**：普通の本屋じゃ物足りない？京都の本屋はちょっと変わってるよ！
🚶 **ちょうどいい人の多さ**：人口密度が低いから、のんびりとした雰囲気が最高！
🎨 **文化の宝庫**：和食、日本庭園、生け花、茶道...文化的には超リッチ！
🔄 **新旧ミックス**：伝統を大切にしながら、新しいものも取り入れる柔軟さ！
🌟 **伝統と誇り**：京都人は伝統を大事にして、その誇りを胸に生きてる！
総合的に見て、京都は観光地としても、住む場所としても、まさに日本のジュエルボックス！'`, author: '@zuka20210101'
    }, {
        type: `Heads`, prefecture: `Kyoto`, key: `head-26-kyoto`, language: `en`, name: `Kyoto prefecture`, description: `Kyoto, the hub of Japanese culture, but with its own unique twist! Want to know why?
🏯 **Temple & Shrine Galore**: Kinkakuji, Ginkakuji, Kiyomizudera... just the names ring a bell, right?
🌳 **Urban Oasis**: It's a city, but surrounded by mountains on all sides and crisscrossed by rivers. A true urban retreat!
🌸 **Seasonal Spectacles**: With spots for cherry blossoms and autumn leaves, and grand festivals for every season!
🍜 **Student's Paradise**: Being an academic city, there's a plethora of affordable and delicious eateries!
☕ **Relaxing Cafés**: With a deep-rooted traditional tea culture, there's no shortage of calming cafes!
📚 **Unique Bookstores**: Want something more than just a regular bookstore? Kyoto's got some quirky ones!
🚶 **Just the Right Amount of People**: Low population density means a laid-back vibe all around!
🎨 **Cultural Treasure Trove**: From Japanese cuisine, gardens, Ikebana, to tea ceremonies... it's culturally rich!
🔄 **Blend of Old and New**: While cherishing traditions, there's a flexibility to embrace the new!
🌟 **Tradition and Pride**: People in Kyoto live with a deep respect for tradition and wear their pride on their sleeves!
All in all, whether as a tourist spot or a place to live, Kyoto is truly Japan's jewel box!'`, author: '@zuka20210101'
    },
    {
        type: `Heads`, prefecture: `Kyoto`, key: `kyoto-kinkaku`, language: `ja`, name: `金閣寺`, description: `金閣寺、日本のゴールドスタンダード！でも、その秘密、知ってる？
🏯 **3層のサプライズ**: 
   - 1階は平安時代の「寝殿造り」、まるで王族の寝室！
   - 2階は武士の「武家造り」、ちょっとカッコイイ感じ。
   - 3階は禅宗スタイル、そして頂上にはファッションリーダーの鳳凰が！
✨ **ゴールドメンバーシップ**: 2階と3階は、まるでVIPメンバーシップのように金箔でピカピカ！日光バスでの旅行がまるでゴールドトリップ！
🌊 **鏡のような池**: 鏡湖池、金閣寺のセルフィースポット！四季折々の風景とともに、インスタ映え確実！
🌍 **世界のVIPリスト**: 1994年にユネスコの世界遺産に！金閣寺、世界的にも有名人！
📸 **観光のホットスポット**: 京都のスーパースターとして、観光客のハートをゲット！
これ、金閣寺の裏メニューだよ！'`, author: '@zuka20210101'
    }, {
        type: `Heads`, prefecture: `Kyoto`, key: `kyoto-kinkaku`, language: `en`, name: `The Temple of the Golden Pavilion`, description: `Kinkaku-ji, Japan's Gold Standard! But do you know its secrets?
🏯 **Triple-Layer Surprise**:
   - 1st floor with Heian-era 'Shinden-zukuri', like a royal bedroom!
   - 2nd floor rocks the samurai 'Buke-zukuri', oozing cool vibes.
   - 3rd floor in Zen style, and atop, the phoenix, the ultimate fashion icon!
✨ **Gold Membership**: 2nd and 3rd floors shimmering in gold leaf, like they've got VIP status! A trip in sunlight feels like a golden journey!
🌊 **Mirror-like Pond**: Kyōko-chi, Kinkaku-ji's selfie spot! Perfect for Insta-worthy shots with seasonal sceneries!
🌍 **World's VIP List**: Made it to UNESCO's World Heritage in 1994! Kinkaku-ji, globally renowned!
📸 **Tourist Hotspot**: As Kyoto's superstar, it's stealing tourists' hearts!
This is the behind-the-scenes scoop on Kinkaku-ji!`, author: '@zuka20210101'
    },
    {
        type: `Heads`, prefecture: `Kyoto`, key: `kyoto-kiyomizu`, language: `ja`, name: `清水寺`, description: `清水寺って、もしもタイムマシンがあったら、最初に行きたい場所の一つだよね？
🧘‍♂️ **起源の伝説**：夢の中でのお告げって、今の時代にはアプリの通知みたいなもの？僧侶の延鎮上人がそんな夢の通知を受け取り、清水寺の地を発見！そして、坂上田村麻呂とのコラボで、清水寺がスタート！
🎭 **清水の舞台**：釘を使わないで建てられた舞台、それってDIYの究極形？四階建てのビルの高さで、190平方メートルの面積。ここでの舞台落ち、もしもYouTubeがあったら、トレンド入り確定！
🌸 **桜のシーズン**：清水寺の桜、それはまるで自然のインスタ映えスポット！ソメイヨシノと山桜が1500本、ピンクのフィルター全開で春を彩る！
清水寺、もしもタイムマシンがあれば、過去の人々と一緒に桜の下でピクニックしたい場所だよね！'`, author: '@zuka20210101'
    }, {
        type: `Heads`, prefecture: `Kyoto`, key: `kyoto-kiyomizu`, language: `en`, name: `Kiyomizu Temple`, description: `Kiyomizu Temple: If there were a time machine, wouldn't it be one of the first places you'd want to visit?
🧘‍♂️ **Origin Legend**: Receiving a divine message in a dream... isn't that like getting a notification from an app nowadays? The monk Enchin got such a 'dream notification' and discovered the land of Kiyomizu Temple! And with a collab with Sakano'ue no Tamuramaro, Kiyomizu Temple was launched!
🎭 **Kiyomizu Stage**: A stage built without using a single nail – is that the ultimate form of DIY? It's as tall as a four-story building and spans 190 square meters. A fall from this stage, if YouTube existed back then, would've definitely trended!
🌸 **Cherry Blossom Season**: The cherry blossoms at Kiyomizu Temple are like nature's Instagrammable spot! With 1500 Somei Yoshino and mountain cherry trees, they paint the spring in full pink bloom!
Kiyomizu Temple, if there were a time machine, wouldn't it be the place you'd want to picnic under the cherry blossoms with people from the past?`, author: '@zuka20210101'
    },
    {
        type: `Heads`, prefecture: `Osaka`, key: `head-27-osaka`, language: `ja`, name: `大阪府`, description: `海の王国から天下の台所まで、大阪の冒険が待ってる！
🌆 大阪、都会のジャングルと歴史の宝庫!
ビルの森: 800万人以上が住むこの都市は、高層ビルが空を切り裂くスカイラインを持つ超モダン都市。
歴史のタイムカプセル: 古墳や寺社仏閣が点在し、古代からの歴史が息づいています。
🌊 大阪湾のゲートウェイ:
海の王国、大阪! 瀬戸内海への入り口として、古くからの海上交通のハブとして栄えてきました。
🍽 「天下の台所」のグルメパラダイス:
たこ焼き、お好み焼き、そして「粉もん」の王国！食べ歩きはここで決まり！
🎭 エンターテインメントのメッカ:
笑いの都、大阪。上方落語や漫才で、笑顔が絶えない街！`, author: '@zuka20210101'
    }, {
        type: `Heads`, prefecture: `Osaka`, key: `head-27-osaka`, language: `en`, name: `Osaka prefecture`, description: `From the maritime kingdom to the nation's kitchen, Osaka's adventure awaits!
🌆 **Osaka, an Urban Jungle and a Treasure Trove of History!**
- **Forest of Buildings**: This city, home to over 8 million people, boasts a super-modern skyline with towering skyscrapers piercing the sky.
- **Time Capsule of History**: Dotted with ancient burial mounds and temples, the city breathes history from ancient times.
🌊 **Gateway to Osaka Bay**:
- The maritime kingdom, Osaka! Serving as the entrance to the Seto Inland Sea, it has flourished as a hub for maritime transport since ancient times.
🍽 **The Gourmet Paradise of 'The Nation's Kitchen'**:
- Takoyaki, okonomiyaki, and the kingdom of 'flour-based dishes'! This is the place to go for a food tour!
🎭 **Mecca of Entertainment**:
- Osaka, the city of laughter. With Rakugo and Manzai comedy, it's a city where smiles never fade!`, author: '@zuka20210101'
    },
    {
        type: `Heads`, prefecture: `Osaka`, key: `osaka-osakacastle`, language: `ja`, name: `大阪城`, description: `天守閣からの眺め、大阪の全てが手の中に！
あんた、大阪城って知ってる？大阪のど真ん中にどーんと構えてる、めっちゃ立派なお城やで！昔の戦国武将、豊臣秀吉が「俺の城は日本一や！」って気合い入れて建てたんや。でもね、実は何回も壊れて、再建されてるんやで。まるで大阪のおばちゃんが「このヘアスタイル気に入らん！」って何回も美容院行くみたいやな（笑）。
城の中には博物館もあって、昔の歴史や秀吉のエピソードが学べるで。そして、天守閣からの眺めは最高や！大阪の街が一望できるねん。
大阪に来たら、この大阪城は外せへんで！でも、階段多いから、運動靴持ってきてな！`, author: '@zuka20210101'
    }, {
        type: `Heads`, prefecture: `Osaka`, key: `osaka-osakacastle`, language: `en`, name: `Osaka Castle`, description: `From the castle tower, all of Osaka is in your grasp!
Hey, ya ever heard of Osaka Castle? Right smack in the middle of Osaka, there's this grand ol' castle, ya know! Back in the day, this warlord named Toyotomi Hideyoshi was like, 'I'm gonna have the best castle in all of Japan!' and built it. But get this, it's been knocked down and rebuilt a bunch of times. Kinda like an Osaka lady goin', 'I ain't likin' this hairstyle!' and headin' back to the salon over and over, ya know? (haha).
Inside the castle, there's a museum where you can learn all about the history and some wild tales about Hideyoshi. And the view from the top? Oh man, it's the bee's knees! You can see the whole city of Osaka.
If you're in Osaka, you can't miss this castle, I'm tellin' ya! But heads up, there's a ton of stairs, so wear your comfy shoes!`, author: '@zuka20210101'
    },
    {
        type: `Heads`, prefecture: `Osaka`, key: `osaka-takoyaki`, language: `ja`, name: `たこやき`, description: `カリトロたこ焼き、大阪の魂を一口で！
あんた、たこ焼きって知ってる？大阪のソウルフードやで！外はカリッとして中はトロッと、たこがゴロゴロ入ってるんや。一口食べたら、熱々で舌やけどすることもあるけど、それもまた醍醐味やねん（笑）。大阪の人は、たこ焼きを食べるとき、マヨネーズやソース、青のりやかつお節をたっぷりかけて、ビールと一緒に楽しむのが大好きやで。まるで大阪のおっちゃんがカラオケで熱唱するみたいに、情熱的にたこ焼きを愛してるんや！大阪に来たら、屋台や専門店で、このたこ焼きを食べずして帰るなんて、もったいないで！`, author: '@zuka20210101'
    }, {
        type: `Heads`, prefecture: `Osaka`, key: `osaka-takoyaki`, language: `en`, name: `Takoyaki`, description: `Crispy outside, gooey inside Takoyaki - A bite of Osaka's soul!
Hey, ya ever tried takoyaki? It's Osaka's soul food, ya know! Crispy on the outside, gooey on the inside, with big chunks of octopus in there. Take a bite, and sometimes ya might burn your tongue 'cause it's so darn hot, but that's all part of the fun, right? (haha). Folks in Osaka, they love drownin' their takoyaki in mayo, sauce, seaweed flakes, and bonito flakes, and washin' it all down with a cold beer. It's like watchin' an Osaka uncle beltin' out a song at karaoke – that's how passionate we are 'bout our takoyaki! If you're in Osaka, skippin' out on tryin' takoyaki from a street stall or a specialty shop? That'd be a darn shame!`, author: '@zuka20210101'
    },
    {
        type: `Heads`, prefecture: `Osaka`, key: `osaka-tower`, language: `ja`, name: `通天閣`, description: `大阪のエッフェル塔、カラフルに街を照らす！
あんた、通天閣って知ってる？新世界のシンボルやで！大阪のエッフェル塔みたいなもんやけど、こっちの方がもっとカラフルやねん（笑）。夜になるとイルミネーションでキラキラして、まるで大阪のおばちゃんがキラキラのアクセサリーつけて繁華街を歩いてるみたいやな。展望台からは大阪の街が一望できて、めっちゃ綺麗やで。そして、足元には「おかっぱ横丁」や「じゃんじゃん横丁」なんかの昔ながらの大阪の雰囲気を感じられる場所もあるねん。大阪に来たら、通天閣で大阪の風を感じてみてな！`, author: '@zuka20210101'
    }, {
        type: `Heads`, prefecture: `Osaka`, key: `osaka-tower`, language: `en`, name: `Osaka's symbol`, description: `Osaka's Eiffel Tower, lighting up the city in vibrant colors!
Hey, ya ever heard of Tsutenkaku? It's the symbol of Shinsekai in Osaka! Kinda like Osaka's version of the Eiffel Tower, but ours is way more colorful, ya know? (haha). At night, it lights up all sparkly, kinda like an Osaka lady decked out in shiny jewelry struttin' downtown. From the observation deck, you get a killer view of the whole city, real pretty. And right below, there's places like 'Okappa Yokocho' and 'Janjan Yokocho' where you can feel that old-school Osaka vibe. If you're in Osaka, ya gotta feel the breeze at Tsutenkaku!`, author: '@zuka20210101'
    },
    {
        type: `Heads`, prefecture: `Hyogo`, key: `head-28-hyogo`, language: `ja`, name: `兵庫県`, description: `🌍 兵庫県、日本のミニチュア版！
中央にポジション取り: 兵庫県は日本の中心に位置。北は日本海、南は太平洋という、まるで日本のミニ版のような立地です。
🌦 四季折々の気候ショーケース:
瀬戸内海側は、夏の太陽をたっぷり浴びて暖かい。
一方、日本海側は、冬には雪のワンダーランドに変身！
🏞 風景の宝石箱:
大都市の神戸から、のどかな農山村、さらには美しい淡路島まで、兵庫県は風景の宝石箱のよう！
🌊 歴史の舞台:
「古事記」によれば、淡路島は日本で最初にできた島。まるで、日本の歴史のスタートライン！
兵庫県は、その多様性と魅力で、まるで日本の美しいミニチュア版のような存在！🌸🏔🌊🏙`, author: '@zuka20210101'
    }, {
        type: `Heads`, prefecture: `Hyogo`, key: `head-28-hyogo`, language: `en`, name: `Hyogo Prefecture`, description: `🌍 Hyogo Prefecture, Japan in Miniature!
Centered Position: Hyogo is located right in the heart of Japan. With the Sea of Japan to the north and the Pacific Ocean to the south, it's like a mini version of Japan itself.
🌦 A Showcase of Four Seasons:
On the Seto Inland Sea side, it basks in the abundant summer sun, staying warm.
Meanwhile, the Sea of Japan side transforms into a winter wonderland with snow!
🏞 A Jewel Box of Sceneries:
From the bustling city of Kobe to tranquil farming villages, and the beautiful Awaji Island, Hyogo is like a treasure chest of landscapes.
🌊 A Stage of History:
According to the 'Kojiki', Awaji Island was the first to be created in Japan. It's like the starting line of Japanese history!
Hyogo Prefecture, with its diversity and charm, truly feels like a beautiful miniature version of Japan! 🌸🏔🌊🏙`, author: '@zuka20210101'
    },
    {
        type: `Heads`, prefecture: `Hyogo`, key: `hyogo-arimaonsen`, language: `ja`, name: `有馬温泉`, description: `有馬温泉は兵庫県の隠れた宝石やけど、ここ、ちょっと特別やで。なんでかって？金泉と銀泉っていう、まるで宝物みたいな二つの源泉があるからや。
金泉は、ちょっと赤茶けたお湯で、鉄分たっぷり。飲んだら…ううん、飲むんじゃないで！お風呂に入るんや！このお湯、筋肉痛や疲れには最高やで。まるで、自分の体が魔法のポーションに浸かってるみたい。
銀泉は、透明で炭酸水素塩が豊富。肌がすべすべになるんや。このお湯に入ると、10歳は若返った気分になれるかもしれん（笑）。まるで、時の流れを逆行してるかのよう！
近くには神戸があるから、都会の喧騒から逃げて、ちょっと時間を忘れたい時には最高やで。でも、気をつけて！あまりの気持ちよさに、帰りたくなくなるかもしれんで（笑）。
せやから、兵庫に来たら、有馬温泉は外せへんで！体も心も、そして笑顔もゲットできること間違いなしや！`, author: '@zuka20210101'
    }, {
        type: `Heads`, prefecture: `Hyogo`, key: `hyogo-arimaonsen`, language: `en`, name: `Arima Onsen`, description: `Arima Onsen in Hyogo Prefecture is like a hidden gem, but there's something extra special about this place. Why, you ask? Because of its two treasure-like springs: Kinsen and Ginsen.
Kinsen has a slightly reddish-brown tint and is rich in iron. If you think of drinking it... nope, don't even think about it! It's for bathing! This water is just the ticket for sore muscles and fatigue. It feels like you're soaking in a magical potion.
Ginsen, on the other hand, is clear and loaded with bicarbonate. It makes your skin silky smooth. Dive in, and you might just feel a decade younger – no kidding! It's as if you're defying the sands of time.
With Kobe nearby, it's the perfect escape from the hustle and bustle when you want to lose track of time. But be warned! The comfort might make you never want to leave (haha).
So, if you're in Hyogo, you can't miss out on Arima Onsen! It's a sure bet for relaxation, rejuvenation, and a big smile!
`, author: '@zuka20210101'
    },
    {
        type: `Heads`, prefecture: `Hyogo`, key: `hyogo-himejicastle`, language: `ja`, name: `姫路城`, description: `白鷺の美しゃん: 「白鷺城」って言うねんけど、まるで雪のような白さで、ほんまにきれいやぞ！
歴史深いねん: 1346年からここにあって、ユネスコの世界遺産にも選ばれとる。播州の誇りやで！
戦いはせんかった: ここは「不戦の城」って言われてる。戦争なんてせんかったから、ほんまに平和やぞ！
映画の主役: この城、映画やドラマでよう見るやろ？ほんまにスターみたいやぞ！
「だから、姫路城は播州の一番の名所！みんな、見に来いや！」`, author: '@zuka20210101'
    }, {
        type: `Heads`, prefecture: `Hyogo`, key: `hyogo-himejicastle`, language: `en`, name: `Himeji Castle`, description: `Beauty of the White Heron: They call it the 'White Heron Castle', and its snow-like whiteness is truly mesmerizing!
Deep-rooted History: Established in 1346, it's even been designated as a UNESCO World Heritage site. It's the pride of Harima!
A Castle that Never Saw Battle: This place is known as the 'Peaceful Castle'. It's never seen wars, truly a symbol of peace!
A Movie Star: You've probably seen this castle in movies and dramas, right? It's like a superstar!
'So, Himeji Castle is the top attraction of Harima! Everyone, come and see!'`, author: '@zuka20210101'
    },
    {
        type: `Heads`, prefecture: `Hyogo`, key: `hyogo-tajimaushi`, language: `ja`, name: `但馬牛`, description: `牛界のスーパーモデルやで！なんでかって？旨みたっぷりで、臭みなんて微塵もないからや。サシの融点が低いから、口の中でまるでアイスクリームのようにとろけるんや。
赤身と脂のバランスは、まるでプロのジャグラーがボールを投げてるみたいに絶妙。筋肉はしなやかで、ちょうどいい量の脂肪をキープしてるんや。体型も小柄で、骨が細く、まるでアスリートのような締まった身体を持ってるから、筋繊維もばっちり。
遺伝的にも、余分な脂肪はつきにくいんや。まるで、健康オタクがジムで鍛え上げた身体みたいや。そして、その柔らかさと食感は、まるで高級シルクのよう。
でも、ここがポイントやで。但馬牛は、神戸牛や松阪牛などの高級牛のベースとしても使われてるんや。でもね、但馬牛の肉質等級は2等級以上、一方で神戸牛は4等級以上やで。つまり、但馬牛は、ちょっと地味だけど、しっかりとした実力派や！`, author: '@zuka20210101'
    }, {
        type: `Heads`, prefecture: `Hyogo`, key: `hyogo-tajimaushi`, language: `en`, name: `Tajima beef`, description: `It's like the supermodel of the bovine world, ya know? Why's that? Because it's bursting with flavor and doesn't have a hint of that typical meaty smell. The fat melts at such a low temperature, it's like having ice cream melt in your mouth.
The balance between the lean meat and fat? It's as if a pro juggler's tossing balls – just perfect. The muscles are tender, holding just the right amount of fat. They're petite in stature, with slender bones, almost like they've got the toned body of an athlete, so the muscle fibers are on point.
Genetically speaking, they don't easily put on extra fat. It's as if a health nut has been hitting the gym and sculpted their body. And the tenderness and texture? It's like the finest silk.
But here's the kicker. Tajima cattle, which is what they're called, are also used as the base for high-end beef like Kobe and Matsusaka. But, Tajima beef has a meat quality grade of at least 2, while Kobe beef is 4 and above. So, while Tajima might seem a bit understated, they're solidly top-tier in performance!`, author: '@zuka20210101'
    },
    {
        type: `Heads`, prefecture: `Nara`, key: `head-29-nara`, language: `ja`, name: `奈良県`, description: `奈良県って、まるで日本の歴史のタイムカプセルやな！なんと、710年にはここが日本の中心、平城京として賑わってたんや。東京の先祖みたいなもんやけど、ちょっとレトロ感が強いかも（笑）。
そして、奈良には「歴史のVIP」たちがずらり。春日大社や東大寺、薬師寺なんかの古い寺院や神社たちが、今も昔の栄光を保ってるんや。これらの場所は、まるでタイムスリップして古代に飛んだみたい。でも、タイムスリップよりもっとリアルで、入場料もタイムマシンより安いで（笑）。
さらに、これらの歴史的な場所は、世界遺産にも認定されてるんや。世界中の人々も、奈良の歴史の魅力に夢中やで。
でも、奈良の真の魅力は、ただの建物や歴史だけやない。ここに住む鹿たちや、地元の人々の暖かさ、そして、古代の空気を今でも感じられる街の雰囲気。これが、奈良の真の「世界遺産」やと思うんや。`, author: '@zuka20210101'
    }, {
        type: `Heads`, prefecture: `Nara`, key: `head-29-nara`, language: `en`, name: `Nara Prefecture`, description: `Nara Prefecture is like Japan's historical time capsule! Believe it or not, back in 710, this place was the bustling heart of Japan, known as Heijō-kyō. Think of it as Tokyo's great-granddaddy, but with a touch more vintage flair (wink).
And in Nara, you've got the historical A-listers lined up. Age-old temples and shrines like Kasuga-taisha, Tōdai-ji, and Yakushi-ji are still basking in their ancient glory. Visiting these spots feels like you've time-traveled back to the olden days. But it's way more authentic than any time slip, and the admission fee? Way cheaper than a time machine, I promise (lol).
What's more, these historical hotspots have been crowned as World Heritage Sites. People from all over the globe are head over heels for Nara's historical allure.
But the real charm of Nara isn't just in its buildings or history. It's in the deer roaming around, the warmth of the locals, and the ancient vibes that the city still exudes. That, my friend, is what I'd call Nara's true 'World Heritage.'`, author: '@zuka20210101'
    },
    {
        type: `Heads`, prefecture: `Nara`, key: `nara-ashura`, language: `ja`, name: `阿修羅像`, description: `さあ、奈良の興福寺には、ちょっと変わったセレブが住んでるんやで！名前は「阿修羅像」。この名前、ちょっとカッコイイやろ？でも、その姿はもっとすごいんや。
この阿修羅像、三面三目のユニークなルックスで、まるでファッションモデルのようにポーズをとってるんや。でも、彼の背後には深いストーリーがあるんや。仏教の世界観を背負って、戦いを好むけど、仏教の教えにも従ってるんや。
さらに、この像、乾漆造りっていうスペシャルな技法で作られてて、まるでアートのマスターピースや。日本中で、この技術の完成度はトップクラスやで。
そして、この阿修羅像、国宝やし、世界遺産にも選ばれてるんや。まるで、ハリウッドスターのように、赤いじゅうたんを歩いてるみたいや。
でも、一番の魅力は、彼の顔や。怒りや悲しみ、安らぎ…全部が一つの顔に詰まってる。まるで、ドラマの主人公みたいや。
だから、興福寺に行ったら、このスーパースター、阿修羅像に会わんと損やで！彼の美しさとストーリーを知れば、きっと心の中でスタンディングオベーションを送りたくなるやろう！`, author: '@zuka20210101'
    }, {
        type: `Heads`, prefecture: `Nara`, key: `nara-ashura`, language: `en`, name: `Asura statue`, description: `This Ashura, with its unique three-faced, three-eyed look, is striking a pose like it's on a fashion runway. But behind that look, there's a deep tale. Balancing the Buddhist worldview, it's said to love a good battle but still follows the teachings of Buddhism.
And get this, the statue was crafted using this fancy technique called 'dry lacquer', making it a top-notch masterpiece in Japan.
Plus, our Ashura here isn't just any statue. It's a National Treasure and even made its way to the World Heritage list. Kinda feels like it's strutting down the red carpet, doesn't it?
But the real charm? That face. It's got anger, sadness, and tranquility all packed into one expression. It's like the lead in a gripping drama.
So, if you're hitting up Kofuku-ji, you'd be missing out big time if you don't meet this superstar, the Ashura Statue. Once you get to know its beauty and backstory, you'll probably wanna give it a standing ovation, right in your heart!`, author: '@zuka20210101'
    },
    {
        type: `Heads`, prefecture: `Nara`, key: `nara-deer`, language: `ja`, name: `鹿`, description: `奈良公園に来たら、スターたちに会わんと損やで！誰かって？ハリウッドスターやなくて、奈良のスーパースター、鹿たちや！鹿たちは、昔からの地元セレブで、春日大社の神様のお使いさんやってん。
でもね、ちょっとわがままなとこもあるんや。特に、お腹がすくとな。公園内で売ってる「鹿せんべい」を持ってると、まるでファンがアイドルに群がるように、あっという間にあなたの周りにファンクラブができあがるで！
そして、彼らの特技は、お辞儀やで。せんべいを上手に使って、彼らにお辞儀をさせることもできるんや。まるで、奈良の鹿たちは、お辞儀のプロフェッショナルやな。
でも、彼らとの交流は楽しいけど、ちょっとした注意も必要やで。特に、せんべいを持ってるときや、子鹿の近くにいるときは、ちょっとした鹿の気まぐれに気をつけてな！
とにかく、奈良公園の鹿たちは、ちょっとしたセレブ気分を味わいたいなら、絶対に会ってみるべきやで！
`, author: '@zuka20210101'
    }, {
        type: `Heads`, prefecture: `Nara`, key: `nara-deer`, language: `en`, name: `deer`, description: `If you come to Nara Park and don't meet the stars, you're missing out! Who am I talking about? Not Hollywood stars, but Nara's very own superstars: the deer! These deer have been local celebrities for ages, considered messengers of the gods of Kasuga Shrine.
But, let me tell you, they can be a bit spoiled. Especially when they're hungry. If you have the 'deer crackers' sold in the park, it's like being a pop star surrounded by fans. They'll flock to you in no time!
And their special talent? Bowing! With a cracker in hand, you can even get them to bow to you. It's as if the deer in Nara are professional greeters.
But while interacting with them is fun, you've got to be careful. Especially when you have crackers or are near a fawn. You never know when they might get a bit mischievous!
In any case, if you want to feel like a celebrity for a day, you absolutely must meet the deer of Nara Park!`, author: '@zuka20210101'
    },
    {
        type: `Heads`, prefecture: `Wakayama`, key: `head-30-wakayama`, language: `ja`, name: `和歌山県`, description: `冒険も癒しも、和歌山で一皿に！
🏄‍♂️ **和歌山、アドベンチャーの王国！**
- 海でサーフィン、山でトレジャーハント、川でワイルドラフティング！和歌山はアウトドアのテーマパークだ！
🛁 **温泉天国、癒しの楽園！**
- 白浜で海を見ながらの温泉デート、龍神で森の中の秘湯探し。和歌山は、自然の中で最高のリラックスタイムを提供！
🍜 **グルメ探検隊、スタート！**
- 和歌山ラーメンの醤油の香りに誘われ、次は柚子の香り漂うめはり寿司の宝探し！和歌山の食の宝箱を開けてみよう！
---
和歌山県は、アクション映画のようなスリルと冒険、リラックスムービーのような癒し、そしてグルメ番組のような食の楽しさが詰まった、エンターテインメント満載の場所です！🌟🎥🍿`, author: '@zuka20210101'
    }, {
        type: `Heads`, prefecture: `Wakayama`, key: `head-30-wakayama`, language: `en`, name: `Wakayama Prefecture`, description: `Adventure and relaxation, all on one plate in Wakayama!
🏄‍♂️ Wakayama, the Kingdom of Adventure!
Surfing in the sea, treasure hunting in the mountains, and wild rafting in the rivers! Wakayama is an outdoor theme park!
🛁 Hot Spring Heaven, a Sanctuary of Relaxation!
Hot spring dates while gazing at the sea in Shirahama, and searching for hidden baths in the forests of Ryujin. Wakayama offers the ultimate relaxation amidst nature!
🍜 Gourmet Expedition, Begin!
Lured by the aroma of Wakayama ramen's soy sauce, and next, the fragrant scent of yuzu in mehari sushi! Let's open Wakayama's treasure chest of flavors!`, author: '@zuka20210101'
    },
    {
        type: `Heads`, prefecture: `Wakayama`, key: `wakayama-danjogarandaito`, language: `ja`, name: `壇上伽藍`, description: `19の諸堂が語る、石と木の物語。壇上伽藍で聞こえてきますか？
高野山の心、壇上伽藍へようこそ！空海の夢が現実となった場所で、19の諸堂が曼荼羅の世界を織り成す。50メートルの根本大塔から、金堂、中門、四天王堂、護摩堂まで、一歩一歩が歴史の息吹を感じさせる。2004年の世界遺産登録も納得のスポット！アクセスも便利で、和歌山のこの聖地は待ってるで！ただ、真言宗の聖地だから、マナーを守って、心静かに参拝しよう。そして、歩きやすい靴で、早めの訪問がおすすめやで！`, author: '@zuka20210101'
    }, {
        type: `Heads`, prefecture: `Wakayama`, key: `wakayama-danjogarandaito`, language: `en`, name: `Danjogaran`, description: `The tale of stone and wood, told by 19 temples. Can you hear it at Danjo Garan?
Welcome to the heart of Koyasan, Danjo Garan! A place where Kukai's dream becomes reality, and 19 temples weave the world of the mandala. From the 50-meter tall Konpon Daito to the Kondo, Chumon, Shitenno-do, and Goma-do, every step resonates with the breath of history. No wonder it was designated a World Heritage Site in 2004! Access is convenient, and this sacred site in Wakayama awaits you! But remember, it's a sacred site of the Shingon sect, so observe proper manners and visit with a serene heart. And, wear comfortable shoes and consider visiting early!`, author: '@zuka20210101'
    },
    {
        type: `Heads`, prefecture: `Wakayama`, key: `wakayama-nachifall`, language: `ja`, name: `那智の滝`, description: `10km先まで響くエコー、40階分の落下！那智の滝、和歌山の大迫力ライブ！
那智の滝、和歌山のスーパースター！落差133mって、エレベーターで約40階分だよ！ビルの頂上から見下ろすような高さからの水の落下、想像しただけでドキドキ。その音、10km先まで届くって、ライブコンサート以上の迫力やん！しかも、ユネスコの世界遺産にも登録されてるし、那智の滝はまさに和歌山のトップアイドル。観光施設も充実してるから、ファンとしては「さまざまな角度からのツーショット、撮りたい！」ってなるよね。日本を代表するこの滝、一度はライブ観賞してみて！`, author: '@zuka20210101'
    }, {
        type: `Heads`, prefecture: `Wakayama`, key: `wakayama-nachifall`, language: `en`, name: `Nachi Waterfall`, description: `Echoes heard 10km away, a drop equivalent to 40 floors! Nachi Falls, Wakayama's powerful live performance!
Nachi Falls, Wakayama's superstar! A drop of 133m is like descending about 40 floors in an elevator! Just imagining the water cascading from the height of a skyscraper's top gives you a thrill. And that sound, reaching up to 10km away, it's more intense than a live concert! Plus, it's registered as a UNESCO World Heritage site. Nachi Falls is truly Wakayama's top idol. With well-developed tourist facilities, as a fan, you'd think, 'I want to snap a pic from every angle!' Representing Japan, you've got to witness this waterfall live at least once!`, author: '@zuka20210101'
    },
    {
        type: `Heads`, prefecture: `Wakayama`, key: `wakayama-wakayamaramen`, language: `ja`, name: `和歌山ラーメン`, description: `和歌山ラーメン、2つの味の対決！でも、驚きの第一幕は早寿司でスタート！
「和歌山ラーメン」、地元の人たちにとってはただの「中華そば」。でも、その名前の裏には、2つの大きな派閥が隠れてるんだよ！豚骨醤油ベースの井出商店と、醤油ベースの○京。どっちが好きかは、まさに和歌山の'永遠の問題'！でも、注文する前にちょっと驚き。テーブルには「早寿司」が！これ、ラーメンが来る前のお楽しみ。和歌山ラーメンの前菜としてはちょっと変わってるよね？和歌山ラーメン、ただのラーメンじゃない、和歌山のユニークな文化の一部！食べ比べて、その違いを楽しんでみて！`, author: '@zuka20210101'
    }, {
        type: `Heads`, prefecture: `Wakayama`, key: `wakayama-wakayamaramen`, language: `en`, name: `Wakayama ramen`, description: `Wakayama Ramen, a duel of two flavors! But the surprising opening act? It's Hayazushi!
'Wakayama Ramen' is just 'Chuka Soba' for the locals. But behind that name, there are two major factions hiding! Ide Shouten with its pork bone soy sauce base, and Marukyo with its soy sauce base. Which one do you prefer? It's Wakayama's 'eternal debate'! But before you order, there's a little surprise on the table: 'Hayazushi'! It's a treat before the ramen arrives. A bit unusual for a ramen appetizer, right? Wakayama Ramen isn't just ramen; it's a part of Wakayama's unique culture! Try both and enjoy the differences!`, author: '@zuka20210101'
    },
    {
        type: `Heads`, prefecture: `Tottori`, key: `head-31-tottori`, language: `ja`, name: `鳥取県`, description: `日本の中国地方にある県である。県庁所在地は鳥取市。
日本海側にあり、山陰地方の東側を占める。面積は約3,507平方キロメートルと全国で7番目に小さく、人口は約55万人で最も少ない。`, author: 'hamachan'
    }, {
        type: `Heads`, prefecture: `Tottori`, key: `head-31-tottori`, language: `en`, name: `Tottori prefecture
`, description: `Tottori is a prefecture in the Chugoku region of Japan. The prefectural capital is Tottori City.
Located on the Sea of Japan side, it occupies the eastern part of the San'in region. With an area of approximately 3,507 square kilometers, it is the seventh smallest prefecture in Japan and has the smallest population of approximately 550,000.`, author: 'hamachan'
    },
    {
        type: `Heads`, prefecture: `Shimane`, key: `head-32-shimane`, language: `ja`, name: `島根県`, description: `日本の中国地方（山陰地方）にある県。県庁所在地は松江市。
本州西部に位置し、山陰地方の西側を占める。離島の隠岐諸島や竹島なども含む。
旧令制国における出雲国・石見国・隠岐国の3国に相当する。現在でも県内の地域分類として出雲地方・石見地方・隠岐地方の3区分が用いられることがある。`, author: 'hamachan'
    }, {
        type: `Heads`, prefecture: `Shimane`, key: `head-32-shimane`, language: `en`, name: `Shimane Prefecture`, description: `A prefecture located in the Chugoku region (San'in region) of Japan. The prefectural capital is Matsue City.
Located in the western part of Honshu, the prefecture occupies the western part of the San'in region. It includes the Oki Islands and Takeshima, which are remote islands.
The prefecture corresponds to the three provinces of Izumo, Iwami, and Oki in the former system of government. Even today, the three divisions of Izumo, Iwami, and Oki are sometimes used as a regional classification of the prefecture.`, author: 'hamachan'
    },
    {
        type: `Heads`, prefecture: `Okayama`, key: `head-33-okayama`, language: `ja`, name: `岡山県`, description: `日本の中国地方に位置する県。県庁所在地は岡山市。
県庁所在地の岡山市は2009年に全国で18番目の政令指定都市に移行した。山陽本線、山陽新幹線、中国自動車道、1997年に全線開通した山陽自動車道をはじめとして西日本の交通の大動脈が県を横断している。本州と四国を結ぶ瀬戸大橋も1988年に開通した。
県庁所在地における快晴日数の多さや降水量1ミリ未満の日数が全国最多であることから、1989年から「晴れの国 おかやま」を県のキャッチフレーズとしている。`, author: 'hamachan'
    }, {
        type: `Heads`, prefecture: `Okayama`, key: `head-33-okayama`, language: `en`, name: `Okayama Prefecture`, description: `Okayama Prefecture is located in the Chugoku region of Japan. The prefectural capital is Okayama City.
Okayama City, the prefectural capital, became the 18th ordinance-designated city in Japan in 2009. The Sanyo Main Line, Sanyo Shinkansen, Chugoku Expressway, and Sanyo Expressway, which was fully opened in 1997, are the major transportation arteries in western Japan that cross the prefecture. The Seto Ohashi Bridge, which connects Honshu and Shikoku, opened in 1988.
Since 1989, the prefecture has used the catchphrase 'sunny country, Okayama' in reference to the large number of sunny days and the number of days with less than one millimeter of precipitation in the prefecture's capital city, which are the highest in Japan.`, author: 'hamachan'
    },
    { type: `Heads`, prefecture: `Okayama`, key: `okayama-denim01`, language: `ja`, name: `デニム1`, description: `④機能性ジーンズの開発とブランドの多様性: 岡山デニムは、ジャガードやシルク、レーヨンを使用したもの、ストレッチデニム、温感やクール体感などの機能性を持ったデニムなど、デニムの可能性を追求し続けています。さらに、多くのブランドやメーカーが存在し、それぞれが独自の特色やデザインを持つ製品を提供しています。`, author: '@zuka20210101' }, { type: `Heads`, prefecture: `Okayama`, key: `okayama-denim01`, language: `en`, name: `denim`, description: `④Development of Functional Jeans and Brand Diversity: Okayama denim continuously explores the potential of denim, producing variants using jacquard, silk, rayon, stretch denim, and denim with thermal or cooling properties. Furthermore, the presence of numerous brands and manufacturers ensures a diverse range of products, each with its unique features and designs.`, author: '@zuka20210101' },
    { type: `Heads`, prefecture: `Okayama`, key: `okayama-denim02`, language: `ja`, name: `デニム2`, description: `⑤地域での完結と品質へのこだわり: 岡山デニムの製造に関するほとんどすべての工程が岡山地域内で完結できるという強みがあります。これにより、高品質で安定した製品づくりが可能になっています。生産者たちは、素材選びから製造工程まで、細部にわたって品質を追求しています。`, author: '@zuka20210101' }, { type: `Heads`, prefecture: `Okayama`, key: `okayama-denim02`, language: `en`, name: `denim`, description: `⑤Local Production and Commitment to Quality: A significant advantage of Okayama denim is that almost all stages of its production are completed within the Okayama region. This ensures the creation of high-quality, consistent products. Producers are meticulous, from material selection to the manufacturing process, ensuring the highest quality.`, author: '@zuka20210101' },
    { type: `Heads`, prefecture: `Okayama`, key: `okayama-denim03`, language: `ja`, name: `デニム3`, description: `⑥長い歴史と職人の技術: 岡山デニムの発展は、数百年の歴史の中での職人の技術の継承と創意工夫や努力の結果であり、その結果として現在の高い評価を得ています。`, author: '@zuka20210101' }, {
        type: `Heads`, prefecture: `Okayama`, key: `okayama-denim03`, language: `en`, name: `denim`, description: `⑥Long History and Craftsmanship: The evolution of Okayama denim is the result of centuries of craftsmanship, innovation, and dedication, leading to its current esteemed reputation.
`, author: '@zuka20210101'
    },
    {
        type: `Heads`, prefecture: `Okayama`, key: `okayama-dog`, language: `ja`, name: `犬`, description: `現代でも多くの人に愛されている動物が犬。
飼い主によく懐き、とても従順です。
そんな忠義心の強い犬は、見返りを求めずに愛するご主人に尽くしてくれます。
また、犬は人の気持ちを理解してくれる優しい動物でもあります。
１度懐いた人のことを忘れない犬は、人間と一緒に共存しやすい動物ともいえるでしょう。`, author: 'hamachan'
    }, {
        type: `Heads`, prefecture: `Okayama`, key: `okayama-dog`, language: `en`, name: `dog`, description: `Dogs are animals that are loved by many people even today.
They are very obedient and miss their owners very much.
Such loyal dogs are devoted to their beloved masters without asking for anything in return.
Dogs are also gentle animals that understand people's feelings.
Dogs do not forget those who have once taken a liking to them, and they can be said to be animals that can easily coexist with humans.
`, author: 'hamachan'
    },
    { type: `Heads`, prefecture: `Okayama`, key: `okayama-horseshoe-crab`, language: `ja`, name: `カブトガニ`, description: `節足動物。ドーム状の体に剣のような尾を持つ。背面全体が広く背甲で覆われ、脚などの付属肢はすべてその下に隠れている。名前はこの背甲に由来する。甲殻類であるカニではない。`, author: 'hamachan' }, { type: `Heads`, prefecture: `Okayama`, key: `okayama-horseshoe-crab`, language: `en`, name: `horseshoe-crab`, description: `Arthropod. It has a dome-shaped body with a sword-like tail. Its entire back is covered by a broad dorsal carapace, under which all appendages, including the legs, are hidden. Its name is derived from this dorsal carapace. It is not a crustacean crab.`, author: 'hamachan' },
    { type: `Heads`, prefecture: `Okayama`, key: `okayama-momotaro`, language: `ja`, name: `桃太郎`, description: `日本のおとぎ話の一つ。桃の実から生まれた男子「桃太郎」が、お爺さんお婆さんから黍団子（きびだんご）をもらって、イヌ、サル、キジを家来にし、鬼ヶ島まで鬼を退治しに行く物語。`, author: 'hamachan' }, { type: `Heads`, prefecture: `Okayama`, key: `okayama-momotaro`, language: `en`, name: `momotaro`, description: `This is one of the Japanese fairy tales. Momotaro, a boy born from a peach seed, receives a millet dumpling from his grandparents, takes a dog, a monkey, and a pheasant as his retainers, and goes to Onigashima Island to exterminate ogres.`, author: 'hamachan' },
    {
        type: `Heads`, prefecture: `Okayama`, key: `okayama-monkey`, language: `ja`, name: `猿`, description: `人間に最も近いと言えるのが「サル」
哺乳類であり、見た目も私たち人間とよく似ています。
さらに、知能もありとても賢い動物です。
頭の良い猿だからこそ、桃太郎の仲間に選ばれたのかもしれませんね。`, author: 'hamachan'
    }, {
        type: `Heads`, prefecture: `Okayama`, key: `okayama-monkey`, language: `en`, name: `monkey`, description: `The closest thing we have to a human being is the 'monkey.
They are mammals and look very similar to us humans.
Furthermore, they are intelligent and very clever animals.
Perhaps it is because they are smart monkeys that they were chosen to be Momotaro's companions.`, author: 'hamachan'
    },
    { type: `Heads`, prefecture: `Okayama`, key: `okayama-peach`, language: `ja`, name: `桃`, description: `中国原産。食用・観賞用として世界各地で品種改良されて栽培される。春には五弁または多重弁の花を咲かせ、夏には水分が多く甘い球形の果実を実らせる。中国では邪鬼を払う力があるとされた。`, author: 'hamachan' }, { type: `Heads`, prefecture: `Okayama`, key: `okayama-peach`, language: `en`, name: `peach`, description: `Native to China. It is bred and cultivated throughout the world for both food and ornamental use. It produces five- or multi-petaled flowers in spring and sweet spherical fruits with high water content in summer. In China, it was believed to have the power to ward off evil spirits.`, author: 'hamachan' },
    {
        type: `Heads`, prefecture: `Okayama`, key: `okayama-pheasant`, language: `ja`, name: `キジ`, description: `色とりどりで美しい羽を持っていることで知られている鳥といえば「キジ」
キジの鳴き声はとても力強く、ケンケーンと鳴きます。
そんなキジは勇気の象徴ともされています。
勇気がなければ鬼ヶ島へと行くことはもちろんできません。
桃太郎の仲間の一員としてキジは外せないともいえるでしょう。`, author: 'hamachan'
    }, {
        type: `Heads`, prefecture: `Okayama`, key: `okayama-pheasant`, language: `en`, name: `pheasant`, description: `A bird known for its colorful and beautiful feathers is the pheasant.
The pheasant's call is very powerful, with a ken-ken sound.
Such a pheasant is also considered a symbol of courage.
Without courage, of course, it is impossible to go to Onigashima.
It can be said that the pheasant is an indispensable member of Momotaro's group.`, author: 'hamachan'
    },
    { type: `Heads`, prefecture: `Hiroshima`, key: `head-34-hiroshima`, language: `ja`, name: `広島県`, description: `臨海部を中心に自動車産業、製鉄、造船などの工業が発展（瀬戸内海工業地域）している。県庁所在地の広島市は政令指定都市であり中国・四国地方最大の都市である。一方で海・山の豊富な自然にも恵まれ、農業・漁業も盛んである。このことから産業分布が日本平均に近く、県民所得も中位にあり「日本国の縮図」とも呼ばれることがある。`, author: 'hamachan' }, { type: `Heads`, prefecture: `Hiroshima`, key: `head-34-hiroshima`, language: `en`, name: `Hiroshima Prefecture`, description: `Industries such as the automobile industry, steel manufacturing, and shipbuilding have developed mainly in the waterfront area (Seto Inland Sea Industrial Area). Hiroshima City, the prefectural capital, is an ordinance-designated city and the largest city in the Chugoku and Shikoku regions. On the other hand, Hiroshima is blessed with abundant natural beauty of the sea and mountains, and has a thriving agriculture and fishing industry. The prefecture's industrial distribution is close to the Japanese average, and it is sometimes called 'the epitome of Japan' because of its medium income level.`, author: 'hamachan' },
    {
        type: `Heads`, prefecture: `Hiroshima`, key: `hiroshima-manju-choco`, language: `ja`, name: `もみじ饅頭(チョコ)`, description: `饅頭の一種。もみじをかたどった焼饅頭の一種であり、広島県厳島（宮島）の名産品である。
チョコレートは、カカオの種子を発酵又は焙煎したカカオマスを主原料とし、これに砂糖、ココアバター、粉乳などを混ぜて練り固めた菓子である。略してチョコともいう。ショコラと呼ばれることもある。`, author: 'hamachan'
    }, {
        type: `Heads`, prefecture: `Hiroshima`, key: `hiroshima-manju-choco`, language: `en`, name: `Momiji Manju(choco)`, description: `kind of steamed bun. It is a kind of baked bun in the shape of a maple tree, and is a specialty of Itsukushima (Miyajima), Hiroshima Prefecture.
Chocolate is a confectionery made mainly from cacao mass, which is fermented or roasted cacao seeds, mixed with sugar, cocoa butter, milk powder, and other ingredients, and kneaded into a solid mixture. Also called chocolate for short. It is also sometimes called 'chocolat.`, author: 'hamachan'
    },
    {
        type: `Heads`, prefecture: `Hiroshima`, key: `hiroshima-manju-custard`, language: `ja`, name: `もみじ饅頭(カスタード)`, description: `饅頭の一種。もみじをかたどった焼饅頭の一種であり、広島県厳島（宮島）の名産品である。
カスタードは、卵、牛乳、砂糖、香料などからなるカスタードソース。`, author: 'hamachan'
    }, {
        type: `Heads`, prefecture: `Hiroshima`, key: `hiroshima-manju-custard`, language: `en`, name: `Momiji Manju(custard)`, description: `A kind of steamed bun. It is a kind of baked bun in the shape of a maple leaf, and is a specialty of Itsukushima (Miyajima), Hiroshima Prefecture.
Custard is a custard sauce consisting of eggs, milk, sugar, and flavorings.`, author: 'hamachan'
    },
    {
        type: `Heads`, prefecture: `Hiroshima`, key: `hiroshima-manju-koshi`, language: `ja`, name: `もみじ饅頭(こしあん)`, description: `饅頭の一種。もみじをかたどった焼饅頭の一種であり、広島県厳島（宮島）の名産品である。
小豆をつぶし、布等で裏ごしをして、豆の皮を取り除いたのが「こしあん」です。`, author: 'hamachan'
    }, {
        type: `Heads`, prefecture: `Hiroshima`, key: `hiroshima-manju-koshi`, language: `en`, name: `Momiji Manju(koshian)`, description: `A kind of steamed bun. It is a type of baked bun shaped like a maple leaf, and is a specialty of Itsukushima (Miyajima), Hiroshima Prefecture.
Koshi-an' is made by mashing azuki beans, backing them with a cloth, etc., and removing the bean skin.`, author: 'hamachan'
    },
    {
        type: `Heads`, prefecture: `Hiroshima`, key: `hiroshima-manju-maccha`, language: `ja`, name: `もみじ饅頭(抹茶)`, description: `饅頭の一種。もみじをかたどった焼饅頭の一種であり、広島県厳島（宮島）の名産品である。
小豆こしあんに上質な抹茶を加えた抹茶あん。`, author: 'hamachan'
    }, {
        type: `Heads`, prefecture: `Hiroshima`, key: `hiroshima-manju-maccha`, language: `en`, name: `Momiji Manju(maccha)`, description: `A kind of steamed bun. It is a kind of baked bun in the shape of a maple tree, and is a specialty of Itsukushima (Miyajima), Hiroshima Prefecture.
Matcha-an (green tea bean paste) is made by adding high-quality matcha (powdered green tea) to azuki koshi-an (red bean paste).`, author: 'hamachan'
    },
    {
        type: `Heads`, prefecture: `Hiroshima`, key: `hiroshima-manju-tsubu`, language: `ja`, name: `もみじ饅頭(つぶあん)`, description: `饅頭の一種。もみじをかたどった焼饅頭の一種であり、広島県厳島（宮島）の名産品である。
小豆をなるべく皮を破らないように裏ごしなどをせず、豆の形を残したのが「つぶあん」です。'`, author: 'hamachan'
    }, {
        type: `Heads`, prefecture: `Hiroshima`, key: `hiroshima-manju-tsubu`, language: `en`, name: `Momiji Manju(tsubuan)`, description: `A kind of steamed bun. It is a type of baked bun shaped like a maple leaf, and is a specialty of Itsukushima (Miyajima), Hiroshima Prefecture.
Tsubu-an'' is made by leaving the shape of azuki beans without lining them so as not to break the skin as much as possible.'`, author: 'hamachan'
    },
    { type: `Heads`, prefecture: `Hiroshima`, key: `hiroshima-okonomiyaki`, language: `ja`, name: `広島風お好み焼き`, description: `小麦粉の生地を薄くのばし、キャベツや豚肉、焼きそばなどを山盛りにし、薄く焼いた卵などを重ねて蒸し焼きにしたもの。 ソースは濃厚な甘口のものを用いるのが一般的で、好みでマヨネーズを付ける場合も。 鉄板の上から食べる時は「ヘラ」で食べる。`, author: 'hamachan' }, {
        type: `Heads`, prefecture: `Hiroshima`, key: `hiroshima-okonomiyaki`, language: `en`, name: `Hiroshima style okonomiyaki
`, description: `It is made by rolling out a thin layer of flour dough, piling up cabbage, pork, yakisoba, etc., and steaming it over a thin layer of cooked eggs, etc. The sauce is usually thick and sweet, and mayonnaise may be added to taste. The sauce is usually thick and sweet, and mayonnaise may be added to taste. When eaten from the teppan, it is eaten with a spatula.`, author: 'hamachan'
    },
    {
        type: `Heads`, prefecture: `Hiroshima`, key: `hiroshima-shrine01`, language: `ja`, name: `嚴島神社 `, description: `広島県廿日市市の厳島（宮島）にある神社。
全国に約500社ある厳島神社の総本社である。
1996年にユネスコの世界文化遺産に「厳島神社」として登録されている。`, author: 'hamachan'
    }, {
        type: `Heads`, prefecture: `Hiroshima`, key: `hiroshima-shrine01`, language: `en`, name: `Itsukushima Shrine
`, description: `Itsukushima Shrine is located on Itsukushima (Miyajima) Island in Hatsukaichi City, Hiroshima Prefecture.
It is the head shrine of Itsukushima Shrine, which has about 500 shrines throughout Japan.
It was registered as a UNESCO World Heritage Site in 1996 as Itsukushima Shrine.`, author: 'hamachan'
    },
    {
        type: `Heads`, prefecture: `Yamaguchi`, key: `head-35-yamaguchi`, language: `ja`, name: `山口県`, description: `日本の中国地方に位置する県。県庁所在地は山口市。
本州の西端に位置し、三方が海に開かれ、東西に中国山地が走り、大きくは、瀬戸内海沿岸地域、内陸山間地域、日本海沿岸地域の3つに分けられ、気候は概して温暖であり、風水害や地震も比較的少ない。`, author: 'hamachan'
    }, {
        type: `Heads`, prefecture: `Yamaguchi`, key: `head-35-yamaguchi`, language: `en`, name: `Yamaguchi Prefecture`, description: `Yamaguchi Prefecture is located in the Chugoku region of Japan. Its capital is Yamaguchi City.
Located at the western end of Honshu, Yamaguchi Prefecture is open to the sea on three sides, with the Chugoku Mountains running east to west. The prefecture is roughly divided into three regions: the Seto Inland Sea coastal region, the inland mountainous region, and the Sea of Japan coastal region.`, author: 'hamachan'
    },
    {
        type: `Heads`, prefecture: `Yamaguchi`, key: `yamaguchi-anglerfish`, language: `ja`, name: `アンコウ`, description: `下関漁港で水揚げされる魚の中でも、あんこうは水揚量日本一。
あんこうは、ほとんど捨てるところのない魚で、「身・皮・肝・胃・エラ・卵巣・トモ（ヒレ）」をあんこうの七つ道具と呼びます。部位によって違う味と食感が楽しめ、淡白でコラーゲンたっぷりなのに低カロリー。特に肝（アンキモ）はビタミンA・ビタミンB12・ビタミンD・DHA・Epaなど豊富な栄養を含んでおり、見た目と食感から『海のフォアグラ』ともいわれています。`, author: 'hamachan'
    }, {
        type: `Heads`, prefecture: `Yamaguchi`, key: `yamaguchi-anglerfish`, language: `en`, name: `anglerfish`, description: `Among the fish landed at Shimonoseki Fishing Port, anglerfish is Japan's largest catch.
Anglerfish is a fish with almost nothing to throw away, and its meat, skin, liver, stomach, gills, ovaries, and fins are called the 'seven essentials' of anglerfish. Each part of the fish has a different taste and texture, and is light, full of collagen, and low in calories. In particular, the liver (ankimo) is rich in nutrients such as vitamin A, vitamin B12, vitamin D, DHA, and epa, and is also called the 'foie gras of the sea' for its appearance and texture.  `, author: 'hamachan'
    },
    { type: `Heads`, prefecture: `Yamaguchi`, key: `yamaguchi-footballfish`, language: `ja`, name: `チョウチンアンコウ`, description: `丸みを帯びた体型と、餌を誘うために用いられる頭部の誘引突起（イリシウム）を特徴とし、深海魚として比較的よく知られた存在である。`, author: 'hamachan' }, { type: `Heads`, prefecture: `Yamaguchi`, key: `yamaguchi-footballfish`, language: `en`, name: `footballfish`, description: `It is a relatively well-known deep-sea fish, characterized by its rounded body shape and the attractant process on its head (iridium) used to attract food.`, author: 'hamachan' },
    { type: `Heads`, prefecture: `Yamaguchi`, key: `yamaguchi-fuku`, language: `ja`, name: `ふく`, description: `下関市は、ふくの取扱量日本一で、市内には全国でも珍しいふくに特化した卸売市場があり、また、多くのふく加工業者がいることから、ふくは下関の代名詞となっています。さらに、市内のあちこちには、ふくの絵が描かれたマンホール蓋やモニュメントがあるなど、ふくを身近に感じられる街となっています。`, author: 'hamachan' }, { type: `Heads`, prefecture: `Yamaguchi`, key: `yamaguchi-fuku`, language: `en`, name: `fuku`, description: `Shimonoseki City handles the largest volume of fuku (blowfish) in Japan and has a wholesale market specializing in fuku (blowfish), which is rare in Japan, as well as many blowfish processors. In addition, there are manhole covers and monuments with pictures of fū here and there in the city, making the city a place where people can feel close to fū.`, author: 'hamachan' },
    {
        type: `Heads`, prefecture: `Yamaguchi`, key: `yamaguchi-kawarasoba`, language: `ja`, name: `瓦蕎麦`, description: `山口県下関市発祥の麺料理で、下関市の郷土料理の1つ。
熱した瓦の上に茶そばと具を乗せて、温かいめんつゆで食べる料理である。具は錦糸卵と細切れの牛肉が一般的。薬味として具の上に刻み小ねぎ、のり、スライスしたレモン、もみじおろしが載せられることが多い。`, author: 'hamachan'
    }, {
        type: `Heads`, prefecture: `Yamaguchi`, key: `yamaguchi-kawarasoba`, language: `en`, name: `kawarasoba`, description: `It is a noodle dish originating from Shimonoseki City, Yamaguchi Prefecture, and is one of the local dishes of Shimonoseki City.
It is a dish of hot kawara tiles topped with chasoba and other ingredients, and served with warm men-tsuyu (a sauce made of noodles and soy sauce). The most common ingredients are a broiled egg and shredded beef. Chopped small green onions, nori (seaweed), sliced lemon, and grated momiji (Japanese maple leaf) are often added as condiments.`, author: 'hamachan'
    },
    { type: `Heads`, prefecture: `Yamaguchi`, key: `yamaguchi-shoin`, language: `ja`, name: `吉田松陰`, description: `江戸時代後期の日本の武士（長州藩士）、思想家、教育者。明治維新の精神的指導者・理論者。「松下村塾」で明治維新で活躍した志士に大きな影響を与えた。`, author: 'hamachan' }, { type: `Heads`, prefecture: `Yamaguchi`, key: `yamaguchi-shoin`, language: `en`, name: `Yoshida Shoin`, description: `Japanese samurai (Choshu clan samurai), thinker, and educator of the late Edo period. He was a spiritual leader and theorist of the Meiji Restoration. He had a great influence on the aspirants who played an active role in the Meiji Restoration at 'Shoukasonjuku.`, author: 'hamachan' },
    {
        type: `Heads`, prefecture: `Tokushima`, key: `head-36-tokushima`, language: `ja`, name: `徳島県`, description: `四国の東部に位置する。県庁所在地は徳島市。県北部は粟が多く収穫されたことから「粟国」（あわのくに）、県南部は「長国」（ながのくに）であったが、後に統合され、令制国では阿波国（あわのくに）と呼ばれていた。
江戸時代より約400年の伝統がある阿波踊りなどの文化を有する。`, author: 'hamachan'
    }, {
        type: `Heads`, prefecture: `Tokushima`, key: `head-36-tokushima`, language: `en`, name: `Tokushima Prefecture`, description: `Located in the eastern part of Shikoku. The prefectural capital is Tokushima City. The northern part of the prefecture was called 'Awanokuni' because of the abundant millet harvest, and the southern part was called 'Naganokuni,' but they were later merged and called Awanokuni under the system of government.
It has a culture with a tradition of about 400 years since the Edo period, including the Awa Odori dance.`, author: 'hamachan'
    },
    { type: `Heads`, prefecture: `Tokushima`, key: `tokushima-awa-odori01`, language: `ja`, name: `阿波踊り`, description: `阿波国（現・徳島県）を発祥とする盆踊り。高知のよさこい祭りと愛媛の新居浜太鼓祭りと並ぶ四国三大祭りであり、日本三大盆踊りの一つとしても知られる。`, author: 'hamachan' }, { type: `Heads`, prefecture: `Tokushima`, key: `tokushima-awa-odori01`, language: `en`, name: `awa-odori`, description: `A Bon dance that originated in Awa Province (now Tokushima Prefecture). It is one of the three major festivals in Shikoku, along with the Yosakoi Festival in Kochi and the Niihama Taiko Festival in Ehime, and is also known as one of the three major Bon dances in Japan.`, author: 'hamachan' },
    {
        type: `Heads`, prefecture: `Tokushima`, key: `tokushima-naruto-wakame`, language: `ja`, name: `鳴門わかめ`, description: `徳島県鳴門市の地域で収穫されるワカメのブランド名。
鳴門の渦潮に代表される激しい潮流のなかで育つため、通常のワカメよりも歯ごたえがあり、鮮やかな緑色なのが特徴である。徳島県を代表する名産品の1つ。`, author: 'hamachan'
    }, {
        type: `Heads`, prefecture: `Tokushima`, key: `tokushima-naruto-wakame`, language: `en`, name: `naruto-wakame`, description: `This is the brand name for wakame seaweed harvested in the Naruto City area of Tokushima Prefecture.
Because it grows in the violent tidal currents represented by the Naruto whirlpools, it has a chewier texture and a brighter green color than ordinary wakame. It is one of the representative specialty products of Tokushima Prefecture.`, author: 'hamachan'
    },
    { type: `Heads`, prefecture: `Tokushima`, key: `tokusima-whirlpools`, language: `ja`, name: `鳴門の渦潮`, description: `徳島県鳴門市と兵庫県南あわじ市の間の鳴門海峡で発生する渦潮である。大潮の際には渦の直径は最大で30メートルに達するといわれることもあり、渦の大きさは世界最大級といわれる。`, author: 'hamachan' }, { type: `Heads`, prefecture: `Tokushima`, key: `tokusima-whirlpools`, language: `en`, name: `whirlpools of naruto`, description: `The Naruto Straits between Naruto City, Tokushima Prefecture, and Minami-Awaji City, Hyogo Prefecture, are home to the Naruto whirlpools. During high tide, the diameter of the whirlpool is said to be up to 30 meters, making it one of the largest whirlpools in the world.`, author: 'hamachan' },
    {
        type: `Heads`, prefecture: `Kagawa`, key: `head-37-kagawa`, language: `ja`, name: `香川県`, description: `日本の四国地方に位置する県。県庁所在地は高松市。
面積は47都道府県で一番小さく、1945年～1972年にかけてアメリカの統治下であった沖縄県を除くと最も遅く独立した県である。都市の利便性と豊かな自然が調和した生活環境を持つ。`, author: 'hamachan'
    }, {
        type: `Heads`, prefecture: `Kagawa`, key: `head-37-kagawa`, language: `en`, name: `Kagawa Prefecture`, description: `A prefecture located in the Shikoku region of Japan. The prefectural capital is Takamatsu City.
It is the smallest prefecture among the 47 prefectures in terms of area, and was the latest prefecture to become an independent prefecture except for Okinawa Prefecture, which was under U.S. administration from 1945 to 1972. It has a living environment that harmonizes urban conveniences with　abundant nature.`, author: 'hamachan'
    },
    {
        type: `Heads`, prefecture: `Kagawa`, key: `kagawa-bonsai`, language: `ja`, name: `高松盆栽`, description: `高松市の鬼無地区と国分寺地区は、松盆栽における国内最大の生産地。珍しい松の畑が広がっており、全国シェアは約８割を占める。
温暖で少雨、夏と冬の温度差が小さく、水はけがよい環境は松の育成に適している。`, author: 'hamachan'
    }, {
        type: `Heads`, prefecture: `Kagawa`, key: `kagawa-bonsai`, language: `en`, name: `Takamatsu-bonsai`, description: `The Oninashi and Kokubunji districts of Takamatsu City are the largest production areas in Japan for pine bonsai. Rare pine tree fields are widespread, and account for about 80% of the national market share.
The mild climate, low rainfall, small temperature difference between summer and winter, and well-drained environment are suitable for growing pine trees.`, author: 'hamachan'
    },
    { type: `Heads`, prefecture: `Ehime`, key: `ehime-iyokan`, language: `ja`, name: `伊予柑`, description: `日本の在来種の柑橘類であり、タンゴールの1種。甘酸っぱくジューシー。果皮は濃いオレンジ色で厚いが、手で剝くことができる。`, author: 'nanatsuba' }, { type: `Heads`, prefecture: `Ehime`, key: `ehime-iyokan`, language: `en`, name: `iyokan`, description: `A Japanese native citrus, a type of tangor. Sweet, sour and juicy. The skin is dark orange and thick, but can be peeled by hand.`, author: 'nanatsuba' },
    { type: `Heads`, prefecture: `Ehime`, key: `ehime-jakoten`, language: `ja`, name: `じゃこ天`, description: `主に南予地方の海岸部で作られる魚肉練り製品。地魚などを骨や皮ごとすり身にし、油で揚げてある。揚げたてをそのまま食べるほか、炙って醤油を垂らしても絶品。`, author: 'nanatsuba' }, {
        type: `Heads`, prefecture: `Ehime`, key: `ehime-jakoten`, language: `en`, name: `jakoten`, description: `A type of fish cake made mainly in the coastal areas of the Nanyo region. 
It's a fried SURIMI (minched fish with bones and skin) of local and other fish . 
It is excellent not only freshly fried, seared on the surface and put on a little soy sauce soy sauce.`, author: 'nanatsuba'
    },
    { type: `Heads`, prefecture: `Ehime`, key: `ehime-mandarin-orange`, language: `ja`, name: `カラマンダリン`, description: `春に旬を迎えるみかんの仲間。みかんと同じように皮をむいてそのまま食べられる。甘味が強くジューシーで、ジュースやスイーツ、ドライフルーツなど、さまざまな食べ方を楽しめる。`, author: 'nanatsuba' }, {
        type: `Heads`, prefecture: `Ehime`, key: `ehime-mandarin-orange`, language: `en`, name: `Kara Mandarin`, description: `Related species of Satsuma mandarin that comes into season in spring.
It can be peeled by hand and eaten easily.
They are juicy and sweet, and can be enjoyed in a variety of ways, including juice, sweets, and dried fruit.`, author: 'nanatsuba'
    },
    {
        type: `Heads`, prefecture: `Ehime`, key: `ehime-onsen01`, language: `ja`, name: `道後温泉`, description: `四国・愛媛県松山市に湧出する温泉である。日本三古湯の一つといわれる。
その存在は古代から知られ、万葉集巻一にも見える。
夏目漱石の小説『坊っちゃん』（1905年）にも描かれ、愛媛県の代表的な観光地となっている。`, author: 'hamachan'
    }, {
        type: `Heads`, prefecture: `Ehime`, key: `ehime-onsen01`, language: `en`, name: `Dogo Onsen`, description: `It is a hot spring that gushes out in Matsuyama City, Ehime Prefecture, Shikoku. It is said to be one of the three oldest hot springs in Japan.
Its existence has been known since ancient times, and is even mentioned in the Manyoshu (The Anthology of Myriad Leaves), Volume 1.
It was also depicted in Soseki Natsume's novel 'Botchan' (1905), and has become a representative tourist attraction in Ehime Prefecture.`, author: 'hamachan'
    },
    {
        type: `Heads`, prefecture: `Ehime`, key: `ehime-onsen02`, language: `ja`, name: `道後温泉`, description: `四国・愛媛県松山市に湧出する温泉である。日本三古湯の一つといわれる。
その存在は古代から知られ、万葉集巻一にも見える。
夏目漱石の小説『坊っちゃん』（1905年）にも描かれ、愛媛県の代表的な観光地となっている。`, author: 'hamachan'
    }, {
        type: `Heads`, prefecture: `Ehime`, key: `ehime-onsen02`, language: `en`, name: `Dogo Onsen`, description: `It is a hot spring that gushes out in Matsuyama City, Ehime Prefecture, Shikoku. It is said to be one of the three oldest hot springs in Japan.
Its existence has been known since ancient times, and is even mentioned in the Manyoshu (The Anthology of Myriad Leaves), Volume 1.
It was also depicted in Soseki Natsume's novel 'Botchan' (1905), and has become a representative tourist attraction in Ehime Prefecture.`, author: 'hamachan'
    },
    {
        type: `Heads`, prefecture: `Ehime`, key: `ehime-onsen03`, language: `ja`, name: `道後温泉`, description: `四国・愛媛県松山市に湧出する温泉である。日本三古湯の一つといわれる。
その存在は古代から知られ、万葉集巻一にも見える。
夏目漱石の小説『坊っちゃん』（1905年）にも描かれ、愛媛県の代表的な観光地となっている。`, author: 'hamachan'
    }, {
        type: `Heads`, prefecture: `Ehime`, key: `ehime-onsen03`, language: `en`, name: `Dogo Onsen`, description: `It is a hot spring that gushes out in Matsuyama City, Ehime Prefecture, Shikoku. It is said to be one of the three oldest hot springs in Japan.
Its existence has been known since ancient times, and is even mentioned in the Manyoshu (The Anthology of Myriad Leaves), Volume 1.
It was also depicted in Soseki Natsume's novel 'Botchan' (1905), and has become a representative tourist attraction in Ehime Prefecture.`, author: 'hamachan'
    },
    {
        type: `Heads`, prefecture: `Ehime`, key: `ehime-tai-somen`, language: `ja`, name: `鯛素麺`, description: `瀬戸内海や豊後水道沿岸地域に広く伝わる郷土料理。
一尾を丸ごと料理した鯛と素麺とを大皿へと盛りつけた料理である。
日本では鯛、素麺ともに縁起物とされることが多く、その両者を用いたこの料理も縁起物の料理として、結婚式や棟上げ式、年祝いなどでよく食されていた。`, author: 'hamachan'
    }, {
        type: `Heads`, prefecture: `Ehime`, key: `ehime-tai-somen`, language: `en`, name: `Sea bream somen noodles`, description: `This is a local dish widely spread in the Seto Inland Sea and Bungo Channel coastal areas.
It is a dish consisting of a whole sea bream and somen noodles served on a platter.
In Japan, both sea bream and somen are often considered lucky charms, and this dish using both was often served at weddings, building ceremonies, and New Year's celebrations as a good-luck dish.`, author: 'hamachan'
    },
    {
        type: `Heads`, prefecture: `Ehime`, key: `ehime-taimeshi`, language: `ja`, name: `鯛めし`, description: `鯛と飯を組み合わせた日本料理の一つである。
鯛を一尾まるごと飯に炊き込んで作ったものを指す。鯛は臭みを取り香ばしさを出すために予め焼かれ、米飯の味付けには醤油、塩、酒、みりん、昆布出汁などが用いられる。炊飯には土鍋が使われることも多い。炊き上がったら骨を外し、身をほぐして取り分ける。薬味には木の芽や針生姜などをあしらう。湯茶をかけて鯛茶漬けとしても美味である。`, author: 'hamachan'
    }, {
        type: `Heads`, prefecture: `Ehime`, key: `ehime-taimeshi`, language: `en`, name: `Sea bream rice`, description: `It is a Japanese dish that combines sea bream and rice.
It is made by cooking a whole sea bream in rice. The sea bream is grilled in advance to remove the smell and to make it aromatic, and the rice is seasoned with soy sauce, salt, sake, mirin, kombu dashi (kelp soup stock), etc. Earthenware pots are often used to cook the rice. After cooking, the fish is deboned and the meat is broken up and removed from the fish. For condiments, sprouts and ginger are used. It is also delicious as tai chazuke (sea bream stew) with hot tea.`, author: 'hamachan'
    },
    {
        type: `Heads`, prefecture: `Ehime`, key: `head-38-ehime`, language: `ja`, name: `愛媛県`, description: `四国地方の北西側に位置し、瀬戸内海や宇和海に面している。 また西日本最高峰の石鎚山や日本三大カルストの四国カルスト高原もあり、海と山両面の自然景観に恵まれた地形をしている。
愛媛という県名は日本の国土創世譚である国生み神話に由来すると言われている。`, author: 'nanatsuba'
    }, {
        type: `Heads`, prefecture: `Ehime`, key: `head-38-ehime`, language: `en`, name: `Ehime Prefecture`, description: `Located on the northwestern side of the Shikoku region, it faces the Seto Inland Sea and the Uwakai Sea.
It is also home to Mt. Ishizuchi, the highest mountain in western Japan, and the Shikoku Karst Plateau, one of the three major karsts in Japan, and is blessed with natural scenery from both the sea and mountains.
The name Ehime is said to derive from the myth of the birth of the nation, a tale of the creation of Japan.`, author: 'nanatsuba'
    },
    {
        type: `Heads`, prefecture: `Kochi`, key: `head-39-kochi`, language: `ja`, name: `高知県`, description: `日本の四国地方に位置する県。県庁所在地は高知市。
令制国では土佐国に当たり、県庁所在地の高知市の大半は土佐国の土佐郡に属していた。日本最後の清流といわれる四万十川など四国山地に源を発する清流が多く流れる。`, author: 'hamachan'
    }, {
        type: `Heads`, prefecture: `Kochi`, key: `head-39-kochi`, language: `en`, name: `Kochi Prefecture`, description: `Kochi is a prefecture located in the Shikoku region of Japan. The prefectural capital is Kochi City.
The majority of Kochi City, the prefectural capital, belonged to Tosa County in Tosa Province. The Shimanto River, said to be the last clear stream in Japan, and many other clear streams originate in the Shikoku Mountains.`, author: 'hamachan'
    },
    { type: `Heads`, prefecture: `Kochi`, key: `kochi-bonito`, language: `ja`, name: `カツオのたたき`, description: `鰹のタタキは刺身の一種で、高知県発のカツオを用いた料理。鰹を節に切り、表面のみをあぶったのち冷やして切り、薬味とタレをかけて食べるもので、別名「土佐造り」とも言う。`, author: 'hamachan' }, { type: `Heads`, prefecture: `Kochi`, key: `kochi-bonito`, language: `en`, name: `Seared bonito`, description: `Bonito tataki is a type of sashimi, a dish using bonito that originated in Kochi Prefecture. It is also known as 'Tosa-zukuri.' It is made by cutting bonito into knots, frying only the surface, cooling and cutting it, and serving it with condiments and sauce.`, author: 'hamachan' },
    { type: `Heads`, prefecture: `Fukuoka`, key: `fukuoka-mojiko`, language: `ja`, name: `門司港`, description: `北九州市門司区の門司港駅を中心とした地域。観光地としても有名で、海沿いの倉庫群や歴史的建造物など、古い港町の雰囲気を感じることができる地区である。`, author: 'hamachan' }, { type: `Heads`, prefecture: `Fukuoka`, key: `fukuoka-mojiko`, language: `en`, name: `Moji-port`, description: `The area centered around Mojiko Station in Mojikou, Kitakyushu City. Famous as a tourist destination, the district offers the atmosphere of an old port town with its warehouses and historical buildings along the sea.`, author: 'hamachan' },
    { type: `Heads`, prefecture: `Fukuoka`, key: `fukuoka-tenmangu`, language: `ja`, name: `太宰府天満宮`, description: `福岡県太宰府市にある神社。菅原道真を祭神として祀る天満宮の一つ。`, author: 'hamachan' }, { type: `Heads`, prefecture: `Fukuoka`, key: `fukuoka-tenmangu`, language: `en`, name: `Dazaifu Tenmangu Shrine`, description: `A shrine located in Saifu, Dazaifu City, Fukuoka Prefecture. It is one of the Tenmangu shrines dedicated to Sugawara no Michizane.`, author: 'hamachan' },
    { type: `Heads`, prefecture: `Fukuoka`, key: `head-40-fukuoka`, language: `ja`, name: `福岡県`, description: `九州地方北部に位置し、九州地方の県では最も人口が多い。県庁所在地の福岡市は、九州地方最大の人口を擁する都市であり、西日本においても大阪市に次ぐ人口を擁する都市である。`, author: 'hamachan' }, { type: `Heads`, prefecture: `Fukuoka`, key: `head-40-fukuoka`, language: `en`, name: `Fukuoka Prefecture`, description: `Located in the northern part of the Kyushu region, Fukuoka is the most populous prefecture in Kyushu. Fukuoka City, the prefectural capital, has the largest population in the Kyushu region and is the second most populous city in western Japan after Osaka City.`, author: 'hamachan' },
    { type: `Heads`, prefecture: `Saga`, key: `head-41-saga`, language: `ja`, name: `佐賀県`, description: `日本の九州地方に位置する県。県庁所在地は佐賀市。九州地方の中では最も面積、経済規模が小さい県であり、人口は隣接する福岡県の2割以下であり、福岡市の半分程度に過ぎない。お茶や唐津・伊万里・有田などの古くからの陶磁器の産地として有名。`, author: 'hamachan' }, { type: `Heads`, prefecture: `Saga`, key: `head-41-saga`, language: `en`, name: `Saga Prefecture`, description: `A prefecture located in the Kyushu region of Japan. The prefectural capital is Saga City. It is the smallest prefecture in Kyushu in terms of area and economic scale, with a population less than 20% of that of neighboring Fukuoka Prefecture and only half that of Fukuoka City. It is famous for its tea ceremony and its ancient ceramics such as Karatsu, Imari, and Arita.`, author: 'hamachan' },
    {
        type: `Heads`, prefecture: `Saga`, key: `saga-mudskipper-fiddlercrab`, language: `ja`, name: `ムツゴロウ・シオマネキ`, description: `ムツゴロウは、魚の一種。潮が引いた干潟の上で生活する魚として知られ、有明海・八代海を含む東アジアに分布する。有明海沿岸ではムツ、ホンムツなどと呼ばれる。
シオマネキは、カニの総称。オスの片方の鋏脚（はさみ）が大きくなることで知られる分類群である。オスのダンス（ウェービング）は大きなはさみを体の前の方から上にあげて振り下ろし、この動きが、まるで満ち潮を招いているように見えたことから、シオマネキという名前がついた。`, author: 'hamachan'
    }, {
        type: `Heads`, prefecture: `Saga`, key: `saga-mudskipper-fiddlercrab`, language: `en`, name: `mudskipper・fiddler crab`, description: `The mussel is a type of fish. Known as a fish that lives on tidal flats, it is distributed in East Asia, including the Ariake Sea and the Yatsushiro Sea. In the Ariake Sea coast, it is called mutsus or honmutsu.
Shionoki is the generic name for the crab. It is a taxon known for the enlargement of one of the male's scissor legs (scissors). The male's dance (webbing) consists of raising and lowering the large scissors from the front of the body, and this movement looks as if it is inviting the incoming tide, hence the name shiomaneki.`, author: 'hamachan'
    },
    {
        type: `Heads`, prefecture: `Saga`, key: `saga-yoshinogari`, language: `ja`, name: `吉野ヶ里遺跡`, description: `佐賀県神埼郡吉野ヶ里町と神埼市にまたがる吉野ヶ里丘陵にある遺跡。国の特別史跡に指定されている。およそ117ヘクタールにわたって残る弥生時代の大規模な環濠集落跡で知られる。1986年からの発掘調査によって発見された。
`, author: 'hamachan'
    }, { type: `Heads`, prefecture: `Saga`, key: `saga-yoshinogari`, language: `en`, name: `Yoshinogari ruins`, description: `The ruins are located on Yoshinogari Hill, which straddles the Yoshinogari-cho and Kanzaki-shi areas of Kanzaki-gun, Saga Prefecture. It is designated as a Special Historic Site of Japan. It is known for its large moat encircling settlements of the Yayoi period, which cover approximately 117 hectares, and were discovered during excavations that began in 1986.`, author: 'hamachan' },
    { type: `Heads`, prefecture: `Nagasaki`, key: `head-42-nagasaki`, language: `ja`, name: `長崎県`, description: `日本の九州地方に位置する県。県庁所在地は長崎市。五島列島、壱岐島、対馬など数多くの島嶼を含み、47都道府県中最も島が多いことで知られる。また、多島であるうえにリアス式海岸を多く擁することから海岸線の長さは47都道府県中第2位となっている。`, author: 'hamachan' }, { type: `Heads`, prefecture: `Nagasaki`, key: `head-42-nagasaki`, language: `en`, name: `Nagasaki Prefecture`, description: `A prefecture located in the Kyushu region of Japan. The prefectural capital is Nagasaki City. It is known for having the largest number of islands among the 47 prefectures in Japan, including the Goto Islands, Iki Island, Tsushima Island, and many others. The length of the coastline is the second longest among the 47 prefectures, due to the large number of islands and the rias coastline.`, author: 'hamachan' },
    {
        type: `Heads`, prefecture: `Nagasaki`, key: `nagasaki-champon`, language: `ja`, name: `長崎ちゃんぽん`, description: `全国的に知られる長崎名物の麺料理。1899（明治32）年、中華料理店『四海樓（しかいろう）』の店主・陳平順（ちんへいじゅん）氏が中国人留学生に安くて栄養があるものを食べさせようと、鍋で野菜や肉の切れ端などを炒め、そこに中華麺を入れて濃いめのスープで煮こんだボリュームたっぷりの料理を作ったのがはじまりとされている。
ちゃんぽんという名称は、中国語の簡単なご飯という意味の「喰飯（シャンポン）」がなまったものが由来という説と、ポルトガル語の混ぜる・混合するという意味の「ちゃんぽん」がなまったものが由来という説など、さまざまある。`, author: 'hamachan'
    }, {
        type: `Heads`, prefecture: `Nagasaki`, key: `nagasaki-champon`, language: `en`, name: `Nagasaki Champon`, description: `Nagasaki's famous noodle dish is well known throughout the country.
It is said that it began in 1899 when Chen Heijun, owner of the Chinese restaurant Shikairou, stir-fried vegetables and meat scraps in a pot, added Chinese noodles, and simmered them in a thick broth to provide Chinese students with a cheap and nutritious meal. The name 'chanpon' is said to have originated from the Chinese word 'chanpon.
There are various theories as to the origin of the name 'chanpon,' which is a corruption of the Chinese word 'shanpon,' meaning 'simple rice,' and the Portuguese word 'chanpon,' meaning 'to mix,' or 'to mix.`, author: 'hamachan'
    },
    { type: `Heads`, prefecture: `Nagasaki`, key: `nagasaki-meganebashi`, language: `ja`, name: `眼鏡橋`, description: `長崎市の中島川に架かる石造二連アーチ橋である。架橋時、琉球王国だった天女橋を除くと、日本初の石造りアーチ橋である。1960年に国の重要文化財に指定された。橋の長さは22メートル、幅3.65メートル、川面までの高さは5.46メートル。2つの半円を描くアーチ形式の石橋で、水面に映しだされた姿が眼鏡のように見えるところからこの名がある。`, author: 'hamachan' }, { type: `Heads`, prefecture: `Nagasaki`, key: `nagasaki-meganebashi`, language: `en`, name: `Meganebashi`, description: `It is a stone double-arch bridge over the Nakajima River in Nagasaki City. It was designated a National Important Cultural Property in 1960. The bridge is 22 meters long, 3.65 meters wide, and 5.46 meters high above the river, named for its two semicircular arched stone bridges that look like glasses when reflected on the water.`, author: 'hamachan' },
    { type: `Heads`, prefecture: `Nagasaki`, key: `nagasaki-saseboburger`, language: `ja`, name: `佐世保バーガー`, description: `長崎県佐世保市名物の手作りハンバーガーの総称。いわゆるご当地グルメの一種。ひとつの決まったスタイルのハンバーガーを指していうのでなく、佐世保市内の店で提供される「手作りで」「注文に応じて作り始める（作り置きをしない）」ハンバーガーの総称である。`, author: 'hamachan' }, { type: `Heads`, prefecture: `Nagasaki`, key: `nagasaki-saseboburger`, language: `en`, name: `Sasebo Burger`, description: `A generic name for handmade hamburgers, a specialty of Sasebo City, Nagasaki Prefecture. It is a kind of local gourmet food. It does not refer to a single style of hamburger, but rather a generic term for hamburgers that are 'handmade' and 'made to order' (not made to order) served at restaurants in Sasebo City.`, author: 'hamachan' },
    { type: `Heads`, prefecture: `Kumamoto`, key: `head-43-kumamoto`, language: `ja`, name: `熊本県`, description: `九州本島の中央部に位置し、福岡、大分、宮崎、鹿児島の各県と境を接する。海上で有明海を隔て長崎県とも接する。東部の阿蘇地方に日本第2位の阿蘇カルデラを持つ阿蘇山や九州山地の山々が聳え、西部は熊本平野が有明海に、八代平野および芦北地方のリアス式海岸が不知火海に面する。その間に宇土半島が突き出し天草諸島に続いている。中心都市である熊本市は、市域の70万人超の人口を支える水道水が全て地下水でまかなわれている世界でも稀有な都市である。`, author: 'hamachan' }, { type: `Heads`, prefecture: `Kumamoto`, key: `head-43-kumamoto`, language: `en`, name: `Kumamoto Prefecture`, description: `Located in the center of the main island of Kyushu, it borders Fukuoka, Oita, Miyazaki, and Kagoshima prefectures. It also borders Nagasaki Prefecture across the Ariake Sea. In the western part, the Kumamoto Plain faces the Ariake Sea, while the Yatsushiro Plain and the rias coast of the Ashikita region faces the Shiranui Sea. Between them, the Udo Peninsula juts out and continues to the Amakusa Islands. Kumamoto City, the center of the city, is one of the few cities in the world where the entire water supply for the city's population of over 700,000 is supplied by groundwater.`, author: 'hamachan' },
    { type: `Heads`, prefecture: `Kumamoto`, key: `kumamoto-karashirenkon`, language: `ja`, name: `辛子蓮根`, description: `蓮根の穴に辛子味噌を詰め込み、黄色い衣を付けて油で揚げた熊本県の郷土料理である。`, author: 'hamachan' }, { type: `Heads`, prefecture: `Kumamoto`, key: `kumamoto-karashirenkon`, language: `en`, name: `mustard lotus root`, description: `It is a local dish of Kumamoto Prefecture, where lotus root holes are stuffed with spicy miso paste, coated with yellow batter, and deep-fried in oil.`, author: 'hamachan' },
    { type: `Heads`, prefecture: `Kumamoto`, key: `kumamoto-kumamotocastle`, language: `ja`, name: `熊本城`, description: `現在の熊本県熊本市中央区に築かれた安土桃山時代から江戸時代の日本の城。別名「銀杏城（ぎんなんじょう）」。`, author: 'hamachan' }, { type: `Heads`, prefecture: `Kumamoto`, key: `kumamoto-kumamotocastle`, language: `en`, name: `Kumamoto Castle`, description: `A Japanese castle from the Azuchi-Momoyama period to the Edo period, built in present-day Chuo Ward, Kumamoto City, Kumamoto Prefecture. Also known as 'Ginnajo (Ginnan Castle).`, author: 'hamachan' },
    {
        type: `Heads`, prefecture: `Oita`, key: `head-44-oita`, language: `ja`, name: `大分県`, description: `大分県（おおいたけん）は、日本の九州地方に位置する県。県庁所在地は大分市。
全国的に知名度が高い別府温泉や由布院温泉をはじめとする多くの温泉を有し、源泉数、湧出量ともに日本一であり 、「日本一のおんせん県おおいた」をキャッチフレーズに温泉をアピールしている。`, author: 'hamachan'
    }, {
        type: `Heads`, prefecture: `Oita`, key: `head-44-oita`, language: `en`, name: `Oita Prefecture`, description: `Oita Prefecture is located in the Kyushu region of Japan. The prefectural capital is Oita City.
The prefecture has many hot springs, including the nationally known Beppu Onsen and Yufuin Onsen, and has the largest number of hot springs and the largest amount of hot spring water in Japan.`, author: 'hamachan'
    },
    { type: `Heads`, prefecture: `Oita`, key: `oita-beppujigoku`, language: `ja`, name: `別府地獄めぐり`, description: `大分県別府市の別府温泉に多数存在する様々な奇観を呈する自然湧出の源泉「地獄」を、定期観光バスなどで周遊する定番の観光コースである。また、これらの地獄の総称としても使われる。`, author: 'hamachan' }, { type: `Heads`, prefecture: `Oita`, key: `oita-beppujigoku`, language: `en`, name: `Beppu hell tour`, description: `This is a standard sightseeing course that takes regular sightseeing buses around Beppu City, Oita Prefecture, to the many naturally gushing 'hells' that exist in Beppu Onsen and present a variety of strange and bizarre sights. It is also used as a generic name for these hells.`, author: 'hamachan' },
    { type: `Heads`, prefecture: `Oita`, key: `oita-usajingu`, language: `ja`, name: `宇佐神宮`, description: `宇佐神宮（うさじんぐう）は、大分県宇佐市にある神社。全国に約44,000社ある八幡宮の総本社である。日本三大八幡宮の一つ。通称として宇佐八幡とも呼ばれる。`, author: 'hamachan' }, { type: `Heads`, prefecture: `Oita`, key: `oita-usajingu`, language: `en`, name: `Usa Shrine`, description: `Usa Jingu (Usa Shrine) is a Shinto shrine located in Usa City, Oita Prefecture. It is the headquarters of about 44,000 Hachimangu shrines in Japan. It is one of the three largest Hachimangu shrines in Japan. It is also commonly called Usa Hachiman.`, author: 'hamachan' },
    {
        type: `Heads`, prefecture: `Miyazaki`, key: `head-45-miyazaki`, language: `ja`, name: `宮崎県`, description: `日本の九州地方に位置する県。県庁所在地は宮崎市。
ビーチや海辺のドライブで知られています。海水浴で人気がある青島海水浴場は、弥生橋によって小さな青島と結ばれており、青島を取り巻く波状の岩は「鬼の洗濯板」と呼ばれています。太平洋岸の有名なサーフスポットには、日向、木崎浜、白浜などがあります。`, author: 'hamachan'
    }, {
        type: `Heads`, prefecture: `Miyazaki`, key: `head-45-miyazaki`, language: `en`, name: `Miyazaki Prefecture`, description: `Miyazaki Prefecture is located in the Kyushu region of Japan. The prefectural capital is Miyazaki City.
It is known for its beaches and seaside drives. Aoshima Beach, popular for swimming, is connected to the smaller Aoshima by Yayoi Bridge, and the wavy rocks surrounding Aoshima are known as the 'devil's washboard. Famous surfing spots on the Pacific coast include Hyuga, Kisakihama, and Shirahama.`, author: 'hamachan'
    },
    { type: `Heads`, prefecture: `Miyazaki`, key: `miyazaki-aoshima`, language: `ja`, name: `青島海岸`, description: `宮崎を代表する海水浴場のひとつ「青島海水浴場」を含む海岸で、弥生橋により青島とつながっています。近くには、観光地としても有名な青島神社などもあり、宿泊施設も多い。海水浴場百選にも選ばれている。`, author: 'hamachan' }, { type: `Heads`, prefecture: `Miyazaki`, key: `miyazaki-aoshima`, language: `en`, name: `Aoshima coast`, description: `This beach includes Aoshima Beach, one of Miyazaki's representative beaches, and is connected to Aoshima by Yayoi Bridge. Nearby are Aoshima Shrine, a famous tourist attraction, and many lodging facilities. It has been selected as one of the 100 best beaches.`, author: 'hamachan' },
    { type: `Heads`, prefecture: `Miyazaki`, key: `miyazaki-chickennanban`, language: `ja`, name: `チキン南蛮`, description: `小麦粉と溶き卵を絡めた鶏肉を油で揚げ、甘酢に浸した宮崎県延岡市発祥の日本の鶏肉料理。タルタルソースを掛けて提供されることも多い。`, author: 'hamachan' }, {
        type: `Heads`, prefecture: `Miyazaki`, key: `miyazaki-chickennanban`, language: `en`, name: `chicken nanban
`, description: `A Japanese chicken dish originating from Nobeoka City, Miyazaki Prefecture, in which chicken is tossed in flour and beaten egg, deep-fried, and dipped in sweet vinegar. It is often served with tartar sauce.`, author: 'hamachan'
    },
    {
        type: `Heads`, prefecture: `Kagoshima`, key: `head-46-kagoshima`, language: `ja`, name: `鹿児島県`, description: `日本の九州地方に位置する県。県庁所在地は鹿児島市。
九州島の南側には離島（薩南諸島）が点在する。九州島の部分は県本土と表現され、2つの半島（薩摩半島・大隅半島）を有する。
霧島山、桜島、種子島宇宙センター、世界自然遺産の屋久島、奄美大島や徳之島などがあり、自然・文化・観光・産業などの面において、豊富な資源を有している。`, author: 'hamachan'
    }, {
        type: `Heads`, prefecture: `Kagoshima`, key: `head-46-kagoshima`, language: `en`, name: `Kagoshima Prefecture`, description: `A prefecture located in the Kyushu region of Japan. The prefectural capital is Kagoshima City.
The southern part of Kyushu Island is dotted with outlying islands (Satsunan Islands). The Kyushu Island part is described as the mainland of the prefecture and has two peninsulas (Satsuma Peninsula and Osumi Peninsula).
Kirishima Mountain, Sakurajima, Tanegashima Space Center, Yakushima Island (a World Natural Heritage site), Amami-Oshima and Tokuno-shima, etc. The prefecture has abundant resources in terms of nature, culture, tourism, and industry.`, author: 'hamachan'
    },
    {
        type: `Heads`, prefecture: `Kagoshima`, key: `kagoshima-goromon`, language: `ja`, name: `御楼門`, description: `鹿児島城は、現在の鹿児島県鹿児島市に築かれた江戸時代の日本の城である。鹿児島では一般的に古くから別名の鶴丸城で呼ばれている。
居館の正面中央に、威風堂々たる「御楼門」があります。御楼門は、1873 年の火災で焼失しましたが、2020年に日本最大の城門として復元されました。`, author: 'hamachan'
    }, {
        type: `Heads`, prefecture: `Kagoshima`, key: `kagoshima-goromon`, language: `en`, name: `Goroumon`, description: `Kagoshima Castle was a Japanese castle built in present-day Kagoshima City, Kagoshima Prefecture, during the Edo period. In Kagoshima, it has generally been known by its old alias, Tsurumaru Castle.
In the center of the front of the residence is the majestic Goromon Gate. The Goromon was destroyed by fire in 1873, but was restored in 2020 as the largest castle gate in Japan.`, author: 'hamachan'
    },
    {
        type: `Heads`, prefecture: `Kagoshima`, key: `kagoshima-shirokuma`, language: `ja`, name: `白熊`, description: `鹿児島県鹿児島市発祥の氷菓またはアイスクリーム類。
削りたてのかき氷の上に加糖練乳をかけて缶詰などの果物を盛り付け、その上に小豆餡を載せたものである。`, author: 'hamachan'
    }, {
        type: `Heads`, prefecture: `Kagoshima`, key: `kagoshima-shirokuma`, language: `en`, name: `Shirokuma`, description: `An ice cream or ice cream product that originated in Kagoshima City, Kagoshima Prefecture.
It is made by pouring sweetened condensed milk over freshly shaved ice and serving it with canned fruit and azuki bean paste on top.`, author: 'hamachan'
    },
    {
        type: `Heads`, prefecture: `Okinawa`, key: `head-47-okinawa`, language: `ja`, name: `沖縄県`, description: `日本の九州地方に位置する県。県庁所在地は那覇市。
県民人口の約9割が沖縄本島に集中しており、那覇市中心部は三大都市圏に匹敵する人口密度がある。
ほぼ全域が亜熱帯気候であり、一部は熱帯に属する。年間を通して温暖な気候であり、最低気温が氷点下以下になる事はほとんどない。
日本では数少ない南の島であるため、日本屈指のリゾート地である。`, author: 'hamachan'
    }, {
        type: `Heads`, prefecture: `Okinawa`, key: `head-47-okinawa`, language: `en`, name: `Okinawa Prefecture`, description: `A prefecture located in the Kyushu region of Japan. The prefectural capital is Naha City.
About 90% of the prefecture's population is concentrated on the main island of Okinawa, and the population density of the central area of Naha City is comparable to that of three major metropolitan areas.
Almost all of the prefecture has a subtropical climate, with a few areas in the tropics. The climate is temperate throughout the year, with minimum temperatures rarely falling below freezing.
As one of the few southern islands in Japan, it is one of the country's most popular resort destinations.`, author: 'hamachan'
    },
    { type: `Heads`, prefecture: `Okinawa`, key: `okinawa-goya-chanpuru`, language: `ja`, name: `ゴーヤチャンプル`, description: `チャンプルーとは沖縄方言で「混ぜこぜにしたもの」というような意味であり、野菜や豆腐に限らず、さまざまな材料を一緒にして炒め合わせる。ゴーヤー（ニガウリ）を使うときは「ゴーヤーチャンプルー」、マーミナー（もやし）を使うときは「マーミナーチャンプルー」と、使う食材の名前をつける。`, author: 'hamachan' }, { type: `Heads`, prefecture: `Okinawa`, key: `okinawa-goya-chanpuru`, language: `en`, name: `Bitter melon champuru`, description: `Chanpuru means 'mixed together' in the Okinawan dialect, and is not limited to vegetables and tofu, but includes a variety of ingredients that are stir-fried together. When using bitter gourd (bitter gourd), it is called 'Goya Chanpuru,' and when using bean sprouts (maminer), it is called 'Maminer Chanpuru,' and so on, giving names to the ingredients used.`, author: 'hamachan' },
    { type: `Heads`, prefecture: `Okinawa`, key: `okinawa-shuricastle`, language: `ja`, name: `首里城`, description: `現在の沖縄県那覇市にあり、かつて海外貿易の拠点だった那覇港を見下ろす丘陵地にあったグスク（御城）の城趾である。戦前の柱や壁は灰色や褐色であったが、第二次世界大戦中に消失した。1992年に柱・壁・瓦も朱色とするデザインで再建し、瓦についても1945年の消失以前の首里城建物は灰色だけ、または赤も灰色瓦の中に混在していたが赤瓦のみで再建された。しかし、2019年10月31日に首里城正殿など主要7棟が延長コード由来の火災で消失した。現在は「首里城公園」として都市公園になっている。2019年の首里城の焼失は、1453年、1660年、1709年、1945年に次ぐ歴史上5度目となった。`, author: 'hamachan' }, { type: `Heads`, prefecture: `Okinawa`, key: `okinawa-shuricastle`, language: `en`, name: `Shuri Castle`, description: `Located in present-day Naha City, Okinawa Prefecture, it is the site of a gusuku (castle) on a hill overlooking the port of Naha, once a hub of overseas trade. The prewar pillars and walls were gray or brown, but were lost during World War II, and were rebuilt in 1992 with a design in which the pillars, walls, and roof tiles were also vermilion, and the roof tiles were rebuilt using only red tiles, although the Shuri Castle buildings before the 1945 loss were either gray only or red mixed in with the gray tiles. However, on October 31, 2019, seven main buildings, including the Shuri Castle main hall, were lost in a fire originating from an extension cordon. Now an urban park as 'Shurijo Park,' the 2019 fire marked the fifth time in history that Shuri Castle was destroyed by fire, following 1453, 1660, 1709, and 1945.`, author: 'hamachan' },
    { type: `Heads`, prefecture: `Okinawa`, key: `okinawa-siisa`, language: `ja`, name: `シーサー`, description: `沖縄県などでみられる伝説の獣像。魔除けの意味を持ち、屋根の上に設置されることが多いとされている。`, author: 'hamachan' }, { type: `Heads`, prefecture: `Okinawa`, key: `okinawa-siisa`, language: `en`, name: `shisa`, description: `Legendary beast statues found in Okinawa and other prefectures. It is believed to ward off evil and is often placed on roofs.`, author: 'hamachan' },
];
