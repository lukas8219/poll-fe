import {Tag} from 'antd'

const ResultTag = ({ result }) => {


    return result === "APPROVED" ?
        <Tag color="green" key={result}>
            Votação Aprovada
        </Tag>
        : result === "REFUSED" ?
        <Tag color="red" key={result}>
            Votação Reprovada
        </Tag>
        :
        <Tag color="gray" key={result}>
            Votação em andamento
        </Tag>
}

export default ResultTag;