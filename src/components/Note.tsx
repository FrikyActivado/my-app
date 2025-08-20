import { defaultAllowedOrigins } from "vite";

interface Props {
  texto: string;
}
function Note(props) {
  const { texto } = props;
  return (
    <>
      <div className="Note">
        <input type="checkbox" />
        <p>{texto}</p>
        <button>borrar</button>
      </div>
    </>
  );
}
export default Note;
