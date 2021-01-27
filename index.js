document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#myWrapper").closest(".r.t-rec").dataset.id = "cards";

    document.querySelector("#myFrame").closest(".r.t-rec").dataset.id = "iframe";


    document.querySelector("#myWrapper").innerHTML = `
    <style>
        [data-id="cards"] .t396__artboard {
            height: auto !important;
        }
        [data-id="cards"] .tn-elem {
            width: 100% !important;
            height: auto !important;
            position: static !important;
        }
        [data-id="iframe"] .tn-elem {
            max-width: 1260px !important;
            width: calc(100% - 20px) !important;
            margin: 0 auto !important;
            left: 10px !important;
            right: 10px !important;
        }
        *, *::before, *::after {
            box-sizing: border-box;
        }
        .container {
            max-width: 1240px;
            width: 100%;
            margin: 0 auto;
            padding: 0 20px;
            font-family: sans-serif;
            padding-bottom: 22px;
        }
        .container * {
            font-family: "Formular", Arial, sans-serif;
        }
        .offers {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            list-style: none;
            padding: 30px 0;
            padding-top: 50px;
            padding-left: 0 !important;
            margin: 0;
        }
        .offer {
            position: relative;
            width: calc((100% - 40px) / 3);
            background-color: #efefef;
            padding: 30px;
            padding-bottom: 100px;
            margin-bottom: 20px;
        }
        @media screen and (max-width: 768px) {
            .offer {
                width: calc((100% - 20px) / 2);
            }
        }
        @media screen and (max-width: 564px) {
            .offer {
                width: 100%;
            }
        }
        .offer__title {
            position: relative;
            margin: 0;
            margin-bottom: 15px;
            padding-bottom: 15px;
            font-family: "Geometria", Arial, sans-serif;
            font-weight: 500;
        }
        .offer__title::after {
            content: "";
            width: 40px;
            height: 2px;
            position: absolute;
            opacity: 0.6;
            background-color: #000000;
            bottom: 0;
            left: 0;
        }
        .offer__price {
            margin-bottom: 20px;
            font-size: 20px;
        }
        .offer__image-wrapper {
            height: 205px;
            display: flex;
            align-items: center;
        }
        .offer__image {
            display: block;
            width: 100%;
            max-width: 100%;
        }
        .offer__btn {
            position: absolute;
            bottom: 30px;
            left: 30px;
            color: #ffffff;
            font-size: 14px;
            font-weight: 600;
            border-width: 1px;
            border-radius: 30px;
            background-color: #0b00db;
            padding: 15px 30px;
            font-family: inherit;
            cursor: pointer;
        }
        .visually-hidden {
            position: absolute;
            clip: rect(0 0 0 0);
            width: 1px;
            height: 1px;
            margin: -1px;
        }
        .lg-backdrop {
            background-color: rgba(0,0,0,0.8) !important; 
        }
        .lg-sub-html {
            font-size: 20px !important;
        }
        img[class][src].lg-image {
            max-width: 1000px !important;
            width: 100% !important;
        } 
    </style>

    <div class="container">
        <ul class="offers">
            <li class="offer">
                <h2 class="offer__title">Стандарт</h2>
                <p class="offer__price">от 6 500$</p>
                <div class="offer__image-wrapper">
                    <img class="offer__image" src="https://autogroupbk.github.io/bkauto/imagestilda/standart.webp" alt="Стандарт">
                </div>
                <button class="offer__btn" data-id="7">Подробнее</button>
            </li>
            
            <li class="offer">
                <h2 class="offer__title">Комфорт</h2>
                <p class="offer__price">от 7 500$</p>
                <div class="offer__image-wrapper">
                    <img class="offer__image" src="https://autogroupbk.github.io/bkauto/imagestilda/comfort.webp" alt="Комфорт">
                </div>
                <button class="offer__btn" data-id="6">Подробнее</button>
            </li>

            <li class="offer">
                <h2 class="offer__title">Бизнес седан</h2>
                <p class="offer__price">от 9 500$</p>
                <div class="offer__image-wrapper">
                    <img class="offer__image" src="https://autogroupbk.github.io/bkauto/imagestilda/business-sedan.webp" alt="Бизнес седан">
                </div>
                <button class="offer__btn" data-id="8">Подробнее</button>
            </li>

            <li class="offer">
                <h2 class="offer__title">Премиум седан</h2>
                <p class="offer__price">от 14 500$</p>
                <div class="offer__image-wrapper">
                    <img class="offer__image" src="https://autogroupbk.github.io/bkauto/imagestilda/premium-sedan.webp" alt="">
                </div>
                <button class="offer__btn" data-id="9">Подробнее</button>
            </li>

            <li class="offer">
                <h2 class="offer__title">Кроссоверы</h2>
                <p class="offer__price">от 8 500$</p>
                <div class="offer__image-wrapper">
                    <img class="offer__image" src="https://autogroupbk.github.io/bkauto/imagestilda/crossovers.webp" alt="Кроссоверы">
                </div>
                <button class="offer__btn" data-id="1">Подробнее</button>
            </li>

            <li class="offer">
                <h2 class="offer__title">Внедорожники</h2>
                <p class="offer__price">от 11 500$</p>
                <div class="offer__image-wrapper">
                    <img class="offer__image" src="https://autogroupbk.github.io/bkauto/imagestilda/SUVs.webp" alt="Внедорожники">
                </div>
                <button class="offer__btn" data-id="2">Подробнее</button>
            </li>

            <li class="offer">
                <h2 class="offer__title">Спорт-купе</h2>
                <p class="offer__price">от 12 000$</p>
                <div class="offer__image-wrapper">
                    <img class="offer__image" src="https://autogroupbk.github.io/bkauto/imagestilda/sports-coupe.webp" alt="Спорт-купе">
                </div>
                <button class="offer__btn" data-id="4">Подробнее</button>
            </li>

            <li class="offer">
                <h2 class="offer__title">Электрокары</h2>
                <p class="offer__price">от 5500$</p>
                <div class="offer__image-wrapper">
                    <img class="offer__image" src="https://autogroupbk.github.io/bkauto/imagestilda/electric-cars.webp" alt="Электрокары">
                </div>
                <button class="offer__btn" data-id="5">Подробнее</button>
            </li>

            <li class="offer">
                <h2 class="offer__title">Мотоциклы</h2>
                <p class="offer__price">от 2000$</p>
                <div class="offer__image-wrapper">
                    <img class="offer__image" src="https://autogroupbk.github.io/bkauto/imagestilda/motorcycles.webp" alt="Мотоциклы">
                </div>
                <button class="offer__btn" data-id="3">Подробнее</button>
            </li>
        </ul>

        <ul id="lightgallery1" class="list-unstyled row visually-hidden">
            <li data-src="https://autogroupbk.github.io/bkauto/img/cars/1/1.webp" data-sub-html="Nissan Juke 2016 <br>Пробег: 54 тыс. миль <br>Цена в Украине: 8 400$">
                <a href="">
                    <img class="img-responsive" src="https://autogroupbk.github.io/bkauto/img/cars/1/1.webp">
                </a>
            </li>
            <li data-src="https://autogroupbk.github.io/bkauto/img/cars/1/2.webp" data-sub-html="Mazda CX-5 2017 <br>Пробег: 24 тыс. миль <br>Цена в Украине: 13 500$">
                <a href="">
                    <img class="img-responsive" src="https://autogroupbk.github.io/bkauto/img/cars/1/2.webp">
                </a>
            </li>
            <li data-src="https://autogroupbk.github.io/bkauto/img/cars/1/3.webp" data-sub-html="BMW X3 2015<br>Пробег: 58 тыс. миль <br>Цена в Украине: 14 000$">
                <a href="">
                    <img class="img-responsive" src="https://autogroupbk.github.io/bkauto/img/cars/1/3.webp">
                </a>
            </li>
            <li data-src="https://autogroupbk.github.io/bkauto/img/cars/1/4.webp" data-sub-html="Volkswagen Tiguan 2013 <br>Пробег: 72 тыс. миль <br>Цена в Украине: 7 900$">
                <a href="">
                    <img class="img-responsive" src="https://autogroupbk.github.io/bkauto/img/cars/1/4.webp">
                </a>
            </li>
            <li data-src="https://autogroupbk.github.io/bkauto/img/cars/1/5.webp" data-sub-html="Kia Sportage 2017 <br>Пробег: 28 тыс. миль <br>Цена в Украине: 11 000$">
                <a href="">
                    <img class="img-responsive" src="https://autogroupbk.github.io/bkauto/img/cars/1/5.webp">
                </a>
            </li>
            <li data-src="https://autogroupbk.github.io/bkauto/img/cars/1/6.webp" data-sub-html="Toyota RAV4 2016 год <br>Пробег 51 тыс миль <br>Цена в Украине 11500 $">
                <a href="">
                    <img class="img-responsive" src="https://autogroupbk.github.io/bkauto/img/cars/1/6.webp">
                </a>
            </li>
        </ul>

        <ul id="lightgallery2" class="list-unstyled row visually-hidden">
            <li data-src="https://autogroupbk.github.io/bkauto/img/cars/2/1.webp" data-sub-html="BMW X5 2016 <br>Пробег: 57 тыс. миль <br>Цена в Украине: 20 500$">
                <a href="">
                    <img class="img-responsive" src="https://autogroupbk.github.io/bkauto/img/cars/2/1.webp">
                </a>
            </li>
            <li data-src="https://autogroupbk.github.io/bkauto/img/cars/2/2.webp" data-sub-html="Mercedes Benz GL class 2014<br>Пробег: 79 тыс. миль <br>Цена в Украине: 24 000$">
                <a href="">
                    <img class="img-responsive" src="https://autogroupbk.github.io/bkauto/img/cars/2/2.webp">
                </a>
            </li>
            <li data-src="https://autogroupbk.github.io/bkauto/img/cars/2/3.webp" data-sub-html="Porsche Cayenne 2014 <br>Пробег: 77 тыс. миль <br>Цена в Украине: 20 500$">
                <a href="">
                    <img class="img-responsive" src="https://autogroupbk.github.io/bkauto/img/cars/2/3.webp">
                </a>
            </li>
            <li data-src="https://autogroupbk.github.io/bkauto/img/cars/2/4.webp" data-sub-html="Jeep Grand Cherokee 2016<br>Пробег: 62 тыс. миль<br>Цена в Украине: 18 700$">
                <a href="">
                    <img class="img-responsive" src="https://autogroupbk.github.io/bkauto/img/cars/2/4.webp">
                </a>
            </li>
            <li data-src="https://autogroupbk.github.io/bkauto/img/cars/2/5.webp" data-sub-html="Hyundai Santa Fe 2017<br>Пробег: 17 тыс. миль <br>Цена в Украине: 11 500$">
                <a href="">
                    <img class="img-responsive" src="https://autogroupbk.github.io/bkauto/img/cars/2/5.webp">
                </a>
            </li>
            <li data-src="https://autogroupbk.github.io/bkauto/img/cars/2/6.webp" data-sub-html="Range Rover Velar 2018 <br>Пробег: 11 тыс. миль <br>Цена в Украине: 40 700$">
                <a href="">
                    <img class="img-responsive" src="https://autogroupbk.github.io/bkauto/img/cars/2/6.webp">
                </a>
            </li>
            <li data-src="https://autogroupbk.github.io/bkauto/img/cars/2/7.webp" data-sub-html="Nissan Rogue S 2015<br>Пробег: 58 тыс. миль <br>Цена в Украине: 9 000$">
                <a href="">
                    <img class="img-responsive" src="https://autogroupbk.github.io/bkauto/img/cars/2/7.webp">
                </a>
            </li>
        </ul>

        <ul id="lightgallery3" class="list-unstyled row visually-hidden">
            <li data-src="https://autogroupbk.github.io/bkauto/img/cars/3/1.webp" data-sub-html="HONDA CBR500 R 2019 <br>Пробег: 4 тыс. миль <br>Цена в Украине: 2 800$">
                <a href="">
                    <img class="img-responsive" src="https://autogroupbk.github.io/bkauto/img/cars/3/1.webp">
                </a>
            </li>
            <li data-src="https://autogroupbk.github.io/bkauto/img/cars/3/2.webp" data-sub-html="Bmw S 1000 rr 2018 <br>Пробег: 5 тыс. миль <br>Цена в Украине: 9 300$">
                <a href="">
                    <img class="img-responsive" src="https://autogroupbk.github.io/bkauto/img/cars/3/2.webp">
                </a>
            </li>
            <li data-src="https://autogroupbk.github.io/bkauto/img/cars/3/3.webp" data-sub-html="2019 DUCATI MONSTER 821<br>Пробег: 6 тыс. миль <br>Цена в Украине: 3 600$">
                <a href="">
                    <img class="img-responsive" src="https://autogroupbk.github.io/bkauto/img/cars/3/3.webp">
                </a>
            </li>
        </ul>

        <ul id="lightgallery4" class="list-unstyled row visually-hidden">
            <li data-src="https://autogroupbk.github.io/bkauto/img/cars/4/1.webp" data-sub-html="CHEVROLET CAMARO 2016<br>Пробег: 36 тыс. миль<br>Цена в Украине: 15 250$">
                <a href="">
                    <img class="img-responsive" src="https://autogroupbk.github.io/bkauto/img/cars/4/1.webp">
                </a>
            </li>
            <li data-src="https://autogroupbk.github.io/bkauto/img/cars/4/2.webp" data-sub-html="FORD MUSTANG V6 2016<br>Пробег: 21 тыс. миль<br>Цена в Украине: 13 000$">
                <a href="">
                    <img class="img-responsive" src="https://autogroupbk.github.io/bkauto/img/cars/4/2.webp">
                </a>
            </li>
            <li data-src="https://autogroupbk.github.io/bkauto/img/cars/4/3.webp" data-sub-html="DODGE CHALLENGER 2016<br>Пробег: 21 тыс. миль<br>Цена в Украине: 13 500$">
                <a href="">
                    <img class="img-responsive" src="https://autogroupbk.github.io/bkauto/img/cars/4/3.webp">
                </a>
            </li>
            <li data-src="https://autogroupbk.github.io/bkauto/img/cars/4/4.webp" data-sub-html="BMW 4 series 2017<br>Пробег: 17 тыс. миль<br>Цена в Украине: 15 600$">
                <a href="">
                    <img class="img-responsive" src="https://autogroupbk.github.io/bkauto/img/cars/4/4.webp">
                </a>
            </li>
            <li data-src="https://autogroupbk.github.io/bkauto/img/cars/4/5.webp" data-sub-html="Audi A5 2015<br>Пробег: 40 тыс. миль<br>Цена в Украине: 11 500$">
                <a href="">
                    <img class="img-responsive" src="https://autogroupbk.github.io/bkauto/img/cars/4/5.webp">
                </a>
            </li>
            <li data-src="https://autogroupbk.github.io/bkauto/img/cars/4/6.webp" data-sub-html="INFINITI Q60 2017<br>Пробег: 18 тыс. миль<br>Цена в Украине: 20 500$">
                <a href="">
                    <img class="img-responsive" src="https://autogroupbk.github.io/bkauto/img/cars/4/6.webp">
                </a>
            </li>
        </ul>

        <ul id="lightgallery5" class="list-unstyled row visually-hidden">
            <li data-src="https://autogroupbk.github.io/bkauto/img/cars/5/1.webp" data-sub-html="BMW i3 2016<br>Пробег: 18 тыс. миль<br>Цена в Украине: 13 000$">
                <a href="">
                    <img class="img-responsive" src="https://autogroupbk.github.io/bkauto/img/cars/5/1.webp">
                </a>
            </li>
            <li data-src="https://autogroupbk.github.io/bkauto/img/cars/5/2.webp" data-sub-html="KIA SOUL EV 2017<br>Пробег: 19 тыс. миль<br>Цена в Украине: 10 300$">
                <a href="">
                    <img class="img-responsive" src="https://autogroupbk.github.io/bkauto/img/cars/5/2.webp">
                </a>
            </li>
            <li data-src="https://autogroupbk.github.io/bkauto/img/cars/5/3.webp" data-sub-html="Nissan Leaf 2011<br>Пробег: 53 тыс. миль<br>Цена в Украине: 5 800$">
                <a href="">
                    <img class="img-responsive" src="https://autogroupbk.github.io/bkauto/img/cars/5/3.webp">
                </a>
            </li>
            <li data-src="https://autogroupbk.github.io/bkauto/img/cars/5/4.webp" data-sub-html="TESLA Model 3 2019<br>Пробег: 17 тыс. миль<br>Цена в Украине: 23 500$">
                <a href="">
                    <img class="img-responsive" src="https://autogroupbk.github.io/bkauto/img/cars/5/4.webp">
                </a>
            </li>
            <li data-src="https://autogroupbk.github.io/bkauto/img/cars/5/5.webp" data-sub-html="Volkswagen E-Golf Se 2016<br>Пробег: 6 тыс. миль<br>Цена в Украине: 11 800$">
                <a href="">
                    <img class="img-responsive" src="https://autogroupbk.github.io/bkauto/img/cars/5/5.webp">
                </a>
            </li>
            <li data-src="https://autogroupbk.github.io/bkauto/img/cars/5/6.webp" data-sub-html="CHEVROLET BOLT EV PREMIER 2020<br>Пробег: 1 тыс. миль<br>Цена в Украине: 15 200$">
                <a href="">
                    <img class="img-responsive" src="https://autogroupbk.github.io/bkauto/img/cars/5/6.webp">
                </a>
            </li>
        </ul>

        <ul id="lightgallery6" class="list-unstyled row visually-hidden">
            <li data-src="https://autogroupbk.github.io/bkauto/img/cars/6/1.webp" data-sub-html="Mazda 3 2015<br>Пробег: 30 тыс. миль<br>Цена в Украине: 8 000$">
                <a href="">
                    <img class="img-responsive" src="https://autogroupbk.github.io/bkauto/img/cars/6/1.webp">
                </a>
            </li>
            <li data-src="https://autogroupbk.github.io/bkauto/img/cars/6/2.webp" data-sub-html="Volkswagen Jetta 2015<br>Пробег: 48 тыс. миль <br>Цена в Украине: 7 500$">
                <a href="">
                    <img class="img-responsive" src="https://autogroupbk.github.io/bkauto/img/cars/6/2.webp">
                </a>
            </li>
            <li data-src="https://autogroupbk.github.io/bkauto/img/cars/6/3.webp" data-sub-html="BMW 3 series 2014<br>Пробег: 71 тыс. миль <br>Цена в Украине: 8 250$">
                <a href="">
                    <img class="img-responsive" src="https://autogroupbk.github.io/bkauto/img/cars/6/3.webp">
                </a>
            </li>
            <li data-src="https://autogroupbk.github.io/bkauto/img/cars/6/4.webp" data-sub-html="Ford Fusion 2016<br>Пробег: 48 тыс. миль<br>Цена в Украине: 7 300$">
                <a href="">
                    <img class="img-responsive" src="https://autogroupbk.github.io/bkauto/img/cars/6/4.webp">
                </a>
            </li>
            <li data-src="https://autogroupbk.github.io/bkauto/img/cars/6/5.webp" data-sub-html="Audi A4 2013 <br>Пробег: 59 тыс. миль<br>Цена в Украине: 8 900$">
                <a href="">
                    <img class="img-responsive" src="https://autogroupbk.github.io/bkauto/img/cars/6/5.webp">
                </a>
            </li>
            <li data-src="https://autogroupbk.github.io/bkauto/img/cars/6/6.webp" data-sub-html="Hyundai Elantra 2017<br>Пробег: 27 тыс. миль <br>Цена в Украине: 8 000$">
                <a href="">
                    <img class="img-responsive" src="https://autogroupbk.github.io/bkauto/img/cars/6/6.webp">
                </a>
            </li>
        </ul>

        <ul id="lightgallery7" class="list-unstyled row visually-hidden">
            <li data-src="https://autogroupbk.github.io/bkauto/img/cars/7/1.webp" data-sub-html="Ford Fiesta 2016<br>Пробег: 48 тыс. миль<br>Цена в Украине: 5 700$">
                <a href="">
                    <img class="img-responsive" src="https://autogroupbk.github.io/bkauto/img/cars/7/1.webp">
                </a>
            </li>
            <li data-src="https://autogroupbk.github.io/bkauto/img/cars/7/2.webp" data-sub-html="Fiat 500 2015<br>Пробег: 32 тыс. миль <br>Цена в Украине: 6 300$">
                <a href="">
                    <img class="img-responsive" src="https://autogroupbk.github.io/bkauto/img/cars/7/2.webp">
                </a>
            </li>
            <li data-src="https://autogroupbk.github.io/bkauto/img/cars/7/3.webp" data-sub-html="Dodge Dart 2015<br>Пробег: 64 тыс. миль<br>Цена в Украине: 6 300$">
                <a href="">
                    <img class="img-responsive" src="https://autogroupbk.github.io/bkauto/img/cars/7/3.webp">
                </a>
            </li>
            <li data-src="https://autogroupbk.github.io/bkauto/img/cars/7/4.webp" data-sub-html="Chevrolet Cruise 2015 <br>Пробег: 51 тыс. миль <br>Цена в Украине: 6 450$">
                <a href="">
                    <img class="img-responsive" src="https://autogroupbk.github.io/bkauto/img/cars/7/4.webp">
                </a>
            </li>
            <li data-src="https://autogroupbk.github.io/bkauto/img/cars/7/5.webp" data-sub-html="Hyundai Accent GLS 2015<br>Пробег: 63 тыс. миль <br>Цена в Украине: 6 150$">
                <a href="">
                    <img class="img-responsive" src="https://autogroupbk.github.io/bkauto/img/cars/7/5.webp">
                </a>
            </li>
            <li data-src="https://autogroupbk.github.io/bkauto/img/cars/7/6.webp" data-sub-html="Ford Focus 2016<br>Пробег: 52 тыс. миль<br>Цена в Украине: 6 360$">
                <a href="">
                    <img class="img-responsive" src="https://autogroupbk.github.io/bkauto/img/cars/7/6.webp">
                </a>
            </li>
        </ul>

        <ul id="lightgallery8" class="list-unstyled row visually-hidden">
            <li data-src="https://autogroupbk.github.io/bkauto/img/cars/8/1.webp" data-sub-html="Volkswagen Passat 2015<br>Пробег: 58 тыс. миль <br>Цена в Украине: 8 500$">
                <a href="">
                    <img class="img-responsive" src="https://autogroupbk.github.io/bkauto/img/cars/8/1.webp">
                </a>
            </li>
            <li data-src="https://autogroupbk.github.io/bkauto/img/cars/8/2.webp" data-sub-html="Audi A6 2012<br>Пробег: 89 тыс. миль<br>Цена в Украине: 12 500$">
                <a href="">
                    <img class="img-responsive" src="https://autogroupbk.github.io/bkauto/img/cars/8/2.webp">
                </a>
            </li>
            <li data-src="https://autogroupbk.github.io/bkauto/img/cars/8/3.webp" data-sub-html="BMW 5 series 2014 <br>Пробег: 61 тыс. миль <br>Цена в Украине: 12 100$">
                <a href="">
                    <img class="img-responsive" src="https://autogroupbk.github.io/bkauto/img/cars/8/3.webp">
                </a>
            </li>
            <li data-src="https://autogroupbk.github.io/bkauto/img/cars/8/4.webp" data-sub-html="Toyota Camry 2018<br>Пробег: 23 тыс. миль<br>Цена в Украине: 13 500$">
                <a href="">
                    <img class="img-responsive" src="https://autogroupbk.github.io/bkauto/img/cars/8/4.webp">
                </a>
            </li>
            <li data-src="https://autogroupbk.github.io/bkauto/img/cars/8/5.webp" data-sub-html="Mazda 6 2016<br>Пробег: 37 тыс. миль <br>Цена в Украине: 8 800$">
                <a href="">
                    <img class="img-responsive" src="https://autogroupbk.github.io/bkauto/img/cars/8/5.webp">
                </a>
            </li>
            <li data-src="https://autogroupbk.github.io/bkauto/img/cars/8/6.webp" data-sub-html="Hyundai Sonata 2016<br>Пробег: 68 тыс. миль <br>Цена в Украине: 7 600$">
                <a href="">
                    <img class="img-responsive" src="https://autogroupbk.github.io/bkauto/img/cars/8/6.webp">
                </a>
            </li>
            <li data-src="https://autogroupbk.github.io/bkauto/img/cars/8/7.webp" data-sub-html="KIA Optima 2016<br>Пробег: 60 тыс. миль<br>Цена: 7 800$">
                <a href="">
                    <img class="img-responsive" src="https://autogroupbk.github.io/bkauto/img/cars/8/7.webp">
                </a>
            </li>
        </ul>

        <ul id="lightgallery9" class="list-unstyled row visually-hidden">
            <li data-src="https://autogroupbk.github.io/bkauto/img/cars/9/1.webp" data-sub-html="BMW 7 series 2016<br>Пробег: 42 тыс. миль<br>Цена в Украине: 27 500$">
                <a href="">
                    <img class="img-responsive" src="https://autogroupbk.github.io/bkauto/img/cars/9/1.webp">
                </a>
            </li>
            <li data-src="https://autogroupbk.github.io/bkauto/img/cars/9/2.webp" data-sub-html="Mercedes-Benz S class 2016<br>Пробег: 39 тыс. миль<br>Цена в Украине: 33 500$">
                <a href="">
                    <img class="img-responsive" src="https://autogroupbk.github.io/bkauto/img/cars/9/2.webp">
                </a>
            </li>
            <li data-src="https://autogroupbk.github.io/bkauto/img/cars/9/3.webp" data-sub-html="PORSCHE PANAMERA S E-HYBRID 2016<br>Пробег: 31 тыс. миль<br>Цена в Украине: 33 000$">
                <a href="">
                    <img class="img-responsive" src="https://autogroupbk.github.io/bkauto/img/cars/9/3.webp">
                </a>
            </li>
            <li data-src="https://autogroupbk.github.io/bkauto/img/cars/9/4.webp" data-sub-html="Audi A8 2015<br>Пробег: 68 тыс. миль<br>Цена в Украине: 25 000$">
                <a href="">
                    <img class="img-responsive" src="https://autogroupbk.github.io/bkauto/img/cars/9/4.webp">
                </a>
            </li>
            <li data-src="https://autogroupbk.github.io/bkauto/img/cars/9/5.webp" data-sub-html="TOYOTA AVALON LIMITED 2016<br>Пробег: 55 тыс. миль<br>Цена в Украине: 15 000$">
                <a href="">
                    <img class="img-responsive" src="https://autogroupbk.github.io/bkauto/img/cars/9/5.jpg">
                </a>
            </li>
            <li data-src="https://autogroupbk.github.io/bkauto/img/cars/9/6.webp" data-sub-html="VOLKSWAGEN ARTEON SEL 2019<br>Пробег: 5 тыс. миль<br>Цена в Украине: 23 500$">
                <a href="">
                    <img class="img-responsive" src="https://autogroupbk.github.io/bkauto/img/cars/9/6.webp">
                </a>
            </li>
        </ul>
    </div>
    `;

    const downloadedFlags = {
        lightgalleryAll: false,
        picturefill: false,
        css: false,
    };

    const checkFownloadedFlags = () => {
        if (downloadedFlags.css && downloadedFlags.lightgalleryAll && downloadedFlags.picturefill) {
            $(document).ready(function () {
                $('#lightgallery1').lightGallery();
                $('#lightgallery2').lightGallery();
                $('#lightgallery3').lightGallery();
                $('#lightgallery4').lightGallery();
                $('#lightgallery5').lightGallery();
                $('#lightgallery6').lightGallery();
                $('#lightgallery7').lightGallery();
                $('#lightgallery8').lightGallery();
                $('#lightgallery9').lightGallery();
            });
        }
    }

    const lightgalleryAll = document.createElement('script'),
        picturefill = document.createElement('script'),
        css = document.createElement('link'),
        head = document.head || document.getElementsByTagName('head')[0];

    lightgalleryAll.src = "https://autogroupbk.github.io/bkauto/lightgallery/lightgallery-all.min.js";
    lightgalleryAll.async = false;

    picturefill.src = "https://cdn.jsdelivr.net/picturefill/2.3.1/picturefill.min.js";
    picturefill.async = false;

    css.href = "https://autogroupbk.github.io/bkauto/lightgallery/lightgallery.css";
    css.rel = "stylesheet";

    lightgalleryAll.addEventListener('load', function () {
        downloadedFlags.lightgalleryAll = true;
        checkFownloadedFlags();
    });

    picturefill.addEventListener('load', function () {
        downloadedFlags.picturefill = true;
        checkFownloadedFlags();
    });

    css.addEventListener('load', function () {
        downloadedFlags.css = true;
        checkFownloadedFlags();
    });

    head.insertBefore(css, head.firstChild);
    head.insertBefore(lightgalleryAll, head.firstChild);
    head.insertBefore(picturefill, head.firstChild);

    document.querySelectorAll("button[data-id]").forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const btnId = e.target.dataset.id;

            if (document.querySelector(`#lightgallery${btnId} li a`)) {
                document.querySelector(`#lightgallery${btnId} li a`).click();
            }
        });
    });

});
