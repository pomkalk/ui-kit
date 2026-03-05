# UI Kit Guideline

## 1. Scope and Design Intent

This guideline defines the visual language and component behavior for an admin-style web application shown in the provided mockups (Account Settings and Activity Feed screens). The system is:

- Clean and neutral first (light gray surfaces, low-contrast separators).
- Accent-driven (blue as primary interactive color).
- Dense but readable (many controls in one viewport with stable rhythm).
- Card-based (content blocks with subtle borders and rounded corners).

The goal of this document is to keep implementation consistent across pages, states, and features.

## 2. Visual Principles

- Clarity over decoration: prioritize hierarchy, spacing, and contrast.
- Predictable interaction: same state logic for all interactive controls.
- Soft geometry: medium/large radii instead of sharp corners.
- Low-noise surfaces: minimal shadows, mostly border-based separation.
- Information layering: shell -> section -> card -> item.

## 3. Layout System

## 3.1 Application Shell

- Outer frame centered with max content width and rounded corners.
- Left sidebar is fixed-width.
- Main area contains:
  - Top bar (search + global actions).
  - Page header.
  - Page content blocks.

Recommended sizing:

- Sidebar width: `232px` (desktop).
- Content padding: `24px`.
- Gap between major columns/sections: `16px`.
- Top bar height: `56px`.

## 3.2 Content Grids and Regions

- Use `Grid` for 2-column desktop compositions (for settings page).
- Use nested `Flex/Stack` for cards and lists.
- Keep list-heavy screens split into filter rail + primary feed.

Suggested breakpoints:

- `sm >= 640px`
- `md >= 768px`
- `lg >= 1024px`
- `xl >= 1280px`
- `2xl >= 1440px`

Responsive behavior:

- `< lg`: sidebar collapses into drawer.
- `< md`: secondary columns stack vertically.
- Controls wrap to 2 lines before shrinking below usable tap size.

## 4. Design Tokens

## 4.1 Color Tokens

Base palette (derived from mockups):

- `--color-bg-app: #EEF1F8` (outer background)
- `--color-bg-surface: #F6F7FB` (shell surface)
- `--color-bg-panel: #FFFFFF` (cards, inputs, popups)
- `--color-border-soft: #E9EDF3`
- `--color-border-default: #DFE5EE`
- `--color-text-primary: #1A1F2C`
- `--color-text-secondary: #6E7788`
- `--color-text-tertiary: #97A1B2`
- `--color-primary-500: #0D8BFF`
- `--color-primary-600: #0075EC`
- `--color-primary-050: #EAF4FF`
- `--color-danger-500: #C93B3B`
- `--color-success-500: #1FA971`
- `--color-warning-500: #F2A63B`

State mapping:

- Hover on neutral controls: background `#F7F9FC`.
- Active/selected: primary tint `--color-primary-050`.
- Focus ring: `0 0 0 3px rgba(13, 139, 255, 0.25)`.
- Disabled: opacity `0.45`, no elevation, no saturated accent.

## 4.2 Typography Tokens

Use one sans-serif family (for example: Inter, Manrope, or SF Pro Text).

- `--font-size-12: 12px` (helper/meta)
- `--font-size-14: 14px` (default body)
- `--font-size-16: 16px` (dense heading/body)
- `--font-size-20: 20px` (section/page title)

Font weights:

- `400` regular
- `500` medium
- `600` semibold

Line-heights:

- `1.3` for headings
- `1.45` for body
- `1.2` for compact labels/counters

## 4.3 Spacing Tokens

Base step: `4px`.

- `--space-1: 4px`
- `--space-2: 8px`
- `--space-3: 12px`
- `--space-4: 16px`
- `--space-5: 20px`
- `--space-6: 24px`
- `--space-8: 32px`

Usage:

- Between text and field label: `8px`.
- Between related controls: `8-12px`.
- Card internal padding: `16-20px`.
- Vertical block rhythm: `16px`.

## 4.4 Radius and Border

- `--radius-sm: 8px` (chips, badges, compact buttons)
- `--radius-md: 10px` (inputs, tabs)
- `--radius-lg: 14px` (cards)
- `--radius-xl: 16px` (shell containers)

Borders:

- Default border width: `1px`.
- Do not use heavy borders unless table emphasis is needed.

## 4.5 Elevation

Main style is border-first. Shadows are optional and subtle:

- `--shadow-sm: 0 1px 2px rgba(16, 24, 40, 0.06)`
- `--shadow-md: 0 8px 20px rgba(16, 24, 40, 0.08)` (modals/popovers only)

