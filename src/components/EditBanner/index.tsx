import { useEditBanner } from "@/app/store/queries";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Drawer = ({ isOpen, onClose, children }: any) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white rounded-lg p-4 w-full max-w-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Edit Profile</h2>
              <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
                &times;
              </button>
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

const EditAdBanner = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [title, setTitle ] = useState('')
  const [des, setDes] = useState('')

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const { mutate: updatedData } = useEditBanner();

  const handleSubmit = () => {
     const data = { title , des, id: "1" }
     updatedData(data)
     setIsDrawerOpen(false)
  }
  return (
    <>
    <Toaster position="top-right"/>
      <button onClick={toggleDrawer}>Edit Banner</button>
      <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer}>
        <div className="grid gap-4 py-4">
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
              value={des}
              onChange={(e) => setDes(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button type="submit" className="bg-blue-500 text-white rounded p-2" onClick={handleSubmit}>
            Save changes
          </button>
        </div>
      </Drawer>
    </>
  );
};

export default EditAdBanner;
