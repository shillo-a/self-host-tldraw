import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const HomePage = () => {
  const navigate = useNavigate();

  function handleStartMultiPlayerMode() {
    const uuid = uuidv4();
    navigate(`/shared/${uuid}`);
  }

  return (
    <div>
      <button onClick={handleStartMultiPlayerMode}>
        Create new sharable project
      </button>
    </div>
  );
};

export default HomePage;
