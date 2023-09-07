import cls from '@/libs/server/utils';
import { UseFormRegisterReturn } from 'react-hook-form';

interface IIput {
  label: string;
  name: string;
  kind?: 'text' | 'phone' | 'email';
  type: string;
  register?: UseFormRegisterReturn;
  required?: boolean;
}

function Input({
  label,
  name,
  kind = 'text',
  type,
  register,
  required = true,
}: IIput) {
  return (
    <div>
      <label className="text-sm font-medium text-gray-700" htmlFor={name}>
        {label}
      </label>
      {kind === 'text' ? (
        <input
          id={name}
          {...register}
          type={type}
          className={cls(
            'appearance-none w-full py-2 px-3 border border-gray-300',
            'rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500'
          )}
          required={required}
        />
      ) : null}
      {kind === 'phone' ? (
        <div className="flex rounded-md shadow-sm">
          <span className="flex items-center justify-center py-2 px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-sm text-gray-500 select-none">
            +82
          </span>
          <input
            id={name}
            {...register}
            type={type}
            className={cls(
              'appearance-none w-full py-2 px-3 border border-gray-300',
              'rounded-r-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500'
            )}
            required={required}
          />
        </div>
      ) : null}
    </div>
  );
}

export default Input;
