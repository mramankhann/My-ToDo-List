import { useState } from 'react'
import './App.css'

function App() {

  const [task, setTask] = useState('')
  const [des, setDes] = useState('')
const [songsList , setSongsList] = useState([])

  const onSubmitHandler = (e) => {
    e.preventDefault()
    setSongsList([...songsList, {task, des}])
    setTask('')
    setDes('')
  }

  const DltHandler = (index) => {
    const updatedSongs = [...songsList]
    updatedSongs.splice(index, 1)
    setSongsList(updatedSongs)
  }

  let SongData = <h2>No Task Available</h2>

  if(songsList.length > 0) {
    SongData = songsList.map((todayTask, index) => {
      return (
        <li key={index}>
          <h2>{todayTask.task}</h2>
          <p>{todayTask.des}</p>
          <button onClick={()=>{
            DltHandler(index)
          }} className='dlt'>Delete</button>
        </li>

      )
    })
  }

  return (
    <>
  <h1>Aaj Ka Kaam</h1>
  <form  onSubmit={onSubmitHandler}>
    <input type="text"
    placeholder='Today Task'
    value={task}
    required
    onChange={(e) => setTask(e.target.value)}
    />
    <input type="text"
    placeholder='Describe Task'
    value={des}
    required
    onChange={(e) => setDes(e.target.value)}
    />
    <button>Add Task</button>
  </form>
  <hr />
  <div className="SongsList">
<ul>
  {SongData}
</ul>
  </div>

    </>
  )
}

export default App
