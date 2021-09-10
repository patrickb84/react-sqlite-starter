import CoverTitle from "./Cover.Title";

const CoverPanel = () => {
  return (
    <div className="bg-dark h-100 d-flex align-items-center justify-content-center text-light py-5">
      <div className="text-center py-5">
        <i className="fad fa-transporter-2 fa-3x" />
        <CoverTitle />
        <hr className="my-4 mx-5" />
        <small className="text-muted">by Patrick J. Bradshaw</small>
      </div>
    </div>
  );
};

export default CoverPanel;
