import { Runner } from '../components/runner'

export const StandingsTable = ({results}) => {
    return <table>
        <tbody>
            { results.map((result, index) => <Runner key={index} runner={result} />)}
        </tbody>
        </table>
}