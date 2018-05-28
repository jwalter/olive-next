import React from 'react'
import Link from 'next/link'

export default class extends React.Component {
    render() {
        return <tr>
            <td nowrap="true">
            {this.props.comp.date}
            </td>
            <td>
            <Link href={{ pathname: 'compStart', query: { id: this.props.comp.id, name: this.props.comp.name }}}>
                <a>{this.props.comp.name}</a>
            </Link>
            </td>
        </tr>
    }
}