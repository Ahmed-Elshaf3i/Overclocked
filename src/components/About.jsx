import { useEffect, useState } from "react";
import Hero from "./about/Hero";
import Stats from "./about/Stats";
import Team from "./about/Team";
import Features from "./about/Features";
import ErrorBoundary from "./ErrorBoundary";
import { teamMembers as localTeamMembers } from "./about/teamMembers";

const About = () => {
  const [team, setTeam] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadTeam = async () => {
    setIsLoading(true);
    setError(null);
    try {
      // Try network fetch first (endpoint name as discussed)
      const res = await fetch("/app/teammembers");
      if (!res.ok) throw new Error("Network response was not ok");
      const data = await res.json();
      const members = Array.isArray(data)
        ? data
        : data?.items ?? data?.results ?? [];
      if (members.length === 0) {
        // fallback to local if remote returns empty
        setTeam(localTeamMembers);
      } else {
        setTeam(members);
      }
    } catch (err) {
      // On any error, use local file as graceful fallback
      console.warn("Falling back to local team data due to:", err);
      setError(err);
      setTeam(localTeamMembers);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadTeam();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="bg-white text-gray-800">
      <ErrorBoundary>
        <Hero />
        <Stats />
        <Team
          members={team}
          isLoading={isLoading}
          error={error}
          onRetry={loadTeam}
        />
        <Features />
      </ErrorBoundary>
    </main>
  );
};

export default About;
