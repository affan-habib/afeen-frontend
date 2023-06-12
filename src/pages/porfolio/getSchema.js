import * as Yup from "yup";

const getSchema = () => {
  const validationSchema = Yup.object().shape({
    field1: Yup.string().required("Field 1 is required"),
    field2: Yup.boolean().required("Field 2 is required"),
    field3: Yup.string().when("field2", {
      is: true,
      then: Yup.string().required("Field 3 is required"),
    }),
    field4: Yup.number().required("Field 4 is required"),
    field5: Yup.string(),
  });

  const initialValues = {
    field1: "",
    field2: false,
    field3: "",
    field4: 0,
    field5: "",
  };

  return { validationSchema, initialValues };
};

export default getSchema;
