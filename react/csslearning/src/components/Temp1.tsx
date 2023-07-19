const myStyle = {
  color: "red",
  backgroundColor: "green",
};
type tempobject = {
  children: string;
};

function Temp1({ children }: tempobject) {
  return <h1 style={myStyle}>{children}</h1>;
}

export default Temp1;
