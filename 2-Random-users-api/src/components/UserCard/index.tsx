import "./usercard.css";

interface Props {
  name: string;
  surname: string;
  picture: string;
}

export default function UserCard({ name, surname, picture }: Props) {
  return (
    <div className="div-card">
      <h1 className="h1-card">
        {name} {surname}
      </h1>
      <img className="pic-card" src={picture} alt="foto" />
    </div>
  );
}
