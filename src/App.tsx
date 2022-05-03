
interface ButtonProps {
  text?: string;
}
function Button(props: ButtonProps) {
  return <button className="bg-">{props.text ?? 'Defaul'}</button>
}
function App() {
  return(  
    <div>
      <Button text="Ok"/>
      <Button text="Enviar"/>
      <Button />
    </div>
  )
}

export default App
