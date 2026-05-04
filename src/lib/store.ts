import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User, mockStudent, mockAdmin } from './mock-data';

// --- Auth Store ---
interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, role: 'student' | 'admin') => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: (email, role) => {
        // Mock authentication logic
        if (role === 'admin') {
          set({ user: mockAdmin, isAuthenticated: true });
        } else {
          set({ user: mockStudent, isAuthenticated: true });
        }
      },
      logout: () => set({ user: null, isAuthenticated: false }),
    }),
    {
      name: 'auth-storage',
    }
  )
);

// --- Test Session Store ---
interface TestSessionState {
  testId: string | null;
  answers: Record<string, number>; // questionId -> selectedOptionIndex
  currentQuestionIndex: number;
  timeRemainingSeconds: number | null;
  isTestActive: boolean;
  
  startTest: (testId: string, durationMinutes: number) => void;
  selectAnswer: (questionId: string, optionIndex: number) => void;
  setQuestionIndex: (index: number) => void;
  decrementTime: () => void;
  endTest: () => void;
}

export const useTestStore = create<TestSessionState>()(
  persist(
    (set, get) => ({
      testId: null,
      answers: {},
      currentQuestionIndex: 0,
      timeRemainingSeconds: null,
      isTestActive: false,

      startTest: (testId, durationMinutes) => 
        set({ 
          testId, 
          answers: {}, 
          currentQuestionIndex: 0, 
          timeRemainingSeconds: durationMinutes * 60,
          isTestActive: true 
        }),
        
      selectAnswer: (questionId, optionIndex) =>
        set((state) => ({
          answers: { ...state.answers, [questionId]: optionIndex }
        })),
        
      setQuestionIndex: (index) => set({ currentQuestionIndex: index }),
      
      decrementTime: () => set((state) => ({
        timeRemainingSeconds: state.timeRemainingSeconds !== null && state.timeRemainingSeconds > 0 
          ? state.timeRemainingSeconds - 1 
          : 0
      })),
      
      endTest: () => set({
        testId: null,
        answers: {},
        currentQuestionIndex: 0,
        timeRemainingSeconds: null,
        isTestActive: false
      }),
    }),
    {
      name: 'test-session-storage',
    }
  )
);
