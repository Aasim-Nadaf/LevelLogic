import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BookOpen, ShieldCheck } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-ocean-text">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 h-16 bg-white border-b border-border">
        <div className="text-[20px] font-bold text-ocean-text">
          Aptitude<span className="text-ocean">Pro</span>
        </div>
        <div className="flex gap-4">
          <Button variant="secondary" asChild>
            <Link href="/student/login">Student Login</Link>
          </Button>
          <Button variant="accent" asChild>
            <Link href="/admin/login">Admin Login</Link>
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center pt-[80px] px-6">
        <div className="max-w-[680px] w-full text-center">
          <h1 className="text-[36px] font-bold text-ocean-text tracking-[-0.02em] mb-4">
            Sharpen Your Skills. Ace Every Test.
          </h1>
          <p className="text-[16px] font-normal text-ocean-mid-text">
            The premium platform for practicing aptitude tests and improving your problem-solving abilities.
          </p>
          
          <div className="h-[1px] w-[48px] bg-border mx-auto my-[24px]"></div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8">
            {/* Student Card */}
            <div className="bg-white border border-border rounded-[14px] shadow-[var(--shadow-card-md)] p-[28px] max-w-[280px] w-full flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-ocean-mist flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-ocean" />
              </div>
              <h3 className="text-lg font-bold text-ocean-deep mb-2">For Students</h3>
              <p className="text-sm text-ocean-muted mb-6">
                Practice tests, track your progress, and prepare for success.
              </p>
              <Button className="w-full" asChild>
                <Link href="/student/login">Start as Student</Link>
              </Button>
            </div>

            {/* Admin Card */}
            <div className="bg-white border border-border rounded-[14px] shadow-[var(--shadow-card-md)] p-[28px] max-w-[280px] w-full flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-ocean-sky flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8 text-ocean-deep" />
              </div>
              <h3 className="text-lg font-bold text-ocean-deep mb-2">For Administrators</h3>
              <p className="text-sm text-ocean-muted mb-6">
                Create tests, manage questions, and evaluate performance.
              </p>
              <Button variant="accent" className="w-full" asChild>
                <Link href="/admin/login">Admin Access</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-ocean-sky py-4 text-center">
        <p className="text-[12px] font-normal text-ocean-muted">
          &copy; {new Date().getFullYear()} AptitudePro Platform. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
