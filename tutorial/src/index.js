import ReactDom from 'react-dom'
import Book from './book'
import './index.css'

//import Testing from './testing'

//Stateless functional component
//We always return JSX
//Nested Components, React Tools

function BookList(props){
  return <section className='booklist'>
    <Book job="developer" />
    <Book title="random title" number={22}/>
  </section>

}


ReactDom.render(<BookList />, document.getElementById('root'))