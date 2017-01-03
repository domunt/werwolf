import React, { Component } from 'react'

import ListItem from './ListItem'
import { list } from './styles.css'

class List extends Component {
	render() {
		console.log(this);

		const { items, onItemClick } = this.props;

		return (
			<ul className={list}>
				{items.map((item) =>
					<ListItem
						key={item.id}
						{...item}
						onClick={() => {onItemClick(item.id)}}
					>
						{item.title}
					</ListItem>
				)}
			</ul>
		)
	}
}

export default List
