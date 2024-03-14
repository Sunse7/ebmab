import { useState } from "react";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { Button } from '../../components/button/Button';
import { Card } from '../../components/card/Card';
import { useEffect } from "react";
import axios from 'axios';
import './style.scss';

export function EditProjectPage() {
  const [image, setImage] = useState();
  const [text, setText] = useState();
  const [images, setImages] = useState();

  useEffect(() => {
    axios.get('https://ijdn7kor92.execute-api.eu-north-1.amazonaws.com/images')
    .then(res => setImages(res.data.images))
    .catch(err => console.error('Error getting images', err));

  }, [images]);

  async function handleImageUpload(img, text) {
    if (!setImage) {
      return alert('Välj en bild');
    }

    const encodedText = btoa(text); //Encode text to presserve å ä ö

    const headers = new Headers();
    headers.append('text-data', encodedText); 

    await fetch('https://ijdn7kor92.execute-api.eu-north-1.amazonaws.com/image', {
      method: 'POST',
      headers,
      body: img
    });   
  }

  async function handleDelete() {

  }

  return (
    <>
      <Header />
      <main className="edit">
        <h2 className="edit__title">Lägg till projekt</h2>
        <section className="edit__add">
          <input type="file" name="img" id="img" onChange={(e) => setImage(e.target.files[0])}/>
          <textarea name="img-text" id="" cols="30" rows="5" placeholder="Skriv en rad om projektet" onChange={(e) => setText(e.target.value)}></textarea>
        <Button handleClick={() => handleImageUpload(image, text)} text='Skicka' />
        </section>
        <section className="edit__card-container">
          {
            images && images.map((image, i) => <Card key={i} data={image} isEdit={true} onClick={handleDelete}/>)
          }
        </section>
      </main>
      <Footer />
    </>
  );
}
