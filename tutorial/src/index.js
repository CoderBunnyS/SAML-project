import ReactDom from 'react-dom'
import Testing from './testing'

//Stateless functional component
//always return JSX

function Greeting(){
  return <div>This is Bunny and this is my first component.
    <Testing />
  </div>

}

ReactDom.render(<Greeting />, document.getElementById('root'))