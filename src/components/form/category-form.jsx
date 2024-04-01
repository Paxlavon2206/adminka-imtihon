import React from 'react';
import { useForm } from 'react-hook-form';
import Input from '../input/input';
export const CategoryForm = ({ submit, initialValue }) => {
  const { handleSubmit, register, reset } = useForm();
  const onSubmit = (data) => {
    submit(data);
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}
        className="items-center p-5 rounded-lg bg-white" >
        <div>
          <h2 className="text-[25px] font-bold mb-4">Создать категорию</h2>
          <div>
            <Input
              {...register('title', { required: true })}
              type="text"
              className="bg-inputIn mb-5 py-3 px-3 w-full rounded-lg"
              name="title"
              placeholder="Title"
              defaultValue={initialValue?.title}
            />
          </div>
          <div>
            <Input
              {...register('img', { required: true })}
              type="text"
              className="bg-inputIn mb-5 py-3 px-3 w-full rounded-lg"
              name="img"
              placeholder="Img url"
              defaultValue={initialValue?.img}
            />
          </div>

          <button type="submit" className="bg-secondary py-2 px-8 text-white rounded-lg">
          Сохранить
          </button>
        </div>
      </form>
    </div>
  );
};
