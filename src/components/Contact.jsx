import "../css/Contact.css";
import { useForm } from "@formspree/react";
import { useEffect, useRef } from "react";

function Contacts() {
  const [state, handleSubmit] = useForm("xzzdvpnr");
  const formRef = useRef(null); // Référence pour le formulaire

  useEffect(() => {
    if (state.succeeded) {
      window.confirm("✅ Merci! Votre message est envoyé.");
      formRef.current.reset(); // Effacer le formulaire
    }
  }, [state.succeeded]);
  

  return (
    <section className="section_contacts">
      <h2>Contacts</h2>
      {/* Icon Divider */}
      <div className="lines-star">
        <div className="line"></div>
        <div><i className="fas fa-star"></i></div>
        <div className="line"></div>
      </div>

      <form id="contactForm" ref={formRef} onSubmit={handleSubmit}>
        <div className="form-elem">
          <input className="input" id="name" name="name" type="text" placeholder=" " required />
          <label htmlFor="name">Nom</label>
        </div>

        <div className="form-elem">
          <input className="input" id="email" name="email" type="email" placeholder=" " required />
          <label htmlFor="email">Email</label>
        </div>

        <div className="form-elem">
          <input className="input" id="phone" name="phone" type="tel" placeholder=" " required />
          <label htmlFor="phone">Tel</label>
        </div>

        <div className="form-elem">
          <textarea className="input" id="message" name="message" required placeholder=" "></textarea>
          <label htmlFor="message">Message</label>
        </div>

        <button className="button_send" type="submit" disabled={state.submitting}>
          Envoyer
        </button>
      </form>
    </section>
  );
}

export default Contacts;
