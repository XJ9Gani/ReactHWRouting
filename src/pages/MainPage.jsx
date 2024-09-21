import { Button, Container, Stack } from "react-bootstrap";

export default function MainPage({ cart, setCart, setTotal }) {
  const products = [
    {
      id: 1,
      name: "Ноутбук Acer Aspire 5",
      price: 599.99,
      description:
        "15.6-дюймовый ноутбук с процессором Intel Core i5 и 8 ГБ ОЗУ.",
    },
    {
      id: 2,
      name: "Смартфон Samsung Galaxy S21",
      price: 799.99,
      description:
        "Смартфон с 6.2-дюймовым экраном и 128 ГБ встроенной памяти.",
    },
    {
      id: 3,
      name: "Наушники Sony WH-1000XM4",
      price: 349.99,
      description:
        "Беспроводные наушники с шумоподавлением и длительным временем работы.",
    },
    {
      id: 4,
      name: "Планшет Apple iPad Pro",
      price: 999.99,
      description: "12.9-дюймовый планшет с процессором M1 и 128 ГБ памяти.",
    },
    {
      id: 5,
      name: "Кроссовки Nike Air Max 270",
      price: 149.99,
      description:
        "Удобные кроссовки с хорошей амортизацией и стильным дизайном.",
    },
    {
      id: 6,
      name: "Фитнес-трекер Xiaomi Mi Band 6",
      price: 44.99,
      description: "Умный браслет для отслеживания активности и сна.",
    },
    {
      id: 7,
      name: "Камера Canon EOS 250D",
      price: 649.99,
      description: "Цифровая зеркальная камера с 24.1 МП.",
    },
    {
      id: 8,
      name: "Монитор Dell UltraSharp U2720Q",
      price: 699.99,
      description: "27-дюймовый 4K монитор с IPS матрицей.",
    },
    {
      id: 9,
      name: "Гарнитура HyperX Cloud II",
      price: 99.99,
      description: "Игровая гарнитура с высоким качеством звука.",
    },
    {
      id: 10,
      name: "Внешний жесткий диск WD My Passport",
      price: 79.99,
      description: "Портативный жесткий диск на 1 ТБ.",
    },
    {
      id: 11,
      name: "Умная колонка Amazon Echo Dot",
      price: 49.99,
      description: "Умная колонка с голосовым управлением Alexa.",
    },
    {
      id: 12,
      name: "Телевизор LG OLED55CX",
      price: 1399.99,
      description: "55-дюймовый OLED телевизор с 4K разрешением.",
    },
    {
      id: 13,
      name: "Смарт-часы Apple Watch Series 6",
      price: 399.99,
      description: "Смарт-часы с отслеживанием здоровья и активности.",
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/series6-44-spacegray-alum-case-44mm-cw-5G-2?wid=300&hei=300&fmt=png-alpha&.v=1602101912000",
    },
    {
      id: 14,
      name: "Принтер HP LaserJet Pro M15w",
      price: 99.99,
      description: "Компактный лазерный принтер с беспроводным подключением.",
      image:
        "https://www.hp.com/content/dam/hp/products/printer/languages/PRODUCTS/LaserJet_Pro_M15_PB_LC_main2.png",
    },
    {
      id: 15,
      name: "Микроволновая печь Samsung ME83K",
      price: 129.99,
      description: "Микроволновая печь с мощностью 800 Вт и грилем.",
      image:
        "https://www.samsung.com/global/galaxy/galaxy-s21/images/s21/galaxy-s21-image.png",
    },
    {
      id: 16,
      name: "Электрическая зубная щетка Oral-B Pro 2",
      price: 79.99,
      description:
        "Электрическая зубная щетка с таймером и несколькими режимами.",
      image:
        "https://cdn.shopify.com/s/files/1/0014/5406/4226/products/Oral-B_Pro_2_Electric_Toothbrush_2000x.jpg?v=1597047740",
    },
    {
      id: 17,
      name: "Пылесос Dyson V11",
      price: 599.99,
      description: "Беспроводной пылесос с мощным всасыванием.",
      image:
        "https://www.dyson.com/cms/images/vacuum/dyson-v11/dyson-v11-animal/v11-animal-vacuum-large-hero.jpg",
    },
    {
      id: 18,
      name: "Портативная колонка JBL Flip 5",
      price: 89.99,
      description:
        "Беспроводная колонка с защитой от воды и длительным временем работы.",
      image:
        "https://www.jbl.com/on/demandware.static/-/Library-Sites-JBLLATAMShared/default/dw9b2df659/images/JBL/flip5/Hero/Flip5-Hero-Water-2020.png",
    },
    {
      id: 19,
      name: "Кофеварка De'Longhi EC685",
      price: 249.99,
      description: "Кофеварка для приготовления эспрессо с паровой трубкой.",
      image: "https://www.delonghi.com/Global/Products/EC685-1b.jpg",
    },
    {
      id: 20,
      name: "Системный блок Intel Core i7",
      price: 1199.99,
      description:
        "Игровой системный блок с процессором Intel Core i7 и 16 ГБ ОЗУ.",
      image:
        "https://www.intel.com/content/dam/www/central-libraries/us/en/images/computing/desktop-3.jpg",
    },
  ];

  const addToBasket = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    setTotal((prevTotal) => prevTotal + product.price);
  };

  return (
    <>
      <Container className="justify-content-center">
        <Stack>
          <ul className="list-unstyled d-flex flex-wrap gap-5 mb-0">
            {products.map((el) => (
              <Stack key={el.id}>
                <li
                  className="bg-dark text-light p-3 border"
                  style={{
                    width: "285px",
                    height: "200px",
                    borderRadius: "5px",
                  }}
                >
                  <span>{el.name}</span>
                  <hr />
                  <span>{el.description}</span>
                  <br />
                </li>
                <Button
                  onClick={() => addToBasket(el)}
                  variant="success"
                  style={{ width: "285px" }}
                >
                  Купить
                </Button>
              </Stack>
            ))}
          </ul>
        </Stack>
      </Container>
    </>
  );
}
