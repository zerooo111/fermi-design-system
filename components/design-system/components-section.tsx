import { useState } from "react"
import {
  ArrowRight,
  Wallet,
  Check,
  AlertTriangle,
  Settings,
  ExternalLink,
  Copy,
  Loader2,
  Shield,
  Info,
  ChevronDown,
  Search,
  Bold,
  Italic,
  Underline,
  Bell,
  Trash2,
  MoreHorizontal,
  User,
  LogOut,
  CreditCard,
  Plus,
  Minus,
  Menu as MenuIcon,
  X,
} from "lucide-react"
import { Tabs, TabsList, TabsTrigger, TabsContent, TabsIndicator } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { NumberField } from "@/components/ui/number-field"
import { RadioGroup, Radio } from "@/components/ui/radio"
import { Toggle } from "@/components/ui/toggle"
import { ToggleGroup } from "@/components/ui/toggle-group"
import { Select, SelectTrigger, SelectPopup, SelectItem, SelectValue } from "@/components/ui/select"
import { Field, FieldLabel, FieldDescription, FieldError, FieldControl } from "@/components/ui/field"
import { Progress } from "@/components/ui/progress"
import { Meter } from "@/components/ui/meter"
import { Skeleton } from "@/components/ui/skeleton"
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip"
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogTitle, AlertDialogDescription, AlertDialogClose } from "@/components/ui/alert-dialog"
import { Popover, PopoverTrigger, PopoverContent, PopoverTitle, PopoverDescription } from "@/components/ui/popover"
import { Menu, MenuTrigger, MenuContent, MenuItem, MenuSeparator } from "@/components/ui/menu"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"
import { ScrollArea } from "@/components/ui/scroll-area"
import { DocSection, DocExample, DocVariants } from "@/components/docs/doc-section"

// ─── Core Tab ─────────────────────────────────────────────────────────

function ButtonDocs() {
  const [copied, setCopied] = useState(false)

  return (
    <DocSection
      title="Button"
      description="Primary interaction element for wallet connections, swaps, and transaction confirmations."
    >
      <DocVariants label="Variants">
        <Button variant="default">
          <Wallet className="h-4 w-4" />
          Connect Wallet
        </Button>
        <Button variant="accent">
          <ArrowRight className="h-4 w-4" />
          Swap Tokens
        </Button>
        <Button variant="success">
          <Check className="h-4 w-4" />
          Confirm
        </Button>
        <Button variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          Reject
        </Button>
        <Button variant="outline">
          <Settings className="h-4 w-4" />
          Settings
        </Button>
        <Button variant="ghost">Max</Button>
        <Button variant="link">View on Explorer</Button>
      </DocVariants>
      <DocVariants label="Sizes">
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
        <Button size="icon" aria-label="Copy address">
          <Copy className="h-4 w-4" />
        </Button>
      </DocVariants>
      <DocVariants label="States">
        <Button loading>
          Awaiting Approval
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
          }}
        >
          {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
          {copied ? "Copied" : "Copy Address"}
        </Button>
      </DocVariants>
    </DocSection>
  )
}

function BadgeDocs() {
  return (
    <DocSection
      title="Badge"
      description="Status indicators for connection state, transaction outcomes, and token classifications."
    >
      <DocVariants label="Variants">
        <Badge variant="default">
          <div className="h-1.5 w-1.5 rounded-full bg-success" />
          Connected
        </Badge>
        <Badge variant="success">Confirmed</Badge>
        <Badge variant="destructive">Failed</Badge>
        <Badge variant="warning">
          <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-warning" />
          Pending
        </Badge>
        <Badge variant="muted">ERC-20</Badge>
        <Badge variant="muted">Layer 2</Badge>
        <Badge variant="muted">v3</Badge>
      </DocVariants>
    </DocSection>
  )
}

