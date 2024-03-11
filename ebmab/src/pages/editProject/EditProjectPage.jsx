import { useState } from "react";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import axios from 'axios';

export function EditProjectPage() {
  const [image, setImage] = useState();
  const [text, setText] = useState();

  function handleImageUpload(img, text) {
    const formData = new FormData();
    formData.append('image', img);
    // formData.append('text', text);
    axios.post('https://ijdn7kor92.execute-api.eu-north-1.amazonaws.com/image', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
    })
    // .then(res => console.log(res.data))
    .catch(err => console.error('Error uploading image: ', err));
  }

  return (
    <>
      <Header />
      <main className="project">
        <h2 className="project__title">Projekt</h2>
        <section className="project__add">
          <input type="file" name="img" id="" onChange={(e) => setImage(e.target.files[0])}/>
          <textarea name="img-text" id="" cols="30" rows="10" onChange={(e) => setText(e.target.value)}></textarea>
        <button onClick={() => handleImageUpload(image, text)}>Lägg till bild</button>
        </section>
        <section className="project__card-container">
          
        </section>
      </main>
      <Footer />
    </>
  );
}
