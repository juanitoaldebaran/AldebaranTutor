import type React from "react";

const FinancialModelling: React.FC = () => {
    return (
        <div className="text-white space-y-8 mt-30 p-8">
            <div>
                <h1 className="text-4xl font-bold mb-4">Financial Modelling</h1>
                <p className="text-gray-400 text-lg">Build sophisticated models for valuation, forecasting, and decision-making</p>
            </div>

            <section className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                    Financial Modelling is the process of creating mathematical representations of a company's operations and financial performance. 
                    These models are essential tools in investment banking, private equity, corporate finance, and financial planning, helping 
                    professionals make informed decisions about investments, valuations, and strategic planning.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-indigo-400">Why Learn Financial Modelling?</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                    <li>Core skill for investment banking, private equity, and corporate finance roles</li>
                    <li>Essential for business valuation and M&A transactions</li>
                    <li>Enables data-driven financial decision making</li>
                    <li>Highly sought-after skill with premium salary compensation</li>
                    <li>Foundation for strategic planning and forecasting</li>
                    <li>Critical for startup funding and venture capital</li>
                </ul>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-indigo-400">Core Topics</h2>
                
                <div className="space-y-6">
                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">1. Financial Statement Analysis</h3>
                        <p className="text-gray-300 mb-2">
                            Foundation of all financial models:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li><strong>Income Statement:</strong> Revenue, COGS, operating expenses, EBITDA, net income</li>
                            <li><strong>Balance Sheet:</strong> Assets, liabilities, equity, working capital</li>
                            <li><strong>Cash Flow Statement:</strong> Operating, investing, financing cash flows</li>
                            <li>Understanding financial statement linkages</li>
                            <li>Common-size and trend analysis</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">2. Three-Statement Model</h3>
                        <p className="text-gray-300">
                            Integrated model connecting income statement, balance sheet, and cash flow statement. This is the foundation 
                            of financial modeling. Learn to build historical analysis, forecast future performance, ensure statements balance, 
                            and understand the circular references between statements (debt schedule, interest expense).
                        </p>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">3. Revenue Forecasting</h3>
                        <p className="text-gray-300 mb-2">
                            Projecting future sales and growth:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li>Top-down vs bottom-up approaches</li>
                            <li>Market sizing and market share analysis</li>
                            <li>Unit economics and pricing strategies</li>
                            <li>Seasonality and cyclicality considerations</li>
                            <li>Multiple revenue streams modeling</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">4. Operating Expense Forecasting</h3>
                        <p className="text-gray-300 mb-2">
                            Modeling costs and expenses:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li>Fixed vs variable costs analysis</li>
                            <li>COGS as percentage of revenue</li>
                            <li>Operating leverage and economies of scale</li>
                            <li>SG&A expenses: sales, marketing, G&A</li>
                            <li>Depreciation and amortization schedules</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">5. Working Capital Analysis</h3>
                        <p className="text-gray-300 mb-2">
                            Managing short-term assets and liabilities:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li>Days Sales Outstanding (DSO) - accounts receivable</li>
                            <li>Days Inventory Outstanding (DIO) - inventory management</li>
                            <li>Days Payable Outstanding (DPO) - accounts payable</li>
                            <li>Cash conversion cycle optimization</li>
                            <li>Working capital as % of revenue</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">6. DCF Valuation Model</h3>
                        <p className="text-gray-300 mb-2">
                            Discounted Cash Flow - the gold standard of valuation:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li>Free Cash Flow calculation (Unlevered and Levered FCF)</li>
                            <li>Weighted Average Cost of Capital (WACC)</li>
                            <li>Terminal value calculation (Perpetuity growth and Exit multiple)</li>
                            <li>Present value calculation and NPV</li>
                            <li>Sensitivity analysis and scenario modeling</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">7. Comparable Company Analysis</h3>
                        <p className="text-gray-300 mb-2">
                            Relative valuation using market multiples:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li>EV/EBITDA, EV/Revenue multiples</li>
                            <li>P/E ratio, P/B ratio, PEG ratio</li>
                            <li>Selecting appropriate peer companies</li>
                            <li>Adjustments for differences in companies</li>
                            <li>Trading comps vs transaction comps</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">8. LBO Model</h3>
                        <p className="text-gray-300 mb-2">
                            Leveraged Buyout analysis for private equity:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li>Transaction assumptions and purchase price</li>
                            <li>Sources and uses of funds</li>
                            <li>Debt schedule and mandatory paydowns</li>
                            <li>Returns analysis: IRR, MOIC (Multiple on Invested Capital)</li>
                            <li>Management rollover and equity waterfalls</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">9. M&A Model</h3>
                        <p className="text-gray-300 mb-2">
                            Merger and Acquisition analysis:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li>Accretion/Dilution analysis</li>
                            <li>Purchase price allocation and goodwill</li>
                            <li>Synergies identification and modeling</li>
                            <li>Pro forma financial statements</li>
                            <li>Deal structure: cash vs stock vs mixed</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">10. Budget and Forecast Models</h3>
                        <p className="text-gray-300">
                            Corporate planning and performance tracking. Building annual budgets, rolling forecasts, variance analysis 
                            (actual vs budget), department-level budgeting, and KPI dashboards. Essential for FP&A roles and business 
                            unit management.
                        </p>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">11. Scenario and Sensitivity Analysis</h3>
                        <p className="text-gray-300 mb-2">
                            Understanding model uncertainty:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li>Base case, best case, worst case scenarios</li>
                            <li>Data tables for one-way and two-way sensitivity</li>
                            <li>Tornado charts for key driver analysis</li>
                            <li>Monte Carlo simulation for probabilistic outcomes</li>
                            <li>Stress testing and break-even analysis</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">12. Model Best Practices</h3>
                        <p className="text-gray-300 mb-2">
                            Professional modeling standards:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li>Clear structure: assumptions, calculations, outputs</li>
                            <li>Color coding: blue for inputs, black for formulas, green for links</li>
                            <li>Formula consistency across rows</li>
                            <li>Error checking and validation</li>
                            <li>Documentation and executive summaries</li>
                            <li>Model flexibility and scalability</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-indigo-400">Common Model Types</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Project Finance Model</h4>
                        <p className="text-gray-300 text-sm">Infrastructure projects, real estate development, energy projects</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">SaaS Financial Model</h4>
                        <p className="text-gray-300 text-sm">MRR, ARR, CAC, LTV, churn rate, cohort analysis</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Startup Financial Model</h4>
                        <p className="text-gray-300 text-sm">Fundraising, runway analysis, burn rate, growth projections</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Real Estate Model</h4>
                        <p className="text-gray-300 text-sm">Property valuation, NOI, cap rates, cash-on-cash returns</p>
                    </div>
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-indigo-400">Learning Path</h2>
                <ol className="list-decimal list-inside space-y-2 text-gray-300 ml-4">
                    <li>Master Excel and financial statement fundamentals</li>
                    <li>Learn accounting principles and financial ratios</li>
                    <li>Build simple three-statement models</li>
                    <li>Practice with real company 10-K filings</li>
                    <li>Learn DCF valuation methodology</li>
                    <li>Study comparable company analysis</li>
                    <li>Progress to complex models: LBO, M&A</li>
                    <li>Develop industry-specific modeling skills</li>
                    <li>Study real investment banking pitch books and models</li>
                </ol>
            </section>
        </div>
    );
};

export default FinancialModelling;