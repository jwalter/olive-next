import { useRouter } from "next/router";
import Spinner from "../../components/spinner";
import { LiveOClient } from "../../lib/liveo-client";

const Event = () => {
  const router = useRouter();
  const { id } = router.query;
  const { competition, isLoading } = new LiveOClient().useCompetition(id);
  if (isLoading) return <Spinner />;
  
  return (
    <div>
      <h3 className="text-2xl">{competition.name}</h3>
      <p>{competition.organizer}</p>
    </div>
  );
};

export default Event;
