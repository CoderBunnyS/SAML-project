import ReactDom from 'react-dom'

    const title = 'Harry Potter and the Order of the Phoenix'
    const author = 'JK Rowling'
    const image = "https://images-na.ssl-images-amazon.com/images/I/71tR2ZEgPYL._AC_UL254_SR254,254_.jpg"

const Book = (props) => {
    console.log(props)
  return <article className='book'>
    <img src={props.image} alt="Book Cover"></img>
    <h1>{props.title}</h1>
    <h4>{props.author}</h4>
    <p>{props.title}</p>
</article>
}


export default Book