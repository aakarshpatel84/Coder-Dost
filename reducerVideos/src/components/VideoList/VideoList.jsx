/* eslint-disable no-case-declarations */
import { useReducer, useState } from "react";
import Data from "../../data.json";
import "./Video.css";
import VideoAdd from "./VideoAdd/VideoAdd";

const initalState = { title: "", views: "", id: null };
const VideoList = () => {
  const reducer = (state, { type, payload }) => {
    switch (type) {
      case "ADD":
        return [...state, payload];

      case "DELETE":
        return state.filter((el) => el.id !== payload);

      case "UPDATE":
        const index = state.findIndex((el) => el.id === payload.id);
        const newVideos = [...state];
        newVideos.splice(index, 1, payload);
        return newVideos;

      default:
        return state;
    }
  };
  // const [data, setData] = useState(Data.videoData);
  const [editableVideo, setEditableVideo] = useState(null);

  const [data, dispatch] = useReducer(reducer, Data.videoData);
  console.log("data: ", data);

  // Add Videos

  // Update Videos

  // Edit Videos
  const handleEdit = (id) => {
    setEditableVideo(data.find((el) => el.id === id));
  };

  // Submit Video

  return (
    <>
      <VideoAdd
        initalState={initalState}
        dispatch={dispatch}
        data={data}
        editableVideo={editableVideo}
        setEditableVideo={setEditableVideo}
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
              onClick={() => dispatch({ type: "DELETE", payload: el.id })}
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
