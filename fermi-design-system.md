# Fermi Design System — AI Agent Guide

This is the complete reference for AI agents building interfaces with the Fermi Design System. Follow these rules exactly. Do not deviate from the patterns described here.

---

## Setup

### Dependencies

```bash
pnpm add @base-ui/react class-variance-authority clsx tailwind-merge motion lucide-react geist
```

Optional:
```bash
pnpm add recharts zod
```

### Files to copy

```
components/ui/       → your-project/components/ui/
lib/utils.ts         → your-project/lib/utils.ts
lib/motion.ts        → your-project/lib/motion.ts
globals.css          → your-project/globals.css
tailwind.config.ts   → your-project/tailwind.config.ts
```

### Path alias

The `@/` alias must resolve to the project root. Configure in `tsconfig.json`:

```json
{
  "compilerOptions": {
    "paths": { "@/*": ["./*"] }
  }
}
```

---

## Design Principles

These are non-negotiable. Every component and layout you build must follow them.

1. **Zero border radius.** `--radius: 0rem`. No rounded corners anywhere. Never add `rounded-*` classes.
2. **Dark-only.** All themes use very dark backgrounds (3-5% lightness). Do not build light mode.
3. **Monospace labels.** All labels, badges, tab triggers, and table headers use `font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground`.
4. **Sparse, minimal.** Prefer whitespace over decoration. Use `gap` and `p` utilities, not borders and dividers.
5. **Spring animations.** Use the spring configs from `lib/motion.ts`. No CSS transitions for interactive elements.
6. **Semantic color tokens.** Always use token classes (`bg-card`, `text-foreground`, `border-border`), never raw colors.

---

## Color Tokens

All colors are CSS custom properties in HSL format, consumed via Tailwind as `hsl(var(--token))`.

| Token | Tailwind class | Purpose |
|---|---|---|
| `--background` | `bg-background` | Page background |
| `--foreground` | `text-foreground` | Primary text |
| `--card` | `bg-card` | Surface / card background |
| `--card-foreground` | `text-card-foreground` | Text on cards |
| `--primary` | `bg-primary` | Primary actions (light cream) |
| `--secondary` | `bg-secondary` | Subtle surfaces, hover states |
| `--muted` | `bg-muted` | Disabled / inactive surfaces |
| `--muted-foreground` | `text-muted-foreground` | Secondary text, labels |
| `--accent` | `bg-accent` | Highlight color (theme-dependent) |
| `--destructive` | `bg-destructive` | Errors, danger actions |
| `--success` | `bg-success` | Positive states |
| `--warning` | `bg-warning` | Caution states |
| `--border` | `border-border` | All borders |
| `--ring` | `ring-ring` | Focus rings |

### Semantic badge/alert colors

For badges and alerts, use transparent backgrounds with the semantic color:

```
border-success/30 bg-success/10 text-success
border-destructive/30 bg-destructive/10 text-destructive
border-warning/30 bg-warning/10 text-warning
```

### Themes

Five themes are available via `data-theme` attribute on `<html>`:

- **Fermi** (default) — forest green + cream/gold accent
- **Midnight** — deep blue-black + steel blue accent
- **Obsidian** — pure neutral charcoal + amber accent
- **Vaporwave** — dark purple + neon magenta accent
- **Arctic** — cool blue-grey + icy teal accent

Never hardcode theme-specific colors. Always use the token classes.

---

## Typography

| Use case | Classes |
|---|---|
| Body text | `text-sm text-foreground` |
| Secondary text | `text-xs text-muted-foreground` |
| Heading (card) | `text-sm font-medium text-foreground` |
| Large heading | `text-lg font-medium text-foreground` |
| Label / badge / tab | `font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground` |
| Monospace values | `font-mono text-sm` |
| Numeric display | `tabular-nums` (add to any numeric element for aligned columns) |

Font stack: Geist Sans (body), Geist Mono (labels/code), Geist Pixel Square (decorative).

---

## Utility Functions

