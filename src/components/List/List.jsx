import { List } from 'react-virtualized'
import './style.scss'
import { memo } from 'react'

const ListItem = memo(({visibleData,openItem,isClicked,hidden}) => {

	
	return (
		<List
			className='list'
			width={200}
			height={500}
		
			rowHeight={50}
			rowCount={visibleData.length}
			
			rowRenderer={({ key, index, style }) => {
				const item = visibleData[index]

				return (
					<button
						disabled={isClicked || !hidden}
						key={key}
						style={style}
						className='btn-item'
						onClick={() => openItem(item)}
					>
						<div className='user' key={item.id}>
							<img src='./src/img/user.svg' alt='img' />
							<span className='text'>Пользователь {item.index}</span>
						</div>
					</button>
				)
			}}
		/>
	)
})


export default ListItem
