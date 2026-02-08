import { useState } from "react"
import { Copy, Check, Wallet, X, ArrowUpRight, ArrowDownRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table"

// --- Orderbook ---
const ASKS = [
  { price: "1,829.40", size: "12.450", total: "22,766.46", depth: 95, cumulative: 100 },
  { price: "1,828.90", size: "8.210", total: "15,015.27", depth: 72, cumulative: 82 },
  { price: "1,828.55", size: "5.830", total: "10,660.45", depth: 54, cumulative: 60 },
  { price: "1,828.20", size: "3.100", total: "5,667.42", depth: 35, cumulative: 40 },
  { price: "1,827.85", size: "1.540", total: "2,816.89", depth: 18, cumulative: 22 },
  { price: "1,827.50", size: "0.720", total: "1,315.80", depth: 8, cumulative: 8 },
]

const BIDS = [
  { price: "1,827.10", size: "0.950", total: "1,735.75", depth: 10, cumulative: 6 },
  { price: "1,826.75", size: "2.340", total: "4,274.60", depth: 22, cumulative: 18 },
  { price: "1,826.40", size: "4.510", total: "8,237.06", depth: 40, cumulative: 35 },
  { price: "1,826.05", size: "7.120", total: "13,001.48", depth: 58, cumulative: 55 },
  { price: "1,825.70", size: "9.880", total: "18,037.90", depth: 78, cumulative: 78 },
  { price: "1,825.35", size: "14.200", total: "25,919.97", depth: 100, cumulative: 100 },
]

// --- Depth Chart (SVG) ---
function DepthChart() {
  const bidPoints = [
    { x: 0, y: 5 },
    { x: 8, y: 5 },
    { x: 16, y: 12 },
    { x: 24, y: 18 },
    { x: 32, y: 28 },
    { x: 38, y: 42 },
    { x: 44, y: 58 },
    { x: 48, y: 78 },
    { x: 50, y: 100 },
  ]

  const askPoints = [
    { x: 50, y: 100 },
    { x: 52, y: 75 },
    { x: 56, y: 55 },
    { x: 62, y: 40 },
    { x: 68, y: 30 },
    { x: 76, y: 20 },
    { x: 84, y: 14 },
    { x: 92, y: 8 },
    { x: 100, y: 8 },
  ]

  const w = 360
  const h = 80
  const padY = 8

  const toPath = (points: { x: number; y: number }[]) =>
    points.map((p, i) => `${i === 0 ? "M" : "L"}${(p.x / 100) * w},${h - padY - (p.y / 100) * (h - padY * 2)}`).join(" ")

  const toFill = (points: { x: number; y: number }[]) => {
    const line = toPath(points)
    const last = points[points.length - 1]
    const first = points[0]
    return `${line} L${(last.x / 100) * w},${h} L${(first.x / 100) * w},${h} Z`
  }

  return (
    <div className="flex flex-col gap-2 border-t border-border px-4 py-3">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">Depth</span>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <span className="inline-block h-1.5 w-3 bg-success/40" />
            <span className="font-mono text-[10px] text-muted-foreground">Bids</span>
          </span>
          <span className="flex items-center gap-1">
            <span className="inline-block h-1.5 w-3 bg-destructive/40" />
            <span className="font-mono text-[10px] text-muted-foreground">Asks</span>
          </span>
        </div>
      </div>
      <svg viewBox={`0 0 ${w} ${h}`} className="h-20 w-full" preserveAspectRatio="none">
        {/* Grid lines */}
        <line x1="0" y1={h * 0.33} x2={w} y2={h * 0.33} stroke="hsl(var(--border))" strokeWidth="0.5" strokeDasharray="3 3" />
        <line x1="0" y1={h * 0.66} x2={w} y2={h * 0.66} stroke="hsl(var(--border))" strokeWidth="0.5" strokeDasharray="3 3" />
        <line x1={w / 2} y1="0" x2={w / 2} y2={h} stroke="hsl(var(--border))" strokeWidth="0.5" strokeDasharray="3 3" />

        {/* Bid fill + line */}
        <path d={toFill(bidPoints)} fill="hsl(var(--success))" opacity="0.08" />
        <path d={toPath(bidPoints)} fill="none" stroke="hsl(var(--success))" strokeWidth="1.5" />

        {/* Ask fill + line */}
        <path d={toFill(askPoints)} fill="hsl(var(--destructive))" opacity="0.08" />
        <path d={toPath(askPoints)} fill="none" stroke="hsl(var(--destructive))" strokeWidth="1.5" />
      </svg>
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] tabular-nums text-muted-foreground">1,825.00</span>
        <span className="font-mono text-[10px] tabular-nums text-foreground">1,827.30</span>
        <span className="font-mono text-[10px] tabular-nums text-muted-foreground">1,830.00</span>
      </div>
    </div>
  )
}

