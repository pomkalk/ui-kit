# Ant Design Components (v5)

Документация собрана через MCP Context7 по Ant Design и структурирована в формате: название, описание, ключевые props и пример использования.

> Полные API-таблицы у каждого компонента могут быть очень большими, поэтому ниже указаны наиболее используемые props + ссылка на официальный раздел компонента.

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
Описание: Базовая кнопка действий.
Ключевые props: `type`, `size`, `disabled`, `loading`, `icon`, `onClick`.
Пример:
```tsx
<Button type="primary" loading>Save</Button>
```
Оф. docs: [ant.design/components/button](https://ant.design/components/button/)
[⬆ К содержанию](#содержание)

## FloatButton
Описание: Плавающая кнопка для быстрых действий.
Ключевые props: `type`, `icon`, `tooltip`, `shape`, `onClick`.
Пример:
```tsx
<FloatButton icon={<PlusOutlined />} />
```
Оф. docs: [ant.design/components/float-button](https://ant.design/components/float-button/)
[⬆ К содержанию](#содержание)

## Icon
Описание: В AntD v5 используется `@ant-design/icons` как отдельный пакет.
Ключевые props: зависят от иконки (`spin`, `rotate`, `style`, `className`).
Пример:
```tsx
<SearchOutlined style={{ fontSize: 16 }} />
```
Оф. docs: [ant.design/components/icon](https://ant.design/components/icon/)
[⬆ К содержанию](#содержание)

## Typography
Описание: Текстовые компоненты (`Text`, `Title`, `Paragraph`, `Link`).
Ключевые props: `type`, `ellipsis`, `copyable`, `editable`, `level`.
Пример:
```tsx
<Typography.Title level={3}>Dashboard</Typography.Title>
```
Оф. docs: [ant.design/components/typography](https://ant.design/components/typography/)
[⬆ К содержанию](#содержание)

## Divider
Описание: Разделитель контента.
Ключевые props: `type`, `orientation`, `dashed`, `plain`, `children`.
Props (расширенно):

| Prop | Type | Default | Описание |
|---|---|---|---|
| `type` | `horizontal \| vertical` | `horizontal` | Тип разделителя. |
| `orientation` | `start \| center \| end` | `center` | Позиция текста в горизонтальном divider. |
| `variant` | `solid \| dashed \| dotted` | `solid` | Стиль линии (v5). |
| `dashed` | `boolean` | `false` | Линия штриховая (legacy-опция). |
| `plain` | `boolean` | `false` | Простой текст без акцентной стилизации. |
| `orientationMargin` | `number \| string` | `-` | Отступ текста от края. |
| `size` | `small \| middle \| large` | `-` | Вертикальные отступы (для horizontal). |
| `children` | `ReactNode` | `-` | Текст/контент внутри divider. |

Пример:
```tsx
<Divider orientation="left">Filters</Divider>
```
Оф. docs: [ant.design/components/divider](https://ant.design/components/divider/)
[⬆ К содержанию](#содержание)

## Flex
Описание: Гибкий контейнер на базе CSS flex.
Ключевые props: `gap`, `align`, `justify`, `vertical`, `wrap`.
Пример:
```tsx
<Flex gap={8} align="center"><Tag>New</Tag><Tag>Beta</Tag></Flex>
```
Оф. docs: [ant.design/components/flex](https://ant.design/components/flex/)
[⬆ К содержанию](#содержание)

## Grid
Описание: Сетка через `Row`/`Col`.
Ключевые props: `gutter`, `span`, `offset`, `xs/sm/md/lg/xl`.
Пример:
```tsx
<Row gutter={16}><Col span={12}>A</Col><Col span={12}>B</Col></Row>
```
Оф. docs: [ant.design/components/grid](https://ant.design/components/grid/)
[⬆ К содержанию](#содержание)

## Layout
Описание: Каркас страницы (`Layout`, `Header`, `Sider`, `Content`, `Footer`).
Ключевые props: `hasSider`, `width`, `collapsed`, `breakpoint`.
Пример:
```tsx
<Layout><Layout.Sider width={240} /><Layout.Content /></Layout>
```
Оф. docs: [ant.design/components/layout](https://ant.design/components/layout/)
[⬆ К содержанию](#содержание)

## Space
Описание: Равномерные отступы между элементами.
Ключевые props: `size`, `direction`, `wrap`, `align`, `split`.
Пример:
```tsx
<Space size="middle"><Button>One</Button><Button>Two</Button></Space>
```
Оф. docs: [ant.design/components/space](https://ant.design/components/space/)
[⬆ К содержанию](#содержание)

## Splitter
Описание: Разделяемые панели с изменяемым размером.
Ключевые props: `layout`, `onResize`, `min`, `max`, `defaultSize`.
Пример:
```tsx
<Splitter><Splitter.Panel defaultSize="30%" /><Splitter.Panel /></Splitter>
```
Оф. docs: [ant.design/components/splitter](https://ant.design/components/splitter/)
[⬆ К содержанию](#содержание)

## Anchor
Описание: Навигация по якорям на странице.
Ключевые props: `items`, `offsetTop`, `targetOffset`, `onChange`.
Пример:
```tsx
<Anchor items={[{ key: 'a', href: '#a', title: 'Section A' }]} />
```
Оф. docs: [ant.design/components/anchor](https://ant.design/components/anchor/)
[⬆ К содержанию](#содержание)

## Breadcrumb
Описание: Хлебные крошки для иерархии страниц.
Ключевые props: `items`, `separator`, `routes`, `itemRender`.
Пример:
```tsx
<Breadcrumb items={[{ title: 'Home' }, { title: 'Users' }]} />
```
Оф. docs: [ant.design/components/breadcrumb](https://ant.design/components/breadcrumb/)
[⬆ К содержанию](#содержание)

## Dropdown
Описание: Выпадающее меню действий.
Ключевые props: `menu`, `trigger`, `placement`, `open`, `onOpenChange`.
Пример:
```tsx
<Dropdown menu={{ items }} trigger={['click']}><Button>Actions</Button></Dropdown>
```
Оф. docs: [ant.design/components/dropdown](https://ant.design/components/dropdown/)
[⬆ К содержанию](#содержание)

## Menu
Описание: Вертикальное/горизонтальное меню навигации.
Ключевые props: `items`, `mode`, `selectedKeys`, `openKeys`, `onClick`.
Пример:
```tsx
<Menu mode="inline" items={[{ key: '1', label: 'Dashboard' }]} />
```
Оф. docs: [ant.design/components/menu](https://ant.design/components/menu/)
[⬆ К содержанию](#содержание)

## Pagination
Описание: Постраничная навигация.
Ключевые props: `current`, `total`, `pageSize`, `showSizeChanger`, `onChange`.
Пример:
```tsx
<Pagination current={1} total={500} showSizeChanger />
```
Оф. docs: [ant.design/components/pagination](https://ant.design/components/pagination/)
[⬆ К содержанию](#содержание)

## Steps
Описание: Пошаговый индикатор процесса.
Ключевые props: `current`, `items`, `direction`, `status`, `onChange`.
Пример:
```tsx
<Steps current={1} items={[{ title: 'Start' }, { title: 'Done' }]} />
```
Оф. docs: [ant.design/components/steps](https://ant.design/components/steps/)
[⬆ К содержанию](#содержание)

## Tabs
Описание: Переключение между секциями.
Ключевые props: `items`, `activeKey`, `onChange`, `type`, `tabPosition`.
Пример:
```tsx
<Tabs items={[{ key: '1', label: 'A', children: 'Content A' }]} />
```
Оф. docs: [ant.design/components/tabs](https://ant.design/components/tabs/)
[⬆ К содержанию](#содержание)

## AutoComplete
Описание: Поле ввода с подсказками.
Ключевые props: `options`, `value`, `onSearch`, `onSelect`, `allowClear`.
Пример:
```tsx
<AutoComplete options={[{ value: 'apple' }]} onSearch={setQuery} />
```
Оф. docs: [ant.design/components/auto-complete](https://ant.design/components/auto-complete/)
[⬆ К содержанию](#содержание)

## Cascader
Описание: Каскадный выбор из иерархии.
Ключевые props: `options`, `multiple`, `changeOnSelect`, `onChange`.
Пример:
```tsx
<Cascader options={options} placeholder="Select region" />
```
Оф. docs: [ant.design/components/cascader](https://ant.design/components/cascader/)
[⬆ К содержанию](#содержание)

## Checkbox
Описание: Флажок (одиночный и группы).
Ключевые props: `checked`, `indeterminate`, `disabled`, `onChange`.
Пример:
```tsx
<Checkbox checked={checked} onChange={e => setChecked(e.target.checked)}>Agree</Checkbox>
```
Оф. docs: [ant.design/components/checkbox](https://ant.design/components/checkbox/)
[⬆ К содержанию](#содержание)

## ColorPicker
Описание: Выбор цвета.
Ключевые props: `value`, `defaultValue`, `onChange`, `showText`, `disabled`.
Пример:
```tsx
<ColorPicker value={color} onChange={(_, hex) => setColor(hex)} />
```
Оф. docs: [ant.design/components/color-picker](https://ant.design/components/color-picker/)
[⬆ К содержанию](#содержание)

## DatePicker
Описание: Выбор даты/диапазона.
Ключевые props: `value`, `picker`, `format`, `disabledDate`, `onChange`.
Пример:
```tsx
<DatePicker picker="date" onChange={(_, str) => console.log(str)} />
```
Оф. docs: [ant.design/components/date-picker](https://ant.design/components/date-picker/)
[⬆ К содержанию](#содержание)

## Form
Описание: Формы с валидацией и управлением состоянием.
Ключевые props: `form`, `layout`, `initialValues`, `onFinish`, `onValuesChange`.
Props (расширенно):

| Prop | Type | Default | Описание |
|---|---|---|---|
| `form` | `FormInstance` | auto | Внешний instance формы для контроля. |
| `layout` | `horizontal \| vertical \| inline` | `horizontal` | Режим раскладки полей. |
| `initialValues` | `object` | `-` | Начальные значения всех полей. |
| `name` | `string` | `-` | Имя формы. |
| `requiredMark` | `boolean \| optional` | `true` | Отображение обязательности поля. |
| `validateTrigger` | `string \| string[]` | `onChange` | События валидации. |
| `onFinish` | `(values) => void` | `-` | Успешная отправка формы. |
| `onFinishFailed` | `({ values, errorFields }) => void` | `-` | Ошибки при submit. |
| `onValuesChange` | `(changed, all) => void` | `-` | Реакция на изменение значений. |
| `disabled` | `boolean` | `false` | Глобально отключить все контролы в форме. |

Пример:
```tsx
<Form onFinish={onFinish}><Form.Item name="email" rules={[{ required: true }]}><Input /></Form.Item></Form>
```
Оф. docs: [ant.design/components/form](https://ant.design/components/form/)
[⬆ К содержанию](#содержание)

## Input
Описание: Текстовый ввод (`Input`, `Password`, `TextArea`, `Search`).
Ключевые props: `value`, `placeholder`, `allowClear`, `prefix`, `suffix`, `onChange`.
Пример:
```tsx
<Input placeholder="Search..." allowClear prefix={<SearchOutlined />} />
```
Оф. docs: [ant.design/components/input](https://ant.design/components/input/)
[⬆ К содержанию](#содержание)

## InputNumber
Описание: Числовой ввод.
Ключевые props: `value`, `min`, `max`, `step`, `precision`, `onChange`.
Пример:
```tsx
<InputNumber min={0} max={100} step={1} />
```
Оф. docs: [ant.design/components/input-number](https://ant.design/components/input-number/)
[⬆ К содержанию](#содержание)

## Mentions
Описание: Поле с автодополнением по `@mentions`.
Ключевые props: `options`, `value`, `prefix`, `onSearch`, `onChange`.
Пример:
```tsx
<Mentions options={[{ value: 'alice' }]} />
```
Оф. docs: [ant.design/components/mentions](https://ant.design/components/mentions/)
[⬆ К содержанию](#содержание)

## Radio
Описание: Радиокнопки, выбор одного варианта.
Ключевые props: `value`, `options`, `buttonStyle`, `optionType`, `onChange`.
Пример:
```tsx
<Radio.Group options={['A', 'B']} optionType="button" />
```
Оф. docs: [ant.design/components/radio](https://ant.design/components/radio/)
[⬆ К содержанию](#содержание)

## Rate
Описание: Рейтинг со звездами.
Ключевые props: `value`, `count`, `allowHalf`, `allowClear`, `onChange`.
Пример:
```tsx
<Rate allowHalf defaultValue={3.5} />
```
Оф. docs: [ant.design/components/rate](https://ant.design/components/rate/)
[⬆ К содержанию](#содержание)

## Select
Описание: Выпадающий список выбора.
Ключевые props: `options`, `mode`, `value`, `showSearch`, `allowClear`, `onChange`.
Props (расширенно):

| Prop | Type | Default | Описание |
|---|---|---|---|
| `options` | `{ label, value }[]` | `-` | Список опций (рекомендуемый формат). |
| `value` | `string \| number \| LabeledValue \| ...` | `-` | Текущее значение (controlled). |
| `defaultValue` | same as `value` | `-` | Начальное значение (uncontrolled). |
| `mode` | `multiple \| tags` | `-` | Режим множественного выбора. |
| `showSearch` | `boolean` | `false` single / `true` multiple | Включение поиска. |
| `allowClear` | `boolean \| { clearIcon?: ReactNode }` | `false` | Очистка значения. |
| `open` | `boolean` | `-` | Контроль открытия dropdown. |
| `placement` | `bottomLeft \| bottomRight \| topLeft \| topRight` | `bottomLeft` | Позиция popup. |
| `listHeight` | `number` | `256` | Высота dropdown списка. |
| `onChange` | `(value, option) => void` | `-` | Коллбек изменения выбора. |

Пример:
```tsx
<Select options={[{ label: 'One', value: 1 }]} showSearch allowClear />
```
Оф. docs: [ant.design/components/select](https://ant.design/components/select/)
[⬆ К содержанию](#содержание)

## Slider
Описание: Выбор значения ползунком.
Ключевые props: `value`, `range`, `min`, `max`, `step`, `onChange`.
Пример:
```tsx
<Slider range min={0} max={100} defaultValue={[20, 80]} />
```
Оф. docs: [ant.design/components/slider](https://ant.design/components/slider/)
[⬆ К содержанию](#содержание)

## Switch
Описание: Переключатель on/off.
Ключевые props: `checked`, `disabled`, `checkedChildren`, `unCheckedChildren`, `onChange`.
Пример:
```tsx
<Switch checked={enabled} onChange={setEnabled} />
```
Оф. docs: [ant.design/components/switch](https://ant.design/components/switch/)
[⬆ К содержанию](#содержание)

## TimePicker
Описание: Выбор времени.
Ключевые props: `value`, `format`, `use12Hours`, `minuteStep`, `onChange`.
Пример:
```tsx
<TimePicker format="HH:mm" />
```
Оф. docs: [ant.design/components/time-picker](https://ant.design/components/time-picker/)
[⬆ К содержанию](#содержание)

## Transfer
Описание: Перенос элементов между двумя списками.
Ключевые props: `dataSource`, `targetKeys`, `render`, `onChange`, `showSearch`.
Пример:
```tsx
<Transfer dataSource={data} targetKeys={targetKeys} onChange={setTargetKeys} render={i => i.title} />
```
Оф. docs: [ant.design/components/transfer](https://ant.design/components/transfer/)
[⬆ К содержанию](#содержание)

## TreeSelect
Описание: Выбор из древовидного списка.
Ключевые props: `treeData`, `value`, `multiple`, `treeCheckable`, `onChange`.
Пример:
```tsx
<TreeSelect treeData={treeData} treeCheckable showSearch />
```
Оф. docs: [ant.design/components/tree-select](https://ant.design/components/tree-select/)
[⬆ К содержанию](#содержание)

## Upload
Описание: Загрузка файлов.
Ключевые props: `action`, `beforeUpload`, `fileList`, `listType`, `onChange`.
Пример:
```tsx
<Upload action="/api/upload"><Button>Upload</Button></Upload>
```
Оф. docs: [ant.design/components/upload](https://ant.design/components/upload/)
[⬆ К содержанию](#содержание)

## Avatar
Описание: Аватар пользователя (иконка/фото/инициалы).
Ключевые props: `src`, `size`, `shape`, `icon`, `alt`.
Пример:
```tsx
<Avatar src="/user.png" size={40} />
```
Оф. docs: [ant.design/components/avatar](https://ant.design/components/avatar/)
[⬆ К содержанию](#содержание)

## Badge
Описание: Числовой индикатор или статус.
Ключевые props: `count`, `dot`, `status`, `text`, `overflowCount`.
Пример:
```tsx
<Badge count={12}><Avatar shape="square" /></Badge>
```
Оф. docs: [ant.design/components/badge](https://ant.design/components/badge/)
[⬆ К содержанию](#содержание)

## Calendar
Описание: Календарь с пользовательским рендером дат.
Ключевые props: `value`, `mode`, `fullscreen`, `onSelect`, `cellRender`.
Пример:
```tsx
<Calendar fullscreen={false} />
```
Оф. docs: [ant.design/components/calendar](https://ant.design/components/calendar/)
[⬆ К содержанию](#содержание)

## Card
Описание: Карточка для контента.
Ключевые props: `title`, `extra`, `hoverable`, `actions`, `cover`.
Пример:
```tsx
<Card title="Profile" extra={<a>Edit</a>}>Content</Card>
```
Оф. docs: [ant.design/components/card](https://ant.design/components/card/)
[⬆ К содержанию](#содержание)

## Carousel
Описание: Слайдер контента.
Ключевые props: `autoplay`, `dots`, `effect`, `beforeChange`, `afterChange`.
Пример:
```tsx
<Carousel autoplay><div>1</div><div>2</div></Carousel>
```
Оф. docs: [ant.design/components/carousel](https://ant.design/components/carousel/)
[⬆ К содержанию](#содержание)

## Collapse
Описание: Аккордеон с раскрывающимися панелями.
Ключевые props: `items`, `accordion`, `activeKey`, `ghost`, `onChange`.
Пример:
```tsx
<Collapse items={[{ key: '1', label: 'Panel', children: 'Text' }]} />
```
Оф. docs: [ant.design/components/collapse](https://ant.design/components/collapse/)
[⬆ К содержанию](#содержание)

## Descriptions
Описание: Табличный вывод описательных полей.
Ключевые props: `items`, `title`, `column`, `bordered`, `size`.
Пример:
```tsx
<Descriptions title="User" items={[{ key: '1', label: 'Name', children: 'Alex' }]} />
```
Оф. docs: [ant.design/components/descriptions](https://ant.design/components/descriptions/)
[⬆ К содержанию](#содержание)

## Empty
Описание: Пустое состояние.
Ключевые props: `description`, `image`, `imageStyle`, `children`.
Пример:
```tsx
<Empty description="No data" />
```
Оф. docs: [ant.design/components/empty](https://ant.design/components/empty/)
[⬆ К содержанию](#содержание)

## Image
Описание: Изображение с preview.
Ключевые props: `src`, `preview`, `placeholder`, `fallback`, `width`.
Пример:
```tsx
<Image width={200} src="/cover.jpg" />
```
Оф. docs: [ant.design/components/image](https://ant.design/components/image/)
[⬆ К содержанию](#содержание)

## List
Описание: Список данных.
Ключевые props: `dataSource`, `renderItem`, `pagination`, `grid`, `loading`.
Props (расширенно):

| Prop | Type | Default | Описание |
|---|---|---|---|
| `dataSource` | `any[]` | `-` | Источник данных списка. |
| `renderItem` | `(item, index) => ReactNode` | `-` | Рендер одного элемента. |
| `rowKey` | `string \| (item) => React.Key` | `"key"` | Уникальный ключ элемента. |
| `itemLayout` | `horizontal \| vertical` | `horizontal` | Схема отображения item. |
| `pagination` | `boolean \| PaginationConfig` | `false` | Встроенная пагинация. |
| `grid` | `{ gutter, column, xs, sm, ... }` | `-` | Grid-режим списка. |
| `loading` | `boolean \| SpinProps` | `false` | Состояние загрузки. |
| `split` | `boolean` | `true` | Разделители между элементами. |
| `header` | `ReactNode` | `-` | Контент в header списка. |
| `footer` | `ReactNode` | `-` | Контент в footer списка. |

Пример:
```tsx
<List dataSource={data} renderItem={item => <List.Item>{item}</List.Item>} />
```
Оф. docs: [ant.design/components/list](https://ant.design/components/list/)
[⬆ К содержанию](#содержание)

## Popover
Описание: Всплывающая карточка по наведению/клику.
Ключевые props: `content`, `title`, `trigger`, `placement`, `open`.
Пример:
```tsx
<Popover content="Details"><Button>Hover</Button></Popover>
```
Оф. docs: [ant.design/components/popover](https://ant.design/components/popover/)
[⬆ К содержанию](#содержание)

## QRCode
Описание: Генерация QR-кода.
Ключевые props: `value`, `size`, `color`, `bgColor`, `status`.
Пример:
```tsx
<QRCode value="https://ant.design" />
```
Оф. docs: [ant.design/components/qr-code](https://ant.design/components/qr-code/)
[⬆ К содержанию](#содержание)

## Segmented
Описание: Переключатель между несколькими опциями.
Ключевые props: `options`, `value`, `onChange`, `size`, `block`.
Пример:
```tsx
<Segmented options={['Day', 'Week', 'Month']} />
```
Оф. docs: [ant.design/components/segmented](https://ant.design/components/segmented/)
[⬆ К содержанию](#содержание)

## Statistic
Описание: Вывод числовых метрик.
Ключевые props: `title`, `value`, `precision`, `prefix`, `suffix`.
Пример:
```tsx
<Statistic title="Active Users" value={112893} />
```
Оф. docs: [ant.design/components/statistic](https://ant.design/components/statistic/)
[⬆ К содержанию](#содержание)

## Table
Описание: Таблица данных.
Ключевые props: `columns`, `dataSource`, `rowKey`, `pagination`, `loading`.
Пример:
```tsx
<Table columns={columns} dataSource={rows} rowKey="id" />
```
Оф. docs: [ant.design/components/table](https://ant.design/components/table/)
[⬆ К содержанию](#содержание)

## Tag
Описание: Небольшая метка.
Ключевые props: `color`, `icon`, `closable`, `onClose`, `bordered`.
Пример:
```tsx
<Tag color="blue" closable>Design</Tag>
```
Оф. docs: [ant.design/components/tag](https://ant.design/components/tag/)
[⬆ К содержанию](#содержание)

## Timeline
Описание: Хронология событий.
Ключевые props: `items`, `mode`, `pending`, `reverse`.
Пример:
```tsx
<Timeline items={[{ children: 'Create task' }, { children: 'Deploy' }]} />
```
Оф. docs: [ant.design/components/timeline](https://ant.design/components/timeline/)
[⬆ К содержанию](#содержание)

## Tooltip
Описание: Подсказка при наведении.
Ключевые props: `title`, `placement`, `trigger`, `open`, `color`.
Пример:
```tsx
<Tooltip title="Info"><Button>Hover</Button></Tooltip>
```
Оф. docs: [ant.design/components/tooltip](https://ant.design/components/tooltip/)
[⬆ К содержанию](#содержание)

## Tour
Описание: Пошаговый onboarding-тур по интерфейсу.
Ключевые props: `open`, `steps`, `current`, `onChange`, `onClose`.
Пример:
```tsx
<Tour open={open} steps={[{ title: 'Step 1', target: () => ref.current }]} />
```
Оф. docs: [ant.design/components/tour](https://ant.design/components/tour/)
[⬆ К содержанию](#содержание)

## Tree
Описание: Древовидный список.
Ключевые props: `treeData`, `checkable`, `expandedKeys`, `selectedKeys`, `onSelect`.
Пример:
```tsx
<Tree treeData={treeData} checkable />
```
Оф. docs: [ant.design/components/tree](https://ant.design/components/tree/)
[⬆ К содержанию](#содержание)

## Alert
Описание: Встроенное уведомление.
Ключевые props: `type`, `message`, `description`, `closable`, `showIcon`.
Пример:
```tsx
<Alert type="warning" message="Warning text" showIcon />
```
Оф. docs: [ant.design/components/alert](https://ant.design/components/alert/)
[⬆ К содержанию](#содержание)

## Drawer
Описание: Выдвижная панель.
Ключевые props: `open`, `title`, `placement`, `width`, `onClose`.
Props (расширенно):

| Prop | Type | Default | Описание |
|---|---|---|---|
| `open` | `boolean` | `false` | Видимость Drawer. |
| `title` | `ReactNode` | `-` | Заголовок панели. |
| `placement` | `top \| right \| bottom \| left` | `right` | Сторона появления. |
| `width` | `string \| number` | `378` | Ширина для left/right. |
| `height` | `string \| number` | `378` | Высота для top/bottom. |
| `mask` | `boolean` | `true` | Показ backdrop. |
| `maskClosable` | `boolean` | `true` | Закрытие по клику на mask. |
| `keyboard` | `boolean` | `true` | Закрытие по `Esc`. |
| `destroyOnHidden` | `boolean` | `false` | Размонтировать контент при закрытии. |
| `afterOpenChange` | `(open) => void` | `-` | Коллбек после анимации открытия/закрытия. |
| `onClose` | `(event) => void` | `-` | Событие закрытия. |

Пример:
```tsx
<Drawer open={open} onClose={() => setOpen(false)} title="Filters" />
```
Оф. docs: [ant.design/components/drawer](https://ant.design/components/drawer/)
[⬆ К содержанию](#содержание)

## Message
Описание: Глобальные всплывающие сообщения (`message.success(...)`).
Ключевые props: `content`, `duration`, `icon`, `key`, `type`.
Пример:
```tsx
message.success('Saved');
```
Оф. docs: [ant.design/components/message](https://ant.design/components/message/)
[⬆ К содержанию](#содержание)

## Modal
Описание: Модальное окно.
Ключевые props: `open`, `title`, `onOk`, `onCancel`, `footer`, `confirmLoading`.
Пример:
```tsx
<Modal open={open} onOk={save} onCancel={close}>Content</Modal>
```
Оф. docs: [ant.design/components/modal](https://ant.design/components/modal/)
[⬆ К содержанию](#содержание)

## Notification
Описание: Глобальные уведомления в углу экрана.
Ключевые props: `message`, `description`, `placement`, `duration`, `icon`.
Пример:
```tsx
notification.open({ message: 'Update', description: 'Completed' });
```
Оф. docs: [ant.design/components/notification](https://ant.design/components/notification/)
[⬆ К содержанию](#содержание)

## Popconfirm
Описание: Подтверждение действия в popover.
Ключевые props: `title`, `description`, `onConfirm`, `onCancel`, `okText`, `cancelText`.
Пример:
```tsx
<Popconfirm title="Delete?" onConfirm={remove}><Button danger>Delete</Button></Popconfirm>
```
Оф. docs: [ant.design/components/popconfirm](https://ant.design/components/popconfirm/)
[⬆ К содержанию](#содержание)

## Progress
Описание: Индикатор прогресса.
Ключевые props: `percent`, `status`, `type`, `showInfo`, `strokeColor`.
Пример:
```tsx
<Progress percent={62} status="active" />
```
Оф. docs: [ant.design/components/progress](https://ant.design/components/progress/)
[⬆ К содержанию](#содержание)

## Result
Описание: Экран результата операции (success/error/404 и т.д.).
Ключевые props: `status`, `title`, `subTitle`, `icon`, `extra`.
Пример:
```tsx
<Result status="success" title="Successfully Purchased Cloud Server ECS!" />
```
Оф. docs: [ant.design/components/result](https://ant.design/components/result/)
[⬆ К содержанию](#содержание)

## Skeleton
Описание: Заглушка загрузки.
Ключевые props: `active`, `avatar`, `title`, `paragraph`, `loading`.
Пример:
```tsx
<Skeleton active avatar paragraph={{ rows: 3 }} />
```
Оф. docs: [ant.design/components/skeleton](https://ant.design/components/skeleton/)
[⬆ К содержанию](#содержание)

## Spin
Описание: Спиннер загрузки.
Ключевые props: `spinning`, `size`, `tip`, `delay`, `indicator`.
Пример:
```tsx
<Spin spinning tip="Loading..." />
```
Оф. docs: [ant.design/components/spin](https://ant.design/components/spin/)
[⬆ К содержанию](#содержание)

## Watermark
Описание: Водяной знак поверх контента.
Ключевые props: `content`, `font`, `gap`, `offset`, `zIndex`.
Пример:
```tsx
<Watermark content="CONFIDENTIAL"><Card>Content</Card></Watermark>
```
Оф. docs: [ant.design/components/watermark](https://ant.design/components/watermark/)
[⬆ К содержанию](#содержание)

## Affix
Описание: Фиксация элемента при скролле.
Ключевые props: `offsetTop`, `offsetBottom`, `target`, `onChange`.
Пример:
```tsx
<Affix offsetTop={16}><Button>Fixed</Button></Affix>
```
Оф. docs: [ant.design/components/affix](https://ant.design/components/affix/)
[⬆ К содержанию](#содержание)

## App
Описание: Контейнер контекста для `message`, `modal`, `notification` hooks.
Ключевые props: `message`, `notification`, `component`, `style`.
Пример:
```tsx
<App><MyPage /></App>
```
Оф. docs: [ant.design/components/app](https://ant.design/components/app/)
[⬆ К содержанию](#содержание)

## ConfigProvider
Описание: Глобальная конфигурация темы, локали и поведения компонентов.
Ключевые props: `theme`, `locale`, `componentSize`, `componentDisabled`, `prefixCls`.
Пример:
```tsx
<ConfigProvider theme={{ token: { colorPrimary: '#1677ff' } }}><App /></ConfigProvider>
```
Оф. docs: [ant.design/components/config-provider](https://ant.design/components/config-provider/)
[⬆ К содержанию](#содержание)

