import { useState } from "react"
import { ArrowUpRight, ArrowDownRight, RotateCcw } from "lucide-react"
import { TerminalLayout, TerminalPanel, TerminalHandle, Panel } from "@/components/ui/terminal-layout"
import { useTerminalLayout, type TerminalPreset } from "@/hooks/use-terminal-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

// --- Stub data ---

const ORDERBOOK_ASKS = [
  { price: "1,829.40", size: "12.450", depth: 95 },
  { price: "1,828.90", size: "8.210", depth: 72 },
  { price: "1,828.55", size: "5.830", depth: 54 },
  { price: "1,828.20", size: "3.100", depth: 35 },
]

const ORDERBOOK_BIDS = [
  { price: "1,827.10", size: "0.950", depth: 10 },
  { price: "1,826.75", size: "2.340", depth: 22 },
  { price: "1,826.40", size: "4.510", depth: 40 },
  { price: "1,826.05", size: "7.120", depth: 58 },
]

const POSITIONS_DATA = [
  { pair: "ETH/USDC", side: "Long" as const, size: "2.50 ETH", pnl: "+$117.75", pnlPercent: "+2.64%", positive: true },
  { pair: "BTC/USDC", side: "Short" as const, size: "0.15 BTC", pnl: "+$135.63", pnlPercent: "+2.05%", positive: true },
  { pair: "ARB/USDC", side: "Long" as const, size: "3,200 ARB", pnl: "-$288.00", pnlPercent: "-8.04%", positive: false },
]

const BALANCES_DATA = [
  { symbol: "ETH", balance: "2.4521", change: "+2.14%", positive: true },
  { symbol: "USDC", balance: "12,304.21", change: "+0.01%", positive: true },
  { symbol: "WBTC", balance: "0.0842", change: "-1.32%", positive: false },
  { symbol: "ARB", balance: "5,230.00", change: "+8.21%", positive: true },
]

// --- Stub pane content ---

function OrderbookContent() {
  return (
    <div className="flex flex-col text-xs">
      {/* Column headers */}
      <div className="grid grid-cols-2 px-3 py-1.5 border-b border-border">
        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">Price</span>
        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground text-right">Size</span>
      </div>
      {/* Asks */}
      {ORDERBOOK_ASKS.map((row) => (
        <div key={row.price} className="relative grid grid-cols-2 px-3 py-1">
          <div className="absolute inset-y-0 right-0 bg-destructive/[0.06]" style={{ width: `${row.depth}%` }} />
          <span className="relative font-mono text-xs tabular-nums text-destructive">{row.price}</span>
          <span className="relative font-mono text-xs tabular-nums text-foreground text-right">{row.size}</span>
        </div>
      ))}
      {/* Spread */}
      <div className="flex items-center justify-between border-y border-border bg-card px-3 py-1.5">
        <div className="flex items-center gap-1.5">
          <span className="font-mono text-xs font-medium tabular-nums text-foreground">1,827.30</span>
          <ArrowUpRight className="h-3 w-3 text-success" />
        </div>
        <span className="font-mono text-[10px] tabular-nums text-muted-foreground">0.02%</span>
      </div>
      {/* Bids */}
      {ORDERBOOK_BIDS.map((row) => (
        <div key={row.price} className="relative grid grid-cols-2 px-3 py-1">
          <div className="absolute inset-y-0 right-0 bg-success/[0.06]" style={{ width: `${row.depth}%` }} />
          <span className="relative font-mono text-xs tabular-nums text-success">{row.price}</span>
          <span className="relative font-mono text-xs tabular-nums text-foreground text-right">{row.size}</span>
        </div>
      ))}
    </div>
  )
}

