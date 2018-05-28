import { Runner } from '../components/runner'

export const StandingsTable = ({splitControls, results}) => {
    const splits = []
    if (splitControls !== undefined) {
        splitControls.forEach(sc => splits.push(sc))
    }
    return <table className="pure-table pure-table-striped">
        <thead>
            <tr>
                <th>Namn</th>
                {splits.map((control, index) => <th key={index}>{control.name}</th>)}
                <th>Mål</th>
            </tr>
        </thead>
        <tbody>
            { results.map((result, index) => <Runner key={index} splitControls={splits} runner={result} />)}
        </tbody>
        </table>
}