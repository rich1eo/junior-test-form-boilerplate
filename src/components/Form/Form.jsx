import { useForm } from 'react-hook-form';
import { useState } from 'react';

import { useImages } from '../../hooks/useImages';
import { checkIfImageExists, getLocalDateString } from '../../utils/helpers';
import Checkbox from '../Checkbox/Checkbox';
import Textarea from '../TextArea/TextArea';

import {
  Actions,
  ErrorMessage,
  Input,
  InputContainer,
  Inputs,
  Label,
  StyledForm,
  SubmitButton,
} from './styles';

export const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { dispatch } = useImages();
  const [checked, setChecked] = useState(false);

  const onSubmit = (data) => {
    dispatch({
      type: 'NewImage',
      payload: {
        id: Math.floor(Math.random() * 1000),
        title: data.title,
        imgSrc: data.url,
        createdAt: getLocalDateString(new Date()),
      },
    });

    setChecked(false);
    reset();
  };

  const handleChangeChecked = () => {
    setChecked((state) => !state);
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Inputs>
        <InputContainer>
          <Label htmlFor="title">Название фото</Label>
          <Input
            {...register('title', { required: true })}
            id="title"
            $error={errors.title && true}
            placeholder="Yosemite National Park"
          />
          {errors.title && <ErrorMessage>Обязательно</ErrorMessage>}
        </InputContainer>
        <InputContainer>
          <Label htmlFor="url">Ссылка на фото</Label>
          <Input
            {...register('url', {
              required: true,
              validate: (value) => checkIfImageExists(value) === true,
            })}
            id="url"
            $error={errors.url && true}
            placeholder="https://plus.unsplash.com/premium_photo-1668063383022-8b8f82609305?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTN8fHxlbnwwfHx8fHw%3D"
          />
          {errors.url?.type === 'required' && (
            <ErrorMessage>Обязательно</ErrorMessage>
          )}
          {errors.url?.type === 'validate' && (
            <ErrorMessage>Изображение не рисуется 🙁</ErrorMessage>
          )}
        </InputContainer>
      </Inputs>
      <Inputs>
        <InputContainer>
          <Checkbox checked={checked} onChange={handleChangeChecked}>
            Есть описание
          </Checkbox>
          {checked && (
            <>
              <Textarea
                {...register('description', {
                  required: true,
                })}
                $error={errors.description && true}
              />
              {errors.description?.type === 'required' && (
                <ErrorMessage>Обязательно</ErrorMessage>
              )}
            </>
          )}
        </InputContainer>
      </Inputs>
      <Actions>
        <SubmitButton>Добавить фото</SubmitButton>
      </Actions>
    </StyledForm>
  );
};
