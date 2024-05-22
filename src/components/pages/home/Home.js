import "./Home.css";
import BtnProjeto from "./BtnProjeto";
import imageHome from "../../../img/savings.svg";

function Home() {
  return (
    <div className="divHome">
      <h1>
        Bem vindo ao <span className="fundoPreto">Costs</span>
      </h1>
      <p className="descricaoHome">
        Comece a gerenciar os seus projetos agora mesmo!
      </p>
      <BtnProjeto />
      <img src={imageHome} alt="ImagemHome" className="imageHome" />
    </div>
  );
}

export default Home;
