export interface GameMetaData {
  id: number;
  levelNumber: number;
  title: string;
  shortTitle: string;
  subtitle: string;
  tagline: string;
  description: string;
  detailedObjective: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  xpReward: number;
  skills: string[];
  interactionType: string;
  hintAvailability: string;
  iconName: 'pop' | 'push' | 'build' | 'predict' | 'debug' | 'speed';
  howToPlay: {
    stepNumber: number;
    title: string;
    description: string;
  }[];
  previewData: {
    stackItems?: (number | string)[];
    targetStack?: (number | string)[];
    operationsTrace?: string[];
    debugStep?: { text: string; isError: boolean };
    topPointer?: number | string;
    popZoneLabel?: string;
  };
}

export const GAME_CATALOG: GameMetaData[] = [
  // ==========================================
  // LEVEL 1: BUILD THE QUEUE
  // ==========================================
  {
    id: 1,
    levelNumber: 1,
    title: 'LEVEL 1: BUILD THE QUEUE',
    shortTitle: 'Build the Queue',
    subtitle: 'People appear one by one: Enqueue visitors & identify who gets served next',
    tagline: 'People appear one by one: A → B → C → D. Who will be served next?',
    description: 'Amusement park entrance: Enqueue arriving visitors [A, B, C, D] and identify who gets served first under FIFO.',
    detailedObjective:
      'Visitors arrive at the rollercoaster entrance one by one. Enqueue visitors A, B, C, D into the ride queue (FRONT → [A] [B] [C] [D] ← REAR). Master who gets served next (A at FRONT) and learn where new arrivals enter (REAR).',
    difficulty: 'Beginner',
    duration: '2–3 min',
    xpReward: 50,
    skills: ['FIFO Principle', 'FRONT Pointer', 'REAR Pointer', 'ENQUEUE Operation', 'Who gets served next'],
    interactionType: 'ENQUEUE visitors & identify FRONT',
    hintAvailability: '3-stage guided hints available',
    iconName: 'push',
    howToPlay: [
      {
        stepNumber: 1,
        title: 'Visitors Arrive at Entrance',
        description: 'Visitors appear one by one: Alex (A), Bella (B), Chris (C), and Diana (D).',
      },
      {
        stepNumber: 2,
        title: 'Click ENQUEUE to Add Them',
        description: 'Click ENQUEUE to add each visitor to the REAR of the rollercoaster line.',
      },
      {
        stepNumber: 3,
        title: 'Who is Served Next?',
        description: 'Select who will board the ride first: Alex (A) at FRONT because Alex arrived first!',
      },
      {
        stepNumber: 4,
        title: 'Score Points',
        description: 'Gain +10 points for every correct FIFO decision and protect your 3 lives.',
      },
    ],
    previewData: {
      stackItems: ['A', 'B', 'C', 'D'],
      topPointer: 'A',
      popZoneLabel: 'ENQUEUE AT REAR',
    },
  },

  // ==========================================
  // LEVEL 2: SERVE THE CUSTOMER
  // ==========================================
  {
    id: 2,
    levelNumber: 2,
    title: 'LEVEL 2: SERVE THE CUSTOMER',
    shortTitle: 'Serve the Customer',
    subtitle: 'Rollercoaster boarding: DEQUEUE from FRONT & master FIFO',
    tagline: 'Customer A leaves the queue because A entered first!',
    description: 'Board riders with DEQUEUE: Remove A from FRONT → [A] [B] [C] to get FRONT → [B] [C], proving First In, First Out.',
    detailedObjective:
      'A customer leaves the queue to board the ride. Click DEQUEUE to remove customer A from FRONT. Observe that B automatically advances to FRONT, illustrating the fundamental FIFO principle.',
    difficulty: 'Beginner',
    duration: '2–3 min',
    xpReward: 50,
    skills: ['DEQUEUE Operation', 'FRONT Boarding', 'FIFO Principle', 'Queue Advancement'],
    interactionType: 'Interactive DEQUEUE & customer service',
    hintAvailability: '3-stage guided hints available',
    iconName: 'pop',
    howToPlay: [
      {
        stepNumber: 1,
        title: 'Inspect FRONT Rider',
        description: 'Customer A is at FRONT because A was the first to enter the line.',
      },
      {
        stepNumber: 2,
        title: 'Click DEQUEUE to Serve',
        description: 'Click DEQUEUE to let Customer A board the rollercoaster.',
      },
      {
        stepNumber: 3,
        title: 'Observe Next In Line',
        description: 'Notice how Customer B advances to become the new FRONT.',
      },
      {
        stepNumber: 4,
        title: 'Understand the WHY',
        description: 'A was removed because A entered first: the core definition of FIFO.',
      },
    ],
    previewData: {
      stackItems: ['A', 'B', 'C'],
      topPointer: 'A',
      popZoneLabel: 'DEQUEUE FROM FRONT',
    },
  },

  // ==========================================
  // LEVEL 3: RUSH HOUR
  // ==========================================
  {
    id: 3,
    levelNumber: 3,
    title: 'LEVEL 3: RUSH HOUR',
    shortTitle: 'Rush Hour',
    subtitle: 'Limited ride capacity (4): Handle rapid arrivals & detect QUEUE OVERFLOW',
    tagline: 'Queue capacity = 4! When [A][B][C][D] is full and E arrives: 🚨 QUEUE OVERFLOW!',
    description: 'Peak park hours: Queue has a limited capacity of 4. Prevent overflow and identify when the queue is full.',
    detailedObjective:
      'Manage the ride during rush hour where queue capacity is strictly 4. When the queue contains [A, B, C, D] and customer E attempts to enter, detect QUEUE OVERFLOW and prevent buffer violations.',
    difficulty: 'Intermediate',
    duration: '3–4 min',
    xpReward: 75,
    skills: ['Queue Capacity', 'QUEUE OVERFLOW', 'isFull() Check', 'Enqueue Restrictions'],
    interactionType: 'Overflow detection & capacity management',
    hintAvailability: '3-stage guided hints available',
    iconName: 'debug',
    howToPlay: [
      {
        stepNumber: 1,
        title: 'Check Ride Capacity',
        description: 'The rollercoaster line can hold a maximum of 4 visitors at once.',
      },
      {
        stepNumber: 2,
        title: 'Queue Fills to Capacity',
        description: 'Visitors [A, B, C, D] fill all 4 available queue slots (4 / 4).',
      },
      {
        stepNumber: 3,
        title: 'Visitor E Attempts to Enter',
        description: 'Visitor E arrives at the entrance. The queue is completely full.',
      },
      {
        stepNumber: 4,
        title: 'Detect QUEUE OVERFLOW',
        description: 'Identify that the queue cannot accept new riders and trigger the Overflow guard (+20 pts).',
      },
    ],
    previewData: {
      stackItems: ['A', 'B', 'C', 'D'],
      topPointer: 'D',
      popZoneLabel: 'RIDE CAPACITY FULL (4/4)',
    },
  },

  // ==========================================
  // LEVEL 4: EMPTY STATION
  // ==========================================
  {
    id: 4,
    levelNumber: 4,
    title: 'LEVEL 4: EMPTY STATION',
    shortTitle: 'Empty Station',
    subtitle: 'Drain queue to empty: Detect QUEUE UNDERFLOW exception',
    tagline: 'When the line is EMPTY, attempting DEQUEUE triggers 🚨 QUEUE UNDERFLOW!',
    description: 'All visitors have boarded the ride. Learn what happens when DEQUEUE is called on an empty queue.',
    detailedObjective:
      'Start with [A, B] waiting at the station. Perform DEQUEUE on A, then DEQUEUE on B until the station is EMPTY. Attempt another DEQUEUE to discover and diagnose the QUEUE UNDERFLOW error condition.',
    difficulty: 'Intermediate',
    duration: '3–4 min',
    xpReward: 75,
    skills: ['QUEUE UNDERFLOW', 'isEmpty() Check', 'Empty Station State', 'Defensive Guardrails'],
    interactionType: 'Drain queue & underflow exception test',
    hintAvailability: '3-stage guided hints available',
    iconName: 'build',
    howToPlay: [
      {
        stepNumber: 1,
        title: 'Start with 2 Visitors',
        description: 'The station line begins with [A, B] waiting to board.',
      },
      {
        stepNumber: 2,
        title: 'Serve A and B',
        description: 'DEQUEUE Customer A, then DEQUEUE Customer B. The queue is now EMPTY (0 / 4).',
      },
      {
        stepNumber: 3,
        title: 'Attempt Another DEQUEUE',
        description: 'The ride operator tries to call DEQUEUE when no riders are present.',
      },
      {
        stepNumber: 4,
        title: 'Catch QUEUE UNDERFLOW',
        description: 'Trigger and understand the Underflow exception (+20 pts) preventing invalid memory access.',
      },
    ],
    previewData: {
      stackItems: ['A', 'B'],
      topPointer: 'A',
      popZoneLabel: 'DRAIN & CATCH UNDERFLOW',
    },
  },

  // ==========================================
  // LEVEL 5: PREDICT THE FUTURE
  // ==========================================
  {
    id: 5,
    levelNumber: 5,
    title: 'LEVEL 5: PREDICT THE FUTURE',
    shortTitle: 'Predict the Future',
    subtitle: 'Trace sequence of Enqueue/Dequeue operations: Predict who gets removed',
    tagline: 'Trace the sequence: ENQUEUE A, B, DEQUEUE, ENQUEUE C, DEQUEUE. Who is removed?',
    description: 'Mental queue execution! Trace interleaved arrivals and departures to predict who leaves the queue and who remains.',
    detailedObjective:
      'Given an operations sequence: ENQUEUE A → ENQUEUE B → DEQUEUE → ENQUEUE C → DEQUEUE. Predict the order in which riders exit (A → B) and who remains in the queue (C). Earn bonus points for accurate sequence forecasting.',
    difficulty: 'Advanced',
    duration: '3–4 min',
    xpReward: 100,
    skills: ['Sequence Prediction', 'Mental Tracing', 'Compound Operations', 'FIFO Verification'],
    interactionType: 'Predictive sequence simulation & verification',
    hintAvailability: '3-stage guided hints available',
    iconName: 'predict',
    howToPlay: [
      {
        stepNumber: 1,
        title: 'Read the Operations Sequence',
        description: 'Carefully inspect: ENQUEUE A, ENQUEUE B, DEQUEUE, ENQUEUE C, DEQUEUE.',
      },
      {
        stepNumber: 2,
        title: 'Simulate Step-by-Step',
        description: 'Trace the FRONT and REAR pointers mentally at each arrival and departure.',
      },
      {
        stepNumber: 3,
        title: 'Predict Who is Removed',
        description: 'Answer: Customer A leaves first, then Customer B leaves next (A → B).',
      },
      {
        stepNumber: 4,
        title: 'Earn Bonus Points',
        description: 'Collect prediction bonus points and verify your answer interactively!',
      },
    ],
    previewData: {
      operationsTrace: [
        'ENQUEUE A → [A]',
        'ENQUEUE B → [A, B]',
        'DEQUEUE   → A removed, [B] remains',
        'ENQUEUE C → [B, C]',
        'DEQUEUE   → B removed, [C] remains',
      ],
      stackItems: ['C'],
      topPointer: 'C',
    },
  },

  // ==========================================
  // LEVEL 6: EMERGENCY CHALLENGE
  // ==========================================
  {
    id: 6,
    levelNumber: 6,
    title: 'LEVEL 6: EMERGENCY CHALLENGE',
    shortTitle: 'Emergency Challenge',
    subtitle: 'Multi-Queue Management: 🚑 Fast Pass, 🎢 Ride Queue & 🍔 Food Queue',
    tagline: 'Manage 3 separate queues simultaneously: Fast Pass / Emergency, Ride, and Food!',
    description: 'Direct park guests to their intended queues and manage multiple lines independently under strict FIFO rules.',
    detailedObjective:
      'Amusement Park Multi-Queue Hub: Manage 3 separate queues simultaneously: 🚑 Emergency / Fast Pass, 🎢 Rollercoaster Ride, and 🍔 Food Queue. Route incoming visitors to their desired queues and serve each queue independently in FIFO order.',
    difficulty: 'Advanced',
    duration: '3–5 min',
    xpReward: 120,
    skills: ['Multi-Queue Architecture', 'Routing & Dispatch', 'Independent FIFO Invariants', 'Queue Separation'],
    interactionType: 'Interactive Multi-Queue Dispatch & Service',
    hintAvailability: '3-stage guided hints available',
    iconName: 'speed',
    howToPlay: [
      {
        stepNumber: 1,
        title: 'Visitors Have Different Destinations',
        description: 'Guests arrive looking for the Rollercoaster, the Food Bar, or Emergency Fast Pass.',
      },
      {
        stepNumber: 2,
        title: 'Route to the Correct Queue',
        description: 'Enqueue each guest into their designated line without cross-contaminating queues.',
      },
      {
        stepNumber: 3,
        title: 'Serve Each Line in FIFO Order',
        description: 'DEQUEUE from each queue independently: the first guest in that specific queue is served first!',
      },
      {
        stepNumber: 4,
        title: 'Become FIFO Champion',
        description: 'Demonstrate that multiple queues can coexist independently in real-world systems!',
      },
    ],
    previewData: {
      stackItems: ['Ride: A, C', 'Food: B', 'Emergency: D'],
      topPointer: 'Ride: A',
      popZoneLabel: 'MULTI-QUEUE HUB',
    },
  },

  // ==========================================
  // LEVEL 7: RING COASTER (CIRCULAR QUEUE)
  // ==========================================
  {
    id: 7,
    levelNumber: 7,
    title: 'LEVEL 7: RING COASTER',
    shortTitle: 'Ring Coaster',
    subtitle: 'Circular Queue: Reuse empty boarding seats using modulo arithmetic',
    tagline: 'Wrap around using rear = (rear + 1) % MAX to recycle vacated seats at the front!',
    description: 'Continuous circular ride boarding! Overcome false overflow by treating queue seats as a continuous ring buffer.',
    detailedObjective:
      'Understand how circular queues solve the false overflow problem by treating arrays as rings. Compute rear = (rear + 1) % MAX to recycle vacant front slots.',
    difficulty: 'Advanced',
    duration: '3–4 min',
    xpReward: 120,
    skills: ['Circular Buffer', 'Modulo Arithmetic', 'False Overflow Prevention', 'Sentinel Full Condition'],
    interactionType: 'Ring buffer wraparound & modulo calculation',
    hintAvailability: '3-stage guided hints available',
    iconName: 'build',
    howToPlay: [
      {
        stepNumber: 1,
        title: 'Spot Vacant Front Seats',
        description: 'Observe empty seats [0, 1] after earlier riders depart, while rear is at index 4.',
      },
      {
        stepNumber: 2,
        title: 'Apply Modulo Arithmetic',
        description: 'Calculate (rear + 1) % 5 = (4 + 1) % 5 = 0 to wrap around to index 0.',
      },
      {
        stepNumber: 3,
        title: 'Enqueue at Index 0',
        description: 'Seat rider F directly into the recycled seat [0].',
      },
      {
        stepNumber: 4,
        title: 'Master Ring Coaster Rule',
        description: 'Learn why circular queues eliminate wasteful element shifting.',
      },
    ],
    previewData: {
      stackItems: ['C', 'D', 'E', 'F'],
      topPointer: 'F',
      popZoneLabel: 'WRAPAROUND REAR → [0]',
    },
  },

  // ==========================================
  // LEVEL 8: VIP FASTPASS (PRIORITY QUEUE)
  // ==========================================
  {
    id: 8,
    levelNumber: 8,
    title: 'LEVEL 8: VIP FASTPASS',
    shortTitle: 'VIP FastPass',
    subtitle: 'Priority Queue: Dispatch riders based on ticket priority over arrival time',
    tagline: 'Priority 1 (VIP / Emergency) jumps to FRONT ahead of Priority 2 & 3!',
    description: 'Priority Queue mechanics: Riders hold VIP tickets or medical priority that determine boarding precedence ahead of pure FIFO.',
    detailedObjective:
      'Learn how priority queues diverge from pure arrival-time FIFO in amusement park FastPass systems, prioritizing VIP and medical passes ahead of standard admission.',
    difficulty: 'Advanced',
    duration: '3–5 min',
    xpReward: 120,
    skills: ['Priority Queue', 'VIP Precedence', 'Heap Fundamentals', 'Urgency Sorting'],
    interactionType: 'Interactive triage sorting & VIP priority dequeue',
    hintAvailability: '3-stage guided hints available',
    iconName: 'predict',
    howToPlay: [
      {
        stepNumber: 1,
        title: 'Inspect Guest Priority Tiers',
        description: 'Guests hold Priority 1 (VIP / Emergency), Priority 2 (Express Pass), or Priority 3 (Standard).',
      },
      {
        stepNumber: 2,
        title: 'VIP Guest Cuts to Front',
        description: 'Priority 1 rider Alex cuts ahead of earlier arrivals to become the FRONT.',
      },
      {
        stepNumber: 3,
        title: 'Board Highest Priority First',
        description: 'Execute DEQUEUE to board Priority 1 riders before general admission.',
      },
      {
        stepNumber: 4,
        title: 'Complete Queue Master Certification',
        description: 'Earn the FIFO Champion certification across all 8 challenge arenas!',
      },
    ],
    previewData: {
      stackItems: ['Alex (P1 VIP)', 'Chris (P2 Express)', 'Bella (P3 Standard)'],
      topPointer: 'Alex (P1 VIP)',
      popZoneLabel: 'PRIORITY 1 DISPATCH',
    },
  },

  // ==========================================
  // LEVEL 9: DOUBLE-ENDED QUEUE (DEQUE)
  // ==========================================
  {
    id: 9,
    levelNumber: 9,
    title: 'DOUBLE-ENDED QUEUE (DEQUE)',
    shortTitle: 'Double-Ended Deque',
    subtitle: 'Bi-Directional Insertion & Deletion',
    tagline: 'Insert and remove from BOTH ends: front and rear.',
    description: 'Master Deque (Double-Ended Queue): insert and delete from BOTH the front and rear ends.',
    detailedObjective:
      'Understand the 4 fundamental Deque operations: insertFront, insertRear, deleteFront, deleteRear. Discover why Deques can simulate both Stacks and Queues.',
    difficulty: 'Advanced',
    duration: '4–5 min',
    xpReward: 150,
    skills: ['Double-Ended Queue', 'Bi-Directional IO', 'insertFront / insertRear', 'deleteFront / deleteRear'],
    interactionType: 'Dual-terminal insertion and deletion',
    hintAvailability: '3-stage guided hints available',
    iconName: 'speed',
    howToPlay: [
      {
        stepNumber: 1,
        title: 'Examine Both Terminals',
        description: 'Notice that both the FRONT and REAR are accessible for operations.',
      },
      {
        stepNumber: 2,
        title: 'Delete from Rear',
        description: 'Execute deleteRear() to remove element C without disturbing the front.',
      },
      {
        stepNumber: 3,
        title: 'Insert at Front',
        description: 'Execute insertFront(Z) to prepend survivor Z directly to the head.',
      },
      {
        stepNumber: 4,
        title: 'Complete Master Curriculum',
        description: 'Review the full taxonomy of linear queues, ring buffers, priority queues, and deques.',
      },
    ],
    previewData: {
      stackItems: ['Z', 'A', 'B'],
      topPointer: 'Z',
      popZoneLabel: 'BI-DIRECTIONAL DEQUE',
    },
  },
];
