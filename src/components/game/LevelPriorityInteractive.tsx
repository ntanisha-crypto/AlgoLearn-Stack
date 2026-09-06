import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  RotateCcw,
  ArrowRight,
  ArrowDownToLine,
  ArrowUpRight,
  AlertTriangle,
  ShieldAlert,
  Sparkles,
  CheckCircle2,
  HeartPulse,
  Activity,
  Flame,
} from 'lucide-react';
import { soundEffects } from '../../services/sound';

interface Patient {
  id: string;
  name: string;
  condition: string;
  priority: 1 | 2 | 3; // 1 = Critical, 2 = Urgent, 3 = Routine
  arrivalTime: string;
}

interface LevelPriorityInteractiveProps {
  onNotifyAction?: (actionText: string) => void;
}

export const LevelPriorityInteractive: React.FC<LevelPriorityInteractiveProps> = ({
  onNotifyAction,
}) => {
  const [patients, setPatients] = useState<Patient[]>([
    {
      id: 'p-1',
      name: 'Patient A',
      condition: 'Minor Sprain',
      priority: 3,
      arrivalTime: '09:00 AM',
    },
    {
      id: 'p-2',
      name: 'Patient B',
      condition: 'Deep Laceration',
      priority: 2,
      arrivalTime: '09:05 AM',
    },
  ]);

  const [selectedPriority, setSelectedPriority] = useState<1 | 2 | 3>(1);
  const [patientCounter, setPatientCounter] = useState<number>(3);
  const [lastEvent, setLastEvent] = useState<string>(
    'Priority Queue Active: Min-Heap ordering ensures Priority 1 patients exit first!'
  );

  // Handle Enqueue with Priority sorting
  const handleEnqueuePatient = () => {
    soundEffects.playPush();

    let condition = 'Cardiac Arrest (Life Threat)';
    if (selectedPriority === 2) condition = 'Bone Fracture (Urgent)';
    if (selectedPriority === 3) condition = 'Routine Checkup (Minor)';

    const charCode = 65 + ((patientCounter - 1) % 26);
    const newPatient: Patient = {
      id: `p-${Date.now()}`,
      name: `Survivor ${String.fromCharCode(charCode)}`,
      condition,
      priority: selectedPriority,
      arrivalTime: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
    };

    // Insert and sort: Priority 1 first, Priority 2 next, Priority 3 last
    // If priorities are equal, maintain arrival order (FIFO within priority)
    const updated = [...patients, newPatient].sort((a, b) => a.priority - b.priority);

    setPatients(updated);
    setPatientCounter((prev) => prev + 1);

    const isJump = updated[0].id === newPatient.id && updated.length > 1;
    const msg = `Enqueued ${newPatient.name} [Priority ${newPatient.priority}: ${condition}]. ${
      isJump ? '🚨 LEAPED TO FRONT ahead of earlier arrivals due to urgent priority!' : ''
    }`;
    setLastEvent(msg);
    onNotifyAction?.(msg);
  };

  // Handle Dequeue (Treat highest priority patient)
  const handleDequeuePatient = () => {
    if (patients.length === 0) {
      soundEffects.playError();
      setLastEvent('Triage Queue is empty! No patients waiting.');
      onNotifyAction?.('Triage Queue is empty!');
      return;
    }

    soundEffects.playPop();
    const served = patients[0];
    setPatients((prev) => prev.slice(1));

    const msg = `Treated & Dispatched: ${served.name} (${served.condition} - Priority ${served.priority}) from FRONT!`;
    setLastEvent(msg);
    onNotifyAction?.(msg);
  };

  // Reset demo
  const handleReset = () => {
    soundEffects.playReset();
    setPatients([
      {
        id: 'p-1',
        name: 'Patient A',
        condition: 'Minor Sprain',
        priority: 3,
        arrivalTime: '09:00 AM',
      },
      {
        id: 'p-2',
        name: 'Patient B',
        condition: 'Deep Laceration',
        priority: 2,
        arrivalTime: '09:05 AM',
      },
    ]);
    setPatientCounter(3);
    setLastEvent('Triage Queue reset to initial state.');
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-rose-200/90 dark:border-rose-900/60 p-4 sm:p-5 shadow-xs space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-rose-50 dark:bg-rose-950/80 border border-rose-200 dark:border-rose-800 text-rose-600 dark:text-rose-400 flex items-center justify-center font-mono font-bold text-xs">
            08
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <span>Interactive Priority Queue (Emergency Triage Simulator)</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-50 dark:bg-rose-950/80 text-rose-600 dark:text-rose-400 font-bold border border-rose-200/60 dark:border-rose-900/40">
                PRIORITY OVERRIDES ARRIVAL TIME
              </span>
            </h4>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              High-priority emergencies (Priority 1) leap to the front ahead of low-priority arrivals.
            </p>
          </div>
        </div>

        <button
          onClick={handleReset}
          className="px-2.5 py-1 text-xs font-mono text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 border border-slate-200 dark:border-slate-800 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center gap-1 cursor-pointer"
        >
          <RotateCcw className="w-3 h-3" />
          <span>Reset Triage</span>
        </button>
      </div>

      {/* Live Status Message */}
      <div className="bg-rose-50/70 dark:bg-rose-950/30 p-2.5 rounded-xl border border-rose-200/70 dark:border-rose-900/50 text-xs font-mono text-rose-900 dark:text-rose-200 flex items-center gap-2">
        <HeartPulse className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0" />
        <span className="truncate">{lastEvent}</span>
      </div>

      {/* Priority Selector & Actions */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-200 dark:border-slate-700">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 text-[11px]">
            New Arrival Urgency:
          </span>
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setSelectedPriority(1)}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                selectedPriority === 1
                  ? 'bg-rose-600 text-white shadow-xs'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
              }`}
            >
              🚨 P1: Critical
            </button>
            <button
              onClick={() => setSelectedPriority(2)}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                selectedPriority === 2
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
              }`}
            >
              ⚠️ P2: Urgent
            </button>
            <button
              onClick={() => setSelectedPriority(3)}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                selectedPriority === 3
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
              }`}
            >
              ℹ️ P3: Routine
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleEnqueuePatient}
            className="px-3 py-2 rounded-xl text-xs font-mono font-bold bg-rose-600 hover:bg-rose-700 text-white flex items-center gap-1.5 shadow-xs cursor-pointer active:scale-95 transition-all"
          >
            <ArrowDownToLine className="w-3.5 h-3.5" />
            <span>ENQUEUE PATIENT (P{selectedPriority})</span>
          </button>

          <button
            onClick={handleDequeuePatient}
            disabled={patients.length === 0}
            className="px-3 py-2 rounded-xl text-xs font-mono font-bold bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 flex items-center gap-1.5 shadow-xs cursor-pointer active:scale-95 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ArrowUpRight className="w-3.5 h-3.5 text-blue-600" />
            <span>DISPATCH FRONT (HIGHEST PRIORITY)</span>
          </button>
        </div>
      </div>

      {/* Patient Queue Cards (Sorted by Priority) */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
          <span>FRONT (Highest Urgency Treated First)</span>
          <span>REAR (Lowest Urgency)</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
          <AnimatePresence>
            {patients.map((p, idx) => {
              const isFront = idx === 0;

              return (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.5, x: -50 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  className={`p-3 rounded-xl border-2 transition-all relative ${
                    p.priority === 1
                      ? 'bg-rose-50/80 dark:bg-rose-950/40 border-rose-400 dark:border-rose-800 text-rose-950 dark:text-rose-100'
                      : p.priority === 2
                      ? 'bg-amber-50/80 dark:bg-amber-950/40 border-amber-400 dark:border-amber-800 text-amber-950 dark:text-amber-100'
                      : 'bg-emerald-50/80 dark:bg-emerald-950/40 border-emerald-400 dark:border-emerald-800 text-emerald-950 dark:text-emerald-100'
                  }`}
                >
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="font-mono font-bold text-xs">
                      {p.name} {isFront && '(FRONT)'}
                    </span>
                    <span
                      className={`text-[10px] font-bold px-1.5 py-0.2 rounded font-mono ${
                        p.priority === 1
                          ? 'bg-rose-600 text-white'
                          : p.priority === 2
                          ? 'bg-amber-600 text-white'
                          : 'bg-emerald-600 text-white'
                      }`}
                    >
                      P{p.priority}
                    </span>
                  </div>
                  <div className="text-xs font-semibold">{p.condition}</div>
                  <div className="text-[10px] text-slate-400 dark:text-slate-400 mt-1 font-mono">
                    Arrived: {p.arrivalTime}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {patients.length === 0 && (
          <div className="p-6 text-center text-xs text-slate-400 font-mono border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl">
            Triage line is empty. All emergency patients treated!
          </div>
        )}
      </div>

      {/* Takeaway comparison */}
      <div className="text-[11px] text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/40 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 flex items-start gap-2">
        <Activity className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
        <span>
          <strong>Key Insight:</strong> Standard FIFO queues serve strictly by arrival time. Priority Queues (implemented via binary min-heaps in O(log N) insertion) always extract the element with the highest priority first, regardless of when it arrived.
        </span>
      </div>
    </div>
  );
};
