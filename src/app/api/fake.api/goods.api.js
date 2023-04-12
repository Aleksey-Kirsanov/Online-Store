const goods = [
  {
    _id: "1",
    name: "Палочки для Ароматического диффузора",
    category: "Ароматические диффузоры",
    subcategory: "",
    description: "Сменные палочки для диффузора из фибры.",
    price: 150,
    quantity: 30,
    photo: "https://ae01.alicdn.com/kf/S699b972435ea40848974b6842687ec52I.jpg",
  },
  {
    _id: "1",
    name: "АГАВА И ХРИЗАНТЕМА",
    category: "Свечи",
    subcategory: "Новинки",
    description:
      "Этот аромат состоит из зеленых листьев агавы срезанного алоэ и лепестков хризантемы, с базовыми нотами пачули.",
    price: 600,
    quantity: 25,
    photo:
      "https://cdn.leroymerlin.ru/lmru/image/upload/v1634707465/b_white,c_pad,d_photoiscoming.png,f_auto,h_600,q_auto,w_600/lmcode/Zg5-se-46EKTcDyA9ypGgg/89090944_01.jpg",
  },
  {
    _id: "1",
    name: "АПЕЛЬСИН И ПЕРЕЦ",
    category: "Cвечи",
    subcategory: "Акции",
    description:
      "В этом пряном цитрусовом аромате сочетаются цедра апельсина, мандарин и черный перец. Бобы тонка и немного ванили в основании сглаживают яркие апельсиновые ноты. А дополнено это все нотами гвоздики, корицы и яблока.",
    price: 600,
    quantity: 25,
    photo:
      "https://cdn.leroymerlin.ru/lmru/image/upload/v1634707465/b_white,c_pad,d_photoiscoming.png,f_auto,h_600,q_auto,w_600/lmcode/Zg5-se-46EKTcDyA9ypGgg/89090944_01.jpg",
  },
  {
    _id: "1",
    name: "БАНАНОВЫЙ ХЛЕБ С ОРЕХАМИ",
    category: "Cвечи",
    subcategory: "Хиты",
    description:
      "Это теплый аромат бисквитной выпечки, дополненный ореховыми нотами и бананом. Аромат в меру сладкий и такой аппетитный.",
    price: 600,
    quantity: 25,
    photo:
      "https://cdn.leroymerlin.ru/lmru/image/upload/v1634707465/b_white,c_pad,d_photoiscoming.png,f_auto,h_600,q_auto,w_600/lmcode/Zg5-se-46EKTcDyA9ypGgg/89090944_01.jpg",
  },
  {
    _id: "1",
    name: "БЕЛАЯ СМОРОДИНА И МЯТА",
    category: "Cвечи",
    subcategory: "",
    description:
      "Это универсальный свежий аромат. Отлично впишется в любое пространство и наполнит его кисло-сладким балансом ягод с цитрусами и свежей мятой.",
    price: 600,
    quantity: 25,
    photo:
      "https://cdn.leroymerlin.ru/lmru/image/upload/v1634707465/b_white,c_pad,d_photoiscoming.png,f_auto,h_600,q_auto,w_600/lmcode/Zg5-se-46EKTcDyA9ypGgg/89090944_01.jpg",
  },
  {
    _id: "1",
    name: "ВИШНЯ И ЧЕРЕШНЯ",
    category: "Ароматические диффузоры",
    subcategory: "Новинки",
    description:
      "Утонченный аромат классической вишни, дополненный ягодами черешни, черной смородины и винограда сорта 'Мерло' , который подчеркивают ноты дуба, амбры и ванили.",
    price: 700,
    quantity: 25,
    photo:
      "https://avatars.mds.yandex.net/get-mpic/3927509/img_id5560785999008734444.jpeg/orig",
  },
  {
    _id: "1",
    name: "ГРАНАТ И СМОРОДИНА",
    category: "Ароматические диффузоры",
    subcategory: "Акции",
    description:
      "Стильный ароматический диффузор в темном флаконе прекрасно впишется в любой интерьер и наполнит Ваше помещение удивительными ароматами.",
    price: 700,
    quantity: 25,
    photo:
      "https://avatars.mds.yandex.net/get-mpic/3927509/img_id5560785999008734444.jpeg/orig",
  },
  {
    _id: "1",
    name: "ИМБИРЬ И ГРЕЙПФРУТ",
    category: "Ароматические диффузоры",
    subcategory: "Хиты",
    description:
      "Освежающий аромат грейпфрута и мандарина дополненный имбирем, древесными нотами и сливочной ванилью.",
    price: 700,
    quantity: 25,
    photo:
      "https://avatars.mds.yandex.net/get-mpic/3927509/img_id5560785999008734444.jpeg/orig",
  },
  {
    _id: "1",
    name: "КЛЮКВА И СПЕЦИИ",
    category: "Ароматические диффузоры",
    subcategory: "",
    description:
      "Это сочная смесь терпкой клюквы, пряных яблок и свежей калифорнийской апельсиновой цедры.",
    price: 700,
    quantity: 25,
    photo:
      "https://avatars.mds.yandex.net/get-mpic/3927509/img_id5560785999008734444.jpeg/orig",
  },
  {
    _id: "1",
    name: "ВИШНЯ И ЧЕРЕШНЯ",
    category: "Автомобильные диффузоры",
    subcategory: "Новинки",
    description:
      "Утонченный аромат классической вишни, дополненный ягодами черешни, черной смородины и винограда сорта 'Мерло' , который подчеркивают ноты дуба, амбры и ванили.",
    price: 700,
    quantity: 25,
    photo: "https://basket-01.wb.ru/vol83/part8303/8303330/images/big/2.jpg",
  },
  {
    _id: "1",
    name: "ГРАНАТ И СМОРОДИНА",
    category: "Автомобильные диффузоры",
    subcategory: "Акции",
    description:
      "Стильный ароматический диффузор в темном флаконе прекрасно впишется в любой интерьер и наполнит Ваше помещение удивительными ароматами.",
    price: 700,
    quantity: 25,
    photo: "https://basket-01.wb.ru/vol83/part8303/8303330/images/big/2.jpg",
  },
  {
    _id: "1",
    name: "ИМБИРЬ И ГРЕЙПФРУТ",
    category: "Автомобильные диффузоры",
    subcategory: "Хиты",
    description:
      "Освежающий аромат грейпфрута и мандарина дополненный имбирем, древесными нотами и сливочной ванилью.",
    price: 700,
    quantity: 25,
    photo: "https://basket-01.wb.ru/vol83/part8303/8303330/images/big/2.jpg",
  },
  {
    _id: "1",
    name: "КЛЮКВА И СПЕЦИИ",
    category: "Автомобильные диффузоры",
    subcategory: "",
    description:
      "Это сочная смесь терпкой клюквы, пряных яблок и свежей калифорнийской апельсиновой цедры.",
    price: 700,
    quantity: 25,
    photo: "https://basket-01.wb.ru/vol83/part8303/8303330/images/big/2.jpg",
  },
];

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function() {
      resolve(users);
    }, 2000);
  });

const getById = (id) =>
  new Promise((resolve) => {
    window.setTimeout(function() {
      resolve(users.find((user) => user._id === id));
    }, 1000);
  });
export default {
  fetchAll,
  getById,
};
