import './App.css'
import { useFetch } from './hooks';

const url = "https://jsonplaceholder.typicode.com/users";

interface User {
  id: number;
  name: string;
  email: string;
}

function App() {
  const { data, loading, error } = useFetch<User>(url)
  
  if(loading) {
    return <div>Loading...</div>
  }

  if(error) {
    return <div>Error...</div>
  }

  return () => {
    <div>{JSON.stringify(data)}</div>
  }
}

export default App
