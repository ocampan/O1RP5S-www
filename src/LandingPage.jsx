// src/LandingPage.jsx
import React from "react";
import { Button } from "./components/Button";
import { Card, CardContent } from "./components/Card";
import { Input } from "./components/Input";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center px-4">
      <header className="text-center mt-20 mb-16 max-w-2xl">
        <h1 className="text-4xl font-bold leading-tight mb-4">
          Structure for the storm.
        </h1>
        <p className="text-lg text-gray-600">
          Pebble Pact by OurPebbles.com is an emotional infrastructure system to help couples, co-parents, and families build peace — one small agreement at a time.
        </p>
      </header>

      <section className="max-w-4xl w-full grid gap-8">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">What’s Broken?</h2>
            <p className="text-gray-700">
              Most relationships break down from a lack of structure. Co-parents ghost each other. Couples forget the little things. Disagreements spiral because nothing is logged, acknowledged, or resolved.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">What We’re Building</h2>
            <p className="text-gray-700 mb-4">
              Pebble Pact is a new way to build and maintain trust. From shared agreements to incident logging to emotional SLAs, it gives structure to chaos and supports growth, fairness, and accountability.
            </p>
            <ul className="list-disc pl-6 text-gray-800">
              <li>Customizable relationship pacts with financial commitments</li>
              <li>Behavioral triggers and escrow logic</li>
              <li>Incident reporting + emotional resolution flows</li>
              <li>Shared goals, milestones, and relationship health scoring</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Who It’s For</h2>
            <ul className="list-disc pl-6 text-gray-800">
              <li>Couples who want more structure and accountability</li>
              <li>Co-parents managing high-conflict or complex schedules</li>
              <li>Therapists and mediators guiding clients through relational repair</li>
              <li>Anyone who wants clarity and peace in shared relationships</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 flex flex-col items-center">
            <h2 className="text-2xl font-semibold mb-4">Join the Waitlist</h2>
            <form
              action="https://your-waitlist-backend.com/api/waitlist"
              method="POST"
              className="flex flex-col sm:flex-row gap-2 w-full max-w-md"
            >
              <Input
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                className="flex-1"
              />
              <Button type="submit">Notify Me</Button>
            </form>
            <p className="text-sm text-gray-500 mt-2 text-center">
              We’ll email you when we’re ready. No spam — just pebbles.
            </p>
          </CardContent>
        </Card>
      </section>

      <footer className="mt-24 mb-8 text-sm text-gray-400">
        &copy; {new Date().getFullYear()} OurPebbles.com — Powered by O1RP5S
      </footer>
    </div>
  );
}
