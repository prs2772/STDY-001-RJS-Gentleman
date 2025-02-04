import { useEffect } from 'react';
import './App.css'
import { Button, ChildrenButton } from './components';
import { sharedValueChildren } from './services';

export default function App() {
  const service = sharedValueChildren;

  const handleClick = () => {
    console.log("Me pucharon")
  }

  useEffect(() => {
    service.setValue("Paris")
  })


  return (
    <Button parentMethod={handleClick}>
      <ChildrenButton><p>My label</p></ChildrenButton>
    </Button>
  );
}
