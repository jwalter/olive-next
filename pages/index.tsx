import Link from 'next/link'

import Spinner from "../components/spinner";
import { LiveOClient } from "../lib/liveo-client";

export default function IndexPage() {
  const { competitions, isLoading } = new LiveOClient().useCompetitions();
  if (isLoading) return <Spinner />;
  const eventItems = competitions.map((event) => (
    <li key={event.id}>
        {event.date} 
        <div className="inline-block pl-2">
            <Link href={`/competition/${event.id}`}>
                <a>{event.name}</a>
            </Link>
        </div>
    </li>
  ));
  return (
    <div>
      <div className="py-0">
        <h1 className="text-5xl text-center text-accent-1">Liveresultat orientering</h1>
        <ul>{eventItems}</ul>
      </div>
    </div>
  );
}
/*
import Competition from '../components/competition'
import { CompetitionsTable } from '../components/competitionsTable'


export default class extends React.Component {
    constructor() {
        super()
        this.state = { competitions: [] }
    }
    static async getInitialProps ({ req }) {
        return { competitions: [] }
    }
    async componentDidMount() {
        const resp = await fetch('https://cors.now.sh/http://liveresultat.orientering.se/api.php?method=getcompetitions')
        const json = await resp.json()
        this.setState({ competitions: json.competitions })
    }
    render() {
        return (
            <div className="container">
                <h1>oLive</h1>
                <CompetitionsTable competitions={this.state.competitions} />
                <style jsx>{`
                    div {
                        padding: 5px;
                    }
                `}</style>
            </div>
        )
    }

}
*/
