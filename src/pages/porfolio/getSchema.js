import * as Yup from "yup";

const getSchema = () => {
    const validationSchema = Yup.object().shape({
      field1: Yup.string(),
      field2: Yup.boolean(),
      field3: Yup.string(),
      field4: Yup.string().required("Field 4 is required")
    });
  
    const initialValues = {
      field1: "",
      field2: false,
      field3: "",
      field4: "",
      field5: "",
    };
  
    return { validationSchema, initialValues };
  };
  
  export default getSchema;
  