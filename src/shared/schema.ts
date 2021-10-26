import * as yup from 'yup';

export const rightholdersSchema = yup.array(
  yup.object().shape({
    id: yup.number().required(),
    share: yup
      .number()
      .min(1, 'Share must be positive value and greater than zero'),
  }),
);