### `cn()` — Class merging

Always use `cn()` from `@/lib/utils` to combine classes. Never concatenate class strings manually.

```tsx
import { cn } from "@/lib/utils"

<div className={cn("base-classes", conditional && "conditional-class", className)} />
```

### Spring configs — `lib/motion.ts`

```tsx
import { springs } from "@/lib/motion"

// springs.snappy  — { stiffness: 500, damping: 30 }  — buttons, toggles, tooltips
// springs.gentle  — { stiffness: 200, damping: 20 }  — reveals, hover lifts, stagger items
// springs.bouncy  — { stiffness: 400, damping: 15 }  — checkbox indicators, playful feedback
```

### Animation variants — `lib/motion.ts`

```tsx
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/motion"

// fadeInUp       — { opacity: 0→1, y: 12→0 }
// staggerContainer — staggerChildren: 0.05s
// staggerItem    — { opacity: 0→1, y: 8→0 }
```

---

## Components Reference

### Button

```tsx
import { Button } from "@/components/ui/button"
```

| Prop | Type | Default |
|---|---|---|
| `variant` | `"default" \| "accent" \| "success" \| "destructive" \| "outline" \| "ghost" \| "link"` | `"default"` |
| `size` | `"sm" \| "default" \| "lg" \| "icon"` | `"default"` |
| `loading` | `boolean` | `false` |
| `disabled` | `boolean` | `false` |

```tsx
<Button variant="accent">Confirm</Button>
<Button variant="outline" size="sm">Cancel</Button>
<Button variant="destructive" loading>Processing...</Button>
<Button variant="ghost" size="icon"><Settings className="h-4 w-4" /></Button>
```

- `default` — solid foreground bg (high contrast inverted)
- `accent` — solid accent bg (primary action)
- `outline` — bordered, transparent bg
- `ghost` — no bg, muted text, shows on hover
- Uses `whileTap={{ scale: 0.97 }}` with snappy spring. Do not add your own scale animations.
- Loading state shows a `Loader2` spinner and disables interaction.

---

### Input

```tsx
import { Input } from "@/components/ui/input"
```

```tsx
<Input placeholder="0x..." />
<Input type="number" className="w-32" />
```

- Uses `font-mono` for monospace input text.
- Focus: `border-accent` + `ring-2 ring-accent/40`.

---

### Field (Form Field)

```tsx
import { Field, FieldLabel, FieldDescription, FieldError, FieldControl } from "@/components/ui/field"
```

```tsx
<Field>
  <FieldLabel>Wallet Address</FieldLabel>
  <FieldControl placeholder="0x..." />
  <FieldDescription>Enter your Ethereum address</FieldDescription>
  <FieldError>Invalid address format</FieldError>
</Field>
```

- `FieldLabel` uses the monospace label pattern automatically.
- `FieldControl` is a styled input — use this inside Field instead of `<Input>`.

---

### NumberField

```tsx
import { NumberField } from "@/components/ui/number-field"
```

```tsx
<NumberField defaultValue={1} min={0} max={100} />
```

- Renders a decrement (-) button, input, and increment (+) button.
- Uses Lucide `Minus` and `Plus` icons.
- Buttons have `whileTap` scale animation.

---

### Select

```tsx
import { Select, SelectTrigger, SelectPopup, SelectItem, SelectValue } from "@/components/ui/select"
```

```tsx
<Select defaultValue="eth">
  <SelectTrigger>
    <SelectValue placeholder="Select token" />
  </SelectTrigger>
  <SelectPopup>
    <SelectItem value="eth">Ethereum</SelectItem>
    <SelectItem value="btc">Bitcoin</SelectItem>
    <SelectItem value="sol">Solana</SelectItem>
  </SelectPopup>
</Select>
```

- Items show a check icon when selected.
- Popup uses opacity/translate transition.

---

### Checkbox

```tsx
import { Checkbox } from "@/components/ui/checkbox"
```

