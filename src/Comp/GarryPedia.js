import React,{useState} from "react";
import axios from 'axios'

const GarryPedia = () => {
    const [info , setInfo ] = useState('')
    const [data , setData ] = useState([])

    
    const onFormSubmit=(e)=>{
      e.preventDefault()
      console.log(info);
      getInfo(info)
    }

    const getInfo=(info)=>{
      console.log('in get info '+info);
      var k=[]
      var url = `https://en.wikipedia.org/w/api.php?origin=*&action=query&list=search&srsearch=${info}&format=json`
      
      
      axios.get(url)

    .then((res)=> { 
      k= res.data.query.search.map((i)=> { 
        return {'pageLink' : '' ,'pageID' : i.pageid  ,'snippet': i.snippet , 'title' : i.title}})
        setData(k)  } )
        .then( (res) =>{

          for (let j in data){
        
            let pid = data[j].pageID
            var url2 =`https://en.wikipedia.org/w/api.php?origin=*&action=query&prop=info&pageids=${pid}&inprop=url&format=json` 

             axios.get(url2)
            .then((res) => console.log(res.data.query.pages[pid].fullurl))
          }

      
        })

    .catch((error)=>{console.log(error);});
    }
  
    
 
  return (
    <>
    <h1 className="d-flex text-dark " >Hi Welcome to GarryPedia !</h1>
    <div  >

      <div >
      <div >
        <form  noValidate >
          <input value={info || ''} onChange={(e) => setInfo(e.target.value)} type="text" name="" placeholder="Search..."/>
          <button type="submit" onClick={onFormSubmit} className="search_icon"><i className="fas fa-search"></i> submit</button>
          
        </form>
      </div>
    </div>
    here
    {data && data.map((k)=>(<ul key={k.pageID}>
     <li >{k.pageID}</li>
     <li >{k.title}</li></ul>

    ))}    
    </div>
    </>
  );
};

export default GarryPedia;
