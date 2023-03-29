
export const CardItem = ({ data, handleDragging }) => {

    const handleDragStart = (e) => {
        console.log(data.id)
        e.dataTransfer.setData('text', `${data.id}`)
        handleDragging(true)
    }

    const handleDragEnd = () => handleDragging(false)

    return (
        <div className='card-container' 
        draggable 
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}>
            <p>{data.content}</p>
        </div>
    )
}