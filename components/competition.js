import React from 'react'
import Link from 'next/link'

export default class extends React.Component {
    render() {
        return <div>
            <Link href={{ pathname: 'compStart', query: { id: this.props.comp.id}}}>
                <a>{this.props.comp.name}</a>
            </Link>
        </div>
    }
}