import { Form, Input, Icon, Button } from "./SearchBox.styled";
import { useState } from "react";
import Notiflix from 'notiflix';
import 'notiflix/src/notiflix.css';
import PropTypes from "prop-types";

export const SearchBox = ({ onSubmit }) => {
    const [value, setValue] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!value.trim()) return Notiflix.Notify.failure(`Fill the search field`);
        onSubmit(value)
        setValue("")
    }
  return (
      <Form onSubmit={handleSubmit}>
      <Button type="submit">
              <Icon />
        </Button>          
      <Input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </Form>
  );
};

SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired
}