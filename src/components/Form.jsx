import React from "react";
import Input from '../common-components/Input';
import "./Form.css"

class Form extends React.Component {
    render() {
        return (
            <aside>
                <h2>Insira novos leads</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet at sed deleniti corrupti rerum vitae similique, molestiae dolore, non eum voluptate, minus esse laborum totam illum natus veniam velit ab?

                </p>

                <form>
                    <Input 
                        id="nome"
                        label="Nome Completo:"    
                        placeholder ="Ex.: Teste"                
                    />
                    <Input 
                        id="nome"
                        label="Nome Completo:"    
                        placeholder ="Ex.: Teste"                
                    />
                    <Input 
                        id="nome"
                        label="Nome Completo:"    
                        placeholder ="Ex.: Teste"                
                    />
                    <button>Cadastrar</button>
                </form>
            </aside>
        );
    }
}


export default Form;