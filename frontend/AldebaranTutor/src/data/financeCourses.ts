import { TrendingUp, PieChart, DollarSign, Calculator } from 'lucide-react';

const financeCourses = [
  {
    id: 1,
    title: "Financial Accounting",
    icon: Calculator,
    color: "bg-blue-600",
    sections: [
      {
        name: "Introduction to Accounting",
        items: [
          "Accounting is the language of business, used to record and communicate financial information.",
          "The accounting equation: Assets = Liabilities + Equity forms the foundation.",
          "Financial statements include: Balance Sheet, Income Statement, Cash Flow Statement, Statement of Changes in Equity.",
          "GAAP (Generally Accepted Accounting Principles) and IFRS (International Financial Reporting Standards) are key frameworks.",
          "Purpose: Help stakeholders make informed economic decisions."
        ]
      },
      {
        name: "Core Accounting Concepts",
        items: [
          "Double-Entry Bookkeeping: Every transaction affects at least two accounts.",
          "Debits and Credits: Debits increase assets/expenses, Credits increase liabilities/equity/revenue.",
          "Accrual vs Cash Basis: Recognize revenue when earned vs when cash received.",
          "Chart of Accounts: Organized list of all accounts used by a company.",
          "Trial Balance: Ensures debits equal credits before preparing financial statements.",
          "Journal Entries: Record transactions chronologically in the general journal.",
          "T-Accounts: Visual representation of accounts showing debits and credits."
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Investment & Portfolio Management",
    icon: TrendingUp,
    color: "bg-green-600",
    sections: [
      {
        name: "Investment Fundamentals",
        items: [
          "Investments are assets purchased to generate income or appreciate in value.",
          "Risk and Return: Higher potential returns typically come with higher risk.",
          "Asset Classes: Stocks (equity), Bonds (fixed income), Real Estate, Commodities, Cash, Alternatives.",
          "Time Value of Money: Money available today is worth more than the same amount in the future.",
          "Compound Interest: Earning interest on interest over time.",
          "Investment Objectives: Growth, income, capital preservation, tax minimization."
        ]
      },
      {
        name: "Portfolio Management",
        items: [
          "Diversification: Spread investments across different assets to reduce risk exposure.",
          "Asset Allocation: Strategic distribution of investments across different asset classes.",
          "Modern Portfolio Theory: Optimize portfolio for maximum return at a given risk level.",
          "Efficient Frontier: Set of optimal portfolios offering highest return for defined risk.",
          "Rebalancing: Periodically adjust portfolio to maintain target allocation.",
          "Performance Metrics: Sharpe Ratio, Alpha, Beta, Standard Deviation, Treynor Ratio.",
          "Active vs Passive Management: Stock picking vs index tracking."
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Corporate Finance",
    icon: DollarSign,
    color: "bg-purple-600",
    sections: [
      {
        name: "Corporate Finance Basics",
        items: [
          "Corporate Finance deals with funding sources, capital structure, and investment decisions.",
          "Primary Goal: Maximize shareholder value through strategic financial planning.",
          "Key areas: Capital budgeting, capital structure, working capital management, dividend policy.",
          "Financial Managers: Make decisions on investments, financing, and dividends.",
          "Time horizon: Short-term (working capital) vs Long-term (capital structure) decisions."
        ]
      },
      {
        name: "Financial Analysis & Valuation",
        items: [
          "NPV (Net Present Value): Discount future cash flows to present value to evaluate investments.",
          "IRR (Internal Rate of Return): Rate that makes NPV equal to zero.",
          "WACC (Weighted Average Cost of Capital): Blended cost of debt and equity financing.",
          "Financial Ratios: Liquidity, Profitability, Leverage, Efficiency, Market Value ratios.",
          "Valuation Methods: DCF (Discounted Cash Flow), Comparable Companies Analysis, Precedent Transactions.",
          "Free Cash Flow: Cash generated after capital expenditures.",
          "Break-Even Analysis: Point where total revenue equals total costs."
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Risk Management",
    icon: PieChart,
    color: "bg-red-600",
    sections: [
      {
        name: "Risk Management Fundamentals",
        items: [
          "Risk management identifies, assesses, and mitigates financial risks.",
          "Types of Risk: Market risk, Credit risk, Operational risk, Liquidity risk, Reputational risk.",
          "Risk assessment: Evaluate probability and potential impact of risks.",
          "Risk appetite: Amount of risk an organization is willing to accept.",
          "Enterprise Risk Management (ERM): Holistic approach to managing all organizational risks."
        ]
      },
      {
        name: "Risk Mitigation Strategies",
        items: [
          "Hedging: Using derivatives (options, futures, swaps) to offset potential losses.",
          "Insurance: Transfer risk to third parties through insurance policies.",
          "Diversification: Reduce concentration risk by spreading investments.",
          "VaR (Value at Risk): Statistical measure of maximum potential loss over a time period.",
          "Stress Testing: Evaluate impact of extreme market scenarios on portfolio.",
          "Scenario Analysis: Assess outcomes under different economic conditions.",
          "Risk-Adjusted Return: Evaluate returns relative to risk taken (Sharpe Ratio, Sortino Ratio)."
        ]
      }
    ]
  }
];

// data/engineeringCourses.ts
import { Cog, Zap, Wrench, Cpu } from 'lucide-react';

export const engineeringCourses = [
  {
    id: 1,
    title: "Mechanical Engineering",
    icon: Cog,
    color: "bg-blue-600",
    sections: [
      {
        name: "Fundamentals",
        items: [
          "Mechanical Engineering applies physics and materials science to design mechanical systems.",
          "Core principles: Statics, Dynamics, Thermodynamics, Fluid Mechanics, Heat Transfer.",
          "Applications: Machinery, vehicles, HVAC systems, manufacturing, energy systems.",
          "Engineering Design Process: Define problem → Research → Ideate → Prototype → Test → Iterate.",
          "CAD Software: AutoCAD, SolidWorks, CATIA for 3D modeling and design."
        ]
      },
      {
        name: "Key Concepts",
        items: [
          "Statics: Study of forces in equilibrium, structural analysis, free body diagrams.",
          "Dynamics: Motion of objects under forces, kinematics (position, velocity, acceleration) and kinetics (forces).",
          "Thermodynamics: Energy transfer, heat engines, refrigeration cycles, laws of thermodynamics.",
          "Fluid Mechanics: Behavior of fluids at rest and in motion, Bernoulli's equation, Reynolds number.",
          "Materials Science: Properties, selection, and behavior of engineering materials (metals, polymers, ceramics).",
          "Machine Design: Design of mechanical components like gears, bearings, shafts, springs.",
          "Manufacturing: Casting, machining, welding, additive manufacturing (3D printing)."
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Electrical Engineering",
    icon: Zap,
    color: "bg-yellow-600",
    sections: [
      {
        name: "Electrical Fundamentals",
        items: [
          "Electrical Engineering deals with electricity, electronics, and electromagnetism.",
          "Fundamental laws: Ohm's Law (V=IR), Kirchhoff's Laws, Maxwell's Equations.",
          "Applications: Power systems, electronics, telecommunications, control systems, embedded systems.",
          "Voltage, Current, Resistance: Basic electrical quantities and their relationships.",
          "AC vs DC: Alternating Current (sinusoidal) vs Direct Current (constant)."
        ]
      },
      {
        name: "Core Topics",
        items: [
          "Circuit Analysis: DC and AC circuits, network theorems (Thevenin, Norton, Superposition).",
          "Semiconductors: Diodes, transistors (BJT, MOSFET), integrated circuits (ICs).",
          "Digital Logic: Boolean algebra, logic gates (AND, OR, NOT), flip-flops, counters.",
          "Microprocessors: CPU architecture, instruction sets, assembly programming, Arduino, Raspberry Pi.",
          "Signal Processing: Analog and digital signal analysis, Fourier Transform, filters.",
          "Power Systems: Generation, transmission, distribution of electrical power, transformers.",
          "Control Systems: Feedback systems, PID controllers, stability analysis, transfer functions."
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Civil Engineering",
    icon: Wrench,
    color: "bg-orange-600",
    sections: [
      {
        name: "Civil Engineering Overview",
        items: [
          "Civil Engineering designs and maintains infrastructure: buildings, roads, bridges, dams, airports.",
          "Sub-disciplines: Structural, Geotechnical, Transportation, Environmental, Water Resources, Construction.",
          "Focus: Sustainability, safety, public welfare, and environmental impact.",
          "Project lifecycle: Planning → Design → Construction → Maintenance.",
          "Codes and Standards: Building codes, safety regulations, environmental regulations."
        ]
      },
      {
        name: "Key Areas",
        items: [
          "Structural Engineering: Design of load-bearing structures, stress analysis, beam theory.",
          "Concrete and Steel Design: Reinforced concrete, prestressed concrete, steel structures.",
          "Geotechnical Engineering: Soil mechanics, foundation design (shallow, deep foundations).",
          "Transportation Engineering: Highway design, traffic engineering, pavement design.",
          "Hydraulics: Flow of water, pipe networks, open channel flow, pumps and turbines.",
          "Construction Management: Project planning, scheduling (CPM, PERT), cost estimation, site management.",
          "Surveying: Land measurement, topographic surveys, GPS, total stations."
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Computer Engineering",
    icon: Cpu,
    color: "bg-green-600",
    sections: [
      {
        name: "Computer Engineering Fundamentals",
        items: [
          "Computer Engineering combines electrical engineering and computer science.",
          "Focus: Hardware-software integration, embedded systems, computer architecture.",
          "Applications: Microprocessors, IoT devices, robotics, network systems, mobile devices.",
          "Spans from low-level hardware to high-level software systems.",
          "Career paths: Hardware design, embedded systems, firmware development, system architecture."
        ]
      },
      {
        name: "Core Concepts",
        items: [
          "Digital Design: Logic circuits, combinational and sequential circuits, FSMs (Finite State Machines).",
          "HDL Programming: VHDL and Verilog for hardware description and simulation.",
          "Computer Architecture: CPU design, instruction sets (RISC, CISC), pipelining, cache memory.",
          "Memory Hierarchy: Registers, Cache (L1, L2, L3), RAM, Storage (SSD, HDD).",
          "Embedded Systems: Microcontrollers (ARM, AVR, PIC), real-time operating systems (RTOS).",
          "VLSI Design: Very Large Scale Integration, chip design, semiconductor fabrication.",
          "Computer Networks: OSI model, TCP/IP, routing, switching, network security.",
          "Operating Systems: Process management, memory management, file systems, scheduling algorithms."
        ]
      }
    ]
  }
];

export default financeCourses;