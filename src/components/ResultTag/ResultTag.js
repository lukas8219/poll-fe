import {Tag} from 'antd'

const ResultTag = ({ result }) => {

    const options = {
        APPROVED: <Tag color='green' key={result}> Votação Aprovada </Tag>,
        REFUSED: <Tag color='red' key={result}>Votação Reprovada</Tag>,
        TIE: <Tag color='purple' key={result}> Votação empatada </ Tag>,
        OCCURRING:<Tag color="gray" key={result}> Votação em andamento</Tag>
    }
    return options[result] ? options[result] : <p> Erro </p>;

}

export default ResultTag;