function CardDocs() {
  return (
    <DocSection
      title="Card"
      description="Container for grouping protocol stats, position details, and data summaries."
    >
      <DocVariants label="Variants" className="flex-col items-stretch">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardDescription>Total Value Locked</CardDescription>
            </CardHeader>
            <CardContent>
              <span className="font-mono text-2xl font-light tabular-nums text-foreground">
                $4,283,914.52
              </span>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-success">+5.23%</span>
                <span className="text-xs text-muted-foreground">24h</span>
              </div>
            </CardContent>
          </Card>
          <Card variant="ghost">
            <CardHeader>
              <CardTitle>Ghost Card</CardTitle>
              <CardDescription>No border variant</CardDescription>
            </CardHeader>
            <CardContent>
              <span className="font-mono text-sm text-muted-foreground">
                Used for subtle grouping
              </span>
            </CardContent>
          </Card>
          <Card variant="interactive">
            <CardHeader>
              <CardTitle>Interactive Card</CardTitle>
              <CardDescription>Hover to see effect</CardDescription>
            </CardHeader>
            <CardContent>
              <span className="font-mono text-sm text-muted-foreground">
                Clickable pool card
              </span>
            </CardContent>
          </Card>
        </div>
      </DocVariants>
    </DocSection>
  )
}

function AlertDocs() {
  return (
    <DocSection
      title="Alert"
      description="Contextual messages for price impact warnings, contract verification, and slippage alerts."
    >
      <DocVariants label="Variants" className="flex-col items-stretch">
        <Alert variant="info">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
          <div className="flex flex-col gap-1">
            <AlertTitle>Price Impact Warning</AlertTitle>
            <AlertDescription>
              This swap has a price impact of 2.4%. Consider splitting into smaller transactions.
            </AlertDescription>
          </div>
        </Alert>
        <Alert variant="error">
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
          <div className="flex flex-col gap-1">
            <AlertTitle>High Slippage Detected</AlertTitle>
            <AlertDescription>
              Slippage tolerance is set to 5%. Transactions may be frontrun.
            </AlertDescription>
          </div>
        </Alert>
        <Alert variant="success">
          <Shield className="mt-0.5 h-4 w-4 shrink-0 text-success" />
          <div className="flex flex-col gap-1">
            <AlertTitle>Contract Verified</AlertTitle>
            <AlertDescription>
              This token contract has been verified and audited by CertiK.
            </AlertDescription>
          </div>
        </Alert>
        <Alert variant="warning">
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-warning" />
          <div className="flex flex-col gap-1">
            <AlertTitle>Low Liquidity</AlertTitle>
            <AlertDescription>
              This pool has less than $10,000 in liquidity. Large trades may experience high slippage.
            </AlertDescription>
          </div>
        </Alert>
      </DocVariants>
    </DocSection>
  )
}

function TableDocs() {
  return (
    <DocSection
      title="Table"
      description="Data tables for transaction history, token lists, and pool rankings."
    >
      <DocExample label="Transaction History">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Hash</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Time</TableHead>
              <TableHead className="text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-mono text-accent">0x1a2b...3c4d</TableCell>
              <TableCell>Swap</TableCell>
              <TableCell className="font-mono text-muted-foreground">1.0 ETH → 1,823.45 USDC</TableCell>
              <TableCell className="font-mono text-[10px] text-muted-foreground">2 min ago</TableCell>
              <TableCell className="text-right font-mono text-[10px] text-success">Confirmed</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-mono text-accent">0x5e6f...7g8h</TableCell>
              <TableCell>Add Liquidity</TableCell>
              <TableCell className="font-mono text-muted-foreground">500 USDC + 0.274 ETH</TableCell>
              <TableCell className="font-mono text-[10px] text-muted-foreground">15 min ago</TableCell>
              <TableCell className="text-right font-mono text-[10px] text-success">Confirmed</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-mono text-accent">0x9i0j...1k2l</TableCell>
              <TableCell>Swap</TableCell>
              <TableCell className="font-mono text-muted-foreground">0.5 ETH → 912.30 DAI</TableCell>
              <TableCell className="font-mono text-[10px] text-muted-foreground">1h ago</TableCell>
              <TableCell className="text-right font-mono text-[10px] text-accent">Pending</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </DocExample>
    </DocSection>
  )
}

