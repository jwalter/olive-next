import React from 'react'
import Link from 'next/link'

export default class extends React.Component {
    render() {
        return <div>
            <div>
                {this.props.comp.date}
            </div>
            <div>
                <Link href={{ pathname: 'compStart', query: { id: this.props.comp.id, name: this.props.comp.name } }}>
                    <a>{this.props.comp.name}</a>
                </Link>
            </div>

        </div>
    }
}