function Orderbook() {
  return (
    <div className="flex w-full max-w-[340px] flex-col border border-border">
      {/* Header */}
      <div className="flex items-center justify-between bg-card px-4 py-3">
        <span className="text-sm font-medium text-foreground">Orderbook</span>
        <span className="font-mono text-[10px] text-muted-foreground">ETH / USDC</span>
      </div>

      {/* Column headers */}
      <div className="grid grid-cols-3 border-t border-border bg-card px-4 py-2">
        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">Price</span>
        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground text-right">Size</span>
        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground text-right">Total</span>
      </div>

      {/* Asks (sells) — farthest from spread at top */}
      <div className="flex flex-col">
        {ASKS.map((row) => (
          <div key={row.price} className="relative grid grid-cols-3 px-4 py-1.5 transition-colors hover:bg-destructive/[0.04]">
            {/* Cumulative depth bar */}
            <div
              className="absolute inset-y-0 right-0 bg-destructive/[0.06]"
              style={{ width: `${row.cumulative}%` }}
            />
            {/* Per-level size bar */}
            <div
              className="absolute inset-y-0 right-0 bg-destructive/[0.08]"
              style={{ width: `${row.depth}%` }}
            />
            <span className="relative font-mono text-xs tabular-nums text-destructive">{row.price}</span>
            <span className="relative font-mono text-xs tabular-nums text-foreground text-right">{row.size}</span>
            <span className="relative font-mono text-xs tabular-nums text-muted-foreground text-right">{row.total}</span>
          </div>
        ))}
      </div>

      {/* Spread */}
      <div className="flex items-center justify-between border-y border-border bg-card px-4 py-2">
        <div className="flex items-center gap-2">
          <span className="font-mono text-sm font-medium tabular-nums text-foreground">1,827.30</span>
          <ArrowUpRight className="h-3 w-3 text-success" />
        </div>
        <span className="font-mono text-[10px] tabular-nums text-muted-foreground">Spread 0.40 (0.02%)</span>
      </div>

      {/* Bids (buys) — closest to spread at top */}
      <div className="flex flex-col">
        {BIDS.map((row) => (
          <div key={row.price} className="relative grid grid-cols-3 px-4 py-1.5 transition-colors hover:bg-success/[0.04]">
            {/* Cumulative depth bar */}
            <div
              className="absolute inset-y-0 right-0 bg-success/[0.06]"
              style={{ width: `${row.cumulative}%` }}
            />
            {/* Per-level size bar */}
            <div
              className="absolute inset-y-0 right-0 bg-success/[0.08]"
              style={{ width: `${row.depth}%` }}
            />
            <span className="relative font-mono text-xs tabular-nums text-success">{row.price}</span>
            <span className="relative font-mono text-xs tabular-nums text-foreground text-right">{row.size}</span>
            <span className="relative font-mono text-xs tabular-nums text-muted-foreground text-right">{row.total}</span>
          </div>
        ))}
      </div>

      {/* Depth chart */}
      <DepthChart />
    </div>
  )
}

// --- Token Balances ---
const BALANCES = [
  { symbol: "ETH", name: "Ethereum", balance: "2.4521", value: "$4,483.22", alloc: 14.5, change: "+2.14%", positive: true },
  { symbol: "USDC", name: "USD Coin", balance: "12,304.21", value: "$12,304.21", alloc: 39.9, change: "+0.01%", positive: true },
  { symbol: "WBTC", name: "Wrapped BTC", balance: "0.0842", value: "$3,638.77", alloc: 11.8, change: "-1.32%", positive: false },
  { symbol: "ARB", name: "Arbitrum", balance: "5,230.00", value: "$5,387.42", alloc: 17.5, change: "+8.21%", positive: true },
  { symbol: "LINK", name: "Chainlink", balance: "340.50", value: "$5,046.21", alloc: 16.3, change: "+5.67%", positive: true },
]

