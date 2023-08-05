import { useParams } from "react-router-dom";
import { YjsEditor } from "../../widgets";

const RoomPage = () => {
  const { uuid } = useParams();

  if (!uuid) return <>Требуется uuid</>;

  return <YjsEditor roomId={uuid} />;
};

export default RoomPage;
