import { FieldErrors, useForm } from 'react-hook-form';

interface ILoginForms {
  name: string;
  email: string;
  password: string;
}
function Forms() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForms>();
  const onValid = (data: ILoginForms) => {};
  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };

  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)}>
      <input
        {...register('name', { required: 'Name is required' })}
        type="text"
        placeholder="Name"
      />
      <input
        {...register('email', {
          required: 'Email is required',
          validate: {
            notNaver: (value) => {
              return value.includes('@naver.com') ? 'Naver is not allowed' : '';
            },
          },
        })}
        type="email"
        placeholder="Email"
      />
      {errors.email?.message}
      <input
        {...register('password', { required: 'Password is required' })}
        type="password"
        placeholder="Password"
      />
      <input type="submit" value="Create Account" />
    </form>
  );
}

export default Forms;
