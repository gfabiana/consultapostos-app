import './App.css';

import {Home} from "./Home";
import {BuscaPostoMaisProx} from "./BuscaPostoMaisProx";
import {CadastroDeAvaliacao} from './CadastroDeAvaliacao';
import {CadastroDePreco} from './CadastroDePreco';
import {CriacaoDePosto} from './CriacaoDePosto';
import {ListaPostosCadastrados} from './ListaPostosCadastrados';
import {TipoDeCombustivel} from './TipoDeCombustivel';
import {Navigation} from './Navigation';
import {logo} from './logo';

import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
       <img src={logo} alt="Logo" />
 
       <h3 className="m-3 d-flex justify-content-center">
         Consulta Postos
       </h3>
       <Navigation/>

       <Routes>
         <Route path='/' component={Home} exact/>
         <Route path='/buscaposto' component={BuscaPostoMaisProx}/>
         <Route path='/avaliacao' component={CadastroDeAvaliacao}/>
         <Route path='/preco' component={CadastroDePreco}/>
         <Route path='/posto' component={CriacaoDePosto}/>
         <Route path='listapostos' component={ListaPostosCadastrados}/>
         <Route path='/tipocombustivel' component={TipoDeCombustivel}/>
       </Routes>
       <p></p>
       <p>Mussum Ipsum, cacilds vidis litro abertis. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. A ordem dos tratores não altera o pão duris. Atirei o pau no gatis, per gatis num morreus. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.</p>
       <p>Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. Leite de capivaris, leite de mula manquis sem cabeça. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum.</p> 
       <p>Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Cevadis im ampola pa arma uma pindureta. Interagi no mé, cursus quis, vehicula ac nisi. Viva Forevis aptent taciti sociosqu ad litora torquent.</p>
       <p>Paisis, filhis, espiritis santis. Copo furadis é disculpa de bebadis, arcu quam euismod magna. Detraxit consequat et quo num tendi nada. In elementis mé pra quem é amistosis quis leo.</p>
       <p>Per aumento de cachacis, eu reclamis. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Pra lá , depois divoltis porris, paradis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.</p>
    </div>
    </BrowserRouter>
  );
}

export default App;
