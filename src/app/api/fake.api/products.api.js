const logo =
  "https://static.tildacdn.com/tild3566-3365-4131-b066-333863373532/image.png";
const products = [
  {
    _id: "1",
    name: "Палочки для Ароматического диффузора",
    category: "Ароматические диффузоры",
    cat: "dif",
    subcategory: "",
    description: "Сменные палочки для диффузора из фибры.",
    price: 150,
    totalPrice: 150,
    quantity: 1,
    photo: "https://ae01.alicdn.com/kf/S699b972435ea40848974b6842687ec52I.jpg",
    bookmark: false,
    shoppingСart: true,
  },
  {
    _id: "2",
    name: "АГАВА И ХРИЗАНТЕМА",
    category: "Ароматические свечи",
    cat: "candle",
    subcategory: "Новинки",
    description:
      "Этот аромат состоит из зеленых листьев агавы срезанного алоэ и лепестков хризантемы, с базовыми нотами пачули.",
    price: 600,
    totalPrice: 600,
    quantity: 1,
    photo:
      "https://cdn.leroymerlin.ru/lmru/image/upload/v1634707465/b_white,c_pad,d_photoiscoming.png,f_auto,h_600,q_auto,w_600/lmcode/Zg5-se-46EKTcDyA9ypGgg/89090944_01.jpg",
    bookmark: false,
    shoppingСart: true,
  },
  {
    _id: "3",
    name: "АПЕЛЬСИН И ПЕРЕЦ",
    category: "Ароматические свечи",
    cat: "candle",
    subcategory: "Акции",
    description:
      "В этом пряном цитрусовом аромате сочетаются цедра апельсина, мандарин и черный перец. Бобы тонка и немного ванили в основании сглаживают яркие апельсиновые ноты. А дополнено это все нотами гвоздики, корицы и яблока.",
    price: 600,
    totalPrice: 600,
    quantity: 1,
    photo:
      "https://cdn.leroymerlin.ru/lmru/image/upload/v1634707465/b_white,c_pad,d_photoiscoming.png,f_auto,h_600,q_auto,w_600/lmcode/Zg5-se-46EKTcDyA9ypGgg/89090944_01.jpg",
    bookmark: true,
    shoppingСart: false,
  },
  {
    _id: "4",
    name: "БАНАНОВЫЙ ХЛЕБ С ОРЕХАМИ",
    category: "Ароматические свечи",
    cat: "candle",
    subcategory: "Хиты",
    description:
      "Это теплый аромат бисквитной выпечки, дополненный ореховыми нотами и бананом. Аромат в меру сладкий и такой аппетитный.",
    price: 600,
    totalPrice: 600,
    quantity: 1,
    photo:
      "https://cdn.leroymerlin.ru/lmru/image/upload/v1634707465/b_white,c_pad,d_photoiscoming.png,f_auto,h_600,q_auto,w_600/lmcode/Zg5-se-46EKTcDyA9ypGgg/89090944_01.jpg",
    bookmark: false,
    shoppingСart: false,
  },
  {
    _id: "5",
    name: "БЕЛАЯ СМОРОДИНА И МЯТА",
    category: "Ароматические свечи",
    cat: "candle",
    subcategory: "",
    description:
      "Это универсальный свежий аромат. Отлично впишется в любое пространство и наполнит его кисло-сладким балансом ягод с цитрусами и свежей мятой.",
    price: 600,
    totalPrice: 600,
    quantity: 1,
    photo:
      "https://cdn.leroymerlin.ru/lmru/image/upload/v1634707465/b_white,c_pad,d_photoiscoming.png,f_auto,h_600,q_auto,w_600/lmcode/Zg5-se-46EKTcDyA9ypGgg/89090944_01.jpg",
    bookmark: true,
    shoppingСart: false,
  },
  {
    _id: "6",
    name: "ВИШНЯ И ЧЕРЕШНЯ",
    category: "Ароматические диффузоры",
    cat: "dif",
    subcategory: "Новинки",
    description:
      "Утонченный аромат классической вишни, дополненный ягодами черешни, черной смородины и винограда сорта 'Мерло' , который подчеркивают ноты дуба, амбры и ванили.",
    price: 700,
    totalPrice: 700,
    quantity: 1,
    photo:
      "https://avatars.mds.yandex.net/get-mpic/3927509/img_id5560785999008734444.jpeg/orig",
    bookmark: false,
    shoppingСart: false,
  },
  {
    _id: "7",
    name: "ГРАНАТ И СМОРОДИНА",
    category: "Ароматические диффузоры",
    cat: "dif",
    subcategory: "Акции",
    description:
      "Стильный ароматический диффузор в темном флаконе прекрасно впишется в любой интерьер и наполнит Ваше помещение удивительными ароматами.",
    price: 700,
    totalPrice: 700,
    quantity: 1,
    photo:
      "https://avatars.mds.yandex.net/get-mpic/3927509/img_id5560785999008734444.jpeg/orig",
    bookmark: false,
    shoppingСart: false,
  },
  {
    _id: "8",
    name: "ИМБИРЬ И ГРЕЙПФРУТ",
    category: "Ароматические диффузоры",
    cat: "dif",
    subcategory: "Хиты",
    description:
      "Освежающий аромат грейпфрута и мандарина дополненный имбирем, древесными нотами и сливочной ванилью.",
    price: 700,
    totalPrice: 700,
    quantity: 1,
    photo:
      "https://avatars.mds.yandex.net/get-mpic/3927509/img_id5560785999008734444.jpeg/orig",
    bookmark: false,
    shoppingСart: false,
  },
  {
    _id: "9",
    name: "КЛЮКВА И СПЕЦИИ",
    category: "Ароматические диффузоры",
    cat: "dif",
    subcategory: "",
    description:
      "Это сочная смесь терпкой клюквы, пряных яблок и свежей калифорнийской апельсиновой цедры.",
    price: 700,
    totalPrice: 700,
    quantity: 1,
    photo:
      "https://avatars.mds.yandex.net/get-mpic/3927509/img_id5560785999008734444.jpeg/orig",
    bookmark: true,
    shoppingСart: false,
  },
  {
    _id: "10",
    name: "ВИШНЯ И ЧЕРЕШНЯ",
    category: "Автомобильные диффузоры",
    cat: "auto",
    subcategory: "Новинки",
    description:
      "Утонченный аромат классической вишни, дополненный ягодами черешни, черной смородины и винограда сорта 'Мерло' , который подчеркивают ноты дуба, амбры и ванили.",
    price: 700,
    totalPrice: 700,
    quantity: 1,
    photo: "https://basket-01.wb.ru/vol83/part8303/8303330/images/big/2.jpg",
    bookmark: false,
    shoppingСart: false,
  },
  {
    _id: "11",
    name: "ГРАНАТ И СМОРОДИНА",
    category: "Автомобильные диффузоры",
    cat: "auto",
    subcategory: "Акции",
    description:
      "Стильный ароматический диффузор в темном флаконе прекрасно впишется в любой интерьер и наполнит Ваше помещение удивительными ароматами.",
    price: 700,
    totalPrice: 700,
    quantity: 1,
    photo: "https://basket-01.wb.ru/vol83/part8303/8303330/images/big/2.jpg",
    bookmark: false,
    shoppingСart: false,
  },
  {
    _id: "12",
    name: "ИМБИРЬ И ГРЕЙПФРУТ",
    category: "Автомобильные диффузоры",
    cat: "auto",
    subcategory: "Хиты",
    description:
      "Освежающий аромат грейпфрута и мандарина дополненный имбирем, древесными нотами и сливочной ванилью.",
    price: 700,
    totalPrice: 700,
    quantity: 1,
    photo: "https://basket-01.wb.ru/vol83/part8303/8303330/images/big/2.jpg",
    bookmark: false,
    shoppingСart: true,
  },
  {
    _id: "13",
    name: "КЛЮКВА И СПЕЦИИ",
    category: "Автомобильные диффузоры",
    cat: "auto",
    subcategory: "",
    description:
      "Это сочная смесь терпкой клюквы, пряных яблок и свежей калифорнийской апельсиновой цедры.",
    price: 700,
    totalPrice: 700,
    quantity: 1,
    photo: "https://basket-01.wb.ru/vol83/part8303/8303330/images/big/2.jpg",
    bookmark: true,
    shoppingСart: false,
  },
];

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function() {
      resolve(products);
    }, 1000);
  });

const getById = (id) =>
  new Promise((resolve) => {
    window.setTimeout(function() {
      resolve(products.find((product) => product._id === id));
    }, 1000);
  });

export default {
  fetchAll,
  getById,
  logo,
};
