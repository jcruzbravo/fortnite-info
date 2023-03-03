import React from 'react'
import "../styles/ItemNews.scss";

const ItemNews = ( { noticia } ) => {
  return (
    <div className='ItemNews'>
      <div className='item-new-image'>
        <img src={noticia.image} alt={noticia.tabTitle}/>
      </div>
      <div className='item-new-content'>
        <h3 className='new-title'>{noticia.title}</h3>
        <h4 className='new-subtitle'>{noticia.tabTitle}</h4>
        <p className='new-description'>{noticia.body}</p>
      </div>
    </div>
  )
}

export default ItemNews