## 4.6 Motion

- Standard transition: `160ms ease`.
- Enter/exit overlays: `180-220ms`.
- Scale transitions should not exceed `1.02` for hover.

## 5. Component Inventory (Required)

Below is the complete set of required components. Priority marks:

- `P0` core for first release.
- `P1` important next layer.
- `P2` advanced/edge patterns.

### 5.1 Basic Controls

- `Button` (P0) - variants: primary, secondary, ghost, danger, link.
- `IconButton` (P0) - square, compact, optional tooltip.
- `Link` (P0) - inline and standalone, supports visited/hover/focus.
- `Badge` (P0) - status and counters.

### 5.2 Containers and Layout

- `Box` (P0) - primitive wrapper.
- `Card` (P0) - bordered surface with optional header/actions.
- `Grid` (P0) - responsive column layout.
- `Flex` (P0) - alignment utility container.
- `Stack` (P0) - spacing-first linear layout.
- `Divider` (P0) - horizontal/vertical separators.

### 5.3 Typography

- `Text` (P0) - semantic text primitive.
- `Heading` (P0) - h1-h6 tokens.
- `Paragraph` (P0) - long-form body.
- `Label` (P0) - form and metadata labels.

### 5.4 Forms and Input

- `Input` (P0)
- `Textarea` (P1)
- `Select` (P0)
- `Checkbox` (P0)
- `Radio` (P1)
- `Toggle` (P1)
- `Slider` (P2)
- `DatePicker` (P1)
- `TimePicker` (P2)
- `FileInput` (P1)

### 5.5 Navigation

- `Menu` (P0)
- `MenuItem` (P0)
- `Tabs` (P0)
- `Tab` (P0)
- `Breadcrumb` (P1)
- `Pagination` (P0)
- `Stepper` (P2)

### 5.6 Feedback and Status

- `Spinner` (P0)
- `Progress` (P1)
- `Skeleton` (P0)
- `Alert` (P0)
- `Toast` (P1)
- `Tooltip` (P0)
- `Popover` (P1)

### 5.7 Media

- `Image` (P0)
- `Avatar` (P0)
- `Icon` (P0)
- `Video` (P2)

### 5.8 Complex Components

- `Modal` (P0)
- `Drawer` (P0)
- `Accordion` (P1)
- `Collapse` (P1)
- `Table` (P1)
- `List` (P0)
- `ListItem` (P0)
- `Tag` (P0)
- `Chip` (P0)

### 5.9 Utility Components

- `Portal` (P0)
- `Overlay` (P0)
- `ScrollArea` (P1)
- `AspectRatio` (P1)
- `VisuallyHidden` (P0)
- `Spacer` (P0)

## 6. Additional Domain Components from Mockups

To reproduce the provided screens efficiently, add these composed components on top of primitives:

- `AppShell` - sidebar + topbar + content slot.
- `SidebarSection` - titled menu groups (`Main menu`, `Finance`, etc.).
- `SidebarProfileCard` - compact user profile at sidebar footer.
- `TopbarSearch` - input with attached action button.
- `TopbarActions` - notification/theme/settings icon controls.
- `FilterBar` - tabs + search + select-like filters + action button.
- `ActivityMemberList` - selectable people list with counters.
- `ActivityTimeline` - feed rows with timestamp + actions.
- `AttachmentPill` - file chip with type badge and size meta.
- `ProfileInfoCard` - profile header + editable info blocks.
- `StatPill` - small metric bubble (`All 3`, `Channel 12`).

## 7. Detailed Style Rules by Component Family

## 7.1 Buttons

Sizes:

- `sm`: height `32px`, horizontal padding `12px`.
- `md`: height `36px`, horizontal padding `14px`.
- `lg`: height `40px`, horizontal padding `16px`.

Primary button:

- Background: `--color-primary-500`.
- Text/icon: white.
- Hover: `--color-primary-600`.
- Focus: ring token.

Secondary button:

- Background: `#F3F7FF`.
- Border: `--color-border-default`.
- Text: `--color-text-primary`.

Ghost button:

- Transparent background with neutral hover fill.

## 7.2 Inputs and Form Controls

Common field style:

- Height: `36px`.
- Border radius: `10px`.
- Border: `1px solid --color-border-default`.
- Background: white.
- Placeholder: `--color-text-tertiary`.

Focus:

- Border shifts to primary.
- Add ring token.

Validation:

- Error border/text uses `--color-danger-500`.
- Success helper uses `--color-success-500`.

