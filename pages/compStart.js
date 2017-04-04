import Link from 'next/link'
import { GetClasses } from '../lib/api'

export default class extends React.Component {
    static async getInitialProps ({query}) {
        const classes = await GetClasses({compId: query.id})
        //this.compId = '12238'
        return { classes: classes, compId: query.id}
    }
    render() {
        return <div>
            <h2>{this.props.url.query.name}</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap'}}>
            { this.props.classes.map(c => <ClassLink key={c.id} c={c} comp={ this.props.compId }/>)}
            </div>
            </div>
    }
}

const ClassLink = ({c, comp}) => {
    return <div style= {{ padding: '5px'}}>
            <Link href={{ pathname: 'classStandings', query: { className: c.className, compId: comp}}}>
                <a>{ c.className }</a>
            </Link>
        </div>
}
