import BirinchiTaomlar from "./foods-image/birinchi-taomlar";
import Shashlik from "./foods-image/shashlik";
import Salatlar from "./foods-image/salatlar";
import SamarqandOsh from "./foods-image/samarqand-osh";
import MilliyTaomlar from "./foods-image/milliy-taomlar";
import YevropaTaomlari from "./foods-image/yevropa-taomlari";
import Ichimliklar from "./foods-image/ichimliklar";
const { chuchvara, turkshorva, mastava, shorva, suplapsha, yashilkaram } =
  BirinchiTaomlar;
const {
  shashlik10,
  shashlik5,
  beshpanja,
  pamidorshashlik,
  shashlikmoloty,
  shashlikmolotycharvi,
  shashlikmolotykichkina,
  shashliknapaleon,
  shashlikrulet,
} = Shashlik;
const {
  baqlajon,
  gnezdogluxarya,
  guruziya,
  kapriz,
  tayskiy,
  tovuqbnsezan,
  vitaminlar,
  yangiyunsalat,
} = Salatlar;
const {
  achichuk,
  anzur,
  bahorsalat,
  marinat,
  salyonny,
  samarqandosh7,
  samarqandoshbutun,
  turp,
} = SamarqandOsh;
const {
  chaxoxbili,
  dolma,
  jizsamarqand,
  jizumakay,
  qozichoqq,
  qozichoqy,
  qozonkabob,
  vaguri,
} = MilliyTaomlar;
const {
  balonezapastasi,
  gabyadina,
  goshtsay,
  kolbaski,
  ziqorinligosht,
  sabzavotbnmedalyon,
  sachkabob,
  sachtova,
} = YevropaTaomlari;
const {
  ananaslisok1,
  chortoq,
  cola,
  pepsi,
  fanta,
  olchalisok1,
  olmalisok1,
  pamidorlisok1,
  sprite,
  suv,
} = Ichimliklar;

