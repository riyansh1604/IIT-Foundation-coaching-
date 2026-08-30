import React, { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Calendar, 
  ShieldCheck,
  ArrowLeft,
  Search,
  Download,
  CheckCircle2,
  AlertCircle,
  Clock,
  BookOpen,
  Award,
  User,
  GraduationCap,
  Sparkles,
  Printer,
  ChevronRight,
  Phone,
  MessageCircle,
  FileText
} from 'lucide-react';
import { INSTITUTE_INFO } from '../data/coachingData';
import { BrandLogo } from '../components/BrandLogo';

export interface StudentData {
  id: string;
  name: string;
  rollNo: string;
  batch: string;
  targetExam: string;
  attendanceRate: string;
  attendanceDetails: { attended: number; total: number; punctuality: string };
  overallRank: number;
  totalStudentsInBatch: number;
  cumulativeScore: number;
  homeworkSubmissionRate: string;
  doubtSessionsAttended: number;
  avatarUrl?: string;
  subjectMastery: {
    name: string;
    score: number;
    trend: 'up' | 'stable' | 'down';
    grade: string;
    strongTopics: string[];
    focusAreas: string[];
  }[];
  recentTests: {
    id: string;
    title: string;
    subject: string;
    score: number;
    maxScore: number;
    percentage: number;
    batchAvg: number;
    rank: number;
    date: string;
    remarks: string;
  }[];
  upcomingSchedule: {
    title: string;
    subject: string;
    date: string;
    time: string;
    syllabus: string;
  }[];
  teacherRemarks: {
    faculty: string;
    subject: string;
    date: string;
    comment: string;
  }[];
}