function AvatarDocs() {
  return (
    <DocSection
      title="Avatar"
      description="User and token identity indicators for wallet addresses and protocol icons."
    >
      <DocVariants label="Variants">
        <Avatar>
          <AvatarFallback>ET</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>US</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>BT</AvatarFallback>
        </Avatar>
        <Avatar className="h-10 w-10">
          <AvatarFallback>0x</AvatarFallback>
        </Avatar>
      </DocVariants>
    </DocSection>
  )
}

function SeparatorDocs() {
  return (
    <DocSection
      title="Separator"
      description="Visual divider for sectioning content within cards and panels."
    >
      <DocExample label="Horizontal & Vertical">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="text-sm text-foreground">ETH/USDC</span>
            <Separator orientation="vertical" className="h-4" />
            <span className="text-sm text-muted-foreground">0.3% Fee</span>
            <Separator orientation="vertical" className="h-4" />
            <span className="text-sm text-success">Active</span>
          </div>
          <Separator />
          <span className="text-xs text-muted-foreground">Pool details below</span>
        </div>
      </DocExample>
    </DocSection>
  )
}


// ─── Form Controls Tab ────────────────────────────────────────────────

function InputDocs() {
  return (
    <DocSection
      title="Input"
      description="Text fields for token amounts, wallet addresses, and search queries."
    >
      <DocExample label="Standard Inputs" className="flex flex-col gap-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label htmlFor="demo-token-amount" className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
              Token Amount
            </label>
            <div className="flex items-center">
              <Input id="demo-token-amount" placeholder="0.00" />
              <span className="flex items-center border border-l-0 border-border bg-card px-3 py-2 font-mono text-xs text-muted-foreground">
                ETH
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="demo-recipient" className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
              Recipient Address
            </label>
            <Input id="demo-recipient" placeholder="0x..." />
          </div>
        </div>
      </DocExample>
      <DocVariants label="States">
        <Input placeholder="Default" className="max-w-[200px]" />
        <Input placeholder="Disabled" disabled className="max-w-[200px]" />
      </DocVariants>
    </DocSection>
  )
}

function FieldDocs() {
  return (
    <DocSection
      title="Field"
      description="Labeled form field with description and validation error display."
    >
      <DocExample label="Form Field with Validation" className="flex flex-col gap-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Field className="flex flex-col gap-2">
            <FieldLabel>Slippage Tolerance</FieldLabel>
            <FieldControl placeholder="0.5" />
            <FieldDescription>Recommended: 0.1% - 1.0%</FieldDescription>
          </Field>
          <Field className="flex flex-col gap-2">
            <FieldLabel>Gas Limit</FieldLabel>
            <FieldControl placeholder="21000" />
            <FieldError>Gas limit too low for this transaction</FieldError>
          </Field>
        </div>
      </DocExample>
    </DocSection>
  )
}

function SelectDocs() {
  return (
    <DocSection
      title="Select"
      description="Dropdown selectors for network switching, token selection, and timeframe filters."
    >
      <DocExample label="Network Selector">
        <div className="max-w-[300px]">
          <Select defaultValue="ethereum">
            <SelectTrigger>
              <SelectValue placeholder="Select network" />
            </SelectTrigger>
            <SelectPopup>
              <SelectItem value="ethereum">Ethereum Mainnet</SelectItem>
              <SelectItem value="arbitrum">Arbitrum One</SelectItem>
              <SelectItem value="optimism">Optimism</SelectItem>
              <SelectItem value="polygon">Polygon</SelectItem>
              <SelectItem value="base">Base</SelectItem>
            </SelectPopup>
          </Select>
        </div>
      </DocExample>
    </DocSection>
  )
}

function CheckboxDocs() {
  return (
    <DocSection
      title="Checkbox"
      description="Binary toggles for terms acceptance, token approvals, and filter selections."
    >
      <DocVariants label="States">
        <label className="flex items-center gap-2">
          <Checkbox />
          <span className="text-sm text-foreground">Accept terms</span>
        </label>
        <label className="flex items-center gap-2">
          <Checkbox defaultChecked />
          <span className="text-sm text-foreground">Infinite approval</span>
        </label>
        <label className="flex items-center gap-2 cursor-not-allowed">
          <Checkbox disabled />
          <span className="text-sm text-muted-foreground">Disabled</span>
        </label>
      </DocVariants>
    </DocSection>
  )
}

