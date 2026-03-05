import { useState, type ReactNode } from 'react'
import * as UI from '../components'
import type {
  ComponentDoc,
  ComponentExample,
  ComponentGroup,
  ComponentPropDoc,
} from './types'

const noop = () => undefined

function ModalDemo() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <UI.Button size="sm" onClick={() => setOpen(true)}>
        Открыть modal
      </UI.Button>
      <UI.Modal
        footer={
          <>
            <UI.Button size="sm" variant="ghost" onClick={() => setOpen(false)}>
              Отмена
            </UI.Button>
            <UI.Button size="sm" onClick={() => setOpen(false)}>
              Подтвердить
            </UI.Button>
          </>
        }
        onClose={() => setOpen(false)}
        open={open}
        title="Подтверждение"
      >
        <UI.Text>Вы уверены?</UI.Text>
      </UI.Modal>
    </>
  )
}

function DrawerDemo({
  side = 'right',
}: {
  side?: 'left' | 'right' | 'top' | 'bottom'
}) {
  const [open, setOpen] = useState(false)
  const title =
    side === 'left'
      ? 'Навигация'
      : side === 'top'
        ? 'Быстрые действия'
        : side === 'bottom'
          ? 'Детали'
          : 'Фильтры'
  const text =
    side === 'left'
      ? 'Меню разделов'
      : side === 'top'
        ? 'Панель действий сверху'
        : side === 'bottom'
          ? 'Контент панели снизу'
          : 'Параметры'

  return (
    <>
      <UI.Button size="sm" onClick={() => setOpen(true)}>
        Открыть drawer
      </UI.Button>
      <UI.Drawer
        onClose={() => setOpen(false)}
        open={open}
        side={side}
        title={title}
      >
        <UI.Text>{text}</UI.Text>
      </UI.Drawer>
    </>
  )
}

function code(lines: string): string {
  return lines.trim()
}

function ex(
  title: string,
  description: string,
  snippet: string,
  preview: ReactNode,
): ComponentExample {
  return { title, description, code: code(snippet), preview }
}

function pd(
  name: string,
  type: string,
  description: string,
  required = false,
  defaultValue?: string,
): ComponentPropDoc {
  return { name, type, description, required, defaultValue }
}

