const ItemListContainer = (props) => {
  return (
    <div style={{height:'100vh',width:'100%',backgroundColor:'white'}}>
      <h1 style={{color : 'black', textAlign:'center',fontSize:'2rem'}}>{props.greetings}</h1>
    </div>
  )
}
export default ItemListContainer