function SwitchDocs() {
  return (
    <DocSection
      title="Switch"
      description="On/off controls for expert mode, auto-routing, and notification preferences."
    >
      <DocVariants label="States">
        <label className="flex items-center gap-3">
          <Switch />
          <span className="text-sm text-foreground">Expert Mode</span>
        </label>
        <label className="flex items-center gap-3">
          <Switch defaultChecked />
          <span className="text-sm text-foreground">Auto-Route</span>
        </label>
        <label className="flex items-center gap-3 cursor-not-allowed">
          <Switch disabled />
          <span className="text-sm text-muted-foreground">Disabled</span>
        </label>
      </DocVariants>
    </DocSection>
  )
}

function SliderDocs() {
  return (
    <DocSection
      title="Slider"
      description="Range controls for slippage tolerance, position sizing, and fee tier selection."
    >
      <DocExample label="Slippage Tolerance">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                Slippage
              </span>
              <span className="font-mono text-xs text-foreground">0.5%</span>
            </div>
            <Slider defaultValue={50} />
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                Position Size
              </span>
              <span className="font-mono text-xs text-foreground">75%</span>
            </div>
            <Slider defaultValue={75} />
          </div>
        </div>
      </DocExample>
    </DocSection>
  )
}

function NumberFieldDocs() {
  return (
    <DocSection
      title="Number Field"
      description="Numeric input with increment/decrement for quantities and precise values."
    >
      <DocExample label="Token Quantity">
        <div className="max-w-[200px]">
          <NumberField defaultValue={1} min={0} />
        </div>
      </DocExample>
    </DocSection>
  )
}

function RadioDocs() {
  return (
    <DocSection
      title="Radio"
      description="Exclusive selection for transaction speed, fee tiers, and routing preferences."
    >
      <DocExample label="Transaction Speed">
        <RadioGroup defaultValue="standard" aria-label="Transaction speed">
          <label className="flex items-center gap-2">
            <Radio value="slow" />
            <span className="text-sm text-foreground">Slow (~5 min)</span>
          </label>
          <label className="flex items-center gap-2">
            <Radio value="standard" />
            <span className="text-sm text-foreground">Standard (~2 min)</span>
          </label>
          <label className="flex items-center gap-2">
            <Radio value="fast" />
            <span className="text-sm text-foreground">Fast (~30 sec)</span>
          </label>
        </RadioGroup>
      </DocExample>
    </DocSection>
  )
}

function ToggleDocs() {
  return (
    <DocSection
      title="Toggle"
      description="Pressable controls for toolbar actions and view mode switching."
    >
      <DocVariants label="Standalone Toggles">
        <Toggle aria-label="Bold" size="icon">
          <Bold className="h-4 w-4" />
        </Toggle>
        <Toggle aria-label="Italic" size="icon">
          <Italic className="h-4 w-4" />
        </Toggle>
        <Toggle aria-label="Underline" size="icon">
          <Underline className="h-4 w-4" />
        </Toggle>
      </DocVariants>
    </DocSection>
  )
}

function ToggleGroupDocs() {
  return (
    <DocSection
      title="Toggle Group"
      description="Grouped selection for timeframe filters, chart types, and view modes."
    >
      <DocExample label="Timeframe Selector">
        <ToggleGroup defaultValue={["24h"]}>
          <Toggle value="1h" className="border border-border px-3 py-1.5 font-mono text-[10px] uppercase">1H</Toggle>
          <Toggle value="24h" className="border border-border px-3 py-1.5 font-mono text-[10px] uppercase">24H</Toggle>
          <Toggle value="7d" className="border border-border px-3 py-1.5 font-mono text-[10px] uppercase">7D</Toggle>
          <Toggle value="30d" className="border border-border px-3 py-1.5 font-mono text-[10px] uppercase">30D</Toggle>
        </ToggleGroup>
      </DocExample>
    </DocSection>
  )
}


// ─── Feedback Tab ─────────────────────────────────────────────────────

