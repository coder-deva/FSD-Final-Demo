import { useEffect, useState } from "react"
import axios from "axios"
function App() {

  const [noteList, setNoteList] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [edit,setEdit]=useState(false)
  const [id,setId]=useState(0)
  useEffect(() => {
    getList()
  }, [])

  const getList = () => {
    axios.get("http://localhost:8080/getAll")
      .then(response => {
        console.log(response)
        setNoteList(response.data)
      })
      .catch(err => console.log(err))
  }

  const addPost = () => {
    axios.post("http://localhost:8080/addPost", {
      title: title,
      description: description
    }).then(response => {
      console.log(response.data);
      getList();
    })
      .catch(err => console.log(err))
  }

  const editPost=()=>{
    axios.put(`http://localhost:8080/edit/${id}`,{
      title:title,
      description:description
    }).then(response => {
      console.log(response.data);
      getList();
      setEdit(false);
    })
      .catch(err => console.log(err))
  }
  
  const deletePost=()=>{
    axios.delete(`http://localhost:8080/delete/${id}`).then(getList).catch(err=>console.log(err))
  }
  return (
    <div>
      <div className="container">
        <div className="card mt-3">
          <div className="card-title">Add Note:</div>
          <div className="card-body">
            <div>
              <label>Enter Title:</label>
              <input className="form-control" type="test" onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
              <label>Enter Description:</label>
              <input className="form-control" type="test" onChange={(e) => setDescription(e.target.value)} />
            </div>
          </div>
          <div className="card-footer">
            <button className="btn btn-primary" onClick={addPost}>Submit</button>
          </div>
        </div>
      </div>
      {
        noteList.map((n) => (
          <div className="mt-5 ml-2" key={n.id}>
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-title">{n.title}</div>
              <div className="card-body">{n.description}</div>
            </div>
            <div className="card-footer">
              <div><button className="btn btn-success" onClick={()=>{setEdit(true);setId(n.id)}}>Edit</button></div>
              <div><button className="btn btn-danger" onClick={()=>deletePost(n.id)}>Delete</button></div>
            </div>

          </div>
        ))
      }
      {
        edit?<div className="card mt-3">
          <div className="card-title">Add Note:</div>
          <div className="card-body">
            <div>
              <label>Enter Title:</label>
              <input className="form-control" type="test" onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
              <label>Enter Description:</label>
              <input className="form-control" type="test" onChange={(e) => setDescription(e.target.value)} />
            </div>
          </div>
          <div className="card-footer">
            <button className="btn btn-primary" onClick={editPost}>Submit</button>
          </div>
        </div>:""
      }
    </div>
  )
}

export default App