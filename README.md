# UI Kit (React + TypeScript + Vite)

UI Kit проект с библиотекой компонентов и встроенной документацией-просмотрщиком (catalog/docs), где каждый компонент вынесен на отдельную страницу с примерами использования.

## Что содержит проект

- Набор базовых и составных UI-компонентов в `src/components`
- Страницы документации компонентов в `src/pages`
- Единый style guide: `guideline.md`
- Настроенный роутинг для каталога компонентов
- Tailwind CSS для стилизации
- MobX и `mobx-react-lite` как выбранный state stack
- Иконки через `react-icons` (набор Font Awesome 6)

## Технологии

- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Router
- MobX
- React Icons (`fa6`)

## Быстрый старт

Требования:

- Node.js 20+ (рекомендуется актуальная LTS)
- npm 10+

Установка и запуск:

```bash
npm install
npm run dev
```

После запуска:

- Dev URL обычно: `http://localhost:5173`

## Основные команды

- `npm run dev` - запуск dev-сервера
- `npm run build` - production-сборка
- `npm run preview` - локальный просмотр production-сборки
- `npm run lint` - проверка линтером

## Структура проекта

```text
src/
  components/     # UI-компоненты (каждый в своей папке)
  pages/          # страницы каталога/документации компонентов
  main.tsx        # входная точка приложения
  App.tsx         # корневой роутинг
guideline.md      # style guide проекта
.cursorrules      # проектные правила
```

## Документация компонентов

- Слева доступно меню компонентов, сгруппированных по назначению.
- Для каждого компонента есть:
  - описание на русском языке,
  - визуальные примеры,
  - переключатель показа кода примера.

## Лицензии иконок

В проекте используются иконки через пакет `react-icons`:

- `react-icons` - лицензия **MIT**
- Используемый набор `fa6` (Font Awesome 6) - лицензия иконок **CC BY 4.0**

Источники:

- [react-icons LICENSE](./node_modules/react-icons/LICENSE)
- [Font Awesome](https://fontawesome.com/)
- [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## Примечание

Этот репозиторий ориентирован на развитие UI Kit и его демонстрационного каталога. Страницы продукта/бизнес-логика не являются текущим фокусом и добавляются по мере необходимости.
