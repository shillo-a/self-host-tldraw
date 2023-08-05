import { Tldraw, track, useEditor } from "@tldraw/tldraw";
import "@tldraw/tldraw/tldraw.css";
import { useYjsStore } from "../../features";

import style from "./YjsEditor.module.css";
import { useNavigate } from "react-router-dom";

const HOST_URL = "ws://localhost:9999";

interface YjsEditorProps {
  roomId: string;
}
export default function YjsEditor({ roomId }: YjsEditorProps) {
  const navigate = useNavigate();

  const store = useYjsStore({
    roomId,
    hostUrl: HOST_URL,
  });

  return (
    <div className={style.tldraw__editor}>
      <Tldraw
        autoFocus
        store={store}
        shareZone={
          <>
            <NameEditor />
            <button
              onClick={() => navigate("/")}
              style={{ pointerEvents: "all", display: "flex" }}
            >
              На главную
            </button>
          </>
        }
      />
    </div>
  );
}

const NameEditor = track(() => {
  const editor = useEditor();

  const { color, name } = editor.user;

  return (
    <div style={{ pointerEvents: "all", display: "flex" }}>
      <input
        type="color"
        value={color}
        onChange={(e) => {
          editor.user.updateUserPreferences({
            color: e.currentTarget.value,
          });
        }}
      />
      <input
        value={name}
        onChange={(e) => {
          editor.user.updateUserPreferences({
            name: e.currentTarget.value,
          });
        }}
      />
    </div>
  );
});
