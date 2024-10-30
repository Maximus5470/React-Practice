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
  //   <div className="flex space-x-20">
  //     <div className="w-36 h-36 bg-pink-600 items-center justify-center flex">Box1</div>
  //     <div className="grow bg-pink-600 items-center justify-center flex">Box2</div>
  //     <div className="w-36 h-36 bg-pink-600 items-center justify-center flex">Box3</div>
  //   </div>
  // )
  return(
    <div className="flex">
      <p className="basis-2/3 bg-red-500">Main Content</p>
      <p className="basis-1/3 bg-blue-500">Side Heading</p>
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
