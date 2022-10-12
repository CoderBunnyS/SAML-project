import ReactDom from 'react-dom'
//import Testing from './testing'

//Stateless functional component
//We always return JSX
//Nested Components, React Tools

function BookList(){
  return <section>
    <Book />
    {/* <Title />
    <Image />
    <Author /> */}
  </section>

}



const Book = () => {
  return <article>
  <Title />
  <Image />
  <Author />
  <Author />
</article>
}

const Title = () => {
  return <div><h3>Harry Potter and the Order of the Phoenix</h3></div>
}
const Image = () => {
  return <img src="https://images-na.ssl-images-amazon.com/images/I/71tR2ZEgPYL._AC_UL254_SR254,254_.jpg" alt="Book Cover"></img>
}

const Author = () => {
  return <div>JK Rowling</div>
}
ReactDom.render(<BookList />, document.getElementById('root'))