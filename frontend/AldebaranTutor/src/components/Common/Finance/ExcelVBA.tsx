import type React from "react";

const ExcelVBA: React.FC = () => {
    return (
        <div className="text-white space-y-8 mt-30 p-8">
            <div>
                <h1 className="text-4xl font-bold mb-4">Excel & VBA Programming</h1>
                <p className="text-gray-400 text-lg">Automate and supercharge your Excel workflows</p>
            </div>

            <section className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                    Excel with Visual Basic for Applications (VBA) is one of the most powerful tools in finance and business analytics. 
                    VBA allows you to automate repetitive tasks, create custom functions, build interactive dashboards, and develop 
                    sophisticated financial models that would be impossible with formulas alone.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-indigo-400">Why Learn Excel & VBA?</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                    <li>Most widely used tool in finance, accounting, and business analysis</li>
                    <li>Automate hours of manual work into seconds</li>
                    <li>Highly valued skill with immediate practical applications</li>
                    <li>Create custom solutions tailored to specific business needs</li>
                    <li>Foundation for understanding other programming concepts</li>
                    <li>Essential for financial modeling and data analysis roles</li>
                </ul>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-indigo-400">Core Topics</h2>
                
                <div className="space-y-6">
                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">1. Excel Fundamentals</h3>
                        <p className="text-gray-300 mb-2">
                            Master Excel before diving into VBA:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li>Cell referencing: relative, absolute, mixed ($A$1, $A1, A$1)</li>
                            <li>Essential functions: VLOOKUP, INDEX-MATCH, SUMIFS, COUNTIFS</li>
                            <li>Logical functions: IF, AND, OR, IFERROR</li>
                            <li>Text functions: CONCATENATE, LEFT, RIGHT, MID, TEXT</li>
                            <li>Date and time functions: DATE, TODAY, EDATE, EOMONTH</li>
                            <li>Named ranges and structured references (Tables)</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">2. Advanced Excel Features</h3>
                        <p className="text-gray-300 mb-2">
                            Power tools for data analysis:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li>PivotTables and PivotCharts for dynamic reporting</li>
                            <li>Conditional formatting for visual analysis</li>
                            <li>Data validation and dropdown lists</li>
                            <li>What-If Analysis: Goal Seek, Solver, Data Tables</li>
                            <li>Power Query for data transformation</li>
                            <li>Charts and visualizations</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">3. VBA Fundamentals</h3>
                        <p className="text-gray-300 mb-2">
                            Introduction to programming in Excel:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li>VBA Editor interface and development environment</li>
                            <li>Recording and editing macros</li>
                            <li>Variables and data types (Integer, String, Double, Boolean)</li>
                            <li>Operators: arithmetic, comparison, logical</li>
                            <li>Message boxes and input boxes</li>
                            <li>Comments and code structure</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">4. Control Structures in VBA</h3>
                        <p className="text-gray-300 mb-2">
                            Managing program flow:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li>If...Then...Else statements for conditional logic</li>
                            <li>Select Case for multiple conditions</li>
                            <li>For...Next loops for counted iterations</li>
                            <li>For Each...Next for collection iteration</li>
                            <li>Do While/Until loops for conditional iterations</li>
                            <li>Exit and GoTo statements</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">5. Working with Objects</h3>
                        <p className="text-gray-300 mb-2">
                            Excel Object Model hierarchy:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li>Workbooks and Worksheets objects</li>
                            <li>Range object: the most important Excel object</li>
                            <li>Cells, Rows, and Columns manipulation</li>
                            <li>Properties (Value, Formula, Font, etc.) and Methods (Select, Copy, Delete)</li>
                            <li>With...End With for efficient object manipulation</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">6. Functions and Procedures</h3>
                        <p className="text-gray-300 mb-2">
                            Creating reusable code:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li>Sub procedures (Macros) vs Functions</li>
                            <li>Creating User-Defined Functions (UDFs)</li>
                            <li>Parameters: ByVal vs ByRef</li>
                            <li>Public vs Private scope</li>
                            <li>Optional and ParamArray parameters</li>
                            <li>Calling procedures from worksheets</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">7. Arrays and Collections</h3>
                        <p className="text-gray-300">
                            Efficiently handling multiple values. Static and dynamic arrays, multi-dimensional arrays, 
                            Array functions (LBound, UBound, Split, Join). Collections for storing objects. Understanding 
                            when to use arrays vs ranges for performance optimization.
                        </p>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">8. Error Handling</h3>
                        <p className="text-gray-300 mb-2">
                            Making robust macros:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li>On Error GoTo for error trapping</li>
                            <li>On Error Resume Next for ignoring errors</li>
                            <li>Err object properties (Number, Description)</li>
                            <li>Error handling best practices</li>
                            <li>Debugging techniques: breakpoints, watch window, immediate window</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">9. User Forms and Controls</h3>
                        <p className="text-gray-300 mb-2">
                            Creating custom interfaces:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li>Designing UserForms with controls (TextBox, ComboBox, ListBox, etc.)</li>
                            <li>Event-driven programming (Click, Change, Initialize events)</li>
                            <li>Populating and retrieving data from forms</li>
                            <li>Form validation and data entry</li>
                            <li>Multi-page forms and dynamic controls</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">10. File Operations</h3>
                        <p className="text-gray-300 mb-2">
                            Working with external files:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li>Opening, saving, and closing workbooks programmatically</li>
                            <li>Reading and writing text files</li>
                            <li>CSV file import/export</li>
                            <li>FileSystemObject for file and folder manipulation</li>
                            <li>File dialogs: GetOpenFilename, GetSaveAsFilename</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">11. Advanced Techniques</h3>
                        <p className="text-gray-300 mb-2">
                            Professional VBA development:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li>Application events (Workbook_Open, Worksheet_Change)</li>
                            <li>Working with PivotTables via VBA</li>
                            <li>Creating and modifying charts programmatically</li>
                            <li>Regular expressions for pattern matching</li>
                            <li>API calls for Windows functionality</li>
                            <li>Class modules for object-oriented programming</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">12. Optimization & Best Practices</h3>
                        <p className="text-gray-300 mb-2">
                            Writing efficient, maintainable code:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li>Turning off screen updating and calculations</li>
                            <li>Using arrays instead of ranges for speed</li>
                            <li>Avoiding Select and Activate statements</li>
                            <li>Code organization and modular design</li>
                            <li>Documentation and commenting standards</li>
                            <li>Version control and backup strategies</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-indigo-400">Practical Applications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Custom Tools</h4>
                        <p className="text-gray-300 text-sm">Build calculators, validators, and business-specific applications</p>
                    </div>
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-indigo-400">Learning Path</h2>
                <ol className="list-decimal list-inside space-y-2 text-gray-300 ml-4">
                    <li>Master Excel formulas and functions thoroughly</li>
                    <li>Learn to record and modify simple macros</li>
                    <li>Understand VBA syntax and basic programming concepts</li>
                    <li>Practice with Range object manipulation</li>
                    <li>Build simple automation projects</li>
                    <li>Learn error handling and debugging</li>
                    <li>Create UserForms for better user experience</li>
                    <li>Develop complete applications for real-world problems</li>
                </ol>
            </section>
        </div>
    );
};

export default ExcelVBA;