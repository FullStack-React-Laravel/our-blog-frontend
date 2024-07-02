export default function Spinner({ height = "min-h-96" }) {
  return (
    <div className={`grid place-content-center bg-transparent ${height}`}>
      <span className="loader"></span>
    </div>
  );
}
