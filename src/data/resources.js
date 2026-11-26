// Curated primary learning resources. Lesson prose is original; these links are
// references for deeper study, not copied course material.
const gfg = 'https://www.geeksforgeeks.org/';
export const moduleResources = {
  'core-syntax': [
    {kind:'Website',name:'GeeksforGeeks · Python Tutorial',url:'https://www.geeksforgeeks.org/python/python-programming-language-tutorial/',why:'A structured path through syntax, variables, data types, functions, collections and OOP.'},
    {kind:'Official documentation',name:'The Python Tutorial',url:'https://docs.python.org/3/tutorial/',why:'The authoritative reference for control flow, data structures, functions, modules and classes.'},
    {kind:'Book',name:'Think Python, 2nd Edition · Allen B. Downey',url:'https://greenteapress.com/wp/think-python-2e/',why:'A free, exercise-led introduction to computational thinking and programming.'}
  ],
  errors:[
    {kind:'Website',name:'GeeksforGeeks · Exception Handling in Python',url:'https://www.geeksforgeeks.org/python/python-exception-handling/',why:'Examples of try/except, built-in exceptions and custom exceptions.'},
    {kind:'Official documentation',name:'Python · Errors and Exceptions',url:'https://docs.python.org/3/tutorial/errors.html',why:'Precise reference for raising, catching and cleaning up after exceptions.'}
  ],
  memory:[
    {kind:'Book',name:'Computer Systems: A Programmer’s Perspective',url:'https://csapp.cs.cmu.edu/',why:'A rigorous connection between program execution, memory, pointers, linking and machine-level behaviour.'},
    {kind:'Book',name:'Operating Systems: Three Easy Pieces',url:'https://pages.cs.wisc.edu/~remzi/OSTEP/',why:'Free textbook chapters on memory virtualisation and address spaces.'},
    {kind:'Official documentation',name:'Python · Data model',url:'https://docs.python.org/3/reference/datamodel.html',why:'Understand names, objects, identity, mutability and object lifetime in Python.'}
  ],
  oop:[
    {kind:'Website',name:'GeeksforGeeks · OOP Concepts',url:'https://www.geeksforgeeks.org/object-oriented-programming-oops-concept-in-java/',why:'A broad overview of encapsulation, abstraction, inheritance and polymorphism.'},
    {kind:'Book',name:'Head First Design Patterns, 2nd Edition',url:'https://www.oreilly.com/library/view/head-first-design/9781492077992/',why:'Visual, example-driven explanations of reusable object-oriented design.'}
  ],
  functional:[
    {kind:'Official documentation',name:'Python · Functional Programming HOWTO',url:'https://docs.python.org/3/howto/functional.html',why:'Iterators, generators, higher-order functions and functional techniques in Python.'},
    {kind:'Website',name:'GeeksforGeeks · Functional Programming in Python',url:'https://www.geeksforgeeks.org/python/functional-programming-in-python/',why:'A practical introduction to map, filter, reduce, lambda and functional style.'}
  ],
  async:[
    {kind:'Official documentation',name:'Python · asyncio',url:'https://docs.python.org/3/library/asyncio.html',why:'The standard library reference for asynchronous I/O, tasks, coroutines and event loops.'},
    {kind:'Website',name:'MDN · Asynchronous JavaScript',url:'https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Async_JS',why:'Clear browser-focused explanations of callbacks, promises and async/await.'}
  ],
  complexity:[
    {kind:'Book',name:'Introduction to Algorithms · CLRS',url:'https://mitpress.mit.edu/9780262046305/introduction-to-algorithms/',why:'A comprehensive reference for asymptotic analysis and algorithm design.'},
    {kind:'Website',name:'GeeksforGeeks · Analysis of Algorithms',url:'https://www.geeksforgeeks.org/analysis-of-algorithms-set-1-asymptotic-analysis/',why:'Worked examples for asymptotic notation and complexity.'}
  ],
  linear:[
    {kind:'Website',name:'GeeksforGeeks · Data Structures',url:'https://www.geeksforgeeks.org/data-structures/',why:'Implementations and comparisons of common linear and non-linear structures.'},
    {kind:'Interactive textbook',name:'OpenDSA',url:'https://opendsa-server.cs.vt.edu/',why:'Visualisations and exercises for data structures and algorithms.'}
  ],
  hashing:[
    {kind:'Website',name:'GeeksforGeeks · Hashing Data Structure',url:'https://www.geeksforgeeks.org/hashing-data-structure/',why:'Hash functions, collision handling and hash table operations.'},
    {kind:'Book',name:'Open Data Structures · Pat Morin',url:'https://opendatastructures.org/',why:'A freely available textbook with implementation-level analysis.'}
  ],
  'trees-heaps':[
    {kind:'Interactive textbook',name:'OpenDSA · Trees and Heaps',url:'https://opendsa-server.cs.vt.edu/',why:'Visual explanations of tree operations, balancing and priority queues.'},
    {kind:'Website',name:'GeeksforGeeks · Tree Data Structure',url:'https://www.geeksforgeeks.org/binary-tree-data-structure/',why:'Practical walkthroughs of binary trees, BSTs and traversal.'}
  ],
  graphs:[
    {kind:'Book',name:'Algorithms, 4th Edition · Sedgewick & Wayne',url:'https://algs4.cs.princeton.edu/home/',why:'Excellent visual and implementation-oriented treatment of graph algorithms.'},
    {kind:'Website',name:'GeeksforGeeks · Graph Data Structure',url:'https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/',why:'Graph representations, traversals and shortest-path algorithms.'}
  ],
  paradigms:[
    {kind:'Book',name:'Grokking Algorithms · Aditya Bhargava',url:'https://www.manning.com/books/grokking-algorithms',why:'Illustrated introduction to recursion, divide and conquer, greedy algorithms and dynamic programming.'},
    {kind:'Website',name:'GeeksforGeeks · Algorithms',url:'https://www.geeksforgeeks.org/fundamentals-of-algorithms/',why:'A broad collection of algorithmic techniques and worked examples.'}
  ],
  algorithms:[
    {kind:'Book',name:'Algorithms, 4th Edition · Princeton',url:'https://algs4.cs.princeton.edu/home/',why:'Code, visualisations and exercises for sorting, searching and graph algorithms.'},
    {kind:'Website',name:'GeeksforGeeks · DSA',url:'https://www.geeksforgeeks.org/learn-data-structures-and-algorithms-dsa-tutorial/',why:'Topic-wise DSA explanations and practice problems.'}
  ],
  relational:[
    {kind:'Official documentation',name:'PostgreSQL · SQL Tutorial',url:'https://www.postgresql.org/docs/current/tutorial.html',why:'Practical SQL queries, joins, aggregates and views.'},
    {kind:'Website',name:'GeeksforGeeks · DBMS',url:'https://www.geeksforgeeks.org/dbms/',why:'Foundational database concepts, relational models and SQL.'},
    {kind:'Book',name:'Database System Concepts · Silberschatz, Korth & Sudarshan',url:'https://www.db-book.com/',why:'A widely used textbook covering relational databases and transaction processing.'}
  ],
  design:[
    {kind:'Website',name:'GeeksforGeeks · Database Normalization',url:'https://www.geeksforgeeks.org/dbms/database-normalization-normal-forms-1nf-2nf-3nf-bcnf/',why:'Worked examples of normal forms and functional dependencies.'},
    {kind:'Book',name:'Database System Concepts',url:'https://www.db-book.com/',why:'Deeper treatment of ER modelling, relational design and normalization.'}
  ],
  indexing:[
    {kind:'Official documentation',name:'PostgreSQL · Indexes',url:'https://www.postgresql.org/docs/current/indexes.html',why:'Index types, multicolumn indexes and practical query planning.'},
    {kind:'Website',name:'GeeksforGeeks · DBMS Indexing',url:'https://www.geeksforgeeks.org/dbms/indexing-in-databases-set-1/',why:'B-tree and hashing index fundamentals.'}
  ],
  transactions:[
    {kind:'Official documentation',name:'PostgreSQL · Concurrency Control',url:'https://www.postgresql.org/docs/current/mvcc.html',why:'MVCC, transaction isolation and concurrent access.'},
    {kind:'Book',name:'Designing Data-Intensive Applications · Martin Kleppmann',url:'https://dataintensive.net/',why:'A practical, in-depth book on data systems, transactions and distributed storage.'}
  ],
  'nosql-scale':[
    {kind:'Book',name:'Designing Data-Intensive Applications',url:'https://dataintensive.net/',why:'Replication, partitioning, consistency and distributed data models.'},
    {kind:'Official documentation',name:'Redis Documentation',url:'https://redis.io/docs/latest/',why:'A practical reference for key-value data structures and persistence.'}
  ],
  models:[
    {kind:'Website',name:'GeeksforGeeks · Computer Networks',url:'https://www.geeksforgeeks.org/computer-network-tutorials/',why:'Layered models, addressing, routing and network fundamentals.'},
    {kind:'Book',name:'Computer Networking: A Top-Down Approach',url:'https://gaia.cs.umass.edu/kurose_ross/',why:'A widely used textbook that teaches networking from applications down to physical links.'}
  ],
  'transport-app':[
    {kind:'Reference',name:'MDN · HTTP',url:'https://developer.mozilla.org/en-US/docs/Web/HTTP',why:'HTTP semantics, headers, caching, status codes and protocol evolution.'},
    {kind:'Reference',name:'Cloudflare Learning · HTTP/3',url:'https://www.cloudflare.com/learning/performance/what-is-http3/',why:'Accessible explanation of QUIC and HTTP/3.'}
  ],
  apis:[
    {kind:'Reference',name:'MDN · HTTP Request Methods',url:'https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods',why:'Methods, safe operations and idempotency.'},
    {kind:'Official documentation',name:'GraphQL Learn',url:'https://graphql.org/learn/',why:'Schemas, queries, mutations and execution.'},
    {kind:'Official documentation',name:'gRPC Documentation',url:'https://grpc.io/docs/what-is-grpc/introduction/',why:'RPC, Protocol Buffers and streaming.'}
  ],
  'web-mechanics':[
    {kind:'Reference',name:'MDN · Web Security',url:'https://developer.mozilla.org/en-US/docs/Web/Security',why:'Browser security, CORS, cookies and transport security.'},
    {kind:'Book',name:'High Performance Browser Networking · Ilya Grigorik',url:'https://hpbn.co/',why:'A free online book about networking, latency, HTTP and browser performance.'}
  ],
  hardware:[
    {kind:'Book',name:'Computer Systems: A Programmer’s Perspective',url:'https://csapp.cs.cmu.edu/',why:'Machine representation, processor architecture, memory hierarchy and I/O.'},
    {kind:'Book',name:'The Elements of Computing Systems · Nand2Tetris',url:'https://www.nand2tetris.org/',why:'Build a computer from logic gates upward through a hands-on sequence.'}
  ],
  processes:[
    {kind:'Book',name:'Operating Systems: Three Easy Pieces',url:'https://pages.cs.wisc.edu/~remzi/OSTEP/',why:'Free chapters on processes, scheduling and threads.'},
    {kind:'Website',name:'GeeksforGeeks · Operating Systems',url:'https://www.geeksforgeeks.org/operating-systems/',why:'OS concepts, process scheduling and thread fundamentals.'}
  ],
  concurrency:[
    {kind:'Book',name:'Operating Systems: Three Easy Pieces',url:'https://pages.cs.wisc.edu/~remzi/OSTEP/',why:'Detailed chapters on concurrency, locks, condition variables and deadlocks.'},
    {kind:'Reference',name:'Python · Threading',url:'https://docs.python.org/3/library/threading.html',why:'Practical thread and synchronization primitives.'}
  ],
  'memory-storage':[
    {kind:'Book',name:'Operating Systems: Three Easy Pieces',url:'https://pages.cs.wisc.edu/~remzi/OSTEP/',why:'Virtual memory, address translation and storage systems.'},
    {kind:'Website',name:'GeeksforGeeks · Memory Management',url:'https://www.geeksforgeeks.org/operating-systems/memory-management-in-operating-system/',why:'Paging, segmentation and memory allocation.'}
  ],
  scaling:[
    {kind:'Book',name:'Designing Data-Intensive Applications',url:'https://dataintensive.net/',why:'Trade-offs in scaling, replication, partitioning and data-intensive architecture.'},
    {kind:'Reference',name:'AWS Well-Architected Framework',url:'https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html',why:'Reliability, performance and operational trade-offs.'}
  ],
  caching:[
    {kind:'Book',name:'Designing Data-Intensive Applications',url:'https://dataintensive.net/',why:'Caching, replication and consistency trade-offs.'},
    {kind:'Reference',name:'Redis · Data types',url:'https://redis.io/docs/latest/develop/data-types/',why:'Explore practical data structures used in caching systems.'}
  ],
  messaging:[
    {kind:'Official documentation',name:'RabbitMQ Tutorials',url:'https://www.rabbitmq.com/tutorials',why:'Queues, acknowledgements, routing and pub/sub through runnable examples.'},
    {kind:'Official documentation',name:'Apache Kafka Introduction',url:'https://kafka.apache.org/intro',why:'Event streaming, topics, partitions and consumer groups.'}
  ],
  coordination:[
    {kind:'Book',name:'Designing Data-Intensive Applications',url:'https://dataintensive.net/',why:'Consensus, distributed coordination and consistency.'},
    {kind:'Paper',name:'In Search of an Understandable Consensus Algorithm (Raft)',url:'https://raft.github.io/raft.pdf',why:'The original Raft paper with an approachable consensus model.'}
  ],
  reliability:[
    {kind:'Reference',name:'Google SRE Book',url:'https://sre.google/sre-book/table-of-contents/',why:'Reliability engineering, monitoring, incident response and production practices.'},
    {kind:'Reference',name:'AWS Architecture · Reliability Pillar',url:'https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html',why:'Fault tolerance, recovery and resilient architecture.'}
  ],
  git:[
    {kind:'Book',name:'Pro Git · Scott Chacon & Ben Straub',url:'https://git-scm.com/book/en/v2',why:'Free book explaining Git internals, branching, merging and collaboration.'},
    {kind:'Official documentation',name:'Git Reference',url:'https://git-scm.com/docs',why:'Commands and precise behavioural details.'}
  ],
  testing:[
    {kind:'Book',name:'The Art of Software Testing · Glenford Myers',url:'https://www.wiley.com/en-us/The+Art+of+Software+Testing%2C+3rd+Edition-p-9781118031964',why:'Foundational techniques for test design and defect discovery.'},
    {kind:'Official documentation',name:'pytest Documentation',url:'https://docs.pytest.org/',why:'Fixtures, parametrization, assertions and test organisation.'}
  ],
  patterns:[
    {kind:'Book',name:'Head First Design Patterns',url:'https://www.oreilly.com/library/view/head-first-design/9781492077992/',why:'Practical pattern explanations with object-oriented examples.'},
    {kind:'Reference',name:'Refactoring.Guru · Design Patterns',url:'https://refactoring.guru/design-patterns',why:'Visual catalog of creational, structural and behavioral patterns.'}
  ],
  'build-cloud':[
    {kind:'Official documentation',name:'Docker Get Started',url:'https://docs.docker.com/get-started/',why:'Images, containers, networking and repeatable environments.'},
    {kind:'Official documentation',name:'GitHub Actions',url:'https://docs.github.com/en/actions',why:'Build and automate CI workflows.'},
    {kind:'Book',name:'The DevOps Handbook',url:'https://itrevolution.com/product/the-devops-handbook-second-edition/',why:'Principles and practices for delivery, feedback and operational reliability.'}
  ],
  identity:[
    {kind:'Reference',name:'OWASP Authentication Cheat Sheet',url:'https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html',why:'Practical guidance on secure authentication and session management.'},
    {kind:'Official documentation',name:'OAuth 2.0 · RFC 6749',url:'https://www.rfc-editor.org/rfc/rfc6749',why:'The protocol specification behind delegated authorization.'}
  ],
  'web-vulns':[
    {kind:'Learning platform',name:'PortSwigger Web Security Academy',url:'https://portswigger.net/web-security',why:'Free, hands-on labs for common web vulnerabilities.'},
    {kind:'Reference',name:'OWASP Top 10',url:'https://owasp.org/www-project-top-ten/',why:'An awareness document for major web application security risks.'}
  ],
  crypto:[
    {kind:'Book',name:'Serious Cryptography · Jean-Philippe Aumasson',url:'https://nostarch.com/seriouscrypto',why:'A practical explanation of modern cryptographic primitives and their safe use.'},
    {kind:'Reference',name:'OWASP Cryptographic Storage Cheat Sheet',url:'https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html',why:'Practical advice on encryption choices, keys and storage.'}
  ],
  discrete:[
    {kind:'Course',name:'MIT OpenCourseWare · Mathematics for Computer Science',url:'https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-spring-2015/',why:'Lecture notes and exercises in proofs, sets, graphs, counting and probability.'},
    {kind:'Book',name:'Discrete Mathematics and Its Applications · Rosen',url:'https://www.mheducation.com/highered/product/discrete-mathematics-and-its-applications-rosen.html',why:'A comprehensive textbook for discrete structures and reasoning.'}
  ],
  'linear-calculus':[
    {kind:'Course',name:'3Blue1Brown · Essence of Linear Algebra',url:'https://www.3blue1brown.com/topics/linear-algebra',why:'Visual intuition for vectors, matrices and transformations.'},
    {kind:'Course',name:'3Blue1Brown · Essence of Calculus',url:'https://www.3blue1brown.com/topics/calculus',why:'Visual explanations of derivatives, integrals and change.'}
  ],
  'automata-compilers':[
    {kind:'Book',name:'Crafting Interpreters · Robert Nystrom',url:'https://craftinginterpreters.com/',why:'A free, practical book that builds interpreters and explains parsing and runtime design.'},
    {kind:'Course',name:'Stanford CS143 · Compilers',url:'https://web.stanford.edu/class/cs143/',why:'Course material on lexical analysis, parsing, semantic analysis and code generation.'}
  ],
  'ai-python': [
    {kind:'Official documentation',name:'NumPy Quickstart',url:'https://numpy.org/doc/stable/user/quickstart.html',why:'Learn array creation, indexing, vectorized operations and broadcasting.'},
    {kind:'Official documentation',name:'Pandas Getting Started',url:'https://pandas.pydata.org/docs/getting_started/index.html',why:'Hands-on guides for reading, cleaning, joining and summarizing tabular data.'},
    {kind:'Book',name:'Python for Data Analysis · Wes McKinney',url:'https://wesmckinney.com/book/',why:'A practical reference for Python, NumPy and pandas workflows.'}
  ],
  'ai-math-stats': [
    {kind:'Course',name:'Khan Academy · Statistics & Probability',url:'https://www.khanacademy.org/math/statistics-probability',why:'Build intuition for distributions, probability and statistical inference.'},
    {kind:'Course',name:'3Blue1Brown · Essence of Linear Algebra',url:'https://www.3blue1brown.com/topics/linear-algebra',why:'Visual intuition for vectors, matrices and transformations.'},
    {kind:'Book',name:'Mathematics for Machine Learning',url:'https://mml-book.github.io/',why:'Free textbook connecting linear algebra, calculus, probability and optimization to ML.'}
  ],
  'ai-ml': [
    {kind:'Official documentation',name:'scikit-learn User Guide',url:'https://scikit-learn.org/stable/user_guide.html',why:'Reference for supervised learning, clustering, preprocessing, pipelines and model selection.'},
    {kind:'Book',name:'An Introduction to Statistical Learning',url:'https://www.statlearning.com/',why:'Free textbook with practical coverage of regression, classification, resampling and tree methods.'},
    {kind:'Website',name:'GeeksforGeeks · Machine Learning',url:'https://www.geeksforgeeks.org/machine-learning/machine-learning/',why:'Topic-by-topic explanations and worked examples for core ML methods.'}
  ],
  'ai-deep-learning': [
    {kind:'Official documentation',name:'PyTorch Tutorials',url:'https://pytorch.org/tutorials/',why:'Build tensors, neural networks, training loops and model workflows hands-on.'},
    {kind:'Course',name:'fast.ai · Practical Deep Learning',url:'https://course.fast.ai/',why:'A project-led introduction to training and evaluating practical deep learning models.'},
    {kind:'Book',name:'Dive into Deep Learning',url:'https://d2l.ai/',why:'Interactive textbook with code, math and explanations of neural architectures.'}
  ],
  'ai-llm': [
    {kind:'Course',name:'Hugging Face LLM Course',url:'https://huggingface.co/learn/llm-course/',why:'Practical transformer, tokenization, fine-tuning and model-sharing lessons.'},
    {kind:'Official documentation',name:'LangGraph Documentation',url:'https://docs.langchain.com/oss/python/langgraph/overview',why:'Reference for stateful agent workflows, persistence, human approval and orchestration.'},
    {kind:'Security reference',name:'OWASP Top 10 for LLM Applications',url:'https://genai.owasp.org/llm-top-10/',why:'Threat categories and mitigation ideas for prompt injection, data leakage and unsafe tool use.'},
    {kind:'Research',name:'Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks',url:'https://arxiv.org/abs/2005.11401',why:'The foundational RAG paper describing retrieval coupled with generation.'}
  ],
  'de-sql': [
    {kind:'Interactive tutorial',name:'SQLBolt',url:'https://sqlbolt.com/',why:'Short interactive lessons for SQL querying and joins.'},
    {kind:'Official documentation',name:'PostgreSQL Documentation',url:'https://www.postgresql.org/docs/current/',why:'Authoritative reference for SQL, constraints, indexes, transactions and query plans.'},
    {kind:'Book',name:'The Data Warehouse Toolkit · Ralph Kimball',url:'https://www.kimballgroup.com/data-warehouse-business-intelligence-resources/',why:'Classic dimensional modelling reference for facts, dimensions and star schemas.'}
  ],
  'de-python-quality': [
    {kind:'Official documentation',name:'Apache Parquet',url:'https://parquet.apache.org/docs/',why:'Understand the columnar storage format and its design.'},
    {kind:'Official documentation',name:'Pandera Documentation',url:'https://pandera.readthedocs.io/',why:'Validate DataFrame schemas and data quality expectations in Python.'},
    {kind:'Book',name:'Fundamentals of Data Engineering · Reis & Housley',url:'https://www.oreilly.com/library/view/fundamentals-of-data/9781098108298/',why:'A modern overview of data engineering lifecycle decisions and reliability.'}
  ],
  'de-pipelines': [
    {kind:'Official documentation',name:'Apache Airflow Documentation',url:'https://airflow.apache.org/docs/',why:'Learn DAGs, dependencies, scheduling, retries and operational workflows.'},
    {kind:'Official documentation',name:'dbt Documentation',url:'https://docs.getdbt.com/docs/introduction',why:'Practical ELT modelling, tests, documentation and lineage.'},
    {kind:'Book',name:'Designing Data-Intensive Applications · Martin Kleppmann',url:'https://dataintensive.net/',why:'Deep explanations of reliable data systems, replication, streams and distributed processing.'}
  ],
  'de-warehouse-lake': [
    {kind:'Official documentation',name:'Apache Spark Documentation',url:'https://spark.apache.org/docs/latest/',why:'Reference for DataFrames, Spark SQL, execution and distributed processing.'},
    {kind:'Official documentation',name:'Delta Lake Documentation',url:'https://docs.delta.io/',why:'Learn transactional table storage and lakehouse patterns.'},
    {kind:'Book',name:'Fundamentals of Data Engineering · Reis & Housley',url:'https://www.oreilly.com/library/view/fundamentals-of-data/9781098108298/',why:'Architecture choices for lakes, warehouses, storage and processing.'}
  ],
  'de-streaming': [
    {kind:'Official documentation',name:'Apache Kafka Documentation',url:'https://kafka.apache.org/documentation/',why:'Understand topics, partitions, producers, consumers and delivery semantics.'},
    {kind:'Official documentation',name:'OpenLineage Documentation',url:'https://openlineage.io/docs/',why:'Learn interoperable metadata and lineage concepts for data pipelines.'},
    {kind:'Security reference',name:'OWASP Data Security Guidance',url:'https://owasp.org/www-project-top-ten/',why:'Use security principles to reason about access control, secrets and exposure risks.'}
  ]
};
