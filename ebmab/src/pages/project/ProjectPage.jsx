import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { Card } from '../../components/card/Card';
import axios from 'axios';
import './style.scss';
import { useEffect, useState } from "react";

export function ProjectPage() {
  const [images, setImages] = useState();

  useEffect(() => {
    axios.get('https://ijdn7kor92.execute-api.eu-north-1.amazonaws.com/images')
    .then(res => setImages(res.data.images))
    .catch(err => console.error('Error getting images', err));

  }, []);

  console.log('images', images);
  return (
    <section className="project-page">
      <Header />
      <main className="project">
        <h2 className="project__title">Projekt</h2>
        <section className="project__card-container">
          {
            images && images.map((image, i) => <Card key={i} data={image} />)
          }
        </section>
      </main>
      <Footer />
    </section>
  );
}
