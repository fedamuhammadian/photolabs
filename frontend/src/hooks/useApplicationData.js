import { useReducer, useEffect } from "react";

const initialState = {
  photoData: [],
  topicData: [],
  isModalOpen: false,
  selectedPhoto: false,
  isFavorited: [],
};

function appReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_FAVOURITE":
      const photoId = action.payload;
      const isFavorited = state.isFavorited.includes(photoId);

      if (isFavorited) {
        return {
          ...state,
          isFavorited: state.isFavorited.filter((favouritePhotoId) => favouritePhotoId !== photoId),
        };
      } else {
        return {
          ...state,
          isFavorited: [...state.isFavorited, photoId],
        };
      }

    case "OPEN_MODAL":
      return {
        ...state,
        isModalOpen: true,
        selectedPhoto: action.payload,
      };

    case "CLOSE_MODAL":
      return {
        ...state,
        isModalOpen: false,
      };

    case "SET_PHOTO_DATA":
      return {
        ...state,
        photoData: action.payload,
      };

    case "SET_TOPIC_DATA":
      return {
        ...state,
        topicData: action.payload,
      };

    default:
      return state;
  }
}

function useApplicationData() {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const apiUrl = "http://localhost:8001/api";

  useEffect(() => {
    fetch(`${apiUrl}/photos`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "SET_PHOTO_DATA", payload: data });
      })
      .catch((error) => {
        console.error("Error fetching photos:", error);
      });
  }, []);

  useEffect(() => {
    fetch(`${apiUrl}/topics`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "SET_TOPIC_DATA", payload: data });
      })
      .catch((error) => {
        console.error("Error fetching topics:", error);
      });
  }, []);

  const fetchTopics = () => {
    fetch(`${apiUrl}/topics`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "SET_TOPIC_DATA", payload: data });
      })
      .catch((error) => {
        console.error("Error fetching topics:", error);
      });
  };

  const fetchPhotosByTopic = (topicId) => {
    fetch(`${apiUrl}/topics/photos/${topicId}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "SET_PHOTO_DATA", payload: data });
      })
      .catch((error) => {
        console.error("Error fetching photos:", error);
      });
  };

  const { photoData, topicData, isModalOpen, selectedPhoto, isFavorited } = state;

  const toggleFavourite = (photoId) => {
    dispatch({ type: "TOGGLE_FAVOURITE", payload: photoId });
  };

  const openModal = (photo) => {
    dispatch({ type: "OPEN_MODAL", payload: photo });
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return {
    photoData,
    topicData,
    isModalOpen,
    selectedPhoto,
    isFavorited,
    toggleFavourite,
    openModal,
    closeModal,
    fetchPhotosByTopic,
    fetchTopics,
  };
}

export default useApplicationData;