```tsx
<label className="flex items-center gap-2">
  <Checkbox />
  <span className="text-sm">Accept terms</span>
</label>
```

- Check icon animates in with bouncy spring (scale 0 → 1).
- Checked state: `bg-accent`.

---

### Radio

```tsx
import { RadioGroup, Radio } from "@/components/ui/radio"
```

```tsx
<RadioGroup defaultValue="fast">
  <label className="flex items-center gap-2">
    <Radio value="fast" />
    <span className="text-sm">Fast</span>
  </label>
  <label className="flex items-center gap-2">
    <Radio value="slow" />
    <span className="text-sm">Standard</span>
  </label>
</RadioGroup>
```

- RadioGroup is `flex flex-col gap-3`.
- Radio indicator is a small accent-colored dot.

---

### Switch

```tsx
import { Switch } from "@/components/ui/switch"
```

```tsx
<Switch />
<Switch checked={value} onCheckedChange={setValue} />
```

- Supports controlled and uncontrolled modes.
- Thumb slides with snappy spring animation.
- Checked state: `bg-accent`.

---

### Toggle / ToggleGroup

```tsx
import { Toggle } from "@/components/ui/toggle"
import { ToggleGroup } from "@/components/ui/toggle-group"
```

| Prop | Type | Default |
|---|---|---|
| `variant` | `"default" \| "ghost"` | `"default"` |
| `size` | `"sm" \| "default" \| "lg" \| "icon"` | `"default"` |

```tsx
<Toggle variant="default"><Bold className="h-4 w-4" /></Toggle>

<ToggleGroup type="single" defaultValue="left">
  <Toggle value="left"><AlignLeft className="h-4 w-4" /></Toggle>
  <Toggle value="center"><AlignCenter className="h-4 w-4" /></Toggle>
  <Toggle value="right"><AlignRight className="h-4 w-4" /></Toggle>
</ToggleGroup>
```

---

### Card

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
```

| Prop | Type | Default |
|---|---|---|
| `variant` | `"default" \| "ghost" \| "interactive"` | `"default"` |

```tsx
<Card>
  <CardHeader>
    <CardTitle>Portfolio Value</CardTitle>
    <CardDescription>Last 24 hours</CardDescription>
  </CardHeader>
  <CardContent>
    <AnimatedNumber value={12450.50} format="currency" />
  </CardContent>
</Card>

<Card variant="interactive" onClick={handleClick}>
  <CardTitle>ETH/USDC Pool</CardTitle>
  <CardDescription>Click to view details</CardDescription>
</Card>
```

- `default` — bordered card surface.
- `ghost` — transparent, no border.
- `interactive` — bordered + hover lift (y: -2) with gentle spring + cursor-pointer.
- All cards have `p-6 gap-3`.

---

### Badge

```tsx
import { Badge } from "@/components/ui/badge"
```

| Prop | Type | Default |
|---|---|---|
| `variant` | `"default" \| "success" \| "destructive" \| "warning" \| "muted"` | `"default"` |

```tsx
<Badge>Default</Badge>
<Badge variant="success">Active</Badge>
<Badge variant="destructive">Failed</Badge>
<Badge variant="warning">Pending</Badge>
```

- Uses monospace label pattern: `font-mono text-[10px] uppercase tracking-[0.1em]`.

---

### Alert

```tsx
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
```

| Prop | Type | Default |
|---|---|---|
| `variant` | `"info" \| "warning" \| "error" \| "success"` | `"info"` |

```tsx
<Alert variant="warning">
  <AlertCircle className="h-4 w-4 text-warning" />
  <div>
    <AlertTitle>High gas fees detected</AlertTitle>
    <AlertDescription>Consider waiting for lower network congestion.</AlertDescription>
  </div>
