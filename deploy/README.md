# Deploy папка для GitHub Pages

Эта папка содержит файлы для деплоя на GitHub Pages.

## Структура

```
deploy/
├── index.html          # Главная страница
├── script.js           # Логика калькулятора
├── style.css           # Основные стили
├── calculator.html     # Отдельная страница калькулятора
├── *.svg              # Логотипы брендов
├── fonts/             # Шрифты (нужно добавить)
└── images/            # Изображения (нужно добавить)
```

## Что нужно добавить

### 1. Шрифты (fonts/)
Скопируйте шрифты Unbounded согласно инструкции в корне репозитория:
- `Unbounded-Regular.woff2`
- `Unbounded-Regular.ttf`
- `Unbounded-Medium.woff2` (опционально)
- `Unbounded-Medium.ttf` (опционально)
- `Unbounded-SemiBold.woff2` (опционально)
- `Unbounded-SemiBold.ttf` (опционально)
- `Unbounded-Bold.woff2` (опционально)
- `Unbounded-Bold.ttf` (опционально)

### 2. Изображения (images/)
Добавьте изображения согласно инструкции в корне репозитория:
- `hero-desktop.webp`
- `hero-tablet.webp`
- `hero-mobile.webp`
- И другие изображения согласно `ИНСТРУКЦИЯ_ПО_ИЗОБРАЖЕНИЯМ.txt`

## Деплой

GitHub Pages автоматически задеплоит эту папку при пуше в main/master ветку.

