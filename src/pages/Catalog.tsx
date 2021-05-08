import React, { useState, useContext, ButtonHTMLAttributes } from 'react';
import { HttpHook } from '../hooks/http.hook';
import { Button, CatalogItem, Image, DescripionCatalog, ButtonDelete } from '../styles/styles';
import { AuthContext } from '../context/AuthContext';

interface Idata {
  image: string
  description: string,
  date: Date,
  owner: string
}

const Catalog = () => {
  const auth = useContext(AuthContext)
  const [imageData, setImageData] = useState<Array<Idata>>([])
  const { request } = HttpHook();

  const handleRender = async () => {
    try {
      const data = await request('/api/files/show', 'GET', null,
        { Autorization: `Bearer ${auth.userId}` })
      const response = await data
      return setImageData(response)
    } catch (e) {}
  }

  const handleDelete = async (e: any): Promise<void> => {
    try {
      const image = e.target.value
      const data = await request('/api/files/remove', 'POST', { image },
        { Autorization: `Bearer ${auth.userId}` })
      const response = await data
      return setImageData(response)
    } catch (e) { { console.log(e.message)}}
  }

  return (
    <>
      <Button className='upload' onClick={handleRender}>Показать каталог</Button>
      <div>
        {imageData.map((item, i) =>
          <CatalogItem key={i}>
            <ButtonDelete value={item.image} onClick={handleDelete}>X</ButtonDelete>
            <Image>
              <img src={item.image} alt="" />
            </Image>
            <DescripionCatalog><p>{item.description}</p><p>{item.date}</p></DescripionCatalog>
          </CatalogItem>
        )}
      </div>
    </>
  )
};

export default Catalog;
