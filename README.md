# React + vite + vite-plugin-ssr + typescript + eslint + autoimports

Build with vite & react

Start in development mode:
`yarn dev`

Build for production:
`yarn build`

Lint errors (eslint + prettier + stylelint)
`yarn lint`

### настройка сервера

cd ~
curl -sL https://deb.nodesource.com/setup_18.x -o /tmp/nodesource_setup.sh
sudo bash /tmp/nodesource_setup.sh
sudo apt install nodejs
node -v
npm -v
npm i -g pm2

### API

https://shopcore.ru/store/api

Без авторизации
[GET] items - Получить список товаров по ID магазина
Параметры: (string) ShopID
[UP] /items/v2
—————————-
[GET] item - Получить инфу о товаре по ID
Параметры: (string) ShopId, (string) Id
—————————-
[GET] orders - Список заказов (лента)
Параметры: (string) ShopId, (int) count - от 1 до 10
—————————-
[GET] reviews - Отзывы по ID магазина
Параметры: (string) ShopId, (int) limit - от 0 до 100, (int) offset - от 0м

Для авторизации
[POST] auth - Авторизация в системе
{"shop_id": ShopID, "user": Ответ от авторизации со стороны ТГ }
—————————-
[POST] token/refresh - Обновить токен.

Следующие параметры требуют авторизации
[GET] profile/get - Вернет некоторую инфу о пользователе и его заказах
—————————-
[POST] payment/create - Создание платежки
{"amount": от 100 до 999999 }

### Roadmap (1 этап до 20.04.2013)

- [x] Перенести чистую верстку на текущий react
- [x] Добавить Typescript и линтеры, типизировать API, lintfix
- [x] Рефакторинг архитектуры, обновление зависимостей, удаление мусора
- [x] Обновить vite сборку, рефакторинг структуры под SSR
- [x] Поверхностная переделка компонентов, критичный багфикс
- [x] Переделать css на scss с модульностью (раскидать по папкам)
- [x] Исправить нейминг css-классов (**item, **block и пр.)
- [x] Разобраться с иконками, передеалть png на svg
- [x] Вынести переменные стилей в файл темы
- [x] Избавиться от jQuery и зависимстей верстки (бутстрап, acrticmodal, slick-slider и др), заменить на аналоги под react
- [x] Добавить типовые UI компоненты (кнопки, инпуты, лоадеры, модальные и пр.)
- [x] Смена api с donatcode на shopcore (обнволение всех запросов, ответов, повторная типизация)
- [x] Добавить слайдер покупок в шапку, sticky шапка
- [x] Включить SSR, протестировать build + serve, разобраться с конфликтующими модулями
- [x] Привести верстку в соотвествие с макетами/требованиями
- [x] Переделать сетки на колонки или grid вместо процентов
- [x] Сверстать новый блок отзывов
- [x] Сделать wysiwyg стили
- [x] Обатный маппинг из хардкода в динамику settings (картинки, настройки)
- [x] Протестить авторизацю по боту
- [x] Работа с сессией (рефреш, логаут и т.д)
- [x] Подключить/протестировать оплаты
- [x] Методы на универсальную контентную
- [x] Настроить SSR
- [?] Разобраться с ci/cd (адаптировать github acitons yaml), домены, хостинги и пр.
- [ ] Багфикс по MVP перед запуском
