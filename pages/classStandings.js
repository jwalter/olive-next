import Link from 'next/link'
import { GetClassStandings } from '../lib/api'

export default class extends React.Component {
    static async getInitialProps () {
        const standings = await GetClassStandings({className: 'H40'})
        console.log(standings)
        return standings
    }
    render() {
        return <div>
            <h2>{this.props.url.query.className}</h2>
            <div>
            { this.props.results.map((result, index) => <div>{result.name}</div>)}
            </div>
            </div>
    }
}