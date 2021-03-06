const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark">
      <div className="container">
        <p className="text-light">
          App desenvolvido por{" "}
          <a
            href="https://github.com/fernandocandidodesiqueirajunior"
            target="_blank"
            rel="noreferrer"
          >
            Fernando Candido
          </a>
        </p>
        <p className="text-light">
          <small>
            <strong>Semana Spring React</strong>
            <br />
            Evento promovido pela escola DevSuperior, criado por Fernando Candido:{" "}
            <a
              href="https://www.linkedin.com/in/fernando-candido-109ba5216/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
          </small>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
