
interface ButtonProps {
  text?: string;
}
function Button(props: ButtonProps) {
  return <button className="  bg-violet-500 
  px-4 
  rounded 
  h-16 
  text-violet-100 
  hover:bg-violet-700
  transition-colors;">{props.text ?? 'Defaul'}</button>
}
function App() {
  return(  
    <div className="flex gap-2">
      <Button text="Ok"/>
      <Button text="Enviar"/>
      <Button />
    </div>
  )
}

export default App
