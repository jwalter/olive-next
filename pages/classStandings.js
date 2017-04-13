import Link from 'next/link'
import { GetClassStandings } from '../lib/api'
import { Runner } from '../components/runner'
import { StandingsTable } from '../components/standingsTable'

export default class extends React.Component {
    constructor() {
        super()
        this.state = { results: []}
    }
    static async getInitialProps ({query}) {
        const compId = query.compId
        const className = query.className
        return {compId: compId,
            className: className
        }
    }
    async componentDidMount() {
        const standings = await GetClassStandings({className: this.props.className, compId: this.props.compId})
        this.setState({results: standings.results})
    }
    render() {
        return <div>
            <h2>{this.props.url.query.className}</h2>
            <StandingsTable results={ this.state.results } />
            </div>
    }
}