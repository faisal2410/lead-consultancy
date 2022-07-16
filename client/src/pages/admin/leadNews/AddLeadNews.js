import React, { useEffect, useState } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import axios from "axios";
import DefaultLayout from "../../../components/nav/Header";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
function AddNews() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading , setLoading]=useState(false) 
  useEffect(() => {
    console.log(convertToRaw(editorState.getCurrentContent()));
  }, [editorState]);
 const history = useHistory()
  const save = async () => {
    setLoading(true)
    try {
      const payload = {
        title,
        description,
        content: JSON.stringify(convertToRaw(editorState.getCurrentContent())),
        // postedBy: {
        //   userid : user._id , 
        //   email : user.email
        // },
      };
      await axios.post(`${process.env.REACT_APP_API}/addnewsitem`, payload);
      setLoading(false)
      toast('News added successfully' , 'success')
      history.push('/')
    } catch (error) {
      console.log(error);
      toast('Something went wrong' , 'error')
      setLoading(false)
    }
  };
  return (
    <DefaultLayout>
      {loading}
      <div className="container-fluid">   
      <div className="row">
      <div className="col-md-12">
      <h1 className="h1 text-center mt-5 ml-5">Add New Blog</h1>
      <div className="px-5 pt-5">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          className="border h-100 w-100 mb-2 form-control "
          placeholder="Title"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border w-100 form-control mb-2  "
          rows="4"
          placeholder=" Short Description"
        ></textarea>
      </div>
      <div className="border w-100 form-control ">
        <Editor
          editorState={editorState}
          onEditorStateChange={setEditorState}
          editorClassName="draft-editor"
          placeholder=" Details Blog"
        />
      </div>

      <div className="d-flex justify-content-center  mt-5">
        
        <button
          className="px-5 py-1 bg-success lead border-0 text-white mb-2"
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

export default AddNews;
