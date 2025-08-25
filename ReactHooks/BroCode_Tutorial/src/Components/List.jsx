const List =()=>{
    const fruits = [
        {id:1, name:"Apple", calories: 95 },
        {id:2, name:"Banana", calories: 105 },
        {id:3, name:"Orange", calories: 62 },
        {id:4, name:"Mango", calories: 201 },
        {id:5, name:"Grapes", calories: 62 },
    ]
    // fruits.sort((a,b)=> a.name.localeCompare(b.name))
    // fruits.sort((a,b)=> b.name.localeCompare(a.name))
    //  fruits.sort((a,b)=> a.calories - b.calories)
    // fruits.sort((a,b)=> b.calories -a.calories)

    const listItems = fruits.map((fruit)=>(<li key={fruit.id}>{fruit.name}: <b>{fruit.calories}</b></li>))
    return (<ol>{listItems}</ol>)

}
export default List;
// This is how we render lists in React using the map() method.
// we can also pass the down the list as props from the parent component.  