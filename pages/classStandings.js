import Link from 'next/link'
import { GetClassStandings } from '../lib/api'
import { Runner } from '../components/runner'
import { StandingsTable } from '../components/standingsTable'

export default class extends React.Component {
    constructor() {
        super()
        this.state = { results: [],
            updater: -1
        }
        this.loadStandings = this.loadStandings.bind(this)
    }
    static async getInitialProps ({query}) {
        const compId = query.compId
        const className = query.className
        return {
            compId: compId,
            className: className
        }
    }
    async componentDidMount() {
        const standings = await GetClassStandings({className: this.props.className, compId: this.props.compId})
        const updater = setInterval(this.loadStandings, 2000)
        this.setState({
            results: standings.results,
            splitControls: standings.splitcontrols,
            lastHash: standings.hash,
            updater: updater
        })
    }
    componentWillUnmount() {
        clearInterval(this.state.updater)
    }
    async loadStandings() {
        const standings = await GetClassStandings({
            className: this.props.className,
            compId: this.props.compId,
            lastHash: this.state.lastHash
        })
        if (standings.status !== 'NOT MODIFIED') {
            this.setState({
                results: standings.results,
                lastHash: standings.hash
            })
        }
    }
    render() {
        return <div className="header">
            <h1>{this.props.url.query.className}</h1>
            <StandingsTable splitControls={ this.state.splitControls } results={ this.state.results } />
            </div>
    }
}