import { FunctionComponent, useState } from "react";
import styles from "./NewBug.module.css";

interface NewBugProps {
  bugAdded: Function;
}

const NewBug: FunctionComponent<NewBugProps> = (props) => {
  const [editMode, setEditMode] = useState<Boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [titlePresent, setTitlePresent] = useState<Boolean>(false);

  const toggleForm = () => {
    setEditMode(!editMode);
  };

  const addBug = () => {
    if (title) {
      props.bugAdded(title);
    }
    setTitle("");
    setTitlePresent(false);
    setEditMode(false);
  };

  const titleChanged = (e: any) => {
    // const title = e.target.value;
    const titleField = document.getElementById("bugTitle") as HTMLInputElement;
    const title = titleField.value;
    setTitle(title);
    setTitlePresent(title.length > 0);
  };

  return (
    <div className={styles.bugform}>
      {!editMode && (
        <button className={styles.addNewBtn} onClick={toggleForm}>
          Add New
        </button>
      )}
      {editMode && (
        <div>
          <input
            type="text"
            name="bugTitle"
            id="bugTitle"
            className={styles.bugtitle}
            onChange={titleChanged}
            placeholder="Enter bug title to save..."
          />
          <button className={styles.addNewBtn} onClick={addBug}>
            {titlePresent ? "Save" : "Cancel"}
          </button>
        </div>
      )}
    </div>
  );
};

export default NewBug;
