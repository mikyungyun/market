import { FieldErrors, useForm } from 'react-hook-form';

interface ILoginForms {
  name: string;
  email: string;
  password: string;
}
function Forms() {
  const { register, watch, handleSubmit } = useForm<ILoginForms>();
  const onValid = (data: ILoginForms) => {};
  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };

  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)}>
      <input
        {...(register('name'), { required: true })}
        type="text"
        placeholder="name"
      />
      <input
        {...(register('email'), { required: true })}
        type="email"
        placeholder="email"
      />
      <input
        {...(register('password'), { required: true })}
        type="password"
        placeholder="password"
      />
      <input type="submit" value="Create Account" />
    </form>
  );
}

export default Forms;
