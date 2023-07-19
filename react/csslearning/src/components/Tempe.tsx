import "./Temp3.css";

type tempobject = {
  children: string;
};

function Temp3({ children }: tempobject) {
  return <h2 className="tempCss3">{children}</h2>;
}

export default Temp3;