</Alert>
```

- Layout: `flex items-start gap-3`.
- Pair with a Lucide icon as the first child.

---

### Dialog

```tsx
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog"
```

```tsx
<Dialog>
  <DialogTrigger asChild>
    <Button>Open</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogTitle>Confirm Transaction</DialogTitle>
    <DialogDescription>This action cannot be undone.</DialogDescription>
    <div className="mt-4 flex justify-end gap-2">
      <DialogClose asChild>
        <Button variant="outline">Cancel</Button>
      </DialogClose>
      <Button variant="accent">Confirm</Button>
    </div>
  </DialogContent>
</Dialog>
```

- Backdrop: `bg-background/80 backdrop-blur-sm`.
- Popup: scale 0.96 → 1 with snappy spring.
- Max width: `max-w-lg`. Close button (X) auto-rendered top-right.

---

### AlertDialog

```tsx
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogTitle, AlertDialogDescription, AlertDialogClose } from "@/components/ui/alert-dialog"
```

Same pattern as Dialog but `max-w-md` and no automatic close button. Use for destructive confirmations.

---

### Popover

```tsx
import { Popover, PopoverTrigger, PopoverContent, PopoverTitle, PopoverDescription, PopoverClose } from "@/components/ui/popover"
```

```tsx
<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Details</Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverTitle>Token Info</PopoverTitle>
    <PopoverDescription>ETH — Ethereum mainnet</PopoverDescription>
  </PopoverContent>
</Popover>
```

- Width: `w-72`. Has arrow pointing to trigger.

---

### Tooltip

```tsx
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
```

```tsx
<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="ghost" size="icon"><Info className="h-4 w-4" /></Button>
    </TooltipTrigger>
    <TooltipContent>Current gas price: 12 gwei</TooltipContent>
  </Tooltip>
</TooltipProvider>
```

- Wrap your app (or section) in `<TooltipProvider>` once.
- Text: `font-mono text-[11px]`. Has arrow.
- Scale 0.95 → 1 with snappy spring.

---

### Tabs

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent, TabsIndicator } from "@/components/ui/tabs"
```

```tsx
<Tabs defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="transactions">Transactions</TabsTrigger>
    <TabsTrigger value="analytics">Analytics</TabsTrigger>
    <TabsIndicator />
  </TabsList>
  <TabsContent value="overview">...</TabsContent>
  <TabsContent value="transactions">...</TabsContent>
  <TabsContent value="analytics">...</TabsContent>
</Tabs>
```

- Tab triggers use monospace label pattern.
- `TabsIndicator` is a `h-0.5 bg-accent` bar at the bottom — always include it inside `TabsList`.
- Content has `mt-6`.

---

### Accordion

```tsx
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
```

```tsx
<Accordion>
  <AccordionItem value="fees">
    <AccordionTrigger>Transaction Fees</AccordionTrigger>
    <AccordionContent>Gas fee: 0.002 ETH</AccordionContent>
  </AccordionItem>
</Accordion>
```

- Chevron rotates 180 degrees when open.
- Height animates with CSS (`--accordion-panel-height`), 200ms ease-out.

---

### Collapsible

```tsx
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"
```

```tsx
<Collapsible>
  <CollapsibleTrigger asChild>
    <Button variant="ghost">Show details</Button>
  </CollapsibleTrigger>
  <CollapsibleContent>Hidden content here</CollapsibleContent>
</Collapsible>
```

---

### Table

```tsx
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table"
```

```tsx
<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Asset</TableHead>
      <TableHead>Price</TableHead>
      <TableHead>24h Change</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>ETH</TableCell>
      <TableCell className="tabular-nums">$3,245.00</TableCell>
      <TableCell className="text-success">+2.4%</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

- Table headers use the monospace label pattern automatically.
- Use `tabular-nums` class on numeric cells for aligned columns.
- Rows have `hover:bg-card` and a subtle bottom border.

---

### Progress

```tsx
import { Progress } from "@/components/ui/progress"
```

```tsx
<Progress value={65} />
<Progress value={65} showValue />
```

- `showValue` renders the label and percentage above the bar.
- Track: `h-1.5 bg-secondary`. Indicator: `bg-accent`.

---

### Meter

```tsx
import { Meter } from "@/components/ui/meter"
```

Same API as Progress. Use for values that represent a bounded measurement (e.g., utilization rate).

---

### Slider

```tsx
import { Slider } from "@/components/ui/slider"
```

```tsx
<Slider defaultValue={50} />
```

- Thumb: `h-4 w-4 bg-foreground border-border`.
- Track indicator: `bg-accent`.

---

### Toast

```tsx
import { ToastProvider, ToastViewport, Toast, ToastTitle, ToastDescription } from "@/components/ui/toast"
```

```tsx
// Wrap app in provider
<ToastProvider>
  {children}
  <ToastViewport />
