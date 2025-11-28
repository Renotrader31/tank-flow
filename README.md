# TANK Flow - Dark Pool & Institutional Activity Monitor

Real-time visualization of institutional order flow, dark pool activity, and market injections using Unusual Whales data.

## Features

- **Tank Strength Meter**: Visual gauge showing buy vs sell pressure ratio
- **Live Options Flow**: Real-time stream of large options trades with sentiment
- **Dark Pool Prints**: Recent dark pool transactions with bullish/bearish classification
- **2-Min Injection Log**: Rolling log of large "injections" (institutional-sized orders)
- **Filtering**: Filter by symbol, minimum premium, and flow type (sweeps, blocks, etc.)

## Setup

### 1. Clone or download this project

### 2. Deploy to Vercel
```bash
cd tank-flow
vercel
```

### 3. Set Environment Variable
In your Vercel dashboard:
1. Select your project
2. Go to **Settings** → **Environment Variables**
3. Add: `UW_API_KEY` = Your Unusual Whales API key
4. Redeploy

### 4. Access Your App
Your app will be at the URL Vercel provides (e.g., `https://tank-flow.vercel.app`)

## Local Development

1. Create a `.env` file:
```
UW_API_KEY=your_unusual_whales_api_key
```

2. Run locally:
```bash
vercel dev
```

## Usage

1. Optionally enter a specific ticker (leave blank for all)
2. Select minimum premium filter ($100K to $5M+)
3. Choose flow type (All, Dark Pool, Sweeps, Blocks)
4. Click **Scan Flow**

## Understanding the Data

### Tank Strength Meter
- **Buy/Sell Ratio**: Higher = more bullish flow
- **Green gauge** = Buy dominant
- **Red gauge** = Sell dominant
- **Net Flow**: Total buy premium minus sell premium

### Flow Table
- **Green highlight** = Large buy order ($1M+)
- **Red highlight** = Large sell order ($1M+)
- **Side**: BUY (bullish) or SELL (bearish) based on trade execution

### Dark Pool Prints
- Shows off-exchange institutional trades
- **Bullish**: Trade executed above midpoint
- **Bearish**: Trade executed below midpoint

### 2-Min Injection Log
- Large orders ($500K+) in the last 2 minutes
- Helps identify real-time institutional activity spikes

## Tech Stack

- Vanilla JavaScript
- Vercel Serverless Functions
- Unusual Whales API

## License

For personal trading use only.
