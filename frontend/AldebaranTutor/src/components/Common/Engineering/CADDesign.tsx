import type React from "react";

const CADDesign: React.FC = () => {
    return (
        <div className="text-white space-y-8 mt-30 p-4">
            <div>
                <h1 className="text-4xl font-bold mb-4">CAD Design & Modeling</h1>
                <p className="text-gray-400 text-lg">Bringing digital concepts to life for manufacturing</p>
            </div>

            <section className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                    Computer-Aided Design (CAD) is the use of computer systems to assist in the creation, modification,
                    analysis, or optimization of a design. It's the foundational skill for **Mechanical Engineering**,
                    **Industrial Design**, **Architecture**, and **Product Development**.
                    It allows for high-precision digital prototyping before physical production.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-indigo-400">Why Master CAD?</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                    <li>Essential for all engineering disciplines, from aerospace to consumer electronics</li>
                    <li>Translates abstract ideas into measurable, manufacturable specifications</li>
                    <li>Enables rapid prototyping with technologies like 3D printing and CNC machining</li>
                    <li>Facilitates collaboration and revision control within large design teams</li>
                </ul>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-indigo-400">Core Concepts Covered</h2>

                <div className="space-y-6">
                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">1. Sketching & Constraints</h3>
                        <p className="text-gray-300">
                            The 2D foundation of all 3D models. Involves creating profiles, lines, arcs, and applying
                            geometric and dimensional constraints to ensure the sketch is fully defined and robust.
                        </p>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">2. Solid Modeling (Parametric Design)</h3>
                        <p className="text-gray-300">
                            Creating 3D objects using feature-based techniques like **Extrude**, **Revolve**, **Sweep**,
                            and Boolean operations. Parametric design allows dimensions to be easily changed, updating the model automatically.
                        </p>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">3. Surface Modeling</h3>
                        <p className="text-gray-300">
                            Creating complex, organic, or aerodynamic shapes that are difficult with solid modeling.
                            Focuses on defining boundary conditions and smooth transitions for aesthetics.
                        </p>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">4. Assemblies and Mates</h3>
                        <p className="text-gray-300">
                            Combining multiple individual part files into a functional system. **Mates** (or Constraints)
                            define the relative position and movement between components, simulating real-world interaction.
                        </p>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">5. Technical Drawings (2D Documentation)</h3>
                        <p className="text-gray-300">
                            Generating professional, dimensioned, and toleranced drawings from the 3D model.
                            This is the blueprint used by manufacturers, following standards like ASME or ISO.
                        </p>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">6. FEA/CFD Introduction</h3>
                        <p className="text-gray-300">
                            Briefly touching upon **Finite Element Analysis (FEA)** for stress and strain and
                            **Computational Fluid Dynamics (CFD)** for flow simulation directly within the CAD environment.
                        </p>
                    </div>
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-indigo-400">Recommended Tools</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                    <li>**SolidWorks:** Industry standard for mechanical design, known for robust parametric modeling.</li>
                    <li>**Fusion 360:** Cloud-based, combines CAD, CAM, and CAE; popular for hobbyists and startups.</li>
                    <li>**Onshape:** Fully cloud-native CAD platform, great for collaborative design.</li>
                    <li>**AutoCAD:** The classic tool, essential for 2D drafting and large-scale architectural projects.</li>
                </ul>
            </section>
        </div>
    );
};

export default CADDesign;