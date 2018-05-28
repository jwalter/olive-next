import React from 'react'
import Link from 'next/link'
import Competition from '../components/competition'
import { CompetitionsTable } from '../components/competitionsTable'
import { GetCompetitions } from '../lib/api'
import 'isomorphic-unfetch'

export default class extends React.Component {
    constructor() {
        super()
        this.state = { competitions: [] }
    }
    static async getInitialProps ({ req }) {
        return { competitions: [] }
    }
    async componentDidMount() {
        const competitions = await GetCompetitions()
        this.setState({ competitions: competitions })
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
