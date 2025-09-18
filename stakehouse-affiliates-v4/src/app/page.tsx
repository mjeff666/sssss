"use client";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { CheckCircle2, LineChart, Coins, ShieldCheck, Clock, Globe2, Sparkles, Rocket, FileText, Link2, Copy, Mail, Phone, Send, Wallet, Layers3, ArrowRight, Info } from "lucide-react";

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
);

const SectionTitle = ({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) => (
  <div className="text-center mb-10">
    {eyebrow && (
      <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-400">
        <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
        {eyebrow}
      </div>
    )}
    <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold text-white">{title}</h2>
    {subtitle && <p className="mt-3 text-neutral-300 max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

const Feature = ({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) => (
  <Card className="bg-neutral-900/60 border-neutral-800 backdrop-blur">
    <CardHeader className="pb-2">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-xl bg-gradient-to-br from-rose-500/20 to-fuchsia-500/20 border border-rose-500/30">
          <Icon className="h-5 w-5 text-rose-300" />
        </div>
        <CardTitle className="text-white text-base">{title}</CardTitle>
      </div>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-neutral-400 leading-relaxed">{desc}</p>
    </CardContent>
  </Card>
);

const Tier = ({ pct, range, note }: { pct: number; range: string; note?: string }) => (
  <Card className="bg-neutral-900/60 border-neutral-800 text-center hover:border-rose-500/60 transition-colors">
    <CardHeader>
      <CardTitle className="text-4xl font-bold text-white">{pct}%</CardTitle>
      <p className="text-neutral-400 text-sm">{range}</p>
    </CardHeader>
    {note && (
      <CardContent>
        <Badge variant="secondary" className="bg-neutral-800 border-neutral-700 text-neutral-200">{note}</Badge>
      </CardContent>
    )}
  </Card>
);

const Stat = ({ label, value }: { label: string; value: string }) => (
  <div className="text-center">
    <div className="text-3xl font-semibold text-white">{value}</div>
    <div className="text-neutral-400 text-sm">{label}</div>
  </div>
);

export default function Page() {
  return (
    <div className="min-h-screen w-full bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(244,63,94,.15),transparent),radial-gradient(800px_400px_at_80%_10%,rgba(217,70,239,.12),transparent)] bg-neutral-950 text-white">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-neutral-900/70 bg-neutral-950/70 backdrop-blur">
        <Container>
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-rose-500 to-fuchsia-600" />
              <span className="font-semibold tracking-wide">StakeHouse Affiliates</span>
              <Badge className="ml-2 bg-rose-600/20 text-rose-200 border-rose-500/30">Official</Badge>
            </div>
            <div className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
              <a href="#commission" className="hover:text-white">Commission</a>
              <a href="#tools" className="hover:text-white">Tools</a>
              <a href="#faq" className="hover:text-white">FAQ</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" className="text-neutral-200">Log in</Button>
              <Button className="bg-rose-600 hover:bg-rose-500">Join now</Button>
            </div>
          </div>
        </Container>
      </header>

      {/* Hero */}
      <section className="relative">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 py-14 md:py-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-500/10 px-3 py-1 text-xs text-rose-200">
                <Sparkles className="h-4 w-4" />
                Up to 40% RevShare • CPA • Hybrid • No Negative Carryover
              </div>
              <h1 className="mt-5 text-4xl md:text-5xl font-semibold leading-tight">
                The Official StakeHouse Affiliate Program
              </h1>
              <p className="mt-4 text-neutral-300 max-w-xl">
                Fast onboarding, real-time reporting, lifetime revenue share,CPA and weekly payouts in crypto or fiat. Built for professionals.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button className="bg-rose-600 hover:bg-rose-500">
                  Become a partner <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-neutral-700 text-neutral-200">
                  Get media kit
                </Button>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-6">
                <Stat label="Avg. Approval" value="< 1h" />
                <Stat label="EPC (30d)" value="$4.1+" />
                <Stat label="Top GEOs" value="TIER1 • TIER2 •" />
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video w-full rounded-2xl border border-neutral-800 bg-neutral-900/60 flex items-center justify-center">
                <div className="text-neutral-400 text-sm">
                  Hero artwork / banner (replace with program creative)
                </div>
              </div>
              <div className="mt-3 text-xs text-neutral-500 flex items-center gap-2">
                <Info className="h-4 w-4" /> Replace with casino hero image or short loop (MP4/webm).
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* USPs */}
      <section>
        <Container>
          <SectionTitle
            eyebrow="Program benefits"
            title="Built for pro affiliates"
            subtitle="Transparent tracking, fair deals, instant support. Everything you actually need to scale."
          />
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            <Feature icon={CheckCircle2} title="24/7 support" desc="Senior AMs on Telegram & email with <2h response." />
            <Feature icon={Layers3} title="Lifetime revenue" desc="RevShare on active players for the lifetime of the account." />
            <Feature icon={ShieldCheck} title="No negative carryover" desc="NGR never drags across months. Start fresh each period." />
            <Feature icon={Coins} title="CPA & Hybrid" desc="Flexible deals per GEO and source. Talk to us." />
            <Feature icon={LineChart} title="Deep reporting" desc="Cohorts, day-0/7/30 ARPU, FTD funnels, retention curves." />
            <Feature icon={Clock} title="Weekly payouts" desc="Net-7/Net-14 via USDT (TRC/ETH), SEPA, SWIFT." />
          </div>
        </Container>
      </section>

      {/* Commission tiers */}
      <section id="commission" className="py-16 md:py-20">
        <Container>
          <SectionTitle
            eyebrow="Commission"
            title="RevShare tiers"
            subtitle="Scale your earnings with transparent brackets. Custom deals for volume partners."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Tier pct={25} range="$0 – $5,000" />
            <Tier pct={30} range="$5,001 – $10,000" />
            <Tier pct={35} range="$10,001 – $25,000" />
            <Tier pct={40} range="$25,001+" note="VIP / custom" />
          </div>
          <div className="mt-6 text-center text-neutral-400 text-sm">
            Hybrid and CPA available upon request. Media-buy and streamer packages supported.
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 md:py-20">
        <Container>
          <SectionTitle eyebrow="FAQ" title="Questions? We’ve got answers." />
          <Accordion type="single" collapsible className="bg-neutral-900/50 border border-neutral-800 rounded-2xl px-2">
            <AccordionItem value="item-1"><AccordionTrigger>Do I need to pay something to join?</AccordionTrigger><AccordionContent>No. The program is free. We approve fast if your traffic is compliant and GEO-relevant.</AccordionContent></AccordionItem>
            <AccordionItem value="item-2"><AccordionTrigger>How is my commission calculated?</AccordionTrigger><AccordionContent>Standard NGR model with no negative carryover. CPA/Hybrid based on agreed KPIs (FTD, deposit, quality).</AccordionContent></AccordionItem>
            <AccordionItem value="item-3"><AccordionTrigger>What reporting do I get?</AccordionTrigger><AccordionContent>Real-time dashboard, CSV/XLSX export, API access, S2S postbacks. Cohort and funnel views included.</AccordionContent></AccordionItem>
            <AccordionItem value="item-4"><AccordionTrigger>What are the restricted GEOs?</AccordionTrigger><AccordionContent>US, UK, FR, NL, ES, IT, DE (unless otherwise agreed), sanctioned jurisdictions and OFAC lists.</AccordionContent></AccordionItem>
            <AccordionItem value="item-5"><AccordionTrigger>When do I get paid?</AccordionTrigger><AccordionContent>Weekly (Net-7/14) or Monthly (Net-30). Min. payout $200. Methods: USDT (TRC20/ERC20), SEPA, SWIFT.</AccordionContent></AccordionItem>
          </Accordion>
        </Container>
      </section>

      {/* Join now / Contact */}
      <section id="contact" className="py-16">
        <Container>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-neutral-900/60 border-neutral-800">
              <CardHeader><CardTitle className="text-white">Become a partner</CardTitle></CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-3">
                  <Input placeholder="Company / Brand" className="bg-neutral-900 border-neutral-800 text-neutral-100 placeholder:text-neutral-500" />
                  <Input placeholder="Website" className="bg-neutral-900 border-neutral-800 text-neutral-100 placeholder:text-neutral-500" />
                  <Input placeholder="Email" className="bg-neutral-900 border-neutral-800 text-neutral-100 placeholder:text-neutral-500" />
                  <Input placeholder="Telegram / Skype" className="bg-neutral-900 border-neutral-800 text-neutral-100 placeholder:text-neutral-500" />
                </div>
                <Button className="mt-4 w-full bg-rose-600 hover:bg-rose-500">Apply now</Button>
                <p className="mt-3 text-xs text-neutral-500">By applying you agree to our Affiliate T&C and Marketing Policy.</p>
              </CardContent>
            </Card>
            <Card className="bg-neutral-900/60 border-neutral-800">
              <CardHeader><CardTitle className="text-white">Direct line to our AMs</CardTitle></CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm text-neutral-300">
                  <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-rose-300" /> affiliates@stakehouse.io</div>
                  <div className="flex items-center gap-3"><Send className="h-4 w-4 text-rose-300" /> @StakeHouse_Affiliates</div>
                  <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-rose-300" /> +000 000 000</div>
                </div>
                <div className="mt-6 text-xs text-neutral-500">Need a test account, custom LP or API token? Ping us and we’ll set you up the same day.</div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-900/70 py-10">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-neutral-500">
            <div className="flex items-center gap-3">
              <div className="h-6 w-6 rounded-lg bg-gradient-to-br from-rose-500 to-fuchsia-600" />
              <span>© {new Date().getFullYear()} StakeHouse Affiliates</span>
            </div>
            <div className="flex items-center gap-4">
              <a className="hover:text-neutral-300" href="#">Affiliate T&C</a>
              <a className="hover:text-neutral-300" href="#">Marketing Policy</a>
              <a className="hover:text-neutral-300" href="#">Responsible Gaming</a>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}