export const foods = [
  {
    id: 1,
    title: "Birinchi taomlar",
    link: "birinchi-taomlar",
    props: [
      {
        id: 1,
        title: "Chuchvara",
        price: "24150.00 so'm",
        url: chuchvara,
      },
      {
        id: 2,
        title: "Tovuq Sho'rva",
        price: "16100.00 so'm",
        url: suplapsha,
      },
      {
        id: 3,
        title: "Mastava",
        price: "27600.00 so'm",
        url: mastava,
      },
      {
        id: 4,
        title: "Sho'rva",
        price: "29900.00 so'm",
        url: shorva,
      },
      {
        id: 5,
        title: "Sup-Lapsha s Frikadelkami",
        price: "18400.00 so'm",
        url: suplapsha,
      },
      {
        id: 6,
        title: "Turkcha Sho'rva",
        price: "24150.00 so'm",
        url: turkshorva,
      },
      {
        id: 7,
        title: "Yashil Karom Sho'rva",
        price: "28750.00 so'm",
        url: yashilkaram,
      },
    ],
  },
  {
    id: 2,
    title: "Shashlik",
    link: "shashlik",
    props: [
      {
        id: 1,
        title: "Shashlik Assorti Katta 10 kishilik",
        price: "633650.00 so'm",
        url: shashlik10,
      },
      {
        id: 2,
        title: "Shashlik Assorti Kichkina 5 kishilik",
        price: "331200.00 so'm",
        url: shashlik5,
      },
      {
        id: 3,
        title: "Besh panja qo'zichoq",
        price: "95450.00 so'm",
        url: beshpanja,
      },
      {
        id: 4,
        title: "Pomidor Shashlik",
        price: "4600.00 so'm",
        url: pamidorshashlik,
      },
      {
        id: 5,
        title: "Shashlik Moloty",
        price: "40250.00 so'm",
        url: shashlikmoloty,
      },
      {
        id: 6,
        title: "Shashlik Moloty charvi",
        price: "56350.00 so'm",
        url: shashlikmolotycharvi,
      },
      {
        id: 7,
        title: "Shashlik Moloty kichkina",
        price: "25300.00 so'm",
        url: shashlikmolotykichkina,
      },
      {
        id: 8,
        title: "Shashlik Napoleon",
        price: "52900.00 so'm",
        url: shashliknapaleon,
      },
      {
        id: 7,
        title: "Shashlik Rulet",
        price: "54050.00 so'm",
        url: shashlikrulet,
      },
    ],
  },
  {
    id: 3,
    title: "Salatlar",
    link: "salatlar",
    props: [
      {
        id: 1,
        title: "Baqlajonlik",
        price: "23000.00 so'm",
        url: baqlajon,
      },
      {
        id: 2,
        title: "Gnezdo Gluxarya",
        price: "36800.00 so'm",
        url: gnezdogluxarya,
      },
      {
        id: 3,
        title: "Gruziya",
        price: "33350.00 so'm",
        url: guruziya,
      },
      {
        id: 4,
        title: "Kapriz",
        price: "75900.00 so'm",
        url: kapriz,
      },
      {
        id: 5,
        title: "Tayskiy",
        price: "40250.00 so'm",
        url: tayskiy,
      },
      {
        id: 6,
        title: "Tovuq bilan Sezar",
        price: "51750.00 so'm",
        url: tovuqbnsezan,
      },
      {
        id: 7,
        title: "Vitaminlar To'plami",
        price: "36800.00 so'm",
        url: vitaminlar,
      },
      {
        id: 8,
        title: "Yangi Yunoncha Salat",
        price: "58650.00 so'm",
        url: yangiyunsalat,
      },
    ],
  },
  {
    id: 4,
    title: "Samarqand Osh",
    link: "samarqand-osh",
    props: [
      {
        id: 1,
        title: "Samarqand Osh Butun",
        price: "42550.00 so'm",
        url: samarqandoshbutun,
      },
      {
        id: 2,
        title: "Samarqand Osh 0.7",
        price: "39100.00 so'm",
        url: samarqandosh7,
      },

      {
        id: 3,
        title: "Bahor Salat",
        price: "11500.00 so'm",
        url: bahorsalat,
      },
      {
        id: 4,
        title: "Marinat",
        price: "11500.00 so'm",
        url: marinat,
      },
      {
        id: 5,
        title: "Salyonny",
        price: "11500.00 so'm",
        url: salyonny,
      },
      {
        id: 6,
        title: "Turp Chakka",
        price: "11500.00 so'm",
        url: turp,
      },
      {
        id: 7,
        title: "Achichuk",
        price: "12650.00 so'm",
        url: achichuk,
      },
      {
        id: 8,
        title: "Anzur",
        price: "14950.00 so'm",
        url: anzur,
      },
    ],
  },
  {
    id: 5,
    title: "Milliy taomlar",
    link: "milliy-taomlar",
    props: [
      {
        id: 1,
        title: "Chaxoxbili",
        price: "81650.00 so'm",
        url: chaxoxbili,
      },
      {
        id: 2,
        title: "Dolma",
        price: "54050.00 so'm",
        url: dolma,
      },

      {
        id: 3,
        title: "Jiz Samarqand",
        price: "184000.00 so'm",
        url: jizsamarqand,
      },
      {
        id: 4,
        title: "Jiz Umakay",
        price: "78200.00 so'm",
        url: jizumakay,
      },
      {
        id: 5,
        title: "Qo'zichoq Qovurg'asi",
        price: "142600.00 so'm",
        url: qozichoqq,
      },
      {
        id: 6,
        title: "Qo'zichoq Yelkasi",
        price: "473800.00 so'm",
        url: qozichoqy,
      },
      {
        id: 7,
        title: "Qozon Kabob",
        price: "96600.00 so'm",
        url: qozonkabob,
      },
      {
        id: 8,
        title: "Vaguri",
        price: "133400.00 so'm",
        url: vaguri,
      },
    ],
  },
  {
    id: 6,
    title: "Yevropa taomlari",
    link: "yevropa-taomlari",
    props: [
      {
        id: 1,
        title: "Baloneza Pastasi",
        price: "58650.00 so'm",
        url: balonezapastasi,
      },
      {
        id: 2,
        title: "Govyadina po-domashnemu",
        price: "56350.00 so'm",
        url: gabyadina,
      },

      {
        id: 3,
        title: "Go'sht Say",
        price: "75900.00 so'm",
        url: goshtsay,
      },
      {
        id: 4,
        title: "Kolbaski",
        price: "92000.00 so'm",
        url: kolbaski,
      },
      {
        id: 5,
        title: "Qo'ziqorinli Go'sht",
        price: "89700.00 so'm",
        url: ziqorinligosht,
      },
      {
        id: 6,
        title: "Sabzavotlar bilan medalyon",
        price: "103500.00 so'm",
        url: sabzavotbnmedalyon,
      },
      {
        id: 7,
        title: "Sach Kabob",
        price: "108100.00 so'm",
        url: sachkabob,
      },
      {
        id: 8,
        title: "Sach Tava",
        price: "64400.00 so'm",
        url: sachtova,
      },
    ],
  },
  {
    id: 7,
    title: "Ichimliklar",
    link: "ichimliklar",
    props: [
      {
        id: 1,
        title: "Вода 1,5",
        price: "5350.00 so'm",
        url: suv,
      },
      {
        id: 2,
        title: "Спрайт 1.5",
        price: "20700.00 so'm",
        url: sprite,
      },
      {
        id: 3,
        title: "Фанта 1.5",
        price: "20700.00 so'm",
        url: fanta,
      },

      {
        id: 4,
        title: "Coca-Cola 1.5L",
        price: "20700.00 so'm",
        url: cola,
      },
      {
        id: 5,
        title: "Сок Яблоко 'Соч.долина' 1л",
        price: "20700.00 so'm",
        url: olmalisok1,
      },
      {
        id: 6,
        title: "Сок Вишня 'Соч.долина' 1л",
        price: "20700.00 so'm",
        url: olchalisok1,
      },
      {
        id: 7,
        title: "Сок Мулти 'Соч.долина' 1л",
        price: "20700.00 so'm",
        url: ananaslisok1,
      },
      {
        id: 8,
        title: "Сок Томат 'Соч.долина' 1л",
        price: "20700.00 so'm",
        url: pamidorlisok1,
      },
      {
        id: 9,
        title: "Чорток 0.5",
        price: "11500.00 so'm",
        url: chortoq,
      },
      {
        id: 10,
        title: "Pepsi 1.5L",
        price: " 20700.00 so'm",
        url: pepsi,
      },
    ],
  },
];
