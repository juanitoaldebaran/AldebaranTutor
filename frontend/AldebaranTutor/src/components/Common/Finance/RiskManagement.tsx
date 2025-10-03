import type React from "react";

const RiskManagement: React.FC = () => {
    return (
        <div className="text-white space-y-8 mt-30 p-8">
            <div>
                <h1 className="text-4xl font-bold mb-4">Risk Management</h1>
                <p className="text-gray-400 text-lg">Identify, assess, and mitigate financial risks effectively</p>
            </div>

            <section className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                    Risk Management is the systematic process of identifying, analyzing, and responding to risk factors throughout 
                    the life of an investment or business. In finance, effective risk management is crucial for protecting capital, 
                    ensuring regulatory compliance, and achieving sustainable returns. It encompasses market risk, credit risk, 
                    operational risk, and more.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-indigo-400">Why Learn Risk Management?</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                    <li>Critical for all financial institutions and investment firms</li>
                    <li>High demand for risk professionals, especially post-2008 financial crisis</li>
                    <li>Essential for regulatory compliance (Basel III, Dodd-Frank)</li>
                    <li>Protects organizations from catastrophic losses</li>
                    <li>Career opportunities in banking, insurance, consulting</li>
                    <li>Foundation for FRM (Financial Risk Manager) certification</li>
                </ul>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-indigo-400">Core Topics</h2>
                
                <div className="space-y-6">
                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">1. Types of Financial Risk</h3>
                        <p className="text-gray-300 mb-2">
                            Understanding the risk landscape:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li><strong>Market Risk:</strong> Price movements in stocks, bonds, currencies, commodities</li>
                            <li><strong>Credit Risk:</strong> Counterparty default, credit spread changes</li>
                            <li><strong>Liquidity Risk:</strong> Inability to trade at fair prices</li>
                            <li><strong>Operational Risk:</strong> System failures, fraud, human error</li>
                            <li><strong>Legal/Regulatory Risk:</strong> Compliance violations, lawsuits</li>
                            <li><strong>Reputational Risk:</strong> Brand damage affecting business</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">2. Market Risk Measurement</h3>
                        <p className="text-gray-300 mb-2">
                            Quantifying market exposure:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li><strong>Value at Risk (VaR):</strong> Historical, parametric, Monte Carlo methods</li>
                            <li><strong>Conditional VaR (CVaR/Expected Shortfall):</strong> Tail risk measure</li>
                            <li><strong>Greeks:</strong> Delta, gamma, vega, theta for options</li>
                            <li>Volatility measures: Historical, implied, GARCH models</li>
                            <li>Stress testing and scenario analysis</li>
                            <li>Beta, correlation, and portfolio risk decomposition</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">3. Credit Risk Analysis</h3>
                        <p className="text-gray-300 mb-2">
                            Assessing counterparty creditworthiness:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li>Credit scoring models and rating systems</li>
                            <li>Probability of Default (PD), Loss Given Default (LGD), Exposure at Default (EAD)</li>
                            <li>Expected Loss and Unexpected Loss</li>
                            <li>Credit derivatives: CDS, CLN, synthetic CDOs</li>
                            <li>Credit portfolio management and concentration limits</li>
                            <li>Merton model for structural credit risk</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">4. Liquidity Risk Management</h3>
                        <p className="text-gray-300 mb-2">
                            Ensuring adequate cash and funding:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li>Asset liquidity vs funding liquidity</li>
                            <li>Liquidity Coverage Ratio (LCR) and Net Stable Funding Ratio (NSFR)</li>
                            <li>Cash flow projections and contingency planning</li>
                            <li>Liquidity stress testing scenarios</li>
                            <li>Bid-ask spreads and market depth analysis</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">5. Derivatives and Hedging</h3>
                        <p className="text-gray-300 mb-2">
                            Using financial instruments to manage risk:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li><strong>Futures:</strong> Hedging commodity, currency, interest rate risk</li>
                            <li><strong>Options:</strong> Protective puts, covered calls, collars</li>
                            <li><strong>Swaps:</strong> Interest rate swaps, currency swaps, CDS</li>
                            <li><strong>Forwards:</strong> Customized OTC contracts</li>
                            <li>Hedge effectiveness testing and accounting (IFRS 9, ASC 815)</li>
                            <li>Dynamic vs static hedging strategies</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">6. Operational Risk</h3>
                        <p className="text-gray-300 mb-2">
                            Managing non-financial risks:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li>Basel II/III operational risk framework</li>
                            <li>Key Risk Indicators (KRIs) and control testing</li>
                            <li>Loss data collection and analysis</li>
                            <li>Business continuity and disaster recovery planning</li>
                            <li>Cybersecurity and technology risk</li>
                            <li>Third-party and vendor risk management</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">7. Risk Governance and Framework</h3>
                        <p className="text-gray-300 mb-2">
                            Organizational structure for risk management:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li>Three lines of defense model</li>
                            <li>Risk appetite and tolerance framework</li>
                            <li>Board oversight and risk committee responsibilities</li>
                            <li>Risk policies, procedures, and limits</li>
                            <li>Risk reporting and escalation processes</li>
                            <li>Risk culture and incentive alignment</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">8. Regulatory Capital Requirements</h3>
                        <p className="text-gray-300 mb-2">
                            Understanding capital adequacy rules:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li>Basel III framework: Pillar 1, 2, 3</li>
                            <li>Risk-Weighted Assets (RWA) calculation</li>
                            <li>Capital ratios: CET1, Tier 1, Total Capital</li>
                            <li>Leverage ratio and liquidity requirements</li>
                            <li>Stress testing (CCAR, DFAST in US)</li>
                            <li>IFRS 9 expected credit loss model</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">9. Enterprise Risk Management (ERM)</h3>
                        <p className="text-gray-300 mb-2">
                            Holistic approach to risk:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li>COSO ERM framework</li>
                            <li>Risk identification and assessment methodologies</li>
                            <li>Risk heat maps and risk registers</li>
                            <li>Strategic risk and business model risk</li>
                            <li>ESG (Environmental, Social, Governance) risks</li>
                            <li>Integrated risk management across silos</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">10. Model Risk Management</h3>
                        <p className="text-gray-300 mb-2">
                            Ensuring model accuracy and reliability:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li>Model development and validation processes</li>
                            <li>Model governance and inventory management</li>
                            <li>Backtesting and benchmarking</li>
                            <li>Model limitations and assumptions documentation</li>
                            <li>SR 11-7 guidance for model risk management</li>
                            <li>Machine learning model risk considerations</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">11. Insurance and Risk Transfer</h3>
                        <p className="text-gray-300 mb-2">
                            Alternative risk mitigation strategies:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li>Insurance types: D&O, E&O, cyber, property</li>
                            <li>Captive insurance structures</li>
                            <li>Reinsurance and risk pooling</li>
                            <li>Catastrophe bonds and ILS (Insurance-Linked Securities)</li>
                            <li>Self-insurance vs external insurance decision</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">12. Emerging Risks</h3>
                        <p className="text-gray-300 mb-2">
                            New challenges in risk management:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li>Climate change and physical/transition risks</li>
                            <li>Cryptocurrency and digital asset risks</li>
                            <li>AI and algorithmic trading risks</li>
                            <li>Pandemic and health crisis preparedness</li>
                            <li>Geopolitical and supply chain disruptions</li>
                            <li>Privacy and data protection (GDPR, CCPA)</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-indigo-400">Risk Management Tools</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">RiskMetrics & MSCI Barra</h4>
                        <p className="text-gray-300 text-sm">Portfolio risk analytics and factor models</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Bloomberg MARS</h4>
                        <p className="text-gray-300 text-sm">Multi-asset risk system for portfolio analysis</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">SAS Risk Management</h4>
                        <p className="text-gray-300 text-sm">Enterprise risk analytics and reporting</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Moody's Analytics</h4>
                        <p className="text-gray-300 text-sm">Credit risk modeling and stress testing</p>
                    </div>
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-indigo-400">Learning Path</h2>
                <ol className="list-decimal list-inside space-y-2 text-gray-300 ml-4">
                    <li>Build foundation in statistics, probability, and finance</li>
                    <li>Learn different risk types and measurement techniques</li>
                    <li>Master VaR, volatility, and portfolio risk metrics</li>
                    <li>Study regulatory frameworks (Basel, Dodd-Frank)</li>
                    <li>Understand derivatives and hedging strategies</li>
                    <li>Learn risk modeling in Excel and Python/R</li>
                    <li>Study real-world risk management failures (LTCM, 2008 crisis)</li>
                    <li>Consider FRM or PRM certification</li>
                    <li>Gain practical experience with risk systems</li>
                    <li>Stay updated on emerging risks and regulations</li>
                </ol>
            </section>
        </div>
    );
};

export default RiskManagement;