import React from 'react'
import Link from 'next/link'
import Competition from '../components/competition'
import { CompetitionsTable } from '../components/competitionsTable'
import 'isomorphic-fetch'

export default class extends React.Component {
    constructor() {
        super()
        this.state = { competitions: [] }
    }
    static async getInitialProps ({ req }) {
        return { competitions: [] }
    }
    async componentDidMount() {
        const resp = await fetch('https://cors.now.sh/http://liveresultat.orientering.se/api.php?method=getcompetitions')
        const json = await resp.json()
        this.setState({ competitions: json.competitions })
    }
    render() {
        return (
            <div className="container">
                <h1>oLive</h1>
                <CompetitionsTable competitions={this.state.competitions} />
            </div>
        )
    }

}
