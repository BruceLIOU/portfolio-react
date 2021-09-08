import { useState } from "react";
import emailjs from "emailjs-com";
import env from "react-dotenv";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onChange = (value) => {
    console.log("Captcha value:", value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let nameS = document.getElementById("name");
    let emailS = document.getElementById("email");
    let messageS = document.getElementById("message");
    let formMess = document.querySelector(".formMessage");

    const isEmail = () => {
      let isMail = document.getElementById("not-mail");
      let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

      if (email.match(regex)) {
        isMail.style.display = "none";
        return true;
      } else {
        isMail.style.display = "block";
        isMail.style.animation = "dongle 1s";
        setTimeout(() => {
          isMail.style.animation = "none";
        }, 1000);
        return false;
      }
    };

    if (name && isEmail() && message) {
      nameS.classList.remove("red");
      emailS.classList.remove("red");
      messageS.classList.remove("red");

      formMess.innerHTML = "Message en cours d'envoi...";
      formMess.style.background = "#00c1ec";
      formMess.style.color = "#fff";
      formMess.style.opacity = "1";
      formMess.style.marginTop = "10px";
      formMess.style.padding = "6px";
      formMess.style.textAlign = "center";
      formMess.style.borderRadius = "4px";

      // voir doc : https://www.emailjs.com/docs/examples/reactjs/
      emailjs
        .send(
          // your service ID
          "service_9jg34iv",
          // your template ID
          "template_l6387pv",
          {
            name,
            email,
            message,
          },
          // your user ID (protégé par .env)
          env.REACT_APP_EMAILJS_KEY
        )
        .then(
          () => {
            formMess.style.background = "#07C600";
            formMess.style.color = "#fff";
            formMess.innerHTML =
              "Message envoyé ! Je vous recontacterai dès que possible.";

            document.getElementById("name").classList.remove("error");
            document.getElementById("email").classList.remove("error");
            document.getElementById("message").classList.remove("error");
            setName("");
            setEmail("");
            setMessage("");

            setTimeout(() => {
              formMess.style.opacity = "0";
            }, 5000);
          },
          (err) => {
            console.log(err);
            formMess.style.background = "rgb(253, 87, 87)";
            formMess.style.color = "#fff";
            formMess.style.marginTop = "10px";
            formMess.style.padding = "6px";
            formMess.style.textAlign = "center";
            formMess.style.borderRadius = "4px";
            formMess.innerHTML =
              "Une erreur s'est produite, veuillez réessayer.";
          }
        );
    } else {
      formMess.innerHTML = "Merci de remplir correctement les champs requis *";
      formMess.style.background = "rgb(253, 87, 87)";
      formMess.style.color = "#fff";
      formMess.style.opacity = "1";
      formMess.style.marginTop = "10px";
      formMess.style.padding = "6px";
      formMess.style.textAlign = "center";
      formMess.style.borderRadius = "4px";

      if (!name) {
        nameS.classList.add("error");
      }
      if (!email) {
        emailS.classList.add("error");
      }
      if (!message) {
        messageS.classList.add("error");
      }
    }
  };

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11508.16461873702!2d4.160053279458995!3d43.85497566051495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b424a4c75a5ccd%3A0x7d54ec6e63281620!2s24%20Rue%20de%20l&#39;%20Ancienne%20Cave%2C%2030730%20Montpezat!5e0!3m2!1sfr!2sfr!4v1630407794990!5m2!1sfr!2sfr"
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
          />
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                Adresse
              </h2>
              <p className="mt-1">
                24 rue de l'ancienne cave <br />
                30 730 Montpezat
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                Email
              </h2>
              <a
                href="mailto:contact@bruceliou.fr"
                className="text-indigo-400 leading-relaxed"
              >
                contact@bruceliou.fr
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                Mobile
              </h2>
              <p className="leading-relaxed">06.76.09.01.47</p>
            </div>
          </div>
        </div>
        <form
          method="POST"
          netlify="true"
          name="contact"
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
        >
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Contactez-moi
          </h2>
          <p className="leading-relaxed mb-5">
            Vous souhaitez en savoir plus sur moi ?<br></br>N'hésitez pas à me
            contacter !
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Nom *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setName(e.target.value)}
              required
              value={name}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email *
            </label>
            <span id="not-mail">Email non valide</span>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setEmail(e.target.value)}
              required
              value={email}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400"
            >
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e) => setMessage(e.target.value)}
              required
              value={message}
            />
          </div>
          <ReCAPTCHA
            sitekey="6LeeOTgcAAAAAEuLjE1uzhcLYrt_9SiNUCDW19e4"
            onChange={onChange}
          />
          <br />
          <input
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg g-recaptcha"
            type="submit"
            value="Envoyer"
            onClick={(e) => handleSubmit(e)}
          />
          <div className="formMessage"></div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
