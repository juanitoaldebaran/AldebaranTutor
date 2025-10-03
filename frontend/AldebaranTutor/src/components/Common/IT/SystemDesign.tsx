import type React from "react";

const SystemDesign: React.FC = () => {
    return (
        <div className="text-white space-y-8 mt-30 p-8">
            <div>
                <h1 className="text-4xl font-bold mb-4">System Design</h1>
                <p className="text-gray-400 text-lg">Learn to design scalable and reliable systems</p>
            </div>

            <section className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                    System Design is the process of defining architecture, components, modules, interfaces, and data for a system 
                    to satisfy specified requirements. It's crucial for building scalable, maintainable, and efficient software systems 
                    that can handle millions of users and requests.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-indigo-400">Why Learn System Design?</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                    <li>Essential for senior engineering roles and technical leadership positions</li>
                    <li>Key component of interviews at FAANG and top tech companies</li>
                    <li>Enables you to build systems that scale from thousands to millions of users</li>
                    <li>Helps understand trade-offs between different architectural decisions</li>
                    <li>Critical for designing resilient, fault-tolerant applications</li>
                </ul>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-indigo-400">Core Concepts</h2>
                
                <div className="space-y-6">
                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">1. Scalability</h3>
                        <p className="text-gray-300 mb-2">
                            The ability of a system to handle growing amounts of work by adding resources. Two types:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li><strong>Vertical Scaling:</strong> Adding more power to existing machines (CPU, RAM)</li>
                            <li><strong>Horizontal Scaling:</strong> Adding more machines to distribute the load</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">2. Load Balancing</h3>
                        <p className="text-gray-300">
                            Distributes incoming network traffic across multiple servers to ensure no single server bears too much load. 
                            Algorithms include Round Robin, Least Connections, IP Hash, and Weighted Round Robin. Improves availability, 
                            reliability, and response times.
                        </p>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">3. Caching</h3>
                        <p className="text-gray-300 mb-2">
                            Storing frequently accessed data in fast-access storage to reduce latency and database load. Strategies include:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li>Cache-aside, Write-through, Write-behind</li>
                            <li>CDN for static content (images, videos, CSS, JavaScript)</li>
                            <li>Redis and Memcached for application-level caching</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">4. Database Design</h3>
                        <p className="text-gray-300 mb-2">
                            Choosing the right database type and design patterns:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li><strong>SQL Databases:</strong> ACID properties, relations, joins (PostgreSQL, MySQL)</li>
                            <li><strong>NoSQL Databases:</strong> Flexible schemas, horizontal scaling (MongoDB, Cassandra, DynamoDB)</li>
                            <li><strong>Database Sharding:</strong> Partitioning data across multiple databases</li>
                            <li><strong>Replication:</strong> Master-slave, master-master for high availability</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">5. CAP Theorem</h3>
                        <p className="text-gray-300">
                            States that a distributed system can only guarantee two of three properties: Consistency (all nodes see same data), 
                            Availability (every request receives a response), and Partition Tolerance (system continues despite network failures). 
                            Understanding trade-offs is crucial for distributed system design.
                        </p>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">6. Message Queues</h3>
                        <p className="text-gray-300">
                            Asynchronous communication mechanism enabling decoupling of services. Examples: RabbitMQ, Apache Kafka, AWS SQS. 
                            Benefits include handling traffic spikes, retry mechanisms, and enabling microservices architecture.
                        </p>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">7. Microservices Architecture</h3>
                        <p className="text-gray-300">
                            Breaking down applications into small, independent services that communicate via APIs. Advantages include independent 
                            deployment, technology flexibility, and fault isolation. Challenges include complexity, distributed transactions, 
                            and monitoring.
                        </p>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">8. API Design</h3>
                        <p className="text-gray-300 mb-2">
                            Designing interfaces for communication between services:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li><strong>REST:</strong> Resource-based, HTTP methods, stateless</li>
                            <li><strong>GraphQL:</strong> Query language, flexible data fetching</li>
                            <li><strong>gRPC:</strong> High performance, Protocol Buffers</li>
                            <li>Rate limiting, authentication, versioning strategies</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">9. Consistency Patterns</h3>
                        <p className="text-gray-300">
                            Weak Consistency (DNS, caches), Eventual Consistency (NoSQL, email), Strong Consistency (file systems, RDBMS). 
                            Choose based on application requirements and acceptable trade-offs.
                        </p>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">10. Security</h3>
                        <p className="text-gray-300">
                            Authentication (OAuth, JWT), Authorization (RBAC, ABAC), Encryption (TLS/SSL, at-rest encryption), 
                            DDoS protection, input validation, and security best practices to protect against common vulnerabilities.
                        </p>
                    </div>
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-indigo-400">Common Design Problems</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">URL Shortener</h4>
                        <p className="text-gray-300 text-sm">Design TinyURL, Bit.ly - hash functions, database design, caching</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Social Media Feed</h4>
                        <p className="text-gray-300 text-sm">Design Twitter/X feed - fanout service, timeline generation, ranking</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Video Streaming</h4>
                        <p className="text-gray-300 text-sm">Design YouTube/Netflix - CDN, adaptive bitrate, encoding pipeline</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Chat Application</h4>
                        <p className="text-gray-300 text-sm">Design WhatsApp - WebSockets, message queues, read receipts</p>
                    </div>
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-indigo-400">Design Approach</h2>
                <ol className="list-decimal list-inside space-y-2 text-gray-300 ml-4">
                    <li>Clarify requirements and constraints (functional and non-functional)</li>
                    <li>Estimate capacity (users, requests per second, storage needs)</li>
                    <li>Define system APIs and data models</li>
                    <li>Design high-level architecture and data flow</li>
                    <li>Address scalability, availability, and performance bottlenecks</li>
                    <li>Discuss trade-offs and alternative approaches</li>
                </ol>
            </section>
        </div>
    );
};

export default SystemDesign;