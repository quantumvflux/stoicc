import stoicc from "./../stoicc.svg";

export const Header = () => {
  return (
    <div>
      <header>
        <img src={stoicc} alt="stoicc logo" className="logo" />
        <h1 className="align-center">Stoicc</h1>
        <img src={stoicc} alt="stoicc logo" className="logo" />
      </header>
    </div>
  );
};