const docs: ComponentDoc[] = [
  {
    slug: 'button',
    name: 'Button',
    group: 'basic',
    description:
      'Кнопка для запуска действий. Поддерживает варианты оформления, размеры и состояние загрузки.',
    examples: [
      ex(
        'Базовая кнопка',
        'Основной CTA-элемент интерфейса.',
        `<Button variant="primary">Сохранить</Button>`,
        <UI.Button variant="primary">Сохранить</UI.Button>,
      ),
      ex(
        'Кнопка с иконкой',
        'Добавление визуального контекста через левую иконку.',
        `<Button variant="secondary" leftIcon={<span>+</span>}>Добавить</Button>`,
        <UI.Button leftIcon={<span>+</span>} variant="secondary">
          Добавить
        </UI.Button>,
      ),
      ex(
        'Состояние loading',
        'Кнопка в процессе выполнения действия становится неактивной и показывает состояние загрузки.',
        `<Button variant="primary" isLoading>Сохранить</Button>`,
        <UI.Button isLoading variant="primary">
          Сохранить
        </UI.Button>,
      ),
    ],
    propDocs: [
      pd('variant', "'primary' | 'secondary' | 'ghost' | 'danger'", 'Визуальный вариант кнопки.', false, "'primary'"),
      pd('size', "'sm' | 'md' | 'lg'", 'Размер кнопки.', false, "'md'"),
      pd('leftIcon', 'ReactNode', 'Иконка слева от текста.', false),
      pd('rightIcon', 'ReactNode', 'Иконка справа от текста.', false),
      pd('isLoading', 'boolean', 'Показывает спиннер и блокирует кнопку.', false, 'false'),
    ],
  },
  {
    slug: 'icon-button',
    name: 'IconButton',
    group: 'basic',
    description: 'Компактная кнопка, где визуальный акцент строится на иконке.',
    examples: [
      ex(
        'Базовый IconButton',
        'Иконка для быстрых утилитарных действий.',
        `<IconButton label="Настройки" icon={<span>⚙</span>} />`,
        <UI.IconButton icon={<span>⚙</span>} label="Настройки" />,
      ),
      ex(
        'Primary вариант',
        'Акцентный IconButton для важного действия.',
        `<IconButton variant="primary" label="Добавить" icon={<span>+</span>} />`,
        <UI.IconButton icon={<span>+</span>} label="Добавить" variant="primary" />,
      ),
    ],
  },
  {
    slug: 'link',
    name: 'Link',
    group: 'basic',
    description: 'Текстовая ссылка для навигации и переходов между ресурсами.',
    examples: [
      ex(
        'Обычная ссылка',
        'Линк с базовым стилем.',
        `<Link href="#">Открыть документацию</Link>`,
        <UI.Link href="#">Открыть документацию</UI.Link>,
      ),
      ex(
        'С подчеркиванием',
        'Акцент на кликабельности для текстового контента.',
        `<Link href="#" underline>Подробнее</Link>`,
        <UI.Link href="#" underline>
          Подробнее
        </UI.Link>,
      ),
    ],
  },
  {
    slug: 'badge',
    name: 'Badge',
    group: 'basic',
    description: 'Небольшой индикатор для статуса, счетчика или категории.',
    examples: [
      ex(
        'Статус',
        'Показывает успешное состояние.',
        `<Badge variant="success">Активен</Badge>`,
        <UI.Badge variant="success">Активен</UI.Badge>,
      ),
      ex(
        'Счетчик',
        'Компактная метка для количественных значений.',
        `<Badge variant="primary">12</Badge>`,
        <UI.Badge variant="primary">12</UI.Badge>,
      ),
    ],
  },
  {
    slug: 'box',
    name: 'Box',
    group: 'layout',
    description: 'Универсальный контейнер-обертка для компоновки и стилизации.',
    examples: [
      ex(
        'Простой контейнер',
        'Базовая группировка контента.',
        `<Box className="rounded-lg border border-slate-200 p-3">Контент</Box>`,
        <UI.Box className="rounded-lg border border-slate-200 p-3">Контент</UI.Box>,
      ),
      ex(
        'С отступами и фоном',
        'Использование как нейтральный блок.',
        `<Box className="rounded-xl bg-slate-100 p-4">Внутренний блок</Box>`,
        <UI.Box className="rounded-xl bg-slate-100 p-4">Внутренний блок</UI.Box>,
      ),
    ],
  },
  {
    slug: 'card',
    name: 'Card',
    group: 'layout',
    description: 'Карточка для выделения смыслового блока с заголовком и действиями.',
    examples: [
      ex(
        'Карточка с заголовком',
        'Стандартная структура секции.',
        `<Card title="Профиль">Содержимое карточки</Card>`,
        <UI.Card title="Профиль">Содержимое карточки</UI.Card>,
      ),
      ex(
        'Карточка с action',
        'Действие в заголовке карточки.',
        `<Card title="Информация" actions={<Button size="sm">Изменить</Button>}>Данные</Card>`,
        <UI.Card actions={<UI.Button size="sm">Изменить</UI.Button>} title="Информация">
          Данные
        </UI.Card>,
      ),
    ],
  },
  {
    slug: 'grid',
    name: 'Grid',
    group: 'layout',
    description: 'Сеточный контейнер для распределения элементов по колонкам.',
    examples: [
      ex(
        'Две колонки',
        'Быстрый лэйаут для парных блоков.',
        `<Grid columns={2} gap={12}><Box>1</Box><Box>2</Box></Grid>`,
        <UI.Grid columns={2} gap={12}>
          <UI.Box className="rounded border border-slate-200 p-2">1</UI.Box>
          <UI.Box className="rounded border border-slate-200 p-2">2</UI.Box>
        </UI.Grid>,
      ),
      ex(
        'Три колонки',
        'Подходит для карточек и дашборд-плиток.',
        `<Grid columns={3} gap={8}>...</Grid>`,
        <UI.Grid columns={3} gap={8}>
          <UI.Box className="rounded border border-slate-200 p-2">A</UI.Box>
          <UI.Box className="rounded border border-slate-200 p-2">B</UI.Box>
          <UI.Box className="rounded border border-slate-200 p-2">C</UI.Box>
        </UI.Grid>,
      ),
    ],
  },
  {
    slug: 'flex',
    name: 'Flex',
    group: 'layout',
    description: 'Flex-контейнер для выравнивания и управления направлением.',
    examples: [
      ex(
        'Ряд с gap',
        'Горизонтальная компоновка элементов.',
        `<Flex align="center" gap={8}><Badge>One</Badge><Badge>Two</Badge></Flex>`,
        <UI.Flex align="center" gap={8}>
          <UI.Badge>One</UI.Badge>
          <UI.Badge>Two</UI.Badge>
        </UI.Flex>,
      ),
      ex(
        'Колонка',
        'Вертикальная структура списков и форм.',
        `<Flex direction="column" gap={8}>...</Flex>`,
        <UI.Flex direction="column" gap={8}>
          <UI.Box className="rounded border border-slate-200 p-2">Строка 1</UI.Box>
          <UI.Box className="rounded border border-slate-200 p-2">Строка 2</UI.Box>
        </UI.Flex>,
      ),
    ],
  },
  {
    slug: 'stack',
    name: 'Stack',
    group: 'layout',
    description: 'Stack упрощает вертикальные/горизонтальные группы с единым ритмом отступов.',
    examples: [
      ex(
        'Vertical stack',
        'Часто используется для форм и колонок.',
        `<Stack><Text>Первый</Text><Text>Второй</Text></Stack>`,
        <UI.Stack>
          <UI.Text>Первый</UI.Text>
          <UI.Text>Второй</UI.Text>
        </UI.Stack>,
      ),
      ex(
        'Horizontal stack',
        'Подходит для набора компактных элементов.',
        `<Stack direction="horizontal"><Badge>A</Badge><Badge>B</Badge></Stack>`,
        <UI.Stack direction="horizontal">
          <UI.Badge>A</UI.Badge>
          <UI.Badge>B</UI.Badge>
        </UI.Stack>,
      ),
    ],
  },
  {
    slug: 'divider',
    name: 'Divider',
    group: 'layout',
    description: 'Разделительная линия между блоками интерфейса.',
    examples: [
      ex(
        'Горизонтальный Divider',
        'Отделяет секции по вертикали.',
        `<Divider />`,
        <UI.Divider />,
      ),
      ex(
        'Вертикальный Divider',
        'Разделяет элементы в горизонтальном контейнере.',
        `<div className="flex h-6 items-center gap-2"><span>A</span><Divider orientation="vertical" /><span>B</span></div>`,
        <div className="flex h-6 items-center gap-2">
          <span>A</span>
          <UI.Divider orientation="vertical" />
          <span>B</span>
        </div>,
      ),
    ],
  },
  {
    slug: 'text',
    name: 'Text',
    group: 'typography',
    description: 'Базовый текстовый элемент с тональностью контента.',
    examples: [
      ex(
        'Primary текст',
        'Основной текстовый контент.',
        `<Text tone="primary">Основной текст</Text>`,
        <UI.Text tone="primary">Основной текст</UI.Text>,
      ),
      ex(
        'Muted текст',
        'Вторичные пояснения и служебные подписи.',
        `<Text tone="muted">Подсказка к полю</Text>`,
        <UI.Text tone="muted">Подсказка к полю</UI.Text>,
      ),
    ],
  },
  {
    slug: 'heading',
    name: 'Heading',
    group: 'typography',
    description: 'Заголовок разделов и страниц с управлением уровнем и размером.',
    examples: [
      ex(
        'Heading level 2',
        'Стандартный заголовок секции.',
        `<Heading level={2}>Настройки аккаунта</Heading>`,
        <UI.Heading level={2}>Настройки аккаунта</UI.Heading>,
      ),
      ex(
        'Heading level 3',
        'Заголовок подблока внутри карточки.',
        `<Heading level={3}>Персональная информация</Heading>`,
        <UI.Heading level={3}>Персональная информация</UI.Heading>,
      ),
    ],
  },
  {
    slug: 'paragraph',
    name: 'Paragraph',
    group: 'typography',
    description: 'Параграф для более длинного текстового описания.',
    examples: [
      ex(
        'Описание',
        'Текст, который поясняет секцию.',
        `<Paragraph>Этот блок показывает настройки безопасности аккаунта.</Paragraph>`,
        <UI.Paragraph>
          Этот блок показывает настройки безопасности аккаунта.
        </UI.Paragraph>,
      ),
      ex(
        'Дополнительный текст',
        'Подходит для описаний в карточках.',
        `<Paragraph className="max-w-xl">Длинное описание с ограничением ширины.</Paragraph>`,
        <UI.Paragraph className="max-w-xl">
          Длинное описание с ограничением ширины.
        </UI.Paragraph>,
      ),
    ],
  },
  {
    slug: 'label',
    name: 'Label',
    group: 'typography',
    description: 'Подпись для полей формы и управляемых контролов.',
    examples: [
      ex(
        'Label для input',
        'Связывает подпись с элементом ввода.',
        `<Label htmlFor="email">Email</Label>`,
        <UI.Label htmlFor="email">Email</UI.Label>,
      ),
      ex(
        'Компактный label',
        'Используется для групп полей в карточке.',
        `<Label className="text-xs uppercase">Статус</Label>`,
        <UI.Label className="text-xs uppercase">Статус</UI.Label>,
      ),
    ],
  },
  {
    slug: 'input',
    name: 'Input',
    group: 'forms',
    description: 'Однострочное поле ввода текста с поддержкой валидационных состояний.',
    examples: [
      ex(
        'Базовый input',
        'Поле для краткого текстового значения.',
        `<Input placeholder="Введите имя" />`,
        <UI.Input placeholder="Введите имя" />,
      ),
      ex(
        'Ошибочное состояние',
        'Визуально выделяет проблемное поле.',
        `<Input isInvalid placeholder="Некорректный email" />`,
        <UI.Input isInvalid placeholder="Некорректный email" />,
      ),
    ],
  },
  {
    slug: 'textarea',
    name: 'Textarea',
    group: 'forms',
    description: 'Многострочное поле для длинного описания, комментария или заметки.',
    examples: [
      ex(
        'Базовый textarea',
        'Подходит для описаний и сообщений.',
        `<Textarea rows={4} placeholder="Введите описание" />`,
        <UI.Textarea placeholder="Введите описание" rows={4} />,
      ),
      ex(
        'С валидацией',
        'Показывает визуальное состояние ошибки.',
        `<Textarea isInvalid rows={3} placeholder="Поле обязательно" />`,
        <UI.Textarea isInvalid placeholder="Поле обязательно" rows={3} />,
      ),
    ],
  },
  {
    slug: 'select',
    name: 'Select',
    group: 'forms',
    description: 'Выбор одного значения из выпадающего списка.',
    examples: [
      ex(
        'Базовый select',
        'Часто используется для фильтров и параметров.',
        `<Select options={[{ label: "Все", value: "all" }, { label: "Активные", value: "active" }]} />`,
        <UI.Select
          options={[
            { label: 'Все', value: 'all' },
            { label: 'Активные', value: 'active' },
          ]}
        />,
      ),
      ex(
        'С ошибкой',
        'Подсвечивает поле при невалидном выборе.',
        `<Select isInvalid options={[{ label: "Выберите", value: "" }]} />`,
        <UI.Select isInvalid options={[{ label: 'Выберите', value: '' }]} />,
      ),
    ],
    propDocs: [
      pd('options', 'SelectOption[]', 'Список доступных опций.', true),
      pd('value', 'string', 'Контролируемое значение.', false),
      pd('defaultValue', 'string', 'Значение по умолчанию для неконтролируемого режима.', false),
      pd('placeholder', 'string', 'Текст-плейсхолдер при пустом выборе.', false, "'Select option'"),
      pd('isInvalid', 'boolean', 'Ошибка валидации поля.', false, 'false'),
      pd('onValueChange', '(value: string) => void', 'Коллбек при выборе значения.', false),
    ],
  },
  {
    slug: 'autocomplete',
    name: 'Autocomplete',
    group: 'forms',
    description:
      'Поле ввода с выпадающим списком подсказок и фильтрацией значений по мере ввода.',
    examples: [
      ex(
        'Базовый autocomplete',
        'Список вариантов фильтруется по введенному тексту.',
        `<Autocomplete
  placeholder="Search user..."
  options={[
    { label: "Jack", value: "jack" },
    { label: "Lucy", value: "lucy" },
    { label: "Yiminghe", value: "yiminghe" }
  ]}
/>`,
        <UI.Autocomplete
          options={[
            { label: 'Jack', value: 'jack' },
            { label: 'Lucy', value: 'lucy' },
            { label: 'Yiminghe', value: 'yiminghe' },
          ]}
          placeholder="Search user..."
        />,
      ),
      ex(
        'С невалидным состоянием',
        'Подсветка поля при ошибке валидации сохраняется и в режиме autocomplete.',
        `<Autocomplete
  isInvalid
  placeholder="Type city..."
  options={[
    { label: "London", value: "london" },
    { label: "Leeds", value: "leeds" },
    { label: "New York", value: "new-york" }
  ]}
/>`,
        <UI.Autocomplete
          isInvalid
          options={[
            { label: 'London', value: 'london' },
            { label: 'Leeds', value: 'leeds' },
            { label: 'New York', value: 'new-york' },
          ]}
          placeholder="Type city..."
        />,
      ),
      ex(
        'С очисткой значения',
        'При allowClear показывает крестик для быстрого очищения поля.',
        `<Autocomplete
  allowClear
  defaultValue="Lucy"
  options={[
    { label: "Jack", value: "jack" },
    { label: "Lucy", value: "lucy" },
    { label: "Yiminghe", value: "yiminghe" }
  ]}
/>`,
        <UI.Autocomplete
          allowClear
          defaultValue="Lucy"
          options={[
            { label: 'Jack', value: 'jack' },
            { label: 'Lucy', value: 'lucy' },
            { label: 'Yiminghe', value: 'yiminghe' },
          ]}
        />,
      ),
    ],
    propDocs: [
      pd('options', 'AutocompleteOption[]', 'Исходный список вариантов для поиска.', true),
      pd('value', 'string', 'Контролируемое значение input.', false),
      pd('defaultValue', 'string', 'Начальное значение в неконтролируемом режиме.', false),
      pd('allowClear', 'boolean', 'Показывает кнопку очистки поля.', false, 'false'),
      pd('noOptionsText', 'string', 'Текст, когда нет совпадений.', false, "'No options'"),
      pd('onSelect', '(option) => void', 'Коллбек выбора конкретной опции.', false),
    ],
  },
  {
    slug: 'checkbox',
    name: 'Checkbox',
    group: 'forms',
    description: 'Флажок для бинарного выбора нескольких пунктов.',
    examples: [
      ex(
        'С подписью',
        'Подходит для чек-листов и настроек.',
        `<Checkbox label="Получать уведомления" defaultChecked />`,
        <UI.Checkbox defaultChecked label="Получать уведомления" />,
      ),
      ex(
        'Отключенный',
        'Неактивное состояние контрола.',
        `<Checkbox label="Недоступная опция" disabled />`,
        <UI.Checkbox disabled label="Недоступная опция" />,
      ),
    ],
  },
  {
    slug: 'radio',
    name: 'Radio',
    group: 'forms',
    description: 'Выбор одного варианта из набора взаимоисключающих опций.',
    examples: [
      ex(
        'Radio опция',
        'Один из вариантов группы.',
        `<Radio name="theme" label="Светлая" defaultChecked />`,
        <UI.Radio defaultChecked label="Светлая" name="theme" />,
      ),
      ex(
        'Второй вариант',
        'Альтернативный выбор в той же группе.',
        `<Radio name="theme" label="Темная" />`,
        <UI.Radio label="Темная" name="theme" />,
      ),
    ],
  },
  {
    slug: 'toggle',
    name: 'Toggle',
    group: 'forms',
    description: 'Переключатель состояния в виде слайд-кнопки.',
    examples: [
      ex(
        'Включенный toggle',
        'Подходит для on/off настроек.',
        `<Toggle label="Показывать онлайн-статус" checked readOnly />`,
        <UI.Toggle checked label="Показывать онлайн-статус" readOnly />,
      ),
      ex(
        'Выключенный toggle',
        'Неактивное значение по умолчанию.',
        `<Toggle label="Включить экспериментальные функции" />`,
        <UI.Toggle label="Включить экспериментальные функции" />,
      ),
    ],
  },
  {
    slug: 'slider',
    name: 'Slider',
    group: 'forms',
    description: 'Ползунок для выбора значения в числовом диапазоне.',
    examples: [
      ex(
        'Базовый slider',
        'Выбор значения в диапазоне 0-100.',
        `<Slider min={0} max={100} defaultValue={45} />`,
        <UI.Slider defaultValue={45} max={100} min={0} />,
      ),
      ex(
        'Тонкая настройка',
        'Шаг изменения регулирует чувствительность.',
        `<Slider min={0} max={10} step={1} defaultValue={3} />`,
        <UI.Slider defaultValue={3} max={10} min={0} step={1} />,
      ),
    ],
  },
  {
    slug: 'date-picker',
    name: 'DatePicker',
    group: 'forms',
    description: 'Кастомный выбор даты с календарем в стиле дизайн-системы.',
    examples: [
      ex(
        'Дата события',
        'Установка дня для события или дедлайна.',
        `<DatePicker defaultValue="2026-03-05" />`,
        <UI.DatePicker defaultValue="2026-03-05" />,
      ),
      ex(
        'Ограниченный диапазон',
        'Ограничивает допустимые даты.',
        `<DatePicker min="2026-01-01" max="2026-12-31" />`,
        <UI.DatePicker max="2026-12-31" min="2026-01-01" />,
      ),
    ],
    propDocs: [
      pd('value', 'string (YYYY-MM-DD)', 'Контролируемая выбранная дата.', false),
      pd('defaultValue', 'string (YYYY-MM-DD)', 'Дата по умолчанию.', false),
      pd('min', 'string (YYYY-MM-DD)', 'Минимальная допустимая дата.', false),
      pd('max', 'string (YYYY-MM-DD)', 'Максимальная допустимая дата.', false),
      pd('placeholder', 'string', 'Текст в поле при пустом значении.', false, "'Select date'"),
      pd('onValueChange', '(value: string) => void', 'Коллбек при выборе даты.', false),
    ],
  },
  {
    slug: 'time-picker',
    name: 'TimePicker',
    group: 'forms',
    description: 'Выбор времени для тайм-слотов и событий.',
    examples: [
      ex(
        'Выбор времени',
        'Подходит для расписаний и встреч.',
        `<TimePicker defaultValue="10:30" />`,
        <UI.TimePicker defaultValue="10:30" />,
      ),
      ex(
        'Интервалы по 30 минут',
        'Шаг задается в секундах.',
        `<TimePicker step={1800} />`,
        <UI.TimePicker step={1800} />,
      ),
    ],
  },
  {
    slug: 'file-input',
    name: 'FileInput',
    group: 'forms',
    description: 'Поле загрузки файлов с системным выбором документа.',
    examples: [
      ex(
        'Одиночный файл',
        'Загрузка одного документа.',
        `<FileInput />`,
        <UI.FileInput />,
      ),
      ex(
        'Только изображения',
        'Ограничение по типам файлов.',
        `<FileInput accept="image/*" />`,
        <UI.FileInput accept="image/*" />,
      ),
    ],
    propDocs: [
      pd('accept', 'string', 'Ограничение типов файлов.', false),
      pd('isInvalid', 'boolean', 'Подсвечивает поле как невалидное.', false, 'false'),
      pd('multiple', 'boolean', 'Для одиночного FileInput не используется.', false),
    ],
  },
  {
    slug: 'multiple-file-input',
    name: 'MultipleFileInput',
    group: 'forms',
    description:
      'Поле загрузки нескольких файлов с тем же визуальным стилем, что и FileInput.',
    examples: [
      ex(
        'Загрузка нескольких файлов',
        'Позволяет выбрать сразу несколько документов в одном поле.',
        `<MultipleFileInput />`,
        <UI.MultipleFileInput />,
      ),
      ex(
        'С ограничением типов',
        'Можно ограничить выбор, например только изображениями.',
        `<MultipleFileInput accept="image/*" />`,
        <UI.MultipleFileInput accept="image/*" />,
      ),
    ],
    propDocs: [
      pd('accept', 'string', 'Ограничение типов файлов.', false),
      pd('isInvalid', 'boolean', 'Подсвечивает поле как невалидное.', false, 'false'),
      pd('multiple', 'true', 'Всегда включено в этом компоненте.', true, 'true'),
    ],
  },
  {
    slug: 'menu',
    name: 'Menu',
    group: 'navigation',
    description: 'Вертикальный список навигационных пунктов.',
    examples: [
      ex(
        'Базовое меню',
        'Передача пунктов меню через проп items.',
        `<Menu
  activeKey="settings"
  items={[
    { key: "dashboard", label: "Dashboard", icon: <span>🏠</span> },
    { key: "settings", label: "Settings", icon: <span>⚙</span> }
  ]}
/>`,
        <UI.Menu
          activeKey="settings"
          items={[
            { key: 'dashboard', label: 'Dashboard', icon: <span>🏠</span> },
            { key: 'settings', label: 'Settings', icon: <span>⚙</span> },
          ]}
        />,
      ),
      ex(
        'Меню с группами',
        'Поддержка группировки пунктов через проп groups.',
        `<Menu
  groups={[
    {
      key: "main",
      title: "Main menu",
      items: [{ key: "feed", label: "Activity Feed" }]
    },
    {
      key: "admin",
      title: "Administration",
      items: [{ key: "users", label: "User management" }]
    }
  ]}
/>`,
        <UI.Menu
          groups={[
            {
              key: 'main',
              title: 'Main menu',
              items: [{ key: 'feed', label: 'Activity Feed' }],
            },
            {
              key: 'admin',
              title: 'Administration',
              items: [{ key: 'users', label: 'User management' }],
            },
          ]}
        />,
      ),
    ],
  },
  {
    slug: 'menu-item',
    name: 'MenuItem',
    group: 'navigation',
    description: 'Отдельный элемент меню с поддержкой активного состояния.',
    examples: [
      ex(
        'Неактивный пункт',
        'Обычный пункт навигации.',
        `<MenuItem>Сообщения</MenuItem>`,
        <UI.MenuItem>Сообщения</UI.MenuItem>,
      ),
      ex(
        'Активный пункт',
        'Показывает текущий раздел.',
        `<MenuItem active icon={<span>⚙</span>}>Настройки</MenuItem>`,
        <UI.MenuItem active icon={<span>⚙</span>}>
          Настройки
        </UI.MenuItem>,
      ),
    ],
  },
  {
    slug: 'tabs',
    name: 'Tabs',
    group: 'navigation',
    description: 'Контейнер вкладок для переключения разделов внутри одной страницы.',
    examples: [
      ex(
        'Базовые tabs',
        'Переключение по ключу активной вкладки.',
        `<Tabs items={[{ key: "member", label: "Member" }, { key: "keywords", label: "Keywords" }]} activeKey="member" onValueChange={() => {}} />`,
        <UI.Tabs
          activeKey="member"
          items={[
            { key: 'member', label: 'Member' },
            { key: 'keywords', label: 'Keywords' },
          ]}
          onValueChange={noop}
        />,
      ),
      ex(
        'Другой активный таб',
        'Отображение альтернативной секции.',
        `<Tabs ... activeKey="keywords" />`,
        <UI.Tabs
          activeKey="keywords"
          items={[
            { key: 'member', label: 'Member' },
            { key: 'keywords', label: 'Keywords' },
          ]}
          onValueChange={noop}
        />,
      ),
    ],
  },
  {
    slug: 'tab',
    name: 'Tab',
    group: 'navigation',
    description: 'Отдельная вкладка. Обычно используется внутри Tabs.',
    examples: [
      ex(
        'Активная вкладка',
        'Состояние выбранного раздела.',
        `<Tab active>All</Tab>`,
        <UI.Tab active>All</UI.Tab>,
      ),
      ex(
        'Неактивная вкладка',
        'Ожидает переключения.',
        `<Tab>Groups</Tab>`,
        <UI.Tab>Groups</UI.Tab>,
      ),
    ],
  },
  {
    slug: 'breadcrumb',
    name: 'Breadcrumb',
    group: 'navigation',
    description: 'Навигационная цепочка, показывающая путь до текущего раздела.',
    examples: [
      ex(
        'Путь до страницы',
        'Пользователь видит текущий контекст.',
        `<Breadcrumb items={[{ key: "home", label: "Home", href: "#" }, { key: "settings", label: "Settings" }]} />`,
        <UI.Breadcrumb
          items={[
            { key: 'home', label: 'Home', href: '#' },
            { key: 'settings', label: 'Settings' },
          ]}
        />,
      ),
      ex(
        'Кастомный разделитель',
        'Можно сменить символ разделителя.',
        `<Breadcrumb separator=">" items={[...]} />`,
        <UI.Breadcrumb
          items={[
            { key: 'app', label: 'App', href: '#' },
            { key: 'users', label: 'Users', href: '#' },
            { key: 'profile', label: 'Profile' },
          ]}
          separator=">"
        />,
      ),
    ],
  },
  {
    slug: 'pagination',
    name: 'Pagination',
    group: 'navigation',
    description: 'Постраничная навигация с переходом вперед/назад.',
    examples: [
      ex(
        'Базовая пагинация',
        'Текущая страница и общее количество.',
        `<Pagination page={2} totalPages={10} onPageChange={() => {}} />`,
        <UI.Pagination onPageChange={noop} page={2} totalPages={10} />,
      ),
      ex(
        'Расширенная пагинация',
        'С номерами страниц, общим количеством и выбором количества элементов на страницу.',
        `<Pagination
  variant="advanced"
  page={3}
  totalPages={12}
  totalItems={240}
  pageSize={20}
  pageSizeOptions={[10, 20, 50]}
  showPageNumbers
  onPageChange={() => {}}
  onPageSizeChange={() => {}}
/>`,
        <UI.Pagination
          onPageChange={noop}
          onPageSizeChange={noop}
          page={3}
          pageSize={20}
          pageSizeOptions={[10, 20, 50]}
          showPageNumbers
          totalItems={240}
          totalPages={12}
          variant="advanced"
        />,
      ),
    ],
  },
  {
    slug: 'stepper',
    name: 'Stepper',
    group: 'navigation',
    description: 'Пошаговый индикатор прогресса выполнения процесса.',
    examples: [
      ex(
        'Текущий шаг',
        'Подсветка текущего и завершенных этапов.',
        `<Stepper steps={["Профиль", "Безопасность", "Подтверждение"]} activeStep={1} />`,
        <UI.Stepper
          activeStep={1}
          steps={['Профиль', 'Безопасность', 'Подтверждение']}
        />,
      ),
      ex(
        'Завершенные этапы',
        'Последний шаг как активный.',
        `<Stepper steps={["A", "B", "C"]} activeStep={2} />`,
        <UI.Stepper activeStep={2} steps={['A', 'B', 'C']} />,
      ),
    ],
  },
  {
    slug: 'spinner',
    name: 'Spinner',
    group: 'feedback',
    description: 'Анимированный индикатор фоновой загрузки.',
    examples: [
      ex(
        'Средний размер',
        'Стандартный вид индикатора.',
        `<Spinner size="md" />`,
        <UI.Spinner size="md" />,
      ),
      ex(
        'Крупный spinner',
        'Используется для изолированных блоков ожидания.',
        `<Spinner size="lg" />`,
        <UI.Spinner size="lg" />,
      ),
    ],
  },
  {
    slug: 'progress',
    name: 'Progress',
    group: 'feedback',
    description: 'Линейный индикатор степени завершения процесса.',
    examples: [
      ex(
        'Прогресс 45%',
        'Текущее выполнение операции.',
        `<Progress value={45} />`,
        <UI.Progress value={45} />,
      ),
      ex(
        'Произвольный max',
        'Удобен, если шкала не 0..100.',
        `<Progress value={3} max={5} />`,
        <UI.Progress max={5} value={3} />,
      ),
    ],
  },
  {
    slug: 'skeleton',
    name: 'Skeleton',
    group: 'feedback',
    description: 'Визуальная заглушка, пока данные еще загружаются.',
    examples: [
      ex(
        'Строка текста',
        'Скелетон для текстового контента.',
        `<Skeleton className="h-4 w-48" />`,
        <UI.Skeleton className="h-4 w-48" />,
      ),
      ex(
        'Карточка',
        'Скелетон для контейнера.',
        `<Skeleton className="h-24 w-full rounded-xl" />`,
        <UI.Skeleton className="h-24 w-full rounded-xl" />,
      ),
    ],
  },
  {
    slug: 'alert',
    name: 'Alert',
    group: 'feedback',
    description: 'Сообщение о важном состоянии: информация, успех, предупреждение, ошибка.',
    examples: [
      ex(
        'Info alert',
        'Информационное сообщение.',
        `<Alert status="info" title="Обновление">Данные сохранены автоматически.</Alert>`,
        <UI.Alert status="info" title="Обновление">
          Данные сохранены автоматически.
        </UI.Alert>,
      ),
      ex(
        'Alert с иконкой',
        'Сообщение с визуальным акцентом через проп icon.',
        `<Alert status="danger" title="Ошибка" icon={<span>⚠</span>}>Не удалось загрузить данные.</Alert>`,
        <UI.Alert icon={<span>⚠</span>} status="danger" title="Ошибка">
          Не удалось загрузить данные.
        </UI.Alert>,
      ),
    ],
  },
  {
    slug: 'toast',
    name: 'Toast',
    group: 'feedback',
    description: 'Краткое всплывающее уведомление о результате действия.',
    examples: [
      ex(
        'Уведомление об успехе',
        'Показывает итог пользовательского действия.',
        `<Toast title="Готово" description="Изменения сохранены" />`,
        <UI.Toast description="Изменения сохранены" title="Готово" />,
      ),
      ex(
        'С кнопкой закрытия',
        'Позволяет пользователю закрыть уведомление.',
        `<Toast title="Внимание" description="Требуется подтверждение" onClose={() => {}} />`,
        <UI.Toast
          description="Требуется подтверждение"
          onClose={noop}
          title="Внимание"
        />,
      ),
    ],
  },
  {
    slug: 'tooltip',
    name: 'Tooltip',
    group: 'feedback',
    description: 'Подсказка, которая поясняет значение или действие элемента.',
    examples: [
      ex(
        'Tooltip по наведению',
        'Подсказка открывается при наведении или фокусе.',
        `<Tooltip content="Настройки профиля"><Button size="sm">Наведи</Button></Tooltip>`,
        <UI.Tooltip content="Настройки профиля">
          <UI.Button size="sm" variant="secondary">
            Наведи
          </UI.Button>
        </UI.Tooltip>,
      ),
      ex(
        'Краткая подсказка',
        'Может использоваться для IconButton.',
        `<Tooltip content="Поиск"><IconButton label="Поиск" icon={<span>🔍</span>} /></Tooltip>`,
        <UI.Tooltip content="Поиск">
          <UI.IconButton icon={<span>🔍</span>} label="Поиск" />
        </UI.Tooltip>,
      ),
    ],
  },
  {
    slug: 'popover',
    name: 'Popover',
    group: 'feedback',
    description: 'Всплывающее окно с дополнительным контентом и действиями.',
    examples: [
      ex(
        'Popover по клику',
        'Открывается и закрывается по клику на trigger.',
        `<Popover trigger={<Button size="sm">Открыть</Button>} content={<Text>Текст поповера</Text>} />`,
        <UI.Popover
          content={<UI.Text>Текст поповера</UI.Text>}
          trigger={<UI.Button size="sm">Открыть</UI.Button>}
        />,
      ),
      ex(
        'С карточным контентом',
        'Можно вложить любой React-контент.',
        `<Popover trigger={<IconButton ... />} content={<Card title="Подсказка">...</Card>} />`,
        <UI.Popover
          content={<UI.Card title="Подсказка">Дополнительная информация</UI.Card>}
          trigger={<UI.IconButton icon={<span>i</span>} label="Инфо" />}
        />,
      ),
    ],
  },
  {
    slug: 'image',
    name: 'Image',
    group: 'media',
    description: 'Компонент изображения с управлением fit-режимом.',
    examples: [
      ex(
        'Cover image',
        'Заполняет контейнер без искажения.',
        `<Image src="https://picsum.photos/200/120" alt="Demo" className="h-24 w-40 rounded-lg" fit="cover" />`,
        <UI.Image
          alt="Demo"
          className="h-24 w-40 rounded-lg"
          fit="cover"
          src="https://picsum.photos/200/120"
        />,
      ),
      ex(
        'Contain image',
        'Полностью вмещает контент изображения.',
        `<Image src="https://picsum.photos/200/120" alt="Demo" className="h-24 w-40 rounded-lg bg-slate-100" fit="contain" />`,
        <UI.Image
          alt="Demo"
          className="h-24 w-40 rounded-lg bg-slate-100"
          fit="contain"
          src="https://picsum.photos/200/120"
        />,
      ),
    ],
  },
  {
    slug: 'avatar',
    name: 'Avatar',
    group: 'media',
    description: 'Аватар пользователя: изображение или fallback с инициалами.',
    examples: [
      ex(
        'Fallback avatar',
        'Когда фото отсутствует, используются инициалы.',
        `<Avatar initials="AR" />`,
        <UI.Avatar initials="AR" />,
      ),
      ex(
        'Размер lg',
        'Увеличенный аватар для карточки профиля.',
        `<Avatar size="lg" initials="UI" />`,
        <UI.Avatar initials="UI" size="lg" />,
      ),
    ],
  },
  {
    slug: 'icon',
    name: 'Icon',
    group: 'media',
    description: 'Базовый контейнер для иконок и символьных glyph-элементов.',
    examples: [
      ex(
        'Символьная иконка',
        'Быстрое отображение текстового glyph.',
        `<Icon glyph="★" size={18} />`,
        <UI.Icon glyph="★" size={18} />,
      ),
      ex(
        'Кастомный размер',
        'Размер регулируется через проп size.',
        `<Icon glyph="⚙" size={24} />`,
        <UI.Icon glyph="⚙" size={24} />,
      ),
    ],
  },
  {
    slug: 'video',
    name: 'Video',
    group: 'media',
    description: 'Плеер для воспроизведения видео-контента.',
    examples: [
      ex(
        'Video placeholder',
        'Базовый рендер видео-элемента.',
        `<Video className="h-32 w-56 bg-slate-900" />`,
        <UI.Video className="h-32 w-56 bg-slate-900" />,
      ),
      ex(
        'С постером',
        'Показывает обложку до воспроизведения.',
        `<Video poster="https://picsum.photos/320/180" className="h-32 w-56" />`,
        <UI.Video className="h-32 w-56" poster="https://picsum.photos/320/180" />,
      ),
    ],
  },
  {
    slug: 'modal',
    name: 'Modal',
    group: 'special',
    description: 'Модальное окно поверх контента для сфокусированных сценариев.',
    examples: [
      ex(
        'Интерактивный modal',
        'Открывается кнопкой и корректно закрывается по overlay/крестику.',
        `<>
  <Button size="sm" onClick={() => setOpen(true)}>Открыть modal</Button>
  <Modal
    open={open}
    onClose={() => setOpen(false)}
    title="Подтверждение"
    footer={
      <>
        <Button size="sm" variant="ghost">Отмена</Button>
        <Button size="sm">Подтвердить</Button>
      </>
    }
  >
    <Text>Вы уверены?</Text>
  </Modal>
</>`,
        <ModalDemo />,
      ),
      ex(
        'Закрытый modal',
        'Не отображается, пока open=false.',
        `<Modal open={false} onClose={() => {}} />`,
        <UI.Modal onClose={noop} open={false} />,
      ),
    ],
  },
  {
    slug: 'drawer',
    name: 'Drawer',
    group: 'special',
    description: 'Выезжающая боковая панель для вторичного контента и настроек.',
    examples: [
      ex(
        'Правый drawer',
        'Интерактивное открытие справа с корректным закрытием.',
        `<>
  <Button size="sm" onClick={() => setOpen(true)}>Открыть drawer</Button>
  <Drawer open={open} side="right" title="Фильтры" onClose={() => setOpen(false)}>
    <Text>Параметры</Text>
  </Drawer>
</>`,
        <DrawerDemo side="right" />,
      ),
      ex(
        'Левый drawer',
        'Может использоваться как мобильное меню.',
        `<Drawer open={open} side="left" title="Навигация" onClose={() => setOpen(false)} />`,
        <DrawerDemo side="left" />,
      ),
      ex(
        'Верхний drawer',
        'Панель, выезжающая сверху.',
        `<Drawer open={open} side="top" title="Быстрые действия" onClose={() => setOpen(false)} />`,
        <DrawerDemo side="top" />,
      ),
      ex(
        'Нижний drawer',
        'Панель, выезжающая снизу.',
        `<Drawer open={open} side="bottom" title="Детали" onClose={() => setOpen(false)} />`,
        <DrawerDemo side="bottom" />,
      ),
    ],
  },
  {
    slug: 'accordion',
    name: 'Accordion',
    group: 'special',
    description: 'Список секций, которые можно разворачивать и сворачивать.',
    examples: [
      ex(
        'Базовый accordion',
        'Позволяет открывать одну секцию за раз.',
        `<Accordion items={[{ key: "a", title: "Секция 1", content: "Контент" }, { key: "b", title: "Секция 2", content: "Контент" }]} />`,
        <UI.Accordion
          items={[
            { key: 'a', title: 'Секция 1', content: 'Контент 1' },
            { key: 'b', title: 'Секция 2', content: 'Контент 2' },
          ]}
        />,
      ),
      ex(
        'С default open',
        'Открытие нужной секции по умолчанию.',
        `<Accordion defaultOpenKey="b" items={[...]} />`,
        <UI.Accordion
          defaultOpenKey="b"
          items={[
            { key: 'a', title: 'A', content: 'A content' },
            { key: 'b', title: 'B', content: 'B content' },
          ]}
        />,
      ),
    ],
  },
  {
    slug: 'collapse',
    name: 'Collapse',
    group: 'special',
    description: 'Контейнер, который показывает/скрывает контент по флагу open.',
    examples: [
      ex(
        'Открытый collapse',
        'Контент видим в развернутом состоянии.',
        `<Collapse open header="Детали">Содержимое блока</Collapse>`,
        <UI.Collapse header="Детали" open>
          Содержимое блока
        </UI.Collapse>,
      ),
      ex(
        'Закрытый collapse',
        'Контент скрыт, остается только заголовок.',
        `<Collapse open={false} header="Дополнительно">...</Collapse>`,
        <UI.Collapse header="Дополнительно" open={false}>
          Скрыто
        </UI.Collapse>,
      ),
    ],
  },
  {
    slug: 'table',
    name: 'Table',
    group: 'special',
    description: 'Таблица для структурированного отображения строк и колонок.',
    examples: [
      ex(
        'Таблица пользователей',
        'Базовый табличный вывод данных.',
        `<Table
  columns={[
    { key: "name", header: "Имя" },
    { key: "role", header: "Роль" }
  ]}
  rows={[
    { name: "Анна", role: "Designer" },
    { name: "Илья", role: "Developer" }
  ]}
  rowKey={(row) => row.name}
/>`,
        <UI.Table
          columns={[
            { key: 'name', header: 'Имя' },
            { key: 'role', header: 'Роль' },
          ]}
          rowKey={(row) => row.name}
          rows={[
            { name: 'Анна', role: 'Designer' },
            { name: 'Илья', role: 'Developer' },
          ]}
        />,
      ),
      ex(
        'Рендер ячейки',
        'Кастомизация вывода значения в колонке.',
        `<Table columns={[{ key: "status", header: "Статус", render: (row) => <Badge>{row.status}</Badge> }]} ... />`,
        <UI.Table
          columns={[
            { key: 'name', header: 'Имя' },
            {
              key: 'status',
              header: 'Статус',
              render: (row: { status: string }) => (
                <UI.Badge variant="primary">{row.status}</UI.Badge>
              ),
            },
          ]}
          rowKey={(row) => row.name}
          rows={[
            { name: 'Анна', status: 'active' },
            { name: 'Илья', status: 'paused' },
          ]}
        />,
      ),
    ],
  },
  {
    slug: 'list',
    name: 'List',
    group: 'special',
    description: 'Список однотипных элементов с единым вертикальным ритмом.',
    examples: [
      ex(
        'Базовый список',
        'Используется для коротких перечней.',
        `<List><ListItem>Первый</ListItem><ListItem>Второй</ListItem></List>`,
        <UI.List>
          <UI.ListItem>Первый</UI.ListItem>
          <UI.ListItem>Второй</UI.ListItem>
        </UI.List>,
      ),
      ex(
        'Список с метаданными',
        'Можно вставлять любую структуру в ListItem.',
        `<List><ListItem><div>Задача <Badge>new</Badge></div></ListItem></List>`,
        <UI.List>
          <UI.ListItem>
            <div className="flex items-center justify-between">
              Задача
              <UI.Badge>new</UI.Badge>
            </div>
          </UI.ListItem>
        </UI.List>,
      ),
    ],
  },
  {
    slug: 'list-item',
    name: 'ListItem',
    group: 'special',
    description: 'Один элемент списка с оформлением карточки.',
    examples: [
      ex(
        'Текстовый элемент',
        'Минимальный вариант ListItem.',
        `<ListItem>Элемент списка</ListItem>`,
        <UI.ListItem>Элемент списка</UI.ListItem>,
      ),
      ex(
        'С action',
        'Внутри можно размещать кнопки и метки.',
        `<ListItem><div className="flex justify-between"><span>Пункт</span><Button size="sm">Открыть</Button></div></ListItem>`,
        <UI.ListItem>
          <div className="flex items-center justify-between">
            <span>Пункт</span>
            <UI.Button size="sm">Открыть</UI.Button>
          </div>
        </UI.ListItem>,
      ),
    ],
  },
  {
    slug: 'tag',
    name: 'Tag',
    group: 'special',
    description: 'Метка для категорий и фильтров контента.',
    examples: [
      ex(
        'Категория',
        'Подпись категории записи.',
        `<Tag>design-system</Tag>`,
        <UI.Tag>design-system</UI.Tag>,
      ),
      ex(
        'Тематическая метка',
        'Используется в фильтрах и карточках.',
        `<Tag className="bg-blue-50 text-blue-700">frontend</Tag>`,
        <UI.Tag className="bg-blue-50 text-blue-700">frontend</UI.Tag>,
      ),
    ],
  },
  {
    slug: 'chip',
    name: 'Chip',
    group: 'special',
    description: 'Компактная метка с возможностью удаления или выбора.',
    examples: [
      ex(
        'Обычный chip',
        'Краткое представление выбранного фильтра.',
        `<Chip>React</Chip>`,
        <UI.Chip>React</UI.Chip>,
      ),
      ex(
        'Удаляемый chip',
        'Показывает кнопку удаления.',
        `<Chip onRemove={() => {}}>TypeScript</Chip>`,
        <UI.Chip onRemove={noop}>TypeScript</UI.Chip>,
      ),
    ],
  },
  {
    slug: 'portal',
    name: 'Portal',
    group: 'utility',
    description: 'Рендерит дочерний контент вне основного дерева DOM.',
    examples: [
      ex(
        'Рендер в body',
        'Нужен для модалок, тултипов и оверлеев.',
        `<Portal><div>Portal content</div></Portal>`,
        <UI.Portal>
          <div className="rounded bg-slate-800 px-2 py-1 text-xs text-white">
            Portal content
          </div>
        </UI.Portal>,
      ),
      ex(
        'С кастомным контейнером',
        'Можно передать конкретный DOM-узел.',
        `<Portal container={document.body}><div>...</div></Portal>`,
        <UI.Text tone="muted">Смотрите код примера для передачи container.</UI.Text>,
      ),
    ],
  },
  {
    slug: 'overlay',
    name: 'Overlay',
    group: 'utility',
    description: 'Полупрозрачный слой поверх интерфейса для модальных сценариев.',
    examples: [
      ex(
        'Базовый overlay',
        'Подложка для модалок и drawer.',
        `<Overlay />`,
        <div className="relative h-24 overflow-hidden rounded-xl border border-slate-200">
          <UI.Overlay className="absolute inset-0" />
        </div>,
      ),
      ex(
        'Кастомная прозрачность',
        'Контроль затемнения через className.',
        `<Overlay className="absolute inset-0 bg-slate-900/50" />`,
        <div className="relative h-24 overflow-hidden rounded-xl border border-slate-200">
          <UI.Overlay className="absolute inset-0 bg-slate-900/50" />
        </div>,
      ),
    ],
  },
  {
    slug: 'scroll-area',
    name: 'ScrollArea',
    group: 'utility',
    description: 'Область с внутренней прокруткой и ограничением высоты.',
    examples: [
      ex(
        'Ограниченная высота',
        'Прокрутка только внутри контейнера.',
        `<ScrollArea maxHeight={100}>...</ScrollArea>`,
        <UI.ScrollArea maxHeight={100}>
          <div className="space-y-2">
            {Array.from({ length: 8 }).map((_, index) => (
              <UI.ListItem key={index}>Элемент {index + 1}</UI.ListItem>
            ))}
          </div>
        </UI.ScrollArea>,
      ),
      ex(
        'Кастомная высота',
        'Можно менять maxHeight под контекст.',
        `<ScrollArea maxHeight={140}>...</ScrollArea>`,
        <UI.ScrollArea maxHeight={140}>
          <div className="space-y-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <UI.ListItem key={index}>Пункт {index + 1}</UI.ListItem>
            ))}
          </div>
        </UI.ScrollArea>,
      ),
    ],
  },
  {
    slug: 'aspect-ratio',
    name: 'AspectRatio',
    group: 'utility',
    description: 'Контейнер, сохраняющий фиксированное соотношение сторон.',
    examples: [
      ex(
        '16:9',
        'Видеоблок или hero-изображение.',
        `<AspectRatio ratio={16 / 9}><Image ... /></AspectRatio>`,
        <UI.AspectRatio ratio={16 / 9}>
          <UI.Image
            alt="Demo"
            className="h-full w-full rounded-xl"
            src="https://picsum.photos/640/360"
          />
        </UI.AspectRatio>,
      ),
      ex(
        '1:1',
        'Квадратные превью и аватары.',
        `<AspectRatio ratio={1}><div>Square</div></AspectRatio>`,
        <UI.AspectRatio ratio={1}>
          <div className="flex h-full w-full items-center justify-center rounded-xl bg-slate-100">
            Square
          </div>
        </UI.AspectRatio>,
      ),
    ],
  },
  {
    slug: 'visually-hidden',
    name: 'VisuallyHidden',
    group: 'utility',
    description:
      'Визуально скрытый, но доступный для скринридеров текст (a11y-подписи).',
    examples: [
      ex(
        'Подпись для иконки',
        'Делает иконку понятной для ассистивных технологий.',
        `<button><Icon glyph="⚙" /><VisuallyHidden>Настройки</VisuallyHidden></button>`,
        <button className="inline-flex items-center rounded border border-slate-200 px-2 py-1">
          <UI.Icon glyph="⚙" />
          <UI.VisuallyHidden>Настройки</UI.VisuallyHidden>
        </button>,
      ),
      ex(
        'Скрытый текст рядом',
        'Скрытый label для интерактивного элемента.',
        `<VisuallyHidden>Доступное описание</VisuallyHidden>`,
        <UI.VisuallyHidden>Доступное описание</UI.VisuallyHidden>,
      ),
    ],
  },
  {
    slug: 'spacer',
    name: 'Spacer',
    group: 'utility',
    description: 'Утилита для управления фиксированным пространством между элементами.',
    examples: [
      ex(
        'Горизонтальный spacer',
        'Раздвигает элементы на заданный размер.',
        `<div className="flex items-center"><Badge>A</Badge><Spacer size={12} /><Badge>B</Badge></div>`,
        <div className="flex items-center">
          <UI.Badge>A</UI.Badge>
          <UI.Spacer size={12} />
          <UI.Badge>B</UI.Badge>
        </div>,
      ),
      ex(
        'Вертикальный spacer',
        'Используется и в колонках.',
        `<div><Text>Top</Text><Spacer size={8} /><Text>Bottom</Text></div>`,
        <div>
          <UI.Text>Top</UI.Text>
          <UI.Spacer size={8} />
          <UI.Text>Bottom</UI.Text>
        </div>,
      ),
    ],
  },
  {
    slug: 'app-shell',
    name: 'AppShell',
    group: 'domain',
    description: 'Каркас приложения: sidebar + topbar + рабочая область контента.',
    examples: [
      ex(
        'Базовый shell',
        'Повторяемая структура страниц приложения.',
        `<AppShell sidebar={<Menu items={[...]} />} topbar={<TopbarSearch />}>Контент</AppShell>`,
        <UI.AppShell
          sidebar={
            <UI.Menu
              activeKey="dashboard"
              items={[
                { key: 'dashboard', label: 'Dashboard' },
                { key: 'settings', label: 'Settings' },
              ]}
            />
          }
          topbar={<UI.TopbarSearch onSubmitSearch={noop} />}
        >
          <UI.Card title="Контент">Основная область страницы</UI.Card>
        </UI.AppShell>,
      ),
      ex(
        'Без topbar',
        'Можно использовать только sidebar и контент.',
        `<AppShell sidebar={<Menu>...</Menu>}>...</AppShell>`,
        <UI.Text tone="muted">См. код примера для композиции без topbar.</UI.Text>,
      ),
    ],
  },
  {
    slug: 'sidebar-section',
    name: 'SidebarSection',
    group: 'domain',
    description: 'Секция бокового меню с заголовком группы и набором пунктов.',
    examples: [
      ex(
        'Группа Main menu',
        'Группировка пунктов по разделам.',
        `<SidebarSection title="Main menu"><MenuItem>Dashboard</MenuItem></SidebarSection>`,
        <UI.SidebarSection title="Main menu">
          <UI.MenuItem>Dashboard</UI.MenuItem>
          <UI.MenuItem active>Activity</UI.MenuItem>
        </UI.SidebarSection>,
      ),
      ex(
        'Группа Support',
        'Отдельный блок вспомогательной навигации.',
        `<SidebarSection title="Support"><MenuItem>Help</MenuItem></SidebarSection>`,
        <UI.SidebarSection title="Support">
          <UI.MenuItem>Help</UI.MenuItem>
        </UI.SidebarSection>,
      ),
    ],
  },
  {
    slug: 'sidebar-profile-card',
    name: 'SidebarProfileCard',
    group: 'domain',
    description: 'Компактный профиль пользователя в нижней части сайдбара.',
    examples: [
      ex(
        'Базовый профиль',
        'Имя и подпись под аватаром.',
        `<SidebarProfileCard name="Austin Martin" subtitle="austin@gmail.com" initials="AM" />`,
        <UI.SidebarProfileCard name="Austin Martin" subtitle="austin@gmail.com" />,
      ),
      ex(
        'С изображением',
        'Если доступен URL фото пользователя.',
        `<SidebarProfileCard name="Roman" subtitle="Product Designer" avatarSrc="..." />`,
        <UI.SidebarProfileCard
          avatarSrc="https://picsum.photos/64/64"
          name="Roman"
          subtitle="Product Designer"
        />,
      ),
    ],
  },
  {
    slug: 'topbar-search',
    name: 'TopbarSearch',
    group: 'domain',
    description: 'Поисковая строка в верхней панели с кнопкой запуска поиска.',
    examples: [
      ex(
        'Базовый поиск',
        'Поле и кнопка отправки формы.',
        `<TopbarSearch onSubmitSearch={() => {}} placeholder="Search activity..." />`,
        <UI.TopbarSearch onSubmitSearch={noop} placeholder="Search activity..." />,
      ),
      ex(
        'Контролируемое значение',
        'Значение управляется внешним стейтом.',
        `<TopbarSearch value={value} onValueChange={setValue} />`,
        <UI.TopbarSearch onSubmitSearch={noop} value="Account settings" />,
      ),
    ],
  },
  {
    slug: 'topbar-actions',
    name: 'TopbarActions',
    group: 'domain',
    description: 'Контейнер действий в topbar: уведомления, тема, профиль и т.д.',
    examples: [
      ex(
        'Набор icon actions',
        'Группировка компактных кнопок.',
        `<TopbarActions actions={[<IconButton ... />, <IconButton ... />]} />`,
        <UI.TopbarActions
          actions={[
            <UI.IconButton icon={<span>🔔</span>} key="n1" label="Уведомления" />,
            <UI.IconButton icon={<span>☀</span>} key="n2" label="Тема" />,
          ]}
        />,
      ),
      ex(
        'Смешанные действия',
        'Можно передавать любые React-узлы.',
        `<TopbarActions actions={[<Badge>3</Badge>, <Button size="sm">Upload</Button>]} />`,
        <UI.TopbarActions
          actions={[
            <UI.Badge key="a1">3</UI.Badge>,
            <UI.Button key="a2" size="sm">
              Upload
            </UI.Button>,
          ]}
        />,
      ),
    ],
  },
  {
    slug: 'filter-bar',
    name: 'FilterBar',
    group: 'domain',
    description:
      'Композиционный блок фильтров страницы: start / middle / end зоны контрола.',
    examples: [
      ex(
        'Фильтры ленты',
        'Комбинация tabs, select и action-кнопки.',
        `<FilterBar start={<Tabs ... />} middle={<Select ... />} end={<Button>Upload</Button>} />`,
        <UI.FilterBar
          end={<UI.Button size="sm">Upload</UI.Button>}
          middle={
            <UI.Select
              options={[
                { label: 'Date', value: 'date' },
                { label: 'Tag', value: 'tag' },
              ]}
            />
          }
          start={
            <UI.Tabs
              activeKey="member"
              items={[
                { key: 'member', label: 'Member' },
                { key: 'keywords', label: 'Keywords' },
              ]}
              onValueChange={noop}
            />
          }
        />,
      ),
      ex(
        'Только start/end',
        'Middle-слот необязателен.',
        `<FilterBar start={<Input />} end={<Button>Apply</Button>} />`,
        <UI.FilterBar
          end={<UI.Button size="sm">Apply</UI.Button>}
          start={<UI.Input placeholder="Search..." />}
        />,
      ),
    ],
  },
  {
    slug: 'activity-member-list',
    name: 'ActivityMemberList',
    group: 'domain',
    description: 'Список участников активности с чекбоксами и счетчиками.',
    examples: [
      ex(
        'Базовый список участников',
        'Демонстрация name/role/count/checked.',
        `<ActivityMemberList members={[...]} onToggleMember={() => {}} />`,
        <UI.ActivityMemberList
          members={[
            {
              id: '1',
              name: 'Gretchen Kenter',
              role: 'Product Manager',
              count: 24,
              checked: true,
            },
            {
              id: '2',
              name: 'Wilson Bothman',
              role: 'Frontend Developer',
              count: 32,
            },
          ]}
          onToggleMember={noop}
        />,
      ),
      ex(
        'С аватаром',
        'Поддержка изображения пользователя.',
        `<ActivityMemberList members={[{ id: "1", name: "Anna", avatarSrc: "...", checked: true }]} />`,
        <UI.ActivityMemberList
          members={[
            {
              id: '3',
              name: 'Anna Stone',
              avatarSrc: 'https://picsum.photos/40/40',
              checked: true,
            },
          ]}
        />,
      ),
    ],
  },
  {
    slug: 'activity-timeline',
    name: 'ActivityTimeline',
    group: 'domain',
    description: 'Лента событий с пользователем, временем и текстом действия.',
    examples: [
      ex(
        'Список событий',
        'Основная структура Activity Feed.',
        `<ActivityTimeline events={[{ id: "1", user: "Gretchen", time: "09:00", message: "добавил реакцию" }]} />`,
        <UI.ActivityTimeline
          events={[
            {
              id: '1',
              user: 'Gretchen',
              time: '09:00',
              message: 'добавил реакцию в #product-website',
            },
            {
              id: '2',
              user: 'Wilson',
              time: '10:00',
              message: 'создал сообщение в #product-app',
            },
          ]}
        />,
      ),
      ex(
        'С аватарами',
        'Добавляет визуальную идентификацию автора.',
        `<ActivityTimeline events={[{ ..., avatarSrc: "..." }]} />`,
        <UI.ActivityTimeline
          events={[
            {
              id: '3',
              user: 'Corey',
              time: '11:00',
              message: 'присоединился к #reactteam',
              avatarSrc: 'https://picsum.photos/40/40',
            },
          ]}
        />,
      ),
    ],
  },
  {
    slug: 'attachment-pill',
    name: 'AttachmentPill',
    group: 'domain',
    description: 'Плашка вложения: тип файла, название и метаинформация.',
    examples: [
      ex(
        'PDF файл',
        'Отображение типа и размера.',
        `<AttachmentPill type="PDF" name="brief-feature-chats" meta="12 MB" />`,
        <UI.AttachmentPill meta="12 MB" name="brief-feature-chats" type="PDF" />,
      ),
      ex(
        'DOC файл',
        'Аналогично для других форматов.',
        `<AttachmentPill type="DOC" name="requirement-research" meta="32 MB" />`,
        <UI.AttachmentPill meta="32 MB" name="requirement-research" type="DOC" />,
      ),
    ],
  },
  {
    slug: 'profile-info-card',
    name: 'ProfileInfoCard',
    group: 'domain',
    description: 'Карточка для секций профиля с action-кнопкой в заголовке.',
    examples: [
      ex(
        'Информация профиля',
        'Заголовок и редактирование секции.',
        `<ProfileInfoCard title="Personal Information" action={<Button size="sm">Edit</Button>}>...</ProfileInfoCard>`,
        <UI.ProfileInfoCard
          action={<UI.Button size="sm">Edit</UI.Button>}
          title="Personal Information"
        >
          <UI.Grid columns={2} gap={12}>
            <UI.Text tone="muted">First Name: Austin</UI.Text>
            <UI.Text tone="muted">Last Name: Martin</UI.Text>
          </UI.Grid>
        </UI.ProfileInfoCard>,
      ),
      ex(
        'Секция адреса',
        'Использование без action при read-only режиме.',
        `<ProfileInfoCard title="Address">...</ProfileInfoCard>`,
        <UI.ProfileInfoCard title="Address">
          <UI.Text tone="muted">Leeds, East London</UI.Text>
        </UI.ProfileInfoCard>,
      ),
    ],
  },
  {
    slug: 'stat-pill',
    name: 'StatPill',
    group: 'domain',
    description: 'Компактный индикатор метрики из label + value.',
    examples: [
      ex(
        'Счетчик канала',
        'Показывает значение рядом с названием.',
        `<StatPill label="Channel" value={12} />`,
        <UI.StatPill label="Channel" value={12} />,
      ),
      ex(
        'Счетчик групп',
        'Используется в панелях фильтрации.',
        `<StatPill label="Groups" value={6} />`,
        <UI.StatPill label="Groups" value={6} />,
      ),
    ],
  },
]

