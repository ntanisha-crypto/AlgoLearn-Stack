import React from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  ArrowDownToLine,
  ArrowUpRight,
  Eye,
  AlertTriangle,
  ShieldCheck,
  CheckCircle2,
  Layers,
  Sparkles,
  Zap,
  Info,
  Flame,
  Clock,
} from 'lucide-react';
import { GameChallenge } from '../../types';

interface LevelPedagogicalCardProps {
  levelId: number;
  currentChallenge: GameChallenge;
  activeQueue: (string | number)[];
  capacity: number;
  isPeeking: boolean;
  frontValue: string | number | null;
  rearValue: string | number | null;
}

export const LevelPedagogicalCard: React.FC<LevelPedagogicalCardProps> = ({
  levelId,
  currentChallenge,
  activeQueue,
  capacity,
  isPeeking,
  frontValue,
  rearValue,
}) => {
  // Render for levels 1 to 6 (Level 7 has Circular Interactive, Level 8 has Priority Interactive)
  if (levelId > 6) return null;

  return (
    <div className="bg-slate-50 dark:bg-slate-900/60 rounded-2xl border border-slate-200/90 dark:border-slate-800 p-4 sm:p-5 space-y-3">
      {/* ========================================================================= */}
      {/* LEVEL 1: QUEUE BASICS & POINTER ANATOMY */}
      {/* ========================================================================= */}
      {levelId === 1 && (
        <div className="space-y-3">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-blue-100 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xs font-bold">
                01
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                Interactive Pointer Anatomy & FIFO Invariant
              </span>
            </div>
            <span className="text-[11px] font-mono font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded border border-blue-200/60 dark:border-blue-900/40">
              FIFO: First In, First Out
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {/* FRONT Pointer Box */}
            <div className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-blue-200 dark:border-blue-900/50 space-y-1">
              <div className="flex items-center justify-between text-[11px] font-bold text-blue-600 dark:text-blue-400">
                <span>FRONT (Index 0)</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-blue-50 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-800">
                  EXIT GATE
                </span>
              </div>
              <div className="text-base font-mono font-bold text-slate-800 dark:text-slate-100">
                {frontValue !== null ? `Survivor [${frontValue}]` : 'Empty (None)'}
              </div>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">
                Earliest arrival. Next in line to be served by DEQUEUE.
              </p>
            </div>

            {/* REAR Pointer Box */}
            <div className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-indigo-200 dark:border-indigo-900/50 space-y-1">
              <div className="flex items-center justify-between text-[11px] font-bold text-indigo-600 dark:text-indigo-400">
                <span>REAR (Index {activeQueue.length > 0 ? activeQueue.length - 1 : 0})</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-800">
                  ENTRY GATE
                </span>
              </div>
              <div className="text-base font-mono font-bold text-slate-800 dark:text-slate-100">
                {rearValue !== null ? `Survivor [${rearValue}]` : 'Empty (None)'}
              </div>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">
                Latest arrival. New elements always append here via ENQUEUE.
              </p>
            </div>

            {/* QUEUE SIZE Box */}
            <div className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
              <div className="flex items-center justify-between text-[11px] font-bold text-slate-600 dark:text-slate-300">
                <span>SIZE / CAPACITY</span>
                <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                  {Math.round((activeQueue.length / capacity) * 100)}% Full
                </span>
              </div>
              <div className="text-base font-mono font-bold text-slate-800 dark:text-slate-100">
                {activeQueue.length} / {capacity} Slots
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5 overflow-hidden">
                <motion.div
                  className="bg-blue-600 dark:bg-blue-500 h-full rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${(activeQueue.length / capacity) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* LEVEL 2: ENQUEUE & DEQUEUE LIFECYCLE LEDGER */}
      {/* ========================================================================= */}
      {levelId === 2 && (
        <div className="space-y-3">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xs font-bold">
                02
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                FIFO Lifecycle: Order In == Order Out
              </span>
            </div>
            <span className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              Arrival sequence preserved strictly
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Arrival Lane */}
            <div className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                <ArrowDownToLine className="w-3.5 h-3.5" />
                <span>ENQUEUE (Arrival at REAR)</span>
              </div>
              <div className="text-[11px] text-slate-600 dark:text-slate-300 font-mono">
                Order of arrival:{' '}
                <strong className="text-emerald-700 dark:text-emerald-300">
                  {activeQueue.length > 0 ? activeQueue.join(' → ') : 'None'}
                </strong>
              </div>
              <p className="text-[10px] text-slate-400 leading-tight">
                New items queue up from left to right. Each ENQUEUE is an O(1) constant time operation.
              </p>
            </div>

            {/* Departure Lane */}
            <div className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400">
                <ArrowUpRight className="w-3.5 h-3.5" />
                <span>DEQUEUE (Exit from FRONT)</span>
              </div>
              <div className="text-[11px] text-slate-600 dark:text-slate-300 font-mono">
                Next to exit:{' '}
                <strong className="text-blue-700 dark:text-blue-300">
                  {frontValue !== null ? `Survivor [${frontValue}]` : 'Queue is Empty'}
                </strong>
              </div>
              <p className="text-[10px] text-slate-400 leading-tight">
                DEQUEUE takes the element at FRONT. It never extracts from the middle or rear.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* LEVEL 3: FRONT, REAR & PEEK (INSPECTION WITHOUT MUTATION) */}
      {/* ========================================================================= */}
      {levelId === 3 && (
        <div className="space-y-3">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-indigo-100 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-xs font-bold">
                03
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                Non-Destructive Inspection Lens (PEEK vs DEQUEUE)
              </span>
            </div>
            <span className="text-[11px] font-mono font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2 py-0.5 rounded border border-indigo-200/60 dark:border-indigo-900/40">
              O(1) Read-Only
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* PEEK Analysis */}
            <div className={`p-3 rounded-xl border transition-all ${
              isPeeking
                ? 'bg-indigo-50 dark:bg-indigo-950/60 border-indigo-400 ring-2 ring-indigo-300 dark:ring-indigo-800'
                : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800'
            }`}>
              <div className="flex items-center justify-between text-xs font-bold text-indigo-600 dark:text-indigo-400 mb-1">
                <span className="flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5" />
                  PEEK() (Non-Destructive)
                </span>
                <span className="text-[10px] font-mono bg-indigo-100 dark:bg-indigo-900 px-1.5 py-0.2 rounded">
                  {isPeeking ? 'ACTIVE' : 'IDLE'}
                </span>
              </div>
              <div className="text-xs text-slate-700 dark:text-slate-200 font-mono">
                Returns: <strong className="text-indigo-600 dark:text-indigo-300">{frontValue !== null ? frontValue : 'None'}</strong> | Queue length: <strong>{activeQueue.length} (Unchanged)</strong>
              </div>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1">
                Reads the FRONT element safely without modifying, shifting, or deleting any queue items.
              </p>
            </div>

            {/* DEQUEUE Contrast */}
            <div className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
              <div className="flex items-center justify-between text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                <span className="flex items-center gap-1.5">
                  <ArrowUpRight className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  DEQUEUE() (Destructive Extract)
                </span>
                <span className="text-[10px] font-mono text-slate-400">MUTATES</span>
              </div>
              <div className="text-xs text-slate-700 dark:text-slate-200 font-mono">
                Removes: <strong className="text-blue-600 dark:text-blue-400">{frontValue !== null ? frontValue : 'None'}</strong> | Next Size: <strong>{Math.max(0, activeQueue.length - 1)}</strong>
              </div>
              <p className="text-[10px] text-slate-500 dark:text-slate-400">
                Permanently extracts the FRONT item from the queue and shifts the FRONT pointer forward.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* LEVEL 4: CAPACITY & OVERFLOW GUARD */}
      {/* ========================================================================= */}
      {levelId === 4 && (
        <div className="space-y-3">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-amber-100 dark:bg-amber-950/80 text-amber-600 dark:text-amber-400 flex items-center justify-center text-xs font-bold">
                04
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                Capacity Boundary & Defensive Overflow Shield
              </span>
            </div>
            <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded border ${
              activeQueue.length >= capacity
                ? 'bg-rose-50 dark:bg-rose-950/80 text-rose-600 dark:text-rose-400 border-rose-200 dark:border-rose-900'
                : 'bg-amber-50 dark:bg-amber-950/80 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-900'
            }`}>
              {activeQueue.length >= capacity ? '🚨 FULL (100%)' : `${activeQueue.length} / ${capacity} Occupied`}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Capacity Meter */}
            <div className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-300">
                <span>Buffer Slots Utilization</span>
                <span className="font-mono font-bold text-amber-600 dark:text-amber-400">
                  {activeQueue.length} / {capacity}
                </span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
                <div
                  className={`h-full transition-all duration-300 ${
                    activeQueue.length >= capacity ? 'bg-rose-500' : 'bg-amber-500'
                  }`}
                  style={{ width: `${(activeQueue.length / capacity) * 100}%` }}
                />
              </div>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">
                Array-backed queues have fixed memory allocation. When all slots are occupied, new enqueues trigger an Overflow Exception.
              </p>
            </div>

            {/* Defensive Exception Rule */}
            <div className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-600 dark:text-amber-400 font-mono">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Defensive Code Invariant</span>
              </div>
              <pre className="text-[10px] font-mono bg-slate-100 dark:bg-slate-800 p-2 rounded text-slate-800 dark:text-slate-200 overflow-x-auto">
{`if (size == capacity) {
  throw new QueueOverflowException();
}`}
              </pre>
              <p className="text-[10px] text-slate-400">
                Prevents array index out-of-bounds errors and illegal memory overwrites.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* LEVEL 5: EMPTY QUEUE & UNDERFLOW GUARD */}
      {/* ========================================================================= */}
      {levelId === 5 && (
        <div className="space-y-3">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-rose-100 dark:bg-rose-950/80 text-rose-600 dark:text-rose-400 flex items-center justify-center text-xs font-bold">
                05
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                Empty State Guard & Underflow Exception Catch
              </span>
            </div>
            <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded border ${
              activeQueue.length === 0
                ? 'bg-rose-50 dark:bg-rose-950/80 text-rose-600 dark:text-rose-400 border-rose-200 dark:border-rose-900'
                : 'bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-900'
            }`}>
              {activeQueue.length === 0 ? '🚨 QUEUE EMPTY (SIZE 0)' : `${activeQueue.length} Elements Remaining`}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Empty State Inspector */}
            <div className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1.5">
              <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center justify-between">
                <span>Queue Pointers State</span>
                <span className="font-mono text-[10px] text-rose-500 font-bold">
                  {activeQueue.length === 0 ? 'RESET' : 'ACTIVE'}
                </span>
              </div>
              <div className="text-[11px] font-mono text-slate-600 dark:text-slate-300 space-y-0.5">
                <div>FRONT: <strong>{activeQueue.length > 0 ? activeQueue[0] : 'null (-1)'}</strong></div>
                <div>REAR: <strong>{activeQueue.length > 0 ? activeQueue[activeQueue.length - 1] : 'null (-1)'}</strong></div>
                <div>SIZE: <strong>{activeQueue.length} / {capacity}</strong></div>
              </div>
              <p className="text-[10px] text-slate-400">
                When all survivors exit, pointers reset. No element exists to satisfy DEQUEUE or PEEK.
              </p>
            </div>

            {/* Defensive Underflow Guard */}
            <div className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs font-bold text-rose-600 dark:text-rose-400 font-mono">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Defensive Underflow Invariant</span>
              </div>
              <pre className="text-[10px] font-mono bg-slate-100 dark:bg-slate-800 p-2 rounded text-slate-800 dark:text-slate-200 overflow-x-auto">
{`if (isEmpty()) {
  throw new QueueUnderflowException();
}`}
              </pre>
              <p className="text-[10px] text-slate-400">
                Attempting to dequeue from an empty queue triggers Underflow Exception, preventing null dereference crashes.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* LEVEL 6: COMPOUND OPERATIONS PIPELINE & REAL-TIME INVARIANTS */}
      {/* ========================================================================= */}
      {levelId === 6 && (
        <div className="space-y-3">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-indigo-100 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-xs font-bold font-mono">
                06
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                Compound Operations Pipeline & Real-Time FIFO Invariant
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
              <Zap className="w-3 h-3 text-amber-500" />
              <span>All Operations O(1) Constant Time</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Sequential Pipeline Preview */}
            <div className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-300">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-blue-500" />
                  6-Step Execution Sequence
                </span>
                <span className="font-mono text-[10px] text-slate-400">
                  Step {currentChallenge.challengeNumber || 1} / 6
                </span>
              </div>
              <div className="grid grid-cols-3 gap-1.5 text-[10px] font-mono">
                <div className={`p-1.5 rounded border text-center ${currentChallenge.challengeNumber === 1 ? 'bg-blue-50 dark:bg-blue-950 border-blue-400 font-bold text-blue-600' : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400'}`}>
                  1. +ENQUEUE [C]
                </div>
                <div className={`p-1.5 rounded border text-center ${currentChallenge.challengeNumber === 2 ? 'bg-blue-50 dark:bg-blue-950 border-blue-400 font-bold text-blue-600' : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400'}`}>
                  2. +ENQUEUE [D]
                </div>
                <div className={`p-1.5 rounded border text-center ${currentChallenge.challengeNumber === 3 ? 'bg-blue-50 dark:bg-blue-950 border-blue-400 font-bold text-blue-600' : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400'}`}>
                  3. -DEQUEUE [A]
                </div>
                <div className={`p-1.5 rounded border text-center ${currentChallenge.challengeNumber === 4 ? 'bg-blue-50 dark:bg-blue-950 border-blue-400 font-bold text-blue-600' : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400'}`}>
                  4. 👁 PEEK [B]
                </div>
                <div className={`p-1.5 rounded border text-center ${currentChallenge.challengeNumber === 5 ? 'bg-blue-50 dark:bg-blue-950 border-blue-400 font-bold text-blue-600' : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400'}`}>
                  5. +ENQUEUE [E]
                </div>
                <div className={`p-1.5 rounded border text-center ${currentChallenge.challengeNumber === 6 ? 'bg-blue-50 dark:bg-blue-950 border-blue-400 font-bold text-blue-600' : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400'}`}>
                  6. -DEQUEUE [B]
                </div>
              </div>
              <p className="text-[10px] text-slate-400 leading-tight">
                Tests rapid interleaving of arrivals, departures, and non-destructive reads.
              </p>
            </div>

            {/* Invariant & Multiplier Mechanics */}
            <div className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 font-mono">
                <Flame className="w-3.5 h-3.5 text-amber-500" />
                <span>Streak Combo & Invariant Integrity</span>
              </div>
              <div className="text-[11px] text-slate-600 dark:text-slate-300 space-y-1">
                <div className="flex justify-between items-center bg-slate-50 dark:bg-slate-800 p-1.5 rounded">
                  <span>Current Queue State:</span>
                  <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400">
                    [{activeQueue.join(', ') || 'EMPTY'}]
                  </span>
                </div>
                <div className="flex justify-between items-center bg-slate-50 dark:bg-slate-800 p-1.5 rounded">
                  <span>Combo Bonus:</span>
                  <span className="font-mono font-bold text-amber-600">
                    Up to 3x XP for streak accuracy
                  </span>
                </div>
              </div>
              <p className="text-[10px] text-slate-400 leading-tight">
                Every enqueue adds to REAR, every dequeue extracts FRONT. FIFO ordering is strictly maintained through high-velocity pipelines.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
