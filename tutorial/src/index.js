import ReactDom from 'react-dom'
import Book from './book'
//import Testing from './testing'

//Stateless functional component
//We always return JSX
//Nested Components, React Tools

function BookList(){
  return <section>
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />

  </section>

}


ReactDom.render(<BookList />, document.getElementById('root'))