</ToastProvider>

// Individual toast
<Toast>
  <div>
    <ToastTitle>Transaction submitted</ToastTitle>
    <ToastDescription>Waiting for confirmation...</ToastDescription>
  </div>
</Toast>
```

- Viewport: fixed `bottom-0 right-0`, `max-w-[420px]`, `z-[100]`.
- Toast slides in from right with snappy spring.
- Close button (X) auto-rendered.

---

### Menu

```tsx
import { Menu, MenuTrigger, MenuContent, MenuItem, MenuSeparator } from "@/components/ui/menu"
```

```tsx
<Menu>
  <MenuTrigger asChild>
    <Button variant="outline">Actions</Button>
  </MenuTrigger>
  <MenuContent>
    <MenuItem onClick={handleEdit}>Edit</MenuItem>
    <MenuItem onClick={handleDuplicate}>Duplicate</MenuItem>
    <MenuSeparator />
    <MenuItem onClick={handleDelete}>Delete</MenuItem>
  </MenuContent>
</Menu>
```

- Min width: `180px`.
- Highlighted item: `bg-secondary`.

---

### Avatar

```tsx
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
```

```tsx
<Avatar>
  <AvatarImage src="/avatar.png" alt="User" />
  <AvatarFallback>VB</AvatarFallback>
</Avatar>
```

- Size: `h-8 w-8`. Fallback text: `font-mono text-[10px]`.

---

### Separator

```tsx
import { Separator } from "@/components/ui/separator"
```

```tsx
<Separator />
<Separator orientation="vertical" />
```

---

### Skeleton

```tsx
import { Skeleton } from "@/components/ui/skeleton"
```

```tsx
<Skeleton className="h-4 w-32" />
<Skeleton className="h-8 w-full" />
```

- `animate-pulse bg-muted`. Pass dimensions via className.

---

### ScrollArea

```tsx
import { ScrollArea } from "@/components/ui/scroll-area"
```

```tsx
<ScrollArea className="h-64">
  {longContent}
</ScrollArea>
```

---

### AnimatedNumber

```tsx
import { AnimatedNumber } from "@/components/ui/animated-number"
```

| Prop | Type | Default |
|---|---|---|
| `value` | `number` | required |
| `format` | `"currency" \| "percent" \| "compact" \| "raw"` | `"raw"` |
| `locale` | `string` | `"en-US"` |
| `currency` | `string` | `"USD"` |
| `decimals` | `number` | varies by format |

```tsx
<AnimatedNumber value={12450.50} format="currency" />
// → $12,450.50 (animates when value changes)

<AnimatedNumber value={3.45} format="percent" />
// → 3.45%

<AnimatedNumber value={1200000} format="compact" />
// → 1.2M
```

- Uses spring animation (snappy) to interpolate between values.
- Always has `tabular-nums` for aligned columns.
- Uses `Intl.NumberFormat` for locale-aware formatting.

---

### Reveal

```tsx
import { Reveal } from "@/components/ui/reveal"
```

| Prop | Type | Default |
|---|---|---|
| `direction` | `"up" \| "down" \| "left" \| "right" \| "none"` | `"up"` |
| `delay` | `number` | `0` |
| `distance` | `number` | `16` |
| `once` | `boolean` | `true` |

```tsx
<Reveal>
  <Card>Content fades up when scrolled into view</Card>
</Reveal>

