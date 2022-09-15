import ReactDom from 'react-dom'
import Testing from './testing'



function Greeting(){
  return <div>This is Bunny and this is my first component.
    <Testing />
  </div>

}

ReactDom.render(<Greeting />, document.getElementById('root'))