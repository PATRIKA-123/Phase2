import RightCardContent from './RightCardContent'

const RightCard = (props) => {
    console.log(props.color);
    
    return (
        <div className='h-full shrink-0 overflow-hidden relative w-80 rounded-4xl animate-scaleIn hover-lift transition-smooth'>
            <img className='h-full w-full object-cover transition-smooth hover:scale-110 duration-500' src={props.img} alt="" />
            <RightCardContent color={props.color} id={props.id} tag={props.tag} />
        </div>
    )
}

export default RightCard
