import { getAllPlayers, removePlayer } from "../API/index";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 


export default function AllPlayers(){
    const [player, setPlayer]= useState([])
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState(null);
    const[toggle,setToggle] = useState(false)
    const navigate= useNavigate()
    useEffect(()=>{
        async function RenderAllPlayer(){
            try{
                const response = await getAllPlayers()
                setPlayer(response) 

            }catch(error){
                console.log("failed to fetch")

            }




        }
        RenderAllPlayer()

    },[])
function clickHandler(playerId){
        navigate(`/players/${playerId}`);
      }

const deleteHandler = async () => {
        const response = await removePlayer(player);
        const data = await response.json();
        return (data);
      }

function searchBar(e){
    e.prevent.default()
    const result = player.filter(item => item.name.toLowerCase().includes(searchValue));
    setSearchResult(result[0])
    setToggle(true)

}
    
return(
    <div>
        <h1>All Players</h1>
        <form onSubmit={searchBar}>
            <label>
                Search
            <input type="text" id="search" onChange={e=>setSearchValue(e.target.value)}></input>
            </label>
            <button>Submit</button>
             </form>
             <div>
    {toggle ?
    <div>
    <p>{searchResult.name} is your result</p>
    <img src={searchResult.imageUrl} />
    </div>
     :''}
   {toggle ? <button onClick={()=>setToggle(!toggle)}>View all dogs</button> : <button onClick={()=>setToggle(!toggle)}>View Search Results</button>}
   </div>
  {!toggle ?
     player.map((player)=>(
       <>
       <div>
           <h1>{player.name}</h1>
           <h1>{player.breed}</h1>
           <img src={player.imageUrl} />
           <h1>{player.teamId}</h1>
           </div>
             <button onClick={()=>clickHandler(player.id)}>View Puppy</button>
           <button onClick={deleteHandler}>Delete</button>
         </>
     )) : '' }
</div>

)
}