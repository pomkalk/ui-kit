# Ant Design Components (v5) - Expanded API

Справочник по компонентам Ant Design v5 в едином формате:
- краткое описание;
- таблица ключевых props (`prop / type / default / description`);
- минимальный пример использования;
- ссылка на официальный раздел;
- ссылка назад к содержанию.

> Источник: документация Ant Design, собранная через MCP Context7.  
> Для очень редких/узких пропсов используйте официальный API по ссылке в конце секции.

## Содержание

### General
- [Button](#button)
- [FloatButton](#floatbutton)
- [Icon](#icon)
- [Typography](#typography)

### Layout
- [Divider](#divider)
- [Flex](#flex)
- [Grid](#grid)
- [Layout](#layout)
- [Space](#space)
- [Splitter](#splitter)

### Navigation
- [Anchor](#anchor)
- [Breadcrumb](#breadcrumb)
- [Dropdown](#dropdown)
- [Menu](#menu)
- [Pagination](#pagination)
- [Steps](#steps)
- [Tabs](#tabs)

### Data Entry
- [AutoComplete](#autocomplete)
- [Cascader](#cascader)
- [Checkbox](#checkbox)
- [ColorPicker](#colorpicker)
- [DatePicker](#datepicker)
- [Form](#form)
- [Input](#input)
- [InputNumber](#inputnumber)
- [Mentions](#mentions)
- [Radio](#radio)
- [Rate](#rate)
- [Select](#select)
- [Slider](#slider)
- [Switch](#switch)
- [TimePicker](#timepicker)
- [Transfer](#transfer)
- [TreeSelect](#treeselect)
- [Upload](#upload)

### Data Display
- [Avatar](#avatar)
- [Badge](#badge)
- [Calendar](#calendar)
- [Card](#card)
- [Carousel](#carousel)
- [Collapse](#collapse)
- [Descriptions](#descriptions)
- [Empty](#empty)
- [Image](#image)
- [List](#list)
- [Popover](#popover)
- [QRCode](#qrcode)
- [Segmented](#segmented)
- [Statistic](#statistic)
- [Table](#table)
- [Tag](#tag)
- [Timeline](#timeline)
- [Tooltip](#tooltip)
- [Tour](#tour)
- [Tree](#tree)

### Feedback
- [Alert](#alert)
- [Drawer](#drawer)
- [Message](#message)
- [Modal](#modal)
- [Notification](#notification)
- [Popconfirm](#popconfirm)
- [Progress](#progress)
- [Result](#result)
- [Skeleton](#skeleton)
- [Spin](#spin)
- [Watermark](#watermark)

### Other
- [Affix](#affix)
- [App](#app)
- [ConfigProvider](#configprovider)

---

## Button
Описание: Кнопка действия.
| Prop | Type | Default | Описание |
|---|---|---|---|
| `type` | `primary \| default \| dashed \| text \| link` | `default` | Вариант кнопки. |
| `size` | `large \| middle \| small` | `middle` | Размер. |
| `loading` | `boolean \| { delay: number }` | `false` | Состояние загрузки. |
| `disabled` | `boolean` | `false` | Отключение кнопки. |
| `icon` | `ReactNode` | `-` | Иконка. |
| `onClick` | `(event) => void` | `-` | Обработчик клика. |
Пример:
```tsx
<Button type="primary" loading>Save</Button>
```
Оф. docs: [ant.design/components/button](https://ant.design/components/button/)  
[⬆ К содержанию](#содержание)

## FloatButton
Описание: Плавающая кнопка быстрых действий.
| Prop | Type | Default | Описание |
|---|---|---|---|
| `icon` | `ReactNode` | `-` | Иконка кнопки. |
| `type` | `default \| primary` | `default` | Стиль. |
| `shape` | `circle \| square` | `circle` | Форма кнопки. |
| `tooltip` | `ReactNode \| TooltipProps` | `-` | Подсказка. |
| `href` | `string` | `-` | Поведение ссылки. |
| `onClick` | `(event) => void` | `-` | Обработчик клика. |
Пример:
```tsx
<FloatButton icon={<PlusOutlined />} />
```
Оф. docs: [ant.design/components/float-button](https://ant.design/components/float-button/)  
[⬆ К содержанию](#содержание)

## Icon
Описание: Иконки через пакет `@ant-design/icons`.
| Prop | Type | Default | Описание |
|---|---|---|---|
| `spin` | `boolean` | `false` | Вращение иконки. |
| `rotate` | `number` | `-` | Поворот в градусах. |
| `style` | `CSSProperties` | `-` | Inline-стили. |
| `className` | `string` | `-` | CSS-класс. |
Пример:
```tsx
<SearchOutlined style={{ fontSize: 16 }} />
```
Оф. docs: [ant.design/components/icon](https://ant.design/components/icon/)  
[⬆ К содержанию](#содержание)

## Typography
Описание: Текстовые элементы (`Text`, `Title`, `Paragraph`, `Link`).
| Prop | Type | Default | Описание |
|---|---|---|---|
| `type` | `secondary \| success \| warning \| danger` | `-` | Тон текста. |
| `ellipsis` | `boolean \| object` | `false` | Обрезка текста. |
| `copyable` | `boolean \| object` | `false` | Копирование текста. |
| `editable` | `boolean \| object` | `false` | Редактирование текста. |
| `level` | `1..5` | `1` (для `Title`) | Уровень заголовка. |
Пример:
```tsx
<Typography.Title level={3}>Dashboard</Typography.Title>
```
Оф. docs: [ant.design/components/typography](https://ant.design/components/typography/)  
[⬆ К содержанию](#содержание)

## Divider
Описание: Разделитель контента.
| Prop | Type | Default | Описание |
|---|---|---|---|
| `type` | `horizontal \| vertical` | `horizontal` | Тип divider. |
| `orientation` | `start \| center \| end` | `center` | Позиция текста. |
| `variant` | `solid \| dashed \| dotted` | `solid` | Вариант линии. |
| `plain` | `boolean` | `false` | Обычный текст без акцента. |
| `orientationMargin` | `number \| string` | `-` | Отступ от края. |
| `children` | `ReactNode` | `-` | Контент в divider. |
Пример:
```tsx
<Divider orientation="left">Filters</Divider>
```
Оф. docs: [ant.design/components/divider](https://ant.design/components/divider/)  
[⬆ К содержанию](#содержание)

## Flex
Описание: Flex-контейнер.
| Prop | Type | Default | Описание |
|---|---|---|---|
| `vertical` | `boolean` | `false` | Вертикальный флекс. |
| `justify` | `CSS justify-content` | `normal` | Горизонтальное выравнивание. |
| `align` | `CSS align-items` | `normal` | Вертикальное выравнивание. |
| `gap` | `number \| string` | `-` | Расстояние между элементами. |
| `wrap` | `CSS flex-wrap` | `nowrap` | Перенос строк. |
Пример:
```tsx
<Flex gap={8} align="center"><Tag>New</Tag><Tag>Beta</Tag></Flex>
```
Оф. docs: [ant.design/components/flex](https://ant.design/components/flex/)  
[⬆ К содержанию](#содержание)

## Grid
Описание: Сетка `Row`/`Col`.
| Prop | Type | Default | Описание |
|---|---|---|---|
| `gutter` | `number \| object \| [h, v]` | `0` | Отступы сетки. |
| `span` | `number` | `-` | Ширина колонки (1-24). |
| `offset` | `number` | `0` | Смещение колонки. |
| `order` | `number` | `0` | Порядок колонки. |
| `xs/sm/md/lg/xl/xxl` | `number \| object` | `-` | Адаптивные брейкпоинты. |
Пример:
```tsx
<Row gutter={16}><Col span={12}>A</Col><Col span={12}>B</Col></Row>
```
Оф. docs: [ant.design/components/grid](https://ant.design/components/grid/)  
[⬆ К содержанию](#содержание)

## Layout
Описание: Каркас страницы (`Layout`, `Header`, `Sider`, `Content`, `Footer`).
| Prop | Type | Default | Описание |
|---|---|---|---|
| `hasSider` | `boolean` | `-` | Ускоряет вычисление layout с сайдбаром. |
| `width` | `number \| string` | `200` | Ширина `Sider`. |
| `collapsed` | `boolean` | `false` | Свернутое состояние `Sider`. |
| `breakpoint` | `xs..xxl` | `-` | Автосворачивание по брейкпоинту. |
| `onCollapse` | `(collapsed, type) => void` | `-` | Коллбек collapse. |
Пример:
```tsx
<Layout><Layout.Sider width={240} /><Layout.Content /></Layout>
```
Оф. docs: [ant.design/components/layout](https://ant.design/components/layout/)  
[⬆ К содержанию](#содержание)

## Space
Описание: Отступы между элементами.
| Prop | Type | Default | Описание |
|---|---|---|---|
| `size` | `small \| middle \| large \| number` | `small` | Размер отступа. |
| `direction` | `horizontal \| vertical` | `horizontal` | Направление. |
| `align` | `start \| end \| center \| baseline` | `-` | Выравнивание по поперечной оси. |
| `wrap` | `boolean` | `false` | Перенос элементов. |
| `split` | `ReactNode` | `-` | Разделитель между item. |
Пример:
```tsx
<Space size="middle"><Button>One</Button><Button>Two</Button></Space>
```
Оф. docs: [ant.design/components/space](https://ant.design/components/space/)  
[⬆ К содержанию](#содержание)

## Splitter
Описание: Разделяемые resize-панели.
| Prop | Type | Default | Описание |
|---|---|---|---|
| `layout` | `horizontal \| vertical` | `horizontal` | Направление разделителя. |
| `defaultSize` | `number \| string` | `-` | Стартовый размер панели. |
| `min` | `number \| string` | `-` | Минимальный размер панели. |
| `max` | `number \| string` | `-` | Максимальный размер панели. |
| `onResize` | `(sizes) => void` | `-` | Изменение размеров. |
Пример:
```tsx
<Splitter><Splitter.Panel defaultSize="30%" /><Splitter.Panel /></Splitter>
```
Оф. docs: [ant.design/components/splitter](https://ant.design/components/splitter/)  
[⬆ К содержанию](#содержание)

## Anchor
Описание: Якорная навигация внутри страницы.
| Prop | Type | Default | Описание |
|---|---|---|---|
| `items` | `AnchorItem[]` | `-` | Список якорей. |
| `offsetTop` | `number` | `0` | Смещение активного якоря. |
| `targetOffset` | `number` | `-` | Смещение при скролле к якорю. |
| `affix` | `boolean` | `true` | Прилипание блока anchor. |
| `onChange` | `(currentLink) => void` | `-` | Смена активного якоря. |
Пример:
```tsx
<Anchor items={[{ key: 'a', href: '#a', title: 'Section A' }]} />
```
Оф. docs: [ant.design/components/anchor](https://ant.design/components/anchor/)  
[⬆ К содержанию](#содержание)

## Breadcrumb
Описание: Хлебные крошки.
| Prop | Type | Default | Описание |
|---|---|---|---|
| `items` | `BreadcrumbItemType[]` | `-` | Элементы крошек. |
| `separator` | `ReactNode` | `/` | Разделитель. |
| `itemRender` | `(route, params, routes, paths) => ReactNode` | `-` | Кастомный рендер item. |
| `params` | `object` | `-` | Параметры роутинга. |
| `routes` | `Route[]` | `-` | Legacy-формат. |
Пример:
```tsx
<Breadcrumb items={[{ title: 'Home' }, { title: 'Users' }]} />
```
Оф. docs: [ant.design/components/breadcrumb](https://ant.design/components/breadcrumb/)  
[⬆ К содержанию](#содержание)

## Dropdown
Описание: Выпадающее меню.
| Prop | Type | Default | Описание |
|---|---|---|---|
| `menu` | `MenuProps` | `-` | Конфиг меню (`items`, `onClick`). |
| `trigger` | `('click' \| 'hover' \| 'contextMenu')[]` | `['hover']` | Триггеры открытия. |
| `placement` | `bottomLeft \| ...` | `bottomLeft` | Позиция popup. |
| `open` | `boolean` | `-` | Контролируемое открытие. |
| `onOpenChange` | `(open, info) => void` | `-` | Коллбек открытия/закрытия. |
| `disabled` | `boolean` | `false` | Отключение dropdown. |
Пример:
```tsx
<Dropdown menu={{ items }} trigger={['click']}><Button>Actions</Button></Dropdown>
```
Оф. docs: [ant.design/components/dropdown](https://ant.design/components/dropdown/)  
[⬆ К содержанию](#содержание)

## Menu
Описание: Меню навигации.
| Prop | Type | Default | Описание |
|---|---|---|---|
| `items` | `ItemType[]` | `-` | Конфигурация пунктов. |
| `mode` | `vertical \| horizontal \| inline` | `vertical` | Режим меню. |
| `selectedKeys` | `string[]` | `-` | Активные пункты. |
| `openKeys` | `string[]` | `-` | Открытые submenu. |
| `inlineCollapsed` | `boolean` | `false` | Collapse режима `inline`. |
| `onClick` | `(info) => void` | `-` | Клик по пункту. |
Пример:
```tsx
<Menu mode="inline" items={[{ key: '1', label: 'Dashboard' }]} />
```
Оф. docs: [ant.design/components/menu](https://ant.design/components/menu/)  
[⬆ К содержанию](#содержание)

## Pagination
Описание: Пагинация.
| Prop | Type | Default | Описание |
|---|---|---|---|
| `current` | `number` | `1` | Текущая страница. |
| `total` | `number` | `0` | Общее число элементов. |
| `pageSize` | `number` | `10` | Размер страницы. |
| `showSizeChanger` | `boolean` | `false` | Переключатель page size. |
| `showQuickJumper` | `boolean \| object` | `false` | Быстрый переход к странице. |
| `onChange` | `(page, pageSize) => void` | `-` | Смена страницы. |
Пример:
```tsx
<Pagination current={1} total={500} showSizeChanger />
```
Оф. docs: [ant.design/components/pagination](https://ant.design/components/pagination/)  
[⬆ К содержанию](#содержание)

## Steps
Описание: Пошаговый прогресс.
| Prop | Type | Default | Описание |
|---|---|---|---|
| `items` | `StepItem[]` | `-` | Список шагов. |
| `current` | `number` | `0` | Текущий шаг. |
| `status` | `wait \| process \| finish \| error` | `process` | Статус шага/группы. |
| `direction` | `horizontal \| vertical` | `horizontal` | Направление. |
| `labelPlacement` | `horizontal \| vertical` | `horizontal` | Размещение label. |
| `onChange` | `(current) => void` | `-` | Клик по шагу. |
Пример:
```tsx
<Steps current={1} items={[{ title: 'Start' }, { title: 'Done' }]} />
```
Оф. docs: [ant.design/components/steps](https://ant.design/components/steps/)  
[⬆ К содержанию](#содержание)

## Tabs
Описание: Вкладки.
| Prop | Type | Default | Описание |
|---|---|---|---|
| `items` | `TabItemType[]` | `-` | Конфиг вкладок. |
| `activeKey` | `string` | `-` | Активная вкладка. |
| `defaultActiveKey` | `string` | `-` | Стартовая вкладка. |
| `type` | `line \| card \| editable-card` | `line` | Тип вкладок. |
| `tabPosition` | `top \| right \| bottom \| left` | `top` | Позиция. |
| `onChange` | `(activeKey) => void` | `-` | Смена вкладки. |
Пример:
```tsx
<Tabs items={[{ key: '1', label: 'A', children: 'Content A' }]} />
```
Оф. docs: [ant.design/components/tabs](https://ant.design/components/tabs/)  
[⬆ К содержанию](#содержание)

## AutoComplete
Описание: Ввод с подсказками.
| Prop | Type | Default | Описание |
|---|---|---|---|
| `options` | `{ value: string }[]` | `[]` | Опции подсказок. |
| `value` | `string` | `-` | Текущее значение. |
| `defaultValue` | `string` | `-` | Начальное значение. |
| `allowClear` | `boolean` | `false` | Кнопка очистки. |
| `onSearch` | `(text) => void` | `-` | Поиск по вводу. |
| `onSelect` | `(value, option) => void` | `-` | Выбор опции. |
Пример:
```tsx
<AutoComplete options={[{ value: 'apple' }]} onSearch={setQuery} />
```
Оф. docs: [ant.design/components/auto-complete](https://ant.design/components/auto-complete/)  
[⬆ К содержанию](#содержание)

## Cascader
Описание: Каскадный выбор по иерархии.
| Prop | Type | Default | Описание |
|---|---|---|---|
| `options` | `CascaderOptionType[]` | `[]` | Дерево опций. |
| `value` | `string[] \| number[]` | `-` | Выбранный путь. |
| `multiple` | `boolean` | `false` | Множественный выбор. |
| `changeOnSelect` | `boolean` | `false` | Выбор на промежуточных узлах. |
| `showSearch` | `boolean \| object` | `false` | Поиск в дереве. |
| `onChange` | `(value, selectedOptions) => void` | `-` | Смена значения. |
Пример:
```tsx
<Cascader options={options} placeholder="Select region" />
```
Оф. docs: [ant.design/components/cascader](https://ant.design/components/cascader/)  
[⬆ К содержанию](#содержание)

## Checkbox
Описание: Флажок/группа флажков.
| Prop | Type | Default | Описание |
|---|---|---|---|
| `checked` | `boolean` | `false` | Текущее состояние. |
| `defaultChecked` | `boolean` | `false` | Начальное состояние. |
| `indeterminate` | `boolean` | `false` | Промежуточное состояние. |
| `disabled` | `boolean` | `false` | Отключение поля. |
| `onChange` | `(e) => void` | `-` | Смена состояния. |
| `options` | `CheckboxOptionType[]` | `-` | Для `Checkbox.Group`. |
Пример:
```tsx
<Checkbox checked={checked} onChange={e => setChecked(e.target.checked)}>Agree</Checkbox>
```
Оф. docs: [ant.design/components/checkbox](https://ant.design/components/checkbox/)  
[⬆ К содержанию](#содержание)

## ColorPicker
Описание: Выбор цвета.
| Prop | Type | Default | Описание |
|---|---|---|---|
| `value` | `Color \| string` | `-` | Контролируемый цвет. |
| `defaultValue` | `Color \| string` | `-` | Начальный цвет. |
| `disabled` | `boolean` | `false` | Отключение. |
| `showText` | `boolean \| (color) => ReactNode` | `false` | Показ HEX/текста цвета. |
| `onChange` | `(color, hex) => void` | `-` | Смена цвета. |
| `onChangeComplete` | `(color) => void` | `-` | Завершение выбора. |
Пример:
```tsx
<ColorPicker value={color} onChange={(_, hex) => setColor(hex)} />
```
Оф. docs: [ant.design/components/color-picker](https://ant.design/components/color-picker/)  
[⬆ К содержанию](#содержание)

## DatePicker
Описание: Выбор даты/времени/периода.
| Prop | Type | Default | Описание |
|---|---|---|---|
| `picker` | `date \| week \| month \| quarter \| year` | `date` | Режим выбора. |
| `value` | `dayjs` | `-` | Значение (controlled). |
| `format` | `string \| string[]` | locale | Формат отображения. |
| `disabledDate` | `(currentDate) => boolean` | `-` | Блокировка дат. |
| `allowClear` | `boolean` | `true` | Очистка значения. |
| `onChange` | `(date, dateString) => void` | `-` | Смена даты. |
Пример:
```tsx
<DatePicker picker="date" onChange={(_, str) => console.log(str)} />
```
Оф. docs: [ant.design/components/date-picker](https://ant.design/components/date-picker/)  
[⬆ К содержанию](#содержание)

## Form
Описание: Форма с валидацией.
| Prop | Type | Default | Описание |
|---|---|---|---|
| `form` | `FormInstance` | auto | Внешний instance формы. |
| `layout` | `horizontal \| vertical \| inline` | `horizontal` | Layout формы. |
| `initialValues` | `object` | `-` | Начальные значения полей. |
| `validateTrigger` | `string \| string[]` | `onChange` | События валидации. |
| `onFinish` | `(values) => void` | `-` | Успешный submit. |
| `onValuesChange` | `(changedValues, allValues) => void` | `-` | Реакция на изменение полей. |
Пример:
```tsx
<Form onFinish={onFinish}><Form.Item name="email" rules={[{ required: true }]}><Input /></Form.Item></Form>
```
Оф. docs: [ant.design/components/form](https://ant.design/components/form/)  
[⬆ К содержанию](#содержание)

## Input
Описание: Текстовый ввод.
| Prop | Type | Default | Описание |
|---|---|---|---|
| `value` | `string` | `-` | Значение поля. |
| `placeholder` | `string` | `-` | Placeholder. |
| `allowClear` | `boolean` | `false` | Очистка ввода. |
| `prefix` | `ReactNode` | `-` | Элемент слева. |
| `suffix` | `ReactNode` | `-` | Элемент справа. |
| `onChange` | `(e) => void` | `-` | Изменение ввода. |
Пример:
```tsx
<Input placeholder="Search..." allowClear prefix={<SearchOutlined />} />
```
Оф. docs: [ant.design/components/input](https://ant.design/components/input/)  
[⬆ К содержанию](#содержание)

## InputNumber
Описание: Числовой ввод.
| Prop | Type | Default | Описание |
|---|---|---|---|
| `value` | `number \| null` | `-` | Значение. |
| `min` | `number` | `-Infinity` | Минимум. |
| `max` | `number` | `Infinity` | Максимум. |
| `step` | `number \| string` | `1` | Шаг изменения. |
| `precision` | `number` | `-` | Кол-во знаков после запятой. |
| `onChange` | `(value) => void` | `-` | Изменение значения. |
Пример:
```tsx
<InputNumber min={0} max={100} step={1} />
```
Оф. docs: [ant.design/components/input-number](https://ant.design/components/input-number/)  
[⬆ К содержанию](#содержание)

## Mentions
Описание: Поле с упоминаниями.
| Prop | Type | Default | Описание |
|---|---|---|---|
| `value` | `string` | `-` | Значение текста. |
| `options` | `{ value: string; label?: ReactNode }[]` | `[]` | Подсказки для mention. |
| `prefix` | `string \| string[]` | `'@'` | Триггер mention. |
| `split` | `string` | `' '` | Разделитель token. |
| `onSearch` | `(text, prefix) => void` | `-` | Поиск опций. |
| `onChange` | `(text) => void` | `-` | Изменение текста. |
Пример:
```tsx
<Mentions options={[{ value: 'alice' }]} />
```
Оф. docs: [ant.design/components/mentions](https://ant.design/components/mentions/)  
[⬆ К содержанию](#содержание)

## Radio
Описание: Выбор одного значения.
| Prop | Type | Default | Описание |
|---|---|---|---|
| `value` | `any` | `-` | Текущее значение. |
| `options` | `(string \| number \| RadioOptionType)[]` | `-` | Опции группы. |
| `optionType` | `default \| button` | `default` | Тип рендера опций. |
| `buttonStyle` | `outline \| solid` | `outline` | Стиль radio button. |
| `disabled` | `boolean` | `false` | Блокировка. |
| `onChange` | `(e) => void` | `-` | Изменение выбора. |
Пример:
```tsx
<Radio.Group options={['A', 'B']} optionType="button" />
```
Оф. docs: [ant.design/components/radio](https://ant.design/components/radio/)  
[⬆ К содержанию](#содержание)

## Rate
Описание: Рейтинг.
| Prop | Type | Default | Описание |
|---|---|---|---|
| `value` | `number` | `-` | Текущее значение. |
| `count` | `number` | `5` | Количество звезд. |
| `allowHalf` | `boolean` | `false` | Половинчатые значения. |
| `allowClear` | `boolean` | `true` | Очистка по повторному клику. |
| `disabled` | `boolean` | `false` | Readonly режим. |
| `onChange` | `(value) => void` | `-` | Изменение рейтинга. |
Пример:
```tsx
<Rate allowHalf defaultValue={3.5} />
```
Оф. docs: [ant.design/components/rate](https://ant.design/components/rate/)  
[⬆ К содержанию](#содержание)

## Select
Описание: Выпадающий выбор.
| Prop | Type | Default | Описание |
|---|---|---|---|
| `options` | `{ label, value }[]` | `-` | Список опций. |
| `value` | `string \| number \| LabeledValue \| ...` | `-` | Значение (controlled). |
| `mode` | `multiple \| tags` | `-` | Множественный режим. |
| `showSearch` | `boolean` | `false` single / `true` multiple | Поиск по опциям. |
| `allowClear` | `boolean \| { clearIcon?: ReactNode }` | `false` | Очистка значения. |
| `placement` | `bottomLeft \| bottomRight \| topLeft \| topRight` | `bottomLeft` | Позиция popup. |
| `open` | `boolean` | `-` | Контроль открытия. |
| `onChange` | `(value, option) => void` | `-` | Изменение выбора. |
Пример:
```tsx
<Select options={[{ label: 'One', value: 1 }]} showSearch allowClear />
```
Оф. docs: [ant.design/components/select](https://ant.design/components/select/)  
[⬆ К содержанию](#содержание)

## Slider
Описание: Ползунок.
| Prop | Type | Default | Описание |
|---|---|---|---|
| `value` | `number \| [number, number]` | `-` | Значение. |
| `range` | `boolean` | `false` | Диапазон значений. |
| `min` | `number` | `0` | Минимум. |
| `max` | `number` | `100` | Максимум. |
| `step` | `number \| null` | `1` | Шаг. |
| `onChange` | `(value) => void` | `-` | Изменение значения. |
Пример:
```tsx
<Slider range min={0} max={100} defaultValue={[20, 80]} />
```
Оф. docs: [ant.design/components/slider](https://ant.design/components/slider/)  
[⬆ К содержанию](#содержание)

## Switch
Описание: Переключатель.
| Prop | Type | Default | Описание |
|---|---|---|---|
| `checked` | `boolean` | `false` | Текущее состояние. |
| `defaultChecked` | `boolean` | `false` | Начальное состояние. |
| `disabled` | `boolean` | `false` | Отключение. |
| `checkedChildren` | `ReactNode` | `-` | Контент активного состояния. |
| `unCheckedChildren` | `ReactNode` | `-` | Контент неактивного состояния. |
| `onChange` | `(checked, event) => void` | `-` | Изменение состояния. |
Пример:
```tsx
<Switch checked={enabled} onChange={setEnabled} />
```
Оф. docs: [ant.design/components/switch](https://ant.design/components/switch/)  
[⬆ К содержанию](#содержание)

## TimePicker
Описание: Выбор времени.
| Prop | Type | Default | Описание |
|---|---|---|---|
| `value` | `dayjs` | `-` | Значение времени. |
| `format` | `string` | `HH:mm:ss` | Формат отображения. |
| `use12Hours` | `boolean` | `false` | 12-часовой формат. |
| `minuteStep` | `number` | `1` | Шаг минут. |
| `secondStep` | `number` | `1` | Шаг секунд. |
| `onChange` | `(time, timeString) => void` | `-` | Изменение времени. |
Пример:
```tsx
<TimePicker format="HH:mm" />
```
Оф. docs: [ant.design/components/time-picker](https://ant.design/components/time-picker/)  
[⬆ К содержанию](#содержание)

## Transfer
Описание: Перенос элементов между списками.
| Prop | Type | Default | Описание |
|---|---|---|---|
| `dataSource` | `TransferItem[]` | `[]` | Источник элементов. |
| `targetKeys` | `string[]` | `[]` | Элементы в правом списке. |
| `selectedKeys` | `string[]` | `[]` | Текущие выделения. |
| `render` | `(item) => ReactNode` | `-` | Рендер элемента. |
| `showSearch` | `boolean` | `false` | Поиск в списках. |
| `onChange` | `(targetKeys, direction, moveKeys) => void` | `-` | Изменение состава target. |
Пример:
```tsx
<Transfer dataSource={data} targetKeys={targetKeys} onChange={setTargetKeys} render={i => i.title} />
```
Оф. docs: [ant.design/components/transfer](https://ant.design/components/transfer/)  
[⬆ К содержанию](#содержание)

## TreeSelect
Описание: Выбор из дерева.
| Prop | Type | Default | Описание |
|---|---|---|---|
| `treeData` | `TreeNode[]` | `[]` | Данные дерева. |
| `value` | `string \| string[]` | `-` | Выбранные значения. |
| `multiple` | `boolean` | `false` | Множественный выбор. |
| `treeCheckable` | `boolean` | `false` | Чекбоксы в узлах. |
| `showSearch` | `boolean` | `false` | Поиск. |
| `onChange` | `(value, label, extra) => void` | `-` | Смена выбора. |
Пример:
```tsx
<TreeSelect treeData={treeData} treeCheckable showSearch />
```
Оф. docs: [ant.design/components/tree-select](https://ant.design/components/tree-select/)  
[⬆ К содержанию](#содержание)

## Upload
Описание: Загрузка файлов.
| Prop | Type | Default | Описание |
|---|---|---|---|
| `action` | `string \| (file) => Promise<string>` | `-` | URL загрузки. |
| `fileList` | `UploadFile[]` | `-` | Контролируемый список файлов. |
| `beforeUpload` | `(file, fileList) => boolean \| Promise<File> \| Upload.LIST_IGNORE` | `-` | Предобработка/валидация файла. |
| `multiple` | `boolean` | `false` | Выбор нескольких файлов. |
| `listType` | `text \| picture \| picture-card \| picture-circle` | `text` | Тип списка файлов. |
| `onChange` | `(info) => void` | `-` | Статус загрузки/изменения. |
Пример:
```tsx
<Upload action="/api/upload"><Button>Upload</Button></Upload>
```
Оф. docs: [ant.design/components/upload](https://ant.design/components/upload/)  
[⬆ К содержанию](#содержание)

## Avatar
Описание: Аватар пользователя.
| Prop | Type | Default | Описание |
|---|---|---|---|
| `src` | `string \| ReactNode` | `-` | Источник аватара. |
| `icon` | `ReactNode` | `-` | Иконка вместо изображения. |
| `shape` | `circle \| square` | `circle` | Форма аватара. |
| `size` | `number \| small \| default \| large` | `default` | Размер. |
| `alt` | `string` | `-` | Alt для изображения. |
| `gap` | `number` | `4` | Отступ текста от края. |
Пример:
```tsx
<Avatar src="/user.png" size={40} />
```
Оф. docs: [ant.design/components/avatar](https://ant.design/components/avatar/)  
[⬆ К содержанию](#содержание)

## Badge
Описание: Счетчик/статус.
| Prop | Type | Default | Описание |
|---|---|---|---|
| `count` | `number \| ReactNode` | `-` | Значение badge. |
| `overflowCount` | `number` | `99` | Порог отображения `99+`. |
| `dot` | `boolean` | `false` | Режим точки. |
| `status` | `success \| processing \| default \| error \| warning` | `default` | Статусный бейдж. |
| `text` | `ReactNode` | `-` | Текст рядом со status badge. |
| `showZero` | `boolean` | `false` | Показывать ноль. |
Пример:
```tsx
<Badge count={12}><Avatar shape="square" /></Badge>
```
Оф. docs: [ant.design/components/badge](https://ant.design/components/badge/)  
[⬆ К содержанию](#содержание)

## Calendar
Описание: Календарь.
| Prop | Type | Default | Описание |
|---|---|---|---|
| `value` | `dayjs` | `-` | Текущая дата. |
| `mode` | `month \| year` | `month` | Режим календаря. |
| `fullscreen` | `boolean` | `true` | Полноэкранный вид. |
| `cellRender` | `(date, info) => ReactNode` | `-` | Кастом ячеек. |
| `onSelect` | `(date, info) => void` | `-` | Выбор даты. |
| `onPanelChange` | `(date, mode) => void` | `-` | Изменение панели. |
Пример:
```tsx
<Calendar fullscreen={false} />
```
Оф. docs: [ant.design/components/calendar](https://ant.design/components/calendar/)  
[⬆ К содержанию](#содержание)

## Card
Описание: Карточка контента.
| Prop | Type | Default | Описание |
|---|---|---|---|
| `title` | `ReactNode` | `-` | Заголовок card. |
| `extra` | `ReactNode` | `-` | Действие справа в header. |
| `hoverable` | `boolean` | `false` | Hover-эффект. |
| `cover` | `ReactNode` | `-` | Обложка/изображение. |
| `actions` | `ReactNode[]` | `-` | Набор действий в footer. |
| `size` | `default \| small` | `default` | Размер карточки. |
Пример:
```tsx
<Card title="Profile" extra={<a>Edit</a>}>Content</Card>
```
Оф. docs: [ant.design/components/card](https://ant.design/components/card/)  
[⬆ К содержанию](#содержание)

## Carousel
Описание: Слайдер.
| Prop | Type | Default | Описание |
|---|---|---|---|
| `autoplay` | `boolean` | `false` | Автопрокрутка. |
| `dots` | `boolean \| { className?: string }` | `true` | Пагинационные точки. |
| `effect` | `scrollx \| fade` | `scrollx` | Эффект смены слайда. |
| `beforeChange` | `(from, to) => void` | `-` | Перед сменой слайда. |
| `afterChange` | `(current) => void` | `-` | После смены слайда. |
| `draggable` | `boolean` | `false` | Drag-перетаскивание. |
Пример:
```tsx
<Carousel autoplay><div>1</div><div>2</div></Carousel>
```
Оф. docs: [ant.design/components/carousel](https://ant.design/components/carousel/)  
[⬆ К содержанию](#содержание)

## Collapse
Описание: Раскрывающиеся панели.
| Prop | Type | Default | Описание |
|---|---|---|---|
| `items` | `CollapseProps['items']` | `-` | Панели (v5+). |
| `activeKey` | `string \| string[]` | `-` | Активные панели. |
| `defaultActiveKey` | `string \| string[]` | `-` | Начально активные панели. |
| `accordion` | `boolean` | `false` | Разрешить только одну панель. |
| `ghost` | `boolean` | `false` | Прозрачный фон. |
| `onChange` | `(key) => void` | `-` | Изменение активных панелей. |
Пример:
```tsx
<Collapse items={[{ key: '1', label: 'Panel', children: 'Text' }]} />
```
Оф. docs: [ant.design/components/collapse](https://ant.design/components/collapse/)  
[⬆ К содержанию](#содержание)

## Descriptions
Описание: Ключ-значение блок.
| Prop | Type | Default | Описание |
|---|---|---|---|
| `items` | `DescriptionsItem[]` | `-` | Элементы описания. |
| `title` | `ReactNode` | `-` | Заголовок блока. |
| `column` | `number \| object` | `3` | Количество колонок. |
| `bordered` | `boolean` | `false` | Границы таблицы. |
| `size` | `default \| middle \| small` | `default` | Размер. |
| `layout` | `horizontal \| vertical` | `horizontal` | Компоновка label/value. |
Пример:
```tsx
<Descriptions title="User" items={[{ key: '1', label: 'Name', children: 'Alex' }]} />
```
Оф. docs: [ant.design/components/descriptions](https://ant.design/components/descriptions/)  
[⬆ К содержанию](#содержание)

## Empty
Описание: Пустое состояние.
| Prop | Type | Default | Описание |
|---|---|---|---|
| `description` | `ReactNode` | `-` | Текст пустого состояния. |
| `image` | `ReactNode \| string` | `Empty.PRESENTED_IMAGE_DEFAULT` | Изображение. |
| `imageStyle` | `CSSProperties` | `-` | Стиль изображения. |
| `children` | `ReactNode` | `-` | Доп. действия (кнопка и т.д.). |
Пример:
```tsx
<Empty description="No data" />
```
Оф. docs: [ant.design/components/empty](https://ant.design/components/empty/)  
[⬆ К содержанию](#содержание)

## Image
Описание: Изображение с preview.
| Prop | Type | Default | Описание |
|---|---|---|---|
| `src` | `string` | `-` | URL изображения. |
| `width` | `number \| string` | `-` | Ширина. |
| `height` | `number \| string` | `-` | Высота. |
| `preview` | `boolean \| PreviewType` | `true` | Режим preview. |
| `placeholder` | `ReactNode` | `-` | Placeholder при загрузке. |
| `fallback` | `string` | `-` | Fallback URL при ошибке. |
Пример:
```tsx
<Image width={200} src="/cover.jpg" />
```
Оф. docs: [ant.design/components/image](https://ant.design/components/image/)  
[⬆ К содержанию](#содержание)

## List
Описание: Список данных.
| Prop | Type | Default | Описание |
|---|---|---|---|
| `dataSource` | `any[]` | `-` | Источник данных списка. |
| `renderItem` | `(item, index) => ReactNode` | `-` | Рендер item. |
| `itemLayout` | `horizontal \| vertical` | `horizontal` | Layout элемента. |
| `pagination` | `boolean \| PaginationConfig` | `false` | Пагинация. |
| `grid` | `{ gutter, column, ... }` | `-` | Grid-режим списка. |
| `loading` | `boolean \| SpinProps` | `false` | Загрузка. |
| `header` | `ReactNode` | `-` | Header списка. |
| `footer` | `ReactNode` | `-` | Footer списка. |
Пример:
```tsx
<List dataSource={data} renderItem={item => <List.Item>{item}</List.Item>} />
```
Оф. docs: [ant.design/components/list](https://ant.design/components/list/)  
[⬆ К содержанию](#содержание)

## Popover
Описание: Всплывающая карточка.
| Prop | Type | Default | Описание |
|---|---|---|---|
| `content` | `ReactNode` | `-` | Контент popover. |
| `title` | `ReactNode` | `-` | Заголовок popover. |
| `trigger` | `hover \| focus \| click \| contextMenu` | `hover` | Триггер показа. |
| `placement` | `top \| left \| right \| bottom \| ...` | `top` | Позиционирование. |
| `open` | `boolean` | `-` | Контроль видимости. |
| `onOpenChange` | `(open) => void` | `-` | Смена состояния. |
Пример:
```tsx
<Popover content="Details"><Button>Hover</Button></Popover>
```
Оф. docs: [ant.design/components/popover](https://ant.design/components/popover/)  
[⬆ К содержанию](#содержание)

## QRCode
Описание: Генерация QR-кода.
| Prop | Type | Default | Описание |
|---|---|---|---|
| `value` | `string` | `-` | Значение QR. |
| `size` | `number` | `160` | Размер кода. |
| `color` | `string` | `#000` | Цвет точек QR. |
| `bgColor` | `string` | `transparent` | Цвет фона. |
| `status` | `active \| expired \| loading` | `active` | Статус отображения. |
| `icon` | `string` | `-` | Иконка в центре QR. |
Пример:
```tsx
<QRCode value="https://ant.design" />
```
Оф. docs: [ant.design/components/qr-code](https://ant.design/components/qr-code/)  
[⬆ К содержанию](#содержание)

## Segmented
Описание: Сегментированный переключатель.
| Prop | Type | Default | Описание |
|---|---|---|---|
| `options` | `(string \| number \| SegmentedItemType)[]` | `[]` | Список опций. |
| `value` | `string \| number` | `-` | Текущее значение. |
| `size` | `large \| middle \| small` | `middle` | Размер. |
| `block` | `boolean` | `false` | Растянуть на всю ширину. |
| `disabled` | `boolean` | `false` | Отключить контроль. |
| `onChange` | `(value) => void` | `-` | Изменение значения. |
Пример:
```tsx
<Segmented options={['Day', 'Week', 'Month']} />
```
Оф. docs: [ant.design/components/segmented](https://ant.design/components/segmented/)  
[⬆ К содержанию](#содержание)

## Statistic
Описание: Числовая метрика.
| Prop | Type | Default | Описание |
|---|---|---|---|
| `title` | `ReactNode` | `-` | Подпись метрики. |
| `value` | `number \| string` | `0` | Значение. |
| `precision` | `number` | `-` | Точность дробной части. |
| `prefix` | `ReactNode` | `-` | Префикс. |
| `suffix` | `ReactNode` | `-` | Суффикс. |
| `valueStyle` | `CSSProperties` | `-` | Стили значения. |
Пример:
```tsx
<Statistic title="Active Users" value={112893} />
```
Оф. docs: [ant.design/components/statistic](https://ant.design/components/statistic/)  
[⬆ К содержанию](#содержание)

## Table
Описание: Таблица данных.
| Prop | Type | Default | Описание |
|---|---|---|---|
| `columns` | `ColumnsType<T>` | `[]` | Конфиг колонок. |
| `dataSource` | `T[]` | `[]` | Данные строк. |
| `rowKey` | `string \| (record) => string` | `key` | Ключ строки. |
| `pagination` | `false \| PaginationConfig` | `-` | Пагинация таблицы. |
| `loading` | `boolean \| SpinProps` | `false` | Загрузка таблицы. |
| `scroll` | `object` | `-` | Скролл/фиксированные колонки. |
| `onChange` | `(pagination, filters, sorter, extra) => void` | `-` | Событие изменений. |
Пример:
```tsx
<Table columns={columns} dataSource={rows} rowKey="id" />
```
Оф. docs: [ant.design/components/table](https://ant.design/components/table/)  
[⬆ К содержанию](#содержание)

## Tag
Описание: Мета-ярлык.
| Prop | Type | Default | Описание |
|---|---|---|---|
| `color` | `string` | `default` | Цвет тега. |
| `icon` | `ReactNode` | `-` | Иконка перед текстом. |
| `closable` | `boolean` | `false` | Возможность закрыть. |
| `onClose` | `(e) => void` | `-` | Закрытие тега. |
| `bordered` | `boolean` | `true` | Показывать границу. |
Пример:
```tsx
<Tag color="blue" closable>Design</Tag>
```
Оф. docs: [ant.design/components/tag](https://ant.design/components/tag/)  
[⬆ К содержанию](#содержание)

## Timeline
Описание: Хронология событий.
| Prop | Type | Default | Описание |
|---|---|---|---|
| `items` | `TimelineItemProps[]` | `[]` | События таймлайна. |
| `mode` | `left \| alternate \| right` | `-` | Раскладка элементов. |
| `pending` | `boolean \| ReactNode` | `false` | Хвост "pending". |
| `pendingDot` | `ReactNode` | `-` | Иконка pending узла. |
| `reverse` | `boolean` | `false` | Обратный порядок. |
Пример:
```tsx
<Timeline items={[{ children: 'Create task' }, { children: 'Deploy' }]} />
```
Оф. docs: [ant.design/components/timeline](https://ant.design/components/timeline/)  
[⬆ К содержанию](#содержание)

## Tooltip
Описание: Подсказка.
| Prop | Type | Default | Описание |
|---|---|---|---|
| `title` | `ReactNode` | `-` | Контент tooltip. |
| `placement` | `top \| left \| right \| bottom \| ...` | `top` | Позиция. |
| `trigger` | `hover \| focus \| click \| contextMenu` | `hover` | Триггер показа. |
| `open` | `boolean` | `-` | Контролируемая видимость. |
| `color` | `string` | `-` | Цвет tooltip. |
| `onOpenChange` | `(open) => void` | `-` | Изменение состояния. |
Пример:
```tsx
<Tooltip title="Info"><Button>Hover</Button></Tooltip>
```
Оф. docs: [ant.design/components/tooltip](https://ant.design/components/tooltip/)  
[⬆ К содержанию](#содержание)

## Tour
Описание: Подсветка шагов onboarding.
| Prop | Type | Default | Описание |
|---|---|---|---|
| `open` | `boolean` | `false` | Видимость тура. |
| `steps` | `TourStepProps[]` | `[]` | Шаги тура. |
| `current` | `number` | `0` | Текущий шаг. |
| `placement` | `top \| bottom \| left \| right` | `bottom` | Позиция карточки. |
| `onChange` | `(current) => void` | `-` | Смена шага. |
| `onClose` | `(current) => void` | `-` | Закрытие тура. |
Пример:
```tsx
<Tour open={open} steps={[{ title: 'Step 1', target: () => ref.current }]} />
```
Оф. docs: [ant.design/components/tour](https://ant.design/components/tour/)  
[⬆ К содержанию](#содержание)

## Tree
Описание: Древовидный список.
| Prop | Type | Default | Описание |
|---|---|---|---|
| `treeData` | `DataNode[]` | `[]` | Данные дерева. |
| `checkable` | `boolean` | `false` | Чекбоксы узлов. |
| `expandedKeys` | `Key[]` | `-` | Развернутые узлы. |
| `selectedKeys` | `Key[]` | `[]` | Выбранные узлы. |
| `multiple` | `boolean` | `false` | Мультивыбор. |
| `onSelect` | `(selectedKeys, info) => void` | `-` | Выбор узла. |
Пример:
```tsx
<Tree treeData={treeData} checkable />
```
Оф. docs: [ant.design/components/tree](https://ant.design/components/tree/)  
[⬆ К содержанию](#содержание)

## Alert
Описание: Встроенный алерт.
| Prop | Type | Default | Описание |
|---|---|---|---|
| `type` | `success \| info \| warning \| error` | `info` | Тип сообщения. |
| `message` | `ReactNode` | `-` | Короткий текст. |
| `description` | `ReactNode` | `-` | Подробный текст. |
| `showIcon` | `boolean` | `false` | Показать иконку типа. |
| `closable` | `boolean` | `false` | Возможность закрыть. |
| `onClose` | `(e) => void` | `-` | Коллбек закрытия. |
Пример:
```tsx
<Alert type="warning" message="Warning text" showIcon />
```
Оф. docs: [ant.design/components/alert](https://ant.design/components/alert/)  
[⬆ К содержанию](#содержание)

## Drawer
Описание: Выезжающая панель.
| Prop | Type | Default | Описание |
|---|---|---|---|
| `open` | `boolean` | `false` | Видимость Drawer. |
| `title` | `ReactNode` | `-` | Заголовок. |
| `placement` | `top \| right \| bottom \| left` | `right` | Сторона появления. |
| `width` | `number \| string` | `378` | Ширина (left/right). |
| `height` | `number \| string` | `378` | Высота (top/bottom). |
| `maskClosable` | `boolean` | `true` | Закрытие по маске. |
| `keyboard` | `boolean` | `true` | Закрытие по `Esc`. |
| `onClose` | `(e) => void` | `-` | Закрытие Drawer. |
Пример:
```tsx
<Drawer open={open} onClose={() => setOpen(false)} title="Filters" />
```
Оф. docs: [ant.design/components/drawer](https://ant.design/components/drawer/)  
[⬆ К содержанию](#содержание)

## Message
Описание: Глобальные toast-сообщения API.
| Prop | Type | Default | Описание |
|---|---|---|---|
| `content` | `ReactNode` | `-` | Текст сообщения. |
| `duration` | `number` | `3` | Время жизни (сек). |
| `icon` | `ReactNode` | `-` | Кастомная иконка. |
| `key` | `string \| number` | `-` | Ключ для обновления. |
| `onClose` | `() => void` | `-` | Закрытие уведомления. |
Пример:
```tsx
message.success('Saved');
```
Оф. docs: [ant.design/components/message](https://ant.design/components/message/)  
[⬆ К содержанию](#содержание)

## Modal
Описание: Модальное окно.
| Prop | Type | Default | Описание |
|---|---|---|---|
| `open` | `boolean` | `false` | Видимость окна. |
| `title` | `ReactNode` | `-` | Заголовок. |
| `onOk` | `(e) => void` | `-` | Подтверждение. |
| `onCancel` | `(e) => void` | `-` | Отмена/закрытие. |
| `confirmLoading` | `boolean` | `false` | Loading у OK-кнопки. |
| `footer` | `ReactNode \| ((originNode, extra) => ReactNode)` | default footer | Нижний блок действий. |
| `maskClosable` | `boolean` | `true` | Закрытие по backdrop. |
Пример:
```tsx
<Modal open={open} onOk={save} onCancel={close}>Content</Modal>
```
Оф. docs: [ant.design/components/modal](https://ant.design/components/modal/)  
[⬆ К содержанию](#содержание)

## Notification
Описание: Глобальные уведомления в углу экрана.
| Prop | Type | Default | Описание |
|---|---|---|---|
| `message` | `ReactNode` | `-` | Заголовок уведомления. |
| `description` | `ReactNode` | `-` | Текст уведомления. |
| `placement` | `topLeft \| topRight \| bottomLeft \| bottomRight` | `topRight` | Позиция. |
| `duration` | `number \| null` | `4.5` | Автозакрытие (сек). |
| `icon` | `ReactNode` | `-` | Кастомная иконка. |
| `key` | `string` | `-` | Ключ уведомления. |
Пример:
```tsx
notification.open({ message: 'Update', description: 'Completed' });
```
Оф. docs: [ant.design/components/notification](https://ant.design/components/notification/)  
[⬆ К содержанию](#содержание)

## Popconfirm
Описание: Подтверждение в popover.
| Prop | Type | Default | Описание |
|---|---|---|---|
| `title` | `ReactNode` | `-` | Заголовок подтверждения. |
| `description` | `ReactNode` | `-` | Доп. описание. |
| `onConfirm` | `(e) => void` | `-` | Подтверждение действия. |
| `onCancel` | `(e) => void` | `-` | Отмена действия. |
| `okText` | `ReactNode` | `OK` | Текст подтверждения. |
| `cancelText` | `ReactNode` | `Cancel` | Текст отмены. |
Пример:
```tsx
<Popconfirm title="Delete?" onConfirm={remove}><Button danger>Delete</Button></Popconfirm>
```
Оф. docs: [ant.design/components/popconfirm](https://ant.design/components/popconfirm/)  
[⬆ К содержанию](#содержание)

## Progress
Описание: Индикатор выполнения.
| Prop | Type | Default | Описание |
|---|---|---|---|
| `percent` | `number` | `0` | Процент выполнения. |
| `status` | `success \| exception \| normal \| active` | `normal` | Состояние прогресса. |
| `type` | `line \| circle \| dashboard` | `line` | Тип индикатора. |
| `showInfo` | `boolean` | `true` | Показывать число/текст. |
| `strokeColor` | `string \| object` | `-` | Цвет/градиент линии. |
| `steps` | `number` | `-` | Пошаговый прогресс. |
Пример:
```tsx
<Progress percent={62} status="active" />
```
Оф. docs: [ant.design/components/progress](https://ant.design/components/progress/)  
[⬆ К содержанию](#содержание)

## Result
Описание: Экран результата операции.
| Prop | Type | Default | Описание |
|---|---|---|---|
| `status` | `success \| error \| info \| warning \| 404 \| 403 \| 500` | `info` | Тип результата. |
| `title` | `ReactNode` | `-` | Заголовок. |
| `subTitle` | `ReactNode` | `-` | Подзаголовок. |
| `icon` | `ReactNode` | `-` | Кастомная иконка. |
| `extra` | `ReactNode` | `-` | Действия пользователя. |
Пример:
```tsx
<Result status="success" title="Successfully Purchased Cloud Server ECS!" />
```
Оф. docs: [ant.design/components/result](https://ant.design/components/result/)  
[⬆ К содержанию](#содержание)

## Skeleton
Описание: Заглушка контента при загрузке.
| Prop | Type | Default | Описание |
|---|---|---|---|
| `active` | `boolean` | `false` | Включить анимацию. |
| `loading` | `boolean` | `true` | Управление рендером skeleton. |
| `avatar` | `boolean \| SkeletonAvatarProps` | `false` | Плейсхолдер аватара. |
| `title` | `boolean \| SkeletonTitleProps` | `true` | Плейсхолдер заголовка. |
| `paragraph` | `boolean \| SkeletonParagraphProps` | `true` | Плейсхолдер текста. |
Пример:
```tsx
<Skeleton active avatar paragraph={{ rows: 3 }} />
```
Оф. docs: [ant.design/components/skeleton](https://ant.design/components/skeleton/)  
[⬆ К содержанию](#содержание)

## Spin
Описание: Спиннер загрузки.
| Prop | Type | Default | Описание |
|---|---|---|---|
| `spinning` | `boolean` | `true` | Показать spinner. |
| `size` | `small \| default \| large` | `default` | Размер индикатора. |
| `tip` | `ReactNode` | `-` | Подпись загрузки. |
| `delay` | `number` | `-` | Задержка показа, мс. |
| `indicator` | `ReactNode` | `-` | Кастомная иконка spinner. |
Пример:
```tsx
<Spin spinning tip="Loading..." />
```
Оф. docs: [ant.design/components/spin](https://ant.design/components/spin/)  
[⬆ К содержанию](#содержание)

## Watermark
Описание: Водяной знак поверх содержимого.
| Prop | Type | Default | Описание |
|---|---|---|---|
| `content` | `string \| string[]` | `-` | Текст водяного знака. |
| `font` | `object` | `-` | Параметры шрифта. |
| `gap` | `[number, number]` | `[100, 100]` | Расстояние между watermark. |
| `offset` | `[number, number]` | `-` | Смещение watermark. |
| `zIndex` | `number` | `9` | Слой водяного знака. |
| `rotate` | `number` | `-22` | Угол поворота. |
Пример:
```tsx
<Watermark content="CONFIDENTIAL"><Card>Content</Card></Watermark>
```
Оф. docs: [ant.design/components/watermark](https://ant.design/components/watermark/)  
[⬆ К содержанию](#содержание)

## Affix
Описание: Фиксация элемента при прокрутке.
| Prop | Type | Default | Описание |
|---|---|---|---|
| `offsetTop` | `number` | `0` | Отступ от верха для фиксации. |
| `offsetBottom` | `number` | `-` | Отступ от низа. |
| `target` | `() => HTMLElement` | `() => window` | Контейнер отслеживания скролла. |
| `onChange` | `(affixed?: boolean) => void` | `-` | Смена состояния фиксации. |
Пример:
```tsx
<Affix offsetTop={16}><Button>Fixed</Button></Affix>
```
Оф. docs: [ant.design/components/affix](https://ant.design/components/affix/)  
[⬆ К содержанию](#содержание)

## App
Описание: Контейнер контекста для `message`/`notification`/`modal` hooks.
| Prop | Type | Default | Описание |
|---|---|---|---|
| `component` | `string \| false` | `div` | Корневой HTML-элемент App. |
| `message` | `MessageConfig` | `-` | Глобальные настройки message. |
| `notification` | `NotificationConfig` | `-` | Глобальные настройки notification. |
| `style` | `CSSProperties` | `-` | Inline-стили контейнера. |
| `className` | `string` | `-` | CSS-класс контейнера. |
Пример:
```tsx
<App><MyPage /></App>
```
Оф. docs: [ant.design/components/app](https://ant.design/components/app/)  
[⬆ К содержанию](#содержание)

## ConfigProvider
Описание: Глобальная конфигурация Ant Design.
| Prop | Type | Default | Описание |
|---|---|---|---|
| `theme` | `ThemeConfig` | `-` | Токены, алгоритм, компоненты. |
| `locale` | `Locale` | `en_US` | Локаль компонентов. |
| `componentSize` | `small \| middle \| large` | `middle` | Глобальный размер контролов. |
| `componentDisabled` | `boolean` | `false` | Глобальное отключение контролов. |
| `prefixCls` | `string` | `ant` | Префикс CSS-классов. |
| `getPopupContainer` | `(triggerNode) => HTMLElement` | `() => document.body` | Контейнер popup-компонентов. |
Пример:
```tsx
<ConfigProvider theme={{ token: { colorPrimary: '#1677ff' } }}><App /></ConfigProvider>
```
Оф. docs: [ant.design/components/config-provider](https://ant.design/components/config-provider/)  
[⬆ К содержанию](#содержание)

