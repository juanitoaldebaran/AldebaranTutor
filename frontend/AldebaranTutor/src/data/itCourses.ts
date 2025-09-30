import { Bot, Code, Laptop, Terminal } from "lucide-react";

const itCourses = [
    {
        // 1. Changed id from string to number
        id: 1, 
        // 2. Changed 'name' to 'title'
        title: "Data Structures and Algorithms",
        icon: Code,
        sector: "IT",
        // 4. Added required 'color' property
        color: "bg-indigo-500", 
        sections: [
        {
            // 3. Changed 'title' to 'name'
            name: "Introduction to DSA",
            // 3. Changed 'content' to 'items'
            items: [
            "DSA combines data structures (ways to store data) with algorithms (ways to process data).",
            "Efficiency is measured in Time Complexity (Big-O) and Space Complexity.",
            "Helps solve computational problems optimally and is a core skill for interviews."
            ]
        },
        {
            name: "Core Data Structures",
            items: [
            "Arrays & Strings: Indexed storage, fast access but costly insert/delete.",
            "Linked Lists: Dynamic nodes (singly, doubly, circular) with flexible insertion/deletion.",
            "Stacks: LIFO, used in function calls, undo, expression evaluation.",
            "Queues: FIFO, includes circular, deque, and priority queues.",
            "Hash Tables: Key-value mapping with O(1) average access using hashing.",
            "Heaps: Complete binary trees for priority-based access.",
            "Trees: Hierarchical structures (BST, AVL, Trie, Segment Trees).",
            "Graphs: Nodes and edges, represented as adjacency lists/matrices."
            ]
        },
        {
            name: "Algorithm Techniques",
            items: [
                "Sorting (Merge, Quick, Heap) and Searching (Binary, DFS, BFS).",
                "Greedy Algorithms: Local optimal choices leading to global optimal.",
                "Dynamic Programming: Breaking problem into overlapping subproblems."
            ]
        }
        ]
    },
    {
        id: 2,
        title: "System Design",
        icon: Laptop,
        sector: "IT",
        color: "bg-sky-500",
        sections: [
        {
            name: "Introduction to SD",
            items: [
            "System Design is about designing scalable, reliable, and maintainable software systems.",
            "Focuses on architecture, trade-offs, and handling scale with millions of users."
            ]
        },
        {
            name: "Core Concepts of SD",
            items: [
            "Scalability: Ability to handle growth (vertical vs horizontal scaling).",
            "Load Balancing: Distribute requests across servers.",
            "Caching: Reduce load and improve speed (client-side, CDN, server-side).",
            "Databases: SQL vs NoSQL, replication, sharding.",
            "Consistency & Availability: CAP theorem trade-offs.",
            "Message Queues: Asynchronous communication (Kafka, RabbitMQ).",
            "Microservices: Breaking monolith into smaller services.",
            "Monitoring & Logging: Ensuring reliability and debuggability."
            ]
        }
        ]
    },
    {
        id: 3,
        title: "Artificial Intelligence & Machine Learning",
        icon: Bot,
        sector: "IT",
        color: "bg-red-500",
        sections: [
        {
            name: "Introduction to AI/ML",
            items: [
            "AI creates systems that mimic human intelligence.",
            "ML is a subset of AI where systems learn from data.",
            "Deep Learning is a subset of ML using neural networks."
            ]
        },
        {
            name: "Core Concepts of AI/ML",
            items: [
            "Supervised Learning: Train on labeled data (classification, regression).",
            "Unsupervised Learning: Find patterns in unlabeled data (clustering, dimensionality reduction).",
            "Reinforcement Learning: Agents learn by trial and error with rewards.",
            "Neural Networks: Layers of interconnected nodes that learn representations.",
            "Natural Language Processing: AI applied to text and speech (chatbots, translation).",
            "Computer Vision: AI applied to images and videos (object detection, face recognition)."
            ]
        }
        ]
    },
    {
        id: 4,
        title: "Procedural Programming",
        icon: Terminal,
        sector: "IT",
        color: "bg-green-500",
        sections: [
        {
            name: "Introduction to PP",
            items: [
            "Procedural Programming is a paradigm based on procedures (functions).",
            "Programs are structured as sequences of instructions, focusing on 'how to solve'."
            ]
        },
        {
            name: "Core Concepts of PP",
            items: [
            "Procedures/Functions: Blocks of reusable code.",
            "Variables: Store data values.",
            "Control Structures: if-else, loops (for, while).",
            "Modularity: Splitting programs into smaller procedures.",
            "Scope & Lifetime: Local vs global variables.",
            "Recursion: Functions calling themselves."
            ]
        }
        ]
    }
];

export default itCourses;