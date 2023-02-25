"use strict";

function getProductsList() {
  return JSON.parse(productsData);
}

function getProductsObject() {
  return JSON.parse(productsData).reduce((acc, product) => {
    return { ...acc, [product.id]: product };
  }, {});
}


const productsData = `[
    {
       "id": "04a57766-c599-4366-8dc4-89ff1ccd3b14",
        "src": "img/Rectangle15.svg",
        "alt": "Мужик с бородой",
        "name": "Крутая куртка",
        "desc": "Очень модная куртка, покупаем, пока не распродали весь товар.",
        "price": "3700"
      },
      {
        "id": "61977551-efb2-4f6a-a6ea-da9c3b24798c",
        "src": "img/image51.svg",
        "alt": "Дама в костюме",
        "name": "Пиджак модный",
        "desc": "Непонятно что на картинке продается, пусть будет крутой пиджак.",
        "price": "5200"
      },
      {
        "id": "5bf21210-6463-49ae-a8c4-4a9ff10002bf",
        "src": "img/Rectangle_15.svg",
        "alt": "Парень в панаме",
        "name": "Толстовка",
        "desc": "Крутая, синяя толстовка от фирмы GB. Крутая, синяя толстовка от фирмы GB.",
        "price": "1500"
      },
      {
        "id": "4886ba5c-97d2-4ae4-bcff-b18a86e5cf37",
        "src": "img/Rectangle17.svg",
        "alt": "Борода",
        "name": "Крутая футболка",
        "desc": "Футболка на бородатом мужике, хочешь быть таким же бородатым - покупай!",
        "price": "4500"
      },
      {
        "id": "27bca31f-aac1-4f91-a309-c262046a3d23",
        "src": "img/Rectangle18.svg",
        "alt": "Дама в пиджаке",
        "name": "Пиджак",
        "desc": "Голубой пиджак, хочешь? А он скоро закончится! Голубой пиджак, хочешь? А он скоро закончится!",
        "price": "3400"
      },
      {
        "id": "f92016c2-5b27-441d-b2e7-b716e2ad63ea",
        "src": "img/Rectangle19.svg",
        "alt": "Мулатка",
        "name": "Рубашка женская",
        "desc": "Модная рубашка на модной девушке, а ты уже модная? Модная рубашка на модной девушке, а ты уже модная?",
        "price": "6100"
      }
]`