const STUDENTS_DATABASE: StudentData[] = [
  {
    id: 's1',
    name: 'Rohan Deshpande',
    rollNo: 'IITF-2026-884',
    batch: 'Class 12th Science (PCM + MHT-CET)',
    targetExam: '12th HSC Boards & MHT-CET 2026',
    attendanceRate: '96.5%',
    attendanceDetails: { attended: 41, total: 42, punctuality: '99% On-time' },
    overallRank: 2,
    totalStudentsInBatch: 35,
    cumulativeScore: 89.4,
    homeworkSubmissionRate: '98%',
    doubtSessionsAttended: 16,
    subjectMastery: [
      {
        name: 'Mathematics',
        score: 93,
        trend: 'up',
        grade: 'A+ (Distinction)',
        strongTopics: ['Definite Integrals', 'Differentiation', 'Vectors & 3D', 'Matrices'],
        focusAreas: ['Differential Equations Application', 'Probability Distribution']
      },
      {
        name: 'Physics',
        score: 86,
        trend: 'up',
        grade: 'A (High First Class)',
        strongTopics: ['Electromagnetism', 'Wave Optics', 'Current Electricity', 'Semiconductors'],
        focusAreas: ['Rotational Dynamics Numericals', 'Thermodynamics Heat Engine Cycles']
      },
      {
        name: 'Chemistry',
        score: 91,
        trend: 'stable',
        grade: 'A+ (Distinction)',
        strongTopics: ['Aldehydes & Ketones', 'Electrochemistry', 'Chemical Kinetics', 'Solutions'],
        focusAreas: ['Coordination Compounds IUPAC & Isomerism']
      }
    ],
    recentTests: [
      {
        id: 't-101',
        title: 'Weekly Unit Test #18 (Calculus & Integration)',
        subject: 'Mathematics',
        score: 94,
        maxScore: 100,
        percentage: 94,
        batchAvg: 72,
        rank: 1,
        date: '24 Aug 2026',
        remarks: 'Flawless in definite integrals. Excellent step marking for 12th Board format.'
      },
      {
        id: 't-102',
        title: 'Physics Chapter Mock (Electromagnetism & AC)',
        subject: 'Physics',
        score: 88,
        maxScore: 100,
        percentage: 88,
        batchAvg: 68,
        rank: 3,
        date: '17 Aug 2026',
        remarks: 'Good theoretical recall; practice multi-step circuit calculations to save time.'
      },
      {
        id: 't-103',
        title: 'Organic Chemistry Reactions & Mechanisms',
        subject: 'Chemistry',
        score: 92,
        maxScore: 100,
        percentage: 92,
        batchAvg: 74,
        rank: 2,
        date: '10 Aug 2026',
        remarks: 'Great command over Carbonyl compounds and name reaction conversions.'
      },
      {
        id: 't-104',
        title: 'Full Length MHT-CET PCM Simulated Mock #4',
        subject: 'All Subjects (PCM)',
        score: 174,
        maxScore: 200,
        percentage: 87,
        batchAvg: 134,
        rank: 2,
        date: '03 Aug 2026',
        remarks: 'High percentile projection (98.6+ %ile). Strong speed in Mathematics.'
      }
    ],
    upcomingSchedule: [
      {
        title: 'Full Prelims Mock Test #1 (Physics & Chemistry)',
        subject: 'Physics & Chemistry',
        date: 'Sunday, 06 Sep 2026',
        time: '9:00 AM – 12:00 PM',
        syllabus: 'Complete Term-1 12th Board Syllabus (HSC/CBSE)'
      },
      {
        title: 'Mathematics Advanced Trigonometry & 3D Test',
        subject: 'Mathematics',
        date: 'Wednesday, 09 Sep 2026',
        time: '5:00 PM – 6:30 PM',
        syllabus: 'Vectors, 3D Geometry, Lines & Planes'
      }
    ],
    teacherRemarks: [
      {
        faculty: 'Prof. Rahul Kulkarni',
        subject: 'Mathematics Mentor',
        date: '25 Aug 2026',
        comment: 'Rohan shows exemplary discipline. His presentation in calculus is board-topper caliber.'
      },
      {
        faculty: 'Prof. Milind Joshi',
        subject: 'Physics Mentor',
        date: '19 Aug 2026',
        comment: 'Advised Rohan to attend evening doubt clinic on Tuesday for Rotational Dynamics problem sets.'
      }
    ]
  },
  {
    id: 's2',
    name: 'Ananya Sharma',
    rollNo: 'IITF-2026-412',
    batch: 'IIT-JEE (Mains + Advanced) Batch A',
    targetExam: 'IIT-JEE 2026 & 12th CBSE',
    attendanceRate: '98.2%',
    attendanceDetails: { attended: 43, total: 44, punctuality: '100% On-time' },
    overallRank: 1,
    totalStudentsInBatch: 28,
    cumulativeScore: 92.8,
    homeworkSubmissionRate: '100%',
    doubtSessionsAttended: 22,
    subjectMastery: [
      {
        name: 'Mathematics',
        score: 95,
        trend: 'up',
        grade: 'A+ (Top Ranker)',
        strongTopics: ['Calculus', 'Complex Numbers', 'Coordinate Geometry', 'Probability'],
        focusAreas: ['Permutations & Combinations tricky sets']
      },
      {
        name: 'Physics',
        score: 91,
        trend: 'up',
        grade: 'A+ (Top Ranker)',
        strongTopics: ['Modern Physics', 'Optics', 'Mechanics', 'Electrostatics'],
        focusAreas: ['Fluid Mechanics Surface Tension problems']
      },
      {
        name: 'Chemistry',
        score: 93,
        trend: 'stable',
        grade: 'A+ (Top Ranker)',
        strongTopics: ['Physical Chemistry', 'Thermodynamics', 'Organic Conversions'],
        focusAreas: ['Inorganic P-Block reactions memory charts']
      }
    ],
    recentTests: [
      {
        id: 't-201',
        title: 'JEE Advanced Paper-1 Comprehensive Mock',
        subject: 'PCM Integrated',
        score: 168,
        maxScore: 180,
        percentage: 93.3,
        batchAvg: 112,
        rank: 1,
        date: '23 Aug 2026',
        remarks: 'Outstanding analytical clarity. Maintained negative-marking under 4 marks total.'
      },
      {
        id: 't-202',
        title: 'Physics Advanced Mechanics & Waves CBT',
        subject: 'Physics',
        score: 92,
        maxScore: 100,
        percentage: 92,
        batchAvg: 64,
        rank: 1,
        date: '16 Aug 2026',
        remarks: 'Excellent mastery over multi-concept problems.'
      }
    ],
    upcomingSchedule: [
      {
        title: 'NTA CBT Simulation Exam (All India Pattern)',
        subject: 'Full Syllabus Mock',
        date: 'Saturday, 05 Sep 2026',
        time: '2:30 PM – 5:30 PM',
        syllabus: 'JEE Mains Full Pattern Test #6'
      }
    ],
    teacherRemarks: [
      {
        faculty: 'Prof. S. R. Deshmukh',
        subject: 'Center Director & JEE Lead',
        date: '24 Aug 2026',
        comment: 'Consistent top performer. Projected within top 500 in JEE Advanced with ongoing pace.'
      }
    ]
  },
  {
    id: 's3',
    name: 'Aarav Patil',
    rollNo: 'IITF-2026-619',
    batch: 'Class 10th ICSE / CBSE Pre-Foundation',
    targetExam: '10th Board 95%+ & Homi Bhabha',
    attendanceRate: '95.0%',
    attendanceDetails: { attended: 38, total: 40, punctuality: '98% On-time' },
    overallRank: 4,
    totalStudentsInBatch: 30,
    cumulativeScore: 87.5,
    homeworkSubmissionRate: '95%',
    doubtSessionsAttended: 12,
    subjectMastery: [
      {
        name: 'Mathematics',
        score: 90,
        trend: 'up',
        grade: 'A+ (Distinction)',
        strongTopics: ['Algebra', 'Trigonometry', 'Quadratic Equations'],
        focusAreas: ['Geometric Proofs & Constructions']
      },
      {
        name: 'Science (Physics & Chem)',
        score: 86,
        trend: 'stable',
        grade: 'A (High First Class)',
        strongTopics: ['Current & Magnetism', 'Chemical Reactions', 'Acids & Bases'],
        focusAreas: ['Light Reflection & Refraction Numerical Ray Diagrams']
      }
    ],
    recentTests: [
      {
        id: 't-301',
        title: '10th Board Pattern Test #8 (Mathematics)',
        subject: 'Mathematics',
        score: 72,
        maxScore: 80,
        percentage: 90,
        batchAvg: 58,
        rank: 3,
        date: '21 Aug 2026',
        remarks: 'Clean step-wise solution writing. Minor arithmetic slips checked in doubt session.'
      }
    ],
    upcomingSchedule: [
      {
        title: '10th Science Complete Term Prelims',
        subject: 'Science',
        date: 'Thursday, 10 Sep 2026',
        time: '5:30 PM – 7:30 PM',
        syllabus: 'Physics (Optics + Electricity), Chemistry (Reactions)'
      }
    ],
    teacherRemarks: [
      {
        faculty: 'Prof. Priya Kulkarni',
        subject: 'Foundation Science Mentor',
        date: '22 Aug 2026',
        comment: 'Aarav has shown noticeable improvement in numerical speed over the last 3 weeks.'
      }
    ]
  }
];

