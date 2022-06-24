import './App.css';
import { useState } from 'react'
import { TextField, Button, Box } from '@mui/material';
import { useForm } from "react-hook-form";
import Selector from './components/Selector/Selector';
import RadioButtons from './components/RadioButtons/RadioButtons';
import Checkbox from './components/CheckboxField/CheckboxField';
import NameField from './components/NameField/NameField';
import EmailField from './components/EmailField/EmailField';
import LastNameField from './components/LastNameField/LastNameField';
import PasswordField from './components/PasswordField/Password';
import TextArea from './components/TextArea/TextArea';
import CheckboxField from './components/CheckboxField/CheckboxField';
import Modal from './components/UI/Modal/Modal';
import DateField from './components/DateField/DateField';
import Text from './components/Text/Text';

function App() {
  const { register, handleSubmit, getValues, control, reset } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      textArea: '',
      select: '',
      date: '05.24.2022',
      checkbox: null,
      radio: '',
      firstNameSecond: '',
      lastNameSecond: '',
      emailSecond: '',
      passwordSecond: '',
      textAreaSecond: '',
      selectSecond: '',
      checkboxSecond: '',
      radioSecond: '',
      dateSecond: '',
      text: ''
    },
    // mode: 'onBlur',
  });
  const [keyword, setKeyword] = useState([
    {
      id: 1,
      order: 1,
      field: <NameField control={control} name={'firstName'} />,
      name: 'firstName',
    },
    {
      id: 2,
      order: 2,
      field: <LastNameField control={control} name={'lastName'} />,
      name: 'lastName'
    },
    {
      id: 3,
      order: 3,
      field: <EmailField control={control} name={'email'} />,
      name: 'email',
    },
    {
      id: 4,
      order: 4,
      field: <PasswordField control={control} name={'password'} />,
      name: 'password'
    },
    {
      id: 5,
      order: 5,
      field: <CheckboxField control={control} name={'checkbox'} />,
      name: 'checkbox',
    },
    {
      id: 6,
      order: 6,
      field: <RadioButtons control={control} name={'radio'} />,
      name: 'radio button'
    },
    {
      id: 7,
      order: 7,
      field: <TextArea control={control} name={'textArea'} />,
      name: 'textarea'
    },
    {
      id: 8,
      order: 8,
      field: <Selector control={control} name={'select'} />,
      name: 'select'
    },
    {
      id: 9,
      order: 9,
      field: <DateField control={control} name={'date'} />,
      name: 'date'
    }
  ])
  const [status, setStatus] = useState(null)
  const [show, setShow] = useState(false)
  const [result, setResult] = useState(null)
  const [event, setEvent] = useState(null)
  const [currentField, setCurrentField] = useState(null)
  const [fieldName, setFieldName] = useState(null)
  const [id, setId] = useState(10)


  const submitHandler = (data) => {
    window.alert('Данные успешно отправлены')
    reset()
  }
  const changeHandler = (e) => {
    setFieldName(e.target.value);
    setEvent(e.target);
  }

  const addField = () => {
    if (fieldName === 'first name' || fieldName === 'First name' || fieldName === 'Firstname' || fieldName === 'FirstName') {
        const check = keyword.some(item => item.name === 'firstNameSecond');
        if (check) {
          setStatus('Допустимо лишь одно такое поле')
        } else {
          setId(id + 1);
          const field = {
            id: id,
            order: id,

            field: <NameField control={control} name={'firstNameSecond'} />,
            name: 'firstNameSecond',
          }
          keyword.push(field)
        }
    }if (fieldName === 'text' || fieldName === 'Text' || fieldName === 'TEXT') {
        const check = keyword.some(item => item.name === 'text');
        if (check) {
          setStatus('Допустимо лишь одно такое поле')
        } else {
          setId(id + 1);
          const field = {
            id: id,
            order: id,

            field: <Text control={control} name={'text'} />,
            name: 'text',
          }
          keyword.push(field)
      }
    } else if (fieldName === 'last name' || fieldName === 'Last name' || fieldName === 'Lastname' || fieldName === 'LastName') {
      
        const check = keyword.some(item => item.name === 'lastNameSecond');
        if (check) {
          setStatus('Допустимо лишь одно такое поле')
        } else {
          setId(id + 1);
          const field = {
            id: id,
            order: id,

            field: <LastNameField control={control} name={'lastNameSecond'} />,
            name: 'lastNameSecond'
          }
          keyword.push(field)
        }
    } else if (fieldName === 'email' || fieldName === 'Email' || fieldName === 'Mail') {
      
        const check = keyword.some(item => item.name === 'emailSecond');
        if (check) {
          setStatus('Допустимо лишь одно такое поле')
        } else {
          setId(id + 1);
          const field = {
            id: id,
            order: id,

            field: <EmailField control={control} name={'emailSecond'} />,
            name: 'emailSecond',
          }
          keyword.push(field)
        }
    } else if (fieldName === 'password' || fieldName === 'Password') {
        const check = keyword.some(item => item.name === 'passwordSecond');
        if (check) {
          setStatus('Допустимо лишь одно такое поле')
        } else {
          setId(id + 1);
          const field = {
            id: id,
            order: id,

            field: <PasswordField control={control} name={'passwordSecond'} />,
            name: 'passwordSecond'
          }
          keyword.push(field)
        }

    } else if (fieldName === 'checkbox' || fieldName === 'Checkbox' || fieldName === 'Check box' || fieldName === 'check box') {

     
        const check = keyword.some(item => item.name === 'checkboxSecond');
        if (check) {

          setStatus('Допустимо лишь одно такое поле')
        } else {
          setId(id + 1);
          const field = {
            id: id,
            order: id,

            field: <CheckboxField control={control} name={'checkboxSecond'} />,
            name: 'checkboxSecond',
          }
          keyword.push(field)
        }
    } else if (fieldName === 'radio button' || fieldName === 'Radio button' || fieldName === 'RadioButton') {
        const check = keyword.some(item => item.name === 'radio button second');
        if (check) {
          setStatus('Допустимо лишь одно такое поле')
        } else {
          setId(id + 1);
          const field = {
            id: id,
            order: id,

            field: <RadioButtons control={control} name={'radioSecond'} />,
            name: 'radio button second'
          }
          keyword.push(field)
        }

    } else if (fieldName === 'textarea' || fieldName === 'Textarea' || fieldName === 'TextArea') {

        const check = keyword.some(item => item.name === 'textAreaSecond');
        if (check) {
          setStatus('Допустимо лишь одно такое поле')
        } else {
          setId(id + 1);
          const field = {
            id: id,
            order: id,

            field: <TextArea control={control} name={'textAreaSecond'} />,
            name: 'textAreaSecond'
          }
          keyword.push(field)
        }

    } else if (fieldName === 'select' || fieldName === 'Select') {

        const check = keyword.some(item => item.name === 'selectSecond');
        if (check) {
          setStatus('Допустимо лишь одно такое поле')
        } else {
          setId(id + 1);
          const field = {
            id: id,
            order: id,

            field: <Selector control={control} name={'selectSecond'} />,
            name: 'selectSecond'
          }
          keyword.push(field)
        }

    } else if (fieldName === 'date' || fieldName === 'Date') {
      
        const check = keyword.some(item => item.name === 'dateSecond');
        if (check) {
          setStatus('Допустимо лишь одно такое поле')
        } else {
          setId(id + 1);
          const field = {
            id: id,
            order: id,

            field: <DateField control={control} name={'dateSecond'} />,
            name: 'dateSecond'

          }
          keyword.push(field)
        }
    }
    event.value = '';
    setTimeout(() => {
      setStatus(null)
    }, 2000)
  }
  const deleteItem = (id) => {
    const result = keyword.filter(item => item.id !== id)
    setKeyword(result)

  }
  const dragStartHandler = (e, item) => {
    // console.log(`drag`, item);
    setCurrentField(item)

  }
  const dragEndHandler = (e) => {

  }
  const dragOverHandler = (e) => {
    e.preventDefault();
  }
  const dropHandler = (e, item) => {
    e.preventDefault();
    setKeyword(keyword.map((field) => {
      if(field.id === item.id){
        return {...field, order: currentField.order}
      }
      if(field.id === currentField.id){
        return {...field, order: item.order}
      }
      return field
    }))
  }
  const sortField = (a, b) => {
    if(a.order > b.order){
      return 1;
    }else{
      return -1;
    }
  }

  return (
    <div className="App">
      <Box noValidate component='form' onSubmit={handleSubmit(submitHandler)} sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        {
          keyword.sort(sortField).map((item) => {
            return <Box
              draggable={true}
              onDragStart={(e) => dragStartHandler(e, item)}
              onDragLeave={(e) => dragEndHandler(e)}
              onDragEnd={(e) => dragEndHandler(e)}
              onDragOver={(e) => dragOverHandler(e)}
              onDrop={(e) => dropHandler(e, item)}
              fullWidth
              key={item.id}>
              {item.field}
              {item.id > 9 && <button style={{ border: 'unset', color: 'white', background: 'red', marginTop: '10px' }} onClick={() => deleteItem(item.id)}>x</button>}
            </Box>
          })
        }
        <Button type='submit' variant="contained" sx={{ margin: '1rem 0', width: '90%' }} color='primary'>Submit</Button>
      </Box>

      <Box sx={{ display: 'flex', width: '100%' }}>
        <TextField onChange={(e) => changeHandler(e)} placeholder='Field name' />
        <Button onClick={addField} color='primary' variant='contained'>Add field</Button>
      </Box>
      {status && <div style={{ color: 'red' }}>{status}</div>}

      {/* {show && <Modal show={show} close={() => setShow(false)} data={result} />} */}


    </div>
  );
}

export default App;
