import { useEffect,useState } from 'react';
import './style.scss'
import Item from '../Item/Item';
import SuccessSaved from '../SuccessSaved/SuccessSaved';
import ListItem from '../List/List';
import {faker} from "@faker-js/faker"
import { memo } from 'react';



const totalItems = 50000


const Table = memo(() => {
	const [newData,setNewData] = useState([])
	const [isClicked, setIsClicked] = useState(false)
	const [selectedUser, setSelectedUser] = useState(null);
	const [hidden, setHidden] = useState(true)
	const [updatedUser,setUpdatedUser] = useState(null)
	const [currentPage, setCurrentPage] = useState(1)
	const [fetching, setFetching] = useState(0)


	const nextItem = () => {
		setHidden(true)
	}

	useEffect(()=>{
		if(newData.length < 1000000){
			document.querySelector('.list').addEventListener('scroll', scrollHandler)
			const data = Array(totalItems * `${currentPage}`)
				.fill(null)
				.map((_, index) => {
					return {
						id: `${faker.string.uuid()}`,
						name: `${faker.person.firstName()} ${faker.person.lastName()}`,
						age: `${faker.number.int({ min: 18, max: 80 })}`,
						email: `${faker.internet.email()}`,
						gender: `${faker.person.gender()}`,
						index: index + 1 + newData.length,
					}
				})
			setNewData([...newData, ...data])
			setCurrentPage(currentPage => currentPage + 0)
		}
			
	},[fetching])




	useEffect(()=>{
		
		if(updatedUser){
			console.log(updatedUser)
			setNewData(prevData => 
				prevData.map(item=> item.id === updatedUser.id ? {...item, ...updatedUser} : item)
			)
		} 
			
	},[updatedUser])

	const scrollHandler = (e) => {
		if(e.target.scrollHeight - (e.target.scrollTop + window.innerHeight) < 100 ){
		setFetching(fetching + 1)
			
		}
		
	}

	const openItem = (user)=>{
		setIsClicked(!isClicked)
		setSelectedUser(user)
		
	}

 
    return (
			<div>
				<div className='container'>
					<div className='main'>
						<div className='content'>
							<span>Общее количество записей: {newData.length}</span>
							<p>
								Список <br></br>пользователей
							</p>
							<ListItem
								hidden={hidden}
								isClicked={isClicked}
								openItem={openItem}
								visibleData={newData}
							/>
						</div>
						<SuccessSaved hidden={hidden} nextItem={nextItem} />
						<Item
							updatedUser={updatedUser}
							setUpdatedUser={setUpdatedUser}
							hidden={hidden}
							setHidden={setHidden}
							setIsClicked={setIsClicked}
							setData={setNewData}
							user={selectedUser !== null && selectedUser}
							setUser={setSelectedUser}
							isClicked={isClicked}
						/>
					</div>
				</div>
			</div>
		)
})


export default Table



