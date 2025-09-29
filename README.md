<div align="center">

# 🎨 Canvas

**Современное React приложение с серверным рендерингом и адаптивным дизайном**

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-canvas--xr1s0nx.netlify.app-blue?style=for-the-badge&logo=netlify)](https://canvas-xr1s0nx.netlify.app)

[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=flat-square&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.12-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Material-UI](https://img.shields.io/badge/Material--UI-7.3.2-0081CB?style=flat-square&logo=mui&logoColor=white)](https://mui.com/)
[![Sass](https://img.shields.io/badge/Sass-1.93.2-CC6699?style=flat-square&logo=sass&logoColor=white)](https://sass-lang.com/)
[![Netlify](https://img.shields.io/badge/Netlify-Deployed-00C7B7?style=flat-square&logo=netlify&logoColor=white)](https://netlify.com/)

</div>

---

## 📋 Описание

**Canvas** — это современное веб-приложение, построенное с использованием React 19 и TypeScript. Проект демонстрирует лучшие практики разработки с серверным рендерингом (SSR), адаптивным дизайном и продвинутой системой тем.

### ✨ Основные возможности

- 🎨 **Адаптивная тема** — автоматическое определение системной темы и переключение между светлой/темной
- 🚀 **Серверный рендеринг** — быстрая загрузка и SEO-оптимизация
- 📱 **Адаптивный дизайн** — отличный UX на всех устройствах
- 🎯 **TypeScript** — полная типизация для надежности кода
- 🎨 **Material-UI** — современный и красивый интерфейс
- ⚡ **Vite** — молниеносная сборка и разработка
- 🔧 **ESLint + Prettier** — качество и консистентность кода

---

## 🛠 Технологический стек

### Frontend

- **React 19.1.1** — библиотека для создания пользовательских интерфейсов
- **TypeScript 5.8.3** — типизированный JavaScript
- **Material-UI 7.3.2** — компонентная библиотека
- **React Router DOM 7.9.3** — маршрутизация
- **Sass** — препроцессор CSS

### Backend & Build

- **Express.js** — сервер для SSR
- **Vite 7.1.12** — сборщик и dev-сервер
- **Rolldown** — быстрый бандлер

### Development Tools

- **ESLint** — линтер кода
- **Prettier** — форматирование кода
- **Husky** — Git hooks
- **Lint-staged** — проверка staged файлов

### Deployment

- **Netlify** — хостинг и CI/CD
- **Netlify Functions** — серверные функции

---

## 🚀 Быстрый старт

### Предварительные требования

- Node.js 18+
- npm или yarn

### Установка

```bash
# Клонирование репозитория
git clone <repository-url>
cd canvasTest

# Установка зависимостей
npm install
# или
yarn install
```

### Разработка

```bash
# Запуск dev-сервера
npm run dev

# Сборка для продакшена
npm run build

# Предварительный просмотр продакшен сборки
npm run preview
```

### SSR режим

```bash
# Сборка с SSR
npm run build:ssr

# Запуск SSR сервера
npm run preview:ssr
```

---

## 📁 Структура проекта

```
src/
├── app/                    # Основное приложение
│   ├── Layout/            # Компоненты макета
│   ├── providers/         # Провайдеры контекста
│   └── styles/           # Глобальные стили
├── pages/                 # Страницы приложения
│   ├── HomePage/         # Главная страница
│   ├── LoginPage/        # Страница входа
│   └── NotFound/         # 404 страница
├── shared/               # Общие компоненты и утилиты
│   ├── config/          # Конфигурация
│   ├── lib/             # Библиотеки и контексты
│   ├── styles/          # SCSS стили
│   ├── types/           # TypeScript типы
│   └── ui/              # UI компоненты
└── entry-*.tsx          # Точки входа для клиента/сервера
```

---

## 🎨 Особенности дизайна

### Система тем

- Автоматическое определение системной темы
- Сохранение выбранной темы в localStorage
- Плавные переходы между темами
- Кастомная цветовая палитра для каждой темы

### Адаптивность

- Мобильно-первый подход
- Гибкая сетка Material-UI
- Оптимизация для всех размеров экранов

---

## 🔧 Скрипты

| Команда               | Описание                     |
| --------------------- | ---------------------------- |
| `npm run dev`         | Запуск dev-сервера           |
| `npm run build`       | Сборка для продакшена        |
| `npm run build:ssr`   | Сборка с SSR                 |
| `npm run preview`     | Предварительный просмотр     |
| `npm run preview:ssr` | Предварительный просмотр SSR |
| `npm run lint`        | Проверка кода ESLint         |
| `npm run format`      | Форматирование кода Prettier |

---

## 🌐 Деплой

Приложение автоматически деплоится на Netlify при пуше в основную ветку.

**Live Demo:** [canvas-xr1s0nx.netlify.app](https://canvas-xr1s0nx.netlify.app)

---

## 📄 Лицензия

Этот проект создан в образовательных целях.

---

<div align="center">

**Создано с ❤️ используя React, TypeScript и Material-UI**

[![GitHub](https://img.shields.io/badge/GitHub-Repository-black?style=flat-square&logo=github)](https://github.com)
[![Netlify](https://img.shields.io/badge/Netlify-Deployed-00C7B7?style=flat-square&logo=netlify&logoColor=white)](https://canvas-xr1s0nx.netlify.app)

</div>
