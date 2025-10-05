import type React from "react";

const CircuitAnalysis: React.FC = () => {
    return (
        <div className="text-white space-y-8 mt-30 p-4">
            <div>
                <h1 className="text-4xl font-bold mb-4">Circuit Analysis & Simulation</h1>
                <p className="text-gray-400 text-lg">The science of understanding electrical networks</p>
            </div>

            <section className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                    Circuit Analysis is the process of determining the voltage and current through all components in a circuit.
                    It's the core discipline of **Electrical and Electronics Engineering**, allowing designers to predict a circuit's
                    behavior and ensure it meets performance requirements before physical construction.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-indigo-400">Why Study Circuit Analysis?</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                    <li>Fundamental skill for designing any electronic device, from phones to power grids</li>
                    <li>Allows for systematic troubleshooting and optimization of existing circuits</li>
                    <li>Provides the mathematical foundation for understanding passive and active components</li>
                    <li>Enables the use of sophisticated simulation tools like SPICE</li>
                </ul>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-indigo-400">Core Topics Covered</h2>

                <div className="space-y-6">
                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">1. Ohm's Law and Passive Components</h3>
                        <p className="text-gray-300">
                            The relationship between voltage, current, and resistance ($V=IR$). Understanding the behavior of
                            **Resistors**, **Capacitors**, and **Inductors** in DC and transient conditions.
                        </p>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">2. Kirchhoff's Laws (KCL & KVL)</h3>
                        <p className="text-gray-300">
                            The bedrock of network analysis. **Kirchhoff's Current Law (KCL)** deals with charge conservation at a node,
                            and **Kirchhoff's Voltage Law (KVL)** deals with energy conservation around a closed loop.
                        </p>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">3. Nodal and Mesh Analysis</h3>
                        <p className="text-gray-300">
                            Systematic methods for solving complex circuits. Nodal analysis uses KCL to find node voltages,
                            while Mesh analysis uses KVL to find loop currents.
                        </p>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">4. Thevenin's and Norton's Theorems</h3>
                        <p className="text-gray-300">
                            Simplifying a complex linear circuit into an equivalent circuit with a single voltage source
                            and series resistor (Thevenin) or a current source and parallel resistor (Norton).
                        </p>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">5. Transient Analysis (RL and RC Circuits)</h3>
                        <p className="text-gray-300">
                            Analyzing the time-dependent response of circuits containing capacitors and inductors,
                            including concepts like time constant ($\tau$) and steady-state conditions.
                        </p>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">6. AC Circuit Analysis (Phasors)</h3>
                        <p className="text-gray-300">
                            Extending analysis to alternating current (AC) circuits using **phasors** and **impedance** ($Z$)
                            to handle frequency-dependent components.
                        </p>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">7. Introduction to Diodes and Transistors</h3>
                        <p className="text-gray-300">
                            Understanding the basic non-linear behavior of semiconductors, which act as switches or amplifiers,
                            bridging the gap between passive components and full electronic design.
                        </p>
                    </div>
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-indigo-400">Key Simulation Tools</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                    <li>**LTSpice:** A free, powerful, industry-standard SPICE simulator for analog circuits.</li>
                    <li>**CircuitLab/Fritzing:** Great for visual simulation and digital circuit prototyping.</li>
                    <li>**MATLAB/Simulink:** Excellent for complex system-level modeling and control theory integration.</li>
                </ul>
            </section>
        </div>
    );
};

export default CircuitAnalysis;