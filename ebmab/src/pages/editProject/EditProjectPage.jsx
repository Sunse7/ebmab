import { useState } from "react";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { Button } from "../../components/button/Button";
import { Card } from "../../components/card/Card";
import { useEffect } from "react";
import axios from "axios";
import "./style.scss";

export function EditProjectPage() {
  const [image, setImage] = useState();
  const [text, setText] = useState();
  const [images, setImages] = useState();
  const [responseText, setResponseText] = useState(false);

  useEffect(() => {
    axios
      .get("https://ijdn7kor92.execute-api.eu-north-1.amazonaws.com/images")
      .then((res) => setImages(res.data.images))
      .catch((err) => console.error("Error getting images", err));
  }, []);

  async function handleImageUpload(img, text) {
    if (!setImage) {
      return alert("Välj en bild");
    }

    const encodedText = btoa(text); //Encode text to presserve å ä ö
    const token = localStorage.getItem('jwtToken');

    const headers = new Headers();
    headers.append("text-data", encodedText);
    headers.append("Authorization", `Bearer ${token}`);

    const response = await fetch(
      "https://ijdn7kor92.execute-api.eu-north-1.amazonaws.com/image",
      {
        method: "POST",
        headers,
        body: img,
      }
    );
    if (!response.ok) {
      setResponseText(<p className="error">Något gick fel vid uppladdningen,<br /> testa logga in igen</p>);
    } else if (response.ok) {
      setResponseText(<p className="response">Din bild är nu uppladdad</p>)
    }
  }

  async function handleDelete(id) {
    try {
      await fetch(
        "https://ijdn7kor92.execute-api.eu-north-1.amazonaws.com/image",
        {
          method: "DELETE",
          body: JSON.stringify({ id: id }),
        }
      );
    } catch (err) {
      console.error("Error: ", err);
    }
  }

  return (
    <section className="edit-page">
      <Header />
      <main className="edit">
        <h2 className="edit__title">Lägg till projekt</h2>
        <section className="edit__add">
          <input
            type="file"
            name="img"
            id="img"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <textarea
            name="img-text"
            id=""
            cols="30"
            rows="5"
            placeholder="Skriv en rad om projektet"
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          <Button
            handleClick={() => handleImageUpload(image, text)}
            text="Skicka"
          />
          { responseText }
        </section>
        <section className="edit__card-container">
          {images &&
            images.map((image, i) => (
              <Card
                key={i}
                data={image}
                isEdit={true}
                onClick={() => handleDelete(image.id)}
              />
            ))}
        </section>
      </main>
      <Footer />
    </section>
  );
}