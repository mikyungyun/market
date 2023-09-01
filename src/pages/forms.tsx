import { FieldErrors, useForm } from 'react-hook-form';

interface ILoginForms {
  name: string;
  email: string;
  password: string;
  errors: string;
}
function Forms() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch, // 하나의 필드 혹은 모든 필드를 watch할 수 있음
    setError, // 에러를 의도한 대로 설정할 수 있음
    setValue,
    reset, // form을 제출하고 form 전체를 reset하길 원할 때 사용
    resetField, // 특정한 field를 reset하길 원할 때
  } = useForm<ILoginForms>({
    mode: 'onChange',
  });
  const onValid = (data: ILoginForms) => {
    setError('errors', { message: 'error' });
    // reset();
    resetField('password');
  };
  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };

  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)}>
      <input
        {...register('name', {
          required: 'Name is required',
          maxLength: {
            message: 'The name should be less than 10 chars.',
            value: 10,
          },
        })}
        type="text"
        placeholder="Name"
      />
      {errors.name?.message}
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
        className={`${Boolean(errors.email) ? 'border-2 border-red-500' : ''}`}
      />
      {errors.email?.message}
      <input
        {...register('password', { required: 'Password is required' })}
        type="password"
        placeholder="Password"
      />
      <input type="submit" value="Create Account" />
      {/* 유저에게 form의 global error를 보여줌 */}
      {errors.errors?.message}
    </form>
  );
}

export default Forms;
