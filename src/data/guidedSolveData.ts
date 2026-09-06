import { GuidedSolveStep } from '../types';

/**
 * =========================================================================
 * MASTER GUIDED SOLVE CURRICULUM (10 CORE QUEUE DSA STEPS)
 * =========================================================================
 * 1. What is a Queue? (Linear Data Structure, FIFO, First In First Out)
 * 2. Understand FRONT & REAR Pointers
 * 3. Guided ENQUEUE (Adding to REAR & Incrementing Pointer)
 * 4. Guided DEQUEUE (Removing from FRONT & FIFO Order)
 * 5. Guided PEEK (Inspecting FRONT without Removal)
 * 6. Guided isEmpty (Empty Queue Check, Size = 0)
 * 7. Guided isFull (Full Queue Check, Size = capacity)
 * 8. Guided OVERFLOW (Handling Enqueue on Full Queue)
 * 9. Guided UNDERFLOW (Handling Dequeue on Empty Queue)
 * 10. Circular Queue & Modulo Wraparound ((rear + 1) % MAX)
 */
export const MASTER_GUIDED_STEPS: GuidedSolveStep[] = [
  // ─── STEP 1: WHAT IS A QUEUE? ───
  {
    stepNumber: 1,
    totalSteps: 10,
    title: 'WHAT IS A QUEUE?',
    subtitle: 'Linear Data Structure & FIFO Principle',
    conceptBadge: 'FIFO • FIRST IN, FIRST OUT',
    stackState: {
      items: ['A', 'B', 'C'],
      capacity: 5,
      topIndex: 2,
      highlightTop: false,
      highlightItem: 'A',
    },
    explanation:
      'A Queue is a LINEAR DATA STRUCTURE that follows FIFO (First In, First Out). The very first element that joined the line is always the first one served and removed.',
    questionPrompt: 'Survivors arrived in sequence: A (1st) → B (2nd) → C (3rd). Who will exit first?',
    interactionType: 'info-next',
    hints: [
      'Look at the FRONT of the queue on the left.',
      'Remember: Queue strictly follows FIFO (First In, First Out).',
      'The first survivor to arrive (A) is at the FRONT and will exit first.',
    ],
    correctFeedback: {
      title: '✓ FIFO Principle Mastered',
      explanation: 'Survivor [A] arrived first, sits at the FRONT, and exits first.',
      actionResult: 'FIFO: A arrived 1st (FRONT), B arrived 2nd, C arrived 3rd (REAR).',
    },
  },

  // ─── STEP 2: UNDERSTAND FRONT & REAR ───
  {
    stepNumber: 2,
    totalSteps: 10,
    title: 'FRONT & REAR POINTERS',
    subtitle: 'Two Pointers for Dual-End Management',
    conceptBadge: 'FRONT = [0] • REAR = [2]',
    stackState: {
      items: ['A', 'B', 'C'],
      capacity: 5,
      topIndex: 2,
      highlightTop: true,
    },
    explanation:
      'Unlike a Stack which uses only one TOP pointer, a Queue uses TWO boundary pointers: FRONT points to the exit head (removals), and REAR points to the entrance tail (insertions).',
    questionPrompt: 'What is the role of the FRONT pointer in a Queue?',
    interactionType: 'select-choice',
    choices: [
      {
        id: 'choice-front-role',
        label: 'FRONT identifies the earliest arrival that will be removed by the next DEQUEUE.',
        isCorrect: true,
        feedback: 'Correct! FRONT always points to the next element eligible for exit.',
      },
      {
        id: 'choice-front-insert',
        label: 'FRONT is where brand new elements are added to the queue.',
        isCorrect: false,
        feedback: 'Incorrect! New elements always join at the REAR, not the FRONT.',
      },
      {
        id: 'choice-front-random',
        label: 'FRONT points to a random middle survivor.',
        isCorrect: false,
        feedback: 'Incorrect! Queues do not allow random access. FRONT is strictly index 0.',
      },
    ],
    hints: [
      'FRONT = Exit door for Dequeue.',
      'REAR = Entrance door for Enqueue.',
      'Arrivals enter at REAR, departures leave from FRONT.',
    ],
    correctFeedback: {
      title: '✓ Boundary Pointers Confirmed',
      explanation: 'FRONT = [A] at index 0 (exit). REAR = [C] at index 2 (entry).',
      actionResult: 'FRONT points to next dequeue. REAR points to latest enqueue.',
    },
  },

  // ─── STEP 3: GUIDED ENQUEUE ───
  {
    stepNumber: 3,
    totalSteps: 10,
    title: 'GUIDED ENQUEUE OPERATION',
    subtitle: 'Adding New Arrivals at the REAR',
    conceptBadge: 'ENQUEUE → REAR POINTER',
    stackState: {
      items: ['A', 'B', 'C'],
      capacity: 5,
      topIndex: 2,
    },
    explanation:
      'ENQUEUE adds a new element to the REAR of the queue. REAR pointer advances, and Queue Size increases by 1.',
    questionPrompt: 'Execute: ENQUEUE survivor [D]. Click [ ENQUEUE D ].',
    interactionType: 'click-push',
    pushValue: 'D',
    postActionStack: ['A', 'B', 'C', 'D'],
    hints: [
      'Click [ ENQUEUE D ] below.',
      'Watch survivor D join behind C at the REAR.',
      'Queue Size will increase from 3 to 4 out of 5.',
    ],
    correctFeedback: {
      title: '✓ Survivor D Enqueued!',
      explanation: 'D joined at the REAR. Current queue: FRONT → A → B → C → D ← REAR.',
      actionResult: 'Enqueue(D) succeeded. Size is now 4 / 5.',
    },
  },

  // ─── STEP 4: GUIDED DEQUEUE ───
  {
    stepNumber: 4,
    totalSteps: 10,
    title: 'GUIDED DEQUEUE OPERATION',
    subtitle: 'Removing Earliest Arrival from FRONT',
    conceptBadge: 'DEQUEUE → FRONT POINTER',
    stackState: {
      items: ['A', 'B', 'C', 'D'],
      capacity: 5,
      topIndex: 3,
      highlightItem: 'A',
    },
    explanation:
      'DEQUEUE removes the element at the FRONT pointer. Because A arrived before everyone else, FIFO mandates that A leaves first.',
    questionPrompt: 'Execute: DEQUEUE to release survivor [A] from the FRONT.',
    interactionType: 'click-pop',
    popExpectedValue: 'A',
    postActionStack: ['B', 'C', 'D'],
    hints: [
      'Click [ DEQUEUE FRONT ] below.',
      'Notice how A exits and B automatically advances to become the new FRONT.',
      'Queue Size decreases from 4 to 3.',
    ],
    correctFeedback: {
      title: '✓ Survivor A Dequeued!',
      explanation: 'A left the bunker. B is now the new FRONT element.',
      actionResult: 'Dequeue() returned A. Remaining: FRONT → B → C → D ← REAR.',
    },
  },

  // ─── STEP 5: GUIDED PEEK ───
  {
    stepNumber: 5,
    totalSteps: 10,
    title: 'GUIDED PEEK (INSPECT FRONT)',
    subtitle: 'Non-Destructive Front Access',
    conceptBadge: 'PEEK = NON-DESTRUCTIVE',
    stackState: {
      items: ['B', 'C', 'D'],
      capacity: 5,
      topIndex: 2,
    },
    explanation:
      'PEEK (or FRONT) allows inspecting the earliest element without removing it. Queue Size and all element positions remain completely unchanged.',
    questionPrompt: 'Click [ PEEK FRONT ] to inspect who is next in line.',
    interactionType: 'click-peek',
    peekExpectedValue: 'B',
    hints: [
      'Click [ PEEK FRONT ] below.',
      'Peek looks at the FRONT without deleting.',
      'The queue will remain [B, C, D] with Size 3 / 5.',
    ],
    correctFeedback: {
      title: '✓ FRONT = B Inspected!',
      explanation: 'PEEK returned B. The queue was not modified.',
      actionResult: 'Peek() = B. Queue remains: FRONT → B → C → D ← REAR.',
    },
  },

  // ─── STEP 6: GUIDED isEmpty ───
  {
    stepNumber: 6,
    totalSteps: 10,
    title: 'GUIDED isEmpty() CHECK',
    subtitle: 'Validating Empty State Guardrail',
    conceptBadge: 'isEmpty() • SIZE == 0',
    stackState: {
      items: [],
      capacity: 5,
      topIndex: -1,
    },
    explanation:
      'isEmpty() returns TRUE when Queue Size is 0. Production software must check isEmpty() before dequeuing to prevent crashes.',
    questionPrompt: 'The queue has 0 survivors. What does isEmpty() return?',
    interactionType: 'select-choice',
    choices: [
      {
        id: 'choice-empty-true',
        label: 'TRUE — Queue Size is 0, no survivors are in line.',
        isCorrect: true,
        feedback: 'Correct! When size == 0, isEmpty() evaluates to true.',
      },
      {
        id: 'choice-empty-false',
        label: 'FALSE — The queue always has ghost elements.',
        isCorrect: false,
        feedback: 'Incorrect! When size == 0, the queue is completely empty.',
      },
    ],
    hints: [
      'Size = 0 out of 5 capacity.',
      'When size == 0, isEmpty() is TRUE.',
      'This guard check prevents Queue Underflow.',
    ],
    correctFeedback: {
      title: '✓ Empty Condition Verified',
      explanation: 'Queue is empty (0 / 5). Calling Dequeue now would cause Underflow.',
      actionResult: 'isEmpty() == TRUE (Size = 0).',
    },
  },

  // ─── STEP 7: GUIDED isFull ───
  {
    stepNumber: 7,
    totalSteps: 10,
    title: 'GUIDED isFull() CHECK',
    subtitle: 'Validating Maximum Capacity',
    conceptBadge: 'isFull() • SIZE == CAPACITY',
    stackState: {
      items: ['A', 'B', 'C', 'D', 'E'],
      capacity: 5,
      topIndex: 4,
    },
    explanation:
      'In fixed-size array queues, isFull() returns TRUE when Queue Size equals Capacity (5 / 5). No further insertions can take place without overflow.',
    questionPrompt: 'All 5 bunker slots are occupied. What does isFull() evaluate to?',
    interactionType: 'select-choice',
    choices: [
      {
        id: 'choice-full-true',
        label: 'TRUE — Queue Size (5) == Capacity (5). The queue is at maximum capacity.',
        isCorrect: true,
        feedback: 'Correct! All array slots are occupied.',
      },
      {
        id: 'choice-full-false',
        label: 'FALSE — Queues can infinitely expand in fixed memory.',
        isCorrect: false,
        feedback: 'Incorrect! Fixed-size array queues have a strict maximum capacity.',
      },
    ],
    hints: [
      'Notice all 5 slots [0..4] are filled.',
      'Size (5) == Capacity (5).',
      'This guard check prevents Queue Overflow.',
    ],
    correctFeedback: {
      title: '✓ Full Capacity Verified',
      explanation: 'Bunker is full (5 / 5). Enqueuing another item will trigger an Overflow error.',
      actionResult: 'isFull() == TRUE (5 / 5 slots filled).',
    },
  },

  // ─── STEP 8: GUIDED OVERFLOW ───
  {
    stepNumber: 8,
    totalSteps: 10,
    title: 'GUIDED QUEUE OVERFLOW',
    subtitle: 'Attempting to Enqueue into a Full Queue',
    conceptBadge: '🚨 OVERFLOW EXCEPTION',
    stackState: {
      items: ['A', 'B', 'C', 'D', 'E'],
      capacity: 5,
      topIndex: 4,
    },
    explanation:
      'QUEUE OVERFLOW occurs when attempting to ENQUEUE an element into a queue that has already reached its maximum capacity.',
    questionPrompt: 'Click [ TRIGGER OVERFLOW ] to test the defensive guardrail.',
    interactionType: 'overflow-action',
    hints: [
      'Click [ TRIGGER OVERFLOW ] below.',
      'Observe the red alert.',
      'In code: if (isFull()) throw new QueueOverflowException();',
    ],
    correctFeedback: {
      title: '🚨 OVERFLOW EXCEPTION CAUGHT!',
      explanation: 'Insertion of survivor F was rejected because the queue is full (5 / 5).',
      actionResult: 'QueueOverflowException caught safely.',
    },
  },

  // ─── STEP 9: GUIDED UNDERFLOW ───
  {
    stepNumber: 9,
    totalSteps: 10,
    title: 'GUIDED QUEUE UNDERFLOW',
    subtitle: 'Attempting to Dequeue from an Empty Queue',
    conceptBadge: '🚨 UNDERFLOW EXCEPTION',
    stackState: {
      items: [],
      capacity: 5,
      topIndex: -1,
    },
    explanation:
      'QUEUE UNDERFLOW occurs when attempting to DEQUEUE or PEEK when Queue Size is 0. There is no front element to remove.',
    questionPrompt: 'Click [ TRIGGER UNDERFLOW ] to observe the underflow guard.',
    interactionType: 'underflow-action',
    hints: [
      'Click [ TRIGGER UNDERFLOW ] below.',
      'Observe the red alert.',
      'In code: if (isEmpty()) throw new QueueUnderflowException();',
    ],
    correctFeedback: {
      title: '🚨 UNDERFLOW EXCEPTION CAUGHT!',
      explanation: 'Cannot dequeue from an empty queue. Defensive guard prevented crash.',
      actionResult: 'QueueUnderflowException caught safely.',
    },
  },

  // ─── STEP 10: CIRCULAR QUEUE WRAPAROUND ───
  {
    stepNumber: 10,
    totalSteps: 10,
    title: 'CIRCULAR QUEUE & MODULO WRAPAROUND',
    subtitle: 'Recycling Vacant Front Slots',
    conceptBadge: 'MODULO: (rear + 1) % MAX',
    stackState: {
      items: ['C', 'D', 'E'],
      capacity: 5,
      topIndex: 2,
    },
    explanation:
      'When front items are dequeued, slots [0] and [1] become free. A Circular Queue connects index 4 back to index 0 using modulo arithmetic: rear = (rear + 1) % MAX.',
    questionPrompt: 'Rear is at index 4 with capacity 5. What is (4 + 1) % 5?',
    interactionType: 'select-choice',
    choices: [
      {
        id: 'choice-mod-0',
        label: 'Index 0 — The rear wraps around to the beginning of the array!',
        isCorrect: true,
        feedback: 'Correct! (4 + 1) % 5 = 0, recycling the vacant first slot.',
      },
      {
        id: 'choice-mod-5',
        label: 'Index 5 — An illegal out-of-bounds index.',
        isCorrect: false,
        feedback: 'Incorrect! The modulo operator % wraps 5 to 0.',
      },
    ],
    hints: [
      '5 divided by 5 leaves a remainder of 0.',
      'Modulo operator % computes the remainder.',
      'This allows memory reuse without moving all elements!',
    ],
    correctFeedback: {
      title: '✓ Circular Queue Wraparound Mastered!',
      explanation: 'Index 4 wraps back to index 0. False overflow is eliminated!',
      actionResult: '(4 + 1) % 5 = 0. Rear wraps to slot [0].',
    },
  },
];

