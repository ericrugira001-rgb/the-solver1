import Card from './components/ui/Card'
import Input from './components/ui/Input'
import Button from './components/UI/button'

function App() {
  return (
<>
<Button className="signinbtn" > signin </Button>

<div className='container'>
<Card >
<h1>sign in</h1>
<p>welcome back! please enter your details. </p>
<div>
<Input inputType="text" placeHolder="Names" cname="inputfield"/>
<Input inputType="email" placeHolder="email" cname="inputfield"/>
<Input inputType="password " placeHolder="Password" cname="inputfield"/>
<Button className="signupbtn" > signup </Button>
</div>
</Card>

</div>

</>
)}
export default App
