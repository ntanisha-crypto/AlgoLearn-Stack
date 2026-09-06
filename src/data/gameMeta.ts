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
  // LEVEL 1: QUEUE BASICS
  // ==========================================
  {
    id: 1,
    levelNumber: 1,
    title: 'QUEUE BASICS',
    shortTitle: 'Queue Basics',
    subtitle: 'Understand FIFO, FRONT, REAR & SIZE',
    tagline: 'New elements always join at the REAR of the queue.',
    description: 'Understand FIFO, FRONT, REAR, and SIZE. Perform ENQUEUE operations to add survivors.',
    detailedObjective:
      'Students see FRONT → A → B → C ← REAR with Queue Size: 3 / 5. Learn FIFO (First In, First Out), FRONT (first element), REAR (last element), ENQUEUE (add at REAR), and SIZE (number of elements).',
    difficulty: 'Beginner',
    duration: '2–3 min',
    xpReward: 50,
    skills: ['FIFO Principle', 'FRONT Pointer', 'REAR Pointer', 'ENQUEUE Operation', 'Queue Size'],
    interactionType: 'ENQUEUE survivors at REAR',
    hintAvailability: '3-stage guided hints available',
    iconName: 'push',
    howToPlay: [
      {
        stepNumber: 1,
        title: 'Inspect the Queue',
        description: 'Observe FRONT → A → B → C ← REAR and notice the current Queue Size (3 / 5).',
      },
      {
        stepNumber: 2,
        title: 'Identify the REAR',
        description: 'New elements always enter at the REAR pointer of the queue.',
      },
      {
        stepNumber: 3,
        title: 'Perform ENQUEUE',
        description: 'Select survivor D and enqueue them at the REAR of the line.',
      },
      {
        stepNumber: 4,
        title: 'Learn the WHY',
        description: 'Discover why elements join at REAR and how Queue Size increases.',
      },
    ],
    previewData: {
      stackItems: ['A', 'B', 'C'],
      topPointer: 'C',
      popZoneLabel: 'ENQUEUE AT REAR',
    },
  },

  // ==========================================
  // LEVEL 2: ENQUEUE & DEQUEUE
  // ==========================================
  {
    id: 2,
    levelNumber: 2,
    title: 'ENQUEUE & DEQUEUE',
    shortTitle: 'Enqueue & Dequeue',
    subtitle: 'How Elements Enter and Leave a Queue',
    tagline: 'A entered first, so FIFO requires A to leave first.',
    description: 'Learn how elements enter and leave a queue. Identify who leaves the bunker first.',
    detailedObjective:
      'Starting queue: FRONT → A → B → C ← REAR. Determine who leaves first (A) and execute DEQUEUE. Master ENQUEUE → REAR, DEQUEUE → FRONT, and FIFO behavior.',
    difficulty: 'Beginner',
    duration: '2–3 min',
    xpReward: 50,
    skills: ['DEQUEUE Operation', 'FRONT Removal', 'FIFO Behavior', 'Queue Evolution'],
    interactionType: 'Interactive DEQUEUE & ENQUEUE',
    hintAvailability: '3-stage guided hints available',
    iconName: 'pop',
    howToPlay: [
      {
        stepNumber: 1,
        title: 'Analyze First-In Order',
        description: 'A entered before B and C, making A the element currently at the FRONT.',
      },
      {
        stepNumber: 2,
        title: 'Execute DEQUEUE',
        description: 'Click or drag survivor A to the Exit Zone to perform DEQUEUE.',
      },
      {
        stepNumber: 3,
        title: 'Observe FRONT Shift',
        description: 'After A leaves, B automatically advances to become the new FRONT.',
      },
      {
        stepNumber: 4,
        title: 'Verify FIFO Invariant',
        description: 'Review the educational explanation of First In, First Out processing.',
      },
    ],
    previewData: {
      stackItems: ['A', 'B', 'C'],
      topPointer: 'A',
      popZoneLabel: 'DEQUEUE FROM FRONT',
    },
  },

  // ==========================================
  // LEVEL 3: FRONT, REAR & PEEK
  // ==========================================
  {
    id: 3,
    levelNumber: 3,
    title: 'FRONT, REAR & PEEK',
    shortTitle: 'Front, Rear & Peek',
    subtitle: 'Identify Queue Positions & Understand PEEK',
    tagline: 'PEEK only looks at the first element. It does not change the queue.',
    description: 'Identify who is at FRONT, who is at REAR, and what PEEK returns without removing.',
    detailedObjective:
      'Given FRONT → B → C → D ← REAR, identify FRONT (B), REAR (D), and inspect PEEK (B). Understand that PEEK views the FRONT without removing it.',
    difficulty: 'Intermediate',
    duration: '3–4 min',
    xpReward: 75,
    skills: ['PEEK Operation', 'Non-Destructive Access', 'FRONT Identification', 'REAR Identification'],
    interactionType: 'Interactive Position Queries & PEEK inspection',
    hintAvailability: '3-stage guided hints available',
    iconName: 'predict',
    howToPlay: [
      {
        stepNumber: 1,
        title: 'Inspect Current Queue',
        description: 'Examine the active queue state: FRONT → B → C → D ← REAR.',
      },
      {
        stepNumber: 2,
        title: 'Identify Boundary Pointers',
        description: 'Confirm that B sits at FRONT (head) and D sits at REAR (tail).',
      },
      {
        stepNumber: 3,
        title: 'Click PEEK',
        description: 'Trigger the PEEK operation to preview the FRONT element.',
      },
      {
        stepNumber: 4,
        title: 'Confirm Queue Invariance',
        description: 'Notice that after PEEK, B remains in the queue completely unchanged.',
      },
    ],
    previewData: {
      stackItems: ['B', 'C', 'D'],
      topPointer: 'B',
      popZoneLabel: 'PEEK FRONT [B]',
    },
  },

  // ==========================================
  // LEVEL 4: CAPACITY & OVERFLOW
  // ==========================================
  {
    id: 4,
    levelNumber: 4,
    title: 'CAPACITY & OVERFLOW',
    shortTitle: 'Capacity & Overflow',
    subtitle: 'Bunker Capacity Limits & Guardrails',
    tagline: 'The queue has reached its maximum capacity (5/5). Detect OVERFLOW!',
    description: 'Understand fixed-size queues and overflow when a new survivor arrives at full capacity.',
    detailedObjective:
      'Bunker Capacity is 5 / 5 (FRONT → A → B → C → D → E ← REAR). A new survivor F arrives. Test whether F can enter and understand Queue Overflow.',
    difficulty: 'Intermediate',
    duration: '3–4 min',
    xpReward: 75,
    skills: ['Queue Capacity', 'Queue Overflow', 'Boundary Conditions', 'Defensive Guardrails'],
    interactionType: 'Overflow simulation & boundary decision',
    hintAvailability: '3-stage guided hints available',
    iconName: 'debug',
    howToPlay: [
      {
        stepNumber: 1,
        title: 'Check Bunker Capacity',
        description: 'Observe BUNKER CAPACITY: 5 / 5 with survivors A, B, C, D, and E.',
      },
      {
        stepNumber: 2,
        title: 'Survivor F Arrives',
        description: 'A new survivor F seeks shelter at the bunker entrance.',
      },
      {
        stepNumber: 3,
        title: 'Choose ENQUEUE or STOP',
        description: 'Decide whether F can legally enter or if insertion must be stopped.',
      },
      {
        stepNumber: 4,
        title: 'Trigger OVERFLOW Alert',
        description: 'Experience the red OVERFLOW warning and learn the defensive programming rule.',
      },
    ],
    previewData: {
      stackItems: ['A', 'B', 'C', 'D', 'E'],
      topPointer: 'E',
      popZoneLabel: 'CAPACITY FULL (5/5)',
    },
  },

  // ==========================================
  // LEVEL 5: EMPTY QUEUE & UNDERFLOW
  // ==========================================
  {
    id: 5,
    levelNumber: 5,
    title: 'EMPTY QUEUE & UNDERFLOW',
    shortTitle: 'Empty & Underflow',
    subtitle: 'Removing from an Empty Queue',
    tagline: 'There is no element at the FRONT to remove. Detect UNDERFLOW!',
    description: 'Understand what happens when removing from an empty queue after all survivors leave.',
    detailedObjective:
      'Start with FRONT → A → B ← REAR. Perform sequential Dequeues until QUEUE = EMPTY. Attempt another Dequeue to trigger and analyze UNDERFLOW.',
    difficulty: 'Advanced',
    duration: '3–5 min',
    xpReward: 100,
    skills: ['Queue Underflow', 'Empty State Guard', 'Boundary Checking', 'Pointer Resetting'],
    interactionType: 'Sequential Dequeue & Underflow probe',
    hintAvailability: '3-stage guided hints available',
    iconName: 'build',
    howToPlay: [
      {
        stepNumber: 1,
        title: 'Start with 2 Survivors',
        description: 'The bunker queue begins with FRONT → A → B ← REAR.',
      },
      {
        stepNumber: 2,
        title: 'Dequeue A and B',
        description: 'Remove survivor A, then remove survivor B, leaving the queue empty.',
      },
      {
        stepNumber: 3,
        title: 'Attempt Another Dequeue',
        description: 'Try to remove another element when Queue Size is 0.',
      },
      {
        stepNumber: 4,
        title: 'Trigger UNDERFLOW Alert',
        description: 'Review the UNDERFLOW exception and learn why guard checks are essential.',
      },
    ],
    previewData: {
      stackItems: ['A', 'B'],
      topPointer: 'A',
      popZoneLabel: 'DRAIN & TRIGGER UNDERFLOW',
    },
  },

  // ==========================================
  // LEVEL 6: QUEUE MASTER CHALLENGE
  // ==========================================
  {
    id: 6,
    levelNumber: 6,
    title: 'QUEUE MASTER CHALLENGE',
    shortTitle: 'Queue Master',
    subtitle: 'Timed 30-Second DSA Challenge',
    tagline: 'Execute Enqueue C, Enqueue D, Dequeue, Peek, Enqueue E, Dequeue before the buzzer!',
    description: 'Combine everything learned in a timed 30-second DSA challenge with real-time queue updates.',
    detailedObjective:
      'Starting queue FRONT → A → B ← REAR. Follow rapid operations trace under a 30s timer and achieve 100% FIFO Understanding to become a QUEUE MASTER!',
    difficulty: 'Advanced',
    duration: '30 sec',
    xpReward: 100,
    skills: ['Timed Execution', 'Rapid Queue Tracing', 'FIFO Mastery', 'Compound Operations'],
    interactionType: 'Rapid-fire timed action sequence',
    hintAvailability: '3-stage guided hints available',
    iconName: 'speed',
    howToPlay: [
      {
        stepNumber: 1,
        title: 'Start 30s Timer',
        description: 'Press Start when ready. The clock counts down from 30 seconds.',
      },
      {
        stepNumber: 2,
        title: 'Execute Required Operations',
        description: 'Perform ENQUEUE C, ENQUEUE D, DEQUEUE, PEEK, ENQUEUE E, and DEQUEUE.',
      },
      {
        stepNumber: 3,
        title: 'Watch Real-Time Updates',
        description: 'Observe the queue layout dynamically update after every single operation.',
      },
      {
        stepNumber: 4,
        title: 'Unlock Final Results',
        description: 'Receive the 100% FIFO Understanding scorecard and QUEUE MASTER badge.',
      },
    ],
    previewData: {
      operationsTrace: [
        'START: A → B',
        'ENQUEUE C → A → B → C',
        'ENQUEUE D → A → B → C → D',
        'DEQUEUE   → B → C → D',
        'PEEK      → FRONT = B',
        'ENQUEUE E → B → C → D → E',
        'DEQUEUE   → C → D → E',
      ],
      stackItems: ['C', 'D', 'E'],
      topPointer: 'C',
    },
  },

  // ==========================================
  // LEVEL 7: CIRCULAR QUEUE & WRAPAROUND
  // ==========================================
  {
    id: 7,
    levelNumber: 7,
    title: 'CIRCULAR QUEUE & WRAPAROUND',
    shortTitle: 'Circular Queue',
    subtitle: 'Ring Buffer & Modulo Arithmetic',
    tagline: 'rear = (rear + 1) % MAX reuses empty slots at the front of the array.',
    description: 'Solve false overflow using ring buffers and modulo arithmetic (rear = (rear + 1) % MAX).',
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
        title: 'Spot the False Overflow',
        description: 'Observe empty slots [0, 1] while rear sits at index 4.',
      },
      {
        stepNumber: 2,
        title: 'Apply Modulo Arithmetic',
        description: 'Calculate (rear + 1) % 5 = (4 + 1) % 5 = 0 to wrap around.',
      },
      {
        stepNumber: 3,
        title: 'Enqueue at Index 0',
        description: 'Insert survivor F directly into the recycled slot [0].',
      },
      {
        stepNumber: 4,
        title: 'Learn the Full Formula',
        description: 'Master (rear + 1) % capacity == front sentinel condition.',
      },
    ],
    previewData: {
      stackItems: ['C', 'D', 'E', 'F'],
      topPointer: 'F',
      popZoneLabel: 'WRAPAROUND REAR → [0]',
    },
  },

  // ==========================================
  // LEVEL 8: PRIORITY QUEUE & EMERGENCY TRIAGE
  // ==========================================
  {
    id: 8,
    levelNumber: 8,
    title: 'PRIORITY QUEUE & EMERGENCY TRIAGE',
    shortTitle: 'Priority Queue',
    subtitle: 'Priority-Based Dequeue Order',
    tagline: 'Highest priority (Priority 1) cuts to the FRONT regardless of arrival time.',
    description: 'Master Priority Queues where elements are dequeued based on urgency rather than arrival order.',
    detailedObjective:
      'Learn how priority queues diverge from pure arrival-time FIFO in emergency triage systems, prioritizing severe patients ahead of routine arrivals.',
    difficulty: 'Advanced',
    duration: '3–5 min',
    xpReward: 120,
    skills: ['Priority Queue', 'Triage Sorting', 'Heap Fundamentals', 'Urgency Precedence'],
    interactionType: 'Interactive triage sorting & emergency priority dequeue',
    hintAvailability: '3-stage guided hints available',
    iconName: 'predict',
    howToPlay: [
      {
        stepNumber: 1,
        title: 'Analyze Patient Priorities',
        description: 'Identify patient urgency: Priority 1 (Critical) vs Priority 2 (Urgent) vs Priority 3 (Routine).',
      },
      {
        stepNumber: 2,
        title: 'Observe Front Precedence',
        description: 'Critical patient A cuts ahead of earlier arrivals to become the FRONT.',
      },
      {
        stepNumber: 3,
        title: 'Dispatch Critical Patient',
        description: 'Execute Dequeue to process Priority 1 first.',
      },
      {
        stepNumber: 4,
        title: 'Observe Next In Line',
        description: 'Watch Priority 2 advance to FRONT after Priority 1 clears.',
      },
    ],
    previewData: {
      stackItems: ['A (P1)', 'C (P2)', 'B (P3)'],
      topPointer: 'A (P1)',
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
