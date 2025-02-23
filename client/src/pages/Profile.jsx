import { Button } from "../Common/ui/button";
import { useRef, useState } from "react";
import { supabase } from "../supabase";

const Profile = () => {
  const storedUser = localStorage.getItem("googleUser");
  const user = storedUser ? JSON.parse(storedUser) : null;
  const fileRef = useRef(null);

  const [file, setFile] = useState(undefined);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [preview, setPreview] = useState(user?.photo || null);
  const [isUploaded, setIsUploaded] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      const objectUrl = URL.createObjectURL(selectedFile);
      setPreview(objectUrl);
      setIsUploaded(false);
    }
  };

  const handleUpload = async () => {
    if (!file) return;
    setUploading(true);
    setUploadProgress(0);

    try {
      const fileExt = file.name.split(".").pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${user.email}/${fileName}`;

      const { data, error } = await supabase.storage
        .from("imageStorage")
        .upload(filePath, file, {
          onUploadProgress: (progress) => {
            const percent = (progress.loaded / progress.total) * 100;
            setUploadProgress(Math.round(percent));
          },
        });

      if (error) throw error;

      const {
        data: { publicUrl },
      } = supabase.storage.from("imageStorage").getPublicUrl(filePath);

      const updatedUser = {
        ...user,
        photo: publicUrl,
      };
      localStorage.setItem("googleUser", JSON.stringify(updatedUser));

      setIsUploaded(true);
      setFile(undefined);
      alert("Profile picture updated successfully!");
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Error uploading image. Please try again.");
    } finally {
      setUploading(false);
      setUploadProgress(0);
    }
  };

  return (
    <div className="flex flex-col max-w-fit mx-auto p-3  items-center justify-center mt-10 gap-4">
      <div className="flex flex-col gap-10">
        <h1 className="text-3xl text-center font-semibold">Profile</h1>
        <form className="flex flex-col gap-3">
          <input
            onChange={handleFileChange}
            type="file"
            className="hidden"
            ref={fileRef}
            accept="image/*"
          />
          <div className="relative flex justify-center">
            <img
              src={preview || user?.avatar}
              className="h-24 w-24 rounded-full object-cover cursor-pointer self-center"
              alt="profile_image"
              onClick={() => fileRef.current.click()}
            />
            {uploading && (
              <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black bg-opacity-50">
                <span className="text-white font-bold">{uploadProgress}%</span>
              </div>
            )}
          </div>

          {file && !uploading && !isUploaded && (
            <Button
              variant="secondary"
              type="button"
              onClick={handleUpload}
              className="w-full"
            >
              Upload New Photo
            </Button>
          )}

          <input
            type="text"
            id="username"
            placeholder="Username"
            className="border p-3 rounded-xl"
          />
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="border p-3 rounded-xl"
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="border p-3 rounded-xl"
          />
          <Button variant="secondary">Update</Button>
        </form>
      </div>
      <div className="flex text-red-600 font-medium justify-between w-full">
        <span className="hover:cursor-pointer hover:font-bold hover:underline">
          Delete Account
        </span>
        <span className="hover:cursor-pointer hover:font-bold hover:underline">
          Sign Out
        </span>
      </div>
    </div>
  );
};

export default Profile;
