import Card from './components/ui/Card'
import Input from './components/ui/Input'
import Button from './components/UI/button'

function App() {
  return (
<>
<Button className="signinbtn" > signin </Button>
<div card-container>
<div className='container'>
<Card className="card">
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
<div className='container2'>
<card className="card2"> 
  <h1>New card </h1>
  <p> this is testing card</p>

<Input inputType="text" placeHolder="Full names" cname="inputfield"/>
<select name="inputfield" id="inputfield">
<option value="1">Male</option>
<option value="2">Female</option>
<option value="3">both</option>
</select>
<Input inputType="text" placeHolder="school" cname="inputfield"/>
<Input inputType="text" placeHolder="country" cname="inputfield"/>
<Input inputType="text" placeHolder="province" cname="inputfield"/>
<Input inputType="text" placeHolder="district" cname="inputfield"/>
<Input inputType="text" placeHolder="sector" cname="inputfield"/>
<Button className="signinbtn" > submit </Button>

</card>
</div>
</div>
</>
)}
export default App
