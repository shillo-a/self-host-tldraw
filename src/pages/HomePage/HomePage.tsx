import { uniqueId } from "@tldraw/tldraw";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { Editor } from "../../widgets";

const CreateSharedProjectButton = () => {
  const navigate = useNavigate();

  function handleStartMultiPlayerMode() {
    const id = uniqueId();
    navigate(`/shared/${id}`);
  }
  return (
    <Button
      sx={{ pointerEvents: "all", display: "flex" }}
      variant="contained"
      size="small"
      onClick={handleStartMultiPlayerMode}
    >
      Create shared project
    </Button>
  );
};

const HomePage = () => {
  return <Editor shareZone={<CreateSharedProjectButton />} />;
};

export default HomePage;