function ProgressDocs() {
  return (
    <DocSection
      title="Progress"
      description="Loading indicators for transaction confirmation, sync status, and data fetching."
    >
      <DocExample label="Transaction Progress" className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
              Syncing blocks
            </span>
            <span className="font-mono text-[10px] text-foreground">68%</span>
          </div>
          <Progress value={68} />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
              Confirmations
            </span>
            <span className="font-mono text-[10px] text-foreground">12/32</span>
          </div>
          <Progress value={37.5} />
        </div>
      </DocExample>
    </DocSection>
  )
}

function TooltipDocs() {
  return (
    <DocSection
      title="Tooltip"
      description="Contextual hints for icons, abbreviated values, and additional information."
    >
      <DocVariants label="Hover for Details">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm">TVL: $4.2M</Button>
            </TooltipTrigger>
            <TooltipContent>Total Value Locked across all pools</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm">APR: 12.4%</Button>
            </TooltipTrigger>
            <TooltipContent>Annual Percentage Rate (variable)</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon">
                <Info className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Impermanent loss may apply</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </DocVariants>
    </DocSection>
  )
}

function MeterDocs() {
  return (
    <DocSection
      title="Meter"
      description="Visual gauge for pool utilization, capacity metrics, and risk levels."
    >
      <DocExample label="Pool Utilization" className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
              Pool Utilization
            </span>
            <span className="font-mono text-[10px] text-foreground">72%</span>
          </div>
          <Meter value={72} />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
              Gas Usage
            </span>
            <span className="font-mono text-[10px] text-foreground">45%</span>
          </div>
          <Meter value={45} />
        </div>
      </DocExample>
    </DocSection>
  )
}

function SkeletonDocs() {
  return (
    <DocSection
      title="Skeleton"
      description="Animated loading placeholders for data that is still being fetched."
    >
      <DocExample label="Loading States">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Skeleton className="h-8 w-8" />
            <div className="flex flex-col gap-2">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-3 w-20" />
            </div>
          </div>
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
          <div className="grid grid-cols-3 gap-3">
            <Skeleton className="h-20" />
            <Skeleton className="h-20" />
            <Skeleton className="h-20" />
          </div>
        </div>
      </DocExample>
    </DocSection>
  )
}


// ─── Overlay Tab ──────────────────────────────────────────────────────

function DialogDocs() {
  return (
    <DocSection
      title="Dialog"
      description="Modal overlays for transaction review, token selection, and settings panels."
    >
      <DocVariants label="Open Dialog">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Review Transaction</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>Confirm Swap</DialogTitle>
            <DialogDescription>
              You are swapping 1.0 ETH for approximately 1,823.45 USDC. This action cannot be undone.
            </DialogDescription>
            <div className="mt-4 flex flex-col gap-2 border border-border bg-background p-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-muted-foreground">Rate</span>
                <span className="font-mono text-[10px] text-foreground">1 ETH = 1,823.45 USDC</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-muted-foreground">Network Fee</span>
                <span className="font-mono text-[10px] text-foreground">~$2.14</span>
              </div>
            </div>
            <div className="mt-6 flex justify-end gap-3">
              <Button variant="outline" size="sm">Cancel</Button>
              <Button variant="accent" size="sm">Confirm Swap</Button>
            </div>
          </DialogContent>
        </Dialog>
      </DocVariants>
    </DocSection>
  )
}

function AlertDialogDocs() {
  return (
    <DocSection
      title="Alert Dialog"
      description="Destructive confirmation for revoking approvals, disconnecting wallets, and clearing data."
    >
      <DocVariants label="Open Alert Dialog">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive">Revoke Approval</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogTitle>Revoke Token Approval</AlertDialogTitle>
            <AlertDialogDescription>
              This will revoke the USDC spending approval for Uniswap V3 Router. You will need to re-approve before swapping again.
            </AlertDialogDescription>
            <div className="mt-6 flex justify-end gap-3">
              <AlertDialogClose asChild>
                <Button variant="outline" size="sm">Cancel</Button>
              </AlertDialogClose>
              <AlertDialogClose asChild>
                <Button variant="destructive" size="sm">Revoke</Button>
              </AlertDialogClose>
            </div>
          </AlertDialogContent>
        </AlertDialog>
      </DocVariants>
    </DocSection>
  )
}

