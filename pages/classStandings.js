import Link from 'next/link'
import { GetClassStandings } from '../lib/api'

const Runner = ({runner}) => {
    return <tr> 
        <td>{ runner.name }</td>
        <td>{ runner.result }</td>
    </tr>
}

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
            <table><tbody>
            { this.props.results.map((result, index) => <Runner key={index} runner={result} />)}
            </tbody></table>
            </div>
    }
}