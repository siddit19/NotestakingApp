import React,{ useState } from 'react'
import Navbar from './components/Navbar'
import Form from './components/Form'
import Notes from './components/Notes'
import EditModal from './components/EditModal'


export default function App() {
  const[title,settitle]=useState("")
const[desc,setDesc]=useState("")
const[mntext,setMntext]=useState("")
const[notes,setNotes]=useState(getNotesFromLs)
const[editid,seteditid]=useState("")
localStorage.setItem("notes",JSON.stringify(notes))

  return (
    <>
    <EditModal editid={editid} notes={notes} setNotes={setNotes}/>
   <Navbar/>
   <Form title={title} settitle={settitle} desc={desc} setDesc={setDesc} notes={notes} setNotes={setNotes} mntext={mntext} setMntext={setMntext}/>
   <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-10">
              <h1 className="mb-3">
                Your Notes
              </h1>
                   
                  {
                    notes.length===0?

                    <div className="card mb-3">
  
  <div className="card-body">
    <h5 className="card-title">Status:</h5>
    <p className="card-text">No Notes to show
      
    </p>
    
    
  </div>
</div>:notes.map((element)=>{
  return(
    <Notes element={element} key={element.id} notes={notes} setNotes={setNotes} editid={editid} seteditid={seteditid} />
  )
})

                  }
                
 
 
                   
                  
            </div>
    </div>
    </div>
    </>
  )

  function getNotesFromLs(){
    const note=JSON.parse(localStorage.getItem("notes"));
    if(note){
      return note
    }

    else{
      return []
    }
  }
}
