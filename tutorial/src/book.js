import ReactDom from 'react-dom'



const Book = () => {
  return <article>
    <Image />
    <Title />
  <Author />


  
</article>
}

const Title = () => {
  return <div><h1>Harry Potter and the Order of the Phoenix</h1></div>
}
const Image = () => {
  return <img src="https://images-na.ssl-images-amazon.com/images/I/71tR2ZEgPYL._AC_UL254_SR254,254_.jpg" alt="Book Cover"></img>
}

const Author = () => {
  return <h4>JK Rowling</h4>
}

export default Book
//ReactDom.render(<Greeting />, document.getElementById('root'))