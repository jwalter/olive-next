import Competition from '../components/competition'

export const CompetitionsTable = ({competitions}) => {
    return <table className="pure-table pure-table-horizontal">
    <tbody>
            { competitions.map(c => <Competition key={c.id} comp={c} />)}
            </tbody>
            </table>
}
