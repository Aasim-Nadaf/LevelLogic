export type UserRole = 'student' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

export interface TestCategory {
  id: string;
  name: string;
  icon: string;
  color: string;
  count: number;
}

export interface Test {
  id: string;
  title: string;
  subject: string;
  durationMinutes: number;
  totalQuestions: number;
  passPercentage: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  description: string;
}

export interface Question {
  id: string;
  testId: string;
  text: string;
  options: string[];
  correctOptionIndex: number;
}

export interface TestResult {
  id: string;
  studentId: string;
  studentName: string;
  studentEmail: string;
  testId: string;
  testTitle: string;
  score: number;
  total: number;
  percentage: number;
  date: string;
  status: 'Pass' | 'Fail';
}

// Mock Users
export const mockStudent: User = {
  id: 'st_01',
  name: 'Aarav Sharma',
  email: 'aarav.sharma@example.com',
  role: 'student',
};

export const mockAdmin: User = {
  id: 'ad_01',
  name: 'Priya Patel',
  email: 'admin@aptitude.in',
  role: 'admin',
};

// Mock Categories
export const mockCategories: TestCategory[] = [
  { id: 'cat_1', name: 'Quantitative Aptitude', icon: 'calculator', color: 'ocean', count: 24 },
  { id: 'cat_2', name: 'Logical Reasoning', icon: 'puzzle', color: 'ocean-deep', count: 18 },
  { id: 'cat_3', name: 'Technical Skills', icon: 'code-2', color: 'ocean-mid', count: 15 },
  { id: 'cat_4', name: 'Verbal English', icon: 'book-open', color: 'ocean-sky', count: 32 },
];

// Mock Tests
export const mockTests: Test[] = [
  {
    id: 'test_101',
    title: 'TCS NQT Quant Mock',
    subject: 'Quantitative Aptitude',
    durationMinutes: 45,
    totalQuestions: 30,
    passPercentage: 70,
    difficulty: 'Medium',
    description: 'A comprehensive mock test covering essential quantitative concepts commonly asked in TCS NQT.',
  },
  {
    id: 'test_102',
    title: 'Infosys Logical Assessment',
    subject: 'Logical Reasoning',
    durationMinutes: 30,
    totalQuestions: 20,
    passPercentage: 60,
    difficulty: 'Hard',
    description: 'Test your analytical and logical thinking abilities with this advanced reasoning paper.',
  },
  {
    id: 'test_103',
    title: 'React.js Fundamentals',
    subject: 'Technical Skills',
    durationMinutes: 20,
    totalQuestions: 15,
    passPercentage: 80,
    difficulty: 'Easy',
    description: 'Evaluate your basic understanding of React hooks, components, and state management.',
  },
];

// Mock Questions for test_101
export const mockQuestions: Question[] = [
  {
    id: 'q_1',
    testId: 'test_101',
    text: 'A train 150m long is running with a speed of 68 km/h. In what time will it pass a man who is running at 8 km/h in the same direction in which the train is going?',
    options: ['8 seconds', '9 seconds', '10 seconds', '12 seconds'],
    correctOptionIndex: 1, // 9 seconds
  },
  {
    id: 'q_2',
    testId: 'test_101',
    text: 'The sum of ages of 5 children born at the intervals of 3 years each is 50 years. What is the age of the youngest child?',
    options: ['4 years', '8 years', '10 years', 'None of these'],
    correctOptionIndex: 0, // 4 years
  },
  {
    id: 'q_3',
    testId: 'test_101',
    text: 'If A is 50% larger than C and B is 25% larger than C, then A is what percent larger than B?',
    options: ['20%', '25%', '50%', '75%'],
    correctOptionIndex: 0, // 20%
  },
];

// Mock Results
export const mockResults: TestResult[] = [
  {
    id: 'res_001',
    studentId: 'st_01',
    studentName: 'Aarav Sharma',
    studentEmail: 'aarav.sharma@example.com',
    testId: 'test_101',
    testTitle: 'TCS NQT Quant Mock',
    score: 24,
    total: 30,
    percentage: 80,
    date: '2024-05-01T10:00:00Z',
    status: 'Pass',
  },
  {
    id: 'res_002',
    studentId: 'st_02',
    studentName: 'Neha Gupta',
    studentEmail: 'neha.g@example.com',
    testId: 'test_102',
    testTitle: 'Infosys Logical Assessment',
    score: 9,
    total: 20,
    percentage: 45,
    date: '2024-05-02T14:30:00Z',
    status: 'Fail',
  },
  {
    id: 'res_003',
    studentId: 'st_03',
    studentName: 'Rahul Verma',
    studentEmail: 'r.verma99@example.com',
    testId: 'test_103',
    testTitle: 'React.js Fundamentals',
    score: 14,
    total: 15,
    percentage: 93.33,
    date: '2024-05-03T09:15:00Z',
    status: 'Pass',
  },
  {
    id: 'res_004',
    studentId: 'st_04',
    studentName: 'Ananya Desai',
    studentEmail: 'ananya.d@example.com',
    testId: 'test_101',
    testTitle: 'TCS NQT Quant Mock',
    score: 18,
    total: 30,
    percentage: 60,
    date: '2024-05-03T11:00:00Z',
    status: 'Fail',
  },
];
