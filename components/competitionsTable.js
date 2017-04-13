import Competition from '../components/competition'

export const CompetitionsTable = ({competitions}) => {
    return <div>
            { competitions.map(c => <Competition key={c.id} comp={c} />)}
            </div>
}
