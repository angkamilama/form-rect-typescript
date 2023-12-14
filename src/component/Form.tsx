import { useState, ChangeEvent, FormEvent } from "react";

type DataType = {
  name: string;
};

function Form() {
  const [user, setUser] = useState<string>("");
  const [data, setData] = useState<DataType>({ name: "" });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setData({ ...data, name: user });
  };

  console.log(user, data);

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={user} onChange={onChange} />
      <button>submit</button>
    </form>
  );
}

export default Form;
