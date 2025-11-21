import TeamMemberCard from "./TeamMembersCard";

const defaultMembers = [
  {
    id: "p1",
    name: "Tom Cruise",
    role: "Founder & CEO",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=5c9b2b7d1d6e1b2b9e5d3b7a6e2c8c3f",
  },
  {
    id: "p2",
    name: "Emma Watson",
    role: "Marketing Director",
    image:
      "https://images.unsplash.com/photo-1545996124-1f6f3b4fb2d7?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=6b6d9f3a2f2a5c0b3d7c8f0a1b2c3d4e",
  },
  {
    id: "p3",
    name: "Will Smith",
    role: "Head of Operations",
    image:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=3f9c5b0a1e2d4b8c6a7f0e9b5c4d3a2b",
  },
];

const SkeletonCard = () => (
  <div className="w-[300px] bg-gray-100 rounded-md p-4 animate-pulse h-[430px]" />
);

const Team = ({ members, isLoading, error, onRetry }) => {
  const membersToShow =
    Array.isArray(members) && members.length > 0 ? members : defaultMembers;

  return (
    <section className="max-w-6xl mx-auto px-6 py-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-semibold">Meet the Team</h3>
        {error && (
          <div className="flex items-center gap-3">
            <p className="text-sm text-rose-600">
              Couldn't load live team data
            </p>
            <button
              onClick={onRetry}
              className="px-3 py-1 text-sm bg-rose-500 text-white rounded"
            >
              Retry
            </button>
          </div>
        )}
      </div>

      <div className="flex gap-6 flex-wrap justify-center">
        {isLoading
          ? [1, 2, 3].map((i) => <SkeletonCard key={i} />)
          : membersToShow.map((member) => (
              <TeamMemberCard
                key={member.id}
                name={member.name}
                role={member.role}
                image={member.image}
              />
            ))}
      </div>
    </section>
  );
};

export default Team;
