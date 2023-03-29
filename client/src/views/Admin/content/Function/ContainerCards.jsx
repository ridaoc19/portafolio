// import { Status } from './interfaces'
import { CardItem } from "./CardItemm"


export const ContainerCards = ({ items = [], status, isDragging, handleDragging, handleUpdateList }) => {

    
    const handleDragOver = (e) => {
        // console.log(status)
        e.preventDefault()
    }
     const handleDrop = (e) => {
        e.preventDefault()
        const id = +e.dataTransfer.getData('text')
        handleUpdateList(id, status)
        handleDragging(false)
    }

console.log(status)
    return (
        <div
            className={`layout-cards ${isDragging ? 'layout-dragging' : ''}`}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
        >
            <p>{status} hero</p>
            {
                items.map(item => (
                    status === item.status
                    && <CardItem
                        data={item}
                        key={item.id}
                        handleDragging={handleDragging}
                    />
                ))
            }
        </div>
    )
}