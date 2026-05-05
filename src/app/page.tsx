import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BookOpen, ShieldCheck, ArrowRight, Layers, Sparkles, Target, Terminal, Search, LayoutPanelLeft } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-canvas font-sans text-ink selection:bg-surface-strong">
      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 h-16 bg-canvas border-b border-hairline">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 flex items-center justify-center">
            <span className="text-primary font-bold text-xl">L<span className="text-ink">L</span></span>
          </div>
          <span className="text-lg font-medium text-ink">LevelLogic</span>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <Link href="#features" className="text-[14px] font-medium text-ink hover:text-primary transition-colors">Features</Link>
          <Link href="#enterprise" className="text-[14px] font-medium text-ink hover:text-primary transition-colors">Enterprise</Link>
          <Link href="#blog" className="text-[14px] font-medium text-ink hover:text-primary transition-colors">Blog</Link>
          <Link href="#forum" className="text-[14px] font-medium text-ink hover:text-primary transition-colors">Forum</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/student/login" className="text-[14px] font-medium text-ink hover:text-primary transition-colors">Sign In</Link>
          <Button variant="default" asChild>
            <Link href="/student/register">Get Started</Link>
          </Button>
        </div>
      </nav>

      {/* Hero Band */}
      <main className="flex-1 pt-32">
        <section className="px-6 max-w-5xl mx-auto text-center mb-16">
          <h1 className="text-[56px] md:text-[72px] font-normal leading-[1.1] tracking-[-2.16px] text-ink mb-6 max-w-[900px] mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000">
            Master the logic. <br />
            Elevate your career.
          </h1>
          
          <p className="text-[16px] md:text-[18px] font-normal text-body mb-10 max-w-[600px] mx-auto leading-[1.5] tracking-[0.08px] animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
            LevelLogic is the premium testing environment designed to sharpen your cognitive abilities and prepare you for technical excellence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-300">
            <Button size="download" asChild>
              <Link href="/student/register">
                Start Practicing Free
              </Link>
            </Button>
            <Link href="/admin/login" className="text-[14px] font-medium text-ink underline underline-offset-4 hover:text-primary transition-colors">
              Admin Dashboard
            </Link>
          </div>
        </section>

        {/* IDE Mockup */}
        <section className="px-6 max-w-[1000px] mx-auto mb-32 animate-in fade-in slide-in-from-bottom-24 duration-1000 delay-500">
          <div className="bg-surface-card rounded-[12px] border border-hairline overflow-hidden flex flex-col md:flex-row shadow-none">
            {/* Sidebar */}
            <div className="w-full md:w-64 bg-canvas-soft border-r border-hairline p-4 hidden md:block">
              <div className="text-[11px] font-semibold tracking-[0.88px] text-ink uppercase mb-4">Explorer</div>
              <div className="space-y-1 text-[13px] font-mono text-body">
                <div className="flex items-center gap-2 py-1 px-2 bg-hairline-soft rounded-md text-ink"><LayoutPanelLeft className="w-3.5 h-3.5" /> tests</div>
                <div className="flex items-center gap-2 py-1 px-2 hover:bg-hairline-soft rounded-md cursor-pointer"><Target className="w-3.5 h-3.5" /> analytics</div>
                <div className="flex items-center gap-2 py-1 px-2 hover:bg-hairline-soft rounded-md cursor-pointer"><Search className="w-3.5 h-3.5" /> users</div>
              </div>
            </div>
            
            {/* Main Editor */}
            <div className="flex-1 bg-surface-card p-6 min-h-[400px]">
              <div className="flex items-center gap-4 mb-6 border-b border-hairline pb-4">
                <div className="text-[13px] font-mono text-ink">aptitude-test.ts</div>
                <div className="flex gap-2">
                  <span className="bg-timeline-thinking text-ink text-[11px] font-semibold tracking-[0.88px] uppercase rounded-full px-2.5 py-1">Thinking</span>
                  <span className="bg-timeline-grep text-ink text-[11px] font-semibold tracking-[0.88px] uppercase rounded-full px-2.5 py-1">Grepping</span>
                </div>
              </div>
              <div className="font-mono text-[13px] leading-[1.5] text-body">
                <span className="text-muted">// Analyze user patterns</span><br/>
                <span className="text-primary">const</span> result = analyzeTest(answers);<br/><br/>
                <span className="text-primary">if</span> (result.score {">"} <span className="text-[#1f8a65]">90</span>) {"{"}<br/>
                &nbsp;&nbsp;console.log(<span className="text-[#c08532]">'Mastery achieved'</span>);<br/>
                {"}"}
              </div>
            </div>
          </div>
        </section>

        {/* Feature Cards */}
        <section className="px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-32">
          <div className="bg-surface-card border border-hairline rounded-[12px] p-6 hover:border-hairline-strong transition-all duration-300">
            <h3 className="text-[18px] font-semibold text-ink mb-2 leading-[1.4]">Adaptive Learning</h3>
            <p className="text-[16px] text-body leading-[1.5] mb-6">
              Experience tests that evolve with your performance. Identify weak spots and master complex logic patterns through iterative practice.
            </p>
            <Link href="/student/login" className="inline-flex items-center text-[14px] font-medium text-ink hover:text-primary transition-all">
              Start Learning <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>

          <div className="bg-surface-card border border-hairline rounded-[12px] p-6 hover:border-hairline-strong transition-all duration-300">
            <h3 className="text-[18px] font-semibold text-ink mb-2 leading-[1.4]">Enterprise Grade</h3>
            <p className="text-[16px] text-body leading-[1.5] mb-6">
              Administrators get full control over test creation, question banks, and detailed analytics to track candidate or student progress.
            </p>
            <Link href="/admin/login" className="inline-flex items-center text-[14px] font-medium text-ink hover:text-primary transition-all">
              Manage Platform <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* CTA Band */}
        <section className="bg-canvas py-[96px] text-center border-t border-hairline">
          <h2 className="text-[36px] font-normal leading-[1.2] tracking-[-0.72px] text-ink mb-8">Ready to master the logic?</h2>
          <Button size="download" asChild>
            <Link href="/student/register">
              Try LevelLogic now
            </Link>
          </Button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-canvas px-8 py-16 border-t border-hairline">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <span className="text-[14px] font-medium text-ink">LevelLogic Platform</span>
          </div>
          
          <div className="flex gap-8">
            <Link href="#" className="bg-transparent text-[14px] text-body hover:text-ink transition-colors">Privacy</Link>
            <Link href="#" className="bg-transparent text-[14px] text-body hover:text-ink transition-colors">Terms</Link>
            <Link href="#" className="bg-transparent text-[14px] text-body hover:text-ink transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

