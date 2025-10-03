import type React from "react";

const DataStructure: React.FC = () => {
    return (
        <div className="text-white space-y-8 mt-30 p-8">
            <div>
                <h1 className="text-4xl font-bold mb-4"> Data Structures & Algorithms</h1>
                <p className="text-gray-400 text-lg">Master the fundamentals of computer science</p>
            </div>

            <section className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                    Data Structures and Algorithms (DSA) form the backbone of computer science and software development. 
                    Data structures manage how data is stored and accessed, while algorithms focus on processing this data efficiently. 
                    Understanding DSA is crucial for writing optimized code and solving complex computational problems.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-indigo-400">Why Learn DSA?</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                    <li>Foundation for almost every software like GPS, Search Engines, AI ChatBots, Gaming Apps, Databases, Web Applications</li>
                    <li>Top companies like Google, Microsoft, Amazon, Apple, Meta heavily focus on DSA in technical interviews</li>
                    <li>Boosts your problem-solving abilities and makes you a stronger programmer</li>
                    <li>Essential for competitive programming and coding challenges</li>
                </ul>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-indigo-400">Core Topics Covered</h2>
                
                <div className="space-y-6">
                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">1. Arrays</h3>
                        <p className="text-gray-300">
                            A linear data structure where elements are stored in contiguous memory locations, allowing constant-time access. 
                            Arrays are fundamental and used extensively in algorithm design for their simplicity and efficiency.
                        </p>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">2. Searching Algorithms</h3>
                        <p className="text-gray-300">
                            Techniques to locate specific data within a dataset. Includes Linear Search for unsorted data and Binary Search 
                            for sorted arrays, which reduces search time from O(n) to O(log n).
                        </p>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">3. Sorting Algorithms</h3>
                        <p className="text-gray-300">
                            Methods to arrange elements in a specific order. Covers Bubble Sort, Selection Sort, Insertion Sort, 
                            Merge Sort, Quick Sort, and Heap Sort. Understanding time complexity (O(n²) vs O(n log n)) is crucial.
                        </p>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">4. Linked Lists</h3>
                        <p className="text-gray-300">
                            A linear data structure where elements (nodes) are connected by pointers. Unlike arrays, nodes are not stored 
                            contiguously. Includes singly linked lists, doubly linked lists, and circular linked lists.
                        </p>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">5. Stack & Queue</h3>
                        <p className="text-gray-300">
                            Stack follows LIFO (Last In First Out) principle, used in function calls and expression evaluation. 
                            Queue follows FIFO (First In First Out), essential for scheduling and breadth-first search.
                        </p>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">6. Trees</h3>
                        <p className="text-gray-300">
                            Hierarchical data structures with a root node and child nodes. Covers Binary Trees, Binary Search Trees (BST), 
                            AVL Trees, and Tree Traversals (Inorder, Preorder, Postorder). Essential for database indexing and file systems.
                        </p>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">7. Graphs</h3>
                        <p className="text-gray-300">
                            Non-linear structures consisting of vertices and edges. Includes graph representations (adjacency matrix/list), 
                            BFS, DFS, shortest path algorithms (Dijkstra, Bellman-Ford), and minimum spanning trees.
                        </p>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">8. Hashing</h3>
                        <p className="text-gray-300">
                            Technique that generates fixed-size output from variable-size input using hash functions. Provides O(1) average 
                            time complexity for insertion, deletion, and search operations. Crucial for hash tables and dictionaries.
                        </p>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">9. Heaps</h3>
                        <p className="text-gray-300">
                            Complete binary tree satisfying the heap property (Min-Heap or Max-Heap). Used to implement priority queues 
                            and in heap sort algorithm. Essential for problems requiring quick access to min/max elements.
                        </p>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">10. Dynamic Programming</h3>
                        <p className="text-gray-300">
                            Method to solve complex problems by breaking them into simpler overlapping subproblems. Uses memoization 
                            and tabulation to avoid redundant calculations. Examples include Fibonacci, Knapsack, and Longest Common Subsequence.
                        </p>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">11. Greedy Algorithms</h3>
                        <p className="text-gray-300">
                            Makes locally optimal choices at each step hoping to find global optimum. Works for problems like 
                            Activity Selection, Huffman Coding, and Minimum Spanning Tree. Simpler than DP but doesn't always guarantee optimal solution.
                        </p>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">12. Backtracking</h3>
                        <p className="text-gray-300">
                            Algorithmic technique that incrementally builds candidates and abandons them if they fail to satisfy constraints. 
                            Used in N-Queens, Sudoku Solver, and Subset Sum problems.
                        </p>
                    </div>
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-indigo-400">Learning Path</h2>
                <ol className="list-decimal list-inside space-y-2 text-gray-300 ml-4">
                    <li>Master at least one programming language (Python, Java, C++, or JavaScript)</li>
                    <li>Understand Time and Space Complexity (Big O Notation)</li>
                    <li>Learn basic data structures: Arrays, Linked Lists, Stacks, Queues</li>
                    <li>Practice searching and sorting algorithms</li>
                    <li>Study advanced structures: Trees, Graphs, Heaps</li>
                    <li>Master algorithmic paradigms: DP, Greedy, Backtracking</li>
                    <li>Solve problems daily on platforms like LeetCode, HackerRank, or CodeForces</li>
                </ol>
            </section>
        </div>
    );
};

export default DataStructure;