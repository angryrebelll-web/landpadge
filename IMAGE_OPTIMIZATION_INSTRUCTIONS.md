# Инструкция по оптимизации фоновых изображений

## Требуемые изображения

Необходимо создать следующие WebP изображения с качеством 90%:

### 1. Hero секция
- **Desktop**: `images/hero-desktop.webp` (2560x1400px)
- **Mobile**: `images/hero-mobile.webp` (1170x2532px)
- **Fallback JPG**: `images/hero-desktop.jpg` (2560x1400px)

### 2. Блок "Кто мы" (About)
- **Desktop**: `images/about-desktop.webp` (2560x1400px)
- **Mobile**: `images/about-mobile.webp` (1170x2532px)

### 3. Блок "Преимущества" (Advantages)
- **Desktop**: `images/advantages-desktop.webp` (2560x1400px)
- **Mobile**: `images/advantages-mobile.webp` (1170x2532px)

### 4. Блок "Услуги" (Services)
- **Desktop**: `images/services-desktop.webp` (2560x1400px)
- **Mobile**: `images/services-mobile.webp` (1170x2532px)

### 5. Блок "УТП/Статистика" (Stats)
- **Desktop**: `images/stats-desktop.webp` (2560x1400px)
- **Mobile**: `images/stats-mobile.webp` (1170x2532px)
- **Тема**: Автомобили, статистика, профессионализм

### 6. Блок "Акция" (Promo)
- **Desktop**: `images/promo-desktop.webp` (2560x1400px)
- **Mobile**: `images/promo-mobile.webp` (1170x2532px)
- **Тема**: Автомобиль с защитной пленкой, броня лобового стекла

### 7. Блок "Калькулятор" (Calculator)
- **Desktop**: `images/calculator-desktop.webp` (2560x1400px)
- **Mobile**: `images/calculator-mobile.webp` (1170x2532px)
- **Тема**: Автомобиль, процесс оклейки, калькулятор

### 8. Блок "Виды пленок" (Films)
- **Desktop**: `images/films-desktop.webp` (2560x1400px)
- **Mobile**: `images/films-mobile.webp` (1170x2532px)
- **Тема**: Различные виды защитных пленок, материалы

### 9. Блок "Отзывы" (Reviews)
- **Desktop**: `images/reviews-desktop.webp` (2560x1400px)
- **Mobile**: `images/reviews-mobile.webp` (1170x2532px)
- **Тема**: Довольные клиенты, качественная работа, автомобили

### 10. Блок "Контакты" (Contacts)
- **Desktop**: `images/contacts-desktop.webp` (2560x1400px)
- **Mobile**: `images/contacts-mobile.webp` (1170x2532px)
- **Тема**: Офис, салон, контакты, профессиональная обстановка

## Исходные изображения

1. **Hero**: https://i.ytimg.com/vi/-CEsaoVY_QU/maxresdefault.jpg
2. **Кто мы**: https://i.ytimg.com/vi/w95I748Izeo/maxresdefault.jpg
3. **Преимущества**: https://i.pinimg.com/1200x/74/be/df/74bedfd6486e45e3d9b4577d8d42f33b.jpg
4. **Услуги**: https://i.pinimg.com/1200x/1f/97/b4/1f97b4f5236f83c9764e8852d5f23794.jpg

**Для новых блоков нужно найти изображения по темам:**
5. **Статистика**: автомобили, профессионализм, статистика
6. **Акция**: автомобиль с защитной пленкой, броня стекла
7. **Калькулятор**: автомобиль, процесс оклейки
8. **Виды пленок**: различные защитные пленки, материалы
9. **Отзывы**: довольные клиенты, качественная работа
10. **Контакты**: офис, салон, профессиональная обстановка

## Шаги по созданию

1. **Скачайте исходные изображения**

2. **Создайте мобильные версии (1170x2532px)**:
   - Обрежьте/масштабируйте изображения до вертикального формата
   - Сохраните как временные файлы

3. **Создайте десктопные версии (2560x1400px)**:
   - Обрежьте/масштабируйте изображения до горизонтального формата
   - Сохраните как временные файлы

4. **Конвертируйте в WebP с качеством 90%**:
   ```bash
   # Используя cwebp (из libwebp)
   cwebp -q 90 input.jpg -o output.webp
   
   # Или используя онлайн-конвертер:
   # https://cloudconvert.com/jpg-to-webp
   # https://convertio.co/jpg-webp/
   ```

5. **Разместите файлы в папке `images/`**:
   ```
   images/
   ├── hero-desktop.webp
   ├── hero-mobile.webp
   ├── hero-desktop.jpg (fallback)
   ├── about-desktop.webp
   ├── about-mobile.webp
   ├── advantages-desktop.webp
   ├── advantages-mobile.webp
   ├── services-desktop.webp
   ├── services-mobile.webp
   ├── stats-desktop.webp
   ├── stats-mobile.webp
   ├── promo-desktop.webp
   ├── promo-mobile.webp
   ├── calculator-desktop.webp
   ├── calculator-mobile.webp
   ├── films-desktop.webp
   ├── films-mobile.webp
   ├── reviews-desktop.webp
   ├── reviews-mobile.webp
   ├── contacts-desktop.webp
   └── contacts-mobile.webp
   ```

## Overlay градиент

Все фоновые изображения уже имеют overlay градиент:
```css
linear-gradient(180deg, rgba(0,0,0,0.55), rgba(0,0,0,0.8))
```

Это обеспечивает читаемость текста на всех секциях.

## Lazy Loading

Все изображения настроены с `loading="lazy"` для оптимизации загрузки.

## Удаление старых изображений

После размещения новых WebP файлов, старые JPG/PNG ссылки в коде уже заменены на новые пути.

