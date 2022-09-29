import ReactDom from 'react-dom'
import Testing from './testing'

//Stateless functional component
//We always return JSX
//Nested Components, React Tools

function BookList(){
  return <section>
    <Book />
    <Image />
    <Author />
  </section>

}



const Book = () => {
  return <article>
  this is a book
</article>
}

const Image = () => {
  return <div>Book Image</div>
}

const Author = () => {
  return <div>Author Name</div>
}
ReactDom.render(<BookList />, document.getElementById('root'))