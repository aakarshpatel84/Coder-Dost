/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const VideoAdd = ({
  dispatch,
  data,
  initalState,
  editableVideo,
  setEditableVideo,
}) => {
  const [text, setText] = useState(initalState);

  /* 
  const updatevVideo = (video) => {
       const index = data.findIndex((el) => el.id === video.id);
    const newVideos = [...data];
    newVideos.splice(index, 1, video);

    dispatch({ type: "UPDATE", payload: video });
    setData(newVideos);
  };
 */
  const handleAdd = (e) => {
    setText({ ...text, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const newData = {
      ...text,
      id: data[data.length - 1].id + 1,
      img: "https://unsplash.it/600/400",
    };

    if (editableVideo) {
      dispatch({ type: "UPDATE", payload: { ...editableVideo, ...text } });
      //   updatevVideo();
      setEditableVideo(!editableVideo);
    } else {
      // setData([...data, newData]);
      dispatch({ type: "ADD", payload: newData });
      console.log(text);
    }

    setText(initalState);
  };

  useEffect(() => {
    if (editableVideo) {
      setText(editableVideo);
      console.log("editableVideo: ", editableVideo);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editableVideo]);
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        name="title"
        placeholder="Title.."
        onChange={handleAdd}
        value={text.title}
      />
      <input
        type="text"
        name="views"
        placeholder="Views"
        onChange={handleAdd}
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
