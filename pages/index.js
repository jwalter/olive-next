import React from 'react'
import Link from 'next/link'
import Competition from '../components/competition'

const mockCompetitions = ()  => {
    //const resp = await fetch('http://liveresultat.orientering.se/api.php?method=getcompetitions')
    //const json = await resp.json()
    //return json.competitions
    return [
        {name: "Tävling 1", id: 1},
        {name: "Tävling 2", id: 2}
    ]
}
export default class extends React.Component {
    static async getInitialProps ({ req }) {
        console.log('getInitialProps');
        return { competitions: mockCompetitions()}
    }
    render() {
        console.log('Props', this.props)
        return (
            <div className="container">
                <h1>oLive</h1>
                <div>
                { this.props.competitions.map(c => <Competition key={c.id} comp={c} />)}
                </div>
            </div>
        )
    }

}