<Reveal direction="left" delay={0.2}>
  <Card>Slides in from left after 200ms delay</Card>
</Reveal>
```

- Triggers on `whileInView`. Uses gentle spring.
- Use `once={false}` to re-trigger every time element enters viewport.

---

### Stagger

```tsx
import { Stagger, StaggerItem } from "@/components/ui/stagger"
```

```tsx
<Stagger staggerDelay={0.05}>
  <StaggerItem><Card>First</Card></StaggerItem>
  <StaggerItem><Card>Second</Card></StaggerItem>
  <StaggerItem><Card>Third</Card></StaggerItem>
</Stagger>
```

- Each `StaggerItem` fades in (opacity 0 → 1, y 8 → 0) with sequential delay.
- Uses gentle spring for each item.
- Triggers on `whileInView`.

---

## Layout Patterns

### Page layout

```tsx
<div className="min-h-screen bg-background">
  <nav className="border-b border-border px-6 py-4">...</nav>
  <main className="mx-auto max-w-6xl px-6 py-12">...</main>
</div>
```

### Grid pattern background

```tsx
<div className="grid-pattern min-h-screen bg-background">...</div>
```

### Card grid

```tsx
<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
  <Card>...</Card>
  <Card>...</Card>
  <Card>...</Card>
</div>
```

### Form layout

```tsx
<form className="flex flex-col gap-4">
  <Field>
    <FieldLabel>Amount</FieldLabel>
    <FieldControl type="number" placeholder="0.00" />
  </Field>
  <Field>
    <FieldLabel>Recipient</FieldLabel>
    <FieldControl placeholder="0x..." />
  </Field>
  <Button variant="accent" type="submit">Send</Button>
</form>
```

### Stat card (common DeFi pattern)

```tsx
<Card>
  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
    Total Value Locked
  </span>
  <AnimatedNumber value={1245000} format="currency" className="text-2xl font-medium" />
  <Badge variant="success">+12.4%</Badge>
</Card>
```

### Data table with status badges

```tsx
<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Transaction</TableHead>
      <TableHead>Amount</TableHead>
      <TableHead>Status</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-mono">0x1a2b...3c4d</TableCell>
      <TableCell className="tabular-nums">1.5 ETH</TableCell>
      <TableCell><Badge variant="success">Confirmed</Badge></TableCell>
    </TableRow>
  </TableBody>
</Table>
```

---

## Rules for AI Agents

1. **Always import from `@/components/ui/`**. Never recreate these components from scratch.
2. **Always use `cn()`** for class merging. Import from `@/lib/utils`.
3. **Never use `rounded-*` classes.** Border radius is always 0.
4. **Use semantic color tokens only.** Never use `bg-gray-900` or `text-white`. Use `bg-card`, `text-foreground`, etc.
5. **Labels are always monospace.** Any label, column header, or caption: `font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground`.
6. **Use `tabular-nums`** on any element displaying numbers in columns or that will change dynamically.
7. **Use the spring configs** from `@/lib/motion` for any new animation. Do not define your own spring values.
8. **Do not add hover/tap animations** to components that already have them (Button, Card interactive, Toggle).
9. **Icons come from `lucide-react` only.** Standard size is `h-4 w-4`.
10. **Use `AnimatedNumber`** for any numeric value that changes over time (prices, balances, percentages).
11. **Use `Reveal` and `Stagger`** for scroll-triggered entrance animations. Do not build custom IntersectionObserver logic.
12. **Use `asChild`** on trigger components when wrapping custom elements (e.g., `<DialogTrigger asChild><Button>...</Button></DialogTrigger>`).
13. **Focus states** are handled by components. Do not add custom focus styles.
14. **Spacing convention:** Cards use `p-6 gap-3`. Forms use `gap-4`. Grid gaps are `gap-4`.
15. **Text sizes:** Body is `text-sm`. Descriptions are `text-xs`. Labels are `text-[10px]`. Do not use `text-base` or larger unless it's a page heading.
