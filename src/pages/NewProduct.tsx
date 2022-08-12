import { memo, useEffect, useRef, useState } from "react";
//components
import Layout from "../components/Layout";
import InputField from "../components/InputField";
import { MdClose, MdDriveFolderUpload } from "react-icons/md";
//style
import "../styles/pages/newProduct.scss";

const NewProduct = () => {
  const [img, setImg] = useState<File | null>(null);

  const [tags, setTags] = useState<string[]>([]);

  const tagRef = useRef({} as HTMLInputElement);

  const addTag = () => {
    if (tagRef.current.value) {
      //prevent duplicate tag
      setTags((prev) => [...new Set([...prev, tagRef.current.value])]);
    }
  };

  useEffect(() => {
    if (tagRef.current.value) {
      tagRef.current.value = "";
      tagRef.current.focus();
    }
  }, [tags, tagRef.current.value]);

  const removeTag = (tag: string) => {
    setTags((prev) => prev.filter((t) => t !== tag));
  };

  const handleImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImg(null);
    const image = e.target.files?.[0];

    if (!image) {
      alert("لطفا یک تصویر انتخاب کنید");
      return;
    }
    if (!image.type.includes("image")) {
      alert("فایل انتخابی باید عکس باشد");
      return;
    }
    setImg(image);
  };

  return (
    <Layout>
      <div className="new-page">
        <h3 className="title">اضافه کردن محصول جدید</h3>
        <div className="bottom">
          <div className="left">
            <img
              src={
                img
                  ? URL.createObjectURL(img)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt="user"
              className="image"
            />
          </div>
          <div className="right">
            <form>
              <div className="form-input">
                <label htmlFor="file">
                  تصویر
                  <MdDriveFolderUpload className="icon" />
                </label>
                <input
                  type="file"
                  onChange={handleImgChange}
                  id="file"
                  style={{ display: `none` }}
                />
              </div>
              <InputField
                as="input"
                label="عنوان"
                type="text"
                name="title"
                placeholder="عنوان دوره را وارد کنید"
              />
              <InputField
                as="input"
                label="قیمت"
                type="number"
                name="price"
                placeholder="قیمت را وارد کنید"
              />
              <InputField
                as="textarea"
                label="توضیحات"
                name="body"
                placeholder="توضیحات را وارد کنید"
              />
              <div className="form-tag">
                <div className="form-input">
                  <label>تگ ها</label>
                  <input
                    ref={tagRef}
                    type="text"
                    placeholder="تگ را وارد کنید"
                  />
                </div>
                <button onClick={addTag} type="button">
                  اضافه کردن تگ
                </button>
              </div>
              <TagContainer tags={tags} removeTag={removeTag} />
              <button type="submit">ایجاد</button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NewProduct;

const TagContainer = memo(
  ({
    tags,
    removeTag,
  }: {
    tags: string[];
    removeTag: (tag: string) => void;
  }) => {
    return (
      <div className="tags-container">
        {tags?.map((tag) => (
          <div key={tag} className="tag">
            <span>{tag}</span>
            <MdClose className="icon" onClick={() => removeTag(tag)} />
          </div>
        ))}
      </div>
    );
  }
);