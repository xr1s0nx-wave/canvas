# Netlify Deployment Guide

## Настройка проекта для Netlify

### 1. Переменные окружения

Добавьте следующие переменные в Netlify Dashboard:

- Перейдите в **Site settings** > **Environment variables**
- Добавьте переменные из файла `netlify-env-example.txt`

#### Обязательные переменные:

```
NODE_VERSION=20
NODE_ENV=production
NPM_CONFIG_PRODUCTION=false
```

**Объяснение переменных:**

- `NODE_VERSION=20` - версия Node.js (совместима с Vite 7.1.12)
- `NODE_ENV=production` - режим продакшена
- `NPM_CONFIG_PRODUCTION=false` - устанавливать dev-зависимости (TypeScript, ESLint и др.)

#### Опциональные переменные:

```
API_BASE_URL=https://your-api-domain.com
API_KEY=your-api-key
GOOGLE_ANALYTICS_ID=GA-XXXXXXXXX
ENABLE_SSR=true
```

### 2. Настройки сборки

В Netlify Dashboard:

- **Build command**: `yarn build`
- **Publish directory**: `dist`
- **Node.js version**: `20`

### 3. Файлы конфигурации

Проект уже содержит:

- `netlify.toml` - основная конфигурация
- `netlify/functions/ssr.js` - функция для SSR
- `netlify-env-example.txt` - пример переменных окружения

### 4. Процесс деплоя

1. **Подключите репозиторий** к Netlify
2. **Настройте переменные окружения** (см. выше)
3. **Запустите деплой** - Netlify автоматически:
   - Установит зависимости (`yarn install`)
   - Выполнит сборку (`yarn build:ssr`)
   - Опубликует файлы из `dist/client`
   - Настроит SSR через Netlify Functions

### 5. Проверка деплоя

После деплоя проверьте:

- ✅ Главная страница загружается
- ✅ Навигация работает (SPA routing)
- ✅ SSR работает (проверьте исходный код страницы)
- ✅ PageProgressBar работает корректно

### 6. Мониторинг

В Netlify Dashboard доступны:

- **Deploy logs** - логи сборки
- **Function logs** - логи SSR функции
- **Analytics** - статистика посещений
- **Forms** - если используете Netlify Forms

### 7. Troubleshooting

#### Проблема: Ошибка сборки

- Проверьте версию Node.js (должна быть 20)
- Убедитесь, что все зависимости установлены
- Проверьте логи сборки в Netlify Dashboard

#### Проблема: SSR не работает

- Проверьте логи функции в Netlify Dashboard
- Убедитесь, что `dist/server/entry-server.js` существует
- Проверьте переменные окружения

#### Проблема: 404 ошибки при навигации

- Убедитесь, что redirect настроен правильно в `netlify.toml`
- Проверьте, что SSR функция возвращает HTML

### 8. Оптимизация

Для лучшей производительности:

- Включите **Asset optimization** в Netlify
- Настройте **CDN** для статических файлов
- Используйте **Image optimization** для изображений
- Настройте **Caching headers** (уже включены в `netlify.toml`)
