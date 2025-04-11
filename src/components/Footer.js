import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  useEffect(() => {
    // Verifica se o Google Maps já está carregado
  }, []);

  return ( 
  <div className="page-inner-contentt">
     <div className="testimonialss">
           <div className="testimoniall"> 
              <p>"</p>
              <p>
              É muito importante para o colaborador que ele seja reconhecido pelo bom trabalho que faz.
              É simples: o reconhecimento gera engajamento e satisfação e isso resulta em produtividade.  
              </p>
              <p className="rating">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
              <p>Koba Lamine</p>
           </div>
           <div className="testimoniall">
              <p>"</p>
              <p>
              A prática do trabalho em equipe com respeito, lealdade, generosidade, empatia, transparência, 
              são fatores essenciais para uma conduta ética e vencedora.
              </p>
              <p className="rating">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
              <p>Jeff Dennys</p>
           </div>
           <div className="testimoniall">
              <p>"</p>
              <p>
              Você não precisa de incentivos pra buscar o que quer, nem de reconhecimento pra se sentir satisfeito
              pelo seu esforço, não espere gratidão, apenas dê o seu melhor.
              </p>
              <p className="rating">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
              <p>Monza Salah</p>
           </div>
        </div>
    
    <div>
      {/* Footer */}
      <footer>
        <div className="pager-inner-content content">
          <div className="download-options">
            <p>Baixe o nosso aplicativo  <br></br>
             Baixe o nosso aplicativo para Android e iOS</p>
            <div>
            <img src={`${process.env.PUBLIC_URL}/imagens/app-store.png`} alt="App Store download" />
              <img src={`${process.env.PUBLIC_URL}/imagens/play-store.png`} alt="Play Store download" />
            </div>
          </div>

          <div className="logo-footer">
            <h1 className="logoo">
            Nordeste<span>Burguer</span>
            </h1>
            <p>Tudo o que você precisa chegará até você.</p>
          </div>

          <div className="links">
            <h3>Links úteis</h3>
            <ul>
              <li>
                <Link to="/">Cupons</Link>
              </li>
              <li>
                <Link to="/">Blog posts</Link>
              </li>
              <li>
                <Link to="/">Políticas</Link>
              </li>
              <li>
                <Link to="/">Torne-se afiliado</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="pager-inner-content">
          <hr />
          <p className="copyright">
            Copyright 2006 - Koba Lamine - Todos Direitos Reservados.
          </p>
        </div>
      </footer>
    </div> 
    </div>
  );
}