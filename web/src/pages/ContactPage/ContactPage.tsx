// import { Link, routes } from '@redwoodjs/router'

  import {
    FieldError,
    Form,
    FormError,
    Submit,
    SubmitHandler,
    TextAreaField,
    TextField,
    useForm,

  } from '@redwoodjs/forms'

import { Metadata, useMutation } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'  /// mensaje de alerta al completas exitosamente el formulario


import {
  CreateContactMutation,
  CreateContactMutationVariables,
} from 'types/graphql'

// Llamamos la mutacion al front , nos basamos en el back contacts.sdl.ts y su servicio
// --------------------
const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`
// ------------------

interface FormValues {
  name: string
  email: string
  message: string
}




const ContactPage = () => {

const formMethods= useForm()

  const [create,{loading,error} ]= useMutation<  //mejorar la forma (mensajes de carga y error)
    CreateContactMutation,
    CreateContactMutationVariables
  >(CREATE_CONTACT , {onCompleted: ()=> {           /// mensaje de alerta al completas exitosamente el formulario
    toast.success(('Gracias por la subida'))       /// mensaje de alerta al completas exitosamente el formulario
    formMethods.reset()                             // para resetear el formulario al ingresarlo
  }})




  const onSubmit: SubmitHandler<FormValues> = (data) => {

    // console.log(data)
    create({ variables: { input: data } })

    //funcion equivalente______________________________
    // create({
    //   variables: {
    //     input: {
    //       name: 'Rob',
    //       email: 'rob@redwoodjs.com',
    //       message: 'I love Redwood!',
    //     },
    //   },
    // })
    ///_______________________________________________
  }


  return (
    <>
      <Metadata title="Contact" description="Contact page" />

      <Toaster />
      {///MENSAJE toaster al entrar en formulario
      }

      <h1>ContactPage</h1>

      <Form onSubmit={onSubmit} config={{ mode: 'onBlur' }} error={error}>
       <FormError error={error} wrapperClassName="form-error" />

        <label htmlFor="name">Name</label>
        <br />
        <TextField
          name="name"
          validation={{ required: true

          }}
          errorClassName="error"
        />
        <FieldError name="name"  className="error"/>
        <br />



        <label htmlFor="email">Email</label>
        <br />
        <TextField
          name="email"
          validation={{
            required: true,

            ///----------- la validacion se hace en el back (services/contacts.tsx)
            // pattern: {
            //   value: /^[^@]+@[^.]+\..+$/,
            //   message: 'Please enter a valid email address',
            // },
          }}
          errorClassName="error"

        />

        <FieldError name="email" className="error" />




        <br />
        <label htmlFor="message">Message</label>
        <br />
        <TextAreaField
          name="message"
          validation={{ required: true }}
          errorClassName="error" />
        <FieldError name="message" className="error" />
        <br /><br />


        {//--------
        ///// Loading para que gestionar como se hace el guardado mientras se carga
        }
        <Submit disabled={loading}>Save</Submit>


      </Form>

      <p>
        Find me in <code>./web/src/pages/ContactPage/ContactPage.tsx</code>
      </p>
      {/*
          My default route is named `contact`, link to me with:
          `<Link to={routes.contact()}>Contact</Link>`
      */}
    </>
  )
}

export default ContactPage
