import "./Form.css";

import TextField from "../TextField";
import DropdownList from "../DropdownList";
import Button from "../Button";
import { useState } from "react";
import { ICollaborator } from "../../shared/interfaces/ICollaborator";

interface FormProps {
  beRegisterCollaborator: (collaborator: ICollaborator) => void;
  squads: string[];
}

const Form = (props: FormProps) => {
  const [name, setName] = useState("");

  const [role, setRole] = useState("");

  const [image, setImage] = useState("");

  const [squad, setSquad] = useState("");

  const [date, setDate] = useState("");

  const onSave = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.beRegisterCollaborator({
      name,
      role,
      image,
      squad,
      date
    });
    setName("");
    setRole("");
    setImage("");
    setSquad("");
    setDate("")
  };

  return (
    <section className="form">
      <form onSubmit={onSave}>
        <h2>fill in the data to create the collaborator's card</h2>
        <TextField
          required={true}
          label="Name"
          placeholder="type your name"
          value={name}
          beChanged={(name) => setName(name)}
        />
        <TextField
          required={true}
          label="Role"
          placeholder="type your role"
          value={role}
          beChanged={(role) => setRole(role)}
        />
        <TextField
          required={true}
          label="Image"
          placeholder="enter image address "
          value={image}
          beChanged={(image) => setImage(image)}
        />
        <TextField
          required={true}
          label="Register date"
          placeholder=""
          value={date}
          beChanged={(value) => setDate(value)}
          type="date"
        ></TextField>
        <DropdownList
          required={true}
          label="squad"
          itens={props.squads}
          value={squad}
          beChanged={(squad) => setSquad(squad)}
        />
        <Button children="Create card" />
      </form>
    </section>
  );
};

export default Form;
