import { Runner } from '../components/runner'

export const StandingsTable = ({splitControls, results}) => {
    const splits = []
    if (splitControls !== undefined) {
        splitControls.forEach(sc => splits.push(sc))
    }
    return <table>
        <thead>
            <tr>
                <th>Namn</th>
                {splits.map(control => <th>{control.name}</th>)}
                <th>Mål</th>
            </tr>
        </thead>
        <tbody>
            { results.map((result, index) => <Runner key={index} splitControls={splits} runner={result} />)}
        </tbody>
        </table>
}