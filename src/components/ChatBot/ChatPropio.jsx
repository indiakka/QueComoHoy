import { Row, Col, Container, Button, Form, Spinner } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Configuration } from 'openai'
import { useState } from 'react'


const PARAMS = {
    temperature: 0.5,
    max_tokens: 256
}

const configuration = new Configuration({
    apiKey: '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'
})

function Chatpropio() {
    const [questionType, setQuestionType] = useState('general')
    const [cbResponse, setCbResponse] = useState('')
        const [userInput, setUserInput]= useState('')
        const [isLoading, setIsLoading]= useState(false)


const getInstructions = (qt, input) => {
    let prompt;
    switch (qt) {
        case 'general':
            break;
        case 'translate':
            break;
        default:
            prompt =input
    }
    return prompt
}

const handleSendData = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    console.log('form is submitted')
    const prompt = getInstructions(questionType, userInput)
    const endpoint = 'https://api.openai.com/v1/engines/text-davinci-003/completions'
    const body = { ...PARAMS, prompt }
    
    const response = await fetch(endpoint, {
        method: 'POST',
        headers:{
            Authorization: `Bearer ${configuration.apiKey}`
        },
        body: JSON.stringify(body)
    })

    const data = await response.json()
    console.log(data)
    setCbResponse(data.choices[0].text)
}

return (
    <Container className = 'mt-3' >
        <Row>
            {['general', 'translate'].map(el => {
                return (
                    <Col key={el}>
                        <Button variant='primary' onClick={() => setQuestionType(el)}>{el}</Button>
                    </Col>
                )
            })}
        </Row>
    
    <Form onSubmit={handleSendData}>
            <Form.Control type='text' value={userInput}
            onChange={e => setUserInput(e.target.value)}/>
            <Button variant='info' type='submit' className='mt-3'>Enviar</Button>
    </Form>
    <div className='mt-3'>
            {isLoading ? <Spinner/> : cbResponse ? cbResponse : 'Pregunta algo'}
            </div>
    </Container>
)}

export default Chatpropio