import ReactDom from 'react-dom'



const Book = () => {
    const title = 'Harry Potter and the Order of the Phoenix'
    const author = 'JK Rowling'
    const image = "https://images-na.ssl-images-amazon.com/images/I/71tR2ZEgPYL._AC_UL254_SR254,254_.jpg"
  
  return <article className='book'>
    <img src={image} alt="Book Cover"></img>
    <h1>{title}</h1>
    <h4>{author}</h4>
</article>
}


export default Book