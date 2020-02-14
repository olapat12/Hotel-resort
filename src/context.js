import React from 'react'
import items from './data'

const RoomContext = React.createContext();

 class RoomProvider extends React.Component{

    state = {
        rooms:[],
        sortedRooms:[],
        featuredRooms:[],
        loading:true,
        type: 'all',
        capacity : 1,
        price: 0,
        minPrice:0,
        maxPrice:0,
        minSize: 0,
        maxSize: 0,
        breakfast : false,
        pets: false
    }

    componentDidMount(){

        let rooms = this.formartData(items)
        let featuredRooms = rooms.filter(room => room.featured === true);

        let maxPrice = Math.max(...rooms.map(item => item.price));
        let maxSize = Math.max(...rooms.map(item => item.size));

        this.setState({rooms,
            featuredRooms,
            sortedRooms: rooms,
            loading: false,
            price: maxPrice,
            maxPrice: maxPrice,
            maxSize: maxSize
        })
        
    }

    formartData(items){
        let tempItems = items.map(item =>{
            let id = item.sys.id;
            let images = item.fields.images.map(image =>image.fields.file.url)

            let room = {...item.fields, images}
            return room;
        });
        return tempItems;
    }

    getRoom = (slug)=>{
        const tempRooms = [...this.state.rooms];
        const room = tempRooms.find(room => room.slug===slug);
        return room;
    }

    handlechange = event => {
        const target = event.target;
        const name = event.target.name;
         const value = target.type === 'checkbox' ? target.checked : target.value

         this.setState({
             [name]:value
         }, this.filterRooms)
    }

    filterRooms = ()=>{
        let {
            capacity,
            price,
            minPrice,
            maxPrice,
            minSize,
            maxSize,
            breakfast, 
            pets, type, rooms} = this.state 

            let tempRooms = [...rooms]
            capacity = parseInt(capacity)
            price = parseInt(price)

            if(type !== 'all'){
                tempRooms = tempRooms.filter(room => room.type === type)
            }
            if(capacity !== 1){
                tempRooms = tempRooms.filter(room => room.capacity >= capacity)
            }
            tempRooms = tempRooms.filter(room => room.price <= price)

            if(breakfast){
                tempRooms = tempRooms.filter(room => room.breakfast === true)
            }

            this.setState({
                sortedRooms : tempRooms
            })
    }

    render(){
        return(
            <RoomContext.Provider value={{...this.state, getRoom: this.getRoom, handlechange: this.handlechange}}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer

// export function withRoomConsumer(Component){
//     return function consumerWrapper(props){
//         return <RoomConsumer>
//             {value => <Component{...props} context={value} />}
//         </RoomConsumer>
//     }
// }

export {RoomProvider, RoomConsumer, RoomContext}