export const componentDocsBySlug: Record<string, ComponentDoc> = docs.reduce(
  (acc, item) => {
    acc[item.slug] = item
    return acc
  },
  {} as Record<string, ComponentDoc>,
)

export const componentGroups: ComponentGroup[] = [
  {
    key: 'basic',
    title: 'Базовые элементы',
    items: docs
      .filter((item) => item.group === 'basic')
      .map((item) => ({ slug: item.slug, name: item.name })),
  },
  {
    key: 'layout',
    title: 'Контейнеры и макеты',
    items: docs
      .filter((item) => item.group === 'layout')
      .map((item) => ({ slug: item.slug, name: item.name })),
  },
  {
    key: 'typography',
    title: 'Текстовые элементы',
    items: docs
      .filter((item) => item.group === 'typography')
      .map((item) => ({ slug: item.slug, name: item.name })),
  },
  {
    key: 'forms',
    title: 'Формы и ввод данных',
    items: docs
      .filter((item) => item.group === 'forms')
      .map((item) => ({ slug: item.slug, name: item.name })),
  },
  {
    key: 'navigation',
    title: 'Навигация',
    items: docs
      .filter((item) => item.group === 'navigation')
      .map((item) => ({ slug: item.slug, name: item.name })),
  },
  {
    key: 'feedback',
    title: 'Индикаторы состояния',
    items: docs
      .filter((item) => item.group === 'feedback')
      .map((item) => ({ slug: item.slug, name: item.name })),
  },
  {
    key: 'media',
    title: 'Медиа элементы',
    items: docs
      .filter((item) => item.group === 'media')
      .map((item) => ({ slug: item.slug, name: item.name })),
  },
  {
    key: 'special',
    title: 'Специальные компоненты',
    items: docs
      .filter((item) => item.group === 'special')
      .map((item) => ({ slug: item.slug, name: item.name })),
  },
  {
    key: 'utility',
    title: 'Вспомогательные элементы',
    items: docs
      .filter((item) => item.group === 'utility')
      .map((item) => ({ slug: item.slug, name: item.name })),
  },
  {
    key: 'domain',
    title: 'Составные (из макетов)',
    items: docs
      .filter((item) => item.group === 'domain')
      .map((item) => ({ slug: item.slug, name: item.name })),
  },
]
