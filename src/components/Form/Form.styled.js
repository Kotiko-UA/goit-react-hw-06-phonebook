import { styled } from 'styled-components';
import { ErrorMessage, Form, Field } from 'formik';
export const Error = styled(ErrorMessage)`
  font-size: 16px;
  color: red;
`;
export const FormEl = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
`;
export const Button = styled.button`
  padding: 8px;
  display: block;
  background-color: #fff;
  border: 2px solid blueviolet;
  border-radius: 8px;
`;
export const Input = styled(Field)`
  margin-left: 8px;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 18px;
`;