function ChartContent() {
  const w = 400
  const h = 200
  // Simple candlestick-style SVG line
  const points = [
    { x: 0, y: 120 }, { x: 30, y: 110 }, { x: 60, y: 130 }, { x: 90, y: 100 },
    { x: 120, y: 80 }, { x: 150, y: 95 }, { x: 180, y: 70 }, { x: 210, y: 60 },
    { x: 240, y: 75 }, { x: 270, y: 55 }, { x: 300, y: 50 }, { x: 330, y: 65 },
    { x: 360, y: 45 }, { x: 400, y: 40 },
  ]
  const line = points.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ")
  const fill = `${line} L${w},${h} L0,${h} Z`

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between px-3 py-2">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-medium text-foreground">ETH/USDC</span>
          <span className="font-mono text-[10px] tabular-nums text-success">1,827.30</span>
          <span className="font-mono text-[10px] tabular-nums text-success">+2.14%</span>
        </div>
        <div className="flex items-center gap-2">
          {["1H", "4H", "1D", "1W"].map((tf) => (
            <button
              key={tf}
              type="button"
              className={`font-mono text-[10px] transition-colors ${tf === "4H" ? "text-accent" : "text-muted-foreground hover:text-foreground"}`}
            >
              {tf}
            </button>
          ))}
        </div>
      </div>
      <div className="min-h-0 flex-1 px-3 pb-2">
        <svg viewBox={`0 0 ${w} ${h}`} className="h-full w-full" preserveAspectRatio="none">
          {/* Grid */}
          {[0.25, 0.5, 0.75].map((f) => (
            <line key={f} x1="0" y1={h * f} x2={w} y2={h * f} stroke="hsl(var(--border))" strokeWidth="0.5" strokeDasharray="4 4" />
          ))}
          <path d={fill} fill="hsl(var(--accent))" opacity="0.06" />
          <path d={line} fill="none" stroke="hsl(var(--accent))" strokeWidth="1.5" />
          {/* Price dot */}
          <circle cx={400} cy={40} r="3" fill="hsl(var(--accent))" />
        </svg>
      </div>
    </div>
  )
}

