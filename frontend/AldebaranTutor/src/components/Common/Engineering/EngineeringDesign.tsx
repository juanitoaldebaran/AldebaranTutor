import type React from "react";

const EngineeringDesign: React.FC = () => {
    return (
        <div className="text-white space-y-8 mt-30 p-8">
            <div>
                <h1 className="text-4xl font-bold mb-4">Engineering Design</h1>
                <p className="text-gray-400 text-lg">Master the systematic approach to creating innovative solutions</p>
            </div>

            <section className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                    Engineering Design is the systematic, intelligent process of generating, evaluating, and specifying solutions to 
                    engineering problems. It combines creativity with technical knowledge to develop products, systems, and processes 
                    that meet specific needs while considering constraints like cost, safety, sustainability, and manufacturability.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-indigo-400">Why Learn Engineering Design?</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                    <li>Foundation for all engineering disciplines</li>
                    <li>Essential for innovation and product development</li>
                    <li>Develops problem-solving and critical thinking skills</li>
                    <li>Highly valued in industry for creating market-ready solutions</li>
                    <li>Bridges theory and practical application</li>
                    <li>Key to entrepreneurship and startup success</li>
                </ul>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-indigo-400">Core Topics</h2>
                
                <div className="space-y-6">
                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">1. Design Process & Methodology</h3>
                        <p className="text-gray-300 mb-2">
                            Systematic approach to problem-solving:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li><strong>Problem Definition:</strong> Identifying needs and requirements</li>
                            <li><strong>Research & Analysis:</strong> Background investigation and benchmarking</li>
                            <li><strong>Conceptual Design:</strong> Brainstorming and ideation</li>
                            <li><strong>Preliminary Design:</strong> Feasibility and concept selection</li>
                            <li><strong>Detailed Design:</strong> Specifications and documentation</li>
                            <li><strong>Testing & Validation:</strong> Prototyping and evaluation</li>
                            <li><strong>Implementation:</strong> Manufacturing and deployment</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">2. Requirements Engineering</h3>
                        <p className="text-gray-300 mb-2">
                            Defining what the solution must achieve:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li>Functional requirements: What the design must do</li>
                            <li>Non-functional requirements: Performance, reliability, usability</li>
                            <li>Constraints: Budget, time, regulations, materials</li>
                            <li>Stakeholder analysis and user needs assessment</li>
                            <li>Requirements prioritization (MoSCoW method)</li>
                            <li>Traceability matrix and change management</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">3. Concept Generation & Creativity</h3>
                        <p className="text-gray-300 mb-2">
                            Developing innovative solutions:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li>Brainstorming techniques and ideation sessions</li>
                            <li>SCAMPER method (Substitute, Combine, Adapt, Modify, etc.)</li>
                            <li>Morphological analysis and functional decomposition</li>
                            <li>Biomimicry and nature-inspired design</li>
                            <li>TRIZ (Theory of Inventive Problem Solving)</li>
                            <li>Mind mapping and concept sketching</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">4. Design Selection & Decision Making</h3>
                        <p className="text-gray-300 mb-2">
                            Choosing the best solution:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li>Pugh matrix for concept comparison</li>
                            <li>Weighted decision matrix with criteria scoring</li>
                            <li>Cost-benefit analysis and economic evaluation</li>
                            <li>Risk assessment for each alternative</li>
                            <li>Multi-criteria decision analysis (MCDA)</li>
                            <li>Design of Experiments (DOE) for optimization</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">5. Engineering Drawing & Documentation</h3>
                        <p className="text-gray-300 mb-2">
                            Communicating design intent:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li>Orthographic projections and isometric views</li>
                            <li>Section views and detail drawings</li>
                            <li>Dimensioning and tolerancing (GD&T)</li>
                            <li>Assembly drawings and bills of materials (BOM)</li>
                            <li>Technical specifications and design reports</li>
                            <li>Standards: ISO, ANSI, DIN drawing conventions</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">6. Materials Selection</h3>
                        <p className="text-gray-300 mb-2">
                            Choosing appropriate materials:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li>Material properties: mechanical, thermal, electrical</li>
                            <li>Metals, polymers, ceramics, composites comparison</li>
                            <li>Ashby charts for material selection</li>
                            <li>Cost vs performance trade-offs</li>
                            <li>Sustainability and environmental impact</li>
                            <li>Manufacturing process compatibility</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">7. Design for Manufacturing (DFM)</h3>
                        <p className="text-gray-300 mb-2">
                            Creating producible designs:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li>Manufacturing process selection (casting, machining, forming, etc.)</li>
                            <li>Minimizing part count and complexity</li>
                            <li>Standardization of components</li>
                            <li>Tolerance stack-up analysis</li>
                            <li>Assembly considerations and fixtures</li>
                            <li>Cost estimation and value engineering</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">8. Prototyping & Testing</h3>
                        <p className="text-gray-300 mb-2">
                            Validating design performance:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li>Rapid prototyping: 3D printing, CNC machining</li>
                            <li>Proof-of-concept vs functional prototypes</li>
                            <li>Test planning and experimental design</li>
                            <li>Data collection and statistical analysis</li>
                            <li>Failure analysis and root cause investigation</li>
                            <li>Iterative refinement based on testing</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">9. Safety & Risk Analysis</h3>
                        <p className="text-gray-300 mb-2">
                            Ensuring safe operation:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li>Hazard identification (HAZID, HAZOP)</li>
                            <li>Failure Mode and Effects Analysis (FMEA)</li>
                            <li>Fault Tree Analysis (FTA)</li>
                            <li>Safety factors and design margins</li>
                            <li>Regulatory compliance and standards (OSHA, ASME, IEEE)</li>
                            <li>Product liability and ethical considerations</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">10. Sustainability & Life Cycle</h3>
                        <p className="text-gray-300 mb-2">
                            Designing for environmental responsibility:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li>Life Cycle Assessment (LCA)</li>
                            <li>Cradle-to-cradle vs cradle-to-grave design</li>
                            <li>Energy efficiency and carbon footprint</li>
                            <li>Design for disassembly and recycling</li>
                            <li>Circular economy principles</li>
                            <li>Green materials and sustainable manufacturing</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">11. Project Management</h3>
                        <p className="text-gray-300 mb-2">
                            Managing design projects effectively:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li>Project planning and scheduling (Gantt charts, CPM)</li>
                            <li>Resource allocation and budgeting</li>
                            <li>Team collaboration and communication</li>
                            <li>Milestone tracking and progress reporting</li>
                            <li>Change management and version control</li>
                            <li>Agile vs Waterfall methodologies</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">12. Advanced Design Methods</h3>
                        <p className="text-gray-300 mb-2">
                            Modern approaches and tools:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li>Computer-Aided Engineering (CAE) and simulation</li>
                            <li>Finite Element Analysis (FEA) for stress analysis</li>
                            <li>Computational Fluid Dynamics (CFD)</li>
                            <li>Topology optimization for weight reduction</li>
                            <li>Digital twin and virtual prototyping</li>
                            <li>AI and generative design tools</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-indigo-400">Design Philosophies</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Design Thinking</h4>
                        <p className="text-gray-300 text-sm">Human-centered approach: empathize, define, ideate, prototype, test</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Lean Engineering</h4>
                        <p className="text-gray-300 text-sm">Minimize waste, maximize value, continuous improvement</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Systems Engineering</h4>
                        <p className="text-gray-300 text-sm">Holistic approach considering entire system lifecycle</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Six Sigma DMAIC</h4>
                        <p className="text-gray-300 text-sm">Define, Measure, Analyze, Improve, Control for quality</p>
                    </div>
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-indigo-400">Learning Path</h2>
                <ol className="list-decimal list-inside space-y-2 text-gray-300 ml-4">
                    <li>Master engineering fundamentals (mechanics, materials, thermodynamics)</li>
                    <li>Learn technical drawing and CAD software</li>
                    <li>Study design methodologies and problem-solving frameworks</li>
                    <li>Practice with real-world design projects and case studies</li>
                    <li>Learn materials science and manufacturing processes</li>
                    <li>Understand testing, validation, and quality control</li>
                    <li>Study successful and failed designs for lessons learned</li>
                    <li>Develop project management and teamwork skills</li>
                    <li>Stay updated with emerging technologies and trends</li>
                </ol>
            </section>
        </div>
    );
};

export default EngineeringDesign;