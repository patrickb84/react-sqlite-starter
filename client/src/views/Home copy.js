import CoverPanel from "../components/Cover.Panel";
import FirstPanel from "../components/First.Panel";
import my_room from "../content/images/PXL_20210909_054609372.jpg";

const Home = () => {
  return (
    <div className="h-100 d-flex justify-content-between">
      <div className="w-50 h-100" style={{ position: "fixed" }}>
        <CoverPanel />
      </div>
      <div className="w-50 ms-auto">
        <FirstPanel />
      </div>
    </div>
  );
};

export default Home;
