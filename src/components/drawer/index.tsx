type DrawerProps = {
  isOpen: "";
};

const Drawer = ({ isOpen, onClose, children }: any) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white rounded-lg p-4 w-full max-w-lg drawer-container">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">Edit Banner</h3>
              <button
                onClick={onClose}
                className="text-gray-600 hover:text-gray-800"
              >
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

export default Drawer;
