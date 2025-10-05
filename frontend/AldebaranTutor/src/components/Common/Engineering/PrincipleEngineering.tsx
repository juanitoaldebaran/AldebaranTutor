import type React from "react";

const PrincipleEngineering: React.FC = () => {
    return (
        <div className="text-white space-y-8 mt-30 p-8">
            <div>
                <h1 className="text-4xl font-bold mb-4">Engineering Principles</h1>
                <p className="text-gray-400 text-lg">Master the fundamental concepts that underpin all engineering disciplines</p>
            </div>

            <section className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                    Engineering Principles form the theoretical foundation for all engineering disciplines. These fundamental concepts 
                    from mathematics, physics, and chemistry enable engineers to analyze, design, and optimize systems. Understanding 
                    these principles is essential for solving complex problems and creating innovative solutions across mechanical, 
                    electrical, civil, and chemical engineering fields.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-indigo-400">Why Learn Engineering Principles?</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                    <li>Foundation for all engineering analysis and design</li>
                    <li>Essential for professional engineering licensure (PE exam)</li>
                    <li>Enables understanding of how systems and devices work</li>
                    <li>Critical for troubleshooting and problem-solving</li>
                    <li>Allows engineers to work across multiple disciplines</li>
                    <li>Required for graduate studies and research</li>
                </ul>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-indigo-400">Core Topics</h2>
                
                <div className="space-y-6">
                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">1. Statics & Dynamics</h3>
                        <p className="text-gray-300 mb-2">
                            Mechanics of rigid bodies:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li><strong>Statics:</strong> Force equilibrium, moments, free body diagrams</li>
                            <li><strong>Friction:</strong> Static and kinetic friction analysis</li>
                            <li><strong>Trusses:</strong> Method of joints and method of sections</li>
                            <li><strong>Kinematics:</strong> Position, velocity, acceleration (linear and angular)</li>
                            <li><strong>Dynamics:</strong> Newton's laws, momentum, impulse</li>
                            <li><strong>Work-Energy:</strong> Kinetic and potential energy, power</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">2. Strength of Materials</h3>
                        <p className="text-gray-300 mb-2">
                            Mechanics of deformable bodies:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li>Stress and strain: normal, shear, axial loading</li>
                            <li>Hooke's Law and elastic behavior</li>
                            <li>Bending stress in beams: bending moment diagrams</li>
                            <li>Shear and torsion in shafts</li>
                            <li>Deflection of beams and columns</li>
                            <li>Buckling and stability analysis</li>
                            <li>Failure theories: von Mises, Tresca, maximum stress</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">3. Thermodynamics</h3>
                        <p className="text-gray-300 mb-2">
                            Energy, heat, and work relationships:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li>First Law: Energy conservation, internal energy</li>
                            <li>Second Law: Entropy, irreversibility, efficiency limits</li>
                            <li>Thermodynamic properties: temperature, pressure, enthalpy</li>
                            <li>Ideal gas law and real gas behavior</li>
                            <li>Heat engines, refrigeration cycles, heat pumps</li>
                            <li>Carnot cycle and thermal efficiency</li>
                            <li>Phase changes and property tables</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">4. Fluid Mechanics</h3>
                        <p className="text-gray-300 mb-2">
                            Behavior of liquids and gases:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li>Fluid properties: density, viscosity, surface tension</li>
                            <li>Fluid statics: pressure, buoyancy, hydrostatic forces</li>
                            <li>Bernoulli's equation for fluid flow</li>
                            <li>Continuity equation and conservation of mass</li>
                            <li>Laminar vs turbulent flow, Reynolds number</li>
                            <li>Pipe flow and head loss (Darcy-Weisbach equation)</li>
                            <li>Open channel flow and hydraulics</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">5. Heat Transfer</h3>
                        <p className="text-gray-300 mb-2">
                            Thermal energy transport:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li><strong>Conduction:</strong> Fourier's law, thermal conductivity</li>
                            <li><strong>Convection:</strong> Natural and forced convection, heat transfer coefficient</li>
                            <li><strong>Radiation:</strong> Stefan-Boltzmann law, emissivity</li>
                            <li>Heat exchangers: parallel flow, counterflow, effectiveness-NTU</li>
                            <li>Transient heat conduction and lumped capacitance</li>
                            <li>Fins and extended surfaces</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">6. Electrical Circuits</h3>
                        <p className="text-gray-300 mb-2">
                            Fundamentals of electrical engineering:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li>Ohm's Law and Kirchhoff's laws (KVL, KCL)</li>
                            <li>Series and parallel circuits</li>
                            <li>Resistors, capacitors, inductors</li>
                            <li>AC circuits: phasors, impedance, power factor</li>
                            <li>Thevenin and Norton equivalent circuits</li>
                            <li>Transient analysis: RC, RL, RLC circuits</li>
                            <li>Three-phase power systems</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">7. Materials Science</h3>
                        <p className="text-gray-300 mb-2">
                            Understanding material properties and behavior:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li>Atomic structure and bonding (ionic, covalent, metallic)</li>
                            <li>Crystal structures and defects</li>
                            <li>Mechanical properties: yield strength, ultimate strength, ductility</li>
                            <li>Stress-strain curves and material testing</li>
                            <li>Phase diagrams and phase transformations</li>
                            <li>Heat treatment and material processing</li>
                            <li>Corrosion and degradation mechanisms</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">8. Chemistry for Engineers</h3>
                        <p className="text-gray-300 mb-2">
                            Chemical principles in engineering:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li>Stoichiometry and chemical reactions</li>
                            <li>Thermochemistry: enthalpy, heat of reaction</li>
                            <li>Chemical equilibrium and Le Chatelier's principle</li>
                            <li>Acids, bases, and pH</li>
                            <li>Electrochemistry and batteries</li>
                            <li>Organic chemistry basics for materials</li>
                            <li>Environmental chemistry and sustainability</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">9. Engineering Mathematics</h3>
                        <p className="text-gray-300 mb-2">
                            Mathematical tools for analysis:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li><strong>Calculus:</strong> Derivatives, integrals, multivariable calculus</li>
                            <li><strong>Differential Equations:</strong> ODEs, PDEs for modeling</li>
                            <li><strong>Linear Algebra:</strong> Matrices, vectors, eigenvalues</li>
                            <li><strong>Statistics:</strong> Probability, distributions, hypothesis testing</li>
                            <li><strong>Numerical Methods:</strong> Root finding, interpolation, numerical integration</li>
                            <li>Fourier analysis and transforms</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">10. Control Systems</h3>
                        <p className="text-gray-300 mb-2">
                            Automatic control and feedback:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li>Open-loop vs closed-loop systems</li>
                            <li>Transfer functions and block diagrams</li>
                            <li>PID controllers: proportional, integral, derivative</li>
                            <li>Stability analysis: Routh-Hurwitz criterion</li>
                            <li>Frequency response: Bode plots, Nyquist plots</li>
                            <li>State-space representation</li>
                            <li>Root locus and pole placement</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">11. Engineering Economics</h3>
                        <p className="text-gray-300 mb-2">
                            Financial analysis for engineering decisions:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li>Time value of money: present value, future value</li>
                            <li>Cash flow analysis and discounting</li>
                            <li>Capital budgeting and project evaluation</li>
                            <li>Net Present Value (NPV) and Internal Rate of Return (IRR)</li>
                            <li>Depreciation methods</li>
                            <li>Break-even analysis</li>
                            <li>Life cycle costing</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">12. Systems Thinking</h3>
                        <p className="text-gray-300 mb-2">
                            Holistic approach to complex problems:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li>System components and interactions</li>
                            <li>Feedback loops and causality</li>
                            <li>Emergent behavior and complexity</li>
                            <li>System boundaries and interfaces</li>
                            <li>Optimization and trade-offs</li>
                            <li>Multidisciplinary integration</li>
                            <li>System reliability and redundancy</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-indigo-400">Engineering Disciplines</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Mechanical Engineering</h4>
                        <p className="text-gray-300 text-sm">Machines, energy systems, thermal applications, manufacturing</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Electrical Engineering</h4>
                        <p className="text-gray-300 text-sm">Circuits, power systems, electronics, telecommunications</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Civil Engineering</h4>
                        <p className="text-gray-300 text-sm">Structures, transportation, water resources, geotechnical</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Chemical Engineering</h4>
                        <p className="text-gray-300 text-sm">Process design, reactors, separation, materials synthesis</p>
                    </div>
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-indigo-400">Learning Path</h2>
                <ol className="list-decimal list-inside space-y-2 text-gray-300 ml-4">
                    <li>Build strong foundation in mathematics and physics</li>
                    <li>Master statics and dynamics before strength of materials</li>
                    <li>Study thermodynamics and fluid mechanics together</li>
                    <li>Practice problem-solving with diverse examples</li>
                    <li>Use visualization tools and simulations</li>
                    <li>Connect theory to real-world applications</li>
                    <li>Work on hands-on projects and experiments</li>
                    <li>Prepare for Fundamentals of Engineering (FE) exam</li>
                    <li>Continue learning throughout your career</li>
                </ol>
            </section>
        </div>
    );
};

export default PrincipleEngineering;