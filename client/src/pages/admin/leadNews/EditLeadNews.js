import React, { useEffect, useState } from "react";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import axios from "axios";
import DefaultLayout from "../../../components/nav/Header";
import { toast } from "react-toastify";
import { useHistory, useParams } from "react-router-dom";
function EditNews() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  // const user = JSON.parse(localStorage.getItem("sheynews-user"));
  const params = useParams();

  const history = useHistory();
  const save = async () => {
    setLoading(true);
    try {
      const payload = {
        title,
        description,
        content: JSON.stringify(convertToRaw(editorState.getCurrentContent())),
        // postedBy: {
        //   userid: user._id,
        //   email: user.email,
        // },
        newsid : params.newsid
      };
      await axios.post(`${process.env.REACT_APP_API}/editnewsitem`, payload);
      setLoading(false);
      toast("News edited successfully", "success");
      history.push("/");
    } catch (error) {
      console.log(error);
      toast("Something went wrong", "error");
      setLoading(false);
    }
  };

  const getData = async () => {
    setLoading(true);
    try {
      const result = await axios.post(`${process.env.REACT_APP_API}/getnewsitembyid`, {
        newsid: params.newsid,
      });
      setTitle(result.data.title)
      setDescription(result.data.description)
      setEditorState(()=>EditorState.createWithContent(convertFromRaw(JSON.parse(result.data.content))))
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <DefaultLayout>
    <div className="container-fluid">
 
      <div className="row">
        <div className="col-md-12">
        {loading}
      <h1 className="h1 mt-5 ml-5 text-center">Edit Lead news</h1>
      <div className="px-2 pt-5">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          className="border  w-100   form-control"
          placeholder="Title"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border w-100  my-2  form-control"
          rows="5"
          placeholder="Description"
        ></textarea>
      </div>
      <div className="border px-2">
        <Editor
          editorState={editorState}
          onEditorStateChange={setEditorState}
          editorClassName="draft-editor"
        />
      </div>

      <div className="d-flex justify-content-center  pe-5 mt-2">
       
        <button
          className="px-5 py-1 bg-success border-0 text-white mb-2"
          onClick={save}
        >
          SAVE
        </button>
      </div>
        </div>
      </div>
    </div>
    
    </DefaultLayout>
  );
}

export default EditNews;
