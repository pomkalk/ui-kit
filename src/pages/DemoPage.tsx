import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  FaBell,
  FaChartLine,
  FaCommentDots,
  FaFileLines,
  FaGear,
  FaHouse,
  FaMagnifyingGlass,
  FaMoon,
  FaUsers,
} from 'react-icons/fa6'
import * as UI from '../components'

type DemoView = 'settings' | 'activity'

function DemoSidebar({ view, onChange }: { view: DemoView; onChange: (next: DemoView) => void }) {
  const { t } = useTranslation()
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 px-2">
        <div className="h-7 w-7 rounded-md bg-blue-500/10" />
        <span className="text-lg font-semibold text-slate-900">{t('demo_appName')}</span>
      </div>

      <UI.SidebarSection
        title={t('demo_sidebarMainMenu')}
        items={[
          { key: 'dashboard', label: t('demo_sidebarDashboard'), icon: <FaHouse /> },
          { key: 'employees', label: t('demo_sidebarEmployees'), icon: <FaUsers /> },
          {
            key: 'activity',
            label: t('demo_sidebarActivityFeed'),
            icon: <FaChartLine />,
            active: view === 'activity',
            onClick: () => onChange('activity'),
          },
          { key: 'messages', label: t('demo_sidebarMessages'), icon: <FaCommentDots /> },
          { key: 'reports', label: t('demo_sidebarReports'), icon: <FaFileLines /> },
        ]}
      />

      <UI.SidebarSection
        title={t('demo_sidebarAdministration')}
        items={[
          { key: 'user-management', label: t('demo_sidebarUserManagement'), icon: <FaUsers /> },
          {
            key: 'settings',
            label: t('demo_sidebarSettings'),
            icon: <FaGear />,
            active: view === 'settings',
            onClick: () => onChange('settings'),
          },
        ]}
      />

      <div className="pt-4">
        <UI.SidebarProfileCard
          avatarSrc="https://picsum.photos/80/80"
          name="Austin Martin"
          subtitle="austin@gmail.com"
        />
      </div>
    </div>
  )
}

function DemoTopbar() {
  const { t } = useTranslation()
  return (
    <div className="flex items-center justify-between gap-3">
      <UI.TopbarSearch placeholder={t('demo_topbarSearchPlaceholder')} />
      <UI.TopbarActions
        actions={[
          <UI.IconButton icon={<FaBell />} key="bell" label={t('demo_topbarNotifications')} />,
          <UI.IconButton icon={<FaCommentDots />} key="messages" label={t('demo_topbarMessages')} />,
          <UI.IconButton icon={<FaMoon />} key="theme" label={t('demo_topbarTheme')} />,
        ]}
      />
    </div>
  )
}

function SettingsDemo() {
  const { t } = useTranslation()
  return (
    <UI.Grid columns={2} gap={16}>
      <UI.Card title={t('demo_accountTabs')}>
        <UI.Tabs
          activeKey="profile"
          items={[
            { key: 'profile', label: t('demo_myProfile') },
            { key: 'security', label: t('demo_passwordSecurity') },
            { key: 'team', label: t('demo_teams') },
          ]}
          onValueChange={() => undefined}
        />
      </UI.Card>

      <UI.Stack>
        <UI.ProfileInfoCard
          action={<UI.Button size="sm" variant="secondary">{t('demo_edit')}</UI.Button>}
          title={t('demo_myProfile')}
        >
          <div className="flex items-center gap-3">
            <UI.Avatar size="lg" src="https://picsum.photos/96/96" />
            <UI.Stack gapClassName="gap-1">
              <UI.Text>{t('demo_uiUxDesigner')}</UI.Text>
              <UI.Text tone="muted">{t('demo_location')}</UI.Text>
            </UI.Stack>
          </div>
        </UI.ProfileInfoCard>

        <UI.ProfileInfoCard
          action={<UI.Button size="sm" variant="secondary">{t('demo_edit')}</UI.Button>}
          title={t('demo_personalInfo')}
        >
          <UI.Grid columns={2} gap={10}>
            <UI.Text tone="muted">{t('demo_firstName')}: Austin</UI.Text>
            <UI.Text tone="muted">{t('demo_lastName')}: Martin</UI.Text>
            <UI.Text tone="muted">{t('demo_email')}: austinmartin@gmail.com</UI.Text>
            <UI.Text tone="muted">{t('demo_phone')}: +09-345-346-46</UI.Text>
          </UI.Grid>
        </UI.ProfileInfoCard>
      </UI.Stack>
    </UI.Grid>
  )
}

function ActivityDemo() {
  const { t } = useTranslation()
  return (
    <UI.Grid columns={2} gap={16}>
      <UI.Card title={t('demo_members')}>
        <UI.ActivityMemberList
          members={[
            { id: '1', name: 'Gretchen Kenter', role: 'Product Manager', checked: true, count: 24 },
            { id: '2', name: 'Wilson Bothman', role: 'Frontend Developer', checked: true, count: 32 },
            { id: '3', name: 'Marilyn Bergson', role: 'Backend Engineer', checked: false, count: 98 },
            { id: '4', name: 'Corey Carder', role: 'Data Analyst', checked: true, count: 22 },
          ]}
        />
      </UI.Card>
      <UI.Card
        actions={<UI.Button size="sm">{t('demo_uploadFile')}</UI.Button>}
        title={
          <div className="flex items-center gap-2">
            <FaMagnifyingGlass className="text-slate-400" />
            <span>{t('demo_activityFeed')}</span>
          </div>
        }
      >
        <UI.Flex align="center" gap={8} wrap="wrap">
          <UI.StatPill label={t('demo_statAll')} value={3} />
          <UI.StatPill label={t('demo_statChannel')} value={12} />
          <UI.StatPill label={t('demo_statGroups')} value={6} />
        </UI.Flex>
        <UI.Spacer size={12} />
        <UI.ActivityTimeline
          events={[
            { id: 'e1', user: 'Gretchen Kenter', time: '09:00 AM', message: 'added reaction in #product-website' },
            { id: 'e2', user: 'Wilson Bothman', time: '10:00 AM', message: 'created message to #product-app' },
            { id: 'e3', user: 'Corey Carder', time: '11:00 AM', message: 'request joined #reactteam groups' },
          ]}
        />
      </UI.Card>
    </UI.Grid>
  )
}

export function DemoPage() {
  const { t } = useTranslation()
  const [view, setView] = useState<DemoView>('settings')

  return (
    <div className="space-y-4">
      <UI.Card title={t('demo_pageTitle')}>
        <UI.Paragraph>
          {t('demo_pageDescription')}
        </UI.Paragraph>
      </UI.Card>

      <UI.AppShell
        sidebar={<DemoSidebar onChange={setView} view={view} />}
        topbar={<DemoTopbar />}
      >
        {view === 'settings' ? <SettingsDemo /> : <ActivityDemo />}
      </UI.AppShell>
    </div>
  )
}

export default DemoPage
