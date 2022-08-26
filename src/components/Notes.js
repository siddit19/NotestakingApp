import React from 'react'

export default function Notes({element,notes,setNotes,seteditid}) {
    const removeHandler=(id)=>{
    const newNotes=notes.filter((elm)=>{
        if(elm.id!==id){
            return elm;
        }
    })

    setNotes(newNotes)
   
    }

    const editHandler=(id)=>{
        seteditid(id)
        notes.filter((elem)=>{
            if(elem.id===id){
                document.getElementById("edittitle").value=elem.title
                document.getElementById("editdesc").value=elem.desc
                document.getElementById("editmntext").value=elem.mntext
            }
        })
    }

  return (
   <>
    <div className="card mb-3">
  
  <div className="card-body">
    <h5 className="card-title">{element.title}</h5>
    <p className="card-text">{element.desc}</p>
    <p className="card-text">{element.mntext}
      
    </p>
    <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={()=>{
        editHandler(element.id);
    }}
          
        >
          Edit
        </button>
    <button className="btn btn-danger mx-2" onClick={()=>{
        removeHandler(element.id);
    }}>
        Delete
    </button>
  </div>
</div>

   </>
  )
}