function PopoverDocs() {
  return (
    <DocSection
      title="Popover"
      description="Floating panels for settings dropdowns, quick actions, and contextual forms."
    >
      <DocVariants label="Open Popover">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">
              <Settings className="h-4 w-4" />
              Transaction Settings
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverTitle>Swap Settings</PopoverTitle>
            <PopoverDescription>Configure slippage and deadline for your transaction.</PopoverDescription>
            <div className="mt-4 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                  Slippage Tolerance
                </span>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">0.1%</Button>
                  <Button variant="outline" size="sm">0.5%</Button>
                  <Button variant="accent" size="sm">1.0%</Button>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                  Transaction Deadline
                </span>
                <Input placeholder="30" className="w-full" />
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </DocVariants>
    </DocSection>
  )
}

function MenuDocs() {
  return (
    <DocSection
      title="Menu"
      description="Action menus for account options, token actions, and contextual operations."
    >
      <DocVariants label="Open Menu">
        <Menu>
          <MenuTrigger asChild>
            <Button variant="outline" size="icon" aria-label="Account menu">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </MenuTrigger>
          <MenuContent>
            <MenuItem>
              <User className="h-4 w-4" />
              Account
            </MenuItem>
            <MenuItem>
              <CreditCard className="h-4 w-4" />
              Transactions
            </MenuItem>
            <MenuItem>
              <Settings className="h-4 w-4" />
              Settings
            </MenuItem>
            <MenuSeparator />
            <MenuItem className="text-destructive">
              <LogOut className="h-4 w-4" />
              Disconnect
            </MenuItem>
          </MenuContent>
        </Menu>
      </DocVariants>
    </DocSection>
  )
}


// ─── Layout Tab ───────────────────────────────────────────────────────

function TabsDocs() {
  return (
    <DocSection
      title="Tabs"
      description="Content organization for pool views, token info panels, and multi-step flows."
    >
      <DocExample label="Pool Information">
        <Tabs defaultValue="overview">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="positions">Positions</TabsTrigger>
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
            <TabsIndicator />
          </TabsList>
          <TabsContent value="overview">
            <div className="flex flex-col gap-3 border border-border p-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-muted-foreground">TVL</span>
                <span className="font-mono text-sm text-foreground">$4,283,914.52</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-muted-foreground">24h Volume</span>
                <span className="font-mono text-sm text-foreground">$892,341.00</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-muted-foreground">Fee Tier</span>
                <span className="font-mono text-sm text-foreground">0.3%</span>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="positions">
            <div className="border border-border p-4 text-sm text-muted-foreground">
              Your active positions in this pool will appear here.
            </div>
          </TabsContent>
          <TabsContent value="transactions">
            <div className="border border-border p-4 text-sm text-muted-foreground">
              Recent transactions for this pool will appear here.
            </div>
          </TabsContent>
        </Tabs>
      </DocExample>
    </DocSection>
  )
}

function AccordionDocs() {
  return (
    <DocSection
      title="Accordion"
      description="Expandable sections for FAQs, advanced settings, and detailed breakdowns."
    >
      <DocExample label="Protocol FAQ">
        <Accordion>
          <AccordionItem value="impermanent-loss">
            <AccordionTrigger>What is impermanent loss?</AccordionTrigger>
            <AccordionContent>
              Impermanent loss occurs when the price ratio of deposited tokens changes compared to when they were deposited. The larger the divergence, the greater the impermanent loss.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="fee-tiers">
            <AccordionTrigger>How do fee tiers work?</AccordionTrigger>
            <AccordionContent>
              Fee tiers (0.01%, 0.05%, 0.3%, 1%) determine the swap fee collected by liquidity providers. Lower fee tiers are better for stable pairs, while higher tiers suit volatile pairs.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="slippage">
            <AccordionTrigger>What is slippage tolerance?</AccordionTrigger>
            <AccordionContent>
              Slippage tolerance is the maximum price change you're willing to accept between when you submit and when your transaction executes. Higher slippage means more likely execution but potentially worse prices.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </DocExample>
    </DocSection>
  )
}