function TokenBalances() {
  const totalValue = "$30,859.83"
  const totalChange = "+2.83%"

  return (
    <div className="flex flex-col border border-border">
      {/* Header */}
      <div className="flex items-center justify-between bg-card px-4 py-3">
        <div className="flex items-center gap-2">
          <Wallet className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-medium text-foreground">Balances</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] tabular-nums text-success">{totalChange}</span>
          <span className="font-mono text-sm tabular-nums text-foreground">{totalValue}</span>
        </div>
      </div>

      {/* Column headers */}
      <div className="grid grid-cols-[auto_1fr_auto_auto_auto] items-center gap-4 border-t border-border bg-card px-4 py-2">
        <span className="w-8" />
        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">Asset</span>
        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground text-right w-20">Balance</span>
        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground text-right w-16">Alloc</span>
        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground text-right w-14">24h</span>
      </div>

      {/* Token rows */}
      <div className="flex flex-col divide-y divide-border/50">
        {BALANCES.map((token) => (
          <div key={token.symbol} className="grid grid-cols-[auto_1fr_auto_auto_auto] items-center gap-4 px-4 py-3 transition-colors hover:bg-card">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center bg-secondary">
              <span className="font-mono text-[10px] font-medium text-foreground">
                {token.symbol.slice(0, 2)}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-foreground">{token.symbol}</span>
              <span className="text-[10px] text-muted-foreground">{token.name}</span>
            </div>
            <div className="flex flex-col items-end w-20">
              <span className="font-mono text-xs tabular-nums text-foreground">{token.balance}</span>
              <span className="font-mono text-[10px] tabular-nums text-muted-foreground">{token.value}</span>
            </div>
            <div className="flex items-center gap-1.5 w-16 justify-end">
              <div className="h-1 flex-1 max-w-[40px] bg-secondary overflow-hidden">
                <div className="h-full bg-accent/60" style={{ width: `${token.alloc}%` }} />
              </div>
              <span className="font-mono text-[10px] tabular-nums text-muted-foreground">{token.alloc}%</span>
            </div>
            <span className={`font-mono text-[10px] tabular-nums w-14 text-right ${token.positive ? "text-success" : "text-destructive"}`}>
              {token.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

// --- Positions ---
const POSITIONS = [
  { pair: "ETH/USDC", side: "Long" as const, size: "2.50 ETH", notional: "$4,568.25", entry: "$1,780.20", mark: "$1,827.30", pnl: "+$117.75", pnlPercent: "+2.64%", positive: true, leverage: "5x", liqPrice: "$1,425.00", margin: "$913.65" },
  { pair: "BTC/USDC", side: "Short" as const, size: "0.15 BTC", notional: "$6,482.37", entry: "$44,120.00", mark: "$43,215.80", pnl: "+$135.63", pnlPercent: "+2.05%", positive: true, leverage: "10x", liqPrice: "$48,530.00", margin: "$648.24" },
  { pair: "ARB/USDC", side: "Long" as const, size: "3,200 ARB", notional: "$3,296.00", entry: "$1.12", mark: "$1.03", pnl: "-$288.00", pnlPercent: "-8.04%", positive: false, leverage: "3x", liqPrice: "$0.74", margin: "$1,098.67" },
  { pair: "SOL/USDC", side: "Long" as const, size: "45.0 SOL", notional: "$4,603.50", entry: "$98.50", mark: "$102.30", pnl: "+$171.00", pnlPercent: "+3.86%", positive: true, leverage: "2x", liqPrice: "$49.25", margin: "$2,301.75" },
]

function Positions() {
  const totalPnl = "+$136.38"
  const totalPnlPercent = "+2.72%"

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-foreground">Open Positions</span>
          <Badge>4 Active</Badge>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">Total PnL</span>
          <span className="font-mono text-xs tabular-nums text-success">{totalPnl}</span>
          <span className="font-mono text-[10px] tabular-nums text-success">{totalPnlPercent}</span>
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Pair</TableHead>
            <TableHead>Side</TableHead>
            <TableHead>Size</TableHead>
            <TableHead>Entry</TableHead>
            <TableHead>Mark</TableHead>
            <TableHead>Margin</TableHead>
            <TableHead>Liq. Price</TableHead>
            <TableHead className="text-right">PnL</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {POSITIONS.map((pos) => (
            <TableRow key={pos.pair}>
              <TableCell>
                <div className="flex items-center gap-2">
                  <div className={`h-5 w-0.5 ${pos.side === "Long" ? "bg-success" : "bg-destructive"}`} />
                  <span className="text-sm font-medium text-foreground">{pos.pair}</span>
                  <Badge variant="muted">{pos.leverage}</Badge>
                </div>
              </TableCell>
              <TableCell>
                <span className={`font-mono text-xs ${pos.side === "Long" ? "text-success" : "text-destructive"}`}>
                  {pos.side}
                </span>
              </TableCell>
              <TableCell>
                <div className="flex flex-col">
                  <span className="font-mono text-xs tabular-nums text-foreground">{pos.size}</span>
                  <span className="font-mono text-[10px] tabular-nums text-muted-foreground">{pos.notional}</span>
                </div>
              </TableCell>
              <TableCell className="font-mono text-xs tabular-nums">{pos.entry}</TableCell>
              <TableCell className="font-mono text-xs tabular-nums">{pos.mark}</TableCell>
              <TableCell className="font-mono text-xs tabular-nums text-muted-foreground">{pos.margin}</TableCell>
              <TableCell className="font-mono text-xs tabular-nums text-warning/80">{pos.liqPrice}</TableCell>
              <TableCell className="text-right">
                <div className="flex flex-col items-end">
                  <span className={`font-mono text-xs tabular-nums ${pos.positive ? "text-success" : "text-destructive"}`}>{pos.pnl}</span>
                  <span className={`font-mono text-[10px] tabular-nums ${pos.positive ? "text-success" : "text-destructive"}`}>{pos.pnlPercent}</span>
                </div>
              </TableCell>
              <TableCell>
                <Button variant="ghost" size="icon" className="h-7 w-7 text-muted-foreground hover:text-destructive">
                  <X className="h-3.5 w-3.5" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

// --- Perps Order Panel ---
const ORDER_TYPES = ["Market", "Limit", "Stop"] as const
type OrderType = (typeof ORDER_TYPES)[number]

function PerpsOrderPanel() {
  const [side, setSide] = useState<"long" | "short">("long")
  const [orderType, setOrderType] = useState<OrderType>("Limit")
  const [leverage, setLeverage] = useState(5)
  const [amount, setAmount] = useState("1.00")
  const [tpsl, setTpsl] = useState(false)
  const [reduceOnly, setReduceOnly] = useState(false)

  const isLong = side === "long"

  return (
    <div className="flex w-full max-w-[340px] flex-col border border-border">
      {/* Header */}
      <div className="flex items-center justify-between bg-card px-4 py-3">
        <span className="text-sm font-medium text-foreground">Perpetual</span>
        <div className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-1.5 bg-success animate-pulse" />
          <span className="font-mono text-[10px] text-muted-foreground">ETH-PERP</span>
        </div>
      </div>

      <div className="flex flex-col gap-4 p-4">
        {/* Long / Short toggle */}
        <div className="grid grid-cols-2 border border-border">
          <button
            type="button"
            onClick={() => setSide("long")}
            className={`flex items-center justify-center gap-1.5 py-2.5 font-mono text-[11px] uppercase tracking-[0.15em] transition-colors border-r border-border ${
              isLong
                ? "bg-success/10 text-success"
                : "bg-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            <ArrowUpRight className="h-3 w-3" />
            Long
          </button>
          <button
            type="button"
            onClick={() => setSide("short")}
            className={`flex items-center justify-center gap-1.5 py-2.5 font-mono text-[11px] uppercase tracking-[0.15em] transition-colors ${
              !isLong
                ? "bg-destructive/10 text-destructive"
                : "bg-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            <ArrowDownRight className="h-3 w-3" />
            Short
          </button>
        </div>

        {/* Order type selector */}
        <div className="grid grid-cols-3 border border-border">
          {ORDER_TYPES.map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setOrderType(type)}
              className={`relative py-1.5 text-center font-mono text-[10px] uppercase tracking-[0.15em] transition-colors ${
                type !== ORDER_TYPES[ORDER_TYPES.length - 1] ? "border-r border-border" : ""
              } ${
                orderType === type
                  ? "bg-secondary text-foreground"
                  : "bg-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {type}
              {orderType === type && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />
              )}
            </button>
          ))}
        </div>

        {/* Price input — shown for Limit and Stop */}
        {orderType !== "Market" && (
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                {orderType === "Stop" ? "Trigger Price" : "Price"}
              </span>
              <button type="button" className="font-mono text-[10px] text-accent transition-colors hover:text-accent/80">
                Last
              </button>
            </div>
            <div className="flex items-center border border-border bg-card">
              <Input
                defaultValue={orderType === "Stop" ? "1,800.00" : "1,827.30"}
                className="border-0 bg-transparent focus-visible:ring-0"
                placeholder="0.00"
              />
              <span className="shrink-0 border-l border-border px-3 py-2 font-mono text-[10px] text-muted-foreground">USDC</span>
            </div>
          </div>
        )}

        {/* Size input */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">Size</span>
            <span className="font-mono text-[10px] text-muted-foreground">Avail: 4,200.00 USDC</span>
          </div>
          <div className="flex items-center border border-border bg-card">
            <Input
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="border-0 bg-transparent focus-visible:ring-0"
              placeholder="0.00"
            />
            <span className="shrink-0 border-l border-border px-3 py-2 font-mono text-[10px] text-muted-foreground">ETH</span>
          </div>
        </div>

        {/* Size percentage buttons */}
        <div className="grid grid-cols-5 gap-0 border border-border">
          {["10%", "25%", "50%", "75%", "100%"].map((pct, i) => (
            <button
              key={pct}
              type="button"
              className={`py-1.5 font-mono text-[10px] text-muted-foreground transition-colors hover:bg-card hover:text-foreground ${
                i < 4 ? "border-r border-border" : ""
              }`}
            >
              {pct}
            </button>
          ))}
        </div>

        <Separator />

        {/* Leverage slider */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">Leverage</span>
            <div className="flex items-center border border-border px-2 py-0.5">
              <span className="font-mono text-xs tabular-nums text-foreground">{leverage}x</span>
            </div>
          </div>
          <Slider
            defaultValue={leverage}
            min={1}
            max={50}
            step={1}
            onValueChange={(value) => setLeverage(value as number)}
          />
          <div className="flex items-center justify-between">
            {[1, 5, 10, 25, 50].map((lev) => (
              <button
                key={lev}
                type="button"
                onClick={() => setLeverage(lev)}
                className={`font-mono text-[10px] tabular-nums transition-colors ${
                  leverage === lev ? "text-accent" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {lev}x
              </button>
            ))}
          </div>
        </div>

        <Separator />

        {/* Options row */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">TP / SL</span>
            <Switch checked={tpsl} onCheckedChange={setTpsl} />
          </div>
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">Reduce Only</span>
            <Switch checked={reduceOnly} onCheckedChange={setReduceOnly} />
          </div>
        </div>

        {tpsl && (
          <div className="flex items-center gap-2">
            <div className="flex flex-1 flex-col gap-1.5">
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-success">Take Profit</span>
              <div className="flex items-center border border-border bg-card">
                <Input
                  defaultValue="1,920.00"
                  className="border-0 bg-transparent focus-visible:ring-0"
                  placeholder="0.00"
                />
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-1.5">
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-destructive">Stop Loss</span>
              <div className="flex items-center border border-border bg-card">
                <Input
                  defaultValue="1,750.00"
                  className="border-0 bg-transparent focus-visible:ring-0"
                  placeholder="0.00"
                />
              </div>
            </div>
          </div>
        )}

        <Separator />

        {/* Order summary */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] text-muted-foreground">Collateral</span>
            <span className="font-mono text-[10px] tabular-nums text-foreground">$365.46</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] text-muted-foreground">Position Size</span>
            <span className="font-mono text-[10px] tabular-nums text-foreground">$1,827.30</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] text-muted-foreground">Est. Fee</span>
            <span className="font-mono text-[10px] tabular-nums text-foreground">~$1.10 (0.06%)</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] text-muted-foreground">Liq. Price</span>
            <span className="font-mono text-[10px] tabular-nums text-warning">$1,462.00</span>
          </div>
        </div>

        {/* Submit */}
        <Button
          className="w-full"
          variant={isLong ? "success" : "destructive"}
        >
          {orderType} {isLong ? "Long" : "Short"} ETH
        </Button>
      </div>
    </div>
  )
}

// --- Transaction Table ---
const TRANSACTIONS = [
  { hash: "0x1a2b...3c4d", type: "Swap", from: "1.0 ETH", to: "1,823.45 USDC", time: "2 min ago", status: "Confirmed", statusVariant: "success" as const },
  { hash: "0x5e6f...7g8h", type: "Add Liquidity", from: "500 USDC", to: "0.274 ETH", time: "15 min ago", status: "Confirmed", statusVariant: "success" as const },
  { hash: "0x9i0j...1k2l", type: "Swap", from: "0.5 ETH", to: "912.30 DAI", time: "1h ago", status: "Pending", statusVariant: "warning" as const },
  { hash: "0x3m4n...5o6p", type: "Remove Liquidity", from: "1,200 LP", to: "600 USDC + 0.33 ETH", time: "3h ago", status: "Failed", statusVariant: "destructive" as const },
  { hash: "0x7q8r...9s0t", type: "Swap", from: "2,500 USDC", to: "1.371 ETH", time: "5h ago", status: "Confirmed", statusVariant: "success" as const },
]

function TransactionTable() {
  const [copiedHash, setCopiedHash] = useState<string | null>(null)

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-foreground">Recent Transactions</span>
        <Button variant="link" size="sm" className="px-0 py-0 font-mono text-[10px] uppercase tracking-[0.15em]">
          View All
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Hash</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>From</TableHead>
            <TableHead>To</TableHead>
            <TableHead>Time</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {TRANSACTIONS.map((tx) => (
            <TableRow key={tx.hash} className="group">
              <TableCell>
                <button
                  type="button"
                  onClick={() => {
                    setCopiedHash(tx.hash)
                    setTimeout(() => setCopiedHash(null), 1500)
                  }}
                  className="flex items-center gap-1.5 font-mono text-xs text-accent transition-colors hover:text-accent/80"
                  aria-label={`Copy hash ${tx.hash}`}
                >
                  {tx.hash}
                  {copiedHash === tx.hash ? (
                    <Check className="h-3 w-3" />
                  ) : (
                    <Copy className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  )}
                </button>
              </TableCell>
              <TableCell className="font-mono text-xs">{tx.type}</TableCell>
              <TableCell className="font-mono text-xs text-muted-foreground">{tx.from}</TableCell>
              <TableCell className="font-mono text-xs text-muted-foreground">{tx.to}</TableCell>
              <TableCell className="font-mono text-[10px] text-muted-foreground">{tx.time}</TableCell>
              <TableCell className="text-right">
                <Badge variant={tx.statusVariant}>{tx.status}</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export function DefiSection() {
  return (
    <section
      id="defi"
      className="border-b border-border px-6 py-20 md:px-12 lg:px-20"
    >
      <div className="mb-16 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
            05
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            Examples
          </span>
        </div>
        <h2 className="font-pixel text-3xl tracking-tight text-foreground md:text-4xl">
          Examples
        </h2>
        <p className="max-w-lg text-sm leading-relaxed text-muted-foreground">
          Production-ready patterns for perpetuals trading, orderbooks,
          portfolio management, and transaction history.
        </p>
      </div>

      <div className="flex flex-col gap-16">
        {/* Row 1: Orderbook + Perps Order Panel */}
        <div className="flex flex-col gap-6 lg:flex-row">
          <Orderbook />
          <PerpsOrderPanel />
        </div>

        {/* Row 2: Token Balances */}
        <TokenBalances />

        {/* Row 3: Positions */}
        <Positions />

        {/* Row 4: Transactions */}
        <TransactionTable />
      </div>
    </section>
  )
}
