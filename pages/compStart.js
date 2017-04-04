import Link from 'next/link'
import { GetClasses } from '../lib/api'

export default class extends React.Component {
    static async getInitialProps () {
        const classes = await GetClasses({compId: '12238'})
        return { classes: classes}
    }
    render() {
        return <div>
            <h2>Tävling {this.props.url.query.id}</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap'}}>
            { this.props.classes.map((c, index) => <ClassLink key={index} c={c}/>)}
            </div>
            </div>
    }
}

const ClassLink = ({c}) => {
    return <div style= {{ padding: '5px'}}>
            <Link href={{ pathname: 'classStandings', query: { id: c.className}}}>
                <a>{ c.className }</a>
            </Link>
        </div>
}