## 7.3 Sidebar Navigation

- Icon + label left aligned.
- Item height around `36px`.
- Active item: primary-tinted background and darker icon/text.
- Group title in uppercase small text (`12px`, muted color).
- Keep generous vertical breathing room between groups (`16px`).

## 7.4 Tabs, Chips, and Tags

- Tabs use segmented control appearance with rounded pills.
- Active tab has tinted background and medium weight.
- Chips are compact with rounded full/large corners.
- Deletable chips show close icon in muted tone; hover reveals stronger contrast.

## 7.5 Cards

- White panel with `1px` soft border.
- Radius `14-16px`.
- Internal padding `16-20px`.
- Header section separated by divider when actions exist.

## 7.6 Lists and Timelines

- Each row aligns avatar/icon, content, metadata, and actions.
- Timestamp text uses tertiary token.
- Long content clamped to preserve rhythm.
- Inline action buttons (`Accept/Reject`) must remain at least `32px` high.

## 7.7 Tables

- Header row uses subtle tinted/neutral background.
- Row hover: neutral fill.
- Cell vertical padding: `10-12px`.
- Right-align numeric columns.

## 7.8 Overlay Components

- Modal max width in desktop: `560-720px`.
- Drawer width: `320-420px`.
- Overlay color: `rgba(18, 24, 38, 0.35)`.
- Background scroll must lock while modal/drawer open.

## 8. Iconography and Imagery

- Use simple line icons (1.5px-2px stroke).
- Standard icon sizes: `16`, `18`, `20`.
- Avatar sizes: `24`, `32`, `40`, `48`.
- Keep profile images circular unless business case requires square.

## 9. Content and Data Density Rules

- One dominant heading per page.
- Prefer 2-level hierarchy in cards:
  - title and body, optional meta.
- Counters should be compact badges near labels.
- Never mix more than 3 visual emphasis levels in one row.

## 10. Accessibility Requirements

- Color contrast:
  - Text/body >= WCAG AA (`4.5:1` for normal text).
  - UI controls and icons >= `3:1`.
- Keyboard:
  - Full tab navigation.
  - Visible focus for all interactive elements.
- Semantics:
  - `button` for actions, `a` for navigation.
  - Labels bound to form fields.
- Touch targets: minimum `36x36px` (prefer `40x40px` on touch devices).
- Use `VisuallyHidden` for screen-reader-only labels where needed.

## 11. States Matrix (Apply to all Interactive Components)

- `default` - baseline visuals.
- `hover` - subtle feedback (color/background only).
- `active/pressed` - darker or inset variant.
- `focus-visible` - high clarity ring.
- `disabled` - low contrast, no hover behavior.
- `loading` - spinner + disabled interaction.
- `error/success` - semantic accent for validation and status components.

## 12. Theming (Light and Future Dark Mode)

Implement all colors through semantic tokens, not hard-coded hex values.

- Core semantic tokens:
  - `bg.app`, `bg.surface`, `bg.elevated`
  - `text.primary`, `text.secondary`, `text.muted`
  - `border.default`, `border.soft`
  - `action.primary`, `action.primaryHover`
  - `status.success`, `status.warning`, `status.danger`

Dark theme strategy:

- Maintain same spacing/radius/typography tokens.
- Invert surface/text tokens only.
- Reduce pure-black usage; use dark grays for depth.

## 13. Implementation Conventions for React UI Kit

- Build primitives first (`Box`, `Text`, `Button`, `Input`, etc.).
- Complex widgets are compositions over primitives.
- Every component exports:
  - typed props
  - controlled and uncontrolled modes (where applicable)
  - state modifiers (`isDisabled`, `isLoading`, `isInvalid`)
- Include Storybook-like usage examples or demo pages per component.
- Add tests for:
  - rendering
  - keyboard interaction
  - state visuals (class modifiers/data attributes)

## 14. Suggested Delivery Plan

Phase 1 (foundation):

- Tokens, typography, spacing scale.
- Primitive layout and text components.
- Core controls (`Button`, `Input`, `Select`, `Checkbox`, `Tabs`).

Phase 2 (navigation + composed blocks):

- Sidebar, topbar, cards, list items, pagination.
- Domain blocks for Activity Feed and Settings screens.

Phase 3 (advanced):

- Modal/drawer stack handling.
- Toast system, table package, date/time pickers, accessibility hardening.

---

This document is the source of truth for style consistency. All new components and pages should follow these tokens and behaviors before introducing new visual patterns.
