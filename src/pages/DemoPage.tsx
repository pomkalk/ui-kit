import { useState } from 'react'
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
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 px-2">
        <div className="h-7 w-7 rounded-md bg-blue-500/10" />
        <span className="text-lg font-semibold text-slate-900">AlphaWave</span>
      </div>

      <UI.SidebarSection
        title="Main menu"
        items={[
          { key: 'dashboard', label: 'Dashboard', icon: <FaHouse /> },
          { key: 'employees', label: 'Employees', icon: <FaUsers /> },
          {
            key: 'activity',
            label: 'Activity Feed',
            icon: <FaChartLine />,
            active: view === 'activity',
            onClick: () => onChange('activity'),
          },
          { key: 'messages', label: 'Messages', icon: <FaCommentDots /> },
          { key: 'reports', label: 'Reports', icon: <FaFileLines /> },
        ]}
      />

      <UI.SidebarSection
        title="Administration"
        items={[
          { key: 'user-management', label: 'User Management', icon: <FaUsers /> },
          {
            key: 'settings',
            label: 'Settings',
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
  return (
    <div className="flex items-center justify-between gap-3">
      <UI.TopbarSearch placeholder="Search something..." />
      <UI.TopbarActions
        actions={[
          <UI.IconButton icon={<FaBell />} key="bell" label="Notifications" />,
          <UI.IconButton icon={<FaCommentDots />} key="messages" label="Messages" />,
          <UI.IconButton icon={<FaMoon />} key="theme" label="Theme" />,
        ]}
      />
    </div>
  )
}

function SettingsDemo() {
  return (
    <UI.Grid columns={2} gap={16}>
      <UI.Card title="Account Tabs">
        <UI.Tabs
          activeKey="profile"
          items={[
            { key: 'profile', label: 'My Profile' },
            { key: 'security', label: 'Password & Security' },
            { key: 'team', label: 'Teams' },
          ]}
          onValueChange={() => undefined}
        />
      </UI.Card>

      <UI.Stack>
        <UI.ProfileInfoCard
          action={<UI.Button size="sm" variant="secondary">Edit</UI.Button>}
          title="My Profile"
        >
          <div className="flex items-center gap-3">
            <UI.Avatar size="lg" src="https://picsum.photos/96/96" />
            <UI.Stack gapClassName="gap-1">
              <UI.Text>UI/UX Designer</UI.Text>
              <UI.Text tone="muted">Leeds, United Kingdom</UI.Text>
            </UI.Stack>
          </div>
        </UI.ProfileInfoCard>

        <UI.ProfileInfoCard
          action={<UI.Button size="sm" variant="secondary">Edit</UI.Button>}
          title="Personal Information"
        >
          <UI.Grid columns={2} gap={10}>
            <UI.Text tone="muted">First Name: Austin</UI.Text>
            <UI.Text tone="muted">Last Name: Martin</UI.Text>
            <UI.Text tone="muted">Email: austinmartin@gmail.com</UI.Text>
            <UI.Text tone="muted">Phone: +09-345-346-46</UI.Text>
          </UI.Grid>
        </UI.ProfileInfoCard>
      </UI.Stack>
    </UI.Grid>
  )
}

function ActivityDemo() {
  return (
    <UI.Grid columns={2} gap={16}>
      <UI.Card title="Members">
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
        actions={<UI.Button size="sm">Upload File</UI.Button>}
        title={
          <div className="flex items-center gap-2">
            <FaMagnifyingGlass className="text-slate-400" />
            <span>Activity Feed</span>
          </div>
        }
      >
        <UI.Flex align="center" gap={8} wrap="wrap">
          <UI.StatPill label="All" value={3} />
          <UI.StatPill label="Channel" value={12} />
          <UI.StatPill label="Groups" value={6} />
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
  const [view, setView] = useState<DemoView>('settings')

  return (
    <div className="space-y-4">
      <UI.Card title="Demo Page">
        <UI.Paragraph>
          Демо-экран собран из существующих компонентов UI Kit по мотивам референсов
          Settings и Activity Feed.
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
