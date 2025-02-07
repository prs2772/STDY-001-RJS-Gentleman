import './App.css'
import { AppForm, Button, ColorRed, BookReader, FocusInput } from './components';
import { UseMemo } from './components/UseMemo/UseMemo';
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

  const printSpaces = (spaces: number) => {
    return (
      <>
        {Array.from({ length: spaces }, (_, sp) => (
          <br key={sp} />
        ))}
      </>
    );
  }

  return (
    <GlobalProvider>
      <UseMemo />
      {printSpaces(3)}
      <ColorRed><Button parentMethod={dimeHola}>My Boton Rojo</Button></ColorRed>
      <Button parentMethod={handleClick}> My Boton Normal</Button>
      {printSpaces(3)}
      <BookReader />
      <FocusInput />
      {printSpaces(3)}
      <AppForm>
        <button type="submit" onClick={submit} ></button>
      </AppForm>
    </GlobalProvider>
  )
}
