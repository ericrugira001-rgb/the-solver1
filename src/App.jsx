import Card from './components/ui/Card'
import Input from './components/ui/Input'
import Button from './components/ui/button'
import Link from './components/ui/link';
import Select from './components/ui/Select';
function App() {
  return (
<>

<Button className="signinbtn" >signin</Button>

<Link href='https://www.youtube.com/results?search_query=president+of+rwanda' className='lcss'>Home</Link>
<Link href='https://www.youtube.com/watch?v=fBuIKUUzBDA' className='lcss'>About</Link>
<Link href='https://camis.nesa.gov.rw/' className='lcss'>partners</Link>
<Link href='https://www.kinyafilms.com/' className='lcss'>Movies</Link>
<Link href='https://www.youtube.com/watch?v=K-oTqN3J_qQ' className='lcss'>Songs</Link>

<Select className="select">
<option value="">Country</option>
<option value="1">Rwanda</option>
<option value="">Burundi</option>
<option value="">Uganda</option>
<option value="">DRC Congo</option>
<Link href='https://www.kinyafilms.com/' className='lcss'>Movies</Link>
</Select>

<div className='container'>
<Card className="card">
<h1>sign in</h1>
<p>welcome back! please enter your details. </p>
<Input inputType="text" placeHolder="Names" cname="inputfield"/>
<Input inputType="email" placeHolder="email" cname="inputfield"/>
<Input inputType="password" placeHolder="Password" cname="inputfield"/>
<Button className="signupbtn" > signup </Button>
</Card>
</div>
</>
);
}
export default App