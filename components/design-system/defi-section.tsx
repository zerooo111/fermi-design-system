import { useState } from "react"
import { ArrowDownUp, ExternalLink, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table"

// --- Token Swap Card ---
function SwapCard() {
  const [fromAmount, setFromAmount] = useState("1.0")
  const [toAmount] = useState("1,823.45")

  return (
    <div className="flex flex-col border border-border divide-y divide-border">
      {/* Header */}
      <div className="flex items-center justify-between bg-card p-4">
        <span className="text-sm font-medium text-foreground">Swap</span>
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] text-muted-foreground">
            Slippage: 0.5%
          </span>
          <Button variant="link" size="sm" className="px-0 py-0 text-[10px]">
            Edit
          </Button>
        </div>
      </div>

      {/* From */}
      <div className="flex flex-col gap-3 bg-card p-4">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
            From
          </span>
          <span className="font-mono text-[10px] text-muted-foreground">
            Balance: 2.4521 ETH
          </span>
        </div>
        <div className="flex items-center gap-3">
          <Input
            value={fromAmount}
            onChange={(e) => setFromAmount(e.target.value)}
            className="flex-1 border-0 bg-transparent px-0 py-0 font-mono text-2xl font-light focus-visible:ring-0"
            placeholder="0.0"
            aria-label="From token amount"
          />
          <Button variant="outline" size="sm" className="gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-muted-foreground/20">
              <span className="text-[10px] font-medium text-foreground">E</span>
            </div>
            ETH
          </Button>
        </div>
        <div className="flex items-center gap-2">
          {["25%", "50%", "75%", "Max"].map((pct) => (
            <Button key={pct} variant="outline" size="sm" className="px-2 py-0.5 font-mono text-[10px]">
              {pct}
            </Button>
          ))}
        </div>
      </div>

      {/* Swap icon divider */}
      <div className="relative flex items-center justify-center bg-background py-1">
        <Button
          variant="outline"
          size="icon"
          className="absolute h-8 w-8"
          aria-label="Switch tokens"
        >
          <ArrowDownUp className="h-3.5 w-3.5" />
        </Button>
      </div>

      {/* To */}
      <div className="flex flex-col gap-3 bg-card p-4">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
            To
          </span>
          <span className="font-mono text-[10px] text-muted-foreground">
            Balance: 12,304.21 USDC
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="flex-1 font-mono text-2xl font-light text-foreground">
            {toAmount}
          </span>
          <Button variant="outline" size="sm" className="gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/20">
              <span className="text-[10px] font-medium text-accent">$</span>
            </div>
            USDC
          </Button>
        </div>
      </div>

      {/* Details */}
      <div className="flex flex-col gap-2 bg-card p-4">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] text-muted-foreground">Rate</span>
          <span className="font-mono text-[10px] text-foreground">1 ETH = 1,823.45 USDC</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] text-muted-foreground">Price Impact</span>
          <span className="font-mono text-[10px] text-success">{"< 0.01%"}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] text-muted-foreground">Network Fee</span>
          <span className="font-mono text-[10px] text-foreground">~$2.14</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] text-muted-foreground">Route</span>
          <span className="font-mono text-[10px] text-accent">ETH &rarr; WETH &rarr; USDC</span>
        </div>
      </div>

      {/* CTA */}
      <Button className="w-full p-4" variant="default">
        Review Swap
      </Button>
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
                    <Copy className="h-3 w-3 opacity-0 group-hover:opacity-100" />
                  )}
                </button>
              </TableCell>
              <TableCell>{tx.type}</TableCell>
              <TableCell className="font-mono text-muted-foreground">{tx.from}</TableCell>
              <TableCell className="font-mono text-muted-foreground">{tx.to}</TableCell>
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

// --- Token List ---
const TOKENS = [
  { symbol: "ETH", name: "Ethereum", price: "$1,823.45", change: "+2.14%", changeColor: "text-success", tvl: "$1.2B" },
  { symbol: "USDC", name: "USD Coin", price: "$1.00", change: "+0.01%", changeColor: "text-success", tvl: "$890M" },
  { symbol: "WBTC", name: "Wrapped Bitcoin", price: "$43,215.80", change: "-1.32%", changeColor: "text-destructive", tvl: "$650M" },
  { symbol: "DAI", name: "Dai Stablecoin", price: "$1.00", change: "+0.00%", changeColor: "text-muted-foreground", tvl: "$420M" },
  { symbol: "LINK", name: "Chainlink", price: "$14.82", change: "+5.67%", changeColor: "text-success", tvl: "$180M" },
  { symbol: "UNI", name: "Uniswap", price: "$6.23", change: "-0.45%", changeColor: "text-destructive", tvl: "$95M" },
]

function TokenList() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-foreground">Top Tokens</span>
        <div className="flex items-center gap-3">
          {["24h", "7d", "30d"].map((period) => (
            <Button
              key={period}
              variant="ghost"
              size="sm"
              className={`px-0 py-0 font-mono text-[10px] uppercase tracking-[0.1em] ${
                period === "24h" ? "text-foreground" : ""
              }`}
            >
              {period}
            </Button>
          ))}
        </div>
      </div>

      <div className="flex flex-col border border-border divide-y divide-border">
        {TOKENS.map((token) => (
          <button
            key={token.symbol}
            type="button"
            className="group flex w-full items-center gap-4 bg-background px-4 py-3 text-left transition-colors hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary">
              <span className="font-mono text-[10px] font-medium text-foreground">
                {token.symbol.slice(0, 2)}
              </span>
            </div>
            <div className="flex flex-1 flex-col">
              <span className="text-sm font-medium text-foreground">{token.symbol}</span>
              <span className="text-[10px] text-muted-foreground">{token.name}</span>
            </div>
            <div className="hidden flex-col items-end md:flex">
              <span className="font-mono text-[10px] text-muted-foreground">TVL</span>
              <span className="font-mono text-xs text-foreground">{token.tvl}</span>
            </div>
            <div className="flex flex-col items-end">
              <span className="font-mono text-sm tabular-nums text-foreground">{token.price}</span>
              <span className={`font-mono text-[10px] tabular-nums ${token.changeColor}`}>{token.change}</span>
            </div>
            <ExternalLink className="h-3.5 w-3.5 shrink-0 text-muted-foreground/30 transition-colors group-hover:text-muted-foreground" />
          </button>
        ))}
      </div>
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
            Application
          </span>
        </div>
        <h2 className="font-pixel text-3xl tracking-tight text-foreground md:text-4xl">
          DeFi Patterns
        </h2>
        <p className="max-w-lg text-sm leading-relaxed text-muted-foreground">
          Purpose-built components for decentralized exchanges, blockchain
          explorers, and token management. Every pattern is production-ready.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[400px_1fr]">
        <div>
          <SwapCard />
        </div>
        <div className="flex flex-col gap-12">
          <TokenList />
          <TransactionTable />
        </div>
      </div>
    </section>
  )
}