function CollapsibleDocs() {
  const [open, setOpen] = useState(false)

  return (
    <DocSection
      title="Collapsible"
      description="Expandable content sections for transaction details and advanced options."
    >
      <DocExample label="Transaction Details">
        <Collapsible open={open} onOpenChange={setOpen}>
          <div className="flex items-center justify-between border border-border p-4">
            <span className="text-sm text-foreground">Transaction Details</span>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm">
                <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent>
            <div className="flex flex-col gap-2 border border-t-0 border-border p-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-muted-foreground">Gas Price</span>
                <span className="font-mono text-[10px] text-foreground">24 Gwei</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-muted-foreground">Max Fee</span>
                <span className="font-mono text-[10px] text-foreground">$3.42</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-muted-foreground">Priority Fee</span>
                <span className="font-mono text-[10px] text-foreground">2 Gwei</span>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </DocExample>
    </DocSection>
  )
}

function ScrollAreaDocs() {
  return (
    <DocSection
      title="Scroll Area"
      description="Custom scrollable containers for token lists, transaction history, and log panels."
    >
      <DocExample label="Token List">
        <ScrollArea className="h-48 border border-border">
          <div className="flex flex-col divide-y divide-border">
            {["ETH", "USDC", "WBTC", "DAI", "LINK", "UNI", "AAVE", "COMP", "MKR", "SNX", "CRV", "SUSHI"].map(
              (token) => (
                <div key={token} className="flex items-center justify-between px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center bg-secondary">
                      <span className="font-mono text-[9px] text-foreground">{token.slice(0, 2)}</span>
                    </div>
                    <span className="text-sm text-foreground">{token}</span>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">$0.00</span>
                </div>
              )
            )}
          </div>
        </ScrollArea>
      </DocExample>
    </DocSection>
  )
}


// ─── Categories & Component Map ──────────────────────────────────────

const CATEGORIES = [
  {
    id: "core",
    label: "Core",
    components: [
      { id: "button", label: "Button", render: ButtonDocs },
      { id: "badge", label: "Badge", render: BadgeDocs },
      { id: "card", label: "Card", render: CardDocs },
      { id: "alert", label: "Alert", render: AlertDocs },
      { id: "table", label: "Table", render: TableDocs },
      { id: "avatar", label: "Avatar", render: AvatarDocs },
      { id: "separator", label: "Separator", render: SeparatorDocs },
    ],
  },
  {
    id: "form",
    label: "Form Controls",
    components: [
      { id: "input", label: "Input", render: InputDocs },
      { id: "field", label: "Field", render: FieldDocs },
      { id: "select", label: "Select", render: SelectDocs },
      { id: "checkbox", label: "Checkbox", render: CheckboxDocs },
      { id: "switch", label: "Switch", render: SwitchDocs },
      { id: "slider", label: "Slider", render: SliderDocs },
      { id: "number-field", label: "Number Field", render: NumberFieldDocs },
      { id: "radio", label: "Radio", render: RadioDocs },
      { id: "toggle", label: "Toggle", render: ToggleDocs },
      { id: "toggle-group", label: "Toggle Group", render: ToggleGroupDocs },
    ],
  },
  {
    id: "feedback",
    label: "Feedback",
    components: [
      { id: "progress", label: "Progress", render: ProgressDocs },
      { id: "tooltip", label: "Tooltip", render: TooltipDocs },
      { id: "meter", label: "Meter", render: MeterDocs },
      { id: "skeleton", label: "Skeleton", render: SkeletonDocs },
    ],
  },
  {
    id: "overlay",
    label: "Overlay",
    components: [
      { id: "dialog", label: "Dialog", render: DialogDocs },
      { id: "alert-dialog", label: "Alert Dialog", render: AlertDialogDocs },
      { id: "popover", label: "Popover", render: PopoverDocs },
      { id: "menu", label: "Menu", render: MenuDocs },
    ],
  },
  {
    id: "layout",
    label: "Layout",
    components: [
      { id: "tabs", label: "Tabs", render: TabsDocs },
      { id: "accordion", label: "Accordion", render: AccordionDocs },
      { id: "collapsible", label: "Collapsible", render: CollapsibleDocs },
      { id: "scroll-area", label: "Scroll Area", render: ScrollAreaDocs },
    ],
  },
] as const

