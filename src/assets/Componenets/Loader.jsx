import "./Loader.scss";

export default function Loader() {
  return (
    <div className="loader-wrapper">
      <div className="loader">
        <span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </span>

        <div className="base">
          <span></span>
          <div className="face"></div>
        </div>
      </div>

      <div className="longfazers">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