interface StudentAnalyticsPortalPageProps {
  onBackToHome: () => void;
  onOpenDemoModal: () => void;
}

export const StudentAnalyticsPortalPage: React.FC<StudentAnalyticsPortalPageProps> = ({
  onBackToHome,
  onOpenDemoModal
}) => {
  const [selectedStudentId, setSelectedStudentId] = useState<string>('s1');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'overview' | 'tests' | 'feedback' | 'schedule'>('overview');
  const [selectedSubjectFilter, setSelectedSubjectFilter] = useState<string>('All');
  const [isPrinting, setIsPrinting] = useState(false);

  const currentStudent = STUDENTS_DATABASE.find(s => s.id === selectedStudentId) || STUDENTS_DATABASE[0];

  const handlePrintScorecard = () => {
    setIsPrinting(true);
    setTimeout(() => {
      window.print();
      setIsPrinting(false);
    }, 200);
  };

  const filteredStudents = STUDENTS_DATABASE.filter(s => 
    s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.rollNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.batch.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredTests = selectedSubjectFilter === 'All'
    ? currentStudent.recentTests
    : currentStudent.recentTests.filter(t => t.subject.toLowerCase().includes(selectedSubjectFilter.toLowerCase()));

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#18181B] flex flex-col font-sans">
      
      {/* Top Sticky App Bar */}
      <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b-2 border-[#18181B] px-4 sm:px-6 py-3 shadow-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          
          {/* Back to Home & Institute Brand */}
          <div className="flex items-center gap-3">
            <button
              id="portal-back-to-home-btn"
              onClick={onBackToHome}
              className="px-3 py-2 bg-white hover:bg-slate-100 text-[#18181B] rounded-xl border border-[#18181B] text-xs font-bold shadow-[2px_2px_0px_0px_#18181B] flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-[#133E2B]" />
              <span className="hidden sm:inline">Back to Home</span>
              <span className="sm:hidden">Back</span>
            </button>

            <div className="flex items-center gap-2.5 border-l border-slate-300 pl-3">
              <BrandLogo variant="mark-only" size="sm" />
              <div>
                <h1 className="text-sm sm:text-base font-bold text-[#18181B] font-brand leading-tight">
                  IIT <span className="text-[#E61E2B]">Foundation</span>
                </h1>
                <p className="text-[10px] text-[#133E2B] font-bold uppercase tracking-wider hidden sm:block">
                  Student Analytics & Performance Portal
                </p>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-2">
            <button
              id="portal-print-scorecard-btn"
              onClick={handlePrintScorecard}
              className="px-3.5 py-2 bg-white hover:bg-slate-50 text-[#18181B] border border-[#18181B] rounded-xl text-xs font-bold shadow-[2px_2px_0px_0px_#18181B] flex items-center gap-1.5 transition-all cursor-pointer"
              title="Print or Save Official Student Scorecard"
            >
              <Printer className="w-3.5 h-3.5 text-[#133E2B]" />
              <span className="hidden md:inline">Print Scorecard</span>
              <span className="md:hidden">Print</span>
            </button>

            <button
              id="portal-book-trial-btn"
              onClick={onOpenDemoModal}
              className="px-3.5 py-2 bg-[#133E2B] hover:bg-[#0E2F20] text-white rounded-xl text-xs font-bold border border-[#18181B] shadow-[2px_2px_0px_0px_#18181B] flex items-center gap-1.5 transition-all cursor-pointer font-brand"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Book Demo Class</span>
            </button>
          </div>

        </div>
      </header>

      {/* Main Portal Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-6">
        
        {/* Portal Page Intro Banner */}
        <div className="bg-[#0B1E17] text-white rounded-3xl p-6 sm:p-8 border-2 border-[#18181B] shadow-[4px_4px_0px_0px_#18181B] relative overflow-hidden">
          <div className="relative z-10 space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-emerald-200 border border-white/20 rounded-full text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Academic Transparency & Weekly Continuous Evaluation</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal font-serif-heading text-[#FAF8F5]">
              Student Performance & Diagnostics Portal
            </h2>
            
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Real-time chapter mastery, test score history, attendance tracking, and individual mentor remarks for students enrolled at IIT Foundation Talegaon Dabhade.
            </p>
          </div>

          {/* Student Selector Row inside Hero */}
          <div className="mt-6 pt-5 border-t border-white/15 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-slate-400 font-medium">Select Student Profile:</span>
              {STUDENTS_DATABASE.map(student => (
                <button
                  key={student.id}
                  onClick={() => setSelectedStudentId(student.id)}
                  className={`px-3 py-1.5 rounded-lg border font-bold transition-all cursor-pointer ${
                    student.id === selectedStudentId
                      ? 'bg-white text-[#0B1E17] border-white shadow-sm'
                      : 'bg-white/10 text-slate-200 border-white/20 hover:bg-white/20'
                  }`}
                >
                  {student.name} ({student.batch.split(' ')[1] || 'Batch'})
                </button>
              ))}
            </div>

            <div className="text-emerald-300 text-[11px] font-semibold flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>Last Synced: Today at 8:30 PM (Post Doubt Session)</span>
            </div>
          </div>
        </div>

        {/* Student Profile Card & Key Metrics Strip */}
        <div className="bg-white rounded-2xl border-2 border-[#18181B] p-5 sm:p-6 shadow-[3px_3px_0px_0px_#18181B] space-y-6">
          
          {/* Top Identity Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#EBF4EC] border-2 border-[#18181B] flex items-center justify-center text-[#133E2B] font-bold text-xl font-brand shrink-0">
                {currentStudent.name.split(' ').map(n => n[0]).join('')}
              </div>
              
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#18181B] font-brand">
                    {currentStudent.name}
                  </h3>
                  <span className="px-2.5 py-0.5 bg-[#EBF4EC] text-[#133E2B] border border-[#C2E0C6] rounded-full text-[11px] font-bold">
                    Active Student
                  </span>
                </div>
                
                <p className="text-xs text-slate-600 font-medium">
                  Roll No: <span className="font-mono font-bold text-[#18181B]">{currentStudent.rollNo}</span> • Batch: <span className="font-bold text-[#133E2B]">{currentStudent.batch}</span>
                </p>
                <p className="text-[11px] text-slate-500">
                  Target: {currentStudent.targetExam} • Center: Talegaon Dabhade
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={`https://wa.me/91${INSTITUTE_INFO.phoneClean}?text=Hello%20IIT%20Foundation,%20inquiring%20about%20performance%20report%20for%20${encodeURIComponent(currentStudent.name)}%20(${currentStudent.rollNo})`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 bg-[#FAF8F5] hover:bg-slate-100 text-[#18181B] border border-[#18181B] rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors shadow-2xs"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-700" />
                <span>Discuss with Faculty</span>
              </a>
            </div>
          </div>

          {/* 4 Core KPI Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
            
            <div className="bg-[#FAF8F5] rounded-xl p-4 border border-slate-200 space-y-1">
              <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                Attendance Rate
              </span>
              <p className="text-2xl font-bold text-[#133E2B] font-brand">
                {currentStudent.attendanceRate}
              </p>
              <p className="text-[11px] text-slate-600">
                {currentStudent.attendanceDetails.attended}/{currentStudent.attendanceDetails.total} Sessions ({currentStudent.attendanceDetails.punctuality})
              </p>
            </div>

            <div className="bg-[#FAF8F5] rounded-xl p-4 border border-slate-200 space-y-1">
              <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                Batch Standing
              </span>
              <p className="text-2xl font-bold text-[#18181B] font-brand">
                Rank #{currentStudent.overallRank}
              </p>
              <p className="text-[11px] text-emerald-700 font-semibold">
                Out of {currentStudent.totalStudentsInBatch} students in batch
              </p>
            </div>

            <div className="bg-[#FAF8F5] rounded-xl p-4 border border-slate-200 space-y-1">
              <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                Cumulative Avg
              </span>
              <p className="text-2xl font-bold text-[#133E2B] font-brand">
                {currentStudent.cumulativeScore}%
              </p>
              <p className="text-[11px] text-slate-600">
                Top 5% percentile benchmark
              </p>
            </div>

            <div className="bg-[#FAF8F5] rounded-xl p-4 border border-slate-200 space-y-1">
              <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                Doubt Clinic Logs
              </span>
              <p className="text-2xl font-bold text-[#18181B] font-brand">
                {currentStudent.doubtSessionsAttended} Sessions
              </p>
              <p className="text-[11px] text-slate-600">
                HW Completion: <strong className="text-[#133E2B]">{currentStudent.homeworkSubmissionRate}</strong>
              </p>
            </div>

          </div>

        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b-2 border-slate-200 space-x-1 sm:space-x-3 overflow-x-auto text-xs sm:text-sm font-bold">
          <button
            onClick={() => setActiveTab('overview')}
            className={`pb-3 px-3 sm:px-4 border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'overview'
                ? 'border-[#133E2B] text-[#133E2B]'
                : 'border-transparent text-slate-600 hover:text-[#18181B]'
            }`}
          >
            Subject Mastery & Diagnostics
          </button>
          
          <button
            onClick={() => setActiveTab('tests')}
            className={`pb-3 px-3 sm:px-4 border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'tests'
                ? 'border-[#133E2B] text-[#133E2B]'
                : 'border-transparent text-slate-600 hover:text-[#18181B]'
            }`}
          >
            Recent Tests & Mocks ({currentStudent.recentTests.length})
          </button>

          <button
            onClick={() => setActiveTab('feedback')}
            className={`pb-3 px-3 sm:px-4 border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'feedback'
                ? 'border-[#133E2B] text-[#133E2B]'
                : 'border-transparent text-slate-600 hover:text-[#18181B]'
            }`}
          >
            Teacher Remarks & Advice
          </button>

          <button
            onClick={() => setActiveTab('schedule')}
            className={`pb-3 px-3 sm:px-4 border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'schedule'
                ? 'border-[#133E2B] text-[#133E2B]'
                : 'border-transparent text-slate-600 hover:text-[#18181B]'
            }`}
          >
            Upcoming Mock Test Schedule
          </button>
        </div>

        {/* TAB 1: SUBJECT MASTERY & DIAGNOSTICS */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {currentStudent.subjectMastery.map((sub, idx) => (
                <div 
                  key={idx}
                  className="bg-white rounded-2xl p-5 border-2 border-[#18181B] shadow-[3px_3px_0px_0px_#18181B] space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-base text-[#18181B] font-brand">{sub.name}</h4>
                      <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-[#EBF4EC] text-[#133E2B] border border-[#C2E0C6]">
                        {sub.grade}
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs font-bold">
                        <span className="text-slate-600">Mastery Index</span>
                        <span className="text-[#133E2B]">{sub.score}%</span>
                      </div>
                      <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden border border-slate-200">
                        <div 
                          className="h-full bg-[#133E2B] rounded-full transition-all duration-700"
                          style={{ width: `${sub.score}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Strong Topics */}
                    <div className="space-y-1.5 pt-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        Proven Strengths:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {sub.strongTopics.map((top, tIdx) => (
                          <span key={tIdx} className="px-2 py-0.5 bg-emerald-50 text-emerald-900 border border-emerald-200 rounded text-[11px]">
                            {top}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Focus Areas */}
                    <div className="space-y-1.5 pt-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 text-amber-600" />
                        Target Improvement Topics:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {sub.focusAreas.map((foc, fIdx) => (
                          <span key={fIdx} className="px-2 py-0.5 bg-amber-50 text-amber-900 border border-amber-200 rounded text-[11px]">
                            {foc}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>

                  <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
                    <span>Evaluated across 14 Topic Mocks</span>
                    <span className="font-bold text-[#133E2B]">Target: 95%+</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Methodology Note Box */}
            <div className="bg-[#FAF8F5] rounded-2xl p-5 sm:p-6 border border-slate-300 flex flex-col sm:flex-row items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#133E2B] text-white flex items-center justify-center shrink-0 border border-[#18181B]">
                <TrendingUp className="w-5 h-5 text-[#95D5B2]" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-[#18181B] text-sm sm:text-base font-brand">
                  How IIT Foundation Calculates Mastery Indexes
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Unlike traditional test-only percentage calculations, our proprietary diagnostic weighted average factors in: (1) Chapter-level concept retention, (2) Derivation and step-marking accuracy for 12th Board examinations, (3) Speed velocity during negative-marking entrance conditions (JEE/CET), and (4) Homework worksheet completeness.
                </p>
              </div>
            </div>

          </div>
        )}

        {/* TAB 2: RECENT TESTS & MOCKS */}
        {activeTab === 'tests' && (
          <div className="space-y-5">
            
            {/* Filter Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-4 rounded-xl border border-slate-200 text-xs">
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-700">Filter by Subject:</span>
                {['All', 'Mathematics', 'Physics', 'Chemistry'].map(sub => (
                  <button
                    key={sub}
                    onClick={() => setSelectedSubjectFilter(sub)}
                    className={`px-3 py-1 rounded-lg border font-bold transition-all cursor-pointer ${
                      selectedSubjectFilter === sub
                        ? 'bg-[#133E2B] text-white border-[#18181B]'
                        : 'bg-[#FAF8F5] text-slate-700 border-slate-300 hover:bg-slate-100'
                    }`}
                  >
                    {sub}
                  </button>
                ))}
              </div>

              <span className="text-slate-500 font-medium">
                Showing {filteredTests.length} evaluated tests
              </span>
            </div>

            {/* Test Cards List */}
            <div className="space-y-3">
              {filteredTests.map((test) => (
                <div 
                  key={test.id}
                  className="bg-white rounded-2xl p-5 border-2 border-[#18181B] shadow-[2px_2px_0px_0px_#18181B] flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#EBF4EC] text-[#133E2B] border border-[#C2E0C6]">
                        {test.subject}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">
                        {test.date}
                      </span>
                      <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        Batch Rank #{test.rank}
                      </span>
                    </div>

                    <h4 className="font-bold text-base text-[#18181B] font-brand">
                      {test.title}
                    </h4>

                    <p className="text-xs text-slate-600 max-w-2xl">
                      <strong className="text-slate-800">Faculty Remarks:</strong> {test.remarks}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 shrink-0 bg-[#FAF8F5] p-3.5 rounded-xl border border-slate-200 text-center">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-500 block">Score</span>
                      <span className="text-lg font-bold text-[#133E2B] font-brand">{test.score}/{test.maxScore}</span>
                    </div>
                    <div className="border-l border-slate-300 pl-4">
                      <span className="text-[10px] uppercase font-bold text-slate-500 block">Percentage</span>
                      <span className="text-lg font-bold text-[#18181B] font-brand">{test.percentage}%</span>
                    </div>
                    <div className="border-l border-slate-300 pl-4 hidden sm:block">
                      <span className="text-[10px] uppercase font-bold text-slate-500 block">Batch Avg</span>
                      <span className="text-sm font-bold text-slate-600 font-brand mt-1 block">{test.batchAvg}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* TAB 3: TEACHER REMARKS & FEEDBACK */}
        {activeTab === 'feedback' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentStudent.teacherRemarks.map((rem, idx) => (
                <div 
                  key={idx}
                  className="bg-white rounded-2xl p-5 border-2 border-[#18181B] shadow-[3px_3px_0px_0px_#18181B] space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-sm sm:text-base text-[#18181B] font-brand">
                        {rem.faculty}
                      </h4>
                      <p className="text-xs text-[#133E2B] font-medium">{rem.subject}</p>
                    </div>
                    <span className="text-[11px] text-slate-500">{rem.date}</span>
                  </div>

                  <div className="p-3.5 bg-[#FAF8F5] rounded-xl border border-slate-200 text-xs text-slate-700 leading-relaxed italic">
                    "{rem.comment}"
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                    <span>Logged during weekly mentor review</span>
                    <span className="text-emerald-700 font-bold">Verified by Academic Head</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Parent Feedback CTA */}
            <div className="bg-[#FAF8F5] rounded-2xl p-5 border border-slate-300 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div>
                <h4 className="font-bold text-sm text-[#18181B] font-brand">Parents: Have questions about this feedback?</h4>
                <p className="text-slate-600 text-xs">Book a 15-minute 1-on-1 counselor call or visit the Talegaon center.</p>
              </div>
              <a
                href={`tel:${INSTITUTE_INFO.phoneClean}`}
                className="px-4 py-2.5 bg-[#133E2B] text-white rounded-xl font-bold flex items-center gap-1.5 hover:bg-[#0E2F20] transition-colors border border-[#18181B] font-brand"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Center Director ({INSTITUTE_INFO.phone})</span>
              </a>
            </div>
          </div>
        )}

        {/* TAB 4: UPCOMING MOCK TEST SCHEDULE */}
        {activeTab === 'schedule' && (
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-5 sm:p-6 border-2 border-[#18181B] shadow-[3px_3px_0px_0px_#18181B] space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-base text-[#18181B] font-brand">Upcoming Exam Calendar & Prelims</h4>
                  <p className="text-xs text-slate-500">Compulsory mock series for 12th Boards & Entrance batches</p>
                </div>
                <span className="text-xs font-bold text-[#133E2B] bg-[#EBF4EC] px-3 py-1 rounded-full border border-[#C2E0C6]">
                  Talegaon Examination Hall
                </span>
              </div>

              <div className="space-y-3">
                {currentStudent.upcomingSchedule.map((sched, idx) => (
                  <div key={idx} className="p-4 bg-[#FAF8F5] rounded-xl border border-slate-200 space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="font-bold text-sm text-[#18181B] font-brand">{sched.title}</span>
                      <span className="px-2 py-0.5 bg-amber-100 text-amber-900 border border-amber-300 rounded text-[11px] font-bold">
                        {sched.date} • {sched.time}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600">
                      <strong>Syllabus Scope:</strong> {sched.syllabus}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Bottom Scorecard Summary & Print View Template */}
        <div className="p-6 bg-white rounded-2xl border-2 border-[#18181B] shadow-[3px_3px_0px_0px_#18181B] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-bold text-base text-[#18181B] font-brand">
              Official Academic Transcript & Scorecard
            </h4>
            <p className="text-xs text-slate-500">
              Certified by IIT Foundation (Inspiring Inborn Talent) • Talegaon Dabhade Center
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handlePrintScorecard}
              className="px-5 py-2.5 bg-white hover:bg-slate-50 text-[#18181B] border-2 border-[#18181B] rounded-xl text-xs font-bold shadow-[2px_2px_0px_0px_#18181B] flex items-center gap-2 cursor-pointer font-brand"
            >
              <Download className="w-4 h-4 text-[#133E2B]" />
              <span>Download Official Report (PDF)</span>
            </button>

            <button
              onClick={onBackToHome}
              className="px-5 py-2.5 bg-[#133E2B] hover:bg-[#0E2F20] text-white rounded-xl text-xs font-bold border-2 border-[#18181B] shadow-[2px_2px_0px_0px_#18181B] flex items-center gap-1.5 cursor-pointer font-brand"
            >
              <span>Return to Main Website</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </main>

      {/* Portal Footer */}
      <footer className="mt-12 bg-[#0B1E17] text-white border-t-2 border-[#18181B] py-6 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p>© 2026 IIT Foundation (Inspiring Inborn Talent) • Student Analytics Portal</p>
          <div className="flex items-center gap-4">
            <button onClick={onBackToHome} className="hover:text-white transition-colors cursor-pointer">
              Home Page
            </button>
            <span className="text-slate-600">•</span>
            <span>Talegaon Dabhade (090212 16804)</span>
          </div>
        </div>
      </footer>

    </div>
  );
};
