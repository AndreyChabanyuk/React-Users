import './style.scss'
import { memo } from 'react'
const Item = memo(({isClicked, user,setUser,setIsClicked,setHidden,hidden,setUpdatedUser}) => {
	
	const Saved = () => {
			setIsClicked(!isClicked),
			setHidden(!hidden),
			setUpdatedUser({
				id: user.id,
				name: user.name,
				age: user.age,
				email: user.email,
				gender: user.gender,
			});
			}

    return (
			<div key={user.name} className={`item ${isClicked ? '' : 'hidden'}`}>
				<div className='item-head'>
					<div className='item-head__container '>
						<h1>Карточка пользователя {user.index} </h1>
					</div>
				</div>
				<div className='item-content'>
					<div className='item-content__container'>
						<img
							className='img-content'
							src='./src/img/contact.png'
							alt='img'
						/>
						<div className='item-data'>
							<div className='input-item'>
								Имя и фамилия
								<input
									name='name'
									id='name'
									value={user && user.name}
									type='text'
									onChange={e => {
										setUser({
											...user,
											name: e.target.value,
										})
									}}
								/>
							</div>
							<div className='input-item'>
								Возраст
								<input
									name='age'
									id='age'
									value={user && user.age}
									type='number'
									onChange={e => {
										setUser({
											...user,
											age: e.target.value,
										})
									}}
								/>
							</div>
							<div className='input-item'>
								Email
								<input
									name='email'
									id='email'
									value={user && user.email}
									type='text'
									onChange={e => {
										setUser({
											...user,
											email: e.target.value,
										})
									}}
								/>
							</div>
							<div className='input-item'>
								Пол
								<input
									onChange={e => {
										setUser({
											...user,
											gender: e.target.value,
										})
									}}
									value={user && user.gender}
									type='text'
								/>
							</div>
							<div className='item-data__save'>
								<button 
									onClick={() => {
										Saved()
									}}
									className='save-data'
								>
									Сохранить
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
})

export default Item