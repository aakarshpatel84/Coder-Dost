import { useState } from "react";
import Data from "../../data.json";
import "./Video.css";
import VideoAdd from "../VideoAdd/VideoAdd";

const VideoList = () => {
  const [data, setData] = useState(Data.videoData);
  const [editableVideo, setEditableVideo] = useState(null);

  const handleDelete = (id) => {
    setData(data.filter((el) => el.id !== id));
  };

  const handleEdit = (id) => {
    setEditableVideo(data.find((el) => el.id === id));
  };

  const updatevVideo = (video) => {
    const index = data.findIndex((el) => el.id === video.id);
    const newVideos = [...data];
    newVideos.splice(index, 1, video);
    setData(newVideos);
  };

  return (
    <>
      <VideoAdd
        setData={setData}
        data={data}
        editableVideo={editableVideo}
        setEditableVideo={setEditableVideo}
        updateVideo={updatevVideo}
      />
      <div className="video-list-grid">
        {data?.map((el) => (
          <div className="video-list-loop-div" key={el.id}>
            <img src={el.img} alt="" />
            <p>
              {el.title} <span>views.{el.views}</span>
            </p>
            <button
              className="video-list-delete-btn"
              onClick={() => handleDelete(el.id)}
            >
              ❌
            </button>

            <button
              style={{
                border: "none",
                backgroundColor: " rgba(0, 0, 0, 0.036)",
                color: "white",
                fontSize: "20px",
              }}
              className="video-list-edit-btn"
              onClick={() => handleEdit(el.id)}
            >
              📝
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default VideoList;
