import "./Temp2.css";

type tempobject = {
  children: string;
};

function Temp2({ children }: tempobject) {
  return <h2 className="tempCss">{children}</h2>;
}

export default Temp2;
