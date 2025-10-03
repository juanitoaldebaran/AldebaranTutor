import type React from "react";

const AIMachineLearning: React.FC = () => {
    return (
        <div className="text-white space-y-8 mt-30 p-8">
            <div>
                <h1 className="text-4xl font-bold mb-4">AI & Machine Learning</h1>
                <p className="text-gray-400 text-lg">Master artificial intelligence and machine learning from fundamentals to advanced topics</p>
            </div>

            <section className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                    Artificial Intelligence and Machine Learning are transforming industries by enabling computers to learn from data 
                    and make intelligent decisions. From recommendation systems to autonomous vehicles, AI/ML powers modern technology 
                    and creates unprecedented opportunities for innovation.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-indigo-400">Why Learn AI/ML?</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                    <li>Highest demand skill in tech with competitive salaries</li>
                    <li>Powers applications from healthcare diagnostics to financial fraud detection</li>
                    <li>Foundation for emerging technologies like autonomous systems and generative AI</li>
                    <li>Essential for data-driven decision making in modern businesses</li>
                    <li>Enables creation of intelligent products and services</li>
                </ul>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-indigo-400">Core Topics</h2>
                
                <div className="space-y-6">
                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">1. Machine Learning Fundamentals</h3>
                        <p className="text-gray-300 mb-2">
                            Introduction to ML paradigms and foundational concepts:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li><strong>Supervised Learning:</strong> Learning from labeled data (classification, regression)</li>
                            <li><strong>Unsupervised Learning:</strong> Finding patterns in unlabeled data (clustering, dimensionality reduction)</li>
                            <li><strong>Reinforcement Learning:</strong> Learning through interaction and rewards</li>
                            <li>Training, validation, and test sets; overfitting vs underfitting</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">2. Linear & Logistic Regression</h3>
                        <p className="text-gray-300">
                            Linear Regression predicts continuous values by finding best-fit line through data points. 
                            Logistic Regression handles binary classification using sigmoid function. Both use gradient descent 
                            for optimization and form the foundation for understanding more complex algorithms.
                        </p>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">3. Decision Trees & Ensemble Methods</h3>
                        <p className="text-gray-300 mb-2">
                            Tree-based models for classification and regression:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li>Decision Trees: Interpretable models using if-then rules</li>
                            <li>Random Forests: Ensemble of trees reducing overfitting</li>
                            <li>Gradient Boosting (XGBoost, LightGBM): Sequential ensemble learning</li>
                            <li>Feature importance and model interpretability</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">4. Support Vector Machines (SVM)</h3>
                        <p className="text-gray-300">
                            Powerful classification algorithm that finds optimal hyperplane to separate classes. Uses kernel trick 
                            to handle non-linear relationships. Effective in high-dimensional spaces and for problems where 
                            clear margin of separation exists.
                        </p>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">5. Neural Networks & Deep Learning</h3>
                        <p className="text-gray-300 mb-2">
                            Foundation of modern AI systems:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li>Perceptrons and Multi-layer Neural Networks</li>
                            <li>Activation Functions: ReLU, Sigmoid, Tanh, Softmax</li>
                            <li>Backpropagation and Gradient Descent (SGD, Adam, RMSprop)</li>
                            <li>Regularization techniques: Dropout, L1/L2, Batch Normalization</li>
                            <li>Loss functions and optimization strategies</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">6. Convolutional Neural Networks (CNN)</h3>
                        <p className="text-gray-300">
                            Specialized architecture for processing grid-like data (images, videos). Uses convolution layers to 
                            automatically learn spatial hierarchies of features. Applications include image classification, 
                            object detection (YOLO, R-CNN), facial recognition, and medical image analysis.
                        </p>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">7. Recurrent Neural Networks (RNN)</h3>
                        <p className="text-gray-300 mb-2">
                            Networks designed for sequential data processing:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li>LSTM (Long Short-Term Memory): Solving vanishing gradient problem</li>
                            <li>GRU (Gated Recurrent Unit): Simplified LSTM variant</li>
                            <li>Applications: Time series forecasting, speech recognition, language modeling</li>
                            <li>Sequence-to-sequence models for machine translation</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">8. Natural Language Processing (NLP)</h3>
                        <p className="text-gray-300 mb-2">
                            Enabling computers to understand and generate human language:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li>Text preprocessing: tokenization, stemming, lemmatization</li>
                            <li>Word embeddings: Word2Vec, GloVe, FastText</li>
                            <li>Transformer architecture and attention mechanism</li>
                            <li>Large Language Models: BERT, GPT, T5</li>
                            <li>Applications: sentiment analysis, chatbots, summarization, translation</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">9. Transformers & Attention Mechanisms</h3>
                        <p className="text-gray-300">
                            Revolutionary architecture that eliminated need for recurrence. Self-attention allows model to weigh 
                            importance of different input parts. Powers modern NLP (GPT, BERT) and increasingly used in computer 
                            vision (Vision Transformers). Enables parallel processing and handling long-range dependencies.
                        </p>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">10. Generative AI</h3>
                        <p className="text-gray-300 mb-2">
                            Creating new content from learned patterns:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li>GANs (Generative Adversarial Networks): Image generation, deepfakes</li>
                            <li>VAEs (Variational Autoencoders): Data compression, generation</li>
                            <li>Diffusion Models: State-of-art image generation (Stable Diffusion, DALL-E)</li>
                            <li>Large Language Models for text generation</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">11. Reinforcement Learning</h3>
                        <p className="text-gray-300">
                            Agent learns optimal behavior through trial and error. Key concepts: states, actions, rewards, policies. 
                            Algorithms include Q-Learning, DQN, Policy Gradients, Actor-Critic. Applications: game AI (AlphaGo), 
                            robotics, autonomous vehicles, resource optimization.
                        </p>
                    </div>

                    <div className="bg-gray-800 p-5 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">12. Model Evaluation & Deployment</h3>
                        <p className="text-gray-300 mb-2">
                            Practical ML engineering:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1">
                            <li>Metrics: Accuracy, Precision, Recall, F1-Score, ROC-AUC</li>
                            <li>Cross-validation and hyperparameter tuning</li>
                            <li>Model serving: APIs, containers, edge deployment</li>
                            <li>Monitoring, A/B testing, and continuous learning</li>
                            <li>MLOps: versioning, pipelines, reproducibility</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-indigo-400">Popular Frameworks & Tools</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">TensorFlow & Keras</h4>
                        <p className="text-gray-300 text-sm">Google's comprehensive ML framework with high-level Keras API</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">PyTorch</h4>
                        <p className="text-gray-300 text-sm">Facebook's dynamic computation framework, popular in research</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Scikit-learn</h4>
                        <p className="text-gray-300 text-sm">Classical ML algorithms and tools for data preprocessing</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Hugging Face</h4>
                        <p className="text-gray-300 text-sm">Pre-trained models and transformers for NLP tasks</p>
                    </div>
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-indigo-400">Learning Path</h2>
                <ol className="list-decimal list-inside space-y-2 text-gray-300 ml-4">
                    <li>Master Python and essential libraries (NumPy, Pandas, Matplotlib)</li>
                    <li>Learn statistics, linear algebra, and calculus fundamentals</li>
                    <li>Start with classical ML algorithms (regression, classification, clustering)</li>
                    <li>Practice on real datasets from Kaggle or UCI ML Repository</li>
                    <li>Progress to neural networks and deep learning</li>
                    <li>Specialize in areas like Computer Vision or NLP</li>
                    <li>Build and deploy end-to-end ML projects</li>
                    <li>Stay updated with latest research papers and techniques</li>
                </ol>
            </section>
        </div>
    );
};

export default AIMachineLearning;