const COMPONENT_MAP = new Map(
  CATEGORIES.flatMap((cat) =>
    cat.components.map((comp) => [comp.id, comp.render])
  )
)

// ─── Sidebar Content ─────────────────────────────────────────────────

function SidebarContent({
  activeComponent,
  onSelect,
}: {
  activeComponent: string
  onSelect: (id: string) => void
}) {
  return (
    <nav className="flex flex-col gap-1">
      {CATEGORIES.map((category) => (
        <Collapsible key={category.id} defaultOpen>
          <CollapsibleTrigger className="group flex w-full items-center justify-between px-3 py-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
              {category.label}
            </span>
            <ChevronDown className="h-3 w-3 text-muted-foreground transition-transform group-data-[panel-open]:rotate-180" />
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="flex flex-col gap-0.5 pb-2">
              {category.components.map((comp) => (
                <button
                  key={comp.id}
                  onClick={() => onSelect(comp.id)}
                  className={`w-full rounded-sm px-3 py-1.5 text-left text-sm transition-colors ${
                    activeComponent === comp.id
                      ? "border-l-2 border-accent bg-accent/10 text-accent"
                      : "border-l-2 border-transparent text-muted-foreground hover:bg-card/50 hover:text-foreground"
                  }`}
                >
                  {comp.label}
                </button>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      ))}
    </nav>
  )
}

// ─── Main Section ─────────────────────────────────────────────────────

export function ComponentsSection() {
  const [activeComponent, setActiveComponent] = useState("button")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const ActiveDocs = COMPONENT_MAP.get(activeComponent) ?? ButtonDocs
  const activeLabel =
    CATEGORIES.flatMap((c) => c.components).find(
      (c) => c.id === activeComponent
    )?.label ?? "Button"

  return (
    <section
      id="components"
      className="border-b border-border px-6 py-20 md:px-12 lg:px-20"
    >
      <div className="mb-16 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
            04
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            Components
          </span>
        </div>
        <h2 className="font-pixel text-3xl tracking-tight text-foreground md:text-4xl">
          Interface Elements
        </h2>
        <p className="max-w-lg text-sm leading-relaxed text-muted-foreground">
          Every component is purpose-built for financial applications. No
          decoration without function. Each interaction is deliberate and
          predictable.
        </p>
      </div>

      {/* Mobile toggle bar */}
      <div className="mb-4 flex items-center justify-between rounded-md border border-border bg-card/50 px-4 py-2.5 lg:hidden">
        <span className="font-mono text-xs text-foreground">{activeLabel}</span>
        <button
          onClick={() => setSidebarOpen(true)}
          className="flex h-8 w-8 items-center justify-center rounded-sm text-muted-foreground hover:text-foreground"
          aria-label="Open component menu"
        >
          <MenuIcon className="h-4 w-4" />
        </button>
      </div>

      {/* Mobile overlay sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="absolute inset-y-0 left-0 w-72 border-r border-border bg-background p-4">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                Components
              </span>
              <button
                onClick={() => setSidebarOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-sm text-muted-foreground hover:text-foreground"
                aria-label="Close component menu"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <ScrollArea className="h-[calc(100vh-5rem)]">
              <SidebarContent
                activeComponent={activeComponent}
                onSelect={(id) => {
                  setActiveComponent(id)
                  setSidebarOpen(false)
                }}
              />
            </ScrollArea>
          </div>
        </div>
      )}

      {/* Desktop grid layout */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr]">
        {/* Desktop sidebar */}
        <div className="hidden self-start sticky top-24 lg:block">
          <ScrollArea className="max-h-[calc(100vh-8rem)]">
            <SidebarContent
              activeComponent={activeComponent}
              onSelect={setActiveComponent}
            />
          </ScrollArea>
        </div>

        {/* Preview area */}
        <div className="min-w-0">
          <ActiveDocs />
        </div>
      </div>
    </section>
  )
}
