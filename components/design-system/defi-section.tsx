import { useState } from "react"
import { ArrowDownUp, ExternalLink, Copy, Check } from "lucide-react"

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
          <button
            type="button"
            className="font-mono text-[10px] text-accent transition-colors hover:text-accent/80"
          >
            Edit
          </button>
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
          <input
            type="text"
            value={fromAmount}
            onChange={(e) => setFromAmount(e.target.value)}
            className="flex-1 bg-transparent font-mono text-2xl font-light text-foreground placeholder:text-muted-foreground/30 focus:outline-none"
            placeholder="0.0"
          />
          <button
            type="button"
            className="flex items-center gap-2 border border-border bg-secondary px-3 py-2"
          >
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-muted-foreground/20">
              <span className="text-[10px] font-medium text-foreground">
                E
              </span>
            </div>
            <span className="text-sm font-medium text-foreground">ETH</span>
          </button>
        </div>
        <div className="flex items-center gap-2">
          {["25%", "50%", "75%", "Max"].map((pct) => (
            <button
              key={pct}
              type="button"
              className="border border-border bg-transparent px-2 py-0.5 font-mono text-[10px] text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {pct}
            </button>
          ))}
        </div>
      </div>

      {/* Swap icon divider */}
      <div className="relative flex items-center justify-center bg-background py-1">
        <button
          type="button"
          className="absolute flex h-8 w-8 items-center justify-center border border-border bg-card text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          aria-label="Switch tokens"
        >
          <ArrowDownUp className="h-3.5 w-3.5" />
        </button>
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
          <button
            type="button"
            className="flex items-center gap-2 border border-border bg-secondary px-3 py-2"
          >
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/20">
              <span className="text-[10px] font-medium text-accent">$</span>
            </div>
            <span className="text-sm font-medium text-foreground">USDC</span>
          </button>
        </div>
      </div>

      {/* Details */}
      <div className="flex flex-col gap-2 bg-card p-4">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] text-muted-foreground">
            Rate
          </span>
          <span className="font-mono text-[10px] text-foreground">
            1 ETH = 1,823.45 USDC
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] text-muted-foreground">
            Price Impact
          </span>
          <span className="font-mono text-[10px] text-success">
            {"< 0.01%"}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] text-muted-foreground">
            Network Fee
          </span>
          <span className="font-mono text-[10px] text-foreground">~$2.14</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] text-muted-foreground">
            Route
          </span>
          <span className="font-mono text-[10px] text-accent">
            ETH &rarr; WETH &rarr; USDC
          </span>
        </div>
      </div>

      {/* CTA */}
      <button
        type="button"
        className="bg-foreground p-4 text-center text-sm font-medium text-background transition-opacity hover:opacity-90"
      >
        Review Swap
      </button>
    </div>
  )
}

// --- Transaction Table ---
const TRANSACTIONS = [
  {
    hash: "0x1a2b...3c4d",
    type: "Swap",
    from: "1.0 ETH",
    to: "1,823.45 USDC",
    time: "2 min ago",
    status: "Confirmed",
    statusColor: "text-success",
  },
  {
    hash: "0x5e6f...7g8h",
    type: "Add Liquidity",
    from: "500 USDC",
    to: "0.274 ETH",
    time: "15 min ago",
    status: "Confirmed",
    statusColor: "text-success",
  },
  {
    hash: "0x9i0j...1k2l",
    type: "Swap",
    from: "0.5 ETH",
    to: "912.30 DAI",
    time: "1h ago",
    status: "Pending",
    statusColor: "text-accent",
  },
  {
    hash: "0x3m4n...5o6p",
    type: "Remove Liquidity",
    from: "1,200 LP",
    to: "600 USDC + 0.33 ETH",
    time: "3h ago",
    status: "Failed",
    statusColor: "text-destructive",
  },
  {
    hash: "0x7q8r...9s0t",
    type: "Swap",
    from: "2,500 USDC",
    to: "1.371 ETH",
    time: "5h ago",
    status: "Confirmed",
    statusColor: "text-success",
  },
]