/**
 * =========================================================================
 * LEVEL-SPECIFIC GUIDED SOLVE CURRICULUM (LEVELS 1 TO 9)
 * =========================================================================
 */
export const LEVEL_GUIDED_STEPS: Record<number, GuidedSolveStep[]> = {
  // ─── LEVEL 1: QUEUE BASICS ───
  1: [
    {
      stepNumber: 1,
      totalSteps: 3,
      title: 'LEVEL 1: QUEUE BASICS',
      subtitle: 'Identify FIFO & Boundary Pointers',
      conceptBadge: 'FIFO QUEUE',
      stackState: {
        items: ['A', 'B', 'C'],
        capacity: 5,
        topIndex: 2,
      },
      explanation:
        'Level 1 introduces the Queue: survivors wait in line from FRONT to REAR. FRONT is survivor A, REAR is survivor C. Size is 3 / 5.',
      questionPrompt: 'Click [ ENQUEUE D ] to add survivor D to the REAR.',
      interactionType: 'click-push',
      pushValue: 'D',
      postActionStack: ['A', 'B', 'C', 'D'],
      hints: [
        'Click [ ENQUEUE D ] below.',
        'Watch D join behind C at the REAR.',
        'Queue Size becomes 4 / 5.',
      ],
      correctFeedback: {
        title: '✓ Enqueued D at REAR',
        explanation: 'D is now at the REAR pointer. Queue size is 4 / 5.',
        actionResult: 'FRONT → A → B → C → D ← REAR.',
      },
    },
    {
      stepNumber: 2,
      totalSteps: 3,
      title: 'LEVEL 1 STEP 2: VERIFY FRONT',
      subtitle: 'Who Exits First?',
      conceptBadge: 'FRONT POINTER',
      stackState: {
        items: ['A', 'B', 'C', 'D'],
        capacity: 5,
        topIndex: 3,
      },
      explanation:
        'Even though D just joined, survivor A entered first and remains at the FRONT.',
      questionPrompt: 'Who will exit the bunker first when DEQUEUE is called?',
      interactionType: 'select-choice',
      choices: [
        {
          id: 'ans-a',
          label: 'Survivor [A] — Because A is at the FRONT (First In, First Out)',
          isCorrect: true,
          feedback: 'Correct! FIFO guarantees earliest arrival exits first.',
        },
        {
          id: 'ans-d',
          label: 'Survivor [D] — Because D is the newest arrival',
          isCorrect: false,
          feedback: 'Incorrect! That would be LIFO (Stack). Queues follow FIFO.',
        },
      ],
      hints: [
        'Check the FRONT pointer on the left.',
        'A arrived before B, C, and D.',
        'FIFO: First In, First Out.',
      ],
      correctFeedback: {
        title: '✓ FRONT Verified',
        explanation: 'Survivor A will exit first under FIFO rules.',
        actionResult: 'A is FRONT.',
      },
    },
    {
      stepNumber: 3,
      totalSteps: 3,
      title: 'LEVEL 1 STEP 3: READY TO PLAY',
      subtitle: 'Start Challenge Level 1',
      conceptBadge: 'READY',
      stackState: {
        items: ['A', 'B', 'C', 'D'],
        capacity: 5,
        topIndex: 3,
      },
      explanation:
        'You now understand FIFO, FRONT, REAR, and Queue Size. You are ready to ace Level 1!',
      questionPrompt: 'Click [ NEXT STEP ] to launch Level 1.',
      interactionType: 'info-next',
      hints: ['Click Next Step to begin.'],
      correctFeedback: {
        title: '✓ Ready to Play Level 1',
        explanation: 'Showcase your FIFO mastery in the arena.',
      },
    },
  ],

  // ─── LEVEL 2: ENQUEUE & DEQUEUE ───
  2: [
    {
      stepNumber: 1,
      totalSteps: 2,
      title: 'LEVEL 2: ENQUEUE & DEQUEUE',
      subtitle: 'How Items Enter and Leave',
      conceptBadge: 'DEQUEUE FRONT',
      stackState: {
        items: ['A', 'B', 'C'],
        capacity: 5,
        topIndex: 2,
      },
      explanation:
        'DEQUEUE removes the earliest arrival from the FRONT. Click [ DEQUEUE FRONT ] to release survivor A.',
      questionPrompt: 'Click [ DEQUEUE FRONT ] to process survivor A.',
      interactionType: 'click-pop',
      popExpectedValue: 'A',
      postActionStack: ['B', 'C'],
      hints: [
        'Click [ DEQUEUE FRONT ].',
        'Watch survivor A exit on the left.',
        'B becomes the new FRONT.',
      ],
      correctFeedback: {
        title: '✓ Survivor A Dequeued',
        explanation: 'A has exited. B is promoted to FRONT.',
        actionResult: 'Queue updated: FRONT → B → C ← REAR.',
      },
    },
    {
      stepNumber: 2,
      totalSteps: 2,
      title: 'LEVEL 2 STEP 2: READY TO PLAY',
      subtitle: 'Apply Enqueue & Dequeue',
      conceptBadge: 'READY',
      stackState: {
        items: ['B', 'C'],
        capacity: 5,
        topIndex: 1,
      },
      explanation:
        'Master the entry at REAR and departure at FRONT to complete Level 2.',
      questionPrompt: 'Click [ NEXT STEP ] to launch Level 2.',
      interactionType: 'info-next',
      hints: ['Click Next Step.'],
      correctFeedback: {
        title: '✓ Ready to Play Level 2',
        explanation: 'Launch the arena and execute Enqueue & Dequeue operations.',
      },
    },
  ],

  // ─── LEVEL 3: FRONT, REAR & PEEK ───
  3: [
    {
      stepNumber: 1,
      totalSteps: 2,
      title: 'LEVEL 3: PEEK OPERATION',
      subtitle: 'Inspecting Without Modifying',
      conceptBadge: 'PEEK OPERATION',
      stackState: {
        items: ['B', 'C', 'D'],
        capacity: 5,
        topIndex: 2,
      },
      explanation:
        'PEEK allows inspecting the FRONT survivor [B] without removing them. Queue Size remains 3 / 5.',
      questionPrompt: 'Click [ PEEK FRONT ] to inspect survivor B.',
      interactionType: 'click-peek',
      peekExpectedValue: 'B',
      hints: [
        'Click [ PEEK FRONT ].',
        'Notice the queue does not lose any items.',
      ],
      correctFeedback: {
        title: '✓ PEEK Returned B',
        explanation: 'FRONT is B. Queue remains completely unchanged.',
        actionResult: 'FRONT → B → C → D ← REAR.',
      },
    },
    {
      stepNumber: 2,
      totalSteps: 2,
      title: 'LEVEL 3 STEP 2: READY TO PLAY',
      subtitle: 'Master Position Identification',
      conceptBadge: 'READY',
      stackState: {
        items: ['B', 'C', 'D'],
        capacity: 5,
        topIndex: 2,
      },
      explanation:
        'In Level 3, identify FRONT (B), REAR (D), and inspect with PEEK.',
      questionPrompt: 'Click [ NEXT STEP ] to launch Level 3.',
      interactionType: 'info-next',
      hints: ['Click Next Step.'],
      correctFeedback: {
        title: '✓ Ready to Play Level 3',
        explanation: 'Launch Level 3 and test your peek and pointer skills.',
      },
    },
  ],

  // ─── LEVEL 4: CAPACITY & OVERFLOW ───
  4: [
    {
      stepNumber: 1,
      totalSteps: 2,
      title: 'LEVEL 4: CAPACITY & OVERFLOW',
      subtitle: 'Detecting Full Queue Boundary',
      conceptBadge: 'OVERFLOW GUARD',
      stackState: {
        items: ['A', 'B', 'C', 'D', 'E'],
        capacity: 5,
        topIndex: 4,
      },
      explanation:
        'When all 5 slots are full, any new insertion triggers Queue Overflow. Click [ TRIGGER OVERFLOW ] to test the guardrail.',
      questionPrompt: 'Click [ TRIGGER OVERFLOW ] to verify the safety guard.',
      interactionType: 'overflow-action',
      hints: [
        'Click [ TRIGGER OVERFLOW ].',
        'Observe the red safety alert.',
      ],
      correctFeedback: {
        title: '🚨 OVERFLOW CAUGHT',
        explanation: 'Bunker capacity is 5 / 5. Insertion stopped safely.',
      },
    },
    {
      stepNumber: 2,
      totalSteps: 2,
      title: 'LEVEL 4 STEP 2: READY TO PLAY',
      subtitle: 'Boundary Analysis',
      conceptBadge: 'READY',
      stackState: {
        items: ['A', 'B', 'C', 'D', 'E'],
        capacity: 5,
        topIndex: 4,
      },
      explanation:
        'Recognize when queues are full and test defensive guardrails.',
      questionPrompt: 'Click [ NEXT STEP ] to launch Level 4.',
      interactionType: 'info-next',
      hints: ['Click Next Step.'],
      correctFeedback: {
        title: '✓ Ready to Play Level 4',
        explanation: 'Launch Level 4 and master queue capacity constraints.',
      },
    },
  ],

  // ─── LEVEL 5: EMPTY QUEUE & UNDERFLOW ───
  5: [
    {
      stepNumber: 1,
      totalSteps: 2,
      title: 'LEVEL 5: UNDERFLOW EXCEPTION',
      subtitle: 'Removing from Empty Queue',
      conceptBadge: 'UNDERFLOW GUARD',
      stackState: {
        items: [],
        capacity: 5,
        topIndex: -1,
      },
      explanation:
        'The queue has 0 survivors. Attempting to Dequeue triggers Queue Underflow.',
      questionPrompt: 'Click [ TRIGGER UNDERFLOW ] to observe the underflow guard.',
      interactionType: 'underflow-action',
      hints: [
        'Click [ TRIGGER UNDERFLOW ].',
        'Notice you cannot remove from an empty queue.',
      ],
      correctFeedback: {
        title: '🚨 UNDERFLOW CAUGHT',
        explanation: 'Queue is empty (0 / 5). Removal stopped safely.',
      },
    },
    {
      stepNumber: 2,
      totalSteps: 2,
      title: 'LEVEL 5 STEP 2: READY TO PLAY',
      subtitle: 'Drain & Test Underflow',
      conceptBadge: 'READY',
      stackState: {
        items: [],
        capacity: 5,
        topIndex: -1,
      },
      explanation:
        'Drain the bunker queue and test underflow exceptions.',
      questionPrompt: 'Click [ NEXT STEP ] to launch Level 5.',
      interactionType: 'info-next',
      hints: ['Click Next Step.'],
      correctFeedback: {
        title: '✓ Ready to Play Level 5',
        explanation: 'Launch Level 5 and test underflow handling.',
      },
    },
  ],

  // ─── LEVEL 6: QUEUE MASTER CHALLENGE ───
  6: [
    {
      stepNumber: 1,
      totalSteps: 2,
      title: 'LEVEL 6: QUEUE MASTER TIMED ARENA',
      subtitle: '30-Second Rapid DSA Tracing',
      conceptBadge: 'TIMED ARENA',
      stackState: {
        items: ['A', 'B'],
        capacity: 5,
        topIndex: 1,
      },
      explanation:
        'Level 6 tests your speed: Execute Enqueue C, Enqueue D, Dequeue, Peek, Enqueue E, Dequeue before the 30-second timer runs out!',
      questionPrompt: 'Click [ NEXT STEP ] to launch the Queue Master challenge.',
      interactionType: 'info-next',
      hints: ['Follow each prompt swiftly to maintain combos.'],
      correctFeedback: {
        title: '✓ Arena Ready',
        explanation: 'Launch the arena and achieve a 100% score.',
      },
    },
    {
      stepNumber: 2,
      totalSteps: 2,
      title: 'LEVEL 6 STEP 2: READY TO PLAY',
      subtitle: 'Beat the Buzzer',
      conceptBadge: 'READY',
      stackState: {
        items: ['A', 'B'],
        capacity: 5,
        topIndex: 1,
      },
      explanation:
        'Press Start when ready. Keep your eyes on the required operation!',
      questionPrompt: 'Click [ NEXT STEP ] to begin.',
      interactionType: 'info-next',
      hints: ['Click Next Step.'],
      correctFeedback: {
        title: '✓ Good Luck, Queue Master!',
        explanation: 'Showcase your real-time tracing speed.',
      },
    },
  ],

  // ─── LEVEL 7: CIRCULAR QUEUE & WRAPAROUND ───
  7: [
    {
      stepNumber: 1,
      totalSteps: 2,
      title: 'LEVEL 7: CIRCULAR QUEUE',
      subtitle: 'Modulo Arithmetic Wraparound',
      conceptBadge: 'RING BUFFER',
      stackState: {
        items: ['C', 'D', 'E'],
        capacity: 5,
        topIndex: 2,
      },
      explanation:
        'Empty slots [0] and [1] are recycled using modulo arithmetic: rear = (rear + 1) % MAX. When rear=4, (4 + 1) % 5 = 0, wrapping around to slot [0]!',
      questionPrompt: 'Click [ NEXT STEP ] to launch Level 7 Circular Queue.',
      interactionType: 'info-next',
      hints: ['Circular queues eliminate false overflow.'],
      correctFeedback: {
        title: '✓ Ring Buffer Invariant Mastered',
        explanation: 'Ready to solve modulo circular challenges.',
      },
    },
    {
      stepNumber: 2,
      totalSteps: 2,
      title: 'LEVEL 7 STEP 2: READY TO PLAY',
      subtitle: 'Modulo Calculation in Action',
      conceptBadge: 'READY',
      stackState: {
        items: ['C', 'D', 'E'],
        capacity: 5,
        topIndex: 2,
      },
      explanation:
        'Experience circular wraparound and sentinel full checks.',
      questionPrompt: 'Click [ NEXT STEP ] to start Level 7.',
      interactionType: 'info-next',
      hints: ['Click Next Step.'],
      correctFeedback: {
        title: '✓ Ready to Play Level 7',
        explanation: 'Launch Level 7.',
      },
    },
  ],

  // ─── LEVEL 8: PRIORITY QUEUE ───
  8: [
    {
      stepNumber: 1,
      totalSteps: 2,
      title: 'LEVEL 8: PRIORITY QUEUE',
      subtitle: 'Emergency Triage Precedence',
      conceptBadge: 'PRIORITY QUEUE',
      stackState: {
        items: ['A (P1)', 'C (P2)', 'B (P3)'],
        capacity: 5,
        topIndex: 2,
      },
      explanation:
        'In a Priority Queue, Priority 1 (Critical) patients jump directly to the FRONT ahead of lower-urgency earlier arrivals.',
      questionPrompt: 'Click [ NEXT STEP ] to launch Level 8 Priority Queue.',
      interactionType: 'info-next',
      hints: ['Urgency overrides standard arrival order.'],
      correctFeedback: {
        title: '✓ Triage Rule Mastered',
        explanation: 'Ready to practice emergency priority dispatching.',
      },
    },
    {
      stepNumber: 2,
      totalSteps: 2,
      title: 'LEVEL 8 STEP 2: READY TO PLAY',
      subtitle: 'Highest Priority Dispatched First',
      conceptBadge: 'READY',
      stackState: {
        items: ['A (P1)', 'C (P2)', 'B (P3)'],
        capacity: 5,
        topIndex: 2,
      },
      explanation:
        'Execute triage sorting and priority dequeues in Level 8.',
      questionPrompt: 'Click [ NEXT STEP ] to begin.',
      interactionType: 'info-next',
      hints: ['Click Next Step.'],
      correctFeedback: {
        title: '✓ Ready to Play Level 8',
        explanation: 'Launch Level 8.',
      },
    },
  ],

  // ─── LEVEL 9: DEQUE ───
  9: [
    {
      stepNumber: 1,
      totalSteps: 2,
      title: 'LEVEL 9: DOUBLE-ENDED QUEUE (DEQUE)',
      subtitle: 'Bi-Directional Insertion & Deletion',
      conceptBadge: 'DEQUE DUAL-END',
      stackState: {
        items: ['A', 'B', 'C'],
        capacity: 5,
        topIndex: 2,
      },
      explanation:
        'A Deque supports insertFront, insertRear, deleteFront, and deleteRear. Both terminals of the pipeline are active.',
      questionPrompt: 'Click [ NEXT STEP ] to launch Level 9 Deque.',
      interactionType: 'info-next',
      hints: ['Deques can simulate both Stacks and Queues.'],
      correctFeedback: {
        title: '✓ Deque Concept Mastered',
        explanation: 'Ready to master bi-directional queue pipelines.',
      },
    },
    {
      stepNumber: 2,
      totalSteps: 2,
      title: 'LEVEL 9 STEP 2: READY TO PLAY',
      subtitle: 'The Grand Finale Level',
      conceptBadge: 'GRAND FINALE',
      stackState: {
        items: ['A', 'B', 'C'],
        capacity: 5,
        topIndex: 2,
      },
      explanation:
        'Master the final challenge in the Queue Curriculum!',
      questionPrompt: 'Click [ NEXT STEP ] to start Level 9.',
      interactionType: 'info-next',
      hints: ['Click Next Step.'],
      correctFeedback: {
        title: '✓ Ready to Master All 9 Levels!',
        explanation: 'Launch Level 9.',
      },
    },
  ],
};
