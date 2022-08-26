import React from "react";

export default function Form({title,settitle,desc,setDesc,notes,setNotes,mntext,setMntext}) {
    const inputHandler=(e)=>{
        
        if(e.target.id==="title"){
            settitle(e.target.value)
        }
        else if(e.target.id=="desc"){
            setDesc(e.target.value)
        }
        else if(e.target.id=="mxtext"){
            setMntext(e.target.value)
        }
    }

    const addNotesHandler=(e)=>{
        e.preventDefault()
        if(title!=="" && desc!=="" && mntext!==""){
            setNotes((notes)=>{
                return(
                    [...notes,{
                        title:title,
                        desc:desc,
                        mntext:mntext,
                        id:new Date().getTime()
    
    
                    }]
                )
            })
    
        }
        settitle("")
        setDesc("")
        setMntext("")

    }
    
  return (
    <>
      <div className="container my-3">
        <div className="row justify-content-center">
            <div className="col-md-10">
            <form style={{border:"2px solid black",borderRadius:"12px",padding:"20px"}}>
        <div className="mb-3">
          <label htmlFor="tile" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter your title" value={title} onChange={inputHandler}
            
          />
          
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Description
          </label>
          <textarea name="desc" id="desc" rows="3" className="form-control" placeholder="Enter your description" value={desc} onChange={inputHandler}></textarea>
        </div><div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Main Text
          </label>
          <textarea name="mxtext" id="mxtext" rows="3" className="form-control" placeholder="Enter text" value={mntext} onChange={inputHandler}></textarea>
        </div>
        <div className="mb-3 form-check">
         
         
        </div>
        <button type="submit" className="btn btn-primary" onClick={addNotesHandler}>
          Add Notes
        </button>
      </form>
            </div>
        </div>
      </div>
    </>
  );
}