function TransactionTable() {
  const [copiedHash, setCopiedHash] = useState<string | null>(null)

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-foreground">
          Recent Transactions
        </span>
        <button
          type="button"
          className="font-mono text-[10px] uppercase tracking-[0.15em] text-accent transition-colors hover:text-accent/80"
        >
          View All
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="pb-3 pr-6 text-left font-mono text-[10px] font-normal uppercase tracking-[0.15em] text-muted-foreground">
                Hash
              </th>
              <th className="pb-3 pr-6 text-left font-mono text-[10px] font-normal uppercase tracking-[0.15em] text-muted-foreground">
                Type
              </th>
              <th className="pb-3 pr-6 text-left font-mono text-[10px] font-normal uppercase tracking-[0.15em] text-muted-foreground">
                From
              </th>
              <th className="pb-3 pr-6 text-left font-mono text-[10px] font-normal uppercase tracking-[0.15em] text-muted-foreground">
                To
              </th>
              <th className="pb-3 pr-6 text-left font-mono text-[10px] font-normal uppercase tracking-[0.15em] text-muted-foreground">
                Time
              </th>
              <th className="pb-3 text-right font-mono text-[10px] font-normal uppercase tracking-[0.15em] text-muted-foreground">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {TRANSACTIONS.map((tx) => (
              <tr
                key={tx.hash}
                className="group border-b border-border/50 transition-colors hover:bg-card"
              >
                <td className="py-3 pr-6">
                  <button
                    type="button"
                    onClick={() => {
                      setCopiedHash(tx.hash)
                      setTimeout(() => setCopiedHash(null), 1500)
                    }}
                    className="flex items-center gap-1.5 font-mono text-xs text-accent transition-colors hover:text-accent/80"
                  >
                    {tx.hash}
                    {copiedHash === tx.hash ? (
                      <Check className="h-3 w-3" />
                    ) : (
                      <Copy className="h-3 w-3 opacity-0 group-hover:opacity-100" />
                    )}
                  </button>
                </td>
                <td className="py-3 pr-6 text-xs text-foreground">
                  {tx.type}
                </td>
                <td className="py-3 pr-6 font-mono text-xs text-muted-foreground">
                  {tx.from}
                </td>
                <td className="py-3 pr-6 font-mono text-xs text-muted-foreground">
                  {tx.to}
                </td>
                <td className="py-3 pr-6 font-mono text-[10px] text-muted-foreground">
                  {tx.time}
                </td>
                <td
                  className={`py-3 text-right font-mono text-[10px] ${tx.statusColor}`}
                >
                  {tx.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// --- Token List ---
const TOKENS = [
  {
    symbol: "ETH",
    name: "Ethereum",
    price: "$1,823.45",
    change: "+2.14%",
    changeColor: "text-success",
    tvl: "$1.2B",
  },
  {
    symbol: "USDC",
    name: "USD Coin",
    price: "$1.00",
    change: "+0.01%",
    changeColor: "text-success",
    tvl: "$890M",
  },
  {
    symbol: "WBTC",
    name: "Wrapped Bitcoin",
    price: "$43,215.80",
    change: "-1.32%",
    changeColor: "text-destructive",
    tvl: "$650M",
  },
  {
    symbol: "DAI",
    name: "Dai Stablecoin",
    price: "$1.00",
    change: "+0.00%",
    changeColor: "text-muted-foreground",
    tvl: "$420M",
  },
  {
    symbol: "LINK",
    name: "Chainlink",
    price: "$14.82",
    change: "+5.67%",
    changeColor: "text-success",
    tvl: "$180M",
  },
  {
    symbol: "UNI",
    name: "Uniswap",
    price: "$6.23",
    change: "-0.45%",
    changeColor: "text-destructive",
    tvl: "$95M",
  },
]

function TokenList() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-foreground">Top Tokens</span>
        <div className="flex items-center gap-3">
          {["24h", "7d", "30d"].map((period) => (
            <button
              key={period}
              type="button"
              className={`font-mono text-[10px] uppercase tracking-[0.1em] transition-colors ${
                period === "24h"
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {period}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col border border-border divide-y divide-border">
        {TOKENS.map((token) => (
          <div
            key={token.symbol}
            className="group flex items-center gap-4 bg-background px-4 py-3 transition-colors hover:bg-card"
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary">
              <span className="font-mono text-[10px] font-medium text-foreground">
                {token.symbol.slice(0, 2)}
              </span>
            </div>
            <div className="flex flex-1 flex-col">
              <span className="text-sm font-medium text-foreground">
                {token.symbol}
              </span>
              <span className="text-[10px] text-muted-foreground">
                {token.name}
              </span>
            </div>
            <div className="hidden flex-col items-end md:flex">
              <span className="font-mono text-[10px] text-muted-foreground">
                TVL
              </span>
              <span className="font-mono text-xs text-foreground">
                {token.tvl}
              </span>
            </div>
            <div className="flex flex-col items-end">
              <span className="font-mono text-sm tabular-nums text-foreground">
                {token.price}
              </span>
              <span
                className={`font-mono text-[10px] tabular-nums ${token.changeColor}`}
              >
                {token.change}
              </span>
            </div>
            <ExternalLink className="h-3.5 w-3.5 shrink-0 text-muted-foreground/30 transition-colors group-hover:text-muted-foreground" />
          </div>
        ))}
      </div>
    </div>
  )
}

// --- Blockchain Explorer Snippet ---
function BlockExplorer() {
  return (
    <div className="flex flex-col gap-4">
      <span className="text-sm font-medium text-foreground">
        Block Explorer
      </span>
      <div className="flex flex-col border border-border divide-y divide-border">
        <div className="grid grid-cols-2 gap-3 p-3 md:grid-cols-4">
          {[
            { label: "Block Height", value: "18,942,103" },
            { label: "Gas Price", value: "32 Gwei" },
            { label: "Avg Block Time", value: "12.1s" },
            { label: "TPS", value: "14.2" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col gap-1 border border-border bg-card p-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                {item.label}
              </span>
              <span className="font-mono text-base tabular-nums text-foreground">
                {item.value}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-col bg-background">
          {[
            {
              block: "#18942103",
              txns: "142",
              miner: "0xab12...cd34",
              reward: "2.014 ETH",
              time: "12s ago",
            },
            {
              block: "#18942102",
              txns: "89",
              miner: "0xef56...gh78",
              reward: "2.008 ETH",
              time: "24s ago",
            },
            {
              block: "#18942101",
              txns: "203",
              miner: "0xij90...kl12",
              reward: "2.023 ETH",
              time: "36s ago",
            },
          ].map((block) => (
            <div
              key={block.block}
              className="flex items-center gap-6 border-b border-border/50 px-4 py-3 transition-colors hover:bg-card"
            >
              <span className="font-mono text-xs text-accent">
                {block.block}
              </span>
              <span className="font-mono text-[10px] text-muted-foreground">
                {block.txns} txns
              </span>
              <span className="hidden font-mono text-[10px] text-muted-foreground md:block">
                {block.miner}
              </span>
              <span className="ml-auto font-mono text-xs tabular-nums text-foreground">
                {block.reward}
              </span>
              <span className="font-mono text-[10px] text-muted-foreground">
                {block.time}
              </span>
            </div>
          ))}
        </div>
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
        {/* Left column: Swap card */}
        <div>
          <SwapCard />
        </div>

        {/* Right column: Table + tokens */}
        <div className="flex flex-col gap-12">
          <TokenList />
          <TransactionTable />
        </div>
      </div>

      {/* Block Explorer */}
      <div className="mt-12">
        <BlockExplorer />
      </div>
    </section>
  )
}
