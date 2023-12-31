/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./VideoAdd.css";

const initalState = { title: "", views: "", id: null };

const VideoAdd = ({
  setData,
  data,
  editableVideo,
  setEditableVideo,
  updateVideo,
}) => {
  const [text, setText] = useState(initalState);

  const handleChange = (e) => {
    setText({ ...text, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const newData = {
      ...text,
      id: data[data.length - 1].id + 1,
      img: "https://unsplash.it/600/400",
    };

    if (editableVideo) {
      updateVideo({ ...editableVideo, ...text });
      setEditableVideo(!editableVideo);
    } else {
      setData([...data, newData]);
      console.log(text);
    }

    setText(initalState);
  };

  useEffect(() => {
    if (editableVideo) {
      setText(editableVideo);
      console.log("editableVideo: ", editableVideo);
    }
  }, [editableVideo]);

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        name="title"
        placeholder="Title.."
        onChange={handleChange}
        value={text.title}
      />
      <input
        type="text"
        name="views"
        placeholder="Views"
        onChange={handleChange}
        value={text.views}
      />
      <input
        style={{ cursor: "pointer" }}
        type="submit"
        disabled={!text.title}
        onClick={handleSubmit}
        value={editableVideo ? "📝" : "➕"}
      />
    </form>
  );
};

export default VideoAdd;
