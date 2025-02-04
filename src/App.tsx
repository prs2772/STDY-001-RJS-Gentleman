import './App.css'
import { AppForm, Button, ColorRed, BookReader, FocusInput } from './components';
import { GlobalProvider } from './context/global.provider';

export default function App() {
  const submit = () => {
    console.log("submitted")
  }

  const handleClick = () => {
    console.log("uy me clickio todo")
  }

  const dimeHola = () => {
    alert("hola !!")
  }

  return (
    <GlobalProvider>
      <ColorRed><Button parentMethod={dimeHola}>My Boton Rojo</Button></ColorRed>
      <Button parentMethod={handleClick}> My Boton Normal</Button>

      <BookReader />
      <FocusInput />

      <AppForm>
        <button type="submit" onClick={submit} ></button>
      </AppForm>
    </GlobalProvider>
  )
}
