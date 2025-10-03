import type React from "react";

const InvestmentAnalysis: React.FC = () => {
    return (
        <div className="text-white space-y-8 mt-30 p-8">
            <div>
                <h1 className="text-4xl font-bold mb-4">Investment Analysis</h1>
                <p className="text-gray-400 text-lg">Evaluate opportunities and build winning investment strategies</p>
            </div>

            <section className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                    Investment Analysis is the systematic evaluation of investment opportunities to maximize returns while managing risk. 
                    It combines fundamental analysis, quantitative methods, and market understanding to make informed decisions about 
                    stocks, bonds, real estate, and other asset classes. This discipline is essential for portfolio managers, equity 
                    research analysts, and individual investors.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-indigo-400">Why Learn Investment Analysis?</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                    <li>Core skill for careers in asset management and equity research</li>
                    <li>Essential for personal wealth building and financial independence</li>
                    <li>High-earning potential in buy-side roles</li>
                    <li>Make informed decisions about portfolio allocation</li>
                    <li>Understand market dynamics and economic indicators</li>
                    <li>Foundation for becoming a CFA charterholder</li>
                </ul>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-indigo-400">Core Topics</h2>
                
                <div className="space-y-6">
                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">1. Fundamental Analysis</h3>
                        <p className="text-gray-300 mb-2">
                            Evaluating intrinsic value of securities:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li><strong>Qualitative Analysis:</strong> Business model, competitive advantage (moat), management quality</li>
                            <li><strong>Quantitative Analysis:</strong> Financial ratios, growth rates, margins</li>
                            <li>Industry and competitive analysis (Porter's Five Forces)</li>
                            <li>Economic moat: cost advantages, network effects, intangibles, switching costs</li>
                            <li>Reading 10-K, 10-Q filings and earnings transcripts</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">2. Financial Ratio Analysis</h3>
                        <p className="text-gray-300 mb-2">
                            Key metrics for evaluating companies:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li><strong>Profitability:</strong> ROE, ROA, ROIC, profit margins (gross, operating, net)</li>
                            <li><strong>Liquidity:</strong> Current ratio, quick ratio, cash ratio</li>
                            <li><strong>Leverage:</strong> Debt-to-equity, interest coverage, debt-to-EBITDA</li>
                            <li><strong>Efficiency:</strong> Asset turnover, inventory turnover, receivables turnover</li>
                            <li><strong>Valuation:</strong> P/E, P/B, P/S, EV/EBITDA, PEG ratio</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">3. Equity Valuation Methods</h3>
                        <p className="text-gray-300 mb-2">
                            Determining fair value of stocks:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li><strong>DCF Analysis:</strong> Forecasting cash flows and discounting to present value</li>
                            <li><strong>Dividend Discount Model:</strong> Gordon Growth Model for dividend-paying stocks</li>
                            <li><strong>Relative Valuation:</strong> Comparable company multiples</li>
                            <li><strong>Asset-Based Valuation:</strong> Net asset value, liquidation value</li>
                            <li>Sum-of-the-parts (SOTP) valuation for conglomerates</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">4. Fixed Income Analysis</h3>
                        <p className="text-gray-300 mb-2">
                            Evaluating bonds and debt securities:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li>Bond pricing: yield to maturity, coupon rate, par value</li>
                            <li>Duration and convexity for interest rate risk</li>
                            <li>Credit analysis and rating agencies (Moody's, S&P, Fitch)</li>
                            <li>Yield curve analysis and term structure</li>
                            <li>Corporate bonds, government bonds, municipal bonds</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">5. Portfolio Theory</h3>
                        <p className="text-gray-300 mb-2">
                            Modern Portfolio Theory and optimization:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li>Diversification and correlation benefits</li>
                            <li>Efficient frontier and optimal portfolios</li>
                            <li>Capital Asset Pricing Model (CAPM)</li>
                            <li>Beta, alpha, and systematic vs unsystematic risk</li>
                            <li>Sharpe ratio, Sortino ratio, information ratio</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">6. Risk Management</h3>
                        <p className="text-gray-300 mb-2">
                            Measuring and managing investment risk:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li>Value at Risk (VaR) and Conditional VaR</li>
                            <li>Standard deviation and volatility measures</li>
                            <li>Downside deviation and maximum drawdown</li>
                            <li>Hedging strategies using derivatives</li>
                            <li>Position sizing and portfolio rebalancing</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">7. Technical Analysis</h3>
                        <p className="text-gray-300 mb-2">
                            Chart patterns and market timing:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li>Support and resistance levels</li>
                            <li>Trend lines, channels, and chart patterns</li>
                            <li>Moving averages: SMA, EMA, MACD</li>
                            <li>Momentum indicators: RSI, Stochastic Oscillator</li>
                            <li>Volume analysis and breadth indicators</li>
                            <li>Candlestick patterns and price action</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">8. Economic Analysis</h3>
                        <p className="text-gray-300 mb-2">
                            Macro factors affecting investments:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li>GDP growth, unemployment, inflation indicators</li>
                            <li>Central bank policy and interest rate impacts</li>
                            <li>Business cycles and sector rotation</li>
                            <li>Currency exchange rates and global markets</li>
                            <li>Leading, lagging, and coincident indicators</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">9. Alternative Investments</h3>
                        <p className="text-gray-300 mb-2">
                            Beyond traditional stocks and bonds:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li><strong>Real Estate:</strong> REITs, direct property investment, cap rates</li>
                            <li><strong>Private Equity:</strong> Venture capital, buyouts, fund structures</li>
                            <li><strong>Hedge Funds:</strong> Long/short, market neutral, event-driven strategies</li>
                            <li><strong>Commodities:</strong> Gold, oil, agricultural products</li>
                            <li>Cryptocurrency and digital assets fundamentals</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">10. Quantitative Analysis</h3>
                        <p className="text-gray-300 mb-2">
                            Statistical methods for investing:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li>Regression analysis and factor models</li>
                            <li>Backtesting investment strategies</li>
                            <li>Monte Carlo simulation for forecasting</li>
                            <li>Machine learning in stock prediction</li>
                            <li>Algorithmic trading basics</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">11. Investment Strategies</h3>
                        <p className="text-gray-300 mb-2">
                            Different approaches to investing:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li><strong>Value Investing:</strong> Graham and Dodd, Buffett methodology</li>
                            <li><strong>Growth Investing:</strong> High growth companies, GARP (Growth at Reasonable Price)</li>
                            <li><strong>Income Investing:</strong> Dividend stocks, bonds, REITs</li>
                            <li><strong>Momentum Investing:</strong> Trending stocks and sectors</li>
                            <li><strong>Index Investing:</strong> Passive strategies, ETFs</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">12. Behavioral Finance</h3>
                        <p className="text-gray-300 mb-2">
                            Psychology of investing and common biases:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li>Overconfidence and confirmation bias</li>
                            <li>Loss aversion and prospect theory</li>
                            <li>Herd behavior and market bubbles</li>
                            <li>Anchoring and recency bias</li>
                            <li>Emotional discipline and investment process</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-indigo-400">Investment Research Tools</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Bloomberg Terminal</h4>
                        <p className="text-gray-300 text-sm">Professional-grade data, analytics, and news platform</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">FactSet & S&P Capital IQ</h4>
                        <p className="text-gray-300 text-sm">Financial data, analytics, and research tools</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Morningstar</h4>
                        <p className="text-gray-300 text-sm">Mutual fund and stock research, ratings</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Yahoo Finance & Seeking Alpha</h4>
                        <p className="text-gray-300 text-sm">Free resources for market data and analysis</p>
                    </div>
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-indigo-400">Learning Path</h2>
                <ol className="list-decimal list-inside space-y-2 text-gray-300 ml-4">
                    <li>Learn accounting and financial statement analysis</li>
                    <li>Master financial ratios and valuation techniques</li>
                    <li>Study macroeconomics and market dynamics</li>
                    <li>Practice analyzing real companies with annual reports</li>
                    <li>Build investment thesis and pitch stock ideas</li>
                    <li>Learn portfolio management and risk metrics</li>
                    <li>Study famous investors (Buffett, Lynch, Dalio)</li>
                    <li>Consider CFA program for professional credentials</li>
                    <li>Paper trade or use simulators before real money</li>
                    <li>Continuously read financial news and research reports</li>
                </ol>
            </section>
        </div>
    );
};

export default InvestmentAnalysis;