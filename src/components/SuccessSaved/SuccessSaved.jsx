import './style.scss'
const SuccessSaved = ({nextItem,hidden}) => {
    
    return(
        <div className={`success ${hidden ? 'none' : ''}`}>
            Данные успешно сохранены!
            <button onClick={()=>{
                nextItem()
            }}className='success-btn'>
                Продолжить
            </button>
        </div>
    )
}


export default SuccessSaved