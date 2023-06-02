import { Formik, Form } from "formik";
import CustomTextField from "./CustomTextField";

const Dashboard = () => {
  const selectOptions = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  return (
    <Formik
      initialValues={{ selectedOption: "" }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form>
        <CustomTextField
          inputLabel="Select an option"
          select
          selectOptions={selectOptions}
          name="selectedOption"
        />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default Dashboard;
