import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import './index.css';


function App() {
  // return <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mt-4 rounded">
  //   Subscribe
  // </button>
  // return <a className='hover:text-blue-400 selection:text-blue-950 text-3xl font-bold underline' href="https://www.google.com">Sample Text</a>
  // return <p className="text-xs lg:text-3xl md:text-xl">asdfghjklsdfghjk sdfghjk</p>
  // return (
  //   <>
  //     <p className="text-9xl">Title 1</p>
  //     <p className="text-5xl">Title 2</p>
  //     <p className="text-xl">Title 3</p>
  //     <p className="text-base">A regular paragraph</p>
  //     <p className="text-sm">A description paragraph</p>
  //     <p className="text-xs note">A small note</p>
  //   </>
  // )
  // return (
  //   <div className="flex flex-col sm:flex-row sm:space-x-2 justify-around">
  //     <div className="w-36 h-36 bg-pink-600 items-center justify-center flex mb-2">Box1</div>
  //     <div className="w-36 h-36 bg-pink-600 items-center justify-center flex mb-2">Box2</div>
  //     <div className="w-36 h-36 bg-pink-600 items-center justify-center flex">Box3</div>
  //   </div>
  // )
  // return(
  //   <div className="flex-wrap">
  //     <p className="basis-2/3 bg-red-500 px-1">Main Content</p>
  //     <p className="basis-1/3 bg-cyan-300 px-1">Side Heading</p>
  //   </div>
  // )

  // Beautiful Art with grids
  // return (
  //   <div className="h-screen bg-slate-950 space-y-20">
  //     <div className="bg-slate-950 text-white">
  //       <div className="container mx-auto">
  //         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
  //           <div className="bg-blue-400 p-6 rounded flex justify-center">1</div>
  //           <div className="bg-blue-400 p-6 rounded flex justify-center">2</div>
  //           <div className="bg-blue-400 p-6 rounded flex justify-center items-center row-span-2">3</div>
  //           <div className="bg-red-400 p-6 rounded flex justify-center col-span-2">4</div>
  //           {/*<div className="bg-blue-400 p-6 rounded flex justify-center">5</div>*/}
  //           <div className="bg-blue-400 p-6 rounded flex justify-center">6</div>
  //           <div className="bg-green-400 p-6 rounded flex justify-center col-span-2">7</div>
  //         </div>
  //       </div>
  //     </div>
  //     <div className="bg-slate-950 text-white">
  //       <div className="container mx-auto">
  //         <div className="grid grid-cols-6 gap-3">
  //           <div className="bg-blue-400 p-6 rounded flex justify-center col-start-2 col-span-4">1</div>
  //           <div className="bg-blue-400 p-6 rounded flex justify-center col-span-2">2</div>
  //           <div className="bg-blue-400 p-6 rounded flex justify-center col-start-5 col-span-2">3</div>
  //           <div className="bg-blue-400 p-6 rounded flex justify-center col-span-full">4</div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // )

  return(
    <div className="h-screen text-white bg-slate-950">
      <div className="container bg-red-500">
        <h1>Helloo!!!</h1>
      </div>
    </div>
  )
}

// TODO using classes in React
// function App() {
//   return (
//     <>
//       <p className={'BlueParagraph'}>
//         The weather is sunny today.
//       </p>
//       <p className={'GreenParagraph'}>
//         Still, don't forget to bring your umbrella!
//       </p>
//     </>
//   )
// }

// TODO inline CSS
// function App(){
//   const styleS = {
//     color: 'green',
//     textAlign: 'center',
//     fontSize: '50px',
//     fontWeight: 'bold'
//   }
//
//   return (
//     <>
//       <p style={styleS}>Maximus</p>
//       <p style={{...styleS, fontFamily: "cursive", marginTop: '-50px', fontSize: '20px'}}>
//         This is the text that exists below the name
//       </p>
//     </>
//   )
// }

// TODO Conditional rendering experiment
// function App() {
//   const [isNameChange, setIsNameChange] = useState(true)
//
//   const toggleStatus = () => {
//     setIsNameChange(!isNameChange)
//   }
//   return (
//     <div className="m-2">
//       {
//         isNameChange && <p>This is a paragraph. It is well crafted using all the
//           techniques i know after learning React</p>
//       }
//       <h1>Hi {isNameChange ? "John" : "Mark"}</h1>
//       <button onClick={toggleStatus} className="bg-red-500 text-white font-semibold mt-4 rounded px-3 py-1.5">
//         {isNameChange ? 'Hide' : 'Show'} Paragraph
//       </button>
//     </div>
//   )
// }

// function App(){
//   const onClickEvent = (event) => {
//     console.log(event)
//     return true
//   }
//   return (
//     <button onClick={onClickEvent}>Click Me</button>
//   )
// }

// TODO Inline rendering
// function App() {
//   const emails = 2
//   return (
//     <>
//       <h1>Hello there!</h1>
//       {
//         emails > 0 && <h2>You have {emails} unread emails</h2>
//       }
//     </>
//   )
// }
//
// function App(props) {
//   const {user} = props
//   return (
//     <>
//       <h1>Hello</h1>
//       {
//         user ? <button>Logout</button> : <button>Login</button>
//       }
//     </>
//   )
// }

// TODO Conditional rendering
// function App(props){
//   const {user} = props
//   let button = <button>Login</button>
//   if (user){
//     button = <button>Logout</button>
//   }
//   return (
//     <>
//       <h1>Hello</h1>
//       {button}
//     </>
//   )
// }

// TODO changing name using button click
// function App() {
//   const [name, setName] = useState('John');
//   return (
//     <>
//       <ChildComponent name={name} setName={setName}/>
//     </>
//   )
// }
//
// function ChildComponent(props) {
//   return (
//     <>
//       <h1>Hello {props.name}</h1>
//       <button onClick={() => props.setName('Mark')}>Change Name</button>
//     </>
//   )
// }

// TODO useState and setName
// function App() {
//   const [name, setName] = useState('John');
//   return (
//     <>
//       <h1>Hello {name}</h1>
//       <button onClick={() => setName("Mark")}>Change Name</button>
//     </>
//   )
// }

// TODO CSS into JS file
// function App(){
//   return <h1 className={'text-lowercase'}>Hello World</h1>
// }

// TODO List of elements in JS
// function App(){
//   const users = [
//     {id: 1, name: "Nathan", role: "Web Developer"},
//     {id: 2, name: "John", role: "Web Designer"},
//     {id: 3, name: "Jane", role: "Team Lead"}
//   ]
//
//   return (
//     <>
//       <h2>List of people active rn</h2>
//       <ul>
//         {
//           users.map(user => {
//             return <li key={user.id}>{user.name} as the {user.role}</li>
//           })
//         }
//       </ul>
//     </>
//   )
// }

// TODO You can store html like tags in variable now
// function App() {
//   const text = "Hello World";
//   const textClass = 'text-lowercase'
//   return <h1 className={textClass}>{text}</h1>
// }

// TODO Multiple components in one parent component
// function App() {
//   return (
//     <>
//       <UserComponent name="John" age='5'/>
//       <UserComponent/>
//       <ProfileComponent/>
//       <FeedComponent/>
//     </>
//   )
// }
//
// function UserComponent(props) {
//   return (
//     <>
//       <h1>User Component</h1>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </>
//   )
// }
//
// function ProfileComponent() {
//   return <h2>Profile Component</h2>
// }
//
// function FeedComponent() {
//   return <h3>Feed Component</h3>
// }

export default App;
