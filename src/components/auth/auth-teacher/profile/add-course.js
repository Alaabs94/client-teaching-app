import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createAction } from "../../../../actions/course-action";
import axios from "axios";
import Swal from "sweetalert2";

const AddCourse = () => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.authTeacherReducer.id);
  const initialCourse = {
    name: "",
    teacher: id,
    description: "",
    field: "",
    picture: "",
    videos: [],
  };

  const [length, setLength] = useState(0);
  const [counter, setCounter] = useState(0);
  const [source, setSource] = useState([]);
  const [course, setCourse] = useState(initialCourse);

  const [pic, setPic] = useState(
    "https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg"
  );

  const handleFileChangeVideo = (event) => {
    setCounter(0);

    const file = event.target.files;
    // eslint-disable-next-line
    const chosenFiles = Array.prototype.slice.call(file);
    setLength(chosenFiles.length);
    const uploaded = [...source];

    chosenFiles.map((f, i) => {
      const formData = new FormData();
      formData.append("file", f);
      formData.append("upload_preset", "uuz0hdpn");

      axios
        .post("https://api.cloudinary.com/v1_1/dofqvjuui/upload", formData, {
          withCredentials: false,
        })

        .then(({ data }) => {
          console.log("data.url", data.url);
          uploaded.push(data.url);
          setCounter(i + 1);
        })
        .catch((err) => {
          console.log(err);
          setCounter(0);
          setLength(0);
        });
    });
    setSource(uploaded);
  };
  const handelInputChange = (event) => {
    const { name, value } = event.target;
    setCourse({ ...course, [name]: value });
  };

  const uploadImage = (e) => {
    e.preventDefault();
    const formData = new FormData();

    console.log(e.target.files[0]);
    formData.append("file", e.target.files[0]);
    formData.append("upload_preset", "uuz0hdpn");
    // axios.defaults.withCredentials = false;
    axios
      .post(
        "https://api.cloudinary.com/v1_1/dofqvjuui/image/upload",
        formData,
        { withCredentials: false }
      )
      .then(({ data }) => {
        console.log(data.url);
        setPic(data.url);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onSubmitForm = (event) => {
    event.preventDefault();
    course.picture = pic;
    course.videos = source;
    console.log("course", course);
    dispatch(createAction(course)).then((res) => {
      setCourse(initialCourse);
      Swal.fire("Good job!", "course is added successfully!", "success");
      setSource([]);
    });
  };

  return (
    <div className="modal-dialog">
      <div className="modal-content">
        <div
          className="modal-body"
          style={{
            backgroundColor: "white",
            padding: "40px",
            borderRadius: "10px",
          }}
        >
          <form>
            <div className="col-md-6 mb-4">
              <div className="file-field">
                <div className="d-flex justify-content-center file-form">
                  <label htmlFor="recipient-pic" className="col-form-label">
                    Add photo
                  </label>

                  <input
                    className="file-input-item"
                    type="file"
                    onChange={(e) => uploadImage(e)}
                    name="picture"
                  />

                  <img
                    src={pic}
                    id="imagePreview"
                    width="200px"
                    className="file-preview-item"
                    alt="pic2"
                  />
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="recipient-name" className="col-form-label">
                Name:
              </label>
              <input
                value={course.name}
                onChange={handelInputChange}
                name="name"
                type="text"
                className="form-control"
                id="recipient-name"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="recipient-name" className="col-form-label">
                Field:
              </label>
              <input
                type="text"
                className="form-control"
                value={course.field}
                onChange={handelInputChange}
                name="field"
                id="recipient-field"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message-text" className="col-form-label">
                Description:
              </label>
              <textarea
                className="form-control"
                value={course.description}
                onChange={handelInputChange}
                name="description"
                id="message-text"
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="formFileMultiple" className="form-label">
                <i className="fa fa-file-video-o me-2"></i> Add multiple videos
                to your course:
              </label>
              <input
                className="form-control"
                type="file"
                id="formFileMultiple"
                multiple
                onChange={handleFileChangeVideo}
                accept=".mov,.mp4"
              />
              {counter !== length ? (
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </form>
          <div className="modal-footer">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={(e) => onSubmitForm(e)}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddCourse;
