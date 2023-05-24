import "./index.css";

const Denomination = (props) => {
  const { item, withdrawCash } = props;
  //   console.log(item);
  const debitCash = () => {
    withdrawCash(item.value);
  };
  return (
    <li>
      <button onClick={debitCash} type="button" className="button">
        {item.value}
      </button>
    </li>
  );
};

export default Denomination;
