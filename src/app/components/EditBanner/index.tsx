import { useEditBanner, useGetAdBanner } from "@/app/store/queries";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import AdBanner from "../Banner";
import "./EditBanner.css";
import { DEFAULT_IMAGE, SilderImageData } from "./constants";
import Drawer from "../drawer";

const EditAdBanner = ({ isDrawerOpen, toggleDrawer, bannerId }: any) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [cta, setCta] = useState("");
  const [image, setImage] = useState(DEFAULT_IMAGE);

  const { mutate: updatedData } = useEditBanner();
  const { data } = useGetAdBanner();

  const handleSubmit = () => {
    const data = { title, description, id: bannerId, cta, image };
    updatedData(data);
    toggleDrawer();
  };
  const handleClick = (img: string) => {
    setImage(img);
  };

  useEffect(() => {
    const id = data?.find((i) => i.id === bannerId);
    if (id) {
      setTitle(id.title);
      setDescription(id.description);
      setCta(id.cta);
      setImage(id.image);
    }
  }, [bannerId, data]);
  return (
    <>
      <Toaster position="top-right" />
      <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer}>
        <div className="grid gap-4 py-4">
          <AdBanner
            title={title}
            description={description}
            cta={cta}
            image={image}
            background={data?.[0]?.background || ""}
            isEdit={false}
            isStyle={true}
          />
          <div className="grid grid-cols-1 gap-2 pt-2">
            <label>Image</label>
            <div className="image-sider">
              {SilderImageData?.map((img) => (
                <button key={img} onClick={() => handleClick(img)}>
                  <img src={img} alt="alt" width={80} height={50} />
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-2">
            <label>Title</label>
            <input
              className="border rounded p-2"
              type="text"
              placeholder="Enter title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-1 gap-2">
            <label>Description</label>
            <input
              className="border rounded p-2"
              type="text"
              placeholder="Enter description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-1 gap-2">
            <label>Button Text</label>
            <input
              className="border rounded p-2"
              type="text"
              placeholder="Enter Button Text"
              value={cta}
              onChange={(e) => setCta(e.target.value)}
            />
          </div>
        </div>
        <div className="flex">
          <button
            type="submit"
            className="bg-green-500 text-white rounded p-2 w-full"
            onClick={handleSubmit}
          >
            Done
          </button>
        </div>
      </Drawer>
    </>
  );
};

export default EditAdBanner;