function PositionsContent() {
  return (
    <div className="flex flex-col text-xs">
      {/* Header */}
      <div className="grid grid-cols-[1fr_auto_auto_auto] gap-4 px-3 py-1.5 border-b border-border">
        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">Pair</span>
        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">Side</span>
        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground text-right">Size</span>
        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground text-right">PnL</span>
      </div>
      {POSITIONS_DATA.map((pos) => (
        <div key={pos.pair} className="grid grid-cols-[1fr_auto_auto_auto] gap-4 px-3 py-2 transition-colors hover:bg-card">
          <div className="flex items-center gap-2">
            <div className={`h-4 w-0.5 ${pos.side === "Long" ? "bg-success" : "bg-destructive"}`} />
            <span className="font-mono text-xs text-foreground">{pos.pair}</span>
          </div>
          <span className={`font-mono text-xs ${pos.side === "Long" ? "text-success" : "text-destructive"}`}>
            {pos.side}
          </span>
          <span className="font-mono text-xs tabular-nums text-foreground text-right">{pos.size}</span>
          <div className="flex flex-col items-end">
            <span className={`font-mono text-xs tabular-nums ${pos.positive ? "text-success" : "text-destructive"}`}>{pos.pnl}</span>
            <span className={`font-mono text-[10px] tabular-nums ${pos.positive ? "text-success" : "text-destructive"}`}>{pos.pnlPercent}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

function OrderPanelContent() {
  const [side, setSide] = useState<"long" | "short">("long")
  const isLong = side === "long"

  return (
    <div className="flex flex-col gap-3 p-3">
      {/* Long / Short toggle */}
      <div className="grid grid-cols-2 border border-border">
        <button
          type="button"
          onClick={() => setSide("long")}
          className={`flex items-center justify-center gap-1 py-2 font-mono text-[10px] uppercase tracking-[0.15em] transition-colors border-r border-border ${
            isLong ? "bg-success/10 text-success" : "bg-transparent text-muted-foreground hover:text-foreground"
          }`}
        >
          <ArrowUpRight className="h-3 w-3" />
          Long
        </button>
        <button
          type="button"
          onClick={() => setSide("short")}
          className={`flex items-center justify-center gap-1 py-2 font-mono text-[10px] uppercase tracking-[0.15em] transition-colors ${
            !isLong ? "bg-destructive/10 text-destructive" : "bg-transparent text-muted-foreground hover:text-foreground"
          }`}
        >
          <ArrowDownRight className="h-3 w-3" />
          Short
        </button>
      </div>

      {/* Price */}
      <div className="flex flex-col gap-1">
        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">Price</span>
        <div className="flex items-center border border-border bg-card">
          <Input defaultValue="1,827.30" className="border-0 bg-transparent focus-visible:ring-0 h-8 text-xs" />
          <span className="shrink-0 border-l border-border px-2 py-1.5 font-mono text-[10px] text-muted-foreground">USDC</span>
        </div>
      </div>

      {/* Size */}
      <div className="flex flex-col gap-1">
        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">Size</span>
        <div className="flex items-center border border-border bg-card">
          <Input defaultValue="1.00" className="border-0 bg-transparent focus-visible:ring-0 h-8 text-xs" />
          <span className="shrink-0 border-l border-border px-2 py-1.5 font-mono text-[10px] text-muted-foreground">ETH</span>
        </div>
      </div>

      {/* Leverage */}
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">Leverage</span>
        <span className="font-mono text-xs tabular-nums text-foreground border border-border px-2 py-0.5">5x</span>
      </div>

      {/* Summary */}
      <div className="flex flex-col gap-1.5 border-t border-border pt-3">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] text-muted-foreground">Collateral</span>
          <span className="font-mono text-[10px] tabular-nums text-foreground">$365.46</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] text-muted-foreground">Liq. Price</span>
          <span className="font-mono text-[10px] tabular-nums text-warning">$1,462.00</span>
        </div>
      </div>

      <Button className="w-full h-8 text-xs" variant={isLong ? "success" : "destructive"}>
        {isLong ? "Long" : "Short"} ETH
      </Button>
    </div>
  )
}

function BalancesContent() {
  return (
    <div className="flex flex-col text-xs">
      {/* Header */}
      <div className="grid grid-cols-[auto_1fr_auto] gap-3 px-3 py-1.5 border-b border-border">
        <span className="w-6" />
        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">Asset</span>
        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground text-right">24h</span>
      </div>
      {BALANCES_DATA.map((token) => (
        <div key={token.symbol} className="grid grid-cols-[auto_1fr_auto] gap-3 items-center px-3 py-2 transition-colors hover:bg-card">
          <div className="flex h-6 w-6 shrink-0 items-center justify-center bg-secondary">
            <span className="font-mono text-[9px] font-medium text-foreground">{token.symbol.slice(0, 2)}</span>
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-xs text-foreground">{token.symbol}</span>
            <span className="font-mono text-[10px] tabular-nums text-muted-foreground">{token.balance}</span>
          </div>
          <span className={`font-mono text-[10px] tabular-nums text-right ${token.positive ? "text-success" : "text-destructive"}`}>
            {token.change}
          </span>
        </div>
      ))}
    </div>
  )
}

// --- Layout presets ---

function TradingLayout() {
  return (
    <TerminalLayout orientation="horizontal" id="fermi-terminal-trading">
      <TerminalPanel title="Orderbook" defaultSize={22} minSize={15}>
        <OrderbookContent />
      </TerminalPanel>
      <TerminalHandle />
      {/* Center + Right nested vertically */}
      <Panel defaultSize={78} minSize={40}>
        <TerminalLayout orientation="vertical" id="fermi-terminal-trading-center">
          <TerminalPanel title="Chart" defaultSize={55} minSize={25}>
            <ChartContent />
          </TerminalPanel>
          <TerminalHandle />
          {/* Bottom row nested horizontally */}
          <Panel defaultSize={45} minSize={20}>
            <TerminalLayout orientation="horizontal" id="fermi-terminal-trading-bottom">
              <TerminalPanel title="Positions" defaultSize={60} minSize={20}>
                <PositionsContent />
              </TerminalPanel>
              <TerminalHandle />
              <TerminalPanel title="Order Panel" defaultSize={40} minSize={15}>
                <OrderPanelContent />
              </TerminalPanel>
            </TerminalLayout>
          </Panel>
        </TerminalLayout>
      </Panel>
    </TerminalLayout>
  )
}

function WideChartLayout() {
  return (
    <TerminalLayout orientation="vertical" id="fermi-terminal-wide">
      <TerminalPanel title="Chart" defaultSize={45} minSize={20}>
        <ChartContent />
      </TerminalPanel>
      <TerminalHandle />
      {/* Middle row nested horizontally */}
      <Panel defaultSize={35} minSize={15}>
        <TerminalLayout orientation="horizontal" id="fermi-terminal-wide-middle">
          <TerminalPanel title="Orderbook" defaultSize={30} minSize={15}>
            <OrderbookContent />
          </TerminalPanel>
          <TerminalHandle />
          <TerminalPanel title="Positions" defaultSize={40} minSize={20}>
            <PositionsContent />
          </TerminalPanel>
          <TerminalHandle />
          <TerminalPanel title="Order Panel" defaultSize={30} minSize={15}>
            <OrderPanelContent />
          </TerminalPanel>
        </TerminalLayout>
      </Panel>
      <TerminalHandle />
      <TerminalPanel title="Balances" defaultSize={20} minSize={10}>
        <BalancesContent />
      </TerminalPanel>
    </TerminalLayout>
  )
}

function CompactLayout() {
  return (
    <TerminalLayout orientation="vertical" id="fermi-terminal-compact">
      {/* Top row nested horizontally */}
      <Panel defaultSize={37} minSize={15}>
        <TerminalLayout orientation="horizontal" id="fermi-terminal-compact-top">
          <TerminalPanel title="Orderbook" defaultSize={50} minSize={20}>
            <OrderbookContent />
          </TerminalPanel>
          <TerminalHandle />
          <TerminalPanel title="Order Panel" defaultSize={50} minSize={20}>
            <OrderPanelContent />
          </TerminalPanel>
        </TerminalLayout>
      </Panel>
      <TerminalHandle />
      {/* Middle row nested horizontally */}
      <Panel defaultSize={37} minSize={15}>
        <TerminalLayout orientation="horizontal" id="fermi-terminal-compact-mid">
          <TerminalPanel title="Chart" defaultSize={50} minSize={20}>
            <ChartContent />
          </TerminalPanel>
          <TerminalHandle />
          <TerminalPanel title="Balances" defaultSize={50} minSize={20}>
            <BalancesContent />
          </TerminalPanel>
        </TerminalLayout>
      </Panel>
      <TerminalHandle />
      <TerminalPanel title="Positions" defaultSize={26} minSize={10}>
        <PositionsContent />
      </TerminalPanel>
    </TerminalLayout>
  )
}

// --- Preset button labels ---

const PRESETS: { key: TerminalPreset; label: string }[] = [
  { key: "trading", label: "Trading" },
  { key: "wide-chart", label: "Wide Chart" },
  { key: "compact", label: "Compact" },
]

// --- Section ---

export function TerminalSection() {
  const { preset, setPreset, reset } = useTerminalLayout()

  return (
    <section
      id="terminal"
      className="border-b border-border px-6 py-20 md:px-12 lg:px-20"
    >
      {/* Section header */}
      <div className="mb-16 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
            07
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            Terminal
          </span>
        </div>
        <h2 className="font-pixel text-3xl tracking-tight text-foreground md:text-4xl">
          Terminal
        </h2>
        <p className="max-w-lg text-sm leading-relaxed text-muted-foreground">
          Resizable tiling layouts inspired by Bloomberg Terminal and TradingView.
          Drag panel edges to resize. Switch between layout presets. Sizes persist across refreshes.
        </p>
      </div>

      {/* Toolbar */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-1">
          {PRESETS.map((p) => (
            <button
              key={p.key}
              type="button"
              onClick={() => setPreset(p.key)}
              className={`px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.15em] transition-colors border border-border ${
                preset === p.key
                  ? "bg-secondary text-foreground"
                  : "bg-transparent text-muted-foreground hover:text-foreground hover:bg-card"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={reset}
          className="flex items-center gap-1.5 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-foreground border border-border hover:bg-card"
        >
          <RotateCcw className="h-3 w-3" />
          Reset
        </button>
      </div>

      {/* Terminal container */}
      <div className="h-[600px] border border-border">
        {preset === "trading" && <TradingLayout key="trading" />}
        {preset === "wide-chart" && <WideChartLayout key="wide-chart" />}
        {preset === "compact" && <CompactLayout key="compact" />}
      </div>
    </section>
  )
}
