import NewAccountForm from "../components/NewAccountForm/NewAccountForm";

const AddNewCardPage: React.FC<any> = (props) => {
  return <NewAccountForm handleSubmit={props.handleSubmit}/>
};

export default AddNewCardPage;
