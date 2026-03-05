/**
 * Тексты приложения, которые разработчик может задать сам:
 * layout, страницы (welcome, demo), подписи меню и т.д.
 */
export const userResources = {
  ru: {
    translation: {
      // Layout (сайдбар документации)
      layout_appName: 'UI Kit',
      layout_catalog: 'Каталог компонентов',
      layout_language: 'Язык',
      layout_navWelcome: 'Приветствие',
      layout_navDemo: 'Demo',
      layout_langRu: 'Русский',
      layout_langEn: 'English',

      // Welcome
      welcome_title: 'Добро пожаловать в UI Kit Docs',
      welcome_intro:
        'В левом меню собраны все компоненты, сгруппированные по логике использования. Выберите компонент, чтобы открыть его отдельную страницу с описанием и примерами.',
      welcome_features:
        'На каждой странице доступны: описание на русском языке, визуальные демо и код каждого примера.',

      // Demo
      demo_pageTitle: 'Demo Page',
      demo_pageDescription:
        'Демо-экран собран из существующих компонентов UI Kit по мотивам референсов Settings и Activity Feed.',
      demo_appName: 'AlphaWave',
      demo_sidebarMainMenu: 'Main menu',
      demo_sidebarDashboard: 'Dashboard',
      demo_sidebarEmployees: 'Employees',
      demo_sidebarActivityFeed: 'Activity Feed',
      demo_sidebarMessages: 'Messages',
      demo_sidebarReports: 'Reports',
      demo_sidebarAdministration: 'Administration',
      demo_sidebarUserManagement: 'User Management',
      demo_sidebarSettings: 'Settings',
      demo_topbarSearchPlaceholder: 'Search something...',
      demo_topbarNotifications: 'Notifications',
      demo_topbarMessages: 'Messages',
      demo_topbarTheme: 'Theme',
      demo_accountTabs: 'Account Tabs',
      demo_myProfile: 'My Profile',
      demo_passwordSecurity: 'Password & Security',
      demo_teams: 'Teams',
      demo_edit: 'Edit',
      demo_uiUxDesigner: 'UI/UX Designer',
      demo_location: 'Leeds, United Kingdom',
      demo_personalInfo: 'Personal Information',
      demo_firstName: 'First Name',
      demo_lastName: 'Last Name',
      demo_email: 'Email',
      demo_phone: 'Phone',
      demo_members: 'Members',
      demo_activityFeed: 'Activity Feed',
      demo_statAll: 'All',
      demo_statChannel: 'Channel',
      demo_statGroups: 'Groups',
      demo_uploadFile: 'Upload File',
    },
  },
  en: {
    translation: {
      layout_appName: 'UI Kit',
      layout_catalog: 'Component catalog',
      layout_language: 'Language',
      layout_navWelcome: 'Welcome',
      layout_navDemo: 'Demo',
      layout_langRu: 'Русский',
      layout_langEn: 'English',

      welcome_title: 'Welcome to UI Kit Docs',
      welcome_intro:
        'The left menu lists all components grouped by usage. Select a component to open its page with description and examples.',
      welcome_features:
        'Each page includes: description, visual demos, and example code.',

      demo_pageTitle: 'Demo Page',
      demo_pageDescription:
        'Demo screen built from existing UI Kit components, inspired by Settings and Activity Feed references.',
      demo_appName: 'AlphaWave',
      demo_sidebarMainMenu: 'Main menu',
      demo_sidebarDashboard: 'Dashboard',
      demo_sidebarEmployees: 'Employees',
      demo_sidebarActivityFeed: 'Activity Feed',
      demo_sidebarMessages: 'Messages',
      demo_sidebarReports: 'Reports',
      demo_sidebarAdministration: 'Administration',
      demo_sidebarUserManagement: 'User Management',
      demo_sidebarSettings: 'Settings',
      demo_topbarSearchPlaceholder: 'Search something...',
      demo_topbarNotifications: 'Notifications',
      demo_topbarMessages: 'Messages',
      demo_topbarTheme: 'Theme',
      demo_accountTabs: 'Account Tabs',
      demo_myProfile: 'My Profile',
      demo_passwordSecurity: 'Password & Security',
      demo_teams: 'Teams',
      demo_edit: 'Edit',
      demo_uiUxDesigner: 'UI/UX Designer',
      demo_location: 'Leeds, United Kingdom',
      demo_personalInfo: 'Personal Information',
      demo_firstName: 'First Name',
      demo_lastName: 'Last Name',
      demo_email: 'Email',
      demo_phone: 'Phone',
      demo_members: 'Members',
      demo_activityFeed: 'Activity Feed',
      demo_statAll: 'All',
      demo_statChannel: 'Channel',
      demo_statGroups: 'Groups',
      demo_uploadFile: 'Upload File',
    },
  },
} as const
