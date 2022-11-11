import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import AddItems from './components/AddItem';
import Recyclables from './components/Recyclables';

function App() {

  const [recycled, setRecycled] = useState([]);

  const getItems = () => {
    axios.get("/recycledItems")
    .then(res => setRecycled(res.data))
    .catch(err => console.log(err))
  }

  const addItems = (newItem) => {
    axios.post("/recycledItems", newItem)
    .then(res => {
      setRecycled(prevItems => [...prevItems, res.data])
    })
    .catch(err => console.log(err))
  }

  const updateItems = (update, itemId) => {
    axios.put(`/recycledItems/${itemId}`, update)
    .then(res => {
      setRecycled(prevItems => [...prevItems].map(item => {
        return (item._id === itemId ? res.data: item)
      }))
    })
    .catch(err => console.log(err))
  }
  
  const deleteItems = (itemId) => {
    axios.delete(`/recycledItems/${itemId}`)
    .then(res => {
      setRecycled(prevItems => prevItems.filter(item => item._id !== itemId))
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getItems();
  }, [] );


  // useEffect(() => {
  //   axios.get('/')
  //   .then(res => {setMovies(res.data)})
  //   .catch(err => console.log(err))
  // }, []);

  // const movieList = movies.map(movie => <movie {...})
  const recycleList = recycled.map(items =>
  <Recyclables 
  {...items}
  deleteItems = {deleteItems}
  updateItems = {updateItems}
  key = {Recyclables.id}/>
  )
  return (
    <div className='App'>
      <AddItems
      submit = {addItems}
      btnText = "Add Items"/>
      {recycleList}
    </div>
  );
}

export default App;