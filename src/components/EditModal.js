import React from "react";

export default function EditModal({editid,notes,setNotes}) {
    const updateHandler=()=>{
        const updateNotes=notes.map((elem)=>{
            if(editid===elem.id){
              return(  {...elem,title:document.getElementById("edittitle").value,
                desc:document.getElementById("editdesc").value, mntext:document.getElementById("editmntext").value })
            }
            else{
                return elem;
            }
        })
        setNotes(updateNotes)
    }
  return (
    <>
     
        {/* Button trigger modal */}
        
        {/* Modal */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Edit Here
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
              <form>
        <div className="mb-3">
          <label htmlFor="tile" className="form-label">
            Edit Notes
          </label>
          <input
            type="text"
            className="form-control"
            id="edittitle"
            placeholder="Enter your description"
            
          />
          
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Description
          </label>
          <textarea name="desc" id="editdesc" rows="3" className="form-control" placeholder="Enter your description"></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Main Text
          </label>
          <textarea name="mntext" id="editmntext" rows="3" className="form-control" placeholder="Enter main text"></textarea>
        </div>
        <div className="mb-3 form-check">
         
         
        </div>
        
      </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  onClick={updateHandler}
                >
                  Edit Notes
                </button>
               
              </div>
            </div>
          </div>
        </div>
    
    </>
  );
}
