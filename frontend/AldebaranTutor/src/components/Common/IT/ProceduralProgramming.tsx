import type React from "react";

const ProceduralProgramming: React.FC = () => {
    return (
        <div className="text-white space-y-8 mt-30 p-8">
            <div>
                <h1 className="text-4xl font-bold mb-4">Procedural Programming</h1>
                <p className="text-gray-400 text-lg">Master the fundamentals of programming with procedural paradigm</p>
            </div>

            <section className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                    Procedural Programming is one of the oldest and most fundamental programming paradigms. It organizes code 
                    into procedures (functions) that operate on data. This approach emphasizes a linear, step-by-step execution 
                    flow and forms the foundation for understanding more complex programming concepts.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-indigo-400">Why Learn Procedural Programming?</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                    <li>Foundation for all programming paradigms (OOP, Functional, etc.)</li>
                    <li>Simple and intuitive for beginners to understand program flow</li>
                    <li>Still widely used in system programming, embedded systems, and scripts</li>
                    <li>Efficient for problems that follow sequential logic</li>
                    <li>Easier debugging with straightforward execution path</li>
                </ul>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-indigo-400">Core Concepts</h2>
                
                <div className="space-y-6">
                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">1. Variables & Data Types</h3>
                        <p className="text-gray-300 mb-2">
                            Understanding how to store and manipulate data:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li><strong>Primitive Types:</strong> integers, floats, characters, booleans</li>
                            <li><strong>Derived Types:</strong> arrays, strings, pointers</li>
                            <li>Variable scope: local vs global variables</li>
                            <li>Constants and type conversion</li>
                            <li>Memory management basics</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">2. Operators & Expressions</h3>
                        <p className="text-gray-300 mb-2">
                            Building blocks for computations:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li>Arithmetic operators: +, -, *, /, %, ++, --</li>
                            <li>Relational operators: ==, !=, &lt;, &gt;, &lt;=, &gt;=</li>
                            <li>Logical operators: &&, ||, !</li>
                            <li>Bitwise operators: &, |, ^, ~, &lt;&lt;, &gt;&gt;</li>
                            <li>Assignment and ternary operators</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">3. Control Structures</h3>
                        <p className="text-gray-300 mb-2">
                            Managing program flow:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li><strong>Conditional Statements:</strong> if, else-if, else, switch-case</li>
                            <li><strong>Loops:</strong> for, while, do-while</li>
                            <li><strong>Jump Statements:</strong> break, continue, return, goto</li>
                            <li>Nested control structures</li>
                            <li>Loop optimization techniques</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">4. Functions/Procedures</h3>
                        <p className="text-gray-300 mb-2">
                            Core of procedural programming - reusable code blocks:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li>Function declaration, definition, and calling</li>
                            <li>Parameters: pass by value vs pass by reference</li>
                            <li>Return values and void functions</li>
                            <li>Function overloading (in C++)</li>
                            <li>Recursion: direct and indirect</li>
                            <li>Scope and lifetime of variables</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">5. Arrays</h3>
                        <p className="text-gray-300 mb-2">
                            Collection of elements of same type:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li>One-dimensional and multi-dimensional arrays</li>
                            <li>Array initialization and traversal</li>
                            <li>Passing arrays to functions</li>
                            <li>Common array operations: searching, sorting</li>
                            <li>Array manipulation techniques</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">6. Strings</h3>
                        <p className="text-gray-300">
                            Working with text data as character arrays. String operations include concatenation, comparison, 
                            length calculation, substring extraction, and character manipulation. Understanding null-terminated 
                            strings in C and string libraries in different languages.
                        </p>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">7. Pointers (C/C++)</h3>
                        <p className="text-gray-300 mb-2">
                            Powerful feature for memory manipulation:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li>Pointer basics: declaration, initialization, dereferencing</li>
                            <li>Pointer arithmetic and array relationship</li>
                            <li>Pointers to functions</li>
                            <li>Dynamic memory allocation: malloc, calloc, free</li>
                            <li>Double pointers and pointer arrays</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">8. Structures (C/C++)</h3>
                        <p className="text-gray-300">
                            User-defined data types grouping related variables. Structures allow creating complex data models 
                            by combining different data types. Topics include structure declaration, accessing members, 
                            nested structures, arrays of structures, and passing structures to functions.
                        </p>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">9. File Handling</h3>
                        <p className="text-gray-300 mb-2">
                            Reading from and writing to files:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li>File operations: open, read, write, close</li>
                            <li>Text files vs binary files</li>
                            <li>File pointers and seeking</li>
                            <li>Error handling in file operations</li>
                            <li>Buffered vs unbuffered I/O</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">10. Modular Programming</h3>
                        <p className="text-gray-300 mb-2">
                            Organizing code into modules:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li>Header files and implementation files</li>
                            <li>Include guards and #pragma once</li>
                            <li>Static functions and variables</li>
                            <li>Compilation process: preprocessing, compilation, linking</li>
                            <li>Creating and using libraries</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">11. Error Handling</h3>
                        <p className="text-gray-300">
                            Managing runtime errors and exceptional conditions. Techniques include return codes, errno in C, 
                            defensive programming, input validation, and proper error messages. Understanding the importance 
                            of graceful degradation and fail-safe mechanisms.
                        </p>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">12. Debugging & Testing</h3>
                        <p className="text-gray-300 mb-2">
                            Ensuring code correctness:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li>Using debuggers (GDB, Visual Studio debugger)</li>
                            <li>Print debugging and logging</li>
                            <li>Unit testing fundamentals</li>
                            <li>Common bugs: off-by-one, memory leaks, segmentation faults</li>
                            <li>Code review and best practices</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-indigo-400">Popular Procedural Languages</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">C</h4>
                        <p className="text-gray-300 text-sm">Foundation of modern programming, system-level access, highly efficient</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Pascal</h4>
                        <p className="text-gray-300 text-sm">Educational language with strong typing and structured programming</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">FORTRAN</h4>
                        <p className="text-gray-300 text-sm">Scientific computing, mathematical calculations, legacy systems</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">BASIC</h4>
                        <p className="text-gray-300 text-sm">Beginner-friendly, simple syntax, early programming education</p>
                    </div>
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-indigo-400">Learning Path</h2>
                <ol className="list-decimal list-inside space-y-2 text-gray-300 ml-4">
                    <li>Start with basic syntax and understand how programs execute</li>
                    <li>Master variables, data types, and operators</li>
                    <li>Learn control structures and practice with simple problems</li>
                    <li>Understand functions and modular code organization</li>
                    <li>Work with arrays and strings extensively</li>
                    <li>Study pointers and dynamic memory (if learning C/C++)</li>
                    <li>Practice file handling and error management</li>
                    <li>Build small projects like calculators, file processors, simple games</li>
                    <li>Progress to data structures and algorithms</li>
                </ol>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-indigo-400">Best Practices</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                    <li>Write clear, readable code with meaningful variable names</li>
                    <li>Comment your code to explain complex logic</li>
                    <li>Keep functions small and focused on single tasks</li>
                    <li>Avoid global variables when possible</li>
                    <li>Always free dynamically allocated memory</li>
                    <li>Check return values and handle errors properly</li>
                    <li>Use const for values that shouldn't change</li>
                    <li>Test edge cases and boundary conditions</li>
                </ul>
            </section>
        </div>
    );
};

export default ProceduralProgramming;