import { useState } from "react"
import {
  ArrowRight,
  Copy,
  Check,
  Wallet,
  Settings,
  ChevronDown,
  Search,
  AlertTriangle,
  Info,
  Loader2,
  ExternalLink,
  Shield,
} from "lucide-react"

function SectionLabel({ title }: { title: string }) {
  return (
    <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
      {title}
    </h3>
  )
}

function ButtonShowcase() {
  const [copied, setCopied] = useState(false)

  return (
    <div className="flex flex-col gap-6">
      <SectionLabel title="Buttons" />
      <div className="flex flex-col gap-4">
        {/* Primary buttons */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            className="flex items-center gap-2 bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Connect Wallet
            <Wallet className="h-4 w-4" />
          </button>
          <button
            type="button"
            className="flex items-center gap-2 bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            Swap Tokens
            <ArrowRight className="h-4 w-4" />
          </button>
          <button
            type="button"
            className="flex items-center gap-2 bg-success px-5 py-2.5 text-sm font-medium text-success-foreground transition-opacity hover:opacity-90"
          >
            Confirm
            <Check className="h-4 w-4" />
          </button>
          <button
            type="button"
            className="flex items-center gap-2 bg-destructive px-5 py-2.5 text-sm font-medium text-destructive-foreground transition-opacity hover:opacity-90"
          >
            Reject
            <AlertTriangle className="h-4 w-4" />
          </button>
        </div>

        {/* Secondary / outline */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            className="flex items-center gap-2 border border-border bg-transparent px-5 py-2.5 text-sm text-foreground transition-colors hover:bg-card"
          >
            <Settings className="h-4 w-4" />
            Settings
          </button>
          <button
            type="button"
            className="flex items-center gap-2 border border-border bg-transparent px-5 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-card hover:text-foreground"
          >
            View on Explorer
            <ExternalLink className="h-3.5 w-3.5" />
          </button>
          <button
            type="button"
            onClick={() => {
              setCopied(true)
              setTimeout(() => setCopied(false), 2000)
            }}
            className="flex items-center gap-2 border border-border bg-transparent px-5 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-card hover:text-foreground"
          >
            {copied ? (
              <Check className="h-3.5 w-3.5" />
            ) : (
              <Copy className="h-3.5 w-3.5" />
            )}
            {copied ? "Copied" : "Copy Address"}
          </button>
        </div>

        {/* Ghost / text buttons */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            className="flex items-center gap-1.5 bg-transparent px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Max
          </button>
          <button
            type="button"
            className="flex items-center gap-1.5 bg-transparent px-3 py-2 text-sm text-accent transition-colors hover:text-accent/80"
          >
            50%
          </button>
          <button
            type="button"
            disabled
            className="flex cursor-not-allowed items-center gap-2 bg-secondary px-5 py-2.5 text-sm text-muted-foreground opacity-50"
          >
            <Loader2 className="h-3.5 w-3.5 animate-spin" />
            Awaiting Approval
          </button>
        </div>

        {/* Size variants */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            className="bg-foreground px-3 py-1.5 text-xs font-medium text-background transition-opacity hover:opacity-90"
          >
            Small
          </button>
          <button
            type="button"
            className="bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Default
          </button>
          <button
            type="button"
            className="bg-foreground px-8 py-3.5 text-base font-medium text-background transition-opacity hover:opacity-90"
          >
            Large
          </button>
        </div>
      </div>
    </div>
  )
}

function InputShowcase() {
  return (
    <div className="flex flex-col gap-6">
      <SectionLabel title="Inputs & Forms" />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Text input */}
        <div className="flex flex-col gap-2">
          <label className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
            Token Amount
          </label>
          <div className="flex items-center border border-border bg-card">
            <input
              type="text"
              placeholder="0.00"
              className="flex-1 bg-transparent px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none"
            />
            <span className="border-l border-border px-4 py-3 font-mono text-xs text-muted-foreground">
              ETH
            </span>
          </div>
        </div>

        {/* Search input */}
        <div className="flex flex-col gap-2">
          <label className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
            Search
          </label>
          <div className="flex items-center gap-2 border border-border bg-card px-4">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search tokens, addresses..."
              className="flex-1 bg-transparent py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none"
            />
            <kbd className="hidden border border-border bg-secondary px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground sm:inline-block">
              /
            </kbd>
          </div>
        </div>

        {/* Select / dropdown */}
        <div className="flex flex-col gap-2">
          <label className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
            Network
          </label>
          <button
            type="button"
            className="flex items-center justify-between border border-border bg-card px-4 py-3 text-sm text-foreground"
          >
            <div className="flex items-center gap-2">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-success/20">
                <div className="h-2.5 w-2.5 rounded-full bg-success" />
              </div>
              Ethereum Mainnet
            </div>
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          </button>
        </div>

        {/* Address input */}
        <div className="flex flex-col gap-2">
          <label className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
            Recipient Address
          </label>
          <input
            type="text"
            placeholder="0x..."
            className="border border-border bg-card px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/40 focus:border-accent focus:outline-none"
          />
        </div>
      </div>
    </div>
  )
}

function CardShowcase() {
  return (
    <div className="flex flex-col gap-6">
      <SectionLabel title="Cards & Containers" />
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {/* Stats card */}
        <div className="flex flex-col gap-3 border border-border bg-card p-6">
          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
            Total Value Locked
          </span>
          <span className="font-mono text-2xl font-light tabular-nums text-foreground">
            $4,283,914.52
          </span>
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-success">+5.23%</span>
            <span className="text-xs text-muted-foreground">24h</span>
          </div>
        </div>

        {/* Stats card 2 */}
        <div className="flex flex-col gap-3 border border-border bg-card p-6">
          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
            24h Volume
          </span>
          <span className="font-mono text-2xl font-light tabular-nums text-foreground">
            $892,341.00
          </span>
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-destructive">-2.14%</span>
            <span className="text-xs text-muted-foreground">vs prev</span>
          </div>
        </div>

        {/* Stats card 3 */}
        <div className="flex flex-col gap-3 border border-border bg-card p-6">
          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
            Active Pools
          </span>
          <span className="font-mono text-2xl font-light tabular-nums text-foreground">
            1,247
          </span>
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-success">+12</span>
            <span className="text-xs text-muted-foreground">new today</span>
          </div>
        </div>
      </div>

      {/* Alert cards */}
      <div className="flex flex-col gap-3">
        <div className="flex items-start gap-3 border border-border bg-card p-4">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
          <div className="flex flex-col gap-1">
            <span className="text-sm text-foreground">
              Price Impact Warning
            </span>
            <span className="text-xs text-muted-foreground">
              This swap has a price impact of 2.4%. Consider splitting into
              smaller transactions.
            </span>
          </div>
        </div>
        <div className="flex items-start gap-3 border border-destructive/30 bg-destructive/5 p-4">
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
          <div className="flex flex-col gap-1">
            <span className="text-sm text-foreground">
              High Slippage Detected
            </span>
            <span className="text-xs text-muted-foreground">
              Slippage tolerance is set to 5%. Transactions may be frontrun.
            </span>
          </div>
        </div>
        <div className="flex items-start gap-3 border border-success/30 bg-success/5 p-4">
          <Shield className="mt-0.5 h-4 w-4 shrink-0 text-success" />
          <div className="flex flex-col gap-1">
            <span className="text-sm text-foreground">Contract Verified</span>
            <span className="text-xs text-muted-foreground">
              This token contract has been verified and audited by CertiK.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

function BadgeShowcase() {
  return (
    <div className="flex flex-col gap-6">
      <SectionLabel title="Badges & Status" />
      <div className="flex flex-wrap gap-3">
        <span className="flex items-center gap-1.5 border border-border bg-card px-3 py-1.5 text-xs text-foreground">
          <div className="h-1.5 w-1.5 rounded-full bg-success" />
          Connected
        </span>
        <span className="flex items-center gap-1.5 border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground">
          <div className="h-1.5 w-1.5 rounded-full bg-muted-foreground" />
          Disconnected
        </span>
        <span className="flex items-center gap-1.5 border border-accent/30 bg-accent/10 px-3 py-1.5 text-xs text-accent">
          <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
          Pending
        </span>
        <span className="flex items-center gap-1.5 border border-destructive/30 bg-destructive/10 px-3 py-1.5 text-xs text-destructive">
          Failed
        </span>
        <span className="flex items-center gap-1.5 border border-success/30 bg-success/10 px-3 py-1.5 text-xs text-success">
          Confirmed
        </span>
        <span className="border border-border bg-secondary px-3 py-1.5 font-mono text-[10px] text-muted-foreground">
          ERC-20
        </span>
        <span className="border border-border bg-secondary px-3 py-1.5 font-mono text-[10px] text-muted-foreground">
          Layer 2
        </span>
        <span className="border border-border bg-secondary px-3 py-1.5 font-mono text-[10px] text-muted-foreground">
          v3
        </span>
      </div>
    </div>
  )
}

export function ComponentsSection() {
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

      <div className="flex flex-col gap-16">
        <ButtonShowcase />
        <InputShowcase />
        <CardShowcase />
        <BadgeShowcase />
      </div>
    </section>
  )
}
