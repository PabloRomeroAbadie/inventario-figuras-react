import {useParams} from 'react-router-dom';
import { useAppContext } from '../store/Store';
import { useForm, useField, splitFormProps } from 'react-form';
import NameInput from '../components/NameInput';

const Edit = () => { 
     const params = useParams();
     const store = useAppContext();

     const {
      Form,
      meta: { isSubmitting, canSubmit }
    } = useForm({
      onSubmit: async (values, instance) => {
        // onSubmit (and everything else in React Form)
        // has async support out-of-the-box
        //await sendToFakeServer(values);
        console.log("Huzzah!", values);
        const {name} = values; 
        const item = store.getItem(params.id);
        item.name = name;
        store.updateItem(item);
      },
      debugForm: false
    });

    const item = store.getItem(params.id);

  return (
    <div>
        <Form>
            <NameInput inputValue={item.name} />
        </Form>
        {item.name}</div>
  )
}

export default Edit