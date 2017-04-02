import Link from 'next/link'

export default class extends React.Component {
    static async getInitialProps () {
        console.log('compStart init')
        return { classes: [
            { name: 'D12' },
            { name: 'H12' }
        ]}
    }
    render() {
        return <div>
            <h2>Tävling {this.props.url.query.id}</h2>
            { this.props.classes.map((c, index) => <ClassLink key={index} c={c}/>)}
            </div>
    }
}

const ClassLink = ({c}) => {
    return <div>
            <Link href={{ pathname: 'classStandings', query: { id: c.name}}}>
                <a>{ c.name }</a>
            </Link>
        </div>
}
