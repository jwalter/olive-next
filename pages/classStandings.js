import Link from 'next/link'
import { GetClassStandings } from '../lib/api'
import { Runner } from '../components/runner'
import { StandingsTable } from '../components/standingsTable'

export default class extends React.Component {
    static async getInitialProps ({query}) {
        const compId = query.compId
        const className = query.className
        const standings = await GetClassStandings({className: className, compId: compId})
        return standings
    }
    render() {
        return <div>
            <h2>{this.props.url.query.className}</h2>
            <StandingsTable results={ this.props.results } />
            </div>
    }
}