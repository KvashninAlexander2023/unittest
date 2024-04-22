type LessonsType = {
  title: string;
};

type AddressType = {
  street: {
    title: string;
  };
};

export type ManType = {
  name: string;
  age: number;
  lessons: Array<LessonsType>;
  address: AddressType;
};

type PropsType = {
  title: string;
  man: ManType;
};

const ManComponent = ({ title, man, ...props }: PropsType) => {
  // const {title} = props
  // const {name } = props.man

  return (
    <div>
      <h1>{title}</h1>
      <hr />
      <div>{man.name}</div>
    </div>
  );
};
