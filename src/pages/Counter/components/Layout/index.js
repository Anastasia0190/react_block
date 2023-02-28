import CounterView from "../CounterView";

const Layout = ({
  countValue,
  valueDescription,
  handleIncrement,
  handleReset,
  handleDecrement,
}) => {
  return (
    <div>
      <CounterView
        counterValue={countValue}
        valueDescription={valueDescription}
        handleIncrement={handleIncrement}
        handleReset={handleReset}
        handleDecrement={handleDecrement}
      />
    </div>
  );
};

export default Layout;
