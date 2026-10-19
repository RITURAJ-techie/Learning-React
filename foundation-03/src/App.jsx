
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import AvatarCard from './components/AvatarCard.jsx'

const avatars = [
  {
    id:1,
    name:"Nova",
    role:"Navigator",
    power:"Routing",
    initials:"NV"
  },
  {
    id:2,
    name:"Flux",
    role:"State Keeper",
    power:"useState",
    initials:"FX"
  },
  {
    id:3,
    name:"Memo",
    role:"Optimizer",
    power:"Memorization",
    initials:"MM"
  }
];

function Shell({title,children}){
  return (
    <section>
      <p>Reusable shell</p>
      <h2>{title}</h2>
      {children}
      <p>This is for test</p>
    </section>
  )
}


function App() {

  return (
    <>
      <h1>Children in React</h1>
      {/* <Shell title="Batman" children={2+2} /> */}
      <Shell title="batman">
        <div>
          <h2>This is inside shell</h2>
          <p>This is also inside shell</p>
        </div>
      </Shell>
      <h1>Hello from RITURAJ</h1> 
      <section>
        {avatars.map((avatar)=>(
          <AvatarCard 
          key={avatar.id}
          level={avatar.id===1?"Captain":undefined}
          avatar={avatar} />
        ))}
      </section>
    </>
